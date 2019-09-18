package com.ht.controller;

import com.alibaba.fastjson.JSONObject;
import com.ht.bean.*;
import com.ht.commons.GetGrowthValueAPoint2;
import com.ht.commons.OperateRedEnvelopes;
import com.ht.service.IInvestServic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import javax.xml.crypto.Data;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @ClassName:
 * @Description:
 * @author: lsx
 * @version:
 * @Date: 2019 /4 /21
 */
@Controller
@RequestMapping("invest")
public class InvestController {
 @Autowired
 private IInvestServic iInvestServic;
 @Autowired
 private OperateRedEnvelopes openred;

    //去投标界面
    @RequestMapping("toinvest")
    public String toinvest(Map map ){

        List zbgjList = iInvestServic.selezbgj(1);//查询为您推荐
        List  yxnlist = iInvestServic.selezbgj(2);//优享牛
/*
        List  scnlist = iInvestServic.selezbgj(3);//生财牛
*/
        map.put("zbgjList",zbgjList);
        map.put("yunlist",yxnlist);
//        map.put("scnlist",scnlist);
        System.out.println(zbgjList);
        System.out.println(yxnlist);
//        System.out.println(scnlist);
       return "invest/Biddingtool";
     }

     //去新手投标详情（期数详情界面）
    @RequestMapping("/selinvestbyid/{id}/{per}")
    public String selinvestbyid(@PathVariable("id") Integer id ,@PathVariable("per")String per, Map map,HttpSession session ){
        myusers user  = (myusers) session.getAttribute("user");
        if(user!=null){
            System.out.println(user.getUid()+"是多少");
            accounts acc = iInvestServic.selByuid(user.getUid());
            map.put("acc",acc);
        }
        System.out.println(id);
        Map ma = iInvestServic.selezbgjson(id);//期数详情
           Integer s = (Integer) ma.get("zid");
        System.out.println(s+"s");
        List list = iInvestServic.selezbgjs(s);//查询一个标下的所有期数
        map.put("all",ma);
        map.put("list",list);
        Calendar calendar = Calendar.getInstance();

//        截取日期
        Pattern p = Pattern.compile("\\d+");
        Matcher m = p.matcher(per);
        m.find();
        int pers = Integer.parseInt(m.group());
        System.out.println(pers);

        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");//设置日期格式
        Date date = new Date();
        calendar.setTime(date);
        calendar.add(Calendar.DATE,1);
        String endtime="";
        String twotime = df.format(calendar.getTime());
        if(pers==7) {
            calendar.add(Calendar.DATE, 7);
            endtime = df.format(calendar.getTime());
        }else if(pers==1){
            calendar.add(Calendar.MONTH, 1);
            endtime = df.format(calendar.getTime());
        }else if(pers==3){
            calendar.add(Calendar.MONTH,3);
            endtime = df.format(calendar.getTime());
        }else if(pers==6){
            calendar.add(Calendar.MONTH,6);
            endtime = df.format(calendar.getTime());
        }else if(pers==12){
            calendar.add(Calendar.MONTH,12);
            endtime = df.format(calendar.getTime());
        }else if(pers==24){
            calendar.add(Calendar.MONTH,24);
            endtime = df.format(calendar.getTime());
        }
        System.out.println("时间ss+"+df.format(new Date())+" "+twotime+" "+endtime);
        map.put("times",df.format(new Date()));
        map.put("begintime",twotime);
        map.put("endtime",endtime);
        System.out.println(ma);
        return "invest/Biddingdetails";
    }
    //去投标（期数详情界面）
    @RequestMapping("/selinvestbyidy/{id}/{per}")
    public String selinvestbyidy(@PathVariable("id") Integer id ,@PathVariable("per")String per, Map map,HttpSession session ){
        myusers user  = (myusers) session.getAttribute("user");
        if(user!=null){
            System.out.println(user.getUid()+"是多少");
            accounts acc = iInvestServic.selByuid(user.getUid());
            map.put("acc",acc);
        }
        System.out.println(id);
        Map ma = iInvestServic.selezbgjson(id);//期数详情
        Integer s = (Integer) ma.get("zid");
        System.out.println(s+"s");
        List list = iInvestServic.selezbgjs(s);//查询一个标下的所有期数
        map.put("all",ma);
        map.put("list",list);
        Calendar calendar = Calendar.getInstance();

//        截取日期
        Pattern p = Pattern.compile("\\d+");
        Matcher m = p.matcher(per);
        m.find();
        int pers = Integer.parseInt(m.group());
        System.out.println(pers);

        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");//设置日期格式
        Date date = new Date();
        calendar.setTime(date);
        calendar.add(Calendar.DATE,1);
        String endtime="";
        String twotime = df.format(calendar.getTime());
        if(pers==7) {
            calendar.add(Calendar.DATE, 7);
            endtime = df.format(calendar.getTime());
        }else if(pers==1){
            calendar.add(Calendar.MONTH, 1);
            endtime = df.format(calendar.getTime());
        }else if(pers==3){
            calendar.add(Calendar.MONTH,3);
            endtime = df.format(calendar.getTime());
        }else if(pers==6){
            calendar.add(Calendar.MONTH,6);
            endtime = df.format(calendar.getTime());
        }else if(pers==12){
            calendar.add(Calendar.MONTH,12);
            endtime = df.format(calendar.getTime());
        }else if(pers==24){
            calendar.add(Calendar.MONTH,24);
            endtime = df.format(calendar.getTime());
        }
        System.out.println("时间ss+"+df.format(new Date())+" "+twotime+" "+endtime);
        map.put("times",df.format(new Date()));
        map.put("begintime",twotime);
        map.put("endtime",endtime);
        System.out.println(ma);
        return "invest/Biddingdetaily";
    }

    //json加载期数详情
    @RequestMapping("/jsbidding")
    @ResponseBody
    public JSONObject jsbidding(Integer sid ,Integer per){
        System.out.println(sid+"返回值"+per);
        Map ma = iInvestServic.selezbgjson(sid);//期数详情
        System.out.println(ma);
        Calendar calendar = Calendar.getInstance();

        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");//设置日期格式
        Date date = new Date();
        calendar.setTime(date);
            calendar.add(Calendar.DATE,1);
            String endtime="";
            String twotime = df.format(calendar.getTime());
        if(per==7) {
            calendar.add(Calendar.DATE, 7);
             endtime = df.format(calendar.getTime());
        }else if(per==1){
            calendar.add(Calendar.MONTH, 1);
            endtime = df.format(calendar.getTime());
        }else if(per==3){
            calendar.add(Calendar.MONTH,3);
            endtime = df.format(calendar.getTime());
        }else if(per==6){
            calendar.add(Calendar.MONTH,6);
            endtime = df.format(calendar.getTime());
        }else if(per==12){
            calendar.add(Calendar.MONTH,12);
            endtime = df.format(calendar.getTime());
        }else if(per==24){
            calendar.add(Calendar.MONTH,24);
            endtime = df.format(calendar.getTime());
        }

        System.out.println("时间+"+df.format(new Date())+" "+twotime+" "+endtime);
        JSONObject json = new JSONObject();
        json.put("ms",ma);
        json.put("times",df.format(new Date()));
        json.put("begintime",twotime);
        json.put("endtime",endtime);
        return json;
    }
    //计算收益
    @RequestMapping("/selinterest")
    @ResponseBody
    public JSONObject selinterest(String interest){
        System.out.println(interest + "5.00%");
        JSONObject js = new JSONObject();
        return js;
    }
    @RequestMapping("buy")
    public ModelAndView buy (String periodd , Integer months, String interest , String password , Integer suid, Float realEarnings , Integer buyAmount, Integer sids ,Integer hongbao,Integer hongbaoid ,HttpSession session){
        ModelAndView mv = new ModelAndView();
        System.out.println("had狗哎"+periodd+"  "+buyAmount+" "+password+" "+suid+" "+realEarnings+" "+interest+"  "+months+" "+ sids+"  "+hongbao+" "+hongbaoid);
        myusers msy = (myusers) session.getAttribute("user");
        String uname = msy.getUname();
        //验证密码真确
        real_name reals = iInvestServic.buyByuid(suid,password);
        if(months==7){
                months=0;
        }
        if(reals!=null){

            //修改红包状态
            openred.updRedEnvelopesStatu(hongbaoid);
            //查询账户余额
                accounts acc = iInvestServic.selByuid(suid);
            //总余额
            float countmoney=acc.getCountmoney()-buyAmount;
            //代收本金
            float countbj = acc.getCountbj()+buyAmount-hongbao;
            //代收利息
            float countlx =acc.getCountlx()+realEarnings;
            //冻结资金
            float djmoney =acc.getDjmoney()+buyAmount-hongbao;
                //更改账户余额            uid, countmoney, countbj,countlx,djmoney, countsy,        kyye
                iInvestServic.updcounts(suid,countmoney,countbj,countlx, djmoney,acc.getCountsy(),acc.getKyye()-buyAmount);
            System.out.println(acc);
          zbgjson zs =iInvestServic.selzbgjsons(sids);
            int is = (int)zs.getAmount()-(int)buyAmount;
            System.out.println(is);
            //子标减去已购买的金额
           iInvestServic.updZbjgson(sids, is);
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd ");//设置日期格式
            SimpleDateFormat timess = new SimpleDateFormat("yyyy-MM-dd mm:DD:ss");//设置日期格式
            System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
            //添加资金流水记入
            iInvestServic.Instrecord(suid,timess.format(new Date())+"","1",buyAmount,acc.getKyye()-buyAmount,"投标");
            //添加投标记入
            iInvestServic.updls(sids,suid,uname,buyAmount+"",df.format(new Date())+"");
            GetGrowthValueAPoint2.getGrowValueAPointByBid(buyAmount,months,session);
            Integer stime=0;

            //添加我的投标记入
            Calendar calendar = Calendar.getInstance();

            Date date = new Date();
            calendar.setTime(date);

            calendar.add(Calendar.DATE,1);
           String  begintime = df.format(calendar.getTime());
            if(months==7){
                calendar.add(Calendar.DATE,7);
            }else if(months==1){
                calendar.add(Calendar.MONTH,1);
            }else if(months==3){
                calendar.add(Calendar.MONTH,3);
            }else if(months==6){
                calendar.add(Calendar.MONTH,6);
            }else if(months==12){
                calendar.add(Calendar.MONTH,12);
            }else if(months==24){
                calendar.add(Calendar.MONTH,24);
            }


            String endtimes = df.format(calendar.getTime());
            System.out.println(endtimes);

            //添加我的投标记入
            iInvestServic.instmyt(sids,suid,realEarnings+"",interest,buyAmount+"",periodd,buyAmount+"",begintime+"",endtimes,1);
            mv.addObject("msg","购买成功");

        }else{
            mv.addObject("msg","支付密码错误");
        }
        mv.setViewName("invest/BIddSuccess");
        return mv;
    }

    //查询投标记入
    @RequestMapping("/sells")
    @ResponseBody
    public JSONObject toubioals(Integer zid){
        System.out.println("zid"+zid);
        List list = iInvestServic.Sells(zid);
        JSONObject json = new JSONObject();
        json.put("list",list);
        return json;
    }

    //查询是否为新手用户
    @RequestMapping("/selmyuser")
    @ResponseBody
    public JSONObject selmyuser(Integer uid){
        System.out.println(uid +"sdafaf");
       Integer i = iInvestServic.selMytbBuUid(uid);
        System.out.println(i+"次数");
       String msg="";
       if(i>=3){
        msg="1";//不是新手
       }else{
        msg="2";//新手
       }
        JSONObject js = new JSONObject();

       js.put("msg",msg);
           return js;
    }

    //查询时间到了的利息
    public void sellx(){
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");//设置日期格式
        String newtime = df.format(new Date());

//        System.out.println(newtime);// new Date()为获取当前系统时间
        Calendar calendar = Calendar.getInstance();

        //获取当前系统时间
        Date newtimes = null;
        try {
            newtimes = df.parse(newtime);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        List list = iInvestServic.selmytbs();
        for (int i=0; i<list.size();i++){
            mytb mtb = (mytb)list.get(i);
             myusers mys = iInvestServic.selmyusers(mtb.getUid());
//            System.out.println("投标时间"+mtb.getEndtime().trim());
            if(newtime.equals(mtb.getEndtime().trim())){
                    //更改mytb的状态
                    iInvestServic.updmytb(mtb.getBid(),2);
                try {
                   Date endtime = df.parse(mtb.getBegintime());
                   calendar.setTime(endtime);

                   calendar.add(Calendar.MONTH,3);
                   endtime=calendar.getTime();
                    Date begintime = df.parse(mys.getZcdata());
//                    System.out.println("对比时间"+begintime.getTime()+"  "+endtime.getTime());
                   float jlmoney =Float.parseFloat(mtb.getInterest());
                   //对比购买投标的事件是否比注册时间的三个月长（给推荐人加好友奖励）
                   if(begintime.getTime()<endtime.getTime()){
//                       System.out.println(mtb.getBegintime()+" "+jlmoney*0.1f+"  "+mys.getUid()+" "+mtb.getEndtime());
                       //好友奖励表插入数据
                       iInvestServic.instfriends(mtb.getBegintime(),jlmoney*0.01f,mys.getUid()+"","1",mtb.getEndtime(),mys.getTjrcode());
                   }
                } catch (ParseException e) {
                    e.printStackTrace();
                }
                    //查看账户余额
                accounts as =iInvestServic.selByuid(mys.getUid());
//                System.out.println("账户"+as);
                //总资产
                float acount = as.getCountmoney()+Float.parseFloat(mtb.getMoney())+Float.parseFloat(mtb.getInterest());
                //待收本金
                float dsbj = as.getCountbj()-Float.parseFloat(mtb.getMoney());
                //待收利息
                float dslx=as.getCountlx()-Float.parseFloat(mtb.getInterest());
                //冻结资金
                float djzj =as.getDjmoney()-Float.parseFloat(mtb.getMoney());
                //累计收益
               float ljsy =  as.getCountsy()+Float.parseFloat(mtb.getInterest());
               //可用余额
                float kyye = as.getKyye()+Float.parseFloat(mtb.getMoney())+Float.parseFloat(mtb.getInterest());
//                System.out.println("account表数据"+mys.getUid() +"  "+acount +"  "+dsbj +"  "+dslx+" "+ljsy+"   "+as.getKyye());
                iInvestServic.updcounts(mys.getUid(),acount,dsbj,dslx,djzj,ljsy,kyye);
                    //插入资金流水表记录
//                System.out.println(mys.getUid()+" "+newtime+" "+1+" "+Float.parseFloat(mtb.getMoney())+" "+100f+" 投资结束");
                iInvestServic.Instrecord(mys.getUid(),newtime,"1",Float.parseFloat(mtb.getMoney()),kyye,"投资结束");
//                System.out.println("更改了"+mtb);
            }

//            System.out.println(mys);
//            System.out.println(mtb);
            //查询好友奖励
            List  friend = iInvestServic.selfriendgets();
            for (int k=0 ;k<friend.size() ;k++){

                friendget frind = (friendget)friend.get(k);
//                System.out.println(frind);
                try {
                    //注册时间
                    Date fendtime = df.parse(frind.getSendtime().trim());

//                    好友可获收益时间
//                    System.out.println(fendtime.getTime()+"好友邀请结束时间"+newtimes.getTime());
                    if(fendtime.getTime()== newtimes.getTime()){

                        //查询出需要加钱的用户
                        myusers myus = iInvestServic.selmys(frind.getYqcode());
                        if(myus!=null){
                        //查看账户余额
                        accounts as =iInvestServic.selByuid(myus.getUid());

                           //总资金
                           float zmoney = as.getCountmoney()+frind.getJlmoney();

//                           System.out.println(myus.getUid()+"上家id"+frind.getYqcode());
//                           System.out.println("sfsa" +myus);
                           //给账户表加钱
                           iInvestServic.updyqacc(myus.getUid(),zmoney,as.getKyye()+frind.getJlmoney(),as.getInvitedsy()+frind.getJlmoney(),as.getCountsy()+frind.getJlmoney(),as.getQtsy());
                           //修改好友奖励表状态
                       }
                        iInvestServic.updfrinendgets(frind.getFid(),"2");
                    }
                } catch (ParseException e) {
                    e.printStackTrace();
                }

            }
        }
        List hongbao = iInvestServic.SelHongBao();
        for (int j =0;j<hongbao.size();j++){
            RedEnvelopes redbao = (RedEnvelopes)hongbao.get(j);
            System.out.println("红包"+redbao);
            try {
                Date redend = df.parse(redbao.getEnd().trim());
                System.out.println("红包对比"+redend.getTime()+" "+newtimes.getTime()+"  "+(redend.getTime()>newtimes.getTime()));
                if(redend.getTime()>newtimes.getTime()){
                    //查看账户余额
                    System.out.println(redbao.getUserId());
                    accounts as =iInvestServic.selByuid(redbao.getUserId());

                    //总资产
                    float amount =as.getCountmoney()+redbao.getAmount();
                    //其他收益
                    float qtsy = as.getQtsy()+redbao.getAmount();
                    //累计收益
                    float countsy = as.getCountsy()+redbao.getAmount();
                    //可用余额
                    float kyye =as.getKyye()+redbao.getAmount();
                    //给账户表加钱
                    iInvestServic.updyqacc(as.getUid(),amount,kyye,as.getInvitedsy(),countsy,qtsy);
                    //修改红包状态
                    iInvestServic.UpdRed(redbao.getId());
                }
            } catch (ParseException e) {
                e.printStackTrace();
            }

        }
    }

    //查询投标项目表
    @RequestMapping("/SelLoans")
    @ResponseBody
    public JSONObject SelLoan(Integer start){
        Integer currpage= iInvestServic.SelLoanI();
        Integer page = (currpage+4)/5;
        if(start<=0){
            start=1;
        }else if(start>=page){
            start=page;
        }
        JSONObject json = new JSONObject();
            //分页
            List list =iInvestServic.SelloanS((start-1)*5,5);
        System.out.println(list);
            json.put("list",list);
            //查询总条数

        json.put("currpage",currpage);
        json.put("page",page);
        json.put("colspage",start);
        System.out.println(page+"页数");
        return json;
    }
    @RequestMapping("/biddcheck/{did}")
    public ModelAndView BiddCheck(@PathVariable("did")Integer did){
        ModelAndView md = new ModelAndView();
        System.out.println(did);
        //查看详情
        Map map = iInvestServic.SelMx(did);
        md.addObject("map",map);


        System.out.println("map"+map);
        md.setViewName("invest/BiddingCkeck");
        return  md;
    }

    //查询可用红包
    @RequestMapping("/selhb")
    @ResponseBody
    public JSONObject selhb(Integer uid, Integer buymoney){
        System.out.println(uid +" 查红包 "+buymoney);
        JSONObject js = new JSONObject();

        List list = openred.getUsableRedEnvelopes(uid,buymoney);
        System.out.println("红包"+list);
        js.put("list",list);
        return  js;
    }
}
