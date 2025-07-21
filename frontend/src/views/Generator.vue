<template>
  <div class="ai-generator generator-page">
    <!-- 顶部导航栏 -->
    <nav class="navbar">
      <div class="navbar-content">
        <div class="logo">
          <div class="logo-icon">AI</div>
          <span>智能教案</span>
        </div>
        <ul class="nav-links">
          <li><a @click="goHome" class="nav-link">首页</a></li>
          <li><a href="#" class="nav-link active">AI生成</a></li>
          <li><a href="#" class="nav-link">功能介绍</a></li>
          <li><a href="#" class="nav-link">使用指南</a></li>
          <li><a href="#" class="nav-link">关于我们</a></li>
        </ul>
        <div class="auth-buttons">
          <el-button @click="handleLogin" class="nav-auth-btn">登录</el-button>
          <el-button type="primary" @click="handleRegister" class="nav-auth-btn nav-auth-btn-primary">注册</el-button>
        </div>
      </div>
    </nav>

    <!-- 三栏主体布局 -->
    <div class="generator-main">
      <!-- 左侧：模板选择区 -->
      <div class="left-panel">
        <div class="panel-header">
          <h3>教案模板</h3>
          <el-button size="small" text @click="refreshTemplates" :icon="Refresh" :loading="isLoadingTemplates">刷新</el-button>
        </div>

        <!-- 模板筛选 -->
        <div class="template-filters">
          <div class="filter-item">
            <label>学科筛选</label>
            <el-select 
              v-model="selectedSubject" 
              placeholder="选择学科" 
              size="small" 
              style="width: 100%;"
              clearable
              @change="loadTemplates"
            >
              <el-option label="全部" value=""></el-option>
              <el-option v-for="subject in subjects" :key="subject" :label="subject" :value="subject"></el-option>
            </el-select>
          </div>
          <div class="filter-item">
            <label>年级筛选</label>
            <el-select 
              v-model="selectedGrade" 
              placeholder="选择年级" 
              size="small" 
              style="width: 100%;"
              clearable
              @change="loadTemplates"
            >
              <el-option label="全部" value=""></el-option>
              <el-option label="小学" value="小学"></el-option>
              <el-option label="初中" value="初中"></el-option>
              <el-option label="高中" value="高中"></el-option>
              <el-option label="全学段" value="全学段"></el-option>
            </el-select>
          </div>
        </div>

        <!-- 模板列表 - 紧凑设计 -->
        <div class="template-list">
          <div v-if="isLoadingTemplates" class="template-loading">
            <el-icon class="is-loading"><Loading /></el-icon>
            <span style="margin-left: 8px;">加载中...</span>
          </div>
          <div v-else-if="displayTemplates.length === 0" class="template-loading">
            <el-icon><Document /></el-icon>
            <p>暂无模板数据</p>
            <p style="font-size: 12px; color: #909399; margin-top: 8px;">
              请检查网络连接或刷新页面
            </p>
          </div>
          <div v-else class="template-list-scroll">
            <div 
              v-for="template in displayTemplates" 
              :key="template.id"
              class="template-card-compact"
              :class="{ active: selectedTemplate?.id === template.id }"
              @click="selectTemplate(template)"
            >
              <!-- 左侧图标 -->
              <div class="card-icon-mini">
                <el-icon :size="16"><Document /></el-icon>
              </div>
              
              <!-- 内容区 -->
              <div class="card-content-mini">
                <!-- 标题 -->
                <h4 class="card-title-mini" :title="template.templateName">{{ template.templateName }}</h4>
                
                <!-- 标签 -->
                <div class="card-tags-mini">
                  <el-tag size="small" type="primary" effect="plain">{{ template.subject }}</el-tag>
                  <el-tag size="small" type="success" effect="plain">{{ template.gradeLevel }}</el-tag>
                </div>
                
                <!-- 描述 -->
                <p class="card-desc-mini" :title="template.description">{{ template.description }}</p>
                
                <!-- 统计信息 -->
                <div class="card-stats-mini">
                  <span class="stat-mini">
                    <el-icon size="12"><View /></el-icon>
                    <span>{{ template.usageCount }}</span>
                  </span>
                  <span class="stat-mini">
                    <el-icon size="12"><Star /></el-icon>
                    <span>{{ template.rating }}</span>
                  </span>
                  <el-button 
                    size="small" 
                    text 
                    @click.stop="showTemplateInfo(template)"
                    class="detail-btn-mini"
                  >
                    <el-icon size="12"><InfoFilled /></el-icon>
                    详情
                  </el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 中间：AI对话控制区 -->
      <div class="center-panel">
        <div class="panel-header">
          <h3>AI智能生成</h3>
          <el-tag v-if="selectedTemplate" type="success" size="small">{{ selectedTemplate.templateName }}</el-tag>
        </div>

        <!-- 生成参数设置 -->
        <div class="generation-form">
          <el-form :model="generationParams" label-position="top" class="compact-form">
            <el-row :gutter="16">
              <el-col :span="24">
                <el-form-item label="课程标题" class="form-item-compact">
                  <el-input 
                    v-model="generationParams.title" 
                    placeholder="请输入课程标题，如：分数的加减法"
                    size="default"
                  />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="16">
              <el-col :span="8">
                <el-form-item label="年级" class="form-item-compact">
                  <el-select v-model="generationParams.grade" placeholder="选择年级" size="default" style="width: 100%;">
                    <el-option label="一年级" value="一年级"></el-option>
                    <el-option label="二年级" value="二年级"></el-option>
                    <el-option label="三年级" value="三年级"></el-option>
                    <el-option label="四年级" value="四年级"></el-option>
                    <el-option label="五年级" value="五年级"></el-option>
                    <el-option label="六年级" value="六年级"></el-option>
                    <el-option label="七年级" value="七年级"></el-option>
                    <el-option label="八年级" value="八年级"></el-option>
                    <el-option label="九年级" value="九年级"></el-option>
                    <el-option label="高一" value="高一"></el-option>
                    <el-option label="高二" value="高二"></el-option>
                    <el-option label="高三" value="高三"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="科目" class="form-item-compact">
                  <el-select v-model="selectedSubject" placeholder="选择科目" size="default" style="width: 100%;">
                    <el-option v-for="subject in subjects" :key="subject" :label="subject" :value="subject"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="课时" class="form-item-compact">
                  <el-select v-model="generationParams.duration" size="default" style="width: 100%;">
                    <el-option label="40分钟" value="40分钟"></el-option>
                    <el-option label="45分钟" value="45分钟"></el-option>
                    <el-option label="50分钟" value="50分钟"></el-option>
                    <el-option label="90分钟" value="90分钟"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <!-- 生成按钮 -->
            <div class="generation-actions">
              <el-button 
                type="primary" 
                size="large" 
                @click="generateLesson"
                :loading="isGenerating"
                :disabled="!selectedTemplate || !generationParams.title"
                style="width: 100%;"
                class="generate-btn"
              >
                <el-icon><Magic /></el-icon>
                {{ isGenerating ? 'AI正在生成中...' : '开始生成教案' }}
              </el-button>
            </div>
          </el-form>
        </div>

        <!-- AI对话历史 -->
        <div class="chat-history">
          <div class="chat-header">
            <span>生成记录 ({{ chatHistory.length }}条)</span>
            <div class="chat-actions">
              <el-button size="small" text @click="prevPage" :disabled="currentPage === 1">上一页</el-button>
              <span class="page-info">{{ currentPage }}/{{ totalPages }}</span>
              <el-button size="small" text @click="nextPage" :disabled="currentPage === totalPages">下一页</el-button>
              <el-button size="small" text @click="clearHistory" :icon="Delete">清空</el-button>
            </div>
          </div>
          <div class="chat-messages">
            <div 
              v-for="(message, index) in paginatedChatHistory" 
              :key="index"
              class="chat-message"
              :class="message.type"
            >
              <div class="message-avatar">
                <el-icon v-if="message.type === 'user'"><User /></el-icon>
                <el-icon v-else><Robot /></el-icon>
              </div>
              <div class="message-content">
                <div class="message-text">{{ message.content }}</div>
                <div class="message-time">{{ message.time }}</div>
              </div>
            </div>
            <div v-if="chatHistory.length === 0" class="empty-state">
              <p>暂无生成记录</p>
              <p class="empty-hint">请先选择模板并填写参数开始生成</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧：内容编辑区 -->
      <div class="right-panel">
        <div class="panel-header">
          <h3>教案编辑器</h3>
          <div class="editor-actions">
            <el-button size="small" text @click="previewLesson" :icon="View">预览</el-button>
            <el-button size="small" text @click="exportLesson" :icon="Download">导出</el-button>
            <el-button size="small" text @click="clearEditor" :icon="Delete">清空</el-button>
          </div>
        </div>

        <!-- 编辑器工具栏 -->
        <div class="editor-toolbar">
          <el-button-group size="small">
            <el-button @click="formatText('bold')">粗体</el-button>
            <el-button @click="formatText('italic')">斜体</el-button>
            <el-button @click="formatText('underline')">下划线</el-button>
          </el-button-group>
          
          <el-select v-model="fontSize" size="small" style="width: 100px; margin-left: 8px;">
            <el-option label="12px" value="12px"></el-option>
            <el-option label="14px" value="14px"></el-option>
            <el-option label="16px" value="16px"></el-option>
            <el-option label="18px" value="18px"></el-option>
            <el-option label="20px" value="20px"></el-option>
          </el-select>
        </div>

        <!-- 内容编辑区 - 固定高度 -->
        <div class="editor-container">
          <div 
            ref="editor"
            class="rich-editor"
            contenteditable="true"
            @input="onEditorInput"
            :style="{ fontSize: fontSize }"
            spellcheck="false"
          >
            <div v-if="!editorContent" class="editor-placeholder">
              AI生成的教案内容将显示在这里，您可以直接编辑修改...
            </div>
            <div v-else v-html="editorContent"></div>
          </div>
        </div>

        <!-- 文档统计 -->
        <div class="document-stats">
          <div class="stats-item">
            <span class="stats-label">字数：</span>
            <span class="stats-value">{{ wordCount }}</span>
          </div>
          <div class="stats-item">
            <span class="stats-label">段落：</span>
            <span class="stats-value">{{ paragraphCount }}</span>
          </div>
          <div class="stats-item">
            <span class="stats-label">最后保存：</span>
            <span class="stats-value">{{ lastSaved || '未保存' }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 模板详情对话框 - 紧凑设计 -->
    <el-dialog 
      v-model="showTemplateDetail" 
      title="模板详情" 
      width="500px"
      :before-close="() => showTemplateDetail = false"
      class="compact-dialog"
    >
      <div v-if="selectedTemplateDetail" class="template-detail-compact">
        <!-- 基本信息 -->
        <div class="detail-header-compact">
          <h4>{{ selectedTemplateDetail.templateName }}</h4>
          <div class="detail-tags-compact">
            <el-tag size="small" type="primary" effect="plain">{{ selectedTemplateDetail.subject }}</el-tag>
            <el-tag size="small" type="success" effect="plain">{{ selectedTemplateDetail.gradeLevel }}</el-tag>
            <el-tag size="small" type="info" effect="plain">{{ selectedTemplateDetail.templateType }}</el-tag>
          </div>
        </div>
        
        <!-- 描述 -->
        <div class="detail-section-compact">
          <div class="section-title">描述</div>
          <p class="detail-desc">{{ selectedTemplateDetail.description }}</p>
        </div>
        
        <!-- 统计信息 -->
        <div class="detail-section-compact">
          <div class="section-title">使用统计</div>
          <div class="stats-row">
            <span class="stat-item-compact">
              <strong>{{ selectedTemplateDetail.usageCount }}</strong> 次使用
            </span>
            <span class="stat-item-compact">
              <strong>{{ selectedTemplateDetail.rating }}</strong> 分
            </span>
            <span class="stat-item-compact">
              <strong>{{ new Date(selectedTemplateDetail.createTime).toLocaleDateString() }}</strong> 创建
            </span>
          </div>
        </div>
        
        <!-- 标签 -->
        <div class="detail-section-compact" v-if="selectedTemplateDetail.tags">
          <div class="section-title">标签</div>
          <div class="tags-compact">
            <el-tag 
              v-for="tag in selectedTemplateDetail.tags.split(',')" 
              :key="tag" 
              size="small"
              type="warning"
              effect="light"
            >
              {{ tag.trim() }}
            </el-tag>
          </div>
        </div>
        
        <!-- 提示词预览 -->
        <div class="detail-section-compact">
          <div class="section-title">AI提示词</div>
          <div class="prompt-preview">
            {{ selectedTemplateDetail.aiPrompt.substring(0, 100) }}...
            <el-button 
              size="small" 
              text 
              type="primary"
              @click="copyPrompt(selectedTemplateDetail.aiPrompt)"
            >
              复制
            </el-button>
          </div>
        </div>
      </div>
      
      <template #footer>
        <div class="dialog-footer-compact">
          <el-button size="small" @click="showTemplateDetail = false">取消</el-button>
          <el-button 
            type="primary" 
            size="small"
            @click="selectTemplate(selectedTemplateDetail!); showTemplateDetail = false"
            v-if="selectedTemplateDetail && selectedTemplate?.id !== selectedTemplateDetail.id"
          >
            使用模板
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { 
  Download, ArrowLeft, Refresh, Document, View, Star, Tools as Magic, 
  Delete, User, Service as Robot, Loading
} from '@element-plus/icons-vue'
import { generateLessonStream, formatLessonContent, saveGenerationRecord, type GenerateRequest, type StreamResponse } from '@/api/deepseek'
import { getTemplateList, getTemplateDetail, type TemplateListResponse, type TemplateDetailResponse } from '@/api/template'

const route = useRoute()
const router = useRouter()

// 类型定义
interface Template {
  id: number
  templateName: string
  subject: string
  gradeLevel: string
  templateType: string
  description: string
  tags: string
  usageCount: number
  rating: number
  aiPrompt: string
  templateContent: string
  isActive: number
  createTime: string
  updateTime: string
}

interface ChatMessage {
  type: 'user' | 'ai'
  content: string
  time: string
}

// 响应式数据
const selectedSubject = ref('')
const selectedGrade = ref('')
const selectedTemplate = ref<Template | null>(null)
const isGenerating = ref(false)
const editorContent = ref('')
const fontSize = ref('14px')
const lastSaved = ref('')
const chatHistory = ref<ChatMessage[]>([])
const currentPage = ref(1)
const pageSize = ref(3) // 每页显示3条记录

// 编辑器引用
const editor = ref<HTMLElement | null>(null)

// 生成参数
const generationParams = ref({
  title: '',
  grade: '',
  duration: '40分钟',
  keyPoints: '',
  studentLevel: '',
  specialRequirements: ''
})

// 基础数据
const subjects = ref(['语文', '数学', '英语', '物理', '化学', '生物', '历史', '地理', '政治', '科学', '通用', '理科', '道法', '音乐', '美术', '体育', '信息技术', '综合实践'])
const grades = ref(['小学', '初中', '高中'])

// 模板数据
const templates = ref<Template[]>([])
const isLoadingTemplates = ref(false)
const selectedTemplateDetail = ref<Template | null>(null)
const showTemplateDetail = ref(false)

// 计算属性
const filteredTemplates = computed(() => {
  return templates.value.filter(template => {
    const subjectMatch = !selectedSubject.value || template.subject === selectedSubject.value
    const gradeMatch = !selectedGrade.value || template.gradeLevel === selectedGrade.value
    return subjectMatch && gradeMatch
  })
})

const displayTemplates = computed(() => {
  return filteredTemplates.value.length > 0 ? filteredTemplates.value : templates.value
})

const wordCount = computed(() => {
  if (!editorContent.value) return 0
  return editorContent.value.replace(/<[^>]*>/g, '').length
})

const paragraphCount = computed(() => {
  if (!editorContent.value) return 0
  return editorContent.value.split(/\n\s*\n/).filter(p => p.trim()).length
})

// 分页相关计算属性
const totalPages = computed(() => {
  return Math.max(1, Math.ceil(chatHistory.value.length / pageSize.value))
})

const paginatedChatHistory = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return chatHistory.value.slice(start, end)
})

// 方法
const selectTemplate = (template: Template) => {
  selectedTemplate.value = template
  ElMessage.success(`已选择模板：${template.templateName}`)
}

const showTemplateInfo = async (template: Template) => {
  try {
    const response = await getTemplateDetail(template.id)
    if (response.success) {
      selectedTemplateDetail.value = response.data
      showTemplateDetail.value = true
    } else {
      ElMessage.error('获取模板详情失败')
    }
  } catch (error) {
    console.error('获取模板详情失败:', error)
    // 如果后端不可用，直接使用当前模板数据
    selectedTemplateDetail.value = template
    showTemplateDetail.value = true
  }
}

const loadTemplates = async () => {
  try {
    isLoadingTemplates.value = true
    const response = await getTemplateList({
      subject: selectedSubject.value,
      grade: selectedGrade.value
    })
    if (response.success) {
      templates.value = response.data
    } else {
      ElMessage.error('获取模板列表失败')
    }
  } catch (error: any) {
    console.error('获取模板列表失败:', error)
    ElMessage.error('获取模板列表失败，请检查网络连接')
    
    // 只有在明确无法连接服务器时才使用模拟数据
    const isNetworkError = error.message?.includes('Network') || 
                          error.message?.includes('timeout') ||
                          error.message?.includes('fetch')
    
    if (isNetworkError) {
      templates.value = getMockTemplates()
      ElMessage.warning({
        message: '网络连接失败，当前使用演示数据',
        duration: 3000,
        showClose: true
      })
    }
    
    // 记录错误到本地存储，便于用户反馈
    const errorLog = {
      timestamp: new Date().toISOString(),
      type: errorType,
      message: error.message,
      url: window.location.href,
      userAgent: navigator.userAgent
    }
    
    try {
      const existingLogs = JSON.parse(localStorage.getItem('errorLogs') || '[]')
      existingLogs.unshift(errorLog)
      // 只保留最近10条错误日志
      if (existingLogs.length > 10) {
        existingLogs.splice(10)
      }
      localStorage.setItem('errorLogs', JSON.stringify(existingLogs))
    } catch (storageError) {
      console.warn('无法保存错误日志到本地存储:', storageError)
    }
  } finally {
    isLoadingTemplates.value = false
  }
}

// 模拟模板数据
const getMockTemplates = (): Template[] => {
  return [
    {
      id: 1,
      templateName: '小学语文课文阅读教案',
      subject: '语文',
      gradeLevel: '小学',
      templateType: '课文阅读',
      templateContent: '',
      aiPrompt: '请根据以下信息为小学语文课文生成一份详细的教案...',
      description: '适用于小学语文课文阅读教学的标准教案模板，包含完整的教学环节设计',
      tags: '小学,语文,课文阅读,教案模板,标准格式',
      usageCount: 1250,
      rating: 4.8,
      isActive: 1,
      createTime: new Date().toISOString(),
      updateTime: new Date().toISOString()
    },
    {
      id: 2,
      templateName: '小学数学计算教学教案',
      subject: '数学',
      gradeLevel: '小学',
      templateType: '计算教学',
      templateContent: '',
      aiPrompt: '请为小学数学计算教学生成一份详细的教案...',
      description: '适用于小学数学计算教学的教案模板，注重算理推导和思维培养',
      tags: '小学,数学,计算教学,算理,思维培养',
      usageCount: 980,
      rating: 4.7,
      isActive: 1,
      createTime: new Date().toISOString(),
      updateTime: new Date().toISOString()
    },
    {
      id: 3,
      templateName: '初中物理实验教学教案',
      subject: '物理',
      gradeLevel: '初中',
      templateType: '实验教学',
      templateContent: '',
      aiPrompt: '请为初中物理实验教学生成一份详细的教案...',
      description: '适用于初中物理实验教学的教案模板，注重科学探究过程',
      tags: '初中,物理,实验教学,科学探究,安全操作',
      usageCount: 756,
      rating: 4.9,
      isActive: 1,
      createTime: new Date().toISOString(),
      updateTime: new Date().toISOString()
    },
    {
      id: 4,
      templateName: '高中化学概念教学教案',
      subject: '化学',
      gradeLevel: '高中',
      templateType: '概念教学',
      templateContent: '',
      aiPrompt: '请为高中化学概念教学生成一份详细的教案...',
      description: '适用于高中化学概念教学的教案模板，注重核心素养培养',
      tags: '高中,化学,概念教学,核心素养,思维培养',
      usageCount: 623,
      rating: 4.6,
      isActive: 1,
      createTime: new Date().toISOString(),
      updateTime: new Date().toISOString()
    },
    {
      id: 5,
      templateName: '小学英语单词教学教案',
      subject: '英语',
      gradeLevel: '小学',
      templateType: '单词教学',
      templateContent: '',
      aiPrompt: '请为小学英语单词教学生成一份详细的教案...',
      description: '适用于小学英语单词教学的教案模板，遵循PPPPS教学模式',
      tags: '小学,英语,单词教学,PPPPS,交际教学',
      usageCount: 890,
      rating: 4.5,
      isActive: 1,
      createTime: new Date().toISOString(),
      updateTime: new Date().toISOString()
    },
    {
      id: 6,
      templateName: '通用新授课教案模板',
      subject: '通用',
      gradeLevel: '全学段',
      templateType: '新授课',
      templateContent: '',
      aiPrompt: '请生成一份新授课教案...',
      description: '适用于各学科新授课的通用教案模板，结构完整，易于使用',
      tags: '通用,新授课,教案模板,全学段,基础模板',
      usageCount: 1563,
      rating: 4.8,
      isActive: 1,
      createTime: new Date().toISOString(),
      updateTime: new Date().toISOString()
    },
    {
      id: 7,
      templateName: '通用复习课教案模板',
      subject: '通用',
      gradeLevel: '全学段',
      templateType: '复习课',
      templateContent: '',
      aiPrompt: '请生成一份复习课教案...',
      description: '适用于各学科复习课的通用教案模板，注重知识梳理和能力提升',
      tags: '通用,复习课,知识梳理,查漏补缺,考试复习',
      usageCount: 1123,
      rating: 4.6,
      isActive: 1,
      createTime: new Date().toISOString(),
      updateTime: new Date().toISOString()
    },
    {
      id: 8,
      templateName: '初中语文古诗词教学教案',
      subject: '语文',
      gradeLevel: '初中',
      templateType: '古诗词教学',
      templateContent: '',
      aiPrompt: '请为初中语文古诗词教学生成一份详细的教案...',
      description: '初中语文古诗词教学专用模板，注重朗读、理解、鉴赏、体验',
      tags: '初中,语文,古诗词,鉴赏,朗读,传统文化',
      usageCount: 567,
      rating: 4.7,
      isActive: 1,
      createTime: new Date().toISOString(),
      updateTime: new Date().toISOString()
    },
    {
      id: 9,
      templateName: '高中英语阅读理解教案',
      subject: '英语',
      gradeLevel: '高中',
      templateType: '阅读理解',
      templateContent: '',
      aiPrompt: '请为高中英语阅读理解教学生成一份详细的教案...',
      description: '高中英语阅读理解专用教案模板，注重核心素养和思维品质培养',
      tags: '高中,英语,阅读理解,核心素养,批判思维',
      usageCount: 445,
      rating: 4.8,
      isActive: 1,
      createTime: new Date().toISOString(),
      updateTime: new Date().toISOString()
    },
    {
      id: 5,
      templateName: '初中物理实验教学教案',
      subject: '物理',
      gradeLevel: '初中',
      templateType: '实验课',
      templateContent: '',
      aiPrompt: '请生成一份初中物理实验教学教案...',
      description: '适用于初中物理实验教学的教案模板，注重科学探究过程',
      tags: '物理,初中,实验',
      usageCount: 756,
      rating: 4.9,
      isActive: 1,
      createTime: new Date().toISOString(),
      updateTime: new Date().toISOString()
    },
    {
      id: 6,
      templateName: '高中化学概念教学教案',
      subject: '化学',
      gradeLevel: '高中',
      templateType: '概念课',
      templateContent: '',
      aiPrompt: '请生成一份高中化学概念教学教案...',
      description: '适用于高中化学概念教学的教案模板，注重核心素养培养',
      tags: '化学,高中,概念',
      usageCount: 623,
      rating: 4.6,
      isActive: 1,
      createTime: new Date().toISOString(),
      updateTime: new Date().toISOString()
    },
    {
      id: 7,
      templateName: '通用新授课教案模板',
      subject: '通用',
      gradeLevel: '全学段',
      templateType: '新授课',
      templateContent: '',
      aiPrompt: '请为新授课生成一份教案...',
      description: '适用于各学科新授课的通用教案模板，结构完整，易于使用',
      tags: '通用,新授课,教案模板,全学段,基础模板',
      usageCount: 1563,
      rating: 4.8,
      isActive: 1,
      createTime: new Date().toISOString(),
      updateTime: new Date().toISOString()
    },
    {
      id: 8,
      templateName: '通用复习课教案模板',
      subject: '通用',
      gradeLevel: '全学段',
      templateType: '复习课',
      templateContent: '',
      aiPrompt: '请为复习课生成一份教案...',
      description: '适用于各学科复习课的通用教案模板，注重知识梳理和能力提升',
      tags: '通用,复习课,知识梳理,查漏补缺,考试复习',
      usageCount: 1123,
      rating: 4.6,
      isActive: 1,
      createTime: new Date().toISOString(),
      updateTime: new Date().toISOString()
    },
    {
      id: 9,
      templateName: '初中语文古诗词教学教案',
      subject: '语文',
      gradeLevel: '初中',
      templateType: '古诗词教学',
      templateContent: '',
      aiPrompt: '请为初中语文古诗词生成教案...',
      description: '初中语文古诗词教学专用模板，注重朗读、理解、鉴赏、体验',
      tags: '初中,语文,古诗词,鉴赏,朗读,传统文化',
      usageCount: 567,
      rating: 4.7,
      isActive: 1,
      createTime: new Date().toISOString(),
      updateTime: new Date().toISOString()
    },
    {
      id: 10,
      templateName: '高中英语阅读理解教案',
      subject: '英语',
      gradeLevel: '高中',
      templateType: '阅读理解',
      templateContent: '',
      aiPrompt: '请为高中英语阅读理解生成教案...',
      description: '高中英语阅读理解专用教案模板，注重核心素养和思维品质培养',
      tags: '高中,英语,阅读理解,核心素养,批判思维',
      usageCount: 445,
      rating: 4.8,
      isActive: 1,
      createTime: new Date().toISOString(),
      updateTime: new Date().toISOString()
    }
  ]
}

const generateLesson = async () => {
  if (!selectedTemplate.value) {
    ElMessage.warning('请先选择一个教案模板')
    return
  }
  
  if (!generationParams.value.title) {
    ElMessage.warning('请输入课程标题')
    return
  }

  isGenerating.value = true
  const startTime = Date.now()
  
  // 添加用户消息到对话历史
  chatHistory.value.push({
    type: 'user',
    content: `生成《${generationParams.value.title}》的教案`,
    time: new Date().toLocaleTimeString()
  })

  // 清空编辑器内容
  editorContent.value = ''
  
  try {
    // 准备API请求参数
    const request: GenerateRequest = {
      templateId: selectedTemplate.value.id,
      title: generationParams.value.title,
      grade: generationParams.value.grade,
      subject: selectedSubject.value,
      duration: generationParams.value.duration,
      additionalRequirements: generationParams.value.specialRequirements
    }
    
    // 开始流式生成
    let accumulatedContent = ''
    
    for await (const chunk of generateLessonStream(request)) {
      if (chunk.error) {
        throw new Error(chunk.error)
      }
      
      if (chunk.content) {
        accumulatedContent += chunk.content
        // 格式化内容并实时更新编辑器
        editorContent.value = formatLessonContent(accumulatedContent)
        
        // 使用nextTick确保DOM更新后再滚动
        await nextTick()
        // 自动滚动到底部，跟随生成内容
        if (editor.value) {
          editor.value.scrollTop = editor.value.scrollHeight
        }
      }
      
      if (chunk.done) {
        break
      }
    }
    
    // 计算生成时间
    const generationTime = (Date.now() - startTime) / 1000
    
    // 保存生成记录
    saveGenerationRecord(request, accumulatedContent, generationTime)
    
    // 添加AI回复到对话历史
    chatHistory.value.push({
      type: 'ai',
      content: `教案生成完成！用时 ${generationTime.toFixed(1)} 秒。您可以在右侧编辑器中查看和修改内容。`,
      time: new Date().toLocaleTimeString()
    })
    
    ElMessage.success('教案生成成功！')
  } catch (error) {
    console.error('生成失败:', error)
    ElMessage.error(`生成失败：${error instanceof Error ? error.message : '未知错误'}`)
    
    // 添加错误消息到对话历史
    chatHistory.value.push({
      type: 'ai',
      content: '抱歉，生成过程中出现错误，请检查网络连接后重试。',
      time: new Date().toLocaleTimeString()
    })
  } finally {
    isGenerating.value = false
  }
}

const refreshTemplates = () => {
  loadTemplates()
  ElMessage.info('模板列表已刷新')
}

const clearHistory = () => {
  chatHistory.value = []
  currentPage.value = 1
  ElMessage.success('对话记录已清空')
}

// 分页方法
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const handleLogin = () => {
  ElMessage.info('登录功能开发中...')
}

const handleRegister = () => {
  ElMessage.info('注册功能开发中...')
}

const goHome = () => {
  router.push({ name: 'home' })
}

const previewLesson = () => {
  ElMessage.info('预览功能开发中...')
}

const exportLesson = () => {
  ElMessage.info('导出功能开发中...')
}

const clearEditor = async () => {
  try {
    await ElMessageBox.confirm('确定要清空编辑器内容吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
    editorContent.value = ''
    ElMessage.success('编辑器已清空')
  } catch {
    // 用户取消
  }
}

const copyPrompt = async (prompt: string) => {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(prompt)
      ElMessage.success('AI提示词已复制到剪贴板')
    } else {
      // 降级方案
      const textArea = document.createElement('textarea')
      textArea.value = prompt
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      ElMessage.success('AI提示词已复制到剪贴板')
    }
  } catch (error) {
    console.error('复制失败:', error)
    ElMessage.error('复制失败，请手动复制')
  }
}

const formatText = (command: string) => {
  document.execCommand(command, false, undefined)
}

const onEditorInput = (event: Event) => {
  const target = event.target as HTMLElement
  editorContent.value = target.innerHTML
}

onMounted(async () => {
  // 首先加载模板数据
  await loadTemplates()
  
  // 接收从主页传递的参数
  const { content, subject, grade, templateId } = route.query
  
  if (content) {
    generationParams.value.title = content as string
    
    // 添加进入消息到对话历史
    chatHistory.value.push({
      type: 'user',
      content: `我想生成《${content}》的教案`,
      time: new Date().toLocaleTimeString()
    })
    
    chatHistory.value.push({
      type: 'ai',
      content: '已为您识别教学内容并预选模板，请完善生成参数后点击生成按钮。',
      time: new Date().toLocaleTimeString()
    })
  }
  
  if (subject) {
    selectedSubject.value = subject as string
  }
  
  if (grade) {
    selectedGrade.value = grade as string
    // 自动设置年级到生成参数
    const gradeMap: Record<string, string> = {
      '小学': '三年级',
      '初中': '七年级', 
      '高中': '高一'
    }
    generationParams.value.grade = gradeMap[grade as string] || ''
  }
  
  if (templateId) {
    const id = parseInt(templateId as string)
    const template = templates.value.find(t => t.id === id)
    if (template) {
      selectedTemplate.value = template
    }
  }
})
</script>

<style scoped>
.ai-generator.generator-page {
  height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
  background: linear-gradient(135deg, #409eff 0%, #337ecc 100%);
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

.nav-link {
  color: #4a5568;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  transition: color 0.3s ease;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}

.nav-link:hover,
.nav-link.active {
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
  background: #409eff;
  border-color: #409eff;
  color: white;
}

.nav-auth-btn-primary:hover {
  background: #337ecc;
  border-color: #337ecc;
  color: white;
}

/* 三栏主体布局 */
.generator-main {
  flex: 1;
  display: flex;
  gap: 20px;
  padding: 100px 20px 20px;
  overflow: hidden;
}

/* 通用面板样式 */
.left-panel,
.center-panel,
.right-panel {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  border: 1px solid rgba(226, 232, 240, 0.8);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  max-height: 100%;
}

.left-panel:hover,
.center-panel:hover,
.right-panel:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.left-panel {
  width: 320px;
  min-width: 320px;
}

.center-panel {
  width: 400px;
  min-width: 400px;
}

.right-panel {
  flex: 1;
  min-width: 500px;
}

.panel-header {
  padding: 20px 24px;
  border-bottom: 1px solid rgba(240, 242, 245, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #fafbfc 0%, #f8fafc 100%);
  backdrop-filter: blur(5px);
}

.panel-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #2d3748;
  background: linear-gradient(135deg, #409eff 0%, #337ecc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 左侧模板区域 */
.template-list {
  flex: 1;
  padding: 8px;
  overflow-y: auto;
}

.template-list-scroll {
  height: 100%;
  overflow-y: auto;
  padding-right: 4px;
}

.template-card-compact {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  margin-bottom: 4px;
  min-height: 52px;
}

.template-card-compact:hover {
  background: rgba(245, 247, 250, 0.9);
  border-color: rgba(228, 231, 237, 0.6);
  transform: translateY(-0.5px);
}

.template-card-compact.active {
  background: linear-gradient(135deg, rgba(236, 245, 255, 0.95) 0%, rgba(224, 242, 254, 0.95) 100%);
  border-color: #409eff;
  box-shadow: 0 1px 4px rgba(64, 158, 255, 0.15);
}

.card-icon-mini {
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #409eff 0%, #337ecc 100%);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  flex-shrink: 0;
  margin-top: 1px;
}

.card-content-mini {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.card-title-mini {
  font-size: 12px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-tags-mini {
  display: flex;
  gap: 3px;
  flex-wrap: wrap;
}

.card-tags-mini .el-tag {
  font-size: 9px;
  padding: 0px 4px;
  height: 15px;
  line-height: 13px;
  border-radius: 7px;
}

.card-desc-mini {
  font-size: 10px;
  color: #606266;
  margin: 0;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 12px;
}

.card-stats-mini {
  display: flex;
  gap: 6px;
  font-size: 9px;
  color: #909399;
  align-items: center;
  margin-top: 1px;
}

.stat-mini {
  display: flex;
  align-items: center;
  gap: 1px;
}

.stat-mini .el-icon {
  font-size: 10px;
}

.detail-btn-mini {
  padding: 2px 4px !important;
  font-size: 9px !important;
  color: #409eff;
}

.detail-btn-mini:hover {
  color: #337ecc;
}

/* 现代化模板设计 */

.template-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #409eff, #337ecc);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.template-item:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 12px 32px rgba(64, 158, 255, 0.15);
  border-color: rgba(64, 158, 255, 0.3);
}

.template-item:hover::before {
  opacity: 1;
}

.template-item.active {
  background: linear-gradient(135deg, rgba(236, 245, 255, 0.95) 0%, rgba(224, 242, 254, 0.95) 100%);
  border-color: #409eff;
  box-shadow: 0 8px 25px rgba(64, 158, 255, 0.25);
}

.template-item.active::before {
  opacity: 1;
}

.template-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #409eff 0%, #337ecc 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(64, 158, 255, 0.3);
  transition: all 0.3s ease;
  position: relative;
}

.template-item:hover .template-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 6px 20px rgba(64, 158, 255, 0.4);
}

.template-info {
  flex: 1;
  min-width: 0;
}

.template-name {
  font-size: 16px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 8px 0;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.template-item:hover .template-name {
  color: #409eff;
}

.template-meta {
  font-size: 12px;
  margin: 0 0 12px 0;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.template-desc {
  font-size: 13px;
  color: #64748b;
  margin: 0 0 12px 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.template-tags {
  margin: 8px 0;
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}

.template-tags .tag-item {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 12px;
  font-weight: 500;
  transform: none;
}

.template-stats {
  display: flex;
  gap: 16px;
  font-size: 12px;
  color: #8b5cf6;
  margin: 8px 0;
}

.usage-count, .rating {
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
}

.template-actions {
  margin-top: 12px;
}

.template-card {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  margin-bottom: 8px;
  min-height: 72px;
}

.template-card:hover {
  background: rgba(245, 247, 250, 0.9);
  border-color: rgba(228, 231, 237, 0.6);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.template-card.active {
  background: linear-gradient(135deg, rgba(236, 245, 255, 0.95) 0%, rgba(224, 242, 254, 0.95) 100%);
  border-color: #409eff;
  box-shadow: 0 2px 8px rgba(64, 158, 255, 0.15);
}

.template-slide:hover {
  background: rgba(245, 247, 250, 0.95);
  border-color: rgba(228, 231, 237, 0.8);
  transform: scale(1.02);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

.template-slide.active {
  background: linear-gradient(135deg, rgba(236, 245, 255, 0.9) 0%, rgba(224, 242, 254, 0.9) 100%);
  border-color: #409eff;
  box-shadow: 0 8px 25px rgba(64, 158, 255, 0.25);
}

.template-content {
  text-align: center;
  width: 100%;
}

.template-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #409eff 0%, #337ecc 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  margin: 0 auto 20px;
  box-shadow: 0 8px 20px rgba(64, 158, 255, 0.3);
  transition: all 0.3s ease;
}

.template-slide:hover .template-icon {
  transform: scale(1.1) rotateY(10deg);
  box-shadow: 0 12px 30px rgba(64, 158, 255, 0.4);
}

.template-name {
  font-size: 18px;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 16px 0;
  line-height: 1.3;
}

.template-meta {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-bottom: 16px;
}

.template-desc {
  font-size: 14px;
  color: #64748b;
  margin: 0 0 20px 0;
  line-height: 1.5;
  text-align: center;
}

.template-stats {
  display: flex;
  gap: 20px;
  justify-content: center;
  font-size: 12px;
  color: #64748b;
}

.usage-count,
.rating {
  display: flex;
  align-items: center;
  gap: 4px;
}

.template-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
}

.template-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  margin-bottom: 12px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.6);
}

.template-item:hover {
  background: rgba(245, 247, 250, 0.9);
  border-color: rgba(228, 231, 237, 0.8);
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}

.template-item.active {
  background: linear-gradient(135deg, rgba(236, 245, 255, 0.9) 0%, rgba(224, 242, 254, 0.9) 100%);
  border-color: #409eff;
  box-shadow: 0 4px 15px rgba(64, 158, 255, 0.2);
}

.card-icon {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #409eff 0%, #337ecc 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  flex-shrink: 0;
  margin-top: 2px;
  box-shadow: 0 2px 4px rgba(64, 158, 255, 0.2);
  transition: all 0.2s ease;
}

.template-card:hover .card-icon {
  transform: scale(1.05);
  box-shadow: 0 3px 8px rgba(64, 158, 255, 0.3);
}

.card-content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.card-header {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.card-title {
  font-size: 13px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.card-tags {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}

.card-tags .el-tag {
  font-size: 10px;
  padding: 1px 6px;
  height: 18px;
  line-height: 16px;
  border-radius: 9px;
  transform: none;
}

.card-desc {
  font-size: 11px;
  color: #606266;
  margin: 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 28px;
}

.card-stats {
  display: flex;
  gap: 8px;
  font-size: 10px;
  color: #909399;
  align-items: center;
  margin-top: 2px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;
  transition: color 0.2s ease;
}

.stat-item:hover {
  color: #409eff;
}

.stat-item .el-icon {
  font-size: 12px;
}

.stat-item span {
  font-size: 10px;
  font-weight: 500;
}

/* 中间AI对话区域 */
.generation-form {
  padding: 20px;
  border-bottom: 1px solid #f0f2f5;
}

.generation-actions {
  margin-top: 16px;
}

.chat-history {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-header {
  padding: 12px 20px;
  border-bottom: 1px solid #f0f2f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafbfc;
  font-size: 14px;
  font-weight: 500;
  color: #606266;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px;
}

.chat-message {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.chat-message.user {
  flex-direction: row-reverse;
}

.message-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex-shrink: 0;
}

.chat-message.user .message-avatar {
  background: #409eff;
  color: white;
}

.chat-message.ai .message-avatar {
  background: #67c23a;
  color: white;
}

.message-content {
  flex: 1;
  max-width: 80%;
}

.chat-message.user .message-content {
  text-align: right;
}

.message-text {
  background: #f5f7fa;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.4;
  color: #2c3e50;
}

.chat-message.user .message-text {
  background: #409eff;
  color: white;
}

.message-time {
  font-size: 11px;
  color: #c0c4cc;
  margin-top: 4px;
}

/* 右侧编辑区域 */
.editor-actions {
  display: flex;
  gap: 8px;
}

.editor-toolbar {
  padding: 12px 20px;
  border-bottom: 1px solid #f0f2f5;
  background: #fafbfc;
  display: flex;
  align-items: center;
}

.editor-content {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.rich-editor {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  overflow-x: hidden;
  line-height: 1.8;
  color: #2c3e50;
  background: white;
  outline: none;
  height: 100%;
  max-height: 100%;
  min-height: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  scroll-behavior: smooth;
}

.editor-placeholder {
  color: #c0c4cc;
  font-style: italic;
}

.rich-editor h1 {
  color: #1a202c;
  font-size: 28px;
  font-weight: 700;
  margin: 24px 0 20px 0;
  padding-bottom: 12px;
  border-bottom: 3px solid #409eff;
  text-align: center;
}

.rich-editor h2 {
  color: #2d3748;
  font-size: 22px;
  font-weight: 600;
  margin: 24px 0 16px 0;
  border-bottom: 2px solid #409eff;
  padding-bottom: 8px;
  background: linear-gradient(135deg, #409eff 0%, #337ecc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.rich-editor h3 {
  color: #4a5568;
  font-size: 18px;
  font-weight: 600;
  margin: 20px 0 12px 0;
  padding-left: 12px;
  border-left: 4px solid #409eff;
}

.rich-editor h4 {
  color: #4a5568;
  font-size: 16px;
  font-weight: 600;
  margin: 16px 0 8px 0;
  padding-left: 8px;
  border-left: 3px solid #64748b;
}

.rich-editor p {
  margin: 12px 0;
  line-height: 1.8;
  text-align: justify;
}

.rich-editor ul,
.rich-editor ol {
  margin: 16px 0;
  padding-left: 24px;
}

.rich-editor li {
  margin: 8px 0;
  line-height: 1.6;
}

.rich-editor strong {
  color: #2d3748;
  font-weight: 600;
}

.rich-editor em {
  color: #4a5568;
  font-style: italic;
}

/* 表格样式 */
.rich-editor table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  border: 1px solid #e2e8f0;
}

.rich-editor th,
.rich-editor td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.rich-editor th {
  background-color: #f8fafc;
  font-weight: 600;
  color: #2d3748;
}

/* 代码块样式 */
.rich-editor code {
  background-color: #f1f5f9;
  color: #374151;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 0.9em;
}

.rich-editor pre {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  overflow-x: auto;
}

.rich-editor pre code {
  background: none;
  padding: 0;
}

.document-stats {
  padding: 12px 20px;
  border-top: 1px solid #f0f2f5;
  background: #fafbfc;
  display: flex;
  gap: 24px;
  font-size: 12px;
}

.stats-item {
  display: flex;
  gap: 4px;
}

.stats-label {
  color: #909399;
}

.stats-value {
  color: #2c3e50;
  font-weight: 500;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(241, 245, 249, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, rgba(203, 213, 224, 0.8) 0%, rgba(160, 174, 192, 0.8) 100%);
  border-radius: 4px;
  transition: all 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, rgba(160, 174, 192, 0.9) 0%, rgba(107, 114, 128, 0.9) 100%);
}

/* 编辑器专用滚动条 */
.rich-editor::-webkit-scrollbar {
  width: 10px;
}

.rich-editor::-webkit-scrollbar-track {
  background: rgba(248, 250, 252, 0.8);
  border-radius: 5px;
  margin: 10px 0;
}

.rich-editor::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
  border-radius: 5px;
  border: 2px solid transparent;
  background-clip: content-box;
}

.rich-editor::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #cbd5e1 0%, #94a3b8 100%);
  background-clip: content-box;
}

/* 模板样式增强 */
.template-actions {
  margin-top: 8px;
  text-align: left;
}

/* 响应式网格布局 */
@media (min-width: 1200px) {
  .template-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .template-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .template-meta {
    justify-content: center;
  }
  
  .template-stats {
    justify-content: center;
  }
  
  .template-actions {
    text-align: center;
  }
}

/* 模板详情对话框样式 */
.template-detail-content {
  padding: 20px 0;
}

.detail-header {
  text-align: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e2e8f0;
}

.detail-header h3 {
  margin: 0 0 12px 0;
  font-size: 20px;
  font-weight: 700;
  color: #2d3748;
}

.detail-meta {
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
}

.detail-section {
  margin-bottom: 24px;
}

.detail-section h4 {
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 600;
  color: #4a5568;
  padding-left: 8px;
  border-left: 3px solid #409eff;
}

.detail-section p {
  margin: 0;
  line-height: 1.6;
  color: #64748b;
}

.detail-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.prompt-content {
  background: #f8fafc;
  border-radius: 8px;
  padding: 4px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.stat-item {
  background: #f8fafc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.stat-label {
  font-size: 12px;
  color: #64748b;
  margin-bottom: 4px;
}

.stat-value {
  font-size: 18px;
  font-weight: 600;
  color: #2d3748;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

/* 紧凑详情对话框样式 */
.compact-dialog {
  border-radius: 8px;
}

.template-detail-compact {
  padding: 8px 0;
}

.detail-header-compact {
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f0f2f5;
}

.detail-header-compact h4 {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: #2d3748;
}

.detail-tags-compact {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.detail-section-compact {
  margin-bottom: 12px;
}

.section-title {
  font-size: 13px;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 6px;
}

.detail-desc {
  font-size: 12px;
  color: #64748b;
  line-height: 1.4;
  margin: 0;
}

.stats-row {
  display: flex;
  gap: 16px;
  font-size: 11px;
  color: #64748b;
}

.stat-item-compact strong {
  color: #2d3748;
  font-weight: 600;
}

.tags-compact {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}

.prompt-preview {
  font-size: 11px;
  color: #64748b;
  background: #f8fafc;
  padding: 8px;
  border-radius: 4px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
}

.dialog-footer-compact {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

/* 模板标签样式 */
.template-tags {
  margin: 12px 0;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: center;
}

.template-tags .tag-item {
  font-size: 11px;
  padding: 2px 6px;
}

/* 模板操作按钮 */
.template-actions {
  margin-top: 16px;
  text-align: center;
  padding-top: 12px;
  border-top: 1px solid rgba(226, 232, 240, 0.5);
}

/* 加载状态 */
.template-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #94a3b8;
}

/* 筛选区域 */
.template-filters {
  padding: 16px 20px;
  border-bottom: 1px solid #f0f2f5;
  background: #fafbfc;
}

.filter-item {
  margin-bottom: 12px;
}

.filter-item label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 6px;
}
@media (max-width: 1400px) {
  .left-panel {
    width: 280px;
    min-width: 280px;
  }
  
  .center-panel {
    width: 360px;
    min-width: 360px;
  }
}

@media (max-width: 1200px) {
  .generator-main {
    flex-direction: column;
    gap: 16px;
    padding: 100px 16px 20px;
  }
  
  .left-panel,
  .center-panel,
  .right-panel {
    width: 100%;
    min-width: unset;
  }
  
  .left-panel {
    height: 350px;
  }
  
  .center-panel {
    height: 450px;
  }
  
  .right-panel {
    flex: 1;
    min-height: 600px;
  }

  .nav-links {
    display: none;
  }
}

@media (max-width: 768px) {
  .navbar-content {
    padding: 0 16px;
  }

  .auth-buttons {
    gap: 8px;
  }

  .auth-buttons .el-button {
    padding: 8px 12px;
    font-size: 12px;
  }

  .generator-main {
    padding: 90px 12px 16px;
    gap: 12px;
  }

  .panel-header {
    padding: 16px 20px;
  }

  .panel-header h3 {
    font-size: 16px;
  }
}

/* 美化滚动条 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(241, 245, 249, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, rgba(203, 213, 224, 0.8) 0%, rgba(160, 174, 192, 0.8) 100%);
  border-radius: 4px;
  transition: all 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, rgba(160, 174, 192, 0.9) 0%, rgba(107, 114, 128, 0.9) 100%);
}

/* 加载动画 */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.loading {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* 按钮增强效果 */
.el-button {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.el-button:hover {
  transform: translateY(-1px);
}

.el-button:active {
  transform: translateY(0);
}

/* 输入框增强效果 */
.el-input__wrapper {
  transition: all 0.3s ease;
  border-radius: 8px;
}

.el-input__wrapper:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.el-input__wrapper.is-focus {
  box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
}

/* 选择器增强效果 */
.el-select .el-input__wrapper {
  transition: all 0.3s ease;
}

/* 表单增强 */
.el-form-item__label {
  font-weight: 600;
  color: #4a5568;
}

/* 标签增强 */
.el-tag {
  border-radius: 20px;
  font-weight: 500;
}

/* 新增样式 */
.generation-form {
  padding: 20px 24px;
  border-bottom: 1px solid rgba(240, 242, 245, 0.8);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%);
  flex-shrink: 0;
}

.compact-form {
  margin: 0;
}

.form-item-compact {
  margin-bottom: 16px;
}

.form-item-compact :deep(.el-form-item__label) {
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #4a5568;
}

.generate-btn {
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, #409eff 0%, #337ecc 100%);
  border: none;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 15px rgba(64, 158, 255, 0.3);
}

.generate-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(64, 158, 255, 0.4);
}

.chat-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.page-info {
  font-size: 12px;
  color: #64748b;
  padding: 0 8px;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #94a3b8;
  text-align: center;
  min-height: 200px;
}

.empty-state p {
  margin: 4px 0;
}

.empty-hint {
  font-size: 12px;
  color: #cbd5e1;
}

.editor-container {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 0;
  height: 100%;
}
</style>