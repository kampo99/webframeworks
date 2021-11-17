package com.example.esserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class EsServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(EsServerApplication.class, args);
    }


    @Bean
    public WebMvcConfigurer corsConfigurer(){
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/scooters").allowedOrigins("http://localhost:4200");
                registry.addMapping("/scooters/{id}").allowedOrigins("http://localhost:4200");
            }
        };
    }
}
