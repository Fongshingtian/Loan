package com.ht.service.impl;

import com.ht.bean.myusers;
import com.ht.dao.LoginDao;
import com.ht.service.ILoginService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class LoginServiceImpl implements ILoginService{
    @Resource
    private LoginDao dao;

    @Override
    public List<myusers> selBypwd(myusers user) {
        return dao.seluser(user);
    }
}
