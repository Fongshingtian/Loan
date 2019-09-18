package com.ht.controller;

import com.ht.bean.Pager;
import com.ht.bean.product_induce;
import com.ht.service.IProductInduceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Controller
@RequestMapping("/produce")

public class ProductController {
    @Autowired
    private IProductInduceService is;

    private MultipartFile tb;
    private product_induce product;
    private HttpRequest request;

    //查询贷款产品表
    @RequestMapping("/list")
    public ModelAndView list(Pager page,product_induce pro){
        System.out.println("查询进来了！");
        //总行数
       page.setTotalRow(is.seltotalRow());

       System.out.println("总行数"+is.seltotalRow());

        //总页数 （数据总条数+每页数据行数-1）/每页数据行数
        page.setTotalPage((page.getTotalRow()+page.getPageCount()-1)/page.getPageCount());

        // 判断页数上限
        if (page.getCurrPage() == null || page.getCurrPage().equals("") || page.getCurrPage() < 1) {
            page.setCurrPage(1);
        }
        if (page.getCurrPage() > page.getTotalPage() && page.getTotalPage() != 0) {
            page.setCurrPage(page.getTotalPage());
        }

        List<product_induce> plist=is.allproByPage(pro,(page.getCurrPage()-1)*page.getPageCount(),page.getPageCount());
        System.out.println("贷款产品："+plist.size());

        ModelAndView mv=new ModelAndView();
//        mv.addObject("pro","pro");
        mv.addObject("page",page);
        mv.addObject("plist",plist);
        mv.setViewName("backpage/productlist");

        return mv;
    }

    @RequestMapping("/toadd")
    public ModelAndView toadd(){
        ModelAndView mv=new ModelAndView();
        mv.setViewName("/backpage/productadd");
        return mv;
    }

    //添加贷款产品
    @RequestMapping("/add")
    public String add(MultipartFile tb, product_induce product, HttpServletRequest request) throws IOException {

        //添加贷款产品
        System.out.println("add进来了！");

        if(tb.getSize()!=0) {
            //获取上传时的文件名
            String filename = tb.getOriginalFilename();

            //获取项目路径  获取项目的根目录
            String path = request.getSession().getServletContext().getRealPath("\\");


            //创建文件夹（以当前日期为名字）
            String dirPath = path + "\\upload\\";
            System.out.println("文件夹名称" + dirPath);
            //创建新文件夹
            File dirfile = new File(dirPath);
            if (!dirfile.exists()) {//如果这个文件夹不存在，就创建新的文件夹
                dirfile.mkdir();
            }

            //重命名文件名（以防止文件被覆盖）
            filename = UUID.randomUUID().toString() + filename.substring(filename.indexOf("."));
            System.out.println("保存名字：" + filename);
            //最终保存的文件名称
            File saveFile = new File(dirfile, filename);
            tb.transferTo(saveFile);

            product.setPicture(filename);
            System.out.println(product);

        }
        //把文件名和其他参数保存到数据库中
        is.addprod(product);
        return "redirect:list";
    }

    //去修改  贷款产品页面 根据id查询贷款产品
    @RequestMapping("/toupd")
    public String toupd(HttpSession session,Integer pid){
        product_induce p=is.selproByid(pid);
        session.setAttribute("prod",p);
        return "/backpage/productupd";
    }

    //修改贷款产品
    @RequestMapping("/updproduct")
    public String updproduct(MultipartFile tb, product_induce prod, HttpServletRequest request, ModelMap model) throws IOException {
        System.out.println("修改进来了！！！");
        if(tb.getSize()!=0) {
            //获取上传时的文件名
            String filename = tb.getOriginalFilename();

            //获取项目路径  获取项目的根目录
            String path = request.getSession().getServletContext().getRealPath("\\");


            //创建文件夹（以当前日期为名字）
            String dirPath = path + "\\upload\\";
            System.out.println("文件夹名称" + dirPath);
            //创建新文件夹
            File dirfile = new File(dirPath);
            if (!dirfile.exists()) {//如果这个文件夹不存在，就创建新的文件夹
                dirfile.mkdir();
            }

            //重命名文件名（以防止文件被覆盖）
            filename = UUID.randomUUID().toString() + filename.substring(filename.indexOf("."));
            System.out.println("保存名字：" + filename);
            //最终保存的文件名称
            File saveFile = new File(dirfile, filename);
            tb.transferTo(saveFile);

            prod.setPicture(filename);
            System.out.println(prod);

        }
        is.updprod(prod);

        return "redirect:list";

    }

    @RequestMapping("/del")
    public String del(Integer pid){
        System.out.println("del进来了!");
        is.delbyid(pid);
        return "redirect:list";
    }

    /**
     * 前台页面
     *
     */
    @RequestMapping("selpro")
    public ModelAndView selproduce(){
        ModelAndView mv=new ModelAndView();
        List plist= is.allpro();
        System.out.println(plist);
        mv.addObject("plist",plist);
        mv.setViewName("products/product");
        return mv;
    }

    @RequestMapping("todetil")
    public ModelAndView toproductdetil(Integer pid){
        System.out.println("产品详情进来了");
        //根据id查找对象
        product_induce p=is.selproByid(pid);
        String ss[]=p.getJkqs().split("/");
        System.out.println("借款期数："+ss[0]+"-"+ss[ss.length-1]+"期");
        String jkqs=""+ss[0]+"-"+ss[ss.length-1]+"";
        //查找所有对象 id跟名称
        List plist=is.selprobysel();
        System.out.println("pid+pname="+plist);
        ModelAndView mv=new ModelAndView();
        mv.addObject("p",p);
        mv.addObject("plist",plist);
        mv.addObject("jkqs",jkqs);
        mv.setViewName("products/productdetil");

        return mv;
    }
    @RequestMapping("toquestion")
    //去到常见问题界面
    public String toquestion(){
        System.out.println("常见问题进来了");
        return "products/question1";
    }

}
