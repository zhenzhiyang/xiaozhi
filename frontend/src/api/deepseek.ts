/**
 * DeepSeek API 接口服务
 * 用于调用DeepSeek AI API生成教案内容
 */

const DEEPSEEK_API_KEY = 'sk-b64d4e1a04e340bca704843eb776ab4e'
const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions'

export interface GenerateRequest {
  templateId: number
  title: string
  grade: string
  subject: string
  duration: string
  additionalRequirements?: string
}

export interface StreamResponse {
  content: string
  done: boolean
  error?: string
}

/**
 * 获取教案模板的AI提示词
 */
export function getTemplatePrompt(templateId: number, params: GenerateRequest): string {
  // 根据模板ID获取对应的提示词模板
  const templates = {
    1: { // 通用新授课教案模板
      prompt: `请为《{lesson_title}》生成一份{grade}{subject}新授课教案：

课程信息：
- 年级：{grade}
- 学科：{subject}
- 课时：{class_hours}
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
- 体现新课程理念

请按照以下格式生成教案：

# 《{lesson_title}》教案

## 一、教学目标
### 1. 知识与技能
### 2. 过程与方法
### 3. 情感态度价值观

## 二、教学重点
## 三、教学难点
## 四、教学准备
## 五、教学过程
### 导入新课
### 新知学习
### 巩固练习
### 课堂小结

## 六、板书设计
## 七、作业布置
## 八、教学反思`
    },
    
    2: { // 通用复习课教案模板
      prompt: `请为《{lesson_title}》生成一份{grade}{subject}复习课教案：

复习信息：
- 年级：{grade}
- 学科：{subject}
- 复习范围：{review_scope}
- 复习类型：{review_type}
- 课时：{class_hours}

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
- 体现复习课特点

# 《{lesson_title}》复习课教案

## 一、复习目标
## 二、复习重点
## 三、复习难点
## 四、复习过程
### 知识回顾
### 系统梳理
### 重点突破
### 综合练习
### 总结提升

## 五、知识网络图
## 六、典型例题
## 七、易错点分析
## 八、练习设计`
    },
    
    3: { // 通用实验课教案模板
      prompt: `请为《{lesson_title}》生成一份{grade}{subject}实验课教案：

实验信息：
- 年级：{grade}
- 学科：{subject}
- 实验类型：{experiment_type}
- 实验目的：{experiment_purpose}
- 课时：{class_hours}

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
- 培养科学思维

# 《{lesson_title}》实验课教案

## 一、实验目标
## 二、实验原理
## 三、实验器材
## 四、实验过程
### 实验准备
### 实验操作
### 数据记录
### 结果分析
### 实验总结

## 五、实验步骤
## 六、数据记录表
## 七、注意事项
## 八、实验结论
## 九、思考问题`
    },
    
    4: { // 小学语文课文阅读教案
      prompt: `请根据以下信息为小学语文课文《{lesson_title}》生成一份详细的教案：

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

## 八、教学反思`
    },
    
    5: { // 小学数学计算教学教案
      prompt: `请为小学数学《{lesson_title}》生成一份计算教学教案：

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

## 八、板书设计`
    },
    
    6: { // 小学数学应用题教学教案
      prompt: `请为小学数学应用题《{lesson_title}》生成教案：

题目信息：
- 年级：{grade}
- 课时：{class_hours}
- 学科：{subject}

教学要求：
1. 重点培养学生的数学建模能力
2. 解题过程要体现分析→列式→解答→检验的完整步骤
3. 注重解题策略的渗透
4. 设计多种变式练习
5. 体现数学来源于生活，服务于生活

# 《{lesson_title}》教案

## 一、教学内容
## 二、教学目标
## 三、教学重难点
## 四、教学过程
### 复习导入
### 探究新知
### 解题训练
### 总结反思

## 五、解题策略
## 六、变式练习`
    },
    
    7: { // 小学英语单词教学教案
      prompt: `请为小学英语单词教学《{lesson_title}》生成教案：

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
## 七、Homework`
    },
    
    8: { // 初中语文古诗词教学教案
      prompt: `请为初中语文古诗词《{lesson_title}》生成教案：

诗词信息：
- 年级：{grade}
- 课时：{class_hours}
- 学科：{subject}

教学要求：
1. 注重朗读指导，培养语感
2. 引导学生理解诗词意境
3. 分析诗词的艺术特色
4. 体会诗人的思想感情
5. 传承优秀传统文化

# 《{lesson_title}》教案

## 一、教学目标
### 朗读背诵
### 理解鉴赏
### 情感体验
### 文化传承

## 二、教学重点
## 三、教学难点
## 四、教学过程
### 导入新课
### 初读感知
### 品读鉴赏
### 诵读体验
### 拓展延伸

## 五、诗词赏析
## 六、写作背景
## 七、艺术特色`
    },
    
    9: { // 初中物理实验教学教案
      prompt: `请为初中物理实验《{lesson_title}》生成教案：

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
## 九、课堂小结`
    },
    
    10: { // 高中化学概念教学教案
      prompt: `请为高中化学概念教学《{lesson_title}》生成教案：

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
## 九、课后作业`
    },
    
    11: { // 高中历史专题教学教案
      prompt: `请为高中历史专题《{lesson_title}》生成教案：

教学信息：
- 年级：{grade}
- 课时：{class_hours}
- 学科：{subject}

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
- 体现价值观引领

# 《{lesson_title}》教案

## 一、教学目标
### 史料实证
### 历史解释
### 时空观念
### 唯物史观
### 家国情怀

## 二、教学重点
## 三、教学难点
## 四、史料准备
## 五、教学过程
### 情境导入，激发兴趣
### 史料研读，获取信息
### 问题探究，深入分析
### 历史解释，形成认识
### 拓展延伸，升华情感

## 六、史料分析
## 七、问题设计
## 八、课堂小结
## 九、课后思考`
    },
    
    12: { // 高中英语阅读理解教案
      prompt: `请为高中英语阅读理解《{lesson_title}》生成教案：

文章信息：
- 年级：{grade}
- 课时：{class_hours}
- 学科：{subject}

教学要求：
1. 体现英语学科核心素养
2. 培养学生的阅读策略
3. 注重批判性思维培养
4. 提高语言运用能力
5. 增强文化意识

# 《{lesson_title}》教案

## 一、Teaching Objectives
### Language Competence
### Learning Ability
### Thinking Quality
### Cultural Awareness

## 二、Key Points & Difficulties
## 三、Teaching Procedures
### Step 1: Lead-in
### Step 2: Pre-reading
### Step 3: While-reading
### Step 4: Post-reading
### Step 5: Summary & Homework

## 四、Reading Strategies
## 五、Language Focus
## 六、Critical Thinking`
    }
  }
  
  const template = templates[templateId as keyof typeof templates]
  if (!template) {
    return `请为《${params.title}》生成一份${params.grade}${params.subject}教案，课时${params.duration}。要求内容详细、结构清晰、格式规范。`
  }
  
  return template.prompt
    .replace(/{lesson_title}/g, params.title)
    .replace(/{grade}/g, params.grade)
    .replace(/{subject}/g, params.subject)
    .replace(/{class_hours}/g, params.duration)
}

/**
 * 流式生成教案内容
 */
export async function* generateLessonStream(request: GenerateRequest): AsyncGenerator<StreamResponse> {
  try {
    // 使用真实的后端API调用 - 优先使用模板数据库中的提示词
    const response = await fetch('http://localhost:8080/api/ai/generate/stream', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request)
    })

    if (!response.ok) {
      throw new Error(`API请求失败: ${response.status} ${response.statusText}`)
    }

    const reader = response.body?.getReader()
    if (!reader) {
      throw new Error('无法获取响应流')
    }

    const decoder = new TextDecoder()
    let buffer = ''

    while (true) {
      const { done, value } = await reader.read()
      
      if (done) {
        yield { content: '', done: true }
        break
      }

      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split('\n')
      buffer = lines.pop() || ''

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6).trim()
          
          if (data === '[DONE]') {
            yield { content: '', done: true }
            return
          }

          try {
            const parsed = JSON.parse(data)
            const content = parsed.content || ''
            
            if (content) {
              yield { content, done: false }
            }
          } catch (parseError) {
            console.warn('解析SSE数据失败:', parseError, 'Data:', data)
            continue
          }
        }
      }
    }
  } catch (error) {
    console.error('后端API调用失败:', error)
    
    // 如果后端API失败，使用本地模板生成（仅作为降级方案）
    const prompt = getTemplatePrompt(request.templateId, request)
    const finalPrompt = request.additionalRequirements 
      ? `${prompt}\n\n额外要求：${request.additionalRequirements}`
      : prompt

    try {
      const fallbackResponse = await fetch(DEEPSEEK_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            {
              role: 'system',
              content: '你是一位专业的教学设计专家，擅长制作高质量的教案。请根据用户提供的信息，生成结构清晰、内容详实、格式规范的教案。教案应该具有很强的实用性和可操作性。输出格式使用Markdown，确保层次分明、条理清楚。'
            },
            {
              role: 'user',
              content: finalPrompt
            }
          ],
          stream: true,
          temperature: 0.7,
          max_tokens: 4000
        })
      })

      if (!fallbackResponse.ok) {
        const errorText = await fallbackResponse.text()
        throw new Error(`API请求失败: ${fallbackResponse.status} ${fallbackResponse.statusText}. ${errorText}`)
      }

      const fallbackReader = fallbackResponse.body?.getReader()
      if (!fallbackReader) {
        throw new Error('无法获取响应流')
      }

      const fallbackDecoder = new TextDecoder()
      let fallbackBuffer = ''
      let fallbackRetryCount = 0
      const maxRetries = 3

      while (true) {
        try {
          const { done, value } = await fallbackReader.read()
          
          if (done) {
            yield { content: '', done: true }
            break
          }

          fallbackBuffer += fallbackDecoder.decode(value, { stream: true })
          const lines = fallbackBuffer.split('\n')
          fallbackBuffer = lines.pop() || ''

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6).trim()
              
              if (data === '[DONE]') {
                yield { content: '', done: true }
                return
              }

              try {
                const parsed = JSON.parse(data)
                const content = parsed.choices?.[0]?.delta?.content || ''
                
                if (content) {
                  yield { content, done: false }
                }
              } catch (parseError) {
                console.warn('解析SSE数据失败:', parseError, 'Data:', data)
                continue
              }
            }
          }
          
          fallbackRetryCount = 0 // 重置重试计数
        } catch (readError) {
          console.error('读取流数据失败:', readError)
          fallbackRetryCount++
          
          if (fallbackRetryCount >= maxRetries) {
            throw new Error(`读取流数据失败，已重试${maxRetries}次`)
          }
          
          // 短暂延迟后重试
          await new Promise(resolve => setTimeout(resolve, 1000))
        }
      }
    } catch (error) {
      console.error('生成教案流失败:', error)
      const errorMessage = error instanceof Error ? error.message : '生成过程中发生未知错误'
      
      yield { 
        content: '', 
        done: true, 
        error: errorMessage
      }
    }
  }
}

/**
 * 格式化生成的教案内容
 */
export function formatLessonContent(content: string): string {
  if (!content || typeof content !== 'string') {
    return ''
  }
  
  // 防止内容过长导致性能问题
  if (content.length > 50000) {
    content = content.substring(0, 50000) + '...'
  }
  
  try {
    // 替换markdown标题为HTML标题
    content = content.replace(/^# (.*$)/gm, '<h1>$1</h1>')
    content = content.replace(/^## (.*$)/gm, '<h2>$1</h2>')
    content = content.replace(/^### (.*$)/gm, '<h3>$1</h3>')
    content = content.replace(/^#### (.*$)/gm, '<h4>$1</h4>')
    
    // 替换粗体
    content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    
    // 替换斜体
    content = content.replace(/\*(.*?)\*/g, '<em>$1</em>')
    
    // 处理有序列表
    content = content.replace(/^(\d+)\. (.*)$/gm, '<li>$2</li>')
    
    // 处理无序列表
    content = content.replace(/^- (.*)$/gm, '<li>$1</li>')
    
    // 处理换行 - 先处理双换行为段落分隔
    content = content.replace(/\n\n/g, '</p><p>')
    
    // 处理单换行为换行符
    content = content.replace(/\n/g, '<br>')
    
    // 包装段落
    content = `<p>${content}</p>`
    
    // 清理空段落和多余的换行
    content = content.replace(/<p><\/p>/g, '')
    content = content.replace(/<p><br><\/p>/g, '')
    content = content.replace(/<p>\s*<\/p>/g, '')
    
    // 处理连续的换行符
    content = content.replace(/(<br>\s*){3,}/g, '<br><br>')
    
    return content
  } catch (error) {
    console.error('Error formatting lesson content:', error)
    return content // 如果格式化失败，返回原始内容
  }
}

/**
 * 生成模拟教案内容
 */
function generateMockLessonContent(request: GenerateRequest): string {
  return `# 《${request.title}》教案

## 一、教学目标

### 1. 知识与技能目标
- 掌握${request.title}的基本概念和原理
- 能够运用所学知识解决实际问题
- 培养学生的逻辑思维和分析能力

### 2. 过程与方法目标
- 通过观察、实验、讨论等方式，体验知识的形成过程
- 学会合作学习，提高交流表达能力
- 培养学生主动探索的学习习惯

### 3. 情感态度价值观目标
- 激发学生对${request.subject}学科的兴趣
- 培养严谨的科学态度和求实精神
- 增强学生的自信心和成就感

## 二、教学重点
本节课的教学重点是${request.title}的核心概念理解和基本方法的掌握。

## 三、教学难点
教学难点在于概念的抽象性和实际应用的结合，需要通过具体实例来帮助学生理解。

## 四、教学准备

### 1. 教师准备
- 教学课件和多媒体设备
- 相关教具和实验材料
- 练习题和测试题

### 2. 学生准备
- 预习相关内容
- 准备笔记本和文具
- 复习前置知识

## 五、教学过程

### 1. 导入新课（5分钟）
通过生活中的实例引入本节课要学习的内容，激发学生的学习兴趣。

**设计意图**：创设情境，让学生在熟悉的生活场景中感受到学习的必要性。

### 2. 新知探索（25分钟）
#### （1）概念讲解（10分钟）
详细介绍${request.title}的定义、特点和基本原理。

#### （2）例题分析（10分钟）
通过典型例题的分析，帮助学生理解概念的应用。

#### （3）学生练习（5分钟）
让学生独立完成简单练习，巩固所学知识。

### 3. 深化理解（12分钟）
组织学生进行小组讨论，分享学习心得，解决疑难问题。

### 4. 课堂小结（3分钟）
总结本节课的主要内容，强调重点和难点。

## 六、板书设计

\`\`\`
${request.title}
├── 定义：...
├── 特点：...
├── 应用：...
└── 注意事项：...
\`\`\`

## 七、作业布置

### 1. 基础作业
完成教材第X页练习题1-5题。

### 2. 拓展作业
查找生活中关于${request.title}的实际应用实例，下节课分享。

## 八、教学反思
本节课通过多种教学方法相结合，帮助学生理解了${request.title}的相关知识。在今后的教学中，应该更多地关注学生的个体差异，采用分层教学的方法。

---

**备注**: 本教案适用于${request.grade}${request.subject}教学，课时安排为${request.duration}。`
}

/**
 * 保存生成记录
 */
export function saveGenerationRecord(request: GenerateRequest, content: string, duration: number) {
  const record = {
    templateId: request.templateId,
    title: request.title,
    grade: request.grade,
    subject: request.subject,
    duration: request.duration,
    content: content,
    generationTime: duration,
    timestamp: new Date().toISOString()
  }
  
  // 保存到localStorage
  const records = JSON.parse(localStorage.getItem('lessonRecords') || '[]')
  records.unshift(record)
  // 只保留最近50条记录
  if (records.length > 50) {
    records.splice(50)
  }
  localStorage.setItem('lessonRecords', JSON.stringify(records))
}