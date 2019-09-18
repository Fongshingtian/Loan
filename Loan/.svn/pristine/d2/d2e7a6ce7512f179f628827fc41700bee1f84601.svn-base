package com.ht.controller;

import com.github.pagehelper.Page;
import com.ht.bean.*;
import com.ht.service.WlkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("/wlk")//
public class WlkController {
    @Autowired
    WlkService is;

    @RequestMapping("/lawadd")
    public String lawadd(Law law){
        Date date=new Date();
        SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String nowtime=sdf.format(date);

        law.setCdate(nowtime);
        law.setEmpid(1);
        law.setState(1);
        System.out.println(law);

        boolean bin=is.saveLaw(law);
        System.out.println(bin);
        return "redirect:/wlk/backlawlist";
    }

    @RequestMapping("/addLaw")
    public String addLaw(){
        System.out.println("addLaw");
        return "wlk/jsps/lawadd";
    }

    /*删除单个公告*/
    @RequestMapping("/delOneLaw")
    public String delOneLaw(int lid){
        System.out.println("delOneLaw  "+lid);

        boolean bin=is.delOneLaws(lid);
        return "redirect:/wlk/backlawlist";
    }

    @RequestMapping("/backonelaw")
    public ModelAndView backonelaw(int lid){
        System.out.println("backonelaw   id"+lid);
        ModelAndView mv = new ModelAndView();

        Law one=is.getOneLaw(lid);
        System.out.println(one.getLid()+one.getTitle());
        mv.addObject("oneNew", one);
        mv.setViewName("wlk/jsps/backlawone");
        return mv;
    }

    @RequestMapping("/backlawlist")
    public ModelAndView backlawlist(WlkPage page, Law law){
        System.out.println("backlawlist");
        ModelAndView mv = new ModelAndView();

        int rows=is.lawRow();
        page.setTotalRow(rows);
        System.out.println("总行数="+page.getTotalRow());

        //总页数 （数据总条数+每页数据行数-1）/每页数据行数
        page.setTotalPage((page.getTotalRow()+page.getPageCount()-1)/page.getPageCount());

        // 判断页数上限
        if (page.getCurrPage() == null || page.getCurrPage().equals("") || page.getCurrPage() < 1) {
            page.setCurrPage(1);
        }
        if (page.getCurrPage() > page.getTotalPage() && page.getTotalPage() != 0) {
            page.setCurrPage(page.getTotalPage());
        }
        //page.getCurrPage()-1)*page.getPageCount(),page.getPageCount()
        List<Law> lawlist=is.allLawList((page.getCurrPage()-1)*page.getPageCount(),page.getPageCount());

        for (int i=0;i<lawlist.size();i++){
            Law l=(Law)lawlist.get(i);
            System.out.println(l.getLid()+l.getTitle());
        }
        mv.addObject("list", lawlist);
        mv.addObject("page",page);
        mv.setViewName("wlk/jsps/backlawlist");
        return mv;
    }

    /*根据id来查询单个新闻公告*/
    @RequestMapping("/onelaw")
    public ModelAndView onelaw(int lid){
        System.out.println("oneNew   id"+lid);
        ModelAndView mv = new ModelAndView();

        Law one=is.getOneLaw(lid);
        System.out.println(one.getLid());
        mv.addObject("oneNew", one);
        mv.setViewName("disclosure/onelaw");
        return mv;
    }

    @RequestMapping("/lawlist")
    public ModelAndView lawlist(WlkPage page, Law law){
        System.out.println("lawlist");
        ModelAndView mv = new ModelAndView();

        int rows=is.lawRow();
        page.setTotalRow(rows);
        System.out.println("总行数="+page.getTotalRow());

        //总页数 （数据总条数+每页数据行数-1）/每页数据行数
        page.setTotalPage((page.getTotalRow()+page.getPageCount()-1)/page.getPageCount());

        // 判断页数上限
        if (page.getCurrPage() == null || page.getCurrPage().equals("") || page.getCurrPage() < 1) {
            page.setCurrPage(1);
        }
        if (page.getCurrPage() > page.getTotalPage() && page.getTotalPage() != 0) {
            page.setCurrPage(page.getTotalPage());
        }
        //page.getCurrPage()-1)*page.getPageCount(),page.getPageCount()
        List<Law> lawlist=is.allLawList((page.getCurrPage()-1)*page.getPageCount(),page.getPageCount());

        for (int i=0;i<lawlist.size();i++){
            Law l=(Law)lawlist.get(i);
            System.out.println(l.getLid()+l.getTitle());
        }
        mv.addObject("list", lawlist);
        mv.addObject("page",page);
        mv.setViewName("disclosure/lawlist");
        return mv;
    }

    /*删除单个公告*/
    @RequestMapping("/del")
    public String del(int nid){
        System.out.println("del  "+nid);

        boolean bin=is.delOneNews(nid);
        return "redirect:/wlk/newsList2";
    }

    //后台的公告模板列表
    @RequestMapping("/newsList2")
    public ModelAndView newsList2(WlkPage page, NewsList lists){
        System.out.println("newsList2");
        ModelAndView mv = new ModelAndView();

        int rows=is.newsRow();
        page.setTotalRow(rows);
        System.out.println("总行数="+page.getTotalRow());

        //总页数 （数据总条数+每页数据行数-1）/每页数据行数
        page.setTotalPage((page.getTotalRow()+page.getPageCount()-1)/page.getPageCount());

        // 判断页数上限
        if (page.getCurrPage() == null || page.getCurrPage().equals("") || page.getCurrPage() < 1) {
            page.setCurrPage(1);
        }
        if (page.getCurrPage() > page.getTotalPage() && page.getTotalPage() != 0) {
            page.setCurrPage(page.getTotalPage());
        }
        //page.getCurrPage()-1)*page.getPageCount(),page.getPageCount()
        List<NewsList> list=is.allNewsListByPage((page.getCurrPage()-1)*page.getPageCount(),page.getPageCount());

        for(int i=0;i<list.size();i++){
            NewsList now=(NewsList)list.get(i);
            System.out.println(now);
        }
        mv.addObject("list", list);
        mv.addObject("page",page);
        mv.setViewName("wlk/jsps/backnewslist");
        return mv;
    }

    /*根据id来查询单个新闻公告*/
    @RequestMapping("/oneNew")
    public ModelAndView oneNew(int id){
        System.out.println("oneNew   id"+id);
        ModelAndView mv = new ModelAndView();

        NewsList one=is.getOneNew(id);
        System.out.println(one);
        mv.addObject("oneNew", one);
        mv.setViewName("wlk/jsps/onenew");
        return mv;
    }

    /*根据id来查询单个新闻公告*/
    @RequestMapping("/backoneNew")
    public ModelAndView backoneNew(int id){
        System.out.println("backoneNew   id"+id);
        ModelAndView mv = new ModelAndView();

        NewsList one=is.getOneNew(id);
        System.out.println(one);
        mv.addObject("oneNew", one);
        mv.setViewName("wlk/jsps/backone");
        return mv;
    }

    /*测试框架*/
    @RequestMapping("/test")
    public String test(){
        System.out.println("aaa");
        //List<NewsList> list=is.allNewsList();
        String demmo=is.demo();
        return "wlk/jsps/NewsList";
    }

    /*去关于我们*/
    @RequestMapping("/aboutOur")
    public String aboutOur(){
        System.out.println("aboutOur");

        return "wlk/jsps/aboutOur";
    }

    /*去关于我们*/
    @RequestMapping("/licheng")
    public String licheng(){
        System.out.println("aboutOur");

        return "wlk/jsps/aboutOur";
    }

    /*查询并跳转到新闻公司公告界面*/
    @RequestMapping("/toNewsList")
    public ModelAndView toNewsList(){
        System.out.println("toNewsList");
        ModelAndView mv = new ModelAndView();

        List<NewsList> list=is.allNewsList();

        for(int i=0;i<list.size();i++){
            NewsList now=(NewsList)list.get(i);
            System.out.println(now);
        }
        mv.addObject("list", list);
        mv.setViewName("wlk/jsps/NewsList");
        return mv;
    }

    /*//去后台新闻公告 编辑界面
    @RequestMapping("/toWangeditor")
    public String toWangeditor(){
        System.out.println("newseditor");
        return "wlk/jsps/news";
    }*/

    /*新闻公告编辑*/
    @RequestMapping("/eidtor")
    public String eidtor(NewsList list){
        Date date=new Date();
        SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String nowtime=sdf.format(date);

        list.setCdate(nowtime);
        list.setRdate(nowtime);

        list.setState(1);//统一为发布状态
        list.setNedid(1);//编辑人id
        System.out.println(list);
        int id=is.saveNewslist(list);

        return "redirect:/wlk/newsList2";
    }

    @RequestMapping("/toBackstage")
    public String toBackstage(){
        System.out.println("toBackstage");
        return "wlk/jsps/newsadd";
    }


}