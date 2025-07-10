# AI教案模板库 - 完整版

## 🎯 模板分类体系

### 学段分类
- **小学 (1-6年级)**：基础教育阶段，注重兴趣培养和基础技能
- **初中 (7-9年级)**：义务教育阶段，注重知识体系构建
- **高中 (10-12年级)**：高等教育预备阶段，注重深度思维培养

### 学科分类
- **语文**：阅读理解、作文指导、古诗词鉴赏、文言文教学
- **数学**：计算教学、应用题、几何证明、函数图像
- **英语**：单词教学、语法讲解、阅读理解、口语交际
- **科学/理科**：实验探究、概念建构、理论应用、思维培养
- **文科**：史料分析、思辨讨论、价值观引导、文化传承

### 教学类型
- **新授课**：新知识点的首次教学
- **复习课**：知识巩固和系统梳理
- **练习课**：技能训练和能力提升
- **实验课**：动手操作和科学探究
- **讨论课**：合作学习和深度思考

## 📚 基础教案模板

### 1. 通用新授课模板

```sql
INSERT INTO lesson_templates (template_name, subject, grade_level, template_type, template_content, ai_prompt, description, tags) VALUES 
('通用新授课教案模板', '通用', '全学段', '新授课', 
'{
  "sections": [
    {
      "title": "教学目标",
      "content": "1. 知识与技能：{knowledge_skills}\n2. 过程与方法：{process_method}\n3. 情感态度价值观：{emotion_values}",
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
      "content": "教师准备：{teacher_preparation}\n学生准备：{student_preparation}\n教具学具：{teaching_aids}",
      "required": true
    },
    {
      "title": "教学过程",
      "content": "一、导入新课（{intro_time}分钟）\n{intro_content}\n\n二、新知学习（{learning_time}分钟）\n{learning_content}\n\n三、巩固练习（{practice_time}分钟）\n{practice_content}\n\n四、课堂小结（{summary_time}分钟）\n{summary_content}",
      "required": true
    },
    {
      "title": "板书设计",
      "content": "{blackboard_design}",
      "required": true
    },
    {
      "title": "作业布置",
      "content": "{homework}",
      "required": true
    },
    {
      "title": "教学反思",
      "content": "{teaching_reflection}",
      "required": false
    }
  ]
}',
'请为《{lesson_title}》生成一份{grade}{subject}新授课教案：

课程信息：
- 年级：{grade}
- 学科：{subject}
- 课时：{duration}
- 教学内容：{content}

教学要求：
1. 教学目标要具体明确，符合学生认知特点
2. 重点难点要突出，并有相应的突破策略
3. 教学过程要层次清晰，活动设计有趣有效
4. 注重学生主体地位，体现师生互动
5. 板书设计要简洁明了，突出重点
6. 作业布置要有层次性和针对性

请确保教案：
- 结构完整，格式规范
- 内容实用，可操作性强
- 符合教学规律和学科特点
- 体现新课程理念',
'适用于各学科新授课的通用教案模板，结构完整，易于使用',
'通用,新授课,教案模板,全学段,基础模板');
```

### 2. 通用复习课模板

```sql
INSERT INTO lesson_templates (template_name, subject, grade_level, template_type, template_content, ai_prompt, description, tags) VALUES 
('通用复习课教案模板', '通用', '全学段', '复习课', 
'{
  "sections": [
    {
      "title": "复习目标",
      "content": "1. 知识梳理：{knowledge_review}\n2. 能力提升：{ability_improvement}\n3. 查漏补缺：{gap_filling}",
      "required": true
    },
    {
      "title": "复习重点",
      "content": "{review_focus}",
      "required": true
    },
    {
      "title": "复习难点",
      "content": "{review_difficulty}",
      "required": true
    },
    {
      "title": "复习过程",
      "content": "一、知识回顾（{recall_time}分钟）\n{recall_content}\n\n二、系统梳理（{organize_time}分钟）\n{organize_content}\n\n三、重点突破（{breakthrough_time}分钟）\n{breakthrough_content}\n\n四、综合练习（{practice_time}分钟）\n{practice_content}\n\n五、总结提升（{summary_time}分钟）\n{summary_content}",
      "required": true
    },
    {
      "title": "知识网络图",
      "content": "{knowledge_map}",
      "required": true
    },
    {
      "title": "典型例题",
      "content": "{typical_examples}",
      "required": true
    },
    {
      "title": "易错点分析",
      "content": "{error_analysis}",
      "required": true
    },
    {
      "title": "练习设计",
      "content": "{exercise_design}",
      "required": true
    }
  ]
}',
'请为《{lesson_title}》生成一份{grade}{subject}复习课教案：

复习信息：
- 年级：{grade}
- 学科：{subject}
- 复习范围：{review_scope}
- 复习类型：{review_type}
- 课时：{duration}

复习要求：
1. 突出重点知识，构建知识网络
2. 分析易错易混点，针对性突破
3. 设计典型例题，提升解题能力
4. 分层练习设计，照顾不同层次学生
5. 注重方法指导，提高学习效率

请确保教案：
- 知识体系清晰完整
- 重难点突出明确
- 练习设计有针对性
- 体现复习课特点',
'适用于各学科复习课的通用教案模板，注重知识梳理和能力提升',
'通用,复习课,知识梳理,查漏补缺,考试复习');
```

### 3. 通用实验课模板

```sql
INSERT INTO lesson_templates (template_name, subject, grade_level, template_type, template_content, ai_prompt, description, tags) VALUES 
('通用实验课教案模板', '理科', '全学段', '实验课', 
'{
  "sections": [
    {
      "title": "实验目标",
      "content": "1. 知识目标：{knowledge_goal}\n2. 能力目标：{ability_goal}\n3. 情感目标：{emotion_goal}",
      "required": true
    },
    {
      "title": "实验原理",
      "content": "{experiment_principle}",
      "required": true
    },
    {
      "title": "实验器材",
      "content": "{experiment_materials}",
      "required": true
    },
    {
      "title": "实验过程",
      "content": "一、实验准备（{preparation_time}分钟）\n{preparation_content}\n\n二、实验操作（{operation_time}分钟）\n{operation_content}\n\n三、数据记录（{recording_time}分钟）\n{recording_content}\n\n四、结果分析（{analysis_time}分钟）\n{analysis_content}\n\n五、实验总结（{summary_time}分钟）\n{summary_content}",
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
      "title": "实验结论",
      "content": "{experiment_conclusion}",
      "required": true
    },
    {
      "title": "思考问题",
      "content": "{thinking_questions}",
      "required": true
    }
  ]
}',
'请为《{lesson_title}》生成一份{grade}{subject}实验课教案：

实验信息：
- 年级：{grade}
- 学科：{subject}
- 实验类型：{experiment_type}
- 实验目的：{experiment_purpose}
- 课时：{duration}

实验要求：
1. 实验原理阐述清楚
2. 操作步骤详细具体
3. 安全注意事项全面
4. 数据记录表格合理
5. 结果分析科学准确
6. 培养科学探究精神

请确保教案：
- 安全措施到位
- 操作步骤清晰
- 注重过程体验
- 培养科学思维',
'适用于理科实验课的通用教案模板，注重安全操作和科学探究',
'实验课,科学探究,动手操作,安全教育,理科教学');
```

## 📖 学科专业模板

### 小学语文教案模板

```sql
INSERT INTO lesson_templates (template_name, subject, grade_level, template_type, template_content, ai_prompt, description, tags) VALUES 
('小学语文课文阅读教案', '语文', '小学', '课文阅读', 
'{
  "sections": [
    {
      "title": "教学目标",
      "content": "1. 知识与技能目标：{knowledge_skills}\n2. 过程与方法目标：{process_method}\n3. 情感态度价值观目标：{emotion_attitude}",
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
      "content": "1. 教师准备：{teacher_preparation}\n2. 学生准备：{student_preparation}",
      "required": true
    },
    {
      "title": "教学过程",
      "content": "一、导入新课（{intro_time}分钟）\n{intro_content}\n\n二、初读感知（{first_read_time}分钟）\n{first_read_content}\n\n三、精读理解（{deep_read_time}分钟）\n{deep_read_content}\n\n四、拓展延伸（{extension_time}分钟）\n{extension_content}\n\n五、课堂小结（{summary_time}分钟）\n{summary_content}",
      "required": true
    },
    {
      "title": "板书设计",
      "content": "{blackboard_design}",
      "required": true
    },
    {
      "title": "作业布置",
      "content": "1. 基础作业：{basic_homework}\n2. 拓展作业：{extension_homework}",
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
'适用于小学语文课文阅读教学的标准教案模板',
'小学,语文,课文阅读,教案模板,标准格式');
```

现在让我继续添加更多模板...
```

### 小学数学教案模板

```sql
INSERT INTO lesson_templates (template_name, subject, grade_level, template_type, template_content, ai_prompt, description, tags) VALUES 
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
      "content": "1. 使学生{knowledge_goal}\n2. 培养学生{ability_goal}\n3. 让学生{emotion_goal}",
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
      "content": "一、复习铺垫（{review_time}分钟）\n{review_content}\n\n二、探索新知（{explore_time}分钟）\n{explore_content}\n\n三、巩固练习（{practice_time}分钟）\n{practice_content}\n\n四、课堂小结（{summary_time}分钟）\n{summary_content}",
      "required": true
    },
    {
      "title": "练习设计",
      "content": "1. 基础练习：{basic_exercises}\n2. 提高练习：{advanced_exercises}\n3. 拓展练习：{extension_exercises}",
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
- 教学内容：{content}
- 课时：{class_hours}
- 学生基础：{student_foundation}

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
- 练习设计由易到难',
'适用于小学数学计算教学的教案模板，注重算理推导和思维培养',
'小学,数学,计算教学,算理,思维培养');
```

### 小学英语教案模板

```sql
INSERT INTO lesson_templates (template_name, subject, grade_level, template_type, template_content, ai_prompt, description, tags) VALUES 
('小学英语单词教学教案', '英语', '小学', '单词教学', 
'{
  "sections": [
    {
      "title": "Teaching Objectives",
      "content": "1. Language Knowledge: {language_knowledge}\n2. Language Skills: {language_skills}\n3. Learning Strategies: {learning_strategies}\n4. Cultural Awareness: {cultural_awareness}",
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
      "content": "Step 1: Warm-up ({warmup_time} mins)\n{warmup_activities}\n\nStep 2: Presentation ({presentation_time} mins)\n{presentation_activities}\n\nStep 3: Practice ({practice_time} mins)\n{practice_activities}\n\nStep 4: Production ({production_time} mins)\n{production_activities}\n\nStep 5: Summary ({summary_time} mins)\n{summary_activities}",
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
- 目标单词：{target_words}
- 重点句型：{key_sentences}
- 话题：{topic}
- 课时：{class_hours}

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
- 评价方式多元化',
'适用于小学英语单词教学的教案模板，遵循PPPPS教学模式',
'小学,英语,单词教学,PPPPS,交际教学');
```

### 初中物理教案模板

```sql
INSERT INTO lesson_templates (template_name, subject, grade_level, template_type, template_content, ai_prompt, description, tags) VALUES 
('初中物理实验教学教案', '物理', '初中', '实验教学', 
'{
  "sections": [
    {
      "title": "教学目标",
      "content": "1. 知识与技能：{knowledge_skills}\n2. 过程与方法：{process_method}\n3. 情感态度与价值观：{emotion_values}",
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
      "content": "一、创设情境，引入新课（{intro_time}分钟）\n{intro_content}\n\n二、科学探究，获取新知（{explore_time}分钟）\n{explore_content}\n\n三、实验操作，验证规律（{experiment_time}分钟）\n{experiment_content}\n\n四、分析讨论，总结规律（{analysis_time}分钟）\n{analysis_content}\n\n五、应用新知，解决问题（{application_time}分钟）\n{application_content}",
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
- 实验类型：{experiment_type}
- 实验目的：{experiment_purpose}
- 涉及的物理概念：{physics_concepts}
- 课时：{class_hours}

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
- 体现物理学科特点',
'适用于初中物理实验教学的教案模板，注重科学探究过程',
'初中,物理,实验教学,科学探究,安全操作');
```

### 高中化学教案模板

```sql
INSERT INTO lesson_templates (template_name, subject, grade_level, template_type, template_content, ai_prompt, description, tags) VALUES 
('高中化学概念教学教案', '化学', '高中', '概念教学', 
'{
  "sections": [
    {
      "title": "教学目标",
      "content": "1. 核心素养目标：{core_literacy}\n2. 知识与技能目标：{knowledge_skills}\n3. 过程与方法目标：{process_method}\n4. 情感态度价值观目标：{emotion_values}",
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
      "content": "一、情境导入（{intro_time}分钟）\n{intro_content}\n\n二、概念建构（{concept_time}分钟）\n{concept_content}\n\n三、概念理解（{understanding_time}分钟）\n{understanding_content}\n\n四、概念应用（{application_time}分钟）\n{application_content}\n\n五、反思总结（{summary_time}分钟）\n{summary_content}",
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
- 化学概念：{chemical_concept}
- 相关理论：{related_theory}
- 应用领域：{application_field}
- 课时：{class_hours}

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
- 注重思维能力培养',
'适用于高中化学概念教学的教案模板，注重核心素养培养',
'高中,化学,概念教学,核心素养,思维培养');
```

### 高中历史教案模板

```sql
INSERT INTO lesson_templates (template_name, subject, grade_level, template_type, template_content, ai_prompt, description, tags) VALUES 
('高中历史专题教学教案', '历史', '高中', '专题教学', 
'{
  "sections": [
    {
      "title": "教学目标",
      "content": "1. 史料实证：{historical_evidence}\n2. 历史解释：{historical_interpretation}\n3. 时空观念：{temporal_spatial_concept}\n4. 唯物史观：{materialist_history}\n5. 家国情怀：{patriotic_sentiment}",
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
      "title": "史料准备",
      "content": "{historical_materials}",
      "required": true
    },
    {
      "title": "教学过程",
      "content": "一、情境导入，激发兴趣（{intro_time}分钟）\n{intro_content}\n\n二、史料研读，获取信息（{reading_time}分钟）\n{reading_content}\n\n三、问题探究，深入分析（{inquiry_time}分钟）\n{inquiry_content}\n\n四、历史解释，形成认识（{interpretation_time}分钟）\n{interpretation_content}\n\n五、拓展延伸，升华情感（{extension_time}分钟）\n{extension_content}",
      "required": true
    },
    {
      "title": "史料分析",
      "content": "{material_analysis}",
      "required": true
    },
    {
      "title": "问题设计",
      "content": "{question_design}",
      "required": true
    },
    {
      "title": "课堂小结",
      "content": "{lesson_summary}",
      "required": true
    },
    {
      "title": "课后思考",
      "content": "{reflection_questions}",
      "required": true
    }
  ]
}',
'请为高中历史专题《{lesson_title}》生成教案：

教学信息：
- 年级：{grade}
- 历史时期：{historical_period}
- 核心主题：{core_theme}
- 重要史实：{key_facts}
- 课时：{class_hours}

教学要求：
1. 体现历史学科核心素养，包含史料实证、历史解释、时空观念、唯物史观、家国情怀
2. 以史料为载体，培养学生史料实证能力
3. 重点突出历史事件的原因、过程、结果和影响
4. 难点要通过史料分析和问题探究来突破
5. 教学过程要体现论从史出、史论结合的原则
6. 问题设计要有层次性，引导学生深入思考
7. 注重培养学生的历史思维和批判精神

请确保教案：
- 史料选择典型、可信
- 问题设计有启发性
- 历史解释客观准确
- 体现价值观引领',
'适用于高中历史专题教学的教案模板，注重史料实证和历史解释',
'高中,历史,专题教学,史料实证,历史解释');
```

## 插入模板分类数据

```sql
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
```

## 更多专业教案模板

### 小学数学应用题教案模板

```sql
INSERT INTO lesson_templates (template_name, subject, grade_level, template_type, template_content, ai_prompt, description, tags) VALUES 
('小学数学应用题教学教案', '数学', '小学', '应用题教学', 
'{
  "sections": [
    {
      "title": "教学内容",
      "content": "{teaching_content}",
      "required": true
    },
    {
      "title": "教学目标",
      "content": "1. 能理解题意，掌握{problem_type}应用题的解题方法\n2. 培养学生{thinking_ability}和{problem_solving}能力\n3. 感受数学与生活的联系，提高解决实际问题的能力",
      "required": true
    },
    {
      "title": "教学重难点",
      "content": "重点：{teaching_focus}\n难点：{teaching_difficulty}",
      "required": true
    },
    {
      "title": "教学过程",
      "content": "一、复习导入（{review_time}分钟）\n{review_content}\n\n二、探究新知（{explore_time}分钟）\n{explore_content}\n\n三、解题训练（{practice_time}分钟）\n{practice_content}\n\n四、总结反思（{summary_time}分钟）\n{summary_content}",
      "required": true
    },
    {
      "title": "解题策略",
      "content": "{solving_strategies}",
      "required": true
    },
    {
      "title": "变式练习",
      "content": "{variation_exercises}",
      "required": true
    }
  ]
}',
'请为小学数学应用题《{lesson_title}》生成教案：

题目信息：
- 年级：{grade}
- 应用题类型：{problem_type}
- 涉及知识点：{knowledge_points}
- 生活情境：{life_context}

教学要求：
1. 重点培养学生的数学建模能力
2. 解题过程要体现分析→列式→解答→检验的完整步骤
3. 注重解题策略的渗透
4. 设计多种变式练习
5. 体现数学来源于生活，服务于生活',
'小学数学应用题教学专用模板，重点培养解题策略和数学建模能力',
'小学,数学,应用题,解题策略,数学建模');
```

### 初中语文古诗词教案模板

```sql
INSERT INTO lesson_templates (template_name, subject, grade_level, template_type, template_content, ai_prompt, description, tags) VALUES 
('初中语文古诗词教学教案', '语文', '初中', '古诗词教学', 
'{
  "sections": [
    {
      "title": "教学目标",
      "content": "1. 朗读背诵：{recitation_goal}\n2. 理解鉴赏：{appreciation_goal}\n3. 情感体验：{emotion_goal}\n4. 文化传承：{culture_goal}",
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
      "title": "教学过程",
      "content": "一、导入新课（{intro_time}分钟）\n{intro_content}\n\n二、初读感知（{first_read_time}分钟）\n{first_read_content}\n\n三、品读鉴赏（{analysis_time}分钟）\n{analysis_content}\n\n四、诵读体验（{recitation_time}分钟）\n{recitation_content}\n\n五、拓展延伸（{extension_time}分钟）\n{extension_content}",
      "required": true
    },
    {
      "title": "诗词赏析",
      "content": "{poetry_analysis}",
      "required": true
    },
    {
      "title": "写作背景",
      "content": "{writing_background}",
      "required": true
    },
    {
      "title": "艺术特色",
      "content": "{artistic_features}",
      "required": true
    }
  ]
}',
'请为初中语文古诗词《{lesson_title}》生成教案：

诗词信息：
- 作者：{author}
- 朝代：{dynasty}
- 体裁：{genre}
- 主题：{theme}
- 艺术特色：{artistic_style}

教学要求：
1. 注重朗读指导，培养语感
2. 引导学生理解诗词意境
3. 分析诗词的艺术特色
4. 体会诗人的思想感情
5. 传承优秀传统文化',
'初中语文古诗词教学专用模板，注重朗读、理解、鉴赏、体验',
'初中,语文,古诗词,鉴赏,朗读,传统文化');
```

### 高中英语阅读理解教案模板

```sql
INSERT INTO lesson_templates (template_name, subject, grade_level, template_type, template_content, ai_prompt, description, tags) VALUES 
('高中英语阅读理解教案', '英语', '高中', '阅读理解', 
'{
  "sections": [
    {
      "title": "Teaching Objectives",
      "content": "1. Language Competence: {language_competence}\n2. Learning Ability: {learning_ability}\n3. Thinking Quality: {thinking_quality}\n4. Cultural Awareness: {cultural_awareness}",
      "required": true
    },
    {
      "title": "Key Points & Difficulties",
      "content": "Key Points: {key_points}\nDifficulties: {difficulties}",
      "required": true
    },
    {
      "title": "Teaching Procedures",
      "content": "Step 1: Lead-in ({leadin_time} mins)\n{leadin_content}\n\nStep 2: Pre-reading ({prereading_time} mins)\n{prereading_content}\n\nStep 3: While-reading ({reading_time} mins)\n{reading_content}\n\nStep 4: Post-reading ({postreading_time} mins)\n{postreading_content}\n\nStep 5: Summary & Homework ({summary_time} mins)\n{summary_content}",
      "required": true
    },
    {
      "title": "Reading Strategies",
      "content": "{reading_strategies}",
      "required": true
    },
    {
      "title": "Language Focus",
      "content": "{language_focus}",
      "required": true
    },
    {
      "title": "Critical Thinking",
      "content": "{critical_thinking}",
      "required": true
    }
  ]
}',
'请为高中英语阅读理解《{lesson_title}》生成教案：

文章信息：
- 文体：{text_type}
- 主题：{theme}
- 重点词汇：{key_vocabulary}
- 语法结构：{grammar_focus}
- 文化背景：{cultural_background}

教学要求：
1. 体现英语学科核心素养
2. 培养学生的阅读策略
3. 注重批判性思维培养
4. 提高语言运用能力
5. 增强文化意识',
'高中英语阅读理解专用教案模板，注重核心素养和思维品质培养',
'高中,英语,阅读理解,核心素养,批判思维');
```

## 模板使用统计查询

```sql
-- 查询最受欢迎的教案模板
SELECT 
    template_name,
    subject,
    grade_level,
    usage_count,
    rating,
    created_at
FROM lesson_templates 
WHERE is_active = 1 
ORDER BY usage_count DESC, rating DESC 
LIMIT 10;

-- 查询各学科模板分布
SELECT 
    subject,
    COUNT(*) as template_count,
    AVG(rating) as avg_rating,
    SUM(usage_count) as total_usage
FROM lesson_templates 
WHERE is_active = 1 
GROUP BY subject 
ORDER BY template_count DESC;

-- 查询用户使用记录
SELECT 
    lt.template_name,
    lt.subject,
    tul.lesson_title,
    tul.user_rating,
    tul.generation_time,
    tul.created_at
FROM template_usage_logs tul
JOIN lesson_templates lt ON tul.template_id = lt.id
WHERE tul.user_id = ? 
ORDER BY tul.created_at DESC;
```

## 模板维护和更新

```sql
-- 更新模板使用次数
UPDATE lesson_templates 
SET usage_count = usage_count + 1 
WHERE id = ?;

-- 更新模板评分
UPDATE lesson_templates 
SET rating = (
    SELECT AVG(user_rating) 
    FROM template_usage_logs 
    WHERE template_id = ? AND user_rating IS NOT NULL
)
WHERE id = ?;

-- 添加新模板
INSERT INTO lesson_templates (
    template_name, subject, grade_level, template_type, 
    template_content, ai_prompt, description, tags, created_by
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
```

---

**说明：**
1. 所有模板内容都采用JSON格式存储，便于程序解析和处理
2. AI提示词详细具体，确保生成的教案质量高、实用性强
3. 模板设计遵循各学科教学规律和课程标准要求
4. 支持模板的分类管理、使用统计和评价反馈
5. 数据库设计考虑了扩展性，可以方便地添加新的模板类型