<template>
  <div class="login-page">
    <!-- 顶部导航栏 -->
    <nav class="navbar">
      <div class="navbar-content">
        <div class="logo" @click="goHome">
          <div class="logo-icon">AI</div>
          <span>智能教案</span>
        </div>
        <div class="nav-right">
          <span class="nav-text">已有账号？</span>
          <el-button text @click="toggleMode" class="toggle-btn">
            {{ isLogin ? '立即注册' : '立即登录' }}
          </el-button>
        </div>
      </div>
    </nav>

    <!-- 主体内容 -->
    <div class="main-content">
      <!-- 左侧宣传区 -->
      <div class="left-section">
        <div class="promo-content">
          <h1 class="promo-title">
            {{ isLogin ? '欢迎回来' : '加入我们' }}
          </h1>
          <p class="promo-subtitle">
            {{ isLogin ? '继续您的智能教学之旅' : '开启智能教学新体验' }}
          </p>
          
          <div class="promo-features">
            <div class="feature-item" v-for="feature in promoFeatures" :key="feature.id">
              <div class="feature-icon">{{ feature.icon }}</div>
              <div class="feature-text">
                <h3>{{ feature.title }}</h3>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </div>
          
          <div class="promo-stats">
            <div class="stat-item">
              <span class="stat-number">50K+</span>
              <span class="stat-label">教师用户</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100K+</span>
              <span class="stat-label">教案生成</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">95%</span>
              <span class="stat-label">满意度</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧登录卡片 -->
      <div class="right-section">
        <div class="login-card">
          <div class="card-header">
            <h2 class="card-title">{{ isLogin ? '登录' : '注册' }}</h2>
            <p class="card-subtitle">
              {{ isLogin ? '登录您的账号以继续使用' : '创建账号开始使用智能教案工具' }}
            </p>
          </div>

          <div class="card-body">
            <!-- 手机号登录表单 -->
            <el-form :model="loginForm" :rules="loginRules" ref="loginFormRef" class="login-form">
              <el-form-item prop="phone">
                <el-input
                  v-model="loginForm.phone"
                  size="large"
                  placeholder="请输入手机号"
                  prefix-icon="Phone"
                  maxlength="11"
                  show-word-limit
                  @input="handlePhoneInput"
                />
              </el-form-item>

              <el-form-item prop="code">
                <div class="code-input-group">
                  <el-input
                    v-model="loginForm.code"
                    size="large"
                    placeholder="请输入验证码"
                    prefix-icon="Message"
                    maxlength="6"
                    show-word-limit
                  />
                  <el-button
                    type="primary"
                    size="large"
                    @click="sendCode"
                    :disabled="!canSendCode || countdown > 0"
                    :loading="sendingCode"
                    class="code-btn"
                  >
                    {{ countdown > 0 ? `${countdown}s` : '获取验证码' }}
                  </el-button>
                </div>
              </el-form-item>

              <el-form-item>
                <el-button
                  type="primary"
                  size="large"
                  @click="handleLogin"
                  :loading="loginLoading"
                  class="login-btn"
                  block
                >
                  {{ isLogin ? '登录' : '注册并登录' }}
                </el-button>
              </el-form-item>
            </el-form>

            <!-- 分割线 -->
            <div class="divider">
              <span class="divider-text">或使用以下方式</span>
            </div>

            <!-- 第三方登录 -->
            <div class="social-login">
              <el-button
                size="large"
                @click="handleSocialLogin('wechat')"
                :loading="socialLoading.wechat"
                class="social-btn wechat-btn"
              >
                <span class="social-icon">📱</span>
                微信登录
              </el-button>
              
              <el-button
                size="large"
                @click="handleSocialLogin('github')"
                :loading="socialLoading.github"
                class="social-btn github-btn"
              >
                <span class="social-icon">🐙</span>
                GitHub登录
              </el-button>
              
              <el-button
                size="large"
                @click="handleSocialLogin('google')"
                :loading="socialLoading.google"
                class="social-btn google-btn"
              >
                <span class="social-icon">🔍</span>
                Google登录
              </el-button>
            </div>

            <!-- 服务条款 -->
            <div class="terms">
              <el-checkbox v-model="agreedToTerms" size="small">
                我已阅读并同意
                <el-button type="primary" text @click="showTerms">《服务条款》</el-button>
                和
                <el-button type="primary" text @click="showPrivacy">《隐私政策》</el-button>
              </el-checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

// 状态管理
const isLogin = ref(true)
const loginLoading = ref(false)
const sendingCode = ref(false)
const countdown = ref(0)
const agreedToTerms = ref(false)
const loginFormRef = ref<FormInstance>()

// 社交登录加载状态
const socialLoading = reactive({
  wechat: false,
  github: false,
  google: false
})

// 登录表单
const loginForm = reactive({
  phone: '',
  code: ''
})

// 表单验证规则
const loginRules: FormRules = {
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { pattern: /^\d{6}$/, message: '验证码为6位数字', trigger: 'blur' }
  ]
}

// 宣传特性
const promoFeatures = ref([
  {
    id: 1,
    icon: '🚀',
    title: '智能生成',
    description: '基于AI技术快速生成高质量教案'
  },
  {
    id: 2,
    icon: '🎨',
    title: '精美模板',
    description: '丰富的PPT模板库，让教学更生动'
  },
  {
    id: 3,
    icon: '👥',
    title: '团队协作',
    description: '支持教师团队在线协作编辑'
  },
  {
    id: 4,
    icon: '📊',
    title: '数据分析',
    description: '教学效果分析，持续优化教学质量'
  }
])

// 计算属性
const canSendCode = computed(() => {
  return /^1[3-9]\d{9}$/.test(loginForm.phone)
})

let countdownTimer: NodeJS.Timeout | null = null

// 方法
const toggleMode = () => {
  isLogin.value = !isLogin.value
  // 清空表单
  loginForm.phone = ''
  loginForm.code = ''
  loginFormRef.value?.clearValidate()
}

const goHome = () => {
  ElMessage.info('返回首页...')
  // 这里可以添加路由跳转逻辑
}

const handlePhoneInput = () => {
  // 限制只能输入数字
  loginForm.phone = loginForm.phone.replace(/\D/g, '')
}

const sendCode = async () => {
  if (!canSendCode.value) {
    ElMessage.warning('请输入正确的手机号')
    return
  }

  sendingCode.value = true
  try {
    // 模拟发送验证码API
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    ElMessage.success('验证码已发送，请查收短信')
    
    // 开始倒计时
    countdown.value = 60
    countdownTimer = setInterval(() => {
      countdown.value--
      if (countdown.value <= 0) {
        clearInterval(countdownTimer!)
        countdownTimer = null
      }
    }, 1000)
  } catch (error) {
    ElMessage.error('发送验证码失败，请重试')
  } finally {
    sendingCode.value = false
  }
}

const handleLogin = async () => {
  if (!loginFormRef.value) return

  try {
    await loginFormRef.value.validate()
    
    if (!agreedToTerms.value) {
      ElMessage.warning('请先阅读并同意服务条款和隐私政策')
      return
    }

    loginLoading.value = true
    
    // 模拟登录API
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    if (isLogin.value) {
      ElMessage.success('登录成功！')
    } else {
      ElMessage.success('注册成功并已自动登录！')
    }
    
    // 这里可以添加登录成功后的逻辑，比如跳转到首页
    
  } catch (error) {
    console.error('验证失败:', error)
  } finally {
    loginLoading.value = false
  }
}

const handleSocialLogin = async (platform: string) => {
  if (!agreedToTerms.value) {
    ElMessage.warning('请先阅读并同意服务条款和隐私政策')
    return
  }

  socialLoading[platform as keyof typeof socialLoading] = true
  
  try {
    // 模拟第三方登录
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const platformNames = {
      wechat: '微信',
      github: 'GitHub',
      google: 'Google'
    }
    
    ElMessage.success(`${platformNames[platform as keyof typeof platformNames]}登录成功！`)
  } catch (error) {
    ElMessage.error('登录失败，请重试')
  } finally {
    socialLoading[platform as keyof typeof socialLoading] = false
  }
}

const showTerms = () => {
  ElMessageBox.alert(
    '这里是服务条款的详细内容...',
    '服务条款',
    {
      confirmButtonText: '我知道了',
      type: 'info'
    }
  )
}

const showPrivacy = () => {
  ElMessageBox.alert(
    '这里是隐私政策的详细内容...',
    '隐私政策',
    {
      confirmButtonText: '我知道了',
      type: 'info'
    }
  )
}

// 生命周期
onMounted(() => {
  // 页面加载时的逻辑
})

onUnmounted(() => {
  // 清理定时器
  if (countdownTimer) {
    clearInterval(countdownTimer)
  }
})
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
  display: flex;
  flex-direction: column;
}

/* 导航栏样式 */
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
  color: #1a202c;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.logo:hover {
  opacity: 0.8;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: 700;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-text {
  color: #64748b;
  font-size: 14px;
}

.toggle-btn {
  font-weight: 600;
  color: #667eea;
}

/* 主体内容 */
.main-content {
  flex: 1;
  display: flex;
  margin-top: 80px;
  min-height: calc(100vh - 80px);
}

/* 左侧宣传区 */
.left-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.promo-content {
  max-width: 500px;
  width: 100%;
}

.promo-title {
  font-size: 48px;
  font-weight: 900;
  margin-bottom: 16px;
  line-height: 1.1;
}

.promo-subtitle {
  font-size: 18px;
  margin-bottom: 40px;
  opacity: 0.9;
  line-height: 1.6;
}

.promo-features {
  margin-bottom: 40px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.feature-icon {
  font-size: 24px;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.feature-text h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
}

.feature-text p {
  font-size: 14px;
  opacity: 0.8;
  line-height: 1.4;
}

.promo-stats {
  display: flex;
  gap: 32px;
  margin-top: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 32px;
  font-weight: 900;
  display: block;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  opacity: 0.8;
}

/* 右侧登录卡片 */
.right-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.login-card {
  width: 100%;
  max-width: 400px;
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f9;
}

.card-header {
  text-align: center;
  margin-bottom: 32px;
}

.card-title {
  font-size: 32px;
  font-weight: 800;
  color: #1a202c;
  margin-bottom: 8px;
}

.card-subtitle {
  font-size: 14px;
  color: #64748b;
  line-height: 1.5;
}

.card-body {
  width: 100%;
}

.login-form {
  margin-bottom: 24px;
}

.login-form :deep(.el-form-item) {
  margin-bottom: 20px;
}

.login-form :deep(.el-input__wrapper) {
  border-radius: 12px;
  border: 2px solid #f1f5f9;
  transition: all 0.3s ease;
  padding: 12px 16px;
}

.login-form :deep(.el-input__wrapper):hover {
  border-color: #667eea;
}

.login-form :deep(.el-input__wrapper.is-focus) {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.code-input-group {
  display: flex;
  gap: 12px;
}

.code-input-group .el-input {
  flex: 1;
}

.code-btn {
  border-radius: 12px;
  font-weight: 600;
  min-width: 120px;
}

.login-btn {
  width: 100%;
  height: 48px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  margin-top: 8px;
}

.login-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.divider {
  position: relative;
  text-align: center;
  margin: 24px 0;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: #e2e8f0;
}

.divider-text {
  background: white;
  padding: 0 16px;
  font-size: 14px;
  color: #64748b;
  position: relative;
  z-index: 1;
}

.social-login {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.social-btn {
  width: 100%;
  height: 44px;
  border-radius: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  border: 2px solid #f1f5f9;
  background: white;
  color: #4a5568;
}

.social-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.social-icon {
  font-size: 18px;
}

.wechat-btn:hover {
  border-color: #07c160;
  color: #07c160;
}

.github-btn:hover {
  border-color: #24292e;
  color: #24292e;
}

.google-btn:hover {
  border-color: #db4437;
  color: #db4437;
}

.terms {
  text-align: center;
  font-size: 12px;
  color: #64748b;
  line-height: 1.5;
}

.terms :deep(.el-checkbox__label) {
  font-size: 12px;
  color: #64748b;
}

.terms .el-button {
  font-size: 12px;
  padding: 0;
  margin: 0 2px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .main-content {
    flex-direction: column;
  }
  
  .left-section {
    padding: 40px 20px;
  }
  
  .promo-title {
    font-size: 36px;
  }
  
  .promo-stats {
    gap: 24px;
  }
  
  .stat-number {
    font-size: 24px;
  }
}

@media (max-width: 768px) {
  .navbar-content {
    padding: 0 16px;
  }
  
  .main-content {
    margin-top: 70px;
  }
  
  .left-section {
    padding: 30px 16px;
  }
  
  .right-section {
    padding: 30px 16px;
  }
  
  .login-card {
    padding: 32px 24px;
  }
  
  .promo-title {
    font-size: 28px;
  }
  
  .promo-subtitle {
    font-size: 16px;
  }
  
  .card-title {
    font-size: 28px;
  }
  
  .promo-stats {
    flex-wrap: wrap;
    gap: 16px;
  }
  
  .stat-item {
    flex: 1;
    min-width: 80px;
  }
}

@media (max-width: 480px) {
  .nav-text {
    display: none;
  }
  
  .promo-title {
    font-size: 24px;
  }
  
  .card-title {
    font-size: 24px;
  }
  
  .login-card {
    padding: 24px 20px;
  }
  
  .code-input-group {
    flex-direction: column;
  }
  
  .code-btn {
    min-width: auto;
  }
}
</style>
