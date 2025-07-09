package com.aithub.service;

import com.aithub.dto.GenerateLessonRequest;
import com.aithub.entity.LessonTemplate;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import okhttp3.*;
import okhttp3.sse.EventSource;
import okhttp3.sse.EventSourceListener;
import okhttp3.sse.EventSources;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;

/**
 * AI生成服务
 * 
 * @author AI Teaching Hub
 */
@Slf4j
@Service
public class AiService {
    
    @Value("${ai.deepseek.api-url}")
    private String apiUrl;
    
    @Value("${ai.deepseek.api-key}")
    private String apiKey;
    
    @Value("${ai.deepseek.model}")
    private String model;
    
    @Value("${ai.deepseek.temperature}")
    private double temperature;
    
    @Value("${ai.deepseek.max-tokens}")
    private int maxTokens;
    
    @Value("${ai.deepseek.timeout}")
    private int timeout;
    
    private final OkHttpClient client;
    
    public AiService() {
        this.client = new OkHttpClient.Builder()
                .connectTimeout(30, TimeUnit.SECONDS)
                .readTimeout(60, TimeUnit.SECONDS)
                .writeTimeout(60, TimeUnit.SECONDS)
                .build();
    }
    
    /**
     * 流式生成教案
     * 
     * @param request 生成请求
     * @param template 模板信息
     * @return SseEmitter
     */
    public SseEmitter generateLessonStream(GenerateLessonRequest request, LessonTemplate template) {
        SseEmitter emitter = new SseEmitter(60000L); // 60秒超时
        
        CompletableFuture.runAsync(() -> {
            try {
                String prompt = buildPrompt(request, template);
                callDeepSeekAPI(prompt, emitter);
            } catch (Exception e) {
                log.error("AI生成教案失败", e);
                try {
                    emitter.send(SseEmitter.event()
                            .name("error")
                            .data("生成失败：" + e.getMessage()));
                    emitter.complete();
                } catch (IOException ioException) {
                    log.error("发送错误消息失败", ioException);
                    emitter.completeWithError(ioException);
                }
            }
        });
        
        return emitter;
    }
    
    /**
     * 构建AI提示词
     */
    private String buildPrompt(GenerateLessonRequest request, LessonTemplate template) {
        String prompt = template.getAiPrompt();
        
        // 替换模板变量
        prompt = prompt.replace("{lesson_title}", request.getTitle());
        prompt = prompt.replace("{grade}", request.getGrade());
        prompt = prompt.replace("{subject}", request.getSubject());
        prompt = prompt.replace("{class_hours}", request.getDuration());
        
        // 添加额外要求
        if (request.getAdditionalRequirements() != null && !request.getAdditionalRequirements().trim().isEmpty()) {
            prompt += "\n\n额外要求：" + request.getAdditionalRequirements();
        }
        
        return prompt;
    }
    
    /**
     * 调用DeepSeek API
     */
    private void callDeepSeekAPI(String prompt, SseEmitter emitter) throws IOException {
        JSONObject requestBody = new JSONObject();
        requestBody.put("model", model);
        requestBody.put("stream", true);
        requestBody.put("temperature", temperature);
        requestBody.put("max_tokens", maxTokens);
        
        // 构建messages
        JSONObject systemMessage = new JSONObject();
        systemMessage.put("role", "system");
        systemMessage.put("content", "你是一位专业的教学设计专家，擅长制作高质量的教案。请根据用户提供的信息，生成结构清晰、内容详实、格式规范的教案。教案应该具有很强的实用性和可操作性。输出格式使用Markdown，确保层次分明、条理清楚。");
        
        JSONObject userMessage = new JSONObject();
        userMessage.put("role", "user");
        userMessage.put("content", prompt);
        
        requestBody.put("messages", new Object[]{systemMessage, userMessage});
        
        RequestBody body = RequestBody.create(
                requestBody.toJSONString(),
                MediaType.get("application/json; charset=utf-8")
        );
        
        Request request = new Request.Builder()
                .url(apiUrl)
                .header("Authorization", "Bearer " + apiKey)
                .header("Content-Type", "application/json")
                .post(body)
                .build();
        
        EventSource eventSource = EventSources.createFactory(client).newEventSource(request, new EventSourceListener() {
            @Override
            public void onOpen(EventSource eventSource, Response response) {
                log.info("AI生成连接建立成功");
                try {
                    emitter.send(SseEmitter.event()
                            .name("start")
                            .data("开始生成教案..."));
                } catch (IOException e) {
                    log.error("发送开始消息失败", e);
                }
            }
            
            @Override
            public void onEvent(EventSource eventSource, String id, String type, String data) {
                try {
                    if ("[DONE]".equals(data)) {
                        emitter.send(SseEmitter.event()
                                .name("end")
                                .data("教案生成完成"));
                        emitter.complete();
                        return;
                    }
                    
                    JSONObject responseData = JSONObject.parseObject(data);
                    if (responseData.containsKey("choices")) {
                        JSONObject choice = responseData.getJSONArray("choices").getJSONObject(0);
                        if (choice.containsKey("delta")) {
                            JSONObject delta = choice.getJSONObject("delta");
                            if (delta.containsKey("content")) {
                                String content = delta.getString("content");
                                emitter.send(SseEmitter.event()
                                        .name("content")
                                        .data(content));
                            }
                        }
                    }
                } catch (Exception e) {
                    log.error("处理AI响应失败", e);
                    try {
                        emitter.send(SseEmitter.event()
                                .name("error")
                                .data("处理响应失败：" + e.getMessage()));
                        emitter.complete();
                    } catch (IOException ioException) {
                        log.error("发送错误消息失败", ioException);
                        emitter.completeWithError(ioException);
                    }
                }
            }
            
            @Override
            public void onClosed(EventSource eventSource) {
                log.info("AI生成连接关闭");
                emitter.complete();
            }
            
            @Override
            public void onFailure(EventSource eventSource, Throwable t, Response response) {
                log.error("AI生成请求失败", t);
                try {
                    emitter.send(SseEmitter.event()
                            .name("error")
                            .data("生成失败：" + t.getMessage()));
                    emitter.complete();
                } catch (IOException e) {
                    log.error("发送错误消息失败", e);
                    emitter.completeWithError(e);
                }
            }
        });
    }
    
    /**
     * 非流式生成教案
     */
    public String generateLesson(GenerateLessonRequest request, LessonTemplate template) throws IOException {
        String prompt = buildPrompt(request, template);
        
        JSONObject requestBody = new JSONObject();
        requestBody.put("model", model);
        requestBody.put("stream", false);
        requestBody.put("temperature", temperature);
        requestBody.put("max_tokens", maxTokens);
        
        // 构建messages
        JSONObject systemMessage = new JSONObject();
        systemMessage.put("role", "system");
        systemMessage.put("content", "你是一位专业的教学设计专家，擅长制作高质量的教案。请根据用户提供的信息，生成结构清晰、内容详实、格式规范的教案。教案应该具有很强的实用性和可操作性。");
        
        JSONObject userMessage = new JSONObject();
        userMessage.put("role", "user");
        userMessage.put("content", prompt);
        
        requestBody.put("messages", new Object[]{systemMessage, userMessage});
        
        RequestBody body = RequestBody.create(
                requestBody.toJSONString(),
                MediaType.get("application/json; charset=utf-8")
        );
        
        Request request_api = new Request.Builder()
                .url(apiUrl)
                .header("Authorization", "Bearer " + apiKey)
                .header("Content-Type", "application/json")
                .post(body)
                .build();
        
        try (Response response = client.newCall(request_api).execute()) {
            if (!response.isSuccessful()) {
                throw new IOException("API请求失败: " + response.code() + " " + response.message());
            }
            
            String responseBody = response.body().string();
            JSONObject responseData = JSONObject.parseObject(responseBody);
            
            if (responseData.containsKey("choices")) {
                JSONObject choice = responseData.getJSONArray("choices").getJSONObject(0);
                if (choice.containsKey("message")) {
                    JSONObject message = choice.getJSONObject("message");
                    return message.getString("content");
                }
            }
            
            throw new IOException("无法从API响应中获取生成的内容");
        }
    }
}