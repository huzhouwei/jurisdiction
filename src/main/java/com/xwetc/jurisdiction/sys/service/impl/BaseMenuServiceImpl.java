package com.xwetc.jurisdiction.sys.service.impl;

import com.xwetc.jurisdiction.sys.dao.BaseMenuMapper;
import com.xwetc.jurisdiction.sys.entity.BaseMenu;
import com.xwetc.jurisdiction.sys.service.BaseMenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class BaseMenuServiceImpl implements BaseMenuService {

    @Autowired
    BaseMenuMapper menuMapper;

    @Override
    public List<BaseMenu> menuList() {
        //"0" 初始父id
        List<Map<String, Object>> list = menuMapper.menuList("0");
        List<BaseMenu> menuList = new ArrayList<BaseMenu>();
        this.createBaseMenuList(list,menuList);
        return menuList;
    }

    private void createBaseMenuList(List<Map<String, Object>> list,List<BaseMenu> menuList){

        for(Map<String,Object> menuMap : list){
            BaseMenu menu = new BaseMenu();
            menu.setMenuId((String) menuMap.get("menu_id"));
            menu.setMenuName((String) menuMap.get("menu_name"));
            menu.setMenuCode((String) menuMap.get("menu_code"));
            menu.setMenuLevel((String) menuMap.get("menu_level"));
            menu.setMenuUrl((String) menuMap.get("menu_url"));
            String fid = (String) menuMap.get("menu_id");
            menuList.add(menu);
            List<Map<String, Object>> subList = menuMapper.menuList(fid);
            this.createBaseMenuList(subList,menu.getBaseMenuList());
        }
    }
}
