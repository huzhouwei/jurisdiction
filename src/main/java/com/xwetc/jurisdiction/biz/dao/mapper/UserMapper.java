package com.xwetc.jurisdiction.biz.dao.mapper;


import com.xwetc.jurisdiction.biz.entity.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

@Mapper
public interface UserMapper {

    @Select("select * from t_user where id = #{id}")
    User findByID(String id);

    @Insert("insert into t_user(username, password) values(#{username}, #{password})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    Integer addUser(User user);

}
