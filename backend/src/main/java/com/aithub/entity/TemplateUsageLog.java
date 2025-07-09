package com.aithub.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * 模板使用记录实体类
 * 
 * @author AI Teaching Hub
 */
@Data
@EqualsAndHashCode(callSuper = false)
@TableName("template_usage_logs")
public class TemplateUsageLog {
    
    /**
     * 记录ID
     */
    @TableId(type = IdType.AUTO)
    private Long id;
    
    /**
     * 模板ID
     */
    private Long templateId;
    
    /**
     * 用户ID
     */
    private Long userId;
    
    /**
     * 生成的教案标题
     */
    private String lessonTitle;
    
    /**
     * 生成的内容
     */
    private String generatedContent;
    
    /**
     * 生成耗时（秒）
     */
    private BigDecimal generationTime;
    
    /**
     * 用户评分（1-5）
     */
    private Integer userRating;
    
    /**
     * 用户反馈
     */
    private String feedback;
    
    /**
     * 使用时间
     */
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;
}