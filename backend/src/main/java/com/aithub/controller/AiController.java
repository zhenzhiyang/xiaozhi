package com.aithub.controller;

import com.aithub.dto.ApiResponse;
import com.aithub.dto.GenerateLessonRequest;
import com.aithub.entity.LessonTemplate;
import com.aithub.service.AiService;
import com.aithub.service.LessonTemplateService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import javax.validation.Valid;
import java.util.List;

/**
 * AI生成控制器
 * 
 * @author AI Teaching Hub
 */
@Slf4j
@RestController
@RequestMapping("/ai")
@RequiredArgsConstructor
@Tag(name = "AI生成", description = "AI教案生成相关接口")
public class AiController {
    
    private final AiService aiService;
    private final LessonTemplateService templateService;
    
    /**
     * 流式生成教案
     */
    @PostMapping("/generate-lesson-stream")
    @Operation(summary = "流式生成教案", description = "使用服务端推送事件流式生成教案内容")
    public SseEmitter generateLessonStream(@Valid @RequestBody GenerateLessonRequest request) {
        try {
            log.info("开始流式生成教案: {}", request.getTitle());
            
            // 获取模板信息
            LessonTemplate template = templateService.getById(request.getTemplateId());
            if (template == null || template.getIsActive() != 1) {
                throw new RuntimeException("模板不存在或已禁用");
            }
            
            return aiService.generateLessonStream(request, template);
        } catch (Exception e) {
            log.error("流式生成教案失败", e);
            SseEmitter emitter = new SseEmitter();
            try {
                emitter.send(SseEmitter.event()
                        .name("error")
                        .data("生成失败：" + e.getMessage()));
                emitter.complete();
            } catch (Exception ex) {
                emitter.completeWithError(ex);
            }
            return emitter;
        }
    }
    
    /**
     * 生成教案
     */
    @PostMapping("/generate-lesson")
    @Operation(summary = "生成教案", description = "根据模板和参数生成教案内容")
    public ApiResponse<String> generateLesson(@Valid @RequestBody GenerateLessonRequest request) {
        try {
            log.info("开始生成教案: {}", request.getTitle());
            
            // 获取模板信息
            LessonTemplate template = templateService.getById(request.getTemplateId());
            if (template == null || template.getIsActive() != 1) {
                return ApiResponse.badRequest("模板不存在或已禁用");
            }
            
            String content = aiService.generateLesson(request, template);
            
            // 更新模板使用次数
            templateService.incrementUsageCount(request.getTemplateId());
            
            log.info("教案生成成功: {}", request.getTitle());
            return ApiResponse.success("教案生成成功", content);
        } catch (Exception e) {
            log.error("生成教案失败", e);
            return ApiResponse.error("生成失败：" + e.getMessage());
        }
    }
    
    /**
     * 获取模板列表
     */
    @GetMapping("/templates")
    @Operation(summary = "获取模板列表", description = "获取所有激活的教案模板")
    public ApiResponse<List<LessonTemplate>> getTemplates(
            @Parameter(description = "学科") @RequestParam(required = false) String subject,
            @Parameter(description = "年级") @RequestParam(required = false) String grade,
            @Parameter(description = "模板类型") @RequestParam(required = false) String templateType
    ) {
        try {
            List<LessonTemplate> templates = templateService.getActiveTemplates(subject, grade, templateType);
            return ApiResponse.success(templates);
        } catch (Exception e) {
            log.error("获取模板列表失败", e);
            return ApiResponse.error("获取模板列表失败：" + e.getMessage());
        }
    }
    
    /**
     * 获取模板详情
     */
    @GetMapping("/templates/{id}")
    @Operation(summary = "获取模板详情", description = "根据ID获取模板详细信息")
    public ApiResponse<LessonTemplate> getTemplate(@PathVariable Long id) {
        try {
            LessonTemplate template = templateService.getById(id);
            if (template == null || template.getIsActive() != 1) {
                return ApiResponse.notFound("模板不存在或已禁用");
            }
            return ApiResponse.success(template);
        } catch (Exception e) {
            log.error("获取模板详情失败", e);
            return ApiResponse.error("获取模板详情失败：" + e.getMessage());
        }
    }
    
    /**
     * 生成PPT（预留接口）
     */
    @PostMapping("/generate-ppt")
    @Operation(summary = "生成PPT", description = "根据教案内容生成PPT（功能开发中）")
    public ApiResponse<String> generatePpt(@RequestBody String lessonContent) {
        // TODO: 实现PPT生成功能
        return ApiResponse.error("PPT生成功能正在开发中");
    }
}