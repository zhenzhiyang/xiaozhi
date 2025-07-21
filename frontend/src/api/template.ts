// 模板相关接口

// 后端API基础URL
const API_BASE_URL = 'http://localhost:8080/api'

// 模板相关接口
export interface Template {
  id: number
  templateName: string
  subject: string
  gradeLevel: string
  templateType: string
  templateContent: string
  aiPrompt: string
  description: string
  tags: string
  usageCount: number
  rating: number
  isActive: number
  createTime: string
  updateTime: string
}

export interface TemplateListRequest {
  subject?: string
  grade?: string
  templateType?: string
}

export interface TemplateListResponse {
  success: boolean
  data: Template[]
  message?: string
}

export interface TemplateDetailResponse {
  success: boolean
  data: Template
  message?: string
}

/**
 * 发送HTTP请求的通用方法
 */
async function request<T>(url: string, options: RequestInit = {}): Promise<T> {
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  }

  try {
    const response = await fetch(`${API_BASE_URL}${url}`, config)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    
    // 转换后端响应格式到前端期望的格式
    if (data && typeof data === 'object') {
      // 处理列表响应
      if ('code' in data && 'data' in data && 'message' in data) {
        return {
          success: data.code === 200,
          data: data.data,
          message: data.message
        } as T
      }
      // 处理详情响应
      else if ('code' in data && 'data' in data && 'message' in data) {
        return {
          success: data.code === 200,
          data: data.data,
          message: data.message
        } as T
      }
    }
    
    return data
  } catch (error) {
    console.error('API request failed:', error)
    throw error
  }
}

/**
 * 获取模板列表
 */
export function getTemplateList(params?: TemplateListRequest): Promise<TemplateListResponse> {
  const query = new URLSearchParams()
  if (params?.subject) query.append('subject', params.subject)
  if (params?.grade) query.append('grade', params.grade)
  if (params?.templateType) query.append('templateType', params.templateType)
  
  const queryString = query.toString()
  const url = queryString ? `/ai/templates?${queryString}` : '/ai/templates'
  
  return request<TemplateListResponse>(url)
}

/**
 * 获取模板详情
 */
export function getTemplateDetail(id: number): Promise<TemplateDetailResponse> {
  return request<TemplateDetailResponse>(`/ai/templates/${id}`)
}

/**
 * 增加模板使用次数
 */
export function incrementTemplateUsage(id: number): Promise<{ success: boolean; message?: string }> {
  return request(`/ai/templates/${id}/usage`, {
    method: 'POST'
  })
}