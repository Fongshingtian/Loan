package com.ht.controller;


import com.ht.bean.*;
import com.ht.service.Immfservice;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.security.cert.Certificate;
import java.util.List;
import java.util.UUID;

/**
 * @ClassName:  被揭发出来的事情
 * @Description:  这是信息披露
 * @author: 毛明峰
 * @version:
 * @Date: 2019-4-24 09:53:34
 */
@Controller
@RequestMapping("/dis")
public class disclosureController {
    @Resource
    private Immfservice is;
    //资质荣誉
    @RequestMapping("/honor")
    public String index(HttpServletRequest request){
        List<certificate> l=is.getAllcertificate();
//        System.out.print(l.size());
//        System.out.println(l);
        List<honor> i=is.getAllhonor();
//        System.out.print(i.size());
        request.setAttribute("l",l);
        request.setAttribute("li",((l.size()/3)+1)*262);
        request.setAttribute("i",i);
        request.setAttribute("ii",((i.size()/3)+1)*258);
        return "/disclosure/Honor";
    }
    @RequestMapping("/updhonor")
    public String upindex(HttpServletRequest request){
        List l=is.getAllcertificate();
//        System.out.print(l.size());
        List i=is.getAllhonor();
//        System.out.print(i.size());
        request.setAttribute("l",l);
        request.setAttribute("li",((l.size()/4)+1)*300);
        request.setAttribute("i",i);
        request.setAttribute("ii",((i.size()/4)+1)*300);
        return "/disclosure/updHonor";
    }
    //合作伙伴
    @RequestMapping("/collaborator")
    public String Collaborator(HttpServletRequest request){
        List l=is.getcooperationbycategory(0);
        System.out.print(l.size());
        List i=is.getcooperationbycategory(1);
        System.out.print(i.size());
        request.setAttribute("l",l);
        request.setAttribute("li",((l.size()/6)+1)*58);
        request.setAttribute("i",i);
        request.setAttribute("ii",((i.size()/6)+1)*58);
        return "/disclosure/Collaborator";
    }
    //合作伙伴
    @RequestMapping("/updcollaborator")
    public String updCollaborator(HttpServletRequest request){
        List l=is.getcooperationbycategory(0);
//        System.out.print(l.size());
        List i=is.getcooperationbycategory(1);
//        System.out.print(i.size());
        request.setAttribute("l",l);
        request.setAttribute("li",((l.size()/6)+1)*130);
        request.setAttribute("i",i);
        request.setAttribute("ii",((i.size()/6)+1)*130);
        return "/disclosure/updCollaborator";
    }
    //媒体快报
    @RequestMapping("/mtkb")
    public String mtkb(HttpServletRequest request,Integer pe){
        pagercount p=new pagercount();
        if(pe!=null) {
            if(isNumeric(pe+"")) {
                p.setPage(pe);
            }
        }
        int i=is.newlist();
        p.setTotal(i);
        if(p.getPage()==0){
            p.setPage(1);
            p.setPrevious(1);
        }else{
            p.setPrevious(p.getPage()-1);
        }
        p.setPageCount((i - 1) / p.getNumberpage() + 1);
        if(p.getPage()>=p.getPageCount()){
            p.setPrevious(p.getPage());
        }else{
            p.setPrevious(p.getPage()+1);
        }
        List<NewsList> n=is.getallnewslist((p.getPage()-1)*p.getNumberpage());
//        System.out.println(n.size());
        request.setAttribute("news",n);
        request.setAttribute("pages",p);
        request.setAttribute("p",p.getPageCount());
//        System.out.println(i);
        return "/disclosure/mtkb";
    }
    public static boolean isNumeric(String str){
        for (int i = 0; i < str.length(); i++) {
        if (!Character.isDigit(str.charAt(i))) {
            return false;
        }
    }
    return true;
    }
    @RequestMapping("/del")
    public String del(Integer id){
//        System.out.println("资质证书");
//        System.out.println(id);
        is.delcer(id);
        return "redirect:/dis/updhonor";
    }
    @RequestMapping("/dels")
    public String dels(Integer id){
//        System.out.println("在线荣誉");
//        System.out.println(id);
        is.delhon(id);
        return "redirect:/dis/updhonor";
    }
    @RequestMapping("/delcoll")
    public String delcoll(Integer id){
//        System.out.println("删除");
//        System.out.println(id);
        is.delcoll(id);
        return "redirect:/dis/updcollaborator";
    }
    @RequestMapping("/add")
    public String add(HttpServletRequest request){
//        System.out.println("在线荣誉");
        request.setAttribute("s","在线荣誉");
        request.setAttribute("l","1");
        return "/disclosure/add";
    }
    @RequestMapping("/addcoll")
    public String addcoll(HttpServletRequest request,Integer id){
        String s=null;
        if(id==1){
            s="合作媒体";
        }else{
            s="合作伙伴";
        }
        request.setAttribute("s",s);
        request.setAttribute("l",id);
        return "/disclosure/addcoll";
    }
    @RequestMapping("/adds")
    public String adds(HttpServletRequest request){
//        System.out.println("资质证书");
        request.setAttribute("s","资质证书");
        request.setAttribute("l","0");
        return "/disclosure/add";
    }
    //单一文件上传
    @RequestMapping(value = "/addupload",method = RequestMethod.POST)
    public String upload(Integer id,MultipartFile file,String title, HttpServletRequest request) throws IOException {
//        创建文件夹
//            生成文件名
//        System.out.println("添加图片");
        if(file.getSize()!=0){
//            System.out.println("传空");

//            System.out.println(file.getSize());
            String picName= UUID.randomUUID().toString();//根据此行生成文件名

            //截取后缀
            String oriName=file.getOriginalFilename();//获取上传时的文件名
            String extName=oriName.substring(oriName.indexOf("."));//截取最后一个 . 后的后缀

            String path=request.getSession().getServletContext().getRealPath("\\");//获取项目路径
            String dirName="\\upload\\";//新文件的名字
            String wjj=path+dirName;
            File dirFile=new File(wjj);
            if(!dirFile.exists()){//当文件夹不存在
                dirFile.mkdir();//创建文件夹
            }
            String newFileName=picName+extName;//上传文件新名称名称
            File targetFile=new File(wjj,newFileName);
            file.transferTo(targetFile);//保存文件
//            System.out.print("本地路径---->"+wjj+newFileName);

            String jsonStr="{\"code\":0,\"relativePath\":\""+(dirName+newFileName)+"\"}";
//            newFileName
//            System.out.println(newFileName);
            if(id==1){//在线荣誉
//                System.out.println("这是添加在线荣誉"+title);
                honor h=new honor();
                h.setTitle(title);
                h.setImages(newFileName);
                is.addhon(h);
            }else{//资质证书
//                System.out.println("这是添加资质证书"+title);
                certificate c=new certificate();
                c.setTitle(title);
                c.setImages(newFileName);
                is.addcer(c);
            }
            return "redirect:/dis/updhonor";
        }
        return "redirect:/dis/updhonor";
    }
    //单一文件上传
    @RequestMapping(value = "/adduploadcoll",method = RequestMethod.POST)
    public String uploadcoll(Integer id,MultipartFile file,String title, HttpServletRequest request) throws IOException {
//        创建文件夹
//            生成文件名
//        System.out.println("添加图片");
        if(file.getSize()!=0){
//            System.out.println("传空");

//            System.out.println(file.getSize());
            String picName= UUID.randomUUID().toString();//根据此行生成文件名

            //截取后缀
            String oriName=file.getOriginalFilename();//获取上传时的文件名
            String extName=oriName.substring(oriName.indexOf("."));//截取最后一个 . 后的后缀

            String path=request.getSession().getServletContext().getRealPath("\\");//获取项目路径
            String dirName="\\upload\\";//新文件的名字
            String wjj=path+dirName;
            File dirFile=new File(wjj);
            if(!dirFile.exists()){//当文件夹不存在
                dirFile.mkdir();//创建文件夹
            }
            String newFileName=picName+extName;//上传文件新名称名称
            File targetFile=new File(wjj,newFileName);
            file.transferTo(targetFile);//保存文件
//            System.out.print("本地路径---->"+wjj+newFileName);

            String jsonStr="{\"code\":0,\"relativePath\":\""+(dirName+newFileName)+"\"}";
//            newFileName
//            System.out.println(newFileName);
            cooperation c=new cooperation();
            c.setImages(newFileName);
            c.setRoute(title);
            c.setCategory(id);
            is.addcoll(c);
            return "redirect:/dis/updcollaborator";
        }
        return "redirect:/dis/updcollaborator";
    }
    @RequestMapping("/report")
    public String report(HttpServletRequest request){
        List l=is.selreport();
        request.setAttribute("l",l);
        request.setAttribute("ls",l.size());
        request.setAttribute("li",l.size()/3*260+260);
        return "/disclosure/report";
    }
    @RequestMapping("/updreport")
    public String updreport(HttpServletRequest request){
        List l=is.selreport();
        request.setAttribute("l",l);
        request.setAttribute("ls",l.size());
        request.setAttribute("li",l.size()/3*260+260);
        return "/disclosure/updreport";
    }
    @RequestMapping("/reportupd")
    public String reportupd(HttpServletRequest request){
        return "/disclosure/reportupd";
    }
    @RequestMapping(value = "/addreport",method = RequestMethod.POST)
    public String addreport(MultipartFile file, HttpServletRequest request,report re){
        //        创建文件夹
//            生成文件名
//        System.out.println("添加图片");
        if(file.getSize()!=0){
//            System.out.println("传空");

//            System.out.println(file.getSize());
            String picName= UUID.randomUUID().toString();//根据此行生成文件名

            //截取后缀
            String oriName=file.getOriginalFilename();//获取上传时的文件名
            String extName=oriName.substring(oriName.indexOf("."));//截取最后一个 . 后的后缀

            String path=request.getSession().getServletContext().getRealPath("\\");//获取项目路径
            String dirName="\\upload\\";//新文件的名字
            String wjj=path+dirName;
            File dirFile=new File(wjj);
            if(!dirFile.exists()){//当文件夹不存在
                dirFile.mkdir();//创建文件夹
            }
            String newFileName=picName+extName;//上传文件新名称名称
            File targetFile=new File(wjj,newFileName);
            try {
                file.transferTo(targetFile);//保存文件
            } catch (IOException e) {
                e.printStackTrace();
            }
            System.out.print("本地路径---->"+wjj+newFileName);

            String jsonStr="{\"code\":0,\"relativePath\":\""+(dirName+newFileName)+"\"}";
//            newFileName
            System.out.println(newFileName);
            re.setImages(newFileName);
//            System.out.println(re);
            is.addreport(re);
        }
        return "redirect:/dis/updreport";
    }
    @RequestMapping("/hg")
    public String hg(Integer id,HttpServletRequest request){
        report c= is.selreoorts(id);
        System.out.println(id);
        request.setAttribute("c",c);
        return "/disclosure/hgxq";
    }
}
