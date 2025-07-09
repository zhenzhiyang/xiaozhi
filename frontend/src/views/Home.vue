<template>
  <div class="home-page">
    <!-- 顶部导航栏 -->
    <nav class="navbar">
      <div class="navbar-content">
        <div class="logo">
          <div class="logo-icon">AI</div>
          <span>智能教案</span>
        </div>
        <ul class="nav-links">
          <li><a href="#home" class="active">首页</a></li>
          <li><a href="#features">功能</a></li>
          <li><a href="#benefits">特性</a></li>
          <li><a href="#getting-started">开始使用</a></li>
          <li><a href="#about">关于我们</a></li>
        </ul>
        <div class="auth-buttons">
          <el-button @click="handleLogin" class="nav-auth-btn">登录</el-button>
          <el-button type="primary" @click="handleRegister" class="nav-auth-btn nav-auth-btn-primary">注册</el-button>
        </div>
      </div>
    </nav>

    <!-- Hero横幅区 -->
    <section id="home" class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">AI智能教案工具</h1>
        <p class="hero-subtitle">基于人工智能的教案生成与PPT制作平台，让教学更高效、更智能</p>
        
        <div class="hero-search">
          <div class="search-container">
            <el-input 
              v-model="searchQuery" 
              size="large" 
              placeholder="输入教学主题，如：初一物理牛顿第一定律..."
              class="search-input"
              @keyup.enter="handleSearch"
            >
              <template #suffix>
                <el-button 
                  @click="handleSearch"
                  :loading="searchLoading"
                  class="search-arrow-btn"
                  :icon="ArrowRight"
                />
              </template>
            </el-input>
          </div>
        </div>

        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">50K+</span>
            <span class="stat-label">教案模板</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">100K+</span>
            <span class="stat-label">用户使用</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">20+</span>
            <span class="stat-label">学科支持</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">95%</span>
            <span class="stat-label">满意度</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心功能展示区 -->
    <section id="features" class="features-section">
      <div class="section-content">
        <div class="section-header">
          <h2 class="section-title">核心功能</h2>
          <p class="section-subtitle">全面的教学辅助工具，助力现代化教学</p>
        </div>
        
        <el-row :gutter="30" class="features-grid">
          <el-col :xs="24" :sm="12" :md="6" v-for="feature in features" :key="feature.id">
            <el-card class="feature-card" @click="handleFeatureClick(feature)">
              <div class="feature-icon">{{ feature.emoji }}</div>
              <h3 class="feature-title">{{ feature.title }}</h3>
              <p class="feature-description">{{ feature.description }}</p>
              <el-button type="primary" plain>{{ feature.buttonText }}</el-button>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </section>

    <!-- 产品特性介绍 -->
    <section id="benefits" class="benefits-section">
      <div class="section-content">
        <div class="section-header">
          <h2 class="section-title">产品特性</h2>
          <p class="section-subtitle">为教师提供全方位的教学支持</p>
        </div>
        
        <div class="benefit-item" v-for="(benefit, index) in benefits" :key="index" :class="{ 'reverse': index % 2 === 1 }">
          <div class="benefit-content">
            <h3 class="benefit-title">{{ benefit.title }}</h3>
            <p class="benefit-description">{{ benefit.description }}</p>
            <div class="benefit-features">
              <div v-for="(feature, fIndex) in benefit.features" :key="fIndex" class="benefit-feature-item">
                <el-icon class="feature-check"><CircleCheck /></el-icon>
                <span>{{ feature }}</span>
              </div>
            </div>
          </div>
          <div class="benefit-visual">
            <div class="benefit-icon">{{ benefit.emoji }}</div>
            <p class="benefit-subtitle">{{ benefit.subtitle }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 学科支持展示 -->
    <section class="subjects-section">
      <div class="section-content">
        <div class="section-header">
          <h2 class="section-title">学科支持</h2>
          <p class="section-subtitle">覆盖全学段、全学科的教学内容生成</p>
        </div>
        
        <el-row :gutter="20" class="subjects-grid">
          <el-col :xs="12" :sm="8" :md="4" v-for="subject in subjects" :key="subject.id">
            <div class="subject-card" @click="handleSubjectClick(subject)">
              <div class="subject-icon">{{ subject.emoji }}</div>
              <h4 class="subject-name">{{ subject.name }}</h4>
              <p class="subject-count">{{ subject.count }}+ 模板</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>

    <!-- 用户评价 -->
    <section class="testimonials-section">
      <div class="section-content">
        <div class="section-header">
          <h2 class="section-title">用户评价</h2>
          <p class="section-subtitle">来自一线教师的真实反馈</p>
        </div>
        
        <el-row :gutter="30" class="testimonials-grid">
          <el-col :xs="24" :md="8" v-for="testimonial in testimonials" :key="testimonial.id">
            <el-card class="testimonial-card">
              <div class="testimonial-content">
                <p class="testimonial-text">"{{ testimonial.content }}"</p>
                <div class="testimonial-author">
                  <div class="author-avatar">{{ testimonial.name.charAt(0) }}</div>
                  <div class="author-info">
                    <h5 class="author-name">{{ testimonial.name }}</h5>
                    <p class="author-title">{{ testimonial.title }}</p>
                  </div>
                </div>
                <div class="testimonial-rating">
                  <el-rate v-model="testimonial.rating" disabled show-score text-color="#ff9900" score-template="{value}"/>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </section>

    <!-- 快速开始指南 -->
    <section id="getting-started" class="getting-started-section">
      <div class="section-content">
        <div class="section-header">
          <h2 class="section-title">快速开始</h2>
          <p class="section-subtitle">简单四步，即可开始使用AI教案工具</p>
        </div>
        
        <el-row :gutter="30" class="steps-container">
          <el-col :xs="24" :sm="12" :md="6" v-for="(step, index) in steps" :key="index">
            <el-card class="step-card">
              <div class="step-number">{{ index + 1 }}</div>
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-description">{{ step.description }}</p>
              <div class="step-action">
                <el-button v-if="index === 0" type="primary" @click="handleRegister" class="step-register-btn">立即注册</el-button>
                <el-button v-else-if="index === 3" type="success" @click="handleDemo" class="step-demo-btn">体验演示</el-button>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </section>

    <!-- 常见问题 -->
    <section class="faq-section">
      <div class="section-content">
        <div class="section-header">
          <h2 class="section-title">常见问题</h2>
          <p class="section-subtitle">解答您关心的问题</p>
        </div>
        
        <el-collapse v-model="activeFaq" class="faq-collapse">
          <el-collapse-item v-for="faq in faqs" :key="faq.id" :title="faq.question" :name="faq.id">
            <p class="faq-answer">{{ faq.answer }}</p>
          </el-collapse-item>
        </el-collapse>
      </div>
    </section>

    <!-- 联系我们 -->
    <section id="about" class="contact-section">
      <div class="section-content">
        <el-row :gutter="60">
          <el-col :xs="24" :md="12">
            <div class="contact-info">
              <h2 class="section-title">联系我们</h2>
              <p class="section-subtitle">我们很乐意为您提供帮助</p>
              
              <div class="contact-item">
                <el-icon class="contact-icon"><Message /></el-icon>
                <div class="contact-details">
                  <h4>邮箱支持</h4>
                  <p>support@aithub.com</p>
                </div>
              </div>
              
              <div class="contact-item">
                <el-icon class="contact-icon"><Phone /></el-icon>
                <div class="contact-details">
                  <h4>电话咨询</h4>
                  <p>400-888-8888</p>
                </div>
              </div>
              
              <div class="contact-item">
                <el-icon class="contact-icon"><ChatDotSquare /></el-icon>
                <div class="contact-details">
                  <h4>在线客服</h4>
                  <p>工作日 9:00-18:00</p>
                </div>
              </div>
            </div>
          </el-col>
          
          <el-col :xs="24" :md="12">
            <el-card class="contact-form-card">
              <h3>快速咨询</h3>
              <el-form :model="contactForm" label-position="top">
                <el-form-item label="姓名">
                  <el-input v-model="contactForm.name" placeholder="请输入您的姓名" />
                </el-form-item>
                <el-form-item label="邮箱">
                  <el-input v-model="contactForm.email" placeholder="请输入您的邮箱" />
                </el-form-item>
                <el-form-item label="消息">
                  <el-input 
                    v-model="contactForm.message" 
                    type="textarea" 
                    :rows="4"
                    placeholder="请描述您的问题或需求" 
                  />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="handleContactSubmit" :loading="contactLoading" class="contact-submit-btn">
                    发送消息
                  </el-button>
                </el-form-item>
              </el-form>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer-content">
        <el-row :gutter="40">
          <el-col :xs="24" :sm="6">
            <div class="footer-section">
              <div class="footer-logo">
                <div class="logo-icon">AI</div>
                <span>智能教案</span>
              </div>
              <p class="footer-description">
                专业的AI教案生成平台，让教学更智能、更高效。
              </p>
            </div>
          </el-col>
          
          <el-col :xs="12" :sm="6">
            <div class="footer-section">
              <h4>产品功能</h4>
              <ul>
                <li><a href="#features">教案生成</a></li>
                <li><a href="#features">PPT制作</a></li>
                <li><a href="#features">模板管理</a></li>
                <li><a href="#features">资源库</a></li>
              </ul>
            </div>
          </el-col>
          
          <el-col :xs="12" :sm="6">
            <div class="footer-section">
              <h4>帮助支持</h4>
              <ul>
                <li><a href="#getting-started">使用指南</a></li>
                <li><a href="#faq">常见问题</a></li>
                <li><a href="#contact">技术支持</a></li>
                <li><a href="#contact">联系我们</a></li>
              </ul>
            </div>
          </el-col>
          
          <el-col :xs="24" :sm="6">
            <div class="footer-section">
              <h4>关于我们</h4>
              <ul>
                <li><a href="#about">公司介绍</a></li>
                <li><a href="#about">团队成员</a></li>
                <li><a href="#about">隐私政策</a></li>
                <li><a href="#about">服务条款</a></li>
              </ul>
            </div>
          </el-col>
        </el-row>
        
        <div class="footer-bottom">
          <p>&copy; 2024 AI智能教案工具. 保留所有权利.</p>
        </div>
      </div>
    </footer>

    <!-- 返回顶部按钮 -->
    <el-backtop :right="40" :bottom="40" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { Search, CircleCheck, Message, Phone, ChatDotSquare, ArrowRight } from '@element-plus/icons-vue'

const router = useRouter()
const searchQuery = ref('')
const searchLoading = ref(false)
const contactLoading = ref(false)
const activeFaq = ref(['1'])

const contactForm = ref({
  name: '',
  email: '',
  message: ''
})

const features = ref([
  {
    id: 1,
    title: '智能教案生成',
    description: '基于教学目标和课程内容自动生成详细教案，节省备课时间',
    emoji: '📝',
    buttonText: '开始创建'
  },
  {
    id: 2,
    title: 'PPT自动创建',
    description: '根据教案内容自动生成配套的PPT演示文稿，美观专业',
    emoji: '📊',
    buttonText: '生成PPT'
  },
  {
    id: 3,
    title: '多学科支持',
    description: '覆盖语文、数学、英语、科学等多个学科领域',
    emoji: '📚',
    buttonText: '查看学科'
  },
  {
    id: 4,
    title: '模板管理',
    description: '提供丰富的教案和PPT模板库，支持个性化定制',
    emoji: '🎨',
    buttonText: '浏览模板'
  }
])

const benefits = ref([
  {
    title: '个性化定制',
    description: '根据不同年级、学科特点和教学风格，提供个性化的教案和PPT定制服务。系统会学习您的教学偏好，提供越来越符合您需求的内容。',
    emoji: '⚙️',
    subtitle: '智能适配教学需求',
    features: ['自动适配年级特点', '学习教学风格', '个性化推荐', '智能内容优化']
  },
  {
    title: '团队协作',
    description: '支持教案和PPT的在线分享与协作编辑。团队成员可以实时协作，共同完善教学内容，提高教学质量和效率。',
    emoji: '🤝',
    subtitle: '团队协作共享',
    features: ['实时协作编辑', '版本历史管理', '权限控制', '评论反馈']
  },
  {
    title: '资源管理',
    description: '海量教学资源库，包括教案模板、PPT模板、教学素材等。支持资源的分类管理、搜索和分享，让优质教学资源得到充分利用。',
    emoji: '📁',
    subtitle: '丰富的资源管理',
    features: ['海量模板库', '智能分类', '快速搜索', '资源分享']
  }
])

const subjects = ref([
  { id: 1, name: '语文', emoji: '📖', count: 5000 },
  { id: 2, name: '数学', emoji: '🔢', count: 4500 },
  { id: 3, name: '英语', emoji: '🗣️', count: 4000 },
  { id: 4, name: '科学', emoji: '🔬', count: 3500 },
  { id: 5, name: '历史', emoji: '📜', count: 3000 },
  { id: 6, name: '地理', emoji: '🌍', count: 2800 },
  { id: 7, name: '音乐', emoji: '🎵', count: 2000 },
  { id: 8, name: '美术', emoji: '🎨', count: 2200 },
  { id: 9, name: '体育', emoji: '⚽', count: 1800 },
  { id: 10, name: '信息技术', emoji: '💻', count: 2500 },
  { id: 11, name: '道德与法治', emoji: '⚖️', count: 1500 },
  { id: 12, name: '综合实践', emoji: '🔧', count: 1200 }
])

const testimonials = ref([
  {
    id: 1,
    name: '张老师',
    title: '小学语文教师',
    content: '这个工具太棒了！以前备课需要花费大量时间，现在只需要输入主题，就能生成高质量的教案，大大提高了我的工作效率。',
    rating: 5
  },
  {
    id: 2,
    name: '李老师',
    title: '初中数学教师',
    content: 'AI生成的PPT既美观又实用，学生们都很喜欢。而且还能根据我的教学风格进行调整，真的很智能。',
    rating: 5
  },
  {
    id: 3,
    name: '王老师',
    title: '高中英语教师',
    content: '团队协作功能特别好用，我们英语组的老师可以一起完善教案，分享优质资源，提高了整个团队的教学水平。',
    rating: 5
  }
])

const steps = ref([
  {
    title: '注册账号',
    description: '使用邮箱注册账号，免费体验基础功能'
  },
  {
    title: '选择模板',
    description: '从丰富的模板库中选择适合的教案模板'
  },
  {
    title: '输入内容',
    description: '输入教学主题和要求，AI自动生成教案'
  },
  {
    title: '导出使用',
    description: '导出教案和PPT，直接用于课堂教学'
  }
])

const faqs = ref([
  {
    id: '1',
    question: '如何开始使用AI教案工具？',
    answer: '首先注册账号，然后选择适合的模板，输入教学主题和要求，系统会自动为您生成教案和PPT。整个过程非常简单，只需几分钟即可完成。'
  },
  {
    id: '2',
    question: '生成的教案质量如何保证？',
    answer: '我们的AI系统基于大量优质教案数据训练，结合教育专家的经验，能够生成符合教学标准的高质量教案。同时支持人工调整和优化。'
  },
  {
    id: '3',
    question: '支持哪些学科和年级？',
    answer: '目前支持小学、初中、高中的语文、数学、英语、科学、历史、地理等主要学科，覆盖面广泛，持续增加更多学科支持。'
  },
  {
    id: '4',
    question: '如何进行团队协作？',
    answer: '您可以邀请同事加入您的团队，共同编辑和完善教案。系统支持实时协作、版本管理和权限控制，让团队合作更高效。'
  },
  {
    id: '5',
    question: '费用如何计算？',
    answer: '我们提供免费试用版本，包含基础功能。付费版本提供更多高级功能和模板，具体价格请联系客服咨询。'
  }
])

const handleLogin = () => {
  ElMessage.info('登录功能开发中...')
}

const handleRegister = () => {
  ElMessage.info('注册功能开发中...')
}

// 智能识别教学内容
const parseTeachingContent = (content: string) => {
  interface ParseResult {
    subject: string
    grade: string
    title: string
    template: { id: number; name: string; subject: string; grade: string } | null
  }
  
  const result: ParseResult = {
    subject: '',
    grade: '',
    title: content,
    template: null
  }
  
  // 年级识别
  const gradePatterns = [
    { pattern: /(小学|一年级|二年级|三年级|四年级|五年级|六年级)/, grade: '小学' },
    { pattern: /(初中|初一|初二|初三|七年级|八年级|九年级)/, grade: '初中' },
    { pattern: /(高中|高一|高二|高三)/, grade: '高中' }
  ]
  
  for (const item of gradePatterns) {
    if (item.pattern.test(content)) {
      result.grade = item.grade
      break
    }
  }
  
  // 学科识别
  const subjectPatterns = [
    { pattern: /(语文|古诗|作文|阅读|汉语)/, subject: '语文' },
    { pattern: /(数学|算术|计算|几何|代数|函数|方程)/, subject: '数学' },
    { pattern: /(英语|English|单词|语法|口语)/, subject: '英语' },
    { pattern: /(物理|力学|电学|光学|热学|牛顿|能量)/, subject: '物理' },
    { pattern: /(化学|化合物|元素|反应|实验|分子|原子)/, subject: '化学' },
    { pattern: /(生物|植物|动物|细胞|遗传|生态)/, subject: '生物' },
    { pattern: /(历史|古代|近代|朝代|战争|文化)/, subject: '历史' },
    { pattern: /(地理|地球|气候|地形|国家|城市)/, subject: '地理' },
    { pattern: /(政治|法律|道德|思想|社会|公民)/, subject: '政治' }
  ]
  
  for (const item of subjectPatterns) {
    if (item.pattern.test(content)) {
      result.subject = item.subject
      break
    }
  }
  
  // 匹配合适的模板
  const mockTemplates = [
    { id: 1, name: '小学语文课文阅读教案', subject: '语文', grade: '小学' },
    { id: 2, name: '小学数学计算教学教案', subject: '数学', grade: '小学' },
    { id: 3, name: '初中物理实验教学教案', subject: '物理', grade: '初中' },
    { id: 4, name: '高中化学概念教学教案', subject: '化学', grade: '高中' },
    { id: 5, name: '小学英语单词教学教案', subject: '英语', grade: '小学' }
  ]
  
  result.template = mockTemplates.find(t => 
    t.subject === result.subject && t.grade === result.grade
  ) || mockTemplates[0]
  
  return result
}

const handleSearch = async () => {
  if (!searchQuery.value.trim()) {
    ElMessage.warning('请输入教学主题')
    return
  }
  
  searchLoading.value = true
  
  try {
    // 模拟加载动画
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // 解析教学内容
    const parsedContent = parseTeachingContent(searchQuery.value)
    
    // 跳转到生成器页面，并传递解析后的数据
    router.push({
      name: 'generator',
      query: {
        content: searchQuery.value,
        subject: parsedContent.subject,
        grade: parsedContent.grade,
        templateId: parsedContent.template?.id.toString() || '1'
      }
    })
    
  } catch (error) {
    ElMessage.error('跳转失败，请重试')
  } finally {
    searchLoading.value = false
  }
}

const handleFeatureClick = (feature: any) => {
  ElMessage.info(`${feature.title}功能开发中...`)
}

const handleSubjectClick = (subject: any) => {
  ElMessage.info(`${subject.name}学科模板开发中...`)
}

const handleDemo = () => {
  ElMessage.info('演示功能开发中...')
}

const handleContactSubmit = async () => {
  if (!contactForm.value.name || !contactForm.value.email || !contactForm.value.message) {
    ElMessage.warning('请填写完整信息')
    return
  }
  
  contactLoading.value = true
  try {
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 1500))
    ElMessage.success('消息发送成功，我们会尽快回复您！')
    // 重置表单
    contactForm.value = { name: '', email: '', message: '' }
  } catch (error) {
    ElMessage.error('发送失败，请重试')
  } finally {
    contactLoading.value = false
  }
}

// 平滑滚动到指定元素
const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // 监听导航链接点击
  const navLinks = document.querySelectorAll('.nav-links a')
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const href = link.getAttribute('href')
      if (href && href.startsWith('#')) {
        scrollToElement(href.substring(1))
      }
    })
  })
})
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background-color: #f8fafc;
}

/* 顶部导航栏 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 16px 0;
  z-index: 1000;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: 700;
  color: #2d3748;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: 700;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 24px;
}

.nav-links a {
  color: #4a5568;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  transition: color 0.3s ease;
  padding: 8px 16px;
  border-radius: 6px;
}

.nav-links a:hover,
.nav-links a.active {
  color: #2d3748;
  background: rgba(45, 55, 72, 0.06);
}

.auth-buttons {
  display: flex;
  gap: 12px;
}

.nav-auth-btn {
  background: transparent;
  border: 1px solid #e2e8f0;
  color: #4a5568;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-auth-btn:hover {
  background: #f8fafc;
  border-color: #cbd5e0;
  color: #2d3748;
}

.nav-auth-btn-primary {
  background: #10b981;
  border-color: #10b981;
  color: white;
}

.nav-auth-btn-primary:hover {
  background: #059669;
  border-color: #059669;
  color: white;
}

/* Hero横幅区 */
.hero-section {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
  padding: 140px 40px 120px;
  text-align: center;
  color: #5a5651;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}

.hero-title {
  font-size: 64px;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 32px;
  text-shadow: none;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 24px;
  color: #4a5568;
  margin-bottom: 60px;
  font-weight: 400;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
}

.hero-search {
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-container {
  width: 100%;
  max-width: 600px;
  position: relative;
}

.search-input {
  width: 100%;
}

.search-input :deep(.el-input__wrapper) {
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 20px 60px 20px 28px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  height: 64px;
}

.search-input :deep(.el-input__wrapper):hover {
  border-color: #cbd5e0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

.search-input :deep(.el-input__wrapper.is-focus) {
  border-color: #a0aec0;
  box-shadow: 0 0 0 3px rgba(160, 174, 192, 0.1), 0 8px 32px rgba(0, 0, 0, 0.08);
}

.search-input :deep(.el-input__inner) {
  font-size: 17px;
  color: #2d3748;
  border: none;
  background: transparent;
  height: auto;
  font-weight: 400;
}

.search-input :deep(.el-input__inner::placeholder) {
  color: #718096;
  font-weight: 400;
}

.search-arrow-btn {
  background: #409eff;
  border: none;
  border-radius: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
}

.search-arrow-btn:hover {
  transform: translateY(-50%) translateX(2px);
  background: #337ecc;
  box-shadow: 0 4px 12px rgba(64, 158, 255, 0.25);
}

.search-arrow-btn .el-icon {
  color: white;
  font-size: 18px;
  font-weight: 600;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 80px;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 48px;
  font-weight: 700;
  color: #2d3748;
  display: block;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 18px;
  color: #4a5568;
  margin-top: 12px;
  font-weight: 500;
}

/* 通用section样式 */
.features-section,
.getting-started-section,
.contact-section {
  padding: 100px 20px;
  background-color: white;
}

.benefits-section,
.subjects-section,
.testimonials-section,
.faq-section {
  padding: 100px 20px;
  background-color: #f8fafc;
}

.section-content {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-size: 48px;
  font-weight: 700;
  color: #374151;
  margin-bottom: 20px;
}

.section-subtitle {
  font-size: 20px;
  color: #6b7280;
  font-weight: 400;
}

/* 功能卡片 */
.features-grid {
  margin-top: 60px;
}

.feature-card {
  text-align: center;
  padding: 40px 24px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #f1f5f9;
  background: white;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: #9ca3af;
}

.feature-icon {
  font-size: 64px;
  margin-bottom: 24px;
  display: block;
}

.feature-title {
  font-size: 24px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 16px;
}

.feature-description {
  color: #6b7280;
  margin-bottom: 32px;
  line-height: 1.6;
  font-size: 16px;
}

/* 特性介绍 */
.benefit-item {
  display: flex;
  align-items: center;
  gap: 60px;
  margin-bottom: 80px;
}

.benefit-item.reverse {
  flex-direction: row-reverse;
}

.benefit-content {
  flex: 1;
}

.benefit-visual {
  flex: 1;
  background: white;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 28px rgba(0, 0, 0, 0.06);
}

.benefit-title {
  font-size: 32px;
  font-weight: 800;
  color: #1a202c;
  margin-bottom: 20px;
}

.benefit-description {
  font-size: 18px;
  color: #64748b;
  line-height: 1.8;
  margin-bottom: 24px;
}

.benefit-features {
  display: grid;
  gap: 12px;
}

.benefit-feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #4a5568;
}

.feature-check {
  color: #10b981;
  font-size: 18px;
}

.benefit-icon {
  font-size: 80px;
  margin-bottom: 20px;
}

.benefit-subtitle {
  font-size: 18px;
  font-weight: 600;
  color: #667eea;
}

/* 学科支持 */
.subjects-grid {
  margin-top: 60px;
}

.subject-card {
  text-align: center;
  padding: 30px 20px;
  background: white;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #f1f5f9;
  height: 100%;
}

.subject-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  border-color: #1a202c;
}

.subject-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.subject-name {
  font-size: 18px;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 8px;
}

.subject-count {
  color: #1a202c;
  font-weight: 600;
}

/* 用户评价 */
.testimonials-grid {
  margin-top: 60px;
}

.testimonial-card {
  height: 100%;
  border-radius: 20px;
  border: 2px solid #f1f5f9;
}

.testimonial-content {
  padding: 20px;
}

.testimonial-text {
  font-size: 16px;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 24px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.author-avatar {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 18px;
}

.author-name {
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 4px;
}

.author-title {
  color: #64748b;
  font-size: 14px;
}

/* 快速开始 */
.steps-container {
  margin-top: 60px;
}

.step-card {
  text-align: center;
  padding: 40px 24px;
  border-radius: 20px;
  background: white;
  border: 2px solid #f1f5f9;
  transition: all 0.3s ease;
  height: 100%;
}

.step-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.step-number {
  width: 64px;
  height: 64px;
  background: #3b82f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 28px;
  font-weight: 800;
  color: white;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
}

.step-title {
  font-size: 24px;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 16px;
}

.step-description {
  color: #64748b;
  line-height: 1.6;
  font-size: 16px;
  margin-bottom: 24px;
}

.step-action {
  min-height: 32px;
}

/* 常见问题 */
.faq-collapse {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 60px;
}

.faq-answer {
  color: #64748b;
  line-height: 1.6;
  font-size: 16px;
}

/* 联系我们 */
.contact-info {
  padding: 20px 0;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 32px;
}

.contact-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
}

.contact-details h4 {
  font-size: 18px;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 4px;
}

.contact-details p {
  color: #64748b;
}

.contact-form-card {
  border-radius: 20px;
  border: 2px solid #f1f5f9;
}

.contact-form-card h3 {
  font-size: 24px;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 24px;
}

/* 页脚 */
.footer {
  background: #1a202c;
  color: white;
  padding: 60px 20px 20px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section h4 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  color: white;
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: 12px;
}

.footer-section a {
  color: #a0aec0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: white;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
}

.footer-description {
  color: #a0aec0;
  line-height: 1.6;
}

.footer-bottom {
  border-top: 1px solid #2d3748;
  margin-top: 40px;
  padding-top: 20px;
  text-align: center;
  color: #a0aec0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .navbar-content {
    padding: 0 16px;
  }

  .nav-links {
    display: none;
  }

  .hero-section {
    padding: 120px 20px 80px;
    min-height: 90vh;
  }

  .hero-title {
    font-size: 40px;
  }

  .hero-subtitle {
    font-size: 18px;
    margin-bottom: 40px;
  }

  .hero-search {
    margin-bottom: 60px;
  }

  .search-container {
    max-width: 100%;
  }

  .search-input :deep(.el-input__wrapper) {
    padding: 16px 52px 16px 24px;
    height: 56px;
    border-radius: 20px;
  }

  .search-input :deep(.el-input__inner) {
    font-size: 16px;
  }

  .search-arrow-btn {
    width: 40px;
    height: 40px;
    right: 6px;
  }

  .hero-stats {
    gap: 40px;
  }

  .section-title {
    font-size: 32px;
  }

  .stat-number {
    font-size: 36px;
  }

  .stat-label {
    font-size: 16px;
  }

  .benefit-item {
    flex-direction: column !important;
    gap: 40px;
  }

  .benefit-title {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 100px 16px 60px;
  }

  .hero-title {
    font-size: 32px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .search-input :deep(.el-input__wrapper) {
    padding: 14px 48px 14px 20px;
    height: 50px;
    border-radius: 18px;
  }

  .search-input :deep(.el-input__inner) {
    font-size: 15px;
  }

  .search-arrow-btn {
    width: 36px;
    height: 36px;
    right: 5px;
  }

  .search-arrow-btn .el-icon {
    font-size: 16px;
  }

  .section-title {
    font-size: 28px;
  }

  .stat-number {
    font-size: 28px;
  }

  .stat-label {
    font-size: 14px;
  }
}

/* 自定义按钮样式 */
.step-register-btn {
  background: #3b82f6 !important;
  border-color: #3b82f6 !important;
  color: white !important;
}

.step-register-btn:hover {
  background: #2563eb !important;
  border-color: #2563eb !important;
  color: white !important;
}

.step-demo-btn {
  background: #10b981 !important;
  border-color: #10b981 !important;
  color: white !important;
}

.step-demo-btn:hover {
  background: #059669 !important;
  border-color: #059669 !important;
  color: white !important;
}

.contact-submit-btn.el-button--primary {
  background: #06b6d4 !important;
  border-color: #06b6d4 !important;
  color: white !important;
}

.contact-submit-btn.el-button--primary:hover {
  background: #0891b2 !important;
  border-color: #0891b2 !important;
  color: white !important;
}
</style>