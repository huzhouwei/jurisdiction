package com.xwetc.jurisdiction.sys.entity;


import java.util.ArrayList;

public class BaseMenu {


    private String menuId;
    private String menuName;
    private String menuCode;
    private String menuLevel;
    private String menuUrl;
    private String fMenuId;
    private ArrayList<BaseMenu> baseMenuList;

    public String getMenuId() {
        return menuId;
    }

    public void setMenuId(String menuId) {
        this.menuId = menuId;
    }

    public String getMenuName() {
        return menuName;
    }

    public void setMenuName(String menuName) {
        this.menuName = menuName;
    }

    public String getMenuCode() {
        return menuCode;
    }

    public void setMenuCode(String menuCode) {
        this.menuCode = menuCode;
    }

    public String getMenuLevel() {
        return menuLevel;
    }

    public void setMenuLevel(String menuLevel) {
        this.menuLevel = menuLevel;
    }

    public String getMenuUrl() {
        return menuUrl;
    }

    public void setMenuUrl(String menuUrl) {
        this.menuUrl = menuUrl;
    }

    public String getfMenuId() {
        return fMenuId;
    }

    public void setfMenuId(String fMenuId) {
        this.fMenuId = fMenuId;
    }

    public ArrayList<BaseMenu> getBaseMenuList() {
        return baseMenuList;
    }

    public void setBaseMenuList(ArrayList<BaseMenu> baseMenuList) {
        this.baseMenuList = baseMenuList;
    }
}
