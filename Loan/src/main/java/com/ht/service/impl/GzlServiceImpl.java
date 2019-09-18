package com.ht.service.impl;

import com.ht.bean.contact;
import com.ht.dao.GzlDao;
import com.ht.service.GzlService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

/**
 * Created by shkstart on 2019/4/19.
 */
@Service
@Transactional
public class GzlServiceImpl implements GzlService {
    @Resource
    private GzlDao dao;
    @Override
    public void addcon(contact contact) {
        dao.addcon(contact);

    }
}
