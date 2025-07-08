# AI教案工具开发规范

## 项目概述
这是一个基于Spring Boot + Vue + MySQL的AI教案生成工具，用于帮助教师自动生成教案和PPT。

## 开发规范

### 代码风格
- Java代码使用驼峰命名法
- Vue组件使用PascalCase命名
- 数据库表名使用下划线分隔的小写字母
- API接口使用RESTful风格

### 输出限制
- 每次生成代码时，必须包含完整的注释
- 生成的代码必须符合项目架构规范
- 不允许生成不完整的代码片段
- 必须考虑错误处理和边界情况

### 技术栈限制
- 后端：Spring Boot 2.7+, MyBatis Plus, JWT认证
- 前端：Vue 3 + Vite + Element Plus
- 数据库：MySQL 8.0+
- AI集成：OpenAI GPT或其他大模型API

### API配置
- DeepSeek API Key: sk-b64d4e1a04e340bca704843eb776ab4e

### 文件结构规范
```
ai_thub/
├── backend/              # Spring Boot后端
│   ├── src/main/java/
│   │   └── com/aithub/
│   │       ├── controller/
│   │       ├── service/
│   │       ├── dao/
│   │       ├── entity/
│   │       └── config/
│   └── pom.xml
├── frontend/             # Vue前端
│   ├── src/
│   │   ├── components/
│   │   ├── views/
│   │   ├── router/
│   │   └── store/
│   └── package.json
└── database/            # 数据库脚本
    └── schema.sql
```

## 开发记录

### 2025-07-08 项目初始化
- 创建项目基础文档
- 定义开发规范和技术栈
- 规划项目架构