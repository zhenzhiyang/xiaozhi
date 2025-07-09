package com.aithub.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * 教案实体类
 * 
 * @author AI Teaching Hub
 */
@Data
@EqualsAndHashCode(callSuper = false)
@TableName("lessons")
public class Lesson {
    
    /**
     * 教案ID
     */
    @TableId(type = IdType.AUTO)
    private Long id;
    
    /**
     * 教案标题
     */
    private String title;
    
    /**
     * 学科
     */
    private String subject;
    
    /**
     * 年级
     */
    private String grade;
    
    /**
     * 课时
     */
    private String duration;
    
    /**
     * 教案内容
     */
    private String content;
    
    /**
     * 使用的模板ID
     */
    private Long templateId;
    
    /**
     * 教案状态（DRAFT/PUBLISHED/DELETED）
     */
    private String status;
    
    /**
     * 创建者ID
     */
    private Long createdBy;
    
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
     * 查看次数
     */
    private Integer viewCount;
    
    /**
     * 分享次数
     */
    private Integer shareCount;
    
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