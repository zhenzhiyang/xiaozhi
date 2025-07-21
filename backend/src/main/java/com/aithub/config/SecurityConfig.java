package com.aithub.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfigurationSource;

/**
 * Spring Security配置
 * 
 * @author AI Teaching Hub
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    private final CorsConfigurationSource corsConfigurationSource;
    
    public SecurityConfig(CorsConfigurationSource corsConfigurationSource) {
        this.corsConfigurationSource = corsConfigurationSource;
    }
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            // 启用CORS
            .cors().configurationSource(corsConfigurationSource)
            .and()
            // 禁用CSRF（因为我们使用JWT）
            .csrf().disable()
            // 配置会话管理
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            // 配置授权规则 - 使用Spring Boot 2.7兼容的语法
            .authorizeRequests(authz -> authz
                // 允许访问AI相关接口
                .antMatchers("/ai/**").permitAll()
                // 允许访问API文档
                .antMatchers("/doc.html", "/webjars/**", "/v3/api-docs/**").permitAll()
                // 允许访问健康检查
                .antMatchers("/actuator/**").permitAll()
                // 允许OPTIONS请求
                .antMatchers("OPTIONS", "/**").permitAll()
                // 其他请求需要认证
                .anyRequest().authenticated()
            );
        
        return http.build();
    }
}