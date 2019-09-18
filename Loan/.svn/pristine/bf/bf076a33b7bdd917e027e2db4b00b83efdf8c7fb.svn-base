//package com.ht.controller;
//
//import com.ht.bean.GrowthValue;
//import com.ht.bean.Task;
//import com.ht.bean.integral;
//import com.ht.bean.myusers;
//import com.ht.service.ILoginService;
//import com.ht.service.IVipCenterService;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//
//import javax.annotation.Resource;
//import javax.servlet.http.HttpSession;
//import java.text.SimpleDateFormat;
//import java.util.Date;
//
////用户获得成长值&积分
//@Controller
//@RequestMapping("/getValueAPoint")
//public class GetGrowthValueAPoint {
//
//    @Resource
//    private IVipCenterService ivcs;
//
//    @Resource
//    private ILoginService is;
//
//    /**
//     * 根据投资获得成长值&积分(访问:/getValueAPoint/byBid/50000/12?url=/outlets)
//     * @param amount //投资金额
//     * @param months //投资的月数
//     * @param url //要返回的url
//     * @return url
//     */
//    @RequestMapping("/byBid/{amount}/{months}")
//    public  String getGrowValueAPointByBid(@PathVariable("amount") Integer amount,
//                                     @PathVariable("months") Integer months,
//                                   String url,
//                                   HttpSession session){
//        myusers user=(myusers) session.getAttribute("user");
//        Task t=ivcs.getTaskByUser(user);
//        SimpleDateFormat s=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//        String time=s.format(new Date());
//        GrowthValue g=new GrowthValue();
//
//        //首次充值≥100元
//        if(amount>=100){
//            if(t.getFirstRecharge1h()==0){
//                int value=20;
//                g.setTime(time);
//                g.setType("首次充值≥100元");
//                g.setUserId(user.getUid());
//                g.setValue(value);
//                ivcs.addGrowthValue(g);
//                ivcs.updGrowthValueByUser(user,value);
//                t.setFirstRecharge1h(1);
//                ivcs.updTask(t);
//            }
//        }
//
//        //首次单笔投标以下任意产品≥3000
//        if(amount>=3000){
//            if(t.getFirstBid3t()==0){
//                int value=35;
//                g.setTime(time);
//                g.setType("首次单笔投标以下任意产品≥3000");
//                g.setUserId(user.getUid());
//                g.setValue(value);
//                ivcs.addGrowthValue(g);
//                ivcs.updGrowthValueByUser(user,value);
//                t.setFirstBid3t(1);
//                ivcs.updTask(t);
//            }
//        }
//
//        //每月投标任务
//        if(amount>=5000){
//            if(t.getFirstMonthBid5t()==0){
//                int value=60;
//                g.setTime(time);
//                g.setType("每月首笔投标以下任意产品≥5000元");
//                g.setUserId(user.getUid());
//                g.setValue(value);
//                ivcs.addGrowthValue(g);
//                ivcs.updGrowthValueByUser(user,value);
//                t.setFirstMonthBid5t(1);
//                ivcs.updTask(t);
//            }
//        }
////        每月首笔投标以下任意产品≥10000元
//        if(amount>=10000){
//            if(t.getFirstMonthBid10t()==0){
//                int value=120;
//                g.setTime(time);
//                g.setType("每月首笔投标以下任意产品≥10000元");
//                g.setUserId(user.getUid());
//                g.setValue(value);
//                ivcs.addGrowthValue(g);
//                ivcs.updGrowthValueByUser(user,value);
//                t.setFirstMonthBid10t(1);
//                ivcs.updTask(t);
//            }
//        }
//        //每月首笔投标以下任意产品≥30000元
//        if(amount>=30000){
//            if(t.getFirstMonthBid30t()==0){
//                int value=400;
//                g.setTime(time);
//                g.setType("每月首笔投标以下任意产品≥30000元");
//                g.setUserId(user.getUid());
//                g.setValue(value);
//                ivcs.addGrowthValue(g);
//                ivcs.updGrowthValueByUser(user,value);
//                t.setFirstMonthBid30t(1);
//                ivcs.updTask(t);
//            }
//        }
//        //每月首笔投标以下任意产品≥50000元
//        if(amount>=50000){
//            if(t.getFirstMonthBid50t()==0){
//                int value=600;
//                g.setTime(time);
//                g.setType("每月首笔投标以下任意产品≥50000元");
//                g.setUserId(user.getUid());
//                g.setValue(value);
//                ivcs.addGrowthValue(g);
//                ivcs.updGrowthValueByUser(user,value);
//                t.setFirstMonthBid50t(1);
//                ivcs.updTask(t);
//            }
//        }
//
//        //首次投标任意产品
//        if(t.getFirstBid()==0){
//            int value=15;
//            g.setTime(time);
//            g.setType("首次投标任意产品");
//            g.setUserId(user.getUid());
//            g.setValue(value);
//            ivcs.addGrowthValue(g);
//            ivcs.updGrowthValueByUser(user,value);
//            t.setFirstBid(1);
//            ivcs.updTask(t);
//        }
//
//        //任意一笔投标金额
//        int value=amount/100;
//        int point=amount*months/1000;
//        g.setTime(time);
//        g.setType("任意一笔投标金额");
//        g.setUserId(user.getUid());
//        g.setValue(value);
//        //添加成长值
//        ivcs.addGrowthValue(g);
//        ivcs.updGrowthValueByUser(user,value);
//        //添加积分
//        if(point>=1){
//            integral i=new integral();
//            i.setUid(user.getUid());
//            i.setTimes(time);
//            i.setJytype("投标");
//            i.setJystate("2");
//            i.setJfz(point);
//            ivcs.insertIntegral(i);
//            ivcs.updPointByBid(user.getUid(),point);
//        }
//
//        //刷新用户资料
//        user=(myusers) is.selBypwd(user).get(0);
//        session.setAttribute("user",user);
//
//        return url;
//    }
//
//    /**
//     * 根据新手任务获得成长值
//     * @param taskName 任务名称
//     * @param url 要返回的url
//     * @return url
//     */
//    @RequestMapping("/byNewbie/{taskName}")
//    public String getValueByNewbieTask(@PathVariable("taskName") String taskName,
//                                       String url,
//                                       HttpSession session){
//        myusers user=(myusers) session.getAttribute("user");
//        Task t=ivcs.getTaskByUser(user);
//        SimpleDateFormat s=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//        String time=s.format(new Date());
//        GrowthValue g=new GrowthValue();
//        //绑定手机
//        if(taskName.equals("bindPhone")){
//            if(t.getFirstRecharge1h()==0){
//                int value=10;
//                g.setTime(time);
//                g.setType("绑定手机");
//                g.setUserId(user.getUid());
//                g.setValue(value);
//                ivcs.addGrowthValue(g);
//                ivcs.updGrowthValueByUser(user,value);
//                t.setBindPhone(1);
//                ivcs.updTask(t);
//            }
//        }
//        //实名认证
//        if(taskName.equals("authentication")){
//            if(t.getAuthentication()==0){
//                int value=10;
//                g.setTime(time);
//                g.setType("实名认证");
//                g.setUserId(user.getUid());
//                g.setValue(value);
//                ivcs.addGrowthValue(g);
//                ivcs.updGrowthValueByUser(user,value);
//                t.setAuthentication(1);
//                ivcs.updTask(t);
//            }
//        }
//        //绑定银行卡
//        if(taskName.equals("bindBankCard")){
//            if(t.getBindBankCard()==0){
//                int value=10;
//                g.setTime(time);
//                g.setType("绑定银行卡");
//                g.setUserId(user.getUid());
//                g.setValue(value);
//                ivcs.addGrowthValue(g);
//                ivcs.updGrowthValueByUser(user,value);
//                t.setBindBankCard(1);
//                ivcs.updTask(t);
//            }
//        }
//
//        //刷新用户资料
//        user=(myusers) is.selBypwd(user).get(0);
//        session.setAttribute("user",user);
//
//        return url;
//    }
//}
