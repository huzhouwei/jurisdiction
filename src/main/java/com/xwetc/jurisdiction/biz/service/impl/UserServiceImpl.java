package com.xwetc.jurisdiction.biz.service.impl;

import com.xwetc.jurisdiction.biz.dao.mapper.UserMapper;
import com.xwetc.jurisdiction.biz.entity.User;
import com.xwetc.jurisdiction.biz.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserMapper userMapper;

    @Override
    public User getUserByID(String id) {
        User user = userMapper.findByID(id);
        return user;
    }
}
