package com.xwetc.jurisdiction.sys.dao;

import com.xwetc.jurisdiction.sys.entity.BaseMenu;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface BaseMenuMapper {

    @Select("select * from t_base_menu where f_menu_id = #{fid}")
    List<Map<String,Object>> menuList(String fid);

}
