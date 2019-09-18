package com.ht.controller;
import com.ht.bean.*;
import com.ht.service.Immfservice;
import org.apache.commons.io.FileUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * @ClassName:
 * @Description:
 * @author:
 * @version:
 * @Date: 2019年4月11日09:00:47
 */
@Controller
@RequestMapping("/t2")
public class MMFController {
    @Resource
    private Immfservice is;
    @RequestMapping("/test")
    public  String s (ModelMap map){
//         System.out.println("进入");
        List<rotation> l=is.selrotation();
//        System.out.print(l.size());
        map.put("rotation",l);
        map.put("l",l.size());
        List sl=is.getBusinessOutltts();
        map.put("sl",sl);//省
        List<product_induce> p=is.allpro();
//        System.out.println(p.size());
        map.put("p",p);
        List zbgjList = is.selezbgj(1);//查询为您推荐
        List  yxnlist = is.selezbgj(2);//优享牛
        List  scnlist = is.selezbgj(3);//生财牛

        List<scattered> scattere=is.selscattere();//散标
        map.put("zbgjList",zbgjList);
        map.put("yunlist",yxnlist);
        map.put("scnlist",scnlist);
        map.put("scattere",scattere);
        System.out.println(scattere);
        information infor=is.selallinfor();
        map.put("info",infor);

        try {
            String sdate=datejj(infor.getUptime());
            System.out.println(sdate);
            map.put("sdate",sdate);
        } catch (ParseException e) {
            e.printStackTrace();
            System.out.println("出错");
        }

        System.out.println(infor);
        return  "homepage/index";
    }
    @RequestMapping("/test2")
    public  String s2 (HttpServletRequest request){
//        System.out.println("进入修改");
        List<rotation> l=is.selrotation();
//        System.out.print(l.size());
        request.setAttribute("rotation",l);
        request.setAttribute("l",l.size());
        return  "homepage/login";
    }
    @RequestMapping("/test3")
    public  String s3 (HttpServletRequest request,Integer id){
//        System.out.println("修改图片"+id);
        if(id==null || id==0){
            request.setAttribute("l", 0);
            return "homepage/update";
        }else {
            List<rotation> l = is.selrotationbyid(id);
//            System.out.print(l.size());
            request.setAttribute("rotation", l);
            request.setAttribute("l", l.size());
            return "homepage/update";
        }
    }
    //单一文件上传
    @RequestMapping(value = "/upload",method = RequestMethod.POST)
    public String upload(MultipartFile file,rotation r, HttpServletRequest request) throws IOException {
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
            r.setRoute(newFileName);
            is.addorupdrotation(r);
            return "forward:/t2/test2";
        }
        return "forward:/t2/test2";
    }
    @ResponseBody
    @RequestMapping("/test5")
    public  String s5 (HttpServletRequest request){
//        System.out.println("网点");
        List l=is.getBusinessOutltts();
//        System.out.println(l.size());
//        for(int i=0;i<l.size();i++){
//            System.out.println(l.get(i));
//        }
       return "完成";
    }
    @RequestMapping("/fastJSON")
    @ResponseBody
    public Map fastJSON(String user){
//        System.out.println("前台Ajax传递过来的参数: "+user);

//        /响应 Ajax的结果
        List l=is.getBusinessOutlttscity(user);
        Map map = new HashMap();
        map.put("l",l);
        map.put("user",user);
//        System.out.print(map.toString());
        return map;
    }
    @RequestMapping("/ites1")
    public String introduce(HttpServletRequest request,int id){
//        System.out.println("backoneNew   id"+id);

        introduce one=is.getintroducebyid(id);
//        System.out.println(one);
        request.setAttribute("one",one);
        return "/kindedit/introduce";
    }
    @RequestMapping("/eidtor")
    public String eidtor(introduce list){
        Date date=new Date();
        SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String nowtime=sdf.format(date);

        list.setItime(nowtime);
//        System.out.println("修改"+list.getId()+"号");
        list.setState(1);//统一为发布状态
        list.setSid(1);//编辑人id
//        System.out.println(list);
        is.updintroduce(list);
        return "redirect:/t2/test";
    }
    /*根据id来查询单个*/
    @RequestMapping("/backoneNew")
    public ModelAndView backoneNew(int id){
//        System.out.println("backoneNew   id"+id);
        ModelAndView mv = new ModelAndView();

        introduce one=is.getintroducebyid(id);
//        System.out.println(one);
        String[] u={"1","1","1","2","3","3","3","5","5","1"};
        String[] s={"1","5","7","1","1","2","3","1","2","4"};
        mv.addObject("one", one);
        mv.addObject("ul",u[id-1]);
        mv.addObject("sl",s[id-1]);
        mv.setViewName("/disclosure/index");
        return mv;
    }

    public static String datejj(String d) throws ParseException {
        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String nowtime = sdf.format(date);
        Date date1 = new SimpleDateFormat("yyyy-mm-dd").parse(d);
        Date date2 = new SimpleDateFormat("yyyy-mm-dd").parse(nowtime);


        long l = date1.getTime()-date2.getTime()>0 ? date1.getTime()-date2.getTime():
                date2.getTime()-date1.getTime();

        System.out.println(l/1000+"秒");

        //日期相减得到相差的日期
        long day = (date1.getTime()-date2.getTime())/(24*60*60*1000)>0 ? (date1.getTime()-date2.getTime())/(24*60*60*1000):
                (date2.getTime()-date1.getTime())/(24*60*60*1000);

        System.out.println("相差的日期: " +day);
        return day+"";
    }
}
