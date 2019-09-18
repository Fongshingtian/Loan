package com.ht.controller;

import com.ht.bean.BusinessOutlets;
import com.ht.bean.OnlineBooking;
import com.ht.commons.GetCitys;
import com.ht.commons.SendMessageUtil;
import com.ht.service.IBusinessOutletsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;
import java.util.Random;

//营业网点
@Controller
public class BusinessOutletsController {

    @Autowired
    private IBusinessOutletsService ibos;

    /**
     *营业网点主页
     * @param model
     * @param currpage 当前页
     * @param bo 营业网点对象
     * @return
     */
    @RequestMapping("/outlets")
    public String test(Model model,Integer currpage,BusinessOutlets bo){
//        System.out.println("province="+bo.getProvince()+";city="+bo.getCity());
        Integer limit=5;
        Integer rows=ibos.getOutletsRows(bo);
        Integer totalpage=(rows-1)/limit+1;

        if(currpage==null||currpage<1){
            currpage=1;
        }

        if (currpage>totalpage) {
            currpage=totalpage;
        }

        Integer start=(currpage-1)*limit;//计算出起始位置

        model.addAttribute("list",ibos.getOutlets(bo,start,limit));
        model.addAttribute("province",ibos.getProvince());
        model.addAttribute("currpage",currpage);
        model.addAttribute("totalpage",totalpage);
        model.addAttribute("rows",rows);

        if(bo.getProvince()!=""||bo.getCity()!=""){
            model.addAttribute("outlets",bo);
        }

//        System.out.println(model.toString());
        return "outlets/view/outlets";
    }

    //获取贷款产品种类并去至在线预约界面
    @RequestMapping("/tobooking/{oid}")
    public String tobooking(@PathVariable("oid")int oid,Model model){
        model.addAttribute("outlet",ibos.getOutletById(oid));
        model.addAttribute("product",ibos.getProduct());
//        System.out.println(model);
        return "outlets/view/booking";
    }

    //添加在线预约数据并去至预约成功界面
    @RequestMapping("/booking")
    public String booking(OnlineBooking ob){
//        System.out.println(ob);
        ibos.addOnlineBooking(ob);
        return "outlets/view/success";
    }

    //生成手机验证码
    @RequestMapping(value = "/getCaptcha",method = RequestMethod.POST)
    @ResponseBody
    public int getCaptcha( HttpServletRequest request){
        String phone=request.getParameter("phone");
        Random rand=new Random();
        double d=rand.nextDouble()*1000000;
        int i=(int)d;
        System.out.println(i+";phone:"+phone);
        String []params={i+"","10"};
        String captcha= SendMessageUtil.sendMessage(phone+"",params);
        return i;
    }

    //后台查询列表进入
    @RequestMapping("/businessOutlets")
    public String test2(Model model,Integer currpage,BusinessOutlets bo){
//        System.out.println("province="+bo.getProvince()+";city="+bo.getCity());
        Integer limit=5;
        Integer rows=ibos.getOutletsRows(bo);
        Integer totalpage=(rows-1)/limit+1;

        if(currpage==null||currpage<1){
            currpage=1;
        }

        if (currpage>totalpage) {
            currpage=totalpage;
        }

        Integer start=(currpage-1)*limit;//计算出起始位置

        model.addAttribute("list",ibos.getOutlets(bo,start,limit));
        model.addAttribute("province",ibos.getProvince());
        model.addAttribute("currpage",currpage);
        model.addAttribute("totalpage",totalpage);
        model.addAttribute("rows",rows);
        Map p= GetCitys.getProvinces();
        model.addAttribute("province",p);

        if(bo.getProvince()!=""||bo.getCity()!=""){
            model.addAttribute("outlets",bo);
        }

//        System.out.println(model.toString());
        return "outlets/Background/BusinessOutlets";
    }

    //后台添加一个业网点
    @RequestMapping("/outletAdd")
    public String outletsAdd(BusinessOutlets bo){
        ibos.outletAdd(bo);
        return "redirect:/businessOutlets";
    }

    //后台修改一个业网点
    @RequestMapping("/outletUpd")
    public String outletsUpd(BusinessOutlets bo){
        ibos.outletUpd(bo);
        return "redirect:/businessOutlets";
    }

    //后台删除一个业网点
    @RequestMapping("/outletDel")
    public String outletDel(Integer id){
        ibos.outletDel(id);
        return "redirect:/businessOutlets";
    }

    @RequestMapping("/onlineBookings")
    //后台查询在线预约表
    public String onlineBooking(Model model,Integer currpage){
        Integer limit=5;
        Integer rows=ibos.getOnlineBookingRows();
        Integer totalpage=(rows-1)/limit+1;

        if(currpage==null||currpage<1){
            currpage=1;
        }

        if (currpage>totalpage) {
            currpage=totalpage;
        }

        Integer start=(currpage-1)*limit;//计算出起始位置

        model.addAttribute("list",ibos.getOnlineBooking(start,limit));
        model.addAttribute("currpage",currpage);
        model.addAttribute("totalpage",totalpage);
        model.addAttribute("rows",rows);

//        System.out.println(model.toString());
        return "outlets/Background/OnlineBooking";
    }
}
