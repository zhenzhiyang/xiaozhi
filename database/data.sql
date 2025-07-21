-- AI教案工具 - 模板分类和教案模板数据
-- 仅包含模板分类表和教案模板表的数据
-- 字段精确匹配schema.sql定义

USE ai_thub;

-- 插入模板分类数据
INSERT INTO template_categories (id, category_name, parent_id, sort_order, is_active) VALUES
(1, '小学', 0, 1, 1),
(2, '初中', 0, 2, 1),
(3, '高中', 0, 3, 1),
(4, '语文', 1, 1, 1),
(5, '数学', 1, 2, 1),
(6, '英语', 1, 3, 1),
(7, '科学', 1, 4, 1),
(8, '语文', 2, 1, 1),
(9, '数学', 2, 2, 1),
(10, '英语', 2, 3, 1),
(11, '物理', 2, 4, 1),
(12, '化学', 2, 5, 1),
(13, '生物', 2, 6, 1),
(14, '历史', 2, 7, 1),
(15, '地理', 2, 8, 1),
(16, '政治', 2, 9, 1),
(17, '语文', 3, 1, 1),
(18, '数学', 3, 2, 1),
(19, '英语', 3, 3, 1),
(20, '物理', 3, 4, 1),
(21, '化学', 3, 5, 1),
(22, '生物', 3, 6, 1),
(23, '历史', 3, 7, 1),
(24, '地理', 3, 8, 1),
(25, '政治', 3, 9, 1);

-- 插入中式教育规范教案模板
INSERT INTO lesson_templates (
    id, template_name, subject, grade_level, template_type, 
    template_content, ai_prompt, description, tags, 
    usage_count, rating, is_active, created_by
) VALUES

-- 1. 小学语文课文阅读
(1, '小学语文课文阅读教案', '语文', '小学', '课文阅读', 
'{"sections": [{"title": "教学目标", "content": "1. 知识与技能目标：{knowledge_skills}\n2. 过程与方法目标：{process_method}\n3. 情感态度价值观目标：{emotion_attitude}", "required": true}, {"title": "教学重点", "content": "{teaching_focus}", "required": true}, {"title": "教学难点", "content": "{teaching_difficulty}", "required": true}, {"title": "教学准备", "content": "教师准备：{teacher_preparation}\n学生准备：{student_preparation}", "required": true}, {"title": "教学过程", "content": "一、导入新课（{intro_time}分钟）\n{intro_content}\n\n二、初读感知（{first_read_time}分钟）\n{first_read_content}\n\n三、精读理解（{deep_read_time}分钟）\n{deep_read_content}\n\n四、拓展延伸（{extension_time}分钟）\n{extension_content}\n\n五、课堂小结（{summary_time}分钟）\n{summary_content}", "required": true}, {"title": "板书设计", "content": "{blackboard_design}", "required": true}, {"title": "作业布置", "content": "基础作业：{basic_homework}\n拓展作业：{extension_homework}", "required": true}, {"title": "教学反思", "content": "{teaching_reflection}", "required": false}]}', 
'请根据以下信息为小学语文课文《{lesson_title}》生成教案：

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
- 全中文表述，符合中式教育规范
- 语言简洁明了，活动设计符合小学生特点
- 时间分配合理，重点突出，难点分散
- 体现学生为主体的教学理念，格式规范，层次分明', 
'小学语文课文阅读标准模板，符合中式教育规范', '小学,语文,课文阅读,中式规范', 1250, 4.8, 1, 1),

-- 2. 小学数学计算教学
(2, '小学数学计算教学教案', '数学', '小学', '计算教学', 
'{"sections": [{"title": "教学目标", "content": "1. 知识与技能：{knowledge_skills}\n2. 数学思考：{mathematical_thinking}\n3. 问题解决：{problem_solving}\n4. 情感态度：{emotion_attitude}", "required": true}, {"title": "教学重点", "content": "{teaching_focus}", "required": true}, {"title": "教学难点", "content": "{teaching_difficulty}", "required": true}, {"title": "教学准备", "content": "{teaching_materials}", "required": true}, {"title": "教学过程", "content": "一、复习铺垫（{review_time}分钟）\n{review_content}\n\n二、探索新知（{explore_time}分钟）\n{explore_content}\n\n三、巩固练习（{practice_time}分钟）\n{practice_content}\n\n四、课堂小结（{summary_time}分钟）\n{summary_content}", "required": true}, {"title": "练习设计", "content": "基础练习：{basic_exercises}\n提高练习：{advanced_exercises}\n拓展练习：{extension_exercises}", "required": true}, {"title": "板书设计", "content": "{blackboard_design}", "required": true}]}', 
'请为小学数学《{lesson_title}》生成计算教学教案：

教学信息：
- 年级：{grade}
- 课时：{class_hours}
- 学科：{subject}

教学要求：
1. 教学目标要体现数学核心素养
2. 重点突出计算方法和算理
3. 难点针对学生易错点设计突破策略
4. 体现复习铺垫→探索新知→巩固练习→课堂小结结构
5. 练习设计有梯度，板书体现计算方法

请确保教案：
- 全中文表述，符合中式教育规范
- 符合小学生认知规律，体现数学思维过程', 
'小学数学计算教学标准模板', '小学,数学,计算教学,中式规范', 980, 4.7, 1, 1),

-- 3. 初中物理实验教学
(3, '初中物理实验教学教案', '物理', '初中', '实验教学', 
'{"sections": [{"title": "教学目标", "content": "1. 知识与技能：掌握实验原理和操作方法\n2. 过程与方法：学会科学探究的基本过程\n3. 情感态度：培养科学精神和实事求是态度\n4. 安全意识：增强实验安全和规范操作意识", "required": true}, {"title": "教学重点", "content": "{teaching_focus}", "required": true}, {"title": "教学难点", "content": "{teaching_difficulty}", "required": true}, {"title": "实验器材", "content": "{experiment_equipment}", "required": true}, {"title": "教学过程", "content": "一、创设情境（{intro_time}分钟）\n{intro_content}\n\n二、实验探究（{experiment_time}分钟）\n{experiment_content}\n\n三、数据分析（{analysis_time}分钟）\n{analysis_content}\n\n四、总结规律（{summary_time}分钟）\n{summary_content}", "required": true}, {"title": "实验步骤", "content": "{experiment_steps}", "required": true}, {"title": "数据记录", "content": "{data_record}", "required": true}, {"title": "安全提醒", "content": "{safety_reminders}", "required": true}]}', 
'请为初中物理实验《{lesson_title}》生成教案：

实验信息：
- 年级：{grade}
- 课时：{class_hours}
- 学科：{subject}

教学要求：
1. 体现科学探究过程
2. 注重实验安全和规范操作
3. 培养数据分析和科学思维
4. 联系生活实际，突出物理学科特点

请确保教案：
- 全中文表述，符合中式教育规范
- 实验步骤清晰，安全提醒到位', 
'初中物理实验教学标准模板', '初中,物理,实验教学,中式规范', 756, 4.9, 1, 1),

-- 4. 高中化学概念教学
(4, '高中化学概念教学教案', '化学', '高中', '概念教学', 
'{"sections": [{"title": "教学目标", "content": "1. 核心素养目标：{core_literacy}\n2. 知识与技能目标：{knowledge_skills}\n3. 过程与方法目标：{process_method}\n4. 情感态度价值观目标：{emotion_values}", "required": true}, {"title": "教学重点", "content": "{teaching_focus}", "required": true}, {"title": "教学难点", "content": "{teaching_difficulty}", "required": true}, {"title": "教学方法", "content": "{teaching_methods}", "required": true}, {"title": "教学过程", "content": "一、情境创设（{context_time}分钟）\n{context_content}\n\n二、概念形成（{formation_time}分钟）\n{formation_content}\n\n三、概念理解（{understanding_time}分钟）\n{understanding_content}\n\n四、概念应用（{application_time}分钟）\n{application_content}\n\n五、反思总结（{summary_time}分钟）\n{summary_content}", "required": true}, {"title": "概念图", "content": "{concept_map}", "required": true}, {"title": "典型例题", "content": "{example_problems}", "required": true}, {"title": "课堂练习", "content": "{class_exercises}", "required": true}, {"title": "课后作业", "content": "{homework}", "required": true}]}', 
'请为高中化学概念教学《{lesson_title}》生成教案：

教学信息：
- 年级：{grade}
- 课时：{class_hours}
- 学科：{subject}

教学要求：
1. 目标要体现化学核心素养
2. 概念建构体现认知过程
3. 重点突出概念本质和应用
4. 难点设计突破策略
5. 教学方法多样化

请确保教案：
- 全中文表述，符合中式教育规范
- 概念阐述准确科学，体现学科特点', 
'高中化学概念教学标准模板', '高中,化学,概念教学,中式规范', 623, 4.6, 1, 1),

-- 5. 小学英语词汇教学
(5, '小学英语词汇教学教案', '英语', '小学', '词汇教学', 
'{"sections": [{"title": "教学目标", "content": "1. 语言知识：掌握{target_words}等词汇\n2. 语言技能：能正确听说读写目标词汇\n3. 学习策略：学会通过语境和联想记忆单词\n4. 文化意识：了解相关文化背景", "required": true}, {"title": "教学重点", "content": "{teaching_focus}", "required": true}, {"title": "教学难点", "content": "{teaching_difficulty}", "required": true}, {"title": "教学准备", "content": "教师准备：{teacher_preparation}\n学生准备：{student_preparation}\n教学用具：{teaching_aids}", "required": true}, {"title": "教学过程", "content": "一、热身导入（{warmup_time}分钟）\n{warmup_content}\n\n二、词汇呈现（{presentation_time}分钟）\n{presentation_content}\n\n三、练习巩固（{practice_time}分钟）\n{practice_content}\n\n四、综合运用（{production_time}分钟）\n{production_content}\n\n五、总结作业（{summary_time}分钟）\n{summary_content}", "required": true}, {"title": "板书设计", "content": "{blackboard_design}", "required": true}, {"title": "作业布置", "content": "{homework}", "required": true}]}', 
'请为小学英语词汇课《{lesson_title}》生成教案：

课程信息：
- 年级：{grade}
- 课时：{duration}
- 学科：{subject}

教学要求：
1. 体现英语学科核心素养
2. 遵循听说读写全面发展原则
3. 创设真实语言情境
4. 活动设计符合小学生特点

请确保教案：
- 全中文表述，符合中式教育规范', 
'小学英语词汇教学标准模板', '小学,英语,词汇教学,中式规范', 890, 4.5, 1, 1),

-- 6. 初中英语阅读教学
(6, '初中英语阅读教学教案', '英语', '初中', '阅读理解', 
'{"sections": [{"title": "教学目标", "content": "1. 语言能力：提升阅读理解能力，掌握阅读策略\n2. 思维品质：培养批判性思维和分析能力\n3. 文化意识：增强跨文化交际意识\n4. 学习能力：提高自主学习和合作学习能力", "required": true}, {"title": "教学重点", "content": "{teaching_focus}", "required": true}, {"title": "教学难点", "content": "{teaching_difficulty}", "required": true}, {"title": "教学准备", "content": "教师准备：{teacher_preparation}\n学生准备：{student_preparation}\n阅读材料：{reading_materials}", "required": true}, {"title": "教学过程", "content": "一、导入激趣（{intro_time}分钟）\n{intro_content}\n\n二、读前预测（{pre_read_time}分钟）\n{pre_read_content}\n\n三、读中理解（{while_read_time}分钟）\n{while_read_content}\n\n四、读后拓展（{post_read_time}分钟）\n{post_read_content}\n\n五、总结提升（{summary_time}分钟）\n{summary_content}", "required": true}, {"title": "阅读策略", "content": "{reading_strategies}", "required": true}, {"title": "板书设计", "content": "{blackboard_design}", "required": true}, {"title": "作业布置", "content": "{homework}", "required": true}]}', 
'请为初中英语阅读课《{lesson_title}》生成教案：

课程信息：
- 年级：{grade}
- 课时：{duration}
- 学科：{subject}

教学要求：
1. 体现英语学科核心素养
2. 注重阅读策略指导
3. 培养批判性思维
4. 联系文化背景知识

请确保教案：
- 全中文表述，符合中式教育规范', 
'初中英语阅读教学标准模板', '初中,英语,阅读理解,中式规范', 756, 4.7, 1, 1),

-- 7. 高中英语阅读教学
(7, '高中英语阅读教学教案', '英语', '高中', '阅读理解', 
'{"sections": [{"title": "教学目标", "content": "1. 语言能力：提升深度阅读理解能力\n2. 文化意识：增强文化理解和跨文化交际能力\n3. 思维品质：培养高阶思维和批判性思维\n4. 学习能力：发展自主学习和终身学习能力", "required": true}, {"title": "教学重点", "content": "{teaching_focus}", "required": true}, {"title": "教学难点", "content": "{teaching_difficulty}", "required": true}, {"title": "教学准备", "content": "教师准备：{teacher_preparation}\n学生准备：{student_preparation}\n拓展资源：{extension_resources}", "required": true}, {"title": "教学过程", "content": "一、情境导入（{intro_time}分钟）\n{intro_content}\n\n二、文本解读（{reading_time}分钟）\n{reading_content}\n\n三、深度探究（{inquiry_time}分钟）\n{inquiry_content}\n\n四、思维拓展（{extension_time}分钟）\n{extension_content}\n\n五、总结反思（{summary_time}分钟）\n{summary_content}", "required": true}, {"title": "思维训练", "content": "{thinking_training}", "required": true}, {"title": "文化拓展", "content": "{cultural_extension}", "required": true}, {"title": "作业设计", "content": "{homework_design}", "required": true}]}', 
'请为高中英语阅读课《{lesson_title}》生成教案：

课程信息：
- 年级：{grade}
- 课时：{duration}
- 学科：{subject}

教学要求：
1. 体现英语学科核心素养
2. 注重深度阅读和思维训练
3. 培养文化理解和批判思维
4. 提升综合语言运用能力

请确保教案：
- 全中文表述，符合中式教育规范', 
'高中英语阅读教学标准模板', '高中,英语,阅读理解,中式规范', 623, 4.8, 1, 1),

-- 8. 高中英语写作教学
(8, '高中英语写作教学教案', '英语', '高中', '写作教学', 
'{"sections": [{"title": "教学目标", "content": "1. 语言能力：提升英语写作能力\n2. 思维品质：培养逻辑思维和创新能力\n3. 文化意识：增强跨文化表达能力\n4. 学习能力：发展自主写作和修改能力", "required": true}, {"title": "教学重点", "content": "{teaching_focus}", "required": true}, {"title": "教学难点", "content": "{teaching_difficulty}", "required": true}, {"title": "写作素材", "content": "{writing_materials}", "required": true}, {"title": "教学过程", "content": "一、情境导入（{intro_time}分钟）\n{intro_content}\n\n二、范文赏析（{model_time}分钟）\n{model_content}\n\n三、写作指导（{guidance_time}分钟）\n{guidance_content}\n\n四、独立写作（{writing_time}分钟）\n{writing_content}\n\n五、评价修改（{evaluation_time}分钟）\n{evaluation_content}", "required": true}, {"title": "写作技巧", "content": "{writing_skills}", "required": true}, {"title": "评价标准", "content": "{evaluation_criteria}", "required": true}, {"title": "课后作业", "content": "{homework}", "required": true}]}', 
'请为高中英语写作课《{lesson_title}》生成教案：

写作信息：
- 年级：{grade}
- 课时：{duration}
- 学科：{subject}

教学要求：
1. 体现英语学科核心素养
2. 注重写作过程指导
3. 培养批判性思维
4. 提升语言运用能力

请确保教案：
- 全中文表述，符合中式教育规范', 
'高中英语写作教学标准模板', '高中,英语,写作教学,中式规范', 445, 4.6, 1, 1),

-- 9. 通用中式标准教案模板
(9, '通用中式标准教案模板', '通用', '全学段', '标准教学', 
'{"sections": [{"title": "教学目标", "content": "1. 知识与技能：{knowledge_skills}\n2. 过程与方法：{process_method}\n3. 情感态度价值观：{emotion_values}", "required": true}, {"title": "学情分析", "content": "{student_analysis}", "required": true}, {"title": "教学重点", "content": "{teaching_focus}", "required": true}, {"title": "教学难点", "content": "{teaching_difficulty}", "required": true}, {"title": "教学准备", "content": "教师准备：{teacher_preparation}\n学生准备：{student_preparation}\n教学资源：{teaching_resources}", "required": true}, {"title": "教学过程", "content": "一、导入新课（{intro_time}分钟）\n{intro_content}\n\n二、新知学习（{learning_time}分钟）\n{learning_content}\n\n三、巩固练习（{practice_time}分钟）\n{practice_content}\n\n四、课堂小结（{summary_time}分钟）\n{summary_content}\n\n五、布置作业（{homework_time}分钟）\n{homework_content}", "required": true}, {"title": "板书设计", "content": "{blackboard_design}", "required": true}, {"title": "教学评价", "content": "{teaching_evaluation}", "required": true}, {"title": "教学反思", "content": "{teaching_reflection}", "required": false}]}', 
'请为《{lesson_title}》生成中式标准教案：

课程信息：
- 年级：{grade}
- 学科：{subject}
- 课时：{duration}

教学要求：
1. 体现现代教育理念
2. 符合课程标准要求
3. 突出学生主体地位
4. 注重核心素养培养
5. 体现学科育人价值

请确保教案：
- 全中文表述，格式规范
- 结构完整，层次清晰
- 内容具体，操作性强
- 符合中式教育特点', 
'适用于各学科的中式标准教案模板', '通用,中式标准,全学段,规范统一', 1563, 4.9, 1, 1),

-- 10. 小学科学实验探究
(10, '小学科学实验探究教案', '科学', '小学', '实验探究', 
'{"sections": [{"title": "探究目标", "content": "1. 科学知识：{science_knowledge}\n2. 探究能力：{inquiry_skills}\n3. 科学态度：{science_attitude}", "required": true}, {"title": "探究重点", "content": "{inquiry_focus}", "required": true}, {"title": "探究难点", "content": "{inquiry_difficulty}", "required": true}, {"title": "实验材料", "content": "{experiment_materials}", "required": true}, {"title": "探究过程", "content": "一、提出问题（{question_time}分钟）\n{question_content}\n\n二、作出假设（{hypothesis_time}分钟）\n{hypothesis_content}\n\n三、设计实验（{experiment_time}分钟）\n{experiment_content}\n\n四、收集数据（{data_time}分钟）\n{data_content}\n\n五、得出结论（{conclusion_time}分钟）\n{conclusion_content}", "required": true}, {"title": "实验记录", "content": "{experiment_record}", "required": true}, {"title": "安全提醒", "content": "{safety_reminders}", "required": true}]}', 
'请为小学科学实验《{lesson_title}》生成探究式教案：

实验信息：
- 年级：{grade}
- 学科：{subject}
- 课时：{duration}

教学要求：
1. 体现科学探究基本过程
2. 培养观察、实验、分析能力
3. 注重科学思维和科学态度
4. 强调实验安全和规范操作
5. 联系生活实际

请确保教案：
- 全中文表述，符合中式教育规范
- 探究过程完整，实验设计科学', 
'小学科学实验探究标准模板', '小学,科学,实验探究,STEAM,中式规范', 324, 4.7, 1, 1);

-- 数据插入完成
SELECT '模板分类和教案模板数据插入完成' AS 状态信息;