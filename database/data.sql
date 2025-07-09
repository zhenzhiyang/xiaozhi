-- AI教案工具初始化数据脚本

USE ai_teaching_hub;

-- 插入默认管理员用户
INSERT INTO users (username, password, email, nickname, role, status) VALUES
('admin', '$2a$10$rLfvxXzJyMoQJQjNhHqvkOdJRGSWP2ZrFRJEEbhcjw2VwcvQwUF.G', 'admin@aithub.com', '系统管理员', 'ADMIN', 0),
('teacher1', '$2a$10$rLfvxXzJyMoQJQjNhHqvkOdJRGSWP2ZrFRJEEbhcjw2VwcvQwUF.G', 'teacher1@example.com', '张老师', 'TEACHER', 0);

-- 插入模板分类数据
INSERT INTO template_categories (category_name, parent_id, sort_order) VALUES
('小学', 0, 1),
('初中', 0, 2),
('高中', 0, 3),
('语文', 1, 1),
('数学', 1, 2),
('英语', 1, 3),
('科学', 1, 4),
('语文', 2, 1),
('数学', 2, 2),
('英语', 2, 3),
('物理', 2, 4),
('化学', 2, 5),
('生物', 2, 6),
('历史', 2, 7),
('地理', 2, 8),
('政治', 2, 9),
('语文', 3, 1),
('数学', 3, 2),
('英语', 3, 3),
('物理', 3, 4),
('化学', 3, 5),
('生物', 3, 6),
('历史', 3, 7),
('地理', 3, 8),
('政治', 3, 9);

-- 插入教案模板数据
INSERT INTO lesson_templates (template_name, subject, grade_level, template_type, template_content, ai_prompt, description, tags, usage_count, rating, is_active, created_by) VALUES 
('小学语文课文阅读教案', '语文', '小学', '课文阅读', 
'{
  "sections": [
    {
      "title": "教学目标",
      "content": "1. 知识与技能目标：{knowledge_skills}\\n2. 过程与方法目标：{process_method}\\n3. 情感态度价值观目标：{emotion_attitude}",
      "required": true
    },
    {
      "title": "教学重点",
      "content": "{teaching_focus}",
      "required": true
    },
    {
      "title": "教学难点", 
      "content": "{teaching_difficulty}",
      "required": true
    },
    {
      "title": "教学准备",
      "content": "1. 教师准备：{teacher_preparation}\\n2. 学生准备：{student_preparation}",
      "required": true
    },
    {
      "title": "教学过程",
      "content": "一、导入新课（{intro_time}分钟）\\n{intro_content}\\n\\n二、初读感知（{first_read_time}分钟）\\n{first_read_content}\\n\\n三、精读理解（{deep_read_time}分钟）\\n{deep_read_content}\\n\\n四、拓展延伸（{extension_time}分钟）\\n{extension_content}\\n\\n五、课堂小结（{summary_time}分钟）\\n{summary_content}",
      "required": true
    },
    {
      "title": "板书设计",
      "content": "{blackboard_design}",
      "required": true
    },
    {
      "title": "作业布置",
      "content": "1. 基础作业：{basic_homework}\\n2. 拓展作业：{extension_homework}",
      "required": true
    },
    {
      "title": "教学反思",
      "content": "{teaching_reflection}",
      "required": false
    }
  ]
}',
'请根据以下信息为小学语文课文《{lesson_title}》生成一份详细的教案：

课文信息：
- 年级：{grade}
- 课时安排：{class_hours}
- 学科：{subject}

教学要求：
1. 教学目标要符合小学生认知特点，包含知识技能、过程方法、情感态度三维目标
2. 重点难点要突出，符合年级特点
3. 教学过程要生动有趣，包含导入、初读、精读、拓展、小结五个环节
4. 每个环节要有具体的教学活动和预估时间
5. 板书设计要简洁明了，突出重点
6. 作业布置要有层次性，包含基础和拓展两类

请确保生成的教案：
- 语言简洁明了
- 活动设计符合小学生特点
- 时间分配合理
- 重点突出，难点分散
- 体现学生为主体的教学理念
- 格式规范，层次分明
- 内容实用，可操作性强

请按照以下格式生成教案：

# 《{lesson_title}》教案

## 一、教学目标
### 1. 知识与技能目标
### 2. 过程与方法目标  
### 3. 情感态度价值观目标

## 二、教学重点
## 三、教学难点
## 四、教学准备
### 1. 教师准备
### 2. 学生准备

## 五、教学过程
### 1. 导入新课（5分钟）
### 2. 初读感知（10分钟）
### 3. 精读理解（20分钟）
### 4. 拓展延伸（8分钟）
### 5. 课堂小结（2分钟）

## 六、板书设计
## 七、作业布置
### 1. 基础作业
### 2. 拓展作业

## 八、教学反思',
'适用于小学语文课文阅读教学的标准教案模板，包含完整的教学环节设计',
'小学,语文,课文阅读,教案模板,标准格式', 1250, 4.8, 1, 1),

('小学数学计算教学教案', '数学', '小学', '计算教学', 
'{
  "sections": [
    {
      "title": "教学内容",
      "content": "{teaching_content}",
      "required": true
    },
    {
      "title": "教学目标",
      "content": "1. 知识与技能：{knowledge_skills}\\n2. 数学思考：{mathematical_thinking}\\n3. 问题解决：{problem_solving}\\n4. 情感态度：{emotion_attitude}",
      "required": true
    },
    {
      "title": "教学重点",
      "content": "{teaching_focus}",
      "required": true
    },
    {
      "title": "教学难点",
      "content": "{teaching_difficulty}",
      "required": true
    },
    {
      "title": "教学准备",
      "content": "{teaching_materials}",
      "required": true
    },
    {
      "title": "教学过程",
      "content": "一、复习铺垫（{review_time}分钟）\\n{review_content}\\n\\n二、探索新知（{explore_time}分钟）\\n{explore_content}\\n\\n三、巩固练习（{practice_time}分钟）\\n{practice_content}\\n\\n四、课堂小结（{summary_time}分钟）\\n{summary_content}",
      "required": true
    },
    {
      "title": "练习设计",
      "content": "1. 基础练习：{basic_exercises}\\n2. 提高练习：{advanced_exercises}\\n3. 拓展练习：{extension_exercises}",
      "required": true
    },
    {
      "title": "板书设计",
      "content": "{blackboard_design}",
      "required": true
    }
  ]
}',
'请为小学数学《{lesson_title}》生成一份计算教学教案：

教学信息：
- 年级：{grade}
- 课时：{class_hours}
- 学科：{subject}

教学要求：
1. 教学目标要体现数学核心素养，包含知识技能、数学思考、问题解决等方面
2. 重点要突出计算方法和算理
3. 难点要针对学生易错点设计突破策略
4. 教学过程要体现"复习铺垫→探索新知→巩固练习→课堂小结"的结构
5. 探索新知环节要设计具体的数学活动，体现算理推导过程
6. 练习设计要有梯度，从基础到提高再到拓展
7. 板书要体现计算方法和关键步骤

请确保教案：
- 符合小学生认知规律
- 体现数学思维过程
- 突出算理与算法结合
- 练习设计由易到难
- 格式规范，条理清晰

请按照以下格式生成教案：

# 《{lesson_title}》教案

## 一、教学内容
## 二、教学目标
### 1. 知识与技能
### 2. 数学思考
### 3. 问题解决
### 4. 情感态度

## 三、教学重点
## 四、教学难点
## 五、教学准备

## 六、教学过程
### 1. 复习铺垫（5分钟）
### 2. 探索新知（25分钟）
### 3. 巩固练习（8分钟）
### 4. 课堂小结（2分钟）

## 七、练习设计
### 1. 基础练习
### 2. 提高练习
### 3. 拓展练习

## 八、板书设计',
'适用于小学数学计算教学的教案模板，注重算理推导和思维培养',
'小学,数学,计算教学,算理,思维培养', 980, 4.7, 1, 1),

('初中物理实验教学教案', '物理', '初中', '实验教学', 
'{
  "sections": [
    {
      "title": "教学目标",
      "content": "1. 知识与技能：{knowledge_skills}\\n2. 过程与方法：{process_method}\\n3. 情感态度与价值观：{emotion_values}",
      "required": true
    },
    {
      "title": "教学重点",
      "content": "{teaching_focus}",
      "required": true
    },
    {
      "title": "教学难点",
      "content": "{teaching_difficulty}",
      "required": true
    },
    {
      "title": "实验器材",
      "content": "{experiment_materials}",
      "required": true
    },
    {
      "title": "教学过程",
      "content": "一、创设情境，引入新课（{intro_time}分钟）\\n{intro_content}\\n\\n二、科学探究，获取新知（{explore_time}分钟）\\n{explore_content}\\n\\n三、实验操作，验证规律（{experiment_time}分钟）\\n{experiment_content}\\n\\n四、分析讨论，总结规律（{analysis_time}分钟）\\n{analysis_content}",
      "required": true
    },
    {
      "title": "实验步骤",
      "content": "{experiment_steps}",
      "required": true
    },
    {
      "title": "数据记录表",
      "content": "{data_table}",
      "required": true
    },
    {
      "title": "注意事项",
      "content": "{safety_notes}",
      "required": true
    },
    {
      "title": "课堂小结",
      "content": "{lesson_summary}",
      "required": true
    }
  ]
}',
'请为初中物理实验《{lesson_title}》生成教案：

实验信息：
- 年级：{grade}
- 课时：{class_hours}
- 学科：{subject}

教学要求：
1. 体现科学探究过程，培养学生科学思维
2. 重点突出实验原理和实验方法
3. 难点要有具体的突破策略
4. 实验设计要科学合理，操作性强
5. 注重实验安全，强调规范操作
6. 数据处理要科学，结论要客观
7. 体现从生活走向物理，从物理走向社会的理念

请确保教案：
- 实验步骤清晰明了
- 安全提示全面到位
- 数据记录表格科学合理
- 体现物理学科特点
- 格式规范，层次分明

请按照以下格式生成教案：

# 《{lesson_title}》教案

## 一、教学目标
### 1. 知识与技能
### 2. 过程与方法
### 3. 情感态度与价值观

## 二、教学重点
## 三、教学难点
## 四、实验器材
## 五、教学过程
### 1. 创设情境，引入新课（5分钟）
### 2. 科学探究，获取新知（25分钟）
### 3. 实验操作，验证规律（12分钟）
### 4. 分析讨论，总结规律（3分钟）

## 六、实验步骤
## 七、数据记录表
## 八、注意事项
## 九、课堂小结',
'适用于初中物理实验教学的教案模板，注重科学探究过程',
'初中,物理,实验教学,科学探究,安全操作', 756, 4.9, 1, 1),

('高中化学概念教学教案', '化学', '高中', '概念教学', 
'{
  "sections": [
    {
      "title": "教学目标",
      "content": "1. 核心素养目标：{core_literacy}\\n2. 知识与技能目标：{knowledge_skills}\\n3. 过程与方法目标：{process_method}\\n4. 情感态度价值观目标：{emotion_values}",
      "required": true
    },
    {
      "title": "教学重点",
      "content": "{teaching_focus}",
      "required": true
    },
    {
      "title": "教学难点",
      "content": "{teaching_difficulty}",
      "required": true
    },
    {
      "title": "教学方法",
      "content": "{teaching_methods}",
      "required": true
    },
    {
      "title": "教学过程",
      "content": "一、情境导入（{intro_time}分钟）\\n{intro_content}\\n\\n二、概念建构（{concept_time}分钟）\\n{concept_content}\\n\\n三、概念理解（{understanding_time}分钟）\\n{understanding_content}\\n\\n四、概念应用（{application_time}分钟）\\n{application_content}\\n\\n五、反思总结（{summary_time}分钟）\\n{summary_content}",
      "required": true
    },
    {
      "title": "概念图",
      "content": "{concept_map}",
      "required": true
    },
    {
      "title": "典型例题",
      "content": "{example_problems}",
      "required": true
    },
    {
      "title": "课堂练习",
      "content": "{class_exercises}",
      "required": true
    },
    {
      "title": "课后作业",
      "content": "{homework}",
      "required": true
    }
  ]
}',
'请为高中化学概念教学《{lesson_title}》生成教案：

教学信息：
- 年级：{grade}
- 课时：{class_hours}
- 学科：{subject}

教学要求：
1. 目标要体现化学核心素养，包含宏观辨识、微观探析、变化观念、平衡思想、证据推理、模型认知等
2. 概念建构要体现从宏观到微观、从定性到定量的认知过程
3. 重点要突出概念的本质特征和应用
4. 难点要设计具体的突破策略
5. 教学方法要多样化，体现启发式教学
6. 要有概念图帮助学生理解概念之间的关系
7. 例题和练习要有针对性和层次性

请确保教案：
- 概念阐述准确科学
- 逻辑结构清晰
- 体现化学学科特点
- 注重思维能力培养
- 格式规范，条理清楚

请按照以下格式生成教案：

# 《{lesson_title}》教案

## 一、教学目标
### 1. 核心素养目标
### 2. 知识与技能目标
### 3. 过程与方法目标
### 4. 情感态度价值观目标

## 二、教学重点
## 三、教学难点
## 四、教学方法
## 五、教学过程
### 1. 情境导入（5分钟）
### 2. 概念建构（20分钟）
### 3. 概念理解（10分钟）
### 4. 概念应用（8分钟）
### 5. 反思总结（2分钟）

## 六、概念图
## 七、典型例题
## 八、课堂练习
## 九、课后作业',
'适用于高中化学概念教学的教案模板，注重核心素养培养',
'高中,化学,概念教学,核心素养,思维培养', 623, 4.6, 1, 1),

('小学英语单词教学教案', '英语', '小学', '单词教学', 
'{
  "sections": [
    {
      "title": "Teaching Objectives",
      "content": "1. Language Knowledge: {language_knowledge}\\n2. Language Skills: {language_skills}\\n3. Learning Strategies: {learning_strategies}\\n4. Cultural Awareness: {cultural_awareness}",
      "required": true
    },
    {
      "title": "Key Points",
      "content": "{key_points}",
      "required": true
    },
    {
      "title": "Difficult Points",
      "content": "{difficult_points}",
      "required": true
    },
    {
      "title": "Teaching Aids",
      "content": "{teaching_aids}",
      "required": true
    },
    {
      "title": "Teaching Procedures",
      "content": "Step 1: Warm-up ({warmup_time} mins)\\n{warmup_activities}\\n\\nStep 2: Presentation ({presentation_time} mins)\\n{presentation_activities}\\n\\nStep 3: Practice ({practice_time} mins)\\n{practice_activities}\\n\\nStep 4: Production ({production_time} mins)\\n{production_activities}\\n\\nStep 5: Summary ({summary_time} mins)\\n{summary_activities}",
      "required": true
    },
    {
      "title": "Blackboard Design",
      "content": "{blackboard_design}",
      "required": true
    },
    {
      "title": "Homework",
      "content": "{homework}",
      "required": true
    }
  ]
}',
'请为小学英语单词教学《{lesson_title}》生成教案：

教学信息：
- 年级：{grade}
- 课时：{class_hours}
- 学科：{subject}

教学要求：
1. 教学目标要包含语言知识、语言技能、学习策略、文化意识四个方面
2. 遵循听说领先、读写跟上的原则
3. 教学过程采用PPPPS模式（Presentation-Practice-Production-Summary）
4. 活动设计要生动有趣，符合小学生特点
5. 注重语音教学，包含单词发音指导
6. 创设真实语言情境，让学生在语境中学习
7. 体现任务型教学理念

请确保教案：
- 活动设计丰富多样
- 体现交际性和实用性
- 注重语言输入和输出平衡
- 评价方式多元化
- 格式规范，层次清晰

请按照以下格式生成教案：

# 《{lesson_title}》教案

## 一、Teaching Objectives
### 1. Language Knowledge
### 2. Language Skills
### 3. Learning Strategies
### 4. Cultural Awareness

## 二、Key Points
## 三、Difficult Points
## 四、Teaching Aids
## 五、Teaching Procedures
### Step 1: Warm-up (5 mins)
### Step 2: Presentation (15 mins)
### Step 3: Practice (15 mins)
### Step 4: Production (8 mins)
### Step 5: Summary (2 mins)

## 六、Blackboard Design
## 七、Homework',
'适用于小学英语单词教学的教案模板，遵循PPPPS教学模式',
'小学,英语,单词教学,PPPPS,交际教学', 890, 4.5, 1, 1);

-- 插入一些测试教案数据
INSERT INTO lessons (title, subject, grade, duration, content, template_id, status, created_by, generation_time, view_count, share_count) VALUES
('分数的加减法', '数学', '五年级', '40分钟', '# 《分数的加减法》教案\n\n## 一、教学目标\n### 1. 知识与技能\n学生能够掌握同分母分数加减法的计算方法...\n\n## 二、教学重点\n同分母分数加减法的计算方法\n\n## 三、教学难点\n理解分数加减法的算理...', 2, 'PUBLISHED', 2, 2.5, 15, 3),
('牛顿第一定律', '物理', '八年级', '45分钟', '# 《牛顿第一定律》教案\n\n## 一、教学目标\n### 1. 知识与技能\n学生能够理解牛顿第一定律的内容...\n\n## 二、教学重点\n牛顿第一定律的内容和意义\n\n## 三、教学难点\n惯性的概念...', 3, 'PUBLISHED', 2, 3.2, 22, 5);