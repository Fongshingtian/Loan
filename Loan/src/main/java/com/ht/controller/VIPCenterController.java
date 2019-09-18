package com.ht.controller;

import com.ht.bean.*;
import com.ht.commons.GetCitys;
import com.ht.service.Accountservice;
import com.ht.service.ILoginService;
import com.ht.service.IVipCenterService;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.*;

@Controller
@RequestMapping("/vip")
public class VIPCenterController {

    @Autowired
    private Accountservice acc;

    @Resource
    private IVipCenterService ivcs;
    @Resource
    private ILoginService is;


    //会员首页
    @RequestMapping("/vip")
    public String VIPCenter(Model model){
        model.addAttribute("malls",ivcs.getPointMall(0,4));
        return "VIPCenter/vip";
    }

    //会员等级
    @RequestMapping("/level")
    public String VIPLevel(){
        return "VIPCenter/level";
    }

    //会员权益
    //梦里不知身是客
    @RequestMapping("/benefit")
    public String VIPBenefit(Model model,HttpSession session){
        SimpleDateFormat s=new SimpleDateFormat("yyyy-MM-dd");
        String date=s.format(new Date());
        String year=date.substring(0,4);
        myusers user=(myusers) session.getAttribute("user");
        if(user!=null){
            int i=ivcs.selSomethingGetCount("user_id="+user.getUid()+
                                       " and start<='"+date+"' and end>='"+date+"' " +
                                       "and source like '%会员专享红包'"
                                      ,"red_envelopes");
            List l=ivcs.selSomething("idcard",
                                  "real_name",
                                  "uid="+user.getUid());
            int j=ivcs.selSomethingGetCount("user_id="+user.getUid()+
                            " and start>='"+year+"-01-01' and end<='"+year+"-12-31' " +
                            "and source like '%会员生日好礼赠送红包'"
                    ,"red_envelopes");
            if(l!=null&&l.size()!=0){
                model.addAttribute("idCard",l);
            }
            model.addAttribute("redEnvelopes",i);
            model.addAttribute("birthRE",j);
        }
//        System.out.println(model);
        return "VIPCenter/benefit";
    }

    //领取每月红包
    //
    @RequestMapping("/getRedEnvelopes")
    public String  getRedEnvelopes(HttpSession session){
        myusers user=(myusers) session.getAttribute("user");
        if(user!=null){
            int amount=0;
            String level="";
            Integer value=user.getGrowthValue();
            if(value<100){
                amount=10;
                level="普通";
            }else if(value>=100&&value<1000){
                amount=20;
                level="白银";
            }else if(value>=1000&&value<3000){
                amount=60;
                level="黄金";
            }else if(value>=3000&&value<5000){
                amount=100;
                level="白金";
            }else if(value>=5000&&value<10000){
                amount=288;
                level="黑金";
            }else if(value>=10000){
                amount=488;
                level="钻石";
            }
            ivcs.insertSomething("red_envelopes",
                                      "null,"+user.getUid()+","+amount+",2000," +
                                              "(select DATE_ADD(curdate(),interval -day(curdate())+1 day))," +
                                              "(select last_day(curdate()))," +
                                              "'单笔≥2,000元持满6个月前不可退出','" +
                                              level+"会员专享红包',0");
        }
        return "redirect: /account/coupon";
    }

    //领取生日红包

    @RequestMapping("/getBirthRedEnvelopes")
    public String  getBirthRedEnvelopes(HttpSession session){
        SimpleDateFormat s=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String time=s.format(new Date());
        myusers user=(myusers) session.getAttribute("user");
        if(user!=null){
            int amount=0;
            int point=0;
            String level="";
            Integer value=user.getGrowthValue();
            if(value<100){
                amount=20;
                level="普通";
                point=50;
            }else if(value>=100&&value<1000){
                amount=50;
                level="白银";
                point=100;
            }else if(value>=1000&&value<3000){
                amount=100;
                level="黄金";
                point=200;
            }else if(value>=3000&&value<5000){
                amount=150;
                level="白金";
                point=300;
            }else if(value>=5000&&value<10000){
                amount=300;
                level="黑金";
                point=400;
            }else if(value>=10000){
                amount=500;
                level="钻石";
                point=500;
            }
            ivcs.insertSomething("red_envelopes",
                    "null,"+user.getUid()+","+amount+",2000," +
                            "(select curdate())," +
                            "(select DATE_ADD(curdate(),interval 30 day))," +
                            "'单笔≥2,000元持满6个月前不可退出','" +
                            level+"会员生日好礼赠送红包',0");

            //更新用户积分
        ivcs.updSomething("myusers",
                "point=point+"+point,
                "uid="+user.getUid());
        //刷新用户session
        user=acc.loginsel(user.getPhone(),user.getLoginpwd());
        session.setAttribute("user",user);
        //添加一条积分记录
        integral i=new integral();
        i.setJfz(point);
        i.setJystate("2");
        i.setJytype("生日好礼赠送积分");
        i.setTimes(time);
        i.setUid(user.getUid());
        ivcs.insertIntegral(i);
    }
        return "redirect: /account/coupon";
    }

    //成长任务
    @RequestMapping("/task")
    public String VIPTask(HttpSession session,Model model){
        myusers user=(myusers) session.getAttribute("user");
        if(user!=null){
            model.addAttribute("task",ivcs.getTaskByUser(user));
            model.addAttribute("growth",ivcs.getGrowthValueByUser(user.getUid(),0,1));
        }
        return "VIPCenter/task";
    }

    //积分商城
    @RequestMapping("/point/mall/{currpage}")
    public String VIPMall(Model model,@PathVariable("currpage") Integer currpage){
        Integer limit=10;
        Integer rows=ivcs.rows();
        Integer totalpage=(rows-1)/limit+1;

        if(currpage==null||currpage<1){
            currpage=1;
        }

        if (currpage>totalpage) {
            currpage=totalpage;
        }

        Integer start=(currpage-1)*limit;//计算出起始位置

        model.addAttribute("currpage",currpage);
        model.addAttribute("totalpage",totalpage);
        model.addAttribute("rows",rows);

        model.addAttribute("list",ivcs.getPointMall(start,limit));
//        System.out.println(model);、
        return "VIPCenter/mall";
    }

    //积分商城——商品详情
    @RequestMapping("/point/mall/detail/{id}")
    public String toMallDetail(Model model,@PathVariable()Integer id,HttpSession session){
        myusers user=(myusers) session.getAttribute("user");
        Integer limiting=1;
        if(user!=null){
            limiting=ivcs.validateUserLimit(user.getUid(),id);
        }
        model.addAttribute("limiting",limiting);
        model.addAttribute("mall", ivcs.getPointMallById(id));
//        System.out.println(model);
        return "VIPCenter/mall_detail";
    }

    //获取成长经历列表
    @RequestMapping("/task/growth/list/{currpage}")
    @ResponseBody
    public Map getGrowthValue(@PathVariable("currpage")Integer currpage,HttpSession session){
        myusers user=(myusers) session.getAttribute("user");
        Integer limit=10;
        Integer rows=ivcs.getGrowthValueByUserRows(user.getUid());
        Integer totalpage=(rows-1)/limit+1;

        if(currpage==null||currpage<1){
            currpage=1;
        }

        if (currpage>totalpage) {
            currpage=totalpage;
        }

        Integer start=(currpage-1)*limit;//计算出起始位置

        Map map=new HashMap();
        map.put("currpage",currpage);
        map.put("totalpage",totalpage);
        map.put("rows",rows);
        map.put("list",ivcs.getGrowthValueByUser(user.getUid(),start,limit));
        return map;
    }

    //去兑换商品详细页面
    @RequestMapping("/point/mall/exchange/{id}")
    public String mallExchange(Model model,@PathVariable("id")int id){
        model.addAttribute("mall", ivcs.getPointMallById(id));
        model.addAttribute("province",GetCitys.getProvinces());
        return "VIPCenter/mall_exchange";
    }

    //ajax请求获得城市
    @RequestMapping("/getCity/{province}")
    @ResponseBody
    public Map getCity(@PathVariable("province")String province){
        return (Map) GetCitys.getProvinces().get(province);
    }

    //兑换商品成功添加数据并去至提示成功页面
    @RequestMapping("/exchange")
    public String doExchange(MallExchange e,HttpSession session,Integer point){  SimpleDateFormat s=new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        String time=s.format(new Date());
        e.setTime(time);
        //添加一条兑换记录
        ivcs.exchangeAdd(e);
        //更新用户积分
        ivcs.updUserPoint(e.getUserId(),e.getMallId());
        //刷新用户session
        myusers user=(myusers) session.getAttribute("user");
         user=acc.loginsel(user.getPhone(),user.getLoginpwd());
        ivcs.updMallStock(e.getMallId());
        session.setAttribute("user",user);
        //添加一条积分记录
        integral i=new integral();
        i.setJfz(point);
        i.setJystate("1");
        i.setJytype("商城兑换");
        i.setTimes(time);
        i.setUid(e.getUserId());
        ivcs.insertIntegral(i);
        return "VIPCenter/exchange_success";
    }

    @RequestMapping("/BackStage/{tableName}/{currpage}")
    public String test(@PathVariable("tableName")String tableName,
                       @PathVariable("currpage")Integer currpage,Model model){
        Integer limit=5;
        Integer rows=ivcs.getDataListRows(tableName);
        Integer totalpage=(rows-1)/limit+1;

        if(currpage==null||currpage<1){
            currpage=1;
        }

        if (currpage>totalpage) {
            currpage=totalpage;
        }

        Integer start=(currpage-1)*limit;//计算出起始位置

        model.addAttribute("list",ivcs.getDataList(tableName,start,limit));
        model.addAttribute("currpage",currpage);
        model.addAttribute("totalpage",totalpage);
        model.addAttribute("rows",rows);
        return "VIPCenter/BackStage/"+tableName+"s";
    }

   //去添加
    @RequestMapping("/BackStage/toaddpointmall")
    public String addpointmall(){
        return "/VIPCenter/BackStage/point_malls_addorupd";
    }

    //去修改
    @RequestMapping("/BackStage/toupdpointmall")
    public String toupd(Model model,Integer id){
        PointMall mall=ivcs.getPointMallById(id);
        model.addAttribute("mall",mall);
        return "/VIPCenter/BackStage/point_malls_addorupd";
    }

    /***
     * 添加商品
     * @param mall
     * @param file
     * @param model
     * @return
     */
    @RequestMapping("/BackStage/pointMall")
    public String pointMallAdd(MultipartFile file,PointMall mall,HttpServletRequest request, Model model) throws IOException {

        if(file.getSize()!=0) {
            //获取上传时的文件名
            String filename = file.getOriginalFilename();

            //获取项目路径  获取项目的根目录
            String path = request.getSession().getServletContext().getRealPath("\\");


            //创建文件夹（以当前日期为名字）
            String dirPath = path + "\\upload\\";
//            System.out.println("文件夹名称" + dirPath);
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
            file.transferTo(saveFile);

            mall.setImage(filename);
//            System.out.println(mall);

        }

        if(mall.getId()!=null){
//            System.out.println("upd进来了");
            ivcs.pointMallUpd(mall);
            System.out.println(mall);
        }else {
//            System.out.println("add进来了");
            ivcs.pointMallAdd(mall);
        }

        return "redirect:/vip/BackStage/point_mall/1";
    }



    //下载文件
    public String downLoad(MultipartFile file) throws Exception{
        //生成一个新的文件名
        String newName= UUID.randomUUID().toString();
        //获取原文件名
        String oriName=file.getOriginalFilename();
        //截取文件的扩展名
        String extName=oriName.substring(oriName.lastIndexOf("."));

        //获取根目录
        String realPath="G:/images/face/";

        //如果上传目录为/static/images/face/，则可以如下获取：
        File path = new File(realPath);
        if(!path.exists()){
            path.mkdirs();
        }
        System.out.println("upload url:"+path.getAbsolutePath());
        //在开发测试模式时，得到的地址为：{项目跟目录}/target/static/images/upload/
        //在打包成jar正式发布时，得到的地址为：{发布jar包目录}/static/images/upload/

        //拼接成完整的新文件名
        newName+=extName;
        File target=new File(realPath,newName);
        //下载..
        FileUtils.copyInputStreamToFile(file.getInputStream(), target);
//        file.transferTo(target);
        System.out.println("保存文件");
        return newName;
    }
}
