package com.aithub.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

/**
 * 跨域配置
 * 
 * @author AI Teaching Hub
 */
@Configuration
public class CorsConfig {
    
    @Value("${cors.allowed-origins}")
    private List<String> allowedOrigins;
    
    @Value("${cors.allowed-methods}")
    private List<String> allowedMethods;
    
    @Value("${cors.allowed-headers}")
    private String allowedHeaders;
    
    @Value("${cors.allow-credentials}")
    private Boolean allowCredentials;
    
    @Value("${cors.max-age}")
    private Long maxAge;
    
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        
        // 允许的源
        configuration.setAllowedOrigins(allowedOrigins);
        
        // 允许的方法
        configuration.setAllowedMethods(allowedMethods);
        
        // 允许的头部
        configuration.setAllowedHeaders(Arrays.asList(allowedHeaders.split(",")));
        
        // 是否允许凭证
        configuration.setAllowCredentials(allowCredentials);
        
        // 预检请求的缓存时间
        configuration.setMaxAge(maxAge);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        
        return source;
    }
}