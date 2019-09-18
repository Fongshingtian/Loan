package com.ht.controller;

import com.alibaba.fastjson.JSONObject;
import com.ht.bean.Loan;
import com.ht.bean.Mx;
import com.ht.bean.product_induce;
import com.ht.commons.SendMessageUtil;
import com.ht.service.Ht_LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("/back")
public class Ht_OnlineApplicationController {
    @Autowired
    private Ht_LoanService htloan;

    //访问后台
    @RequestMapping("/index")
    public String backgrounds(){
        return "background/index";
    }
    //访问main
    @RequestMapping("/main")
    public String main(){
        return "background/main";
    }

    //查询新申请的借贷
    @RequestMapping("/loan")
    public ModelAndView SelLoans(){
        ModelAndView md = new ModelAndView();
        List list = htloan.SelLoan(1);
        System.out.println(list.size());
        md.addObject("list",list);
        md.setViewName("background/HtOnlineApplication");
        return md;
    }

    //审批操作
    @RequestMapping("/sqcg")
    public  String spcz(@RequestParam("sq") String sq,@RequestParam("id") String id ,@RequestParam("tel")String tel,@RequestParam("name") String name,@RequestParam("status") Integer status){
        System.out.println(":进来了");
        System.out.println(sq+"  "+id+"  "+tel+"  "+status+"   "+name);
        if (status.equals(2)){
            htloan.dycsq(2,sq,Integer.parseInt(id));
            String msg[]=new String[2];
            msg[0]=name+"你的贷款申请失败失败请30天后重试原因是"+sq;
            msg[1]="60";
            SendMessageUtil.sendMessage(tel,msg);
            System.out.println("发送的手机号是"+tel);
        }
        if (status.equals(3)){
            htloan.dycsq(3,sq,Integer.parseInt(id));
            String msg[]=new String[2];
            msg[0]=name+"你的贷款申请成功请1小时内填写详细信息";
            msg[1]="60";
            SendMessageUtil.sendMessage(tel,msg);
            System.out.println("发送的手机号是"+tel);
        }

        return "forward:/back/loan";
    }
    //第二次审批
    @RequestMapping("/twoloan")
    public ModelAndView twoloans( ){
        List list = htloan.SelLoan(7);
        ModelAndView md = new ModelAndView();
        md.addObject("list",list);
        md.setViewName("background/HtTwoOnlineApplication");
        return md;
    }
    //第二次审批操作
    @RequestMapping("/spcztwo")
    public  String spcztwo(@RequestParam("sq") String sq,@RequestParam("id") String id ,@RequestParam("tel")String tel,@RequestParam("name") String name){
        System.out.println(":进来了");
        System.out.println(sq+"  "+id+"  "+tel+"   "+name);


        System.out.println(tel);
            htloan.dycsq(5,sq,Integer.parseInt(id));
            String msg[]=new String[2];
            msg[0]=name+"你的贷款申请失败请30天后重试";
            msg[1]=sq;
            SendMessageUtil.sendMessage(tel,msg);


        return "forward:/back/twoloan";
    }
    //第二次审批成功
    @RequestMapping("/spcztwoc")
    public  String spcztwoc(@RequestParam("sq") String sq,@RequestParam("id") String id ,@RequestParam("tel")String tel,@RequestParam("name") String name,@RequestParam("money") String money) {
        System.out.println(":进来了");
        System.out.println(sq + "  " + id + "  " + tel + "  " + money + "   " + name);

        htloan.twosq(4, sq, Integer.parseInt(id),money);
        Date date = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd :hh:mm:ss");

        String time= simpleDateFormat.format(date);
        Integer sjmoney=Integer.parseInt(money);
        String ll="";
         if (sjmoney<=10000){
             ll="16";
         }
        if (sjmoney>10000&&sjmoney<=50000){
            ll="13";
        }
        if (sjmoney>50000&&sjmoney<=100000){
            ll="12";
        }
        if (sjmoney>100000&&sjmoney<=150000){
            ll="10";
        }
        if (sjmoney>150000){
            ll="8";
        }
        System.out.println("利率是"+ll);
        htloan.uptemx(Integer.parseInt(id),time,ll);
        String msg[] = new String[2];
        msg[0] ="你的贷款申请已经通过2天之内到账请注意查收";
        msg[1] = "1";
        SendMessageUtil.sendMessage(tel, msg);
        return "forward:/back/twoloan";
    }
        //审批历史
    @RequestMapping("/shistory")
    public ModelAndView spls(){

        ModelAndView md = new ModelAndView();
        List list = htloan.Historysp();
        md.addObject("list",list);
        md.setViewName("background/HtOnlineApplicationHistory");
        return md;
    }

   //查看第一次审批详情
    @RequestMapping("/details/{id}")
    public ModelAndView SelloanByid(@PathVariable("id") Integer id){
        System.out.println(id+"进来了");
        ModelAndView md = new ModelAndView();

        Loan  loan =htloan.Selloanbyid(id);
        md.addObject("loan",loan);
        md.addObject("dd",2);
        md.setViewName("background/HtLoanDetails");
        System.out.println(loan);
        return md;
    }
    //查询申请类型
    @RequestMapping("/produ/{id}")
    @ResponseBody
    public JSONObject produ(@PathVariable("id") Integer id){
        product_induce prod = htloan.selproducts(id);
       String sname =prod.getPname();
        JSONObject json = new JSONObject();
        System.out.println(sname);
        json.put("sname",sname);
        return json;
    }
    //查询第二次申请详情
    @RequestMapping("/towdetails/{id}")
    public ModelAndView twoSelloanByid(@PathVariable("id") Integer id){
        System.out.println(id+"two进来了");
        ModelAndView md = new ModelAndView();

        Mx mx =htloan.SelTwoSq(id);
        System.out.println(mx);
        if(mx!=null){
            md.addObject("mx",mx);
            md.addObject("dd",3);
            md.setViewName("background/Htmx");
        }else{
            md.setViewName("background/NoHtMx");
        }

        return md;
    }
    //返回第一次审批
    @RequestMapping("/home/{dd}")
    public ModelAndView home(@PathVariable("dd") Integer dd){
        System.out.println(dd+"传回来的值");
        ModelAndView ss = new ModelAndView();
        if(dd==1){
            ss.setViewName("redirect:/back/shistory");
        }
        if(dd==2){
            ss.setViewName("redirect:/back/loan");
        }
        return ss;
    }
    //返回第二次审批
    @RequestMapping("/homes/{dd}")
    public ModelAndView homes(@PathVariable("dd")Integer dd){
        ModelAndView ss = new ModelAndView();
        System.out.println(dd+"传回来的值");
        if(dd==3){
            ss.setViewName("redirect:/back/twoloan");
        }
        if(dd==4){
            ss.setViewName( "redirect:/back/shistory");
        }
       return ss;
    }
    //审批历史查看详情
    @RequestMapping("/splsxq/{id}/{sta}")
    public ModelAndView splsxq(@PathVariable("id") Integer id,@PathVariable("sta")Integer sta){
        System.out.println(id+"two进来了"+ sta);
        ModelAndView md = new ModelAndView();

        // status 1.未处理 2 申请失败  3 申请成功,4第二次成功，5第二次失败。6银行卡收款,7第二次未处理
        if(sta==4||sta==5||sta==6){
            Mx mx =htloan.SelTwoSq(id);
            md.addObject("mx",mx);
            md.addObject("dd",4);
            md.setViewName("background/Htmx");
            System.out.println(mx);
        }
        if(sta==2||sta==3){
            Loan  loan =htloan.Selloanbyid(id);
            md.addObject("dd",1);
            md.addObject("loan",loan);
            md.setViewName("background/HtLoanDetails");
            System.out.println(loan);
        }

        return md;
    }
}
