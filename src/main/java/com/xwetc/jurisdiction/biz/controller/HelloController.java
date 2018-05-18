package com.xwetc.jurisdiction.biz.controller;

import com.xwetc.jurisdiction.biz.entity.User;
import com.xwetc.jurisdiction.biz.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/hello")
public class HelloController {

    @Autowired
    UserService userService;

    @RequestMapping
    public String hello(){
        System.out.println("hello");
        String id = "1";
        User user = userService.getUserByID(id);
        System.out.println(user.getUsername());
        return "/hello";
    }


}
