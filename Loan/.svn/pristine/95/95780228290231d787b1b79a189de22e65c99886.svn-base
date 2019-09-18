package com.ht.controller;

import com.ht.bean.contact;
import com.ht.service.GzlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by shkstart on 2019/4/19.
 */
@RequestMapping("gzl")
@Controller
public class Gzlcontroller {

    @Autowired
    private GzlService gs;


    @RequestMapping("introduce")
    public String text1(){
        System.out.println("跳转到联系我们主页面");
        return "Aboutus/introduce";
    }

    @RequestMapping("development")
    public String text2(){
        System.out.println("跳转到联系我们发展页面");
        return "Aboutus/development";
    }

    @RequestMapping("news")
    public String text3(){
        System.out.println("跳转到联系我们新闻页面");
        return "Aboutus/news";
    }

    @RequestMapping("contactus")
    public String text4(){
        System.out.println("跳转到联系我们联系页面");
        return "Aboutus/contactus";
    }
    @RequestMapping("conform")
    public String text5(){
        System.out.println("跳转到联系我们表单页面");
        return "Aboutus/conform";
    }

    @RequestMapping("addcon")
    public  String addcon(contact contact){
        Date date = new Date();
        SimpleDateFormat Formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String da = Formatter.format(date);
        contact.setCtime(da);
        gs.addcon(contact);
        return "Aboutus/conform";


    }


}
