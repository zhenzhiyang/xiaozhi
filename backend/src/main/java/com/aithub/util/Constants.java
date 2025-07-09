package com.aithub.util;

/**
 * 系统常量类
 * 
 * @author AI Teaching Hub
 */
public class Constants {
    
    /**
     * JWT相关常量
     */
    public static class JWT {
        public static final String TOKEN_PREFIX = "Bearer ";
        public static final String HEADER_NAME = "Authorization";
        public static final String CLAIM_KEY_USER_ID = "userId";
        public static final String CLAIM_KEY_USERNAME = "username";
        public static final String CLAIM_KEY_ROLE = "role";
    }
    
    /**
     * Redis缓存key前缀
     */
    public static class Redis {
        public static final String USER_PREFIX = "user:";
        public static final String TOKEN_PREFIX = "token:";
        public static final String TEMPLATE_PREFIX = "template:";
        public static final String LESSON_PREFIX = "lesson:";
        public static final String CAPTCHA_PREFIX = "captcha:";
        public static final long DEFAULT_EXPIRE = 3600; // 1小时
        public static final long TOKEN_EXPIRE = 86400; // 24小时
    }
    
    /**
     * 响应状态码
     */
    public static class ResponseCode {
        public static final int SUCCESS = 200;
        public static final int BAD_REQUEST = 400;
        public static final int UNAUTHORIZED = 401;
        public static final int FORBIDDEN = 403;
        public static final int NOT_FOUND = 404;
        public static final int INTERNAL_ERROR = 500;
    }
    
    /**
     * 用户角色
     */
    public static class Role {
        public static final String ADMIN = "ADMIN";
        public static final String TEACHER = "TEACHER";
        public static final String STUDENT = "STUDENT";
    }
    
    /**
     * 教案状态
     */
    public static class LessonStatus {
        public static final String DRAFT = "DRAFT";
        public static final String PUBLISHED = "PUBLISHED";
        public static final String DELETED = "DELETED";
    }
    
    /**
     * 模板类型
     */
    public static class TemplateType {
        public static final String LESSON = "LESSON";
        public static final String PPT = "PPT";
    }
    
    /**
     * 学科类型
     */
    public static class Subject {
        public static final String CHINESE = "语文";
        public static final String MATH = "数学";
        public static final String ENGLISH = "英语";
        public static final String PHYSICS = "物理";
        public static final String CHEMISTRY = "化学";
        public static final String BIOLOGY = "生物";
        public static final String HISTORY = "历史";
        public static final String GEOGRAPHY = "地理";
        public static final String POLITICS = "政治";
        public static final String SCIENCE = "科学";
    }
    
    /**
     * 年级类型
     */
    public static class Grade {
        public static final String PRIMARY = "小学";
        public static final String MIDDLE = "初中";
        public static final String HIGH = "高中";
    }
    
    /**
     * AI模型配置
     */
    public static class AI {
        public static final String DEEPSEEK_MODEL = "deepseek-chat";
        public static final double DEFAULT_TEMPERATURE = 0.7;
        public static final int DEFAULT_MAX_TOKENS = 4000;
        public static final int TIMEOUT = 60000; // 60秒
    }
    
    /**
     * 文件上传配置
     */
    public static class File {
        public static final String[] ALLOWED_IMAGE_TYPES = {"jpg", "jpeg", "png", "gif"};
        public static final String[] ALLOWED_DOCUMENT_TYPES = {"pdf", "doc", "docx", "ppt", "pptx"};
        public static final long MAX_SIZE = 10 * 1024 * 1024; // 10MB
    }
}