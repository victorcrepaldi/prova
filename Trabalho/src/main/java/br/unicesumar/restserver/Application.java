package br.unicesumar.restserver;

import javax.transaction.Transactional;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;



@SpringBootApplication
@RequestMapping
@Transactional


public class Application {
    
   
    @RequestMapping("/disciplinas")
    public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
    }
    
}
