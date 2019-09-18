package com.ht.controller;

import com.ht.bean.*;
import com.ht.commons.GetGrowthValueAPoint2;
import com.ht.commons.OperateRedEnvelopes;
import com.ht.service.Accountservice;
import com.ht.service.IInvestServic;
import com.ht.service.Immfservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.text.Format;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Controller
@RequestMapping("/scatter")
public class scatteredController {
    @Resource
    private Immfservice is;
    @Autowired
    private IInvestServic iInvestServic;
    @Autowired
    private OperateRedEnvelopes openred;
    @RequestMapping("/index")
    public String index(HttpServletRequest request, pagercount p){
        System.out.println(1);
        String mintime="0";
        String maxtime="0";
        String minmoney="0";
        String maxmoney="0";
        String hkfs="0";
        String minsy="0";
        String maxsy="0";
        String px="0";
        List l=is.selscatered(mintime,maxtime,minmoney,maxmoney,hkfs,minsy,maxsy,px,(p.getPage()-1)*p.getNumberpage());
        request.setAttribute("l",l);
        request.setAttribute("s",l.size());
        int i=is.scatteredlist();
        p.setTotal(i);
        request.setAttribute("p",p.getTotal());
        request.setAttribute("pa",p.getPage());
        System.out.println("页数"+i);
        List sthkfs=is.selhkfs();
        request.setAttribute("hkfs",sthkfs);
        return "/scattered/scattered";
    }
    @RequestMapping("/upd")
    public String updscattered(Integer pe,String x,HttpServletRequest request){
        pagercount p=new pagercount();
        p.setNumberpage(5);
        if(pe!=null) {
            if(isNumeric(pe+"")) {
                p.setPage(pe);
            }
        }
        int i=is.loanlist();
        p.setTotal(i);
        System.out.println(i);
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
        List<Loan> l=is.getscattered((p.getPage()-1)*p.getNumberpage(),p.getNumberpage());
        System.out.println(l.size());
        request.setAttribute("l",l);
        request.setAttribute("p",p.getPageCount());
        request.setAttribute("sp",p.getNumberpage());
            request.setAttribute("message",x);
        System.out.println(x);

        return "/scattered/updscattered";
    }
    public static boolean isNumeric(String str) {
        for (int i = 0; i < str.length(); i++) {
            if (!Character.isDigit(str.charAt(i))) {
                return false;
            }
        }
        return true;
    }
    @RequestMapping("/sb")
    public String sb(Integer id,HttpServletRequest request){
        String  iq=null;
        System.out.println(id);
        int s=is.updloan(id);
        if(s<=0){
            System.out.println("为通过");
            iq="0";
        }else {
            System.out.println("通过");
            scattered as = new scattered();
            String picName = UUID.randomUUID().toString();//根据此行生成散标编号
            Loan lo = is.selloan(id);
            as.setUid(picName);
            Mx m = is.selmx(lo.getDid() + "");
            as.setRate(m.getLl());
            as.setTerm(lo.getPeriodNum());
            as.setAmount(lo.getEntryAmount());
            as.setMoney(0);

            Date date = new Date();
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String nowtime = sdf.format(date);
            as.setStart(nowtime);
            as.setTheory(timejs(nowtime, 3));
            as.setPurpose(lo.getLoanPurposeText());
            String po = "该笔借款由本公司提供担保。";
            as.setGuarantor(po);
            as.setLid(lo.getDid());
            as.setMid(m.getMid());
            as.setHkfs(m.getHkfs());
            as.setEnd("0");
            int i = is.insertscttered(as);
            if(i<=0){
                System.out.println("为通过");
                iq="0";
            }else {
                iq="1";
            }
        }

        return  "redirect:/scatter/upd";
    }
    //时间添加  i  添加天数
    public static String timejs(String endDate,int i){
        System.out.println("String类型 "+endDate);//页面传递到后台的时间 为String类型

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date sDate = null;
        try {
            sDate = sdf.parse(endDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        System.out.println("String类型转Date类型 "+sDate);//要实现日期+1 需要String转成Date类型

        Format f = new SimpleDateFormat("yyyy-MM-dd");
        System.out.println("Date结束日期:" + f.format(sDate));

        Calendar c = Calendar.getInstance();
        c.setTime(sDate);
        c.add(Calendar.DAY_OF_MONTH, i);            //利用Calendar 实现 Date日期+1天

        sDate = c.getTime();
        System.out.println("Date结束日期+1 " +f.format(sDate)); //打印Date日期,显示成功+1天

        SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
        endDate = sdf1.format(sDate);
        System.out.println("Date类型转String类型  "+endDate); //将日期转成String类型 方便进入数据库比较
        return endDate;
    }
    @RequestMapping("/xq")
    public String xq(Integer id, HttpServletRequest request, HttpSession session){

        myusers user  = (myusers) session.getAttribute("user");
        if(user!=null){
            System.out.println(user.getUid()+"是多少");
            accounts acc = iInvestServic.selByuid(user.getUid());
            request.setAttribute("acc",acc);
            System.out.println("账户"+acc);
        }

        System.out.println(id);
        scattered s=is.selscatteredbyid(id);
        System.out.println(s.getLid());
        Loan l=is.selloan(s.getLid());
        Mx m=is.selmx(s.getMid()+"");
        System.out.println(123213);
        String str=l.getCustName();
        str=str.substring(0, 1)+"**";
        System.out.println(str);
        l.setCustName(str);
        String st=l.getIdCardNo();
        String sa="";
        System.out.println(st);
        sa=st.substring(0,3);
        System.out.println(sa);
        String substr=st.substring(st.length()-3,st.length());
        st=sa+"*****"+substr;
        System.out.println(st);
        l.setIdCardNo(st);

        String ms=m.getHomeaddress();
        System.out.println(ms);
        ms=ms.substring(0,ms.length()-6)+"*********";
        System.out.println(ms);
        String sm=m.getWorkaddress();
        sm=sm.substring(0,sm.length()-6)+"*********";
        System.out.println(sm);
        m.setHomeaddress(sm);

        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String nowtime = sdf.format(date);
        //判断是否结束
        if(nowtime.equals(s.getTheory())){
            System.out.println("结束");
            request.setAttribute("js","1");
        }else{
            System.out.println("未结束");
            request.setAttribute("js","0");
        }
        float sr= (float) (s.getMoney()/Integer.parseInt(s.getAmount()));
        System.out.println("进度"+sr);
        int srt= (int) (sr*100);
        System.out.println(srt);
        String dq=timejs(s.getTheory(),Integer.parseInt(s.getTerm())*30);
        //到期时间
        request.setAttribute("dq",dq);
        //进度
        request.setAttribute("jd",srt);
        //scattered
        request.setAttribute("s",s);
        //loan
        request.setAttribute("l",l);
        //mx
        request.setAttribute("m",m);



        return "/scattered/scatteredxq";
    }
    @RequestMapping("/fastJSONs1")
    @ResponseBody
    public Map fastJSONs1(Integer i,Integer t){
//        System.out.println("前台Ajax传递过来的参数: "+user);
        System.out.println(i);
        System.out.println(t);
//        /响应 Ajax的结果
        List<Loan> l=is.getscattered(i,t);
        Map map = new HashMap();
        map.put("user",l);
//        System.out.print(map.toString());
        return map;
    }
    @RequestMapping("/fastJSONs2")
    @ResponseBody
    public Map fastJSONs2(String mintime,String maxtime,String minmoney,String maxmoney,String hkfs,String minsy,String maxsy,String px,Integer i){
        List l=is.selscatered(mintime,maxtime,minmoney,maxmoney,hkfs,minsy,maxsy,px,i);
        int iss=is.scatteredlist();
        System.out.println("页数"+i);
//        System.out.println("前台Ajax传递过来的参数: "+user);
//        /响应 Ajax的结果
        Map map = new HashMap();
        map.put("user",l);
//        System.out.print(map.toString());
        return map;
    }
    @RequestMapping("/fastJSONs3")
    @ResponseBody
    public Map fastJSONs3(String mintime,String maxtime,String minmoney,String maxmoney,String hkfs,String minsy,String maxsy,String px,String i){
        System.out.println(mintime);
        System.out.println(maxtime);
        System.out.println(minmoney);
        System.out.println(maxmoney);

        System.out.println(hkfs);
        System.out.println(minsy);
        System.out.println(maxsy);
        System.out.println(px);

        pagercount p=new pagercount();
        System.out.println(i);
        System.out.println(Integer.parseInt(i));
        p.setPage(Integer.parseInt(i));
        List l=is.selscatered(mintime,maxtime,minmoney,maxmoney,hkfs,minsy,maxsy,px, (p.getPage()-1)*p.getNumberpage());


        int iss=is.scatteredlist();
        System.out.println("页数"+i);
//        System.out.println("前台Ajax传递过来的参数: "+user);
        System.out.println(l.size());
//        /响应 Ajax的结果
        Map map = new HashMap();
        map.put("uer",l);
//        System.out.print(map.toString());
        return map;
    }
    //购买散标
    @RequestMapping("buy")
    public ModelAndView buy (String periodd , Integer months, String interest , String password , Integer suid, Float realEarnings , Integer buyAmount, Integer sids , Integer hongbao, Integer hongbaoid , HttpSession session){
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

            //查询散标
            scattered sb =iInvestServic.selscabyid(sids);
            //散标还剩余的金额
            int amount = Integer.parseInt(sb.getAmount())-(int)buyAmount;
            //已筹集的金额
            Integer money = sb.getMoney()+buyAmount;
            System.out.println(is);
            //散标减去已购买的金额
            iInvestServic.updsca(sids,money,amount+"");
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
            if(months==6){
                calendar.add(Calendar.MONTH,6);
            }else if(months==12){
                calendar.add(Calendar.MONTH,12);
            }else if(months==18){
                calendar.add(Calendar.MONTH,18);
            }else if(months==6){
                calendar.add(Calendar.MONTH,6);
            }else if(months==36){
                calendar.add(Calendar.MONTH,36);
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

}
