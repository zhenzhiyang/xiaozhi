package com.aithub.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * 教案模板实体类
 * 
 * @author AI Teaching Hub
 */
@Data
@EqualsAndHashCode(callSuper = false)
@TableName("lesson_templates")
public class LessonTemplate {
    
    /**
     * 模板ID
     */
    @TableId(type = IdType.AUTO)
    private Long id;
    
    /**
     * 模板名称
     */
    private String templateName;
    
    /**
     * 学科
     */
    private String subject;
    
    /**
     * 年级
     */
    private String gradeLevel;
    
    /**
     * 模板类型
     */
    private String templateType;
    
    /**
     * 模板内容(JSON格式)
     */
    private String templateContent;
    
    /**
     * AI生成提示词
     */
    private String aiPrompt;
    
    /**
     * 模板描述
     */
    private String description;
    
    /**
     * 标签(逗号分隔)
     */
    private String tags;
    
    /**
     * 使用次数
     */
    private Integer usageCount;
    
    /**
     * 评分(1-5)
     */
    private BigDecimal rating;
    
    /**
     * 是否激活（0:未激活 1:激活）
     */
    private Integer isActive;
    
    /**
     * 创建者ID
     */
    private Long createdBy;
    
    /**
     * 创建时间
     */
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;
    
    /**
     * 更新时间
     */
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateTime;
    
    /**
     * 逻辑删除（0:未删除 1:已删除）
     */
    @TableLogic
    private Integer deleted;
}