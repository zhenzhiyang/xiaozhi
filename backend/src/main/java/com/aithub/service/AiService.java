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
        
        if (prompt == null || prompt.trim().isEmpty()) {
            // 如果模板没有AI提示词，使用默认提示词
            prompt = generateDefaultPrompt(request, template);
        }
        
        // 替换模板变量
        prompt = prompt.replace("{lesson_title}", request.getTitle());
        prompt = prompt.replace("{grade}", request.getGrade());
        prompt = prompt.replace("{subject}", request.getSubject());
        prompt = prompt.replace("{duration}", request.getDuration());
        prompt = prompt.replace("{class_hours}", request.getDuration());
        
        // 根据模板类型添加特定要求
        String templateType = template.getTemplateType();
        String additionalContext = getAdditionalContext(templateType, request);
        prompt += additionalContext;
        
        // 添加额外要求
        if (request.getAdditionalRequirements() != null && !request.getAdditionalRequirements().trim().isEmpty()) {
            prompt += "\n\n额外要求：" + request.getAdditionalRequirements();
        }
        
        log.info("最终AI提示词：\n{}\n", prompt);
        return prompt;
    }
    
    /**
     * 生成默认提示词
     */
    private String generateDefaultPrompt(GenerateLessonRequest request, LessonTemplate template) {
        return String.format(
            "请为%s%s《%s》生成一份%s的完整教案。\n\n" +
            "年级：%s\n" +
            "学科：%s\n" +
            "课时：%s\n\n" +
            "要求：\n" +
            "1. 内容完整详实，符合教学实际\n" +
            "2. 结构清晰，层次分明\n" +
            "3. 教学目标明确具体\n" +
            "4. 教学过程设计合理\n" +
            "5. 体现学生主体地位\n" +
            "6. 使用Markdown格式输出",
            request.getGrade(),
            request.getSubject(),
            request.getTitle(),
            template.getTemplateType(),
            request.getGrade(),
            request.getSubject(),
            request.getDuration()
        );
    }
    
    /**
     * 根据模板类型获取额外上下文
     */
    private String getAdditionalContext(String templateType, GenerateLessonRequest request) {
        StringBuilder context = new StringBuilder();
        
        context.append("\n\n【重要要求】");
        context.append("\n1. 必须严格按照模板结构生成教案");
        context.append("\n2. 内容要具体详实，避免空洞");
        context.append("\n3. 每个环节都要有具体的教学活动和师生互动");
        context.append("\n4. 时间分配要合理，符合").append(request.getDuration()).append("的课时安排");
        context.append("\n5. 语言要专业、规范，符合教育教学用语");
        
        switch (templateType) {
            case "课文阅读":
                context.append("\n6. 小学语文教案要注重朗读指导和语言文字训练");
                context.append("\n7. 要有生字词教学和句子赏析");
                break;
            case "计算教学":
                context.append("\n6. 数学教案要注重算理推导和思维过程");
                context.append("\n7. 练习设计要体现层次性");
                break;
            case "实验教学":
                context.append("\n6. 实验教案要注重科学探究过程");
                context.append("\n7. 要有具体的实验步骤和安全提醒");
                break;
            case "概念教学":
                context.append("\n6. 概念教案要注重概念的形成过程");
                context.append("\n7. 要有概念图和典型例题");
                break;
            case "单词教学":
                context.append("\n6. 英语教案要注重语言环境和交际运用");
                context.append("\n7. 要有语音训练和情境对话");
                break;
            case "古诗词教学":
                context.append("\n6. 古诗词教案要注重朗读、理解和鉴赏");
                context.append("\n7. 要有意境分析和情感体验");
                break;
            case "阅读理解":
                context.append("\n6. 阅读教案要注重阅读策略指导");
                context.append("\n7. 要有思维训练和批判性思考");
                break;
            case "实验探究":
                context.append("\n6. 科学教案要体现完整的探究过程");
                context.append("\n7. 培养学生的科学思维和探究能力");
                break;
            case "史料分析":
                context.append("\n6. 历史教案要注重史料实证能力");
                context.append("\n7. 培养学生的历史思维和批判精神");
                break;
            case "区域认知":
                context.append("\n6. 地理教案要注重区域特征和综合思维");
                context.append("\n7. 培养学生的人地协调观");
                break;
            case "议题式教学":
                context.append("\n6. 政治教案要注重价值辨析和现实联系");
                context.append("\n7. 培养学生的政治认同和公共参与");
                break;
            case "项目式学习":
                context.append("\n6. 项目教案要注重真实情境和深度学习");
                context.append("\n7. 培养学生的综合能力和创新思维");
                break;
            case "主题班会":
                context.append("\n6. 班会教案要注重情感体验和价值观培养");
                context.append("\n7. 要有具体的行动方案");
                break;
            default:
                context.append("\n6. 根据学科特点设计教学内容");
        }
        
        context.append("\n\n【输出格式要求】");
        context.append("\n1. 使用Markdown格式，层次分明");
        context.append("\n2. 每个部分都要有具体的标题和编号");
        context.append("\n3. 教学过程要分环节，每个环节都要有：");
        context.append("\n   - 时间分配");
        context.append("\n   - 教师活动");
        context.append("\n   - 学生活动");
        context.append("\n   - 设计意图");
        context.append("\n4. 要有具体的板书设计");
        context.append("\n5. 作业设计要有层次性");
        
        return context.toString();
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
        systemMessage.put("content", "你是一位经验丰富的特级教师，拥有20年教学经验，擅长制作高质量的教案。请根据用户提供的信息，生成专业、详实、可操作的教案。

【专业要求】
1. 严格按照提供的模板结构生成教案
2. 内容要具体详实，避免空洞套话
3. 教学活动设计要体现学生主体地位
4. 时间分配要科学合理，符合课时安排
5. 语言要专业规范，符合教育教学用语
6. 每个环节都要有具体的师生互动设计

【内容标准】
1. 教学目标：三维目标具体可测
2. 教学重难点：准确突出，有突破策略
3. 教学过程：环节完整，活动丰富
4. 教学方法：多样有效，体现新理念
5. 教学评价：多元全面，促进发展
6. 板书设计：简洁明了，突出重点
7. 作业设计：分层设计，拓展提升

【格式规范】
使用Markdown格式，层次分明，包含：
- 清晰的标题层级
- 具体的环节设计
- 详细的活动描述
- 合理的时间分配
- 专业的教学语言

请确保生成的教案具有很强的实用性和可操作性，可以直接用于课堂教学。");
        
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
                log.info("DeepSeek API连接建立成功");
                try {
                    emitter.send(SseEmitter.event()
                            .name("start")
                            .data("正在调用DeepSeek AI生成教案..."));
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
                        log.info("DeepSeek API调用完成");
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
                    log.error("处理DeepSeek API响应失败", e);
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
                log.info("DeepSeek API连接关闭");
                emitter.complete();
            }
            
            @Override
            public void onFailure(EventSource eventSource, Throwable t, Response response) {
                log.error("DeepSeek API请求失败", t);
                if (response != null) {
                    log.error("响应状态码: {}", response.code());
                    log.error("响应消息: {}", response.message());
                }
                
                try {
                    String errorMessage = "调用DeepSeek API失败：" + t.getMessage();
                    if (t.getMessage() != null && t.getMessage().contains("401")) {
                        errorMessage = "API密钥无效，请联系管理员";
                    } else if (t.getMessage() != null && t.getMessage().contains("timeout")) {
                        errorMessage = "API请求超时，请稍后重试";
                    } else if (t.getMessage() != null && t.getMessage().contains("Network")) {
                        errorMessage = "网络连接失败，请检查网络";
                    }
                    
                    emitter.send(SseEmitter.event()
                            .name("error")
                            .data(errorMessage));
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
        systemMessage.put("content", "你是一位经验丰富的特级教师，拥有20年教学经验，擅长制作高质量的教案。请根据用户提供的信息，生成专业、详实、可操作的教案。

【专业要求】
1. 严格按照提供的模板结构生成教案
2. 内容要具体详实，避免空洞套话
3. 教学活动设计要体现学生主体地位
4. 时间分配要科学合理，符合课时安排
5. 语言要专业规范，符合教育教学用语
6. 每个环节都要有具体的师生互动设计

【内容标准】
1. 教学目标：三维目标具体可测
2. 教学重难点：准确突出，有突破策略
3. 教学过程：环节完整，活动丰富
4. 教学方法：多样有效，体现新理念
5. 教学评价：多元全面，促进发展
6. 板书设计：简洁明了，突出重点
7. 作业设计：分层设计，拓展提升

【格式规范】
使用Markdown格式，层次分明，包含：
- 清晰的标题层级
- 具体的环节设计
- 详细的活动描述
- 合理的时间分配
- 专业的教学语言

请确保生成的教案具有很强的实用性和可操作性，可以直接用于课堂教学。");
        
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