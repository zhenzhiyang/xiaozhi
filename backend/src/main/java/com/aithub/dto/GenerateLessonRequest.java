package com.aithub.dto;

import lombok.Data;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

/**
 * AI生成教案请求DTO
 * 
 * @author AI Teaching Hub
 */
@Data
public class GenerateLessonRequest {
    
    /**
     * 模板ID
     */
    @NotNull(message = "模板ID不能为空")
    private Long templateId;
    
    /**
     * 课程标题
     */
    @NotBlank(message = "课程标题不能为空")
    private String title;
    
    /**
     * 年级
     */
    @NotBlank(message = "年级不能为空")
    private String grade;
    
    /**
     * 学科
     */
    @NotBlank(message = "学科不能为空")
    private String subject;
    
    /**
     * 课时
     */
    @NotBlank(message = "课时不能为空")
    private String duration;
    
    /**
     * 额外要求
     */
    private String additionalRequirements;
    
    /**
     * 重点内容
     */
    private String keyPoints;
    
    /**
     * 学生基础
     */
    private String studentLevel;
    
    /**
     * 特殊要求
     */
    private String specialRequirements;
}