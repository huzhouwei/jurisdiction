package com.xwetc.jurisdiction.sys.controller;

import com.xwetc.jurisdiction.sys.entity.BaseMenu;
import com.xwetc.jurisdiction.sys.service.BaseMenuService;
import com.xwetc.jurisdiction.util.JacksonUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.List;

@Controller
@RequestMapping(value = "/menu")
public class MenuController {

    @Autowired
    BaseMenuService baseMenuService;

    @RequestMapping(value = "")
    public String menu() {
        return "sys/menu";
    }

    @RequestMapping(value = "/menuList", method = RequestMethod.POST,
            produces = "application/json")
    @ResponseBody
    public String menuList() {
        List<BaseMenu> list = baseMenuService.menuList();
        System.out.println(JacksonUtil.toJSon(list));
        return JacksonUtil.toJSon(list);
    }


}



