-- AI教案工具数据库初始化脚本
-- 使用现有数据库
USE ai_thub;

-- 用户表
CREATE TABLE IF NOT EXISTS users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT '用户ID',
    username VARCHAR(50) NOT NULL UNIQUE COMMENT '用户名',
    password VARCHAR(255) NOT NULL COMMENT '密码（加密存储）',
    email VARCHAR(100) UNIQUE COMMENT '邮箱',
    phone VARCHAR(20) COMMENT '手机号',
    nickname VARCHAR(100) COMMENT '昵称',
    avatar VARCHAR(255) COMMENT '头像URL',
    role VARCHAR(20) DEFAULT 'TEACHER' COMMENT '用户角色（ADMIN/TEACHER/STUDENT）',
    school VARCHAR(100) COMMENT '学校名称',
    subject VARCHAR(50) COMMENT '学科专业',
    grade VARCHAR(50) COMMENT '教学年级',
    status INT DEFAULT 0 COMMENT '账户状态（0:正常 1:禁用）',
    last_login_time TIMESTAMP NULL COMMENT '最后登录时间',
    last_login_ip VARCHAR(50) COMMENT '最后登录IP',
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    deleted INT DEFAULT 0 COMMENT '逻辑删除（0:未删除 1:已删除）',
    
    INDEX idx_username (username),
    INDEX idx_email (email),
    INDEX idx_role (role),
    INDEX idx_status (status),
    INDEX idx_deleted (deleted)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户表';

-- 教案模板表
CREATE TABLE IF NOT EXISTS lesson_templates (
    id BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT '模板ID',
    template_name VARCHAR(100) NOT NULL COMMENT '模板名称',
    subject VARCHAR(50) NOT NULL COMMENT '学科',
    grade_level VARCHAR(20) NOT NULL COMMENT '年级',
    template_type VARCHAR(30) NOT NULL COMMENT '模板类型',
    template_content TEXT NOT NULL COMMENT '模板内容(JSON格式)',
    ai_prompt TEXT NOT NULL COMMENT 'AI生成提示词',
    description TEXT COMMENT '模板描述',
    tags VARCHAR(500) COMMENT '标签(逗号分隔)',
    usage_count INT DEFAULT 0 COMMENT '使用次数',
    rating DECIMAL(3,2) DEFAULT 5.00 COMMENT '评分(1-5)',
    is_active INT DEFAULT 1 COMMENT '是否激活（0:未激活 1:激活）',
    created_by BIGINT COMMENT '创建者ID',
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    deleted INT DEFAULT 0 COMMENT '逻辑删除（0:未删除 1:已删除）',
    
    INDEX idx_subject (subject),
    INDEX idx_grade (grade_level),
    INDEX idx_type (template_type),
    INDEX idx_active (is_active),
    INDEX idx_deleted (deleted),
    INDEX idx_usage_count (usage_count),
    INDEX idx_rating (rating)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='教案模板表';

-- 教案表
CREATE TABLE IF NOT EXISTS lessons (
    id BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT '教案ID',
    title VARCHAR(200) NOT NULL COMMENT '教案标题',
    subject VARCHAR(50) NOT NULL COMMENT '学科',
    grade VARCHAR(20) NOT NULL COMMENT '年级',
    duration VARCHAR(20) NOT NULL COMMENT '课时',
    content LONGTEXT NOT NULL COMMENT '教案内容',
    template_id BIGINT COMMENT '使用的模板ID',
    status VARCHAR(20) DEFAULT 'DRAFT' COMMENT '教案状态（DRAFT/PUBLISHED/DELETED）',
    created_by BIGINT NOT NULL COMMENT '创建者ID',
    generation_time DECIMAL(5,2) COMMENT '生成耗时（秒）',
    user_rating INT COMMENT '用户评分（1-5）',
    feedback TEXT COMMENT '用户反馈',
    view_count INT DEFAULT 0 COMMENT '查看次数',
    share_count INT DEFAULT 0 COMMENT '分享次数',
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    deleted INT DEFAULT 0 COMMENT '逻辑删除（0:未删除 1:已删除）',
    
    INDEX idx_subject (subject),
    INDEX idx_grade (grade),
    INDEX idx_status (status),
    INDEX idx_created_by (created_by),
    INDEX idx_template_id (template_id),
    INDEX idx_deleted (deleted),
    INDEX idx_create_time (create_time),
    FOREIGN KEY (template_id) REFERENCES lesson_templates(id),
    FOREIGN KEY (created_by) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='教案表';

-- 模板使用记录表
CREATE TABLE IF NOT EXISTS template_usage_logs (
    id BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT '记录ID',
    template_id BIGINT NOT NULL COMMENT '模板ID',
    user_id BIGINT NOT NULL COMMENT '用户ID',
    lesson_title VARCHAR(200) COMMENT '生成的教案标题',
    generated_content LONGTEXT COMMENT '生成的内容',
    generation_time DECIMAL(5,2) COMMENT '生成耗时（秒）',
    user_rating INT COMMENT '用户评分（1-5）',
    feedback TEXT COMMENT '用户反馈',
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '使用时间',
    
    INDEX idx_template_id (template_id),
    INDEX idx_user_id (user_id),
    INDEX idx_create_time (create_time),
    FOREIGN KEY (template_id) REFERENCES lesson_templates(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='模板使用记录表';

-- 模板分类表
CREATE TABLE IF NOT EXISTS template_categories (
    id BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT '分类ID',
    category_name VARCHAR(50) NOT NULL COMMENT '分类名称',
    parent_id BIGINT DEFAULT 0 COMMENT '父分类ID',
    sort_order INT DEFAULT 0 COMMENT '排序',
    is_active INT DEFAULT 1 COMMENT '是否激活（0:未激活 1:激活）',
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    
    INDEX idx_parent_id (parent_id),
    INDEX idx_is_active (is_active),
    INDEX idx_sort_order (sort_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='模板分类表';