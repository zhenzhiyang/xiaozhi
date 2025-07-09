package com.aithub.service.impl;

import com.aithub.dao.LessonTemplateMapper;
import com.aithub.entity.LessonTemplate;
import com.aithub.service.LessonTemplateService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 教案模板服务实现类
 * 
 * @author AI Teaching Hub
 */
@Service
public class LessonTemplateServiceImpl extends ServiceImpl<LessonTemplateMapper, LessonTemplate> implements LessonTemplateService {
    
    @Override
    public List<LessonTemplate> getActiveTemplates(String subject, String grade, String templateType) {
        QueryWrapper<LessonTemplate> wrapper = new QueryWrapper<>();
        wrapper.eq("is_active", 1);
        
        if (subject != null && !subject.trim().isEmpty()) {
            wrapper.eq("subject", subject);
        }
        
        if (grade != null && !grade.trim().isEmpty()) {
            wrapper.eq("grade_level", grade);
        }
        
        if (templateType != null && !templateType.trim().isEmpty()) {
            wrapper.eq("template_type", templateType);
        }
        
        wrapper.orderByDesc("usage_count", "rating");
        
        return list(wrapper);
    }
    
    @Override
    public void incrementUsageCount(Long templateId) {
        LessonTemplate template = getById(templateId);
        if (template != null) {
            template.setUsageCount(template.getUsageCount() + 1);
            updateById(template);
        }
    }
    
    @Override
    public void updateRating(Long templateId, Integer rating) {
        // TODO: 根据用户评分更新模板评分（需要计算平均值）
        // 这里需要结合模板使用记录表来计算平均评分
    }
    
    @Override
    public List<LessonTemplate> getPopularTemplates(int limit) {
        QueryWrapper<LessonTemplate> wrapper = new QueryWrapper<>();
        wrapper.eq("is_active", 1);
        wrapper.orderByDesc("usage_count", "rating");
        wrapper.last("LIMIT " + limit);
        
        return list(wrapper);
    }
    
    @Override
    public List<LessonTemplate> searchTemplates(String keyword) {
        QueryWrapper<LessonTemplate> wrapper = new QueryWrapper<>();
        wrapper.eq("is_active", 1);
        wrapper.and(w -> w.like("template_name", keyword)
                .or().like("description", keyword)
                .or().like("tags", keyword));
        
        wrapper.orderByDesc("usage_count", "rating");
        
        return list(wrapper);
    }
}