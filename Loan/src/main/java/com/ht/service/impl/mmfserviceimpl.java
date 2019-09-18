package com.ht.service.impl;

import com.ht.bean.*;
import com.ht.dao.mmfdao;
import com.ht.service.Immfservice;
import org.springframework.stereotype.Service;


import javax.annotation.Resource;
import java.security.cert.Certificate;
import java.util.List;

@Service

public class mmfserviceimpl implements Immfservice  {
    @Resource
    private mmfdao dao;
    @Override
    public List selrotation() {
        return dao.getrotation();
    }

    @Override
    public List selrotationbyid(Integer id) {
        return dao.getrotationbyid(id);
    }

    @Override
    public void addorupdrotation(rotation r) {
        if(r.getId()==null || r.getId() ==0){
            System.out.println("添加"+r.getRoute());
            r.setId(null);
            dao.addtu(r);
        }else{
            System.out.println("修改"+r.getRoute());
            dao.updtu(r);
        }
    }
    public List<product_induce> allpro() {
        return dao.selpro();
    }

    @Override
    public List getBusinessOutltts() {
        return dao.getBusinessOutltts();
    }

    @Override
    public List getBusinessOutlttscity(String i) {
        return dao.getBusinessOutlttscity(i);
    }

    @Override
    public List<introduceGenre> getAllGenre() {
        return dao.getAllGenre();
    }

    @Override
    public List<certificate> getAllcertificate() {
        return dao.getAllcertificate();
    }

    @Override
    public List<honor> getAllhonor() {
        return dao.getAllhonor();
    }

    @Override
    public introduce getintroducebyid(Integer id) {
        return dao.getintroducebyid(id);
    }

    @Override
    public List<NewsList> getallnewslist(Integer i) {
        return dao.getnewslist(i);
    }

    @Override
    public int newlist() {
        return dao.NewList();
    }

    @Override
    public void addcer(certificate c) {
        dao.addcer(c);
    }

    @Override
    public void addhon(honor h) {
        dao.addhon(h);
    }

    @Override
    public void delcer(Integer id) {
        dao.delcer(id);
    }

    @Override
    public void delhon(Integer id) {
        dao.delhon(id);
    }

    @Override
    public List<cooperation> getcooperationbycategory(Integer category) {
        return dao.getcooperationbycategory(category);
    }

    @Override
    public void updintroduce(introduce i) {
        dao.updintroduce(i);
    }

    @Override
    public void delcoll(Integer id) {
        dao.delcoll(id);
    }

    @Override
    public void addcoll(cooperation c) {
        dao.addcoll(c);
    }

    @Override
    public List selezbgj(Integer types) {
        return dao.selezbgj(types);
    }

    @Override
    public information selallinfor() {
        return dao.selallinfor();
    }

    @Override
    public List<report> selreport() {
        return dao.selreport();
    }

    @Override
    public void addreport(report re) {
        dao.addreport(re);
    }

    @Override
    public report selreoorts(Integer id) {
        return dao.selreoorts(id);
    }

    @Override
    public List<scattered> selscatered(String mintime, String maxtime, String minmoney, String maxmoney, String hkfs, String minsy, String maxsy, String px,Integer i) {
        return dao.selscatered(mintime,maxtime,minmoney,maxmoney,hkfs,minsy,maxsy,px,i);
    }

    @Override
    public List<Loan> getscattered(Integer i,Integer t) {
        return dao.getscattered(i,t);
    }

    @Override
    public int loanlist() {
        return dao.loanlist();
    }

    @Override
    public Loan selloan(Integer id) {
        return dao.selloan(id);
    }

    @Override
    public int updloan(Integer id) {
        return dao.updloan(id);
    }

    @Override
    public Mx selmx(String id) {
        return dao.selmx(id);
    }

    @Override
    public int insertscttered(scattered s) {
        return dao.insertscattered(s);
    }

    @Override
    public int scatteredlist() {
        return dao.scatteredlist();
    }

    @Override
    public scattered selscatteredbyid(Integer id) {
        return dao.selscatteredbyid(id);
    }

    @Override
    public List selhkfs() {
        return dao.selhkfs();
    }

    @Override
    public List selscattere() {
        return dao.selscattere();
    }
}
