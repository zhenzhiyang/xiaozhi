package com.aithub.service;

import com.aithub.entity.LessonTemplate;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * 教案模板服务接口
 * 
 * @author AI Teaching Hub
 */
public interface LessonTemplateService extends IService<LessonTemplate> {
    
    /**
     * 获取活跃的模板列表
     */
    List<LessonTemplate> getActiveTemplates(String subject, String grade, String templateType);
    
    /**
     * 增加模板使用次数
     */
    void incrementUsageCount(Long templateId);
    
    /**
     * 更新模板评分
     */
    void updateRating(Long templateId, Integer rating);
    
    /**
     * 获取热门模板
     */
    List<LessonTemplate> getPopularTemplates(int limit);
    
    /**
     * 搜索模板
     */
    List<LessonTemplate> searchTemplates(String keyword);
}