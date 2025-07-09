package com.aithub.dto;

import lombok.Data;
import javax.validation.constraints.NotBlank;

/**
 * 用户登录请求DTO
 * 
 * @author AI Teaching Hub
 */
@Data
public class LoginRequest {
    
    /**
     * 用户名
     */
    @NotBlank(message = "用户名不能为空")
    private String username;
    
    /**
     * 密码
     */
    @NotBlank(message = "密码不能为空")
    private String password;
    
    /**
     * 验证码
     */
    private String captcha;
    
    /**
     * 记住我
     */
    private Boolean rememberMe = false;
}