package com.ht.service.impl;

import com.ht.bean.Pager;
import com.ht.bean.product_induce;
import com.ht.dao.ProductInduceDao;
import com.ht.service.IProductInduceService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Service
//@Transactional
public class ProductInduceServiceImpl implements IProductInduceService {
    @Resource
    private ProductInduceDao prodao;

    //查询贷款产品表
    @Override
    public List<product_induce> allproByPage(product_induce pro,Integer beginIndex,Integer pageCount) {
        return prodao.selpro(pro,beginIndex,pageCount);
    }

    @Override
    public void addprod(product_induce product) {
        prodao.addpro(product);
    }

    @Override
    public product_induce selproByid(Integer pid) {
        return prodao.selbyid(pid);
    }

    @Override
    public void updprod(product_induce product) {
        prodao.updpro(product);
    }

    @Override
    public void delbyid(Integer pid) {
        prodao.delprobyid(pid);
    }
    @Override
    public List<product_induce> selprobysel() {
        return prodao.selplistbuselect();
    }

    @Override
    public Integer seltotalRow() {

        return prodao.prototalRow();
    }

    @Override
    public List<product_induce> allpro() {
        return prodao.prolist();
    }


}
