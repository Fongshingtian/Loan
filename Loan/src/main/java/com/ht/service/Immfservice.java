package com.ht.service;

import com.ht.bean.*;

import java.security.cert.Certificate;
import java.util.List;

public interface Immfservice {
    public List selrotation();
    public List selrotationbyid(Integer id);
    public void addorupdrotation(rotation r);
    public List<product_induce> allpro();
    public List getBusinessOutltts();
    public List getBusinessOutlttscity(String i);
    public List<introduceGenre> getAllGenre();
    //资质证书
    public List<certificate> getAllcertificate();
    public List<honor> getAllhonor();
    public introduce getintroducebyid(Integer id);
    public List<NewsList> getallnewslist(Integer i);
    //总行数
    public int newlist();
    public void addcer(certificate c);
    public void addhon(honor h);
    public void delcer(Integer id);
    public void delhon(Integer id);
    //（0：合作伙伴，1：合作媒体）
    public List<cooperation> getcooperationbycategory(Integer category);
    public void updintroduce(introduce i);
    public void delcoll(Integer id);
    public void addcoll(cooperation c);
    //查询新手专享标
    public List selezbgj(Integer types);
    public information selallinfor();
    public List<report> selreport();
    public void addreport(report re);
    public report selreoorts(Integer id);
    //mintime   最小期限    maxtime最大期限 minmoney最小利率    maxmoney最大利率    hkfs 还款方式   minsy 最小剩余金额    max剩余金额 px  排序方式
    public List<scattered> selscatered(String mintime,String maxtime,String minmoney,String maxmoney,String hkfs,String minsy,String maxsy,String px,Integer i);
    public List<Loan> getscattered(Integer i,Integer t);
    public int loanlist();
    public Loan selloan(Integer id);
    public int updloan(Integer id);
    public Mx selmx(String id);
    public int insertscttered(scattered s);
    public int scatteredlist();
    public scattered selscatteredbyid(Integer id);
    public List selhkfs();
    List selscattere();
}
