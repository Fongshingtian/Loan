package com.ht.controller;

import com.alibaba.fastjson.JSONObject;
import com.ht.bean.Cs;
import com.ht.bean.Loan;
import com.ht.bean.Mx;
import com.ht.bean.product_induce;
import com.ht.commons.SendMessageUtil;
import com.ht.service.IProductInduceService;
import com.ht.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.sound.midi.Soundbank;
import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.text.NumberFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * @ClassName:
 * @Description:
 * @author:
 * @version:
 * @Date:
 */
@Controller
@RequestMapping("loan")
public  class OnlineApplicationController {


    @Autowired
    private LoanService loanService;
    @Autowired
    private IProductInduceService iProductInduceService;

    private static String  yzm="";
    private static String  yzm1="";
    private static String  yzm2="";
     /**
         * @Description: 用户提交申请
         *@param:
         * @throws:
         * @author : liu
         * @Date: 4.11
         */
     @RequestMapping("addloan")
     public String  addloan(Loan loan,Map map){
         List<Loan> loan1 = loanService.selesfz(loan.getIdCardNo());
         if(loan1.size()==0||loan1==null){
             Date date = new Date();
             SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd :hh:mm:ss");

             String time= simpleDateFormat.format(date);
             loan.setStatus(1);//未处理
             loan.setTime(time);
             System.out.println(yzm+loan.getCaptcha());
             //判断验证码
            if (yzm.equals("")||!loan.getCaptcha().equals(yzm)){
                map.put("isshow",1);
                map.put("msg","验证码错误！");
                List<product_induce> allpro = iProductInduceService.allpro();
                map.put("list",allpro);
                map.put("isshow",1);
                return "/loan/OnlineApplications";
            }

             loanService.addloan(loan);
       return "loan/addloancg";
        }else {

             Loan loan2 = loan1.get(0);
             // status 1.未处理 2 申请失败  3 申请成功,4第二次成功，5第二次失败。6银行卡收款,7第二次未处理

             if(loan2.getStatus()==2||loan2.getStatus()==5){
                 String data= loan2.getTime();
                 SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd :hh:mm:ss");

                 try {
                     Date date = simpleDateFormat.parse(data);

                     Calendar calendar = Calendar.getInstance();
                     calendar.setTime(date);
                     calendar.add(Calendar.DATE,30);


                    Date date1=   new Date();
                     Date time = calendar.getTime();
                     if (date1.getTime()>time.getTime()){
                         Date date2 = new Date();
                         SimpleDateFormat simpleDateFormat1 = new SimpleDateFormat("yyyy-MM-dd :hh:mm:ss");

                         String time1= simpleDateFormat1.format(date2);
                         loan.setStatus(1);//未处理
                         loan.setTime(time1);

                         //判断验证码
                         if (yzm.equals("")||!loan.getCaptcha().equals(yzm)){
                             map.put("isshow",1);
                             map.put("msg","验证码错误！");
                             List<product_induce> allpro = iProductInduceService.allpro();
                             map.put("list",allpro);
                             map.put("isshow",1);
                             return "/loan/OnlineApplications";
                         }
                         loanService.addloan(loan);
                         return "loan/addloancg";

                        }else{

                         map.put("isshow",1);
                         map.put("msg","你的上次申请失败请于30天后重试！");
                         List<product_induce> allpro = iProductInduceService.allpro();
                         map.put("list",allpro);
                         map.put("isshow",1);
                         return "/loan/OnlineApplications";
                     }


                 } catch (ParseException e) {
                     e.printStackTrace();
                 }

             }

             map.put("isshow",1);
             map.put("msg","你已经申请过了！请在进度查询查询进度");
             List<product_induce> allpro = iProductInduceService.allpro();
             map.put("list",allpro);
             map.put("isshow",1);
           return "/loan/OnlineApplications";
         }
     }
     //查询申请处理进度

     @RequestMapping("selejd")
      public String jdsele(Loan loan , Map map){
         List<Loan> loanList = loanService.seleloanjd(loan);
          Loan loan1=loanList.get(0);
         if (loan1==null){
               map.put("isshow",2);
               map.put("msgs","信息错误请重新输入查询！");
              List<product_induce> allpro = iProductInduceService.allpro();
              map.put("list",allpro);
               return "/loan/OnlineApplications";
          }else{
              // status 1.未处理 2 申请成功 3 申请失败

              if (yzm1.equals("")||!loan.getCaptcha().equals(yzm1)){
                  List<product_induce> allpro = iProductInduceService.allpro();
                  map.put("list",allpro);
                  map.put("isshow",1);
                  map.put("msgs","验证码错误！");
                  map.put("isshow",2);

                  return "/loan/OnlineApplications";
              }

               // 先息后本 按期还本息
             Mx mx = loanService.selelmxbuyid(loan1.getDid());
              String hkfs=    mx.getHkfs();
             Integer periodNum =Integer.parseInt(loan1.getPeriodNum());
             String date= mx.getQytime();
             if(hkfs.equals("一次性还本付息")){
                 SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd :hh:mm:ss");
                 try {
                     Date date1 = format.parse(date);
                     Calendar calendar = Calendar.getInstance();
                     calendar.setTime(date1);
                     calendar.add(Calendar.MONTH,periodNum+1);
                     Date time = calendar.getTime();
                     String format1 = format.format(time);
                     System.out.println("还款日期是"+format1);
                     Float  sjmoney=Float.parseFloat(loan1.getSjmoney());
                     Float  ll=Float.parseFloat(mx.getLl());
                     BigDecimal a= new BigDecimal(ll);
                     BigDecimal b = new BigDecimal(100);
                     BigDecimal c = new BigDecimal(12);
                     BigDecimal d = new BigDecimal(periodNum);
                     BigDecimal money = new BigDecimal(sjmoney);
                     BigDecimal yll = a.divide(b).divide(c,8,BigDecimal.ROUND_HALF_UP);
                     BigDecimal lx = yll.multiply(money).multiply(d);
                     NumberFormat nn = NumberFormat.getInstance();
                     nn.setMaximumFractionDigits(2);

                     BigDecimal zlj = lx.add(money);
                     System.out.println(zlj);
                     String ss=nn.format(zlj);
                     System.out.println("到期应付"+ss);

                     map.put("ll","您选择的是一次性还本付息，您的还款日期是<font color='red' size='4'>"+format1+"</font>到期应付<font color='red' size='4'>"+ss+"元</font>");
                 } catch (ParseException e) {
                     e.printStackTrace();
                 }


             }
             if(hkfs.equals("按期还本息")){
                 SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd :hh:mm:ss");
                 Date date1 = null;
                 try {
                     date1 = format.parse(date);
                 } catch (ParseException e) {
                     e.printStackTrace();
                 }
                  Calendar calendar = Calendar.getInstance();
                  calendar.setTime(date1);
                  calendar.add(Calendar.MONTH,2);
                  Date time = calendar.getTime();
                  String format1 = format.format(time);
                  System.out.println("还款日期是"+format1);

                 Calendar calendar1 = Calendar.getInstance();
                 calendar1.setTime(date1);
                 calendar1.add(Calendar.MONTH,periodNum+1);
                 Date time2 = calendar1.getTime();
                 String format2 = format.format(time2);

                 Float  sjmoney=Float.parseFloat(loan1.getSjmoney());
                 Float  ll=Float.parseFloat(mx.getLl());
                 BigDecimal a= new BigDecimal(ll);
                 BigDecimal b = new BigDecimal(100);
                 BigDecimal c = new BigDecimal(12);
                 BigDecimal d = new BigDecimal(periodNum);
                 BigDecimal money = new BigDecimal(sjmoney);
                 BigDecimal yll = a.divide(b).divide(c,8,BigDecimal.ROUND_HALF_UP);
                 BigDecimal lx = yll.multiply(money).multiply(d);
                 NumberFormat nn = NumberFormat.getInstance();
                 nn.setMaximumFractionDigits(2);

                 BigDecimal zlj = lx.add(money).divide(d,2,BigDecimal.ROUND_HALF_UP);

                 String ss=nn.format(zlj);
                 System.out.println(ss);
                 map.put("ll","您选择的是按期还本息您每月应还：<font color='red' size='4'>"+zlj+"元</font>还款日期从<font color='red' size='4'>"+format1+"至"+format2+"</font>");
                 System.out.println("每期期应付"+zlj);

             }

            map.put("mx" ,mx);
            map.put("status",loan1.getStatus());
            map.put("sm",loan1.getSm());
            map.put("did",loan1.getDid());
            map.put("sjmoney",loan1.getSjmoney());
            return "/loan/jdcx";
          }


      }

      //在线申请发送短信
     @RequestMapping("sendmsg")
     @ResponseBody
      public String sendunxin(String hm){

        Random random = new Random();
       int x=random.nextInt(9999-1000+1)+1000;//为变量赋随机值1000-9999

           yzm=x+"";
          String msg[]=new String[2];
           msg[0]=x+"";
            msg[1]="1";
         SendMessageUtil.sendMessage(hm,msg);
         System.out.println(hm+yzm);
         return  null;
      }


      //进度查询发送短信
    @RequestMapping("sendmsg2")
    @ResponseBody
    public String sendunxin2(String hm){

        Random random = new Random();
        int x=random.nextInt(9999-1000+1)+1000;//为变量赋随机值1000-9999

        yzm1=x+"";
        String msg[]=new String[2];
        msg[0]=x+"";
        msg[1]="1";
        System.out.println(hm+yzm1);
       // SendMessageUtil.sendMessage(hm,msg);

        return  null;
    }
    //查询额度发送短信
    @RequestMapping("sendmsg3")
    @ResponseBody
    public String sendunxin3(String hm){

        Random random = new Random();
        int x=random.nextInt(9999-1000+1)+1000;//为变量赋随机值1000-9999

        yzm2=x+"";
        String msg[]=new String[2];
        msg[0]=x+"";
        msg[1]="1";
        System.out.println("短信3"+hm+yzm2);
        SendMessageUtil.sendMessage(hm,msg);

        return  null;
    }
//进入在线申请
     @RequestMapping("zxsq")
     public String zxsq(Map map){

         List<product_induce> allpro = iProductInduceService.allpro();
         map.put("list",allpro);
         map.put("isshow",1);
         return "loan/OnlineApplications";
     }

     //申请资料明细
    @RequestMapping("mx")
    public String mx(String did,Map map){
        System.out.println(did);
        Loan loan = loanService.selebyid(did);
        map.put("pid",loan.getProductCode());
         map.put("did",loan.getDid());
        return "loan/mx";
    }
    //添加明细

    @RequestMapping("addmx")

    public String addmx(MultipartFile ls,MultipartFile card,MultipartFile gj,Mx mx,HttpServletRequest request){

        System.out.println(mx);
         if(!ls.getOriginalFilename().equals("")){
                String file=ls.getOriginalFilename();


                //
                String newpath= file.substring(file.lastIndexOf("."));

            System.out.println(newpath);

            String t1 = UUID.randomUUID().toString();

            newpath =t1+newpath;
            System.out.println("ss"+newpath);

            String path=request.getSession().getServletContext().getRealPath("\\"); //获取项目路劲

            System.out.println(path);
            Date d= new Date();
            SimpleDateFormat s=new SimpleDateFormat("yyyy-MM-dd");
            String ss= s.format(d);
            System.out.println(ss);
            File file1 = new File(path+"\\"+ss);
            if(!file1.exists()){
                file1.mkdir();
            }
            File file2=new File(file1,newpath);

            try {
                ls.transferTo(file2);
                mx.setYhls(ss+"//"+newpath);
            } catch (IOException e) {
                e.printStackTrace();
            }

        }
        if(!card.getOriginalFilename().equals("")){
            String file=card.getOriginalFilename();


            //
            String newpath= file.substring(file.lastIndexOf("."));

            System.out.println(newpath);

            String t1 = UUID.randomUUID().toString();

            newpath =t1+newpath;
            System.out.println("ss"+newpath);

            String path=request.getSession().getServletContext().getRealPath("\\"); //获取项目路劲

            System.out.println(path);
            Date d= new Date();
            SimpleDateFormat s=new SimpleDateFormat("yyyy-mm-dd");
            String ss= s.format(d);
            System.out.println(ss);
            File file1 = new File(path+"\\"+ss);
            if(!file1.exists()){
                file1.mkdir();
            }
            File file2=new File(file1,newpath);

            try {
                card.transferTo(file2);
                mx.setIdentitycard(ss+"//"+newpath);
            } catch (IOException e) {
                e.printStackTrace();
            }

        }
        if(!gj.getOriginalFilename().equals("")){
            String file=gj.getOriginalFilename();


            //
            String newpath= file.substring(file.lastIndexOf("."));

            System.out.println(newpath);

            String t1 = UUID.randomUUID().toString();

            newpath =t1+newpath;
            System.out.println("ss"+newpath);

            String path=request.getSession().getServletContext().getRealPath("\\"); //获取项目路劲

            System.out.println(path);
            Date d= new Date();
            SimpleDateFormat s=new SimpleDateFormat("yyyy-mm-dd");
            String ss= s.format(d);
            System.out.println(ss);
            File file1 = new File(path+"\\"+ss);
            if(!file1.exists()){
                file1.mkdir();
            }
            File file2=new File(file1,newpath);

            try {
                gj.transferTo(file2);
                mx.setGjjzm(ss+"//"+newpath);
            } catch (IOException e) {
                e.printStackTrace();
            }

        }
        loanService.updatestatus(7,mx.getMid());
        loanService.addMx(mx);

         return "loan/addloancg";
    }


    //查询借款额度
    @RequestMapping("seled")
    public String seleed(Cs cs,Map map){

        if (yzm2.equals("")||!cs.getCaptcha().equals(yzm2)){

            map.put("msg3","验证码错误！");
            map.put("isshow",3);
            List<product_induce> allpro = iProductInduceService.allpro();
            map.put("list",allpro);
            map.put("isshow",1);
            return "/loan/OnlineApplications";
        }
        Integer money=0;
        //1男 0女
         if(cs.getSex()==1){
          money+=10000;
         }
        if(cs.getSex()==0){
            money+=12000;
        }
        if (cs.getAge()>18&&cs.getAge()<25){
            money+=3000;

        }
        if (cs.getAge()>25&&cs.getAge()<40){
            money+=8000;

        }
        if (cs.getAge()>40&&cs.getAge()<60){
            money+=10000;

        }
        //0已婚 1未婚 2离异 3丧偶
        if(cs.getMarriageStatus()==1){
            money+=2000;

        }
        if(cs.getMarriageStatus()==0){
            money+=10000;

        }  if(cs.getMarriageStatus()==2){
            money+=3000;

        }  if(cs.getMarriageStatus()==3){
            money+=4000;

        }
        //保单类型 o 有 1无
        if(cs.getLifePolicy()==0){

            money+=2000;
        }
        //房产 0 租赁房屋 1有抵押商品房 2无抵押商品房 3非商品房
        if (cs.getHouseProperty()==1){

            money+=30000;
        }
        if (cs.getHouseProperty()==2){

            money+=20000;
        }
        if (cs.getHouseProperty()==3){

            money+=50000;
        }
        //社保  0其他公司代缴1本公司代缴2个人缴费3其他
        if (cs.getSocialSecurity()==0){

            money+=3000;

        }
        if (cs.getSocialSecurity()==1){

            money+=5000;

        }
        if (cs.getSocialSecurity()==2){

            money+=2000;

        }
        //发薪方式 0 银行代发 1现金 2银行代发 + 现金
       if(cs.getIncomeType()==0){
      money+=10000;
       }
        if(cs.getIncomeType()==1){
            money+=5000;
        }
        if(cs.getIncomeType()==2){
            money+=6000;
        }
        //单位信息 0国企1三资2私企3个体4政府部门5事业单位6其他
    if(cs.getNature()==0){
        money+=20000;
    }
        if(cs.getNature()==1){
            money+=10000;
        }
        if(cs.getNature()==3){
            money+=5000;
        }
        if(cs.getNature()==4){
            money+=30000;
        }
        if(cs.getNature()==5){
            money+=12000;
        }
        //是否持有信用卡 0有 1无

         if(cs.getIsCreditCard()==0){

             money+=50000;
             if(cs.getCreditCardAmount()>2000&&cs.getCreditCardAmount()<40000){
                 money+=2000;
             }
             if(cs.getCreditCardAmount()>40000){
                 money+=20000;
             }

         }
         if (cs.getAge()<18){
             money=0;
         }
         map.put("money",money);
         //
        return "loan/cecg";
    }
}
