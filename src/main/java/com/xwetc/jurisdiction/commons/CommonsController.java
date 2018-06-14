package com.xwetc.jurisdiction.commons;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/commons")
public class CommonsController {

    @RequestMapping(value = "/header")
    public String header(){
        return "/commons/header";
    }

    @RequestMapping(value = "/footer")
    public String footer(){
        return "/commons/footer";
    }


    


}
