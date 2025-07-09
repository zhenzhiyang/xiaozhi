package com.aithub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * AI教案工具主启动类
 * 
 * @author AI Teaching Hub
 * @version 1.0
 * @since 2024-07-09
 */
@SpringBootApplication
@EnableTransactionManagement
public class AiTeachingHubApplication {

    public static void main(String[] args) {
        SpringApplication.run(AiTeachingHubApplication.class, args);
        System.out.println("AI教案工具启动成功！");
        System.out.println("API文档地址: http://localhost:8080/api/doc.html");
    }
}