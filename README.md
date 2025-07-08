# AI教案工具 (AI Teaching Hub)

## 项目简介

AI教案工具是一个基于人工智能的教案和PPT自动生成系统，旨在帮助教师快速创建高质量的教学材料。系统支持多种学科和年级，能够根据教学目标自动生成结构化的教案和配套的PPT演示文稿。

## 功能特性

### 🎯 核心功能
- **智能教案生成**：基于教学目标和课程内容自动生成详细教案
- **PPT自动创建**：根据教案内容自动生成配套的PPT演示文稿
- **多学科支持**：覆盖语文、数学、英语、科学等多个学科
- **模板管理**：提供丰富的教案和PPT模板库
- **个性化定制**：支持根据教师习惯和学校要求进行个性化调整

### 📊 管理功能
- **用户管理**：支持教师账户注册、登录和权限管理
- **资源库管理**：管理教学资源、素材和模板
- **历史记录**：保存和管理历史生成的教案和PPT
- **分享协作**：支持教案分享和团队协作功能

## 技术架构

### 后端技术栈
- **框架**：Spring Boot 2.7+
- **数据库**：MySQL 8.0+
- **ORM**：MyBatis Plus
- **认证**：JWT + Spring Security
- **API文档**：Swagger 3
- **AI集成**：OpenAI GPT / 其他大模型API

### 前端技术栈
- **框架**：Vue 3 + Vite
- **UI组件**：Element Plus
- **状态管理**：Pinia
- **路由管理**：Vue Router
- **HTTP客户端**：Axios
- **图表库**：ECharts

### 部署架构
- **容器化**：Docker + Docker Compose
- **反向代理**：Nginx
- **进程管理**：PM2
- **监控**：Prometheus + Grafana

## 项目结构

```
ai_thub/
├── backend/                    # Spring Boot后端
│   ├── src/main/java/
│   │   └── com/aithub/
│   │       ├── controller/     # REST API控制器
│   │       ├── service/        # 业务逻辑层
│   │       ├── dao/           # 数据访问层
│   │       ├── entity/        # 实体类
│   │       ├── dto/           # 数据传输对象
│   │       ├── config/        # 配置类
│   │       └── util/          # 工具类
│   ├── src/main/resources/
│   │   ├── mapper/            # MyBatis映射文件
│   │   └── application.yml    # 配置文件
│   └── pom.xml               # Maven依赖
├── frontend/                  # Vue前端
│   ├── src/
│   │   ├── components/        # 公共组件
│   │   ├── views/            # 页面组件
│   │   ├── router/           # 路由配置
│   │   ├── store/            # 状态管理
│   │   ├── utils/            # 工具函数
│   │   └── api/              # API接口
│   ├── public/               # 静态资源
│   └── package.json          # 依赖配置
├── database/                  # 数据库脚本
│   ├── schema.sql            # 数据库结构
│   └── data.sql              # 初始化数据
├── docs/                     # 项目文档
│   ├── api.md                # API文档
│   └── deployment.md         # 部署文档
├── docker-compose.yml        # Docker编排文件
├── README.md                 # 项目说明
└── CLAUDE.md                 # 开发规范文档
```

## 快速开始

### 环境要求
- Java 11+ (当前版本: 11.0.25)
- Maven 3.6+ (当前版本: 3.6.2)
- Node.js 22+ (当前版本: 22.17.0)
- npm 10+ (当前版本: 10.9.2)
- MySQL 8.0+
- Docker (可选)

### 本地开发

1. **克隆项目**
   ```bash
   git clone https://github.com/your-username/ai_thub.git
   cd ai_thub
   ```

2. **数据库初始化**
   ```bash
   mysql -u root -p < database/schema.sql
   mysql -u root -p < database/data.sql
   ```

3. **启动后端服务**
   ```bash
   cd backend
   mvn clean install
   mvn spring-boot:run
   ```

4. **启动前端服务**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

5. **访问应用**
   - 前端地址：http://localhost:3000
   - 后端API：http://localhost:8080
   - API文档：http://localhost:8080/swagger-ui.html

### Docker部署

```bash
docker-compose up -d
```

## API文档

### 认证接口
- `POST /api/auth/login` - 用户登录
- `POST /api/auth/register` - 用户注册
- `POST /api/auth/logout` - 用户登出

### 教案管理
- `GET /api/lessons` - 获取教案列表
- `POST /api/lessons` - 创建教案
- `GET /api/lessons/{id}` - 获取教案详情
- `PUT /api/lessons/{id}` - 更新教案
- `DELETE /api/lessons/{id}` - 删除教案

### AI生成接口
- `POST /api/ai/generate-lesson` - 生成教案
- `POST /api/ai/generate-ppt` - 生成PPT
- `GET /api/ai/templates` - 获取模板列表

## 开发规范

详见 [CLAUDE.md](./CLAUDE.md) 开发规范文档。

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/新功能`)
3. 提交更改 (`git commit -m '添加新功能'`)
4. 推送到分支 (`git push origin feature/新功能`)
5. 创建 Pull Request

## 许可证

本项目采用 MIT 许可证，详见 [LICENSE](./LICENSE) 文件。

## 联系我们

- 项目地址：https://github.com/your-username/ai_thub
- 问题反馈：https://github.com/your-username/ai_thub/issues
- 邮箱：your-email@example.com

---

**注意**：本项目仅用于教育目的，请遵守相关法律法规和平台使用协议。