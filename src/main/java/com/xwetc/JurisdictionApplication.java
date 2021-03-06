package com.xwetc;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@SpringBootApplication
//@ServletComponentScan //扫描servlt
@MapperScan("com.xwetc.jurisdiction.*.mapper")//这里mapper是你的mybatis的mapper目录。
public class JurisdictionApplication {

    public static void main(String[] args) {
        SpringApplication.run(JurisdictionApplication.class, args);
    }

    @RequestMapping("/")
    @ResponseBody
    String home(){
        return "Hello";
    }
}
