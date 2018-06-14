package com.xwetc.jurisdiction.biz.controller;

import com.xwetc.jurisdiction.biz.entity.User;
import com.xwetc.jurisdiction.biz.entity.User;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;

@Controller
@RequestMapping(value = "/main")
@Configuration
public class MainController {
    @RequestMapping
    public String main(){
        return "biz/main/main";
    }
}
