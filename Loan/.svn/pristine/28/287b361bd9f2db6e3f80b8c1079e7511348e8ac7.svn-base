package com.ht.service.impl;

import com.ht.bean.zbgj;
import com.ht.bean.zbgjson;
import com.ht.dao.Ht_BiddDao;
import com.ht.dao.Ht_LoanDao;
import com.ht.service.Ht_BiddService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class Ht_BiddServiceimpl implements Ht_BiddService {
    @Autowired
    private Ht_BiddDao Htbidd;
    @Override
    public List SelBidd() {
        return Htbidd.selBidd();
    }

    @Override
    public void Addbid(zbgj zbgj) {
        Htbidd.addbidd(zbgj);
    }

    @Override
    public void Delbidd(Integer id) {
        Htbidd.delbidd(id);
    }

    @Override
    public List SelZson(Integer id) {
        return Htbidd.selzson(id);
    }

    @Override
    public void addZson(zbgjson zbgjson) {
        Htbidd.addzson(zbgjson);
    }

    @Override
    public void Delzson(Integer id) {
        Htbidd.delzson(id);
    }
}
