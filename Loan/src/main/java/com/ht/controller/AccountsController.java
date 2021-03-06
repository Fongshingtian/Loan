package com.ht.controller;
import com.alibaba.fastjson.JSONObject;
import com.ht.bean.*;
import com.ht.commons.GetGrowthValueAPoint2;
import com.ht.commons.VerifyUtil;
import com.ht.commons.VerifyUtil2;
import com.ht.service.Accountservice;
import com.ht.service.IInvestServic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import javax.servlet.http.HttpSession;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.*;

/**
 * @company 宏图
 * @User 张冬招
 * @create 2019-04-23 -11:15
 */
@Controller

@RequestMapping("/account")
public class AccountsController {
    @Autowired
    private Accountservice acc;

    @Autowired
    private IInvestServic iInvestServic;

    JSONObject json1=new JSONObject();
    private static String  yzm="";

    @RequestMapping("/toacc")
    public ModelAndView tomyaccount(Integer uid){
        ModelAndView mv=new ModelAndView();
        System.out.println("个人账户进来了");
        if(uid==null||uid==0){//表示session不在了需要重新登入
            System.out.println("sssss");
            Object[] objs = VerifyUtil.createImage();
            String randomStr = (String) objs[0];
            mv.addObject("code",randomStr);
            mv.setViewName("account/login");
        }else{
            System.out.println("aaaaaaa");
            //根据uid查询用户和个人账户
            myusers users=acc.seluserbyid(uid);
            //根据uid查找该用户的账户详情
            accounts accounts=acc.selaccountsbyuid(uid);
            System.out.println("个人账户"+accounts.getCountmoney());
            //判断是否绑定银行卡
            if(users.getRealname().equals("false")){//未绑卡
                mv.addObject("bank","false");
            }else{
                //表示以实名认证（去数据库查询实名认证表是否还存在银行卡号）
                //根据用户表uid查询实名认证表
                real_name real=acc.selrealbyuid(uid);

                if (real.getBankcard()==null||real.getBankcard().equals("")) {
                    //表示不存在银行卡号
                    mv.addObject("bank","false");
                }else {
                    mv.addObject("bank","true");
                }
            }
            List  yxnlist = acc.selezbgj(2);//优享牛
            //判断
            //根据uid 查找今天的签到积分
            Date jf1=new Date();
            DateFormat jf2= new SimpleDateFormat("yyyy-MM-dd");
            String jfdate=jf2.format(jf1);
            integral ins=acc.seljfcheck(uid,jfdate);
            System.out.println("判断的结果是："+ins);
            if(ins==null){
                mv.addObject("res","1");
                //表示没有签到

            }else{//表示已经签到
                mv.addObject("res","2");
            }

            mv.addObject("user",users);
            mv.addObject("account",accounts);
            mv.addObject("yxnlist",yxnlist);
            System.out.println("去account....");
            mv.setViewName("account/account");
        }

        return mv;
    }
    //去登入页面
    @RequestMapping("/tologin")
    public ModelAndView tologin(){
        ModelAndView mv=new ModelAndView();
        Object[] objs = VerifyUtil.createImage();
        String randomStr = (String) objs[0];
        mv.addObject("code",randomStr);
        mv.setViewName("account/login");
        return mv;
    }


    //用户登入
    @RequestMapping("/login")
    @ResponseBody
    public JSONObject login(String username, String password, HttpSession session){
        System.out.println("登入进来了");
        System.out.println("username="+username);
        System.out.println("password"+password);
        JSONObject json =new JSONObject();
        //去数据库进行对比
        myusers user=acc.loginsel(username,password);
        System.out.println(user);
        if(user==null){//表示登入失败
            System.out.println("登入失败");
            //session.setAttribute("messge", "登入失败账号或密码错误");
            json.put("results","a");
        }else{//登入成功
            System.out.println("登入成功");
            //将用户保存在session中username
            session.setAttribute("user",user);
            json.put("results","b");
        }
        System.out.println("json="+json.toString());
        return json;
    }

    //去到注册页面
    @RequestMapping("/toreg")
    public ModelAndView totest(){
        ModelAndView mv=new ModelAndView();
        Object[] objs = VerifyUtil.createImage();
        String randomStr = (String) objs[0];
        mv.addObject("code",randomStr);
        mv.setViewName("account/register");
        return mv;
    }

    //@ApiOperation(value = "获取图形验证码")
    @RequestMapping("/tocode")
    @ResponseBody
    public JSONObject getByte(){
        System.out.println("图形验证码进来了");
        Object[] objs = VerifyUtil.createImage();
        String randomStr = (String) objs[0];
        JSONObject json=new JSONObject();

        System.out.println("randomStr="+randomStr);
        System.out.println(objs[1]);
        json.put("code",randomStr);
        return json;
    }
    @RequestMapping("/toequlphnoe")
    @ResponseBody
    public JSONObject toequlphnoe(String phone){

        System.out.println("判断该用户是否存在");
        List list=acc.selphones();
        for (int i = 0; i <list.size() ; i++) {
            myusers user=(myusers) list.get(i);
            if(phone.equals(user.getPhone())){//如果存在
                System.out.println("该用户已经存在");
                json1.put("msgg","a");
                break;//跳出循环
            }
        }
        System.out.println(json1.toJSONString());
        return json1;
    }

    //注册成功页面
    @RequestMapping("/regsucced")
    public ModelAndView regsucced(myusers us,HttpSession session){
        ModelAndView mv=new ModelAndView();
        System.out.println("注册成功进来了");
        //判断是否存在用户（手机号码是否一样）
        boolean bln=true;
        List list=acc.selphones();
        for (int i = 0; i <list.size() ; i++) {
            myusers user=(myusers) list.get(i);
            if(us.getPhone().equals(user.getPhone())){//如果存在
                System.out.println("该用户已经存在");
                bln=false;
                //返回注册页面并且提示用户已经存在

                Object[] objs = VerifyUtil.createImage();
                String randomStr = (String) objs[0];//图形验证码
                mv.addObject("code",randomStr);
                mv.addObject("msg","该手机号已经注册了账户");
                mv.setViewName("account/register");
                break;//跳出循环
            }
        }
        if(bln){
            System.out.println("注册进来了");
            //注册时间
            Date data =new Date();
            DateFormat dateFormat2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String date=dateFormat2.format(data);
            System.out.println("日期="+date);
            //实名认证默认值
            String realname="false";
            //邮箱认证默认值（1：表示未认证）
            String email="1";
            //紧急联系人状态完善(1:不完善，2：完善)
            String urgentstate="1";
            //积分
            int point=0;

            //成长值
            int gropup=0;

            //我的邀请码
            //生成随机邀请码
            Object[] objs = VerifyUtil2.createImage();
            String randomStr = (String) objs[0];
            //推荐人邀请码

            //将各默认值set到user对象中
            us.setZcdata(date);
            us.setRealname(realname);
            us.setEmail(email);
            us.setUrgentstate(urgentstate);
            us.setPoint(point);
            us.setGrowthValue(gropup);
            us.setMycode(randomStr);
            //保存到数据库中
            acc.useradd(us);

            //保存后的当前id
            int uid=us.getUid();
            //1:如果填写了推荐人邀请码那么就要绑定好友关系
            if(us.getTjrcode()!=null&&!us.getTjrcode().equals("")){
                //将他们的关系绑定在好友表
                //同过邀请码查找那位好友
                myusers user=acc.selmycode(us.getTjrcode());
                friend ff=new friend();
                ff.setMyuid(user.getUid());
                ff.setUid(uid);
                ff.setFriendphone(us.getPhone());
                ff.setRealname(us.getRealname());
                Date data2 =new Date();
                DateFormat dateFormat3 = new SimpleDateFormat("yyyy-MM-dd");
                String data1=dateFormat3.format(data2);
                ff.setZctime(data1);
                ff.setResouce("其他");
                //保存到数据库
                acc.addfriend(ff);
            }
            //2:为用户添加一个账户
            accounts ac=new accounts();
            ac.setUid(uid);
            ac.setCountmoney(0);
            ac.setCountbj(0);
            ac.setCountlx(0);
            ac.setDjmoney(0);
            ac.setCountsy(0);
            ac.setInvitedsy(0);
            ac.setQtsy(0);
            ac.setKyye(0);
            //保存到数据库
            acc.addaccounts(ac);

            //3:注册成功添加一条积分记录表（+20积分）
            integral integral=new integral();
            integral.setUid(uid);
            DateFormat dateFormat3 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String date1=dateFormat3.format(data);
            integral.setTimes(date1);
            integral.setJfz(20);
            integral.setJystate("2");
            integral.setJytype("注册奖励");
            acc.addpoints(integral);
            //成长任务表生成对应用户列
            acc.insertTask(uid);

            //4:注册成功发一条消息给用户
            messge me=new messge();
            me.setUid(uid);
            me.setTitle("注册成功积分奖励提醒");
            me.setText("尊敬的用户，恭喜注册成功，欢迎来到中心财富，将奖励您20积分请到个人账户'我的积分'查收");
            me.setMstate("1");
            me.setSendtime(date1);
            acc.addmessage(me);

            //去登入页面
            mv.setViewName("account/login");
        }
        return mv;
    }
    //去实名认证，绑定银行卡
    @RequestMapping("toapp")
    public ModelAndView tpapplay(Integer uid){
        ModelAndView mv=new ModelAndView();
        if(uid==null||uid==0){//表示session不在了需要重新登入
            Object[] objs = VerifyUtil.createImage();
            String randomStr = (String) objs[0];
            mv.addObject("code",randomStr);
            mv.setViewName("account/login");
        }else{
            //根据uid查询用户
            myusers users=acc.seluserbyid(uid);
            //判断是否绑定银行卡
            if(users.getRealname().equals("false")){//未绑卡
                mv.addObject("bank","false");
            }else{
                //表示以实名认证（去数据库查询实名认证表是否还存在银行卡号）
                //根据用户表uid查询实名认证表
                real_name real=acc.selrealbyuid(uid);
                if (real.getBankcard()==null||real.getBankcard().equals("")) {
                    //表示不存在银行卡号
                    mv.addObject("bank","false");
                }else {
                    mv.addObject("bank","true");
                    mv.addObject("real",real);
                }
            }
            //根据uid 查找今天的签到积分
            Date jf1=new Date();
            DateFormat jf2= new SimpleDateFormat("yyyy-MM-dd");
            String jfdate=jf2.format(jf1);
            integral ins=acc.seljfcheck(uid,jfdate);
            System.out.println("判断的结果是："+ins);
            if(ins==null){
                mv.addObject("res","1");
                //表示没有签到

            }else{//表示已经签到
                mv.addObject("res","2");
            }

            mv.addObject("user",users);
            mv.setViewName("account/applay");
        }
        return mv;
    }

    //去绑定银行卡和实名认证
    @RequestMapping("/authentication")
    public String Authentication(Model model,real_name r,HttpSession session){
        System.out.println(r);
        if(r.getRid()==null||r.getRid()==0){
            System.out.println("add");
            acc.authentication(r);
            GetGrowthValueAPoint2.getValueByNewbieTask("实名认证",session);
            GetGrowthValueAPoint2.getValueByNewbieTask("绑定银行卡",session);
            acc.updSomething("myusers",
                    " realname='true' ",
                    " uid="+r.getUid());
        }else{
            System.out.println("upd");
            acc.updSomething("real_name",
                    " bankcard='"+r.getBankcard()+"',bankname='"+r.getBankname()+"',idpwd='"+r.getIdpwd()+"',bankphone='"+r.getBankphone()+"' ",
                    " rid="+r.getRid());
        }
        return "redirect:/account/toapp?uid="+r.getUid();
    }

    //账户安全
    @RequestMapping("tosecur")
    public ModelAndView tosecur(Integer uid){
        ModelAndView mv=new ModelAndView();
        //根据uid查询用户
        myusers users=acc.seluserbyid(uid);
        //判断是否绑定银行卡
        if(users.getRealname().equals("false")){//未绑卡
            mv.addObject("bank","false");
        }else{
            //表示以实名认证（去数据库查询实名认证表是否还存在银行卡号）
            //根据用户表uid查询实名认证表
            real_name real=acc.selrealbyuid(uid);
            mv.addObject("real",real);
            if (real.getBankcard()==null||real.getBankcard().equals("")) {
                //表示不存在银行卡号
                mv.addObject("bank","false");
            }else {
                mv.addObject("bank","true");
            }
        }
        //根据uid 查找今天的签到积分
        Date jf1=new Date();
        DateFormat jf2= new SimpleDateFormat("yyyy-MM-dd");
        String jfdate=jf2.format(jf1);
        integral ins=acc.seljfcheck(uid,jfdate);
        System.out.println("判断的结果是："+ins);
        if(ins==null){
            mv.addObject("res","1");
            //表示没有签到

        }else{//表示已经签到
            mv.addObject("res","2");
        }

        mv.addObject("user",users);
        mv.setViewName("account/secur");

        return mv;
    }
    //去查积分
    @RequestMapping("topoint")
    public ModelAndView topoint(Integer uid){
        ModelAndView mv=new ModelAndView();
        //根据uid查询用户
        myusers users=acc.seluserbyid(uid);
        //判断是否绑定银行卡
        if(users.getRealname().equals("false")){//未绑卡
            mv.addObject("bank","false");
        }else{
            //表示以实名认证（去数据库查询实名认证表是否还存在银行卡号）
            //根据用户表uid查询实名认证表
            real_name real=acc.selrealbyuid(uid);
            if (real.getBankcard()==null||real.getBankcard().equals("")) {
                //表示不存在银行卡号
                mv.addObject("bank","false");
            }else {
                mv.addObject("bank","true");
            }
        }
        //根据uid查询用户积分记录表
        List points=acc.selpoint(uid);
        //得到该用户累计收益
        Integer counts=acc.selpointscount(uid);
        if(counts==null){
            mv.addObject("counts",0.0);
        }else{
            mv.addObject("counts",counts);
        }
        //本月累计收益
        Date date=new Date();
        DateFormat dateFormat3 = new SimpleDateFormat("yyyy-MM");
        String date1=dateFormat3.format(date);
        System.out.println("截取后："+date1);
        Integer countmonth=acc.selpointsmonth(uid,date1);

        if(countmonth==null){
            mv.addObject("countmonth",0.0);
        }else{
            mv.addObject("countmonth",countmonth);
        }
        //根据uid 查找今天的签到积分
        Date jf1=new Date();
        DateFormat jf2= new SimpleDateFormat("yyyy-MM-dd");
        String jfdate=jf2.format(jf1);
        integral ins=acc.seljfcheck(uid,jfdate);
        System.out.println("判断的结果是："+ins);
        if(ins==null){
            mv.addObject("res","1");
            //表示没有签到

        }else{//表示已经签到
            mv.addObject("res","2");
        }

        mv.addObject("user",users);
        mv.addObject("p",points);
        mv.setViewName("account/point");

        return mv;
    }


    //多条件积分查询
    @RequestMapping("/serchpoint")
    @ResponseBody
    public JSONObject serchpoint(Integer uid,String changetype,String begindate,String enddate){
        List points=new ArrayList();
        System.out.println("uid="+uid+",changetype="+changetype+"begindate="+begindate+"enddate="+enddate);
        if(changetype.equals("0")){//表示查全部（就不用传changetype进去）
            points=acc.selpointtwos(uid,begindate,enddate);
            for (int i = 0; i < points.size(); i++) {
                integral a=(integral) points.get(i);
                if(a.getJystate().equals("1")){
                    a.setJystate("支出");
                }
                if(a.getJystate().equals("2")){
                    a.setJystate("收入");
                }
            }

        }else{//支出和收入
            points=acc.selpointthrees(uid,begindate,enddate,changetype);
            for (int i = 0; i < points.size(); i++) {
                integral a=(integral) points.get(i);
                if(a.getJystate().equals("1")){
                    a.setJystate("支出");
                }
                if(a.getJystate().equals("2")){
                    a.setJystate("收入");
                }
            }

        }
        JSONObject json=new JSONObject();
        json.put("ps",points);
        return json;
    }

    //我的消息模块
    @RequestMapping("/tomessage")
    public ModelAndView tomessage(Integer uid,Pager page){
        System.out.println("我的消息进来了");
        ModelAndView mv=new ModelAndView();
        myusers users=acc.seluserbyid(uid);
        //判断是否绑定银行卡
        if(users.getRealname().equals("false")){//未绑卡
            mv.addObject("bank","false");
        }else{
            //表示以实名认证（去数据库查询实名认证表是否还存在银行卡号）
            //根据用户表uid查询实名认证表
            real_name real=acc.selrealbyuid(uid);
            if (real.getBankcard()==null||real.getBankcard().equals("")) {
                //表示不存在银行卡号
                mv.addObject("bank","false");
            }else {
                mv.addObject("bank","true");
            }
        }

        //获取当前时间的前三个月的时间点
        String times=acc.seltimebefore();
        System.out.println("前三个月的时间点是："+times);

        //根据uid查询前三个月的数据
        List list=acc.selmessgelist(uid,times);
        //设置每页行数
        page.setPageCount(3);
        //总行数
        page.setTotalRow(list.size());
        //总页数 （数据总条数+每页数据行数-1）/每页数据行数
        page.setTotalPage((page.getTotalRow()+page.getPageCount()-1)/page.getPageCount());

        // 判断页数上限
        if (page.getCurrPage() == null || page.getCurrPage().equals("") || page.getCurrPage() < 1) {
            page.setCurrPage(1);
        }
        if (page.getCurrPage() > page.getTotalPage() && page.getTotalPage() != 0) {
            page.setCurrPage(page.getTotalPage());
        }

        List listpage=acc.selmessgelistbypage(uid,times,(page.getCurrPage()-1)*page.getPageCount(),page.getPageCount());
        //得到状态未读的记录
        int count=0;
        for (int i = 0; i <list.size() ; i++) {
            messge me=(messge) list.get(i);
            if(me.getMstate().equals("未读")){
                count++;
            }

        }
        System.out.println("未读的消息有:"+count);

        //根据uid 查找今天的签到积分
        Date jf1=new Date();
        DateFormat jf2= new SimpleDateFormat("yyyy-MM-dd");
        String jfdate=jf2.format(jf1);
        integral ins=acc.seljfcheck(uid,jfdate);
        System.out.println("判断的结果是："+ins);
        if(ins==null){
            mv.addObject("res","1");
            //表示没有签到

        }else{//表示已经签到
            mv.addObject("res","2");
        }
        //分页的消息记录
        mv.addObject("count",count);
        mv.addObject("mes",listpage);
        mv.addObject("user",users);
        mv.addObject("page",page);//分页
        mv.setViewName("account/message");
        return mv;
    }

    //消息分页模块
    @RequestMapping("/mesgepage")
    @ResponseBody
    public JSONObject mesgepage(Integer uid,Pager page){
        System.out.println("当前页="+page.getCurrPage());
        JSONObject json=new JSONObject();
        //获取当前时间的前三个月的时间点
        String times=acc.seltimebefore();
        System.out.println("前三个月的时间点是："+times);

        //根据uid查询前三个月的数据
        List list=acc.selmessgelist(uid,times);
        //设置每页行数
        page.setPageCount(3);
        //总行数
        page.setTotalRow(list.size());
        //总页数 （数据总条数+每页数据行数-1）/每页数据行数
        page.setTotalPage((page.getTotalRow()+page.getPageCount()-1)/page.getPageCount());

        // 判断页数上限
        if (page.getCurrPage() == null || page.getCurrPage().equals("") || page.getCurrPage() < 1) {
            page.setCurrPage(1);
        }
        if (page.getCurrPage() > page.getTotalPage() && page.getTotalPage() != 0) {
            page.setCurrPage(page.getTotalPage());
        }

        List listpage=acc.selmessgelistbypage(uid,times,(page.getCurrPage()-1)*page.getPageCount(),page.getPageCount());
        //得到状态未读的记录
//        int count=0;
//        for (int i = 0; i <list.size() ; i++) {
//            messge me=(messge) list.get(i);
//            if(me.getMstate().equals("未读")){
//                count++;
//            }
//
//        }
        json.put("currpage",page.getCurrPage());
//        json.put("count",count);
        json.put("mes",listpage);
        return json;
    }

    //改变消息状态(改成已读)
    @RequestMapping("/meschangdestate")
    @ResponseBody
    public JSONObject meschangdestate(Integer mid){
        JSONObject json=new JSONObject();
        String mstate="已读";
        acc.updmesgmsatte(mid,mstate);
        return json;
    }

    @RequestMapping("/changstate")
    @ResponseBody
    public JSONObject changstate(String ids){
        JSONObject json=new JSONObject();
        System.out.println("改变进来了");
        String mstate="已读";
        acc.updstateall(ids,mstate);
        return json;
    }

    //删除消息根据mid
    @RequestMapping("/dellmesg")
    @ResponseBody
    public JSONObject dellmesg(String ids){
        JSONObject json=new JSONObject();
        System.out.println("删除进来了 ids="+ids);
        acc.dellmesg(ids);
        return json;
    }



    //判断邀请码是否合格
    @RequestMapping("/checkcode")
    @ResponseBody
    public JSONObject checkcode(String code,Integer uid){
        System.out.println("判断是不是存在该邀请码进来了uid+"+uid);
        JSONObject json=new JSONObject();
        boolean bln=true;
        //根据uid查询所有用户的邀请码字段
        List list=acc.selcodemy(uid);
        System.out.println("----"+list.size());
        for (int i = 0; i < list.size(); i++) {
            myusers user=(myusers) list.get(i);
            System.out.println("用户列表的邀请码有"+user.getMycode());
            if(code.equals(user.getMycode())){
                bln=false;
                json.put("mesg","1");
                break;
            }
        }
        if(bln){//表示不存在该邀请码
            System.out.println("该邀请码不存在");
            json.put("mesg","2");
        }
        System.out.println(json);
        return json;
    }
    //修改邀请码
    @RequestMapping("/addcode")
    @ResponseBody
    public JSONObject addcode(String code,Integer uid){
        JSONObject json=new JSONObject();
        System.out.println("绑定好友进来了");
        //修改邀请码（推荐人）
        acc.updatemycoe(uid,code);
        //将他们的关系绑定在好友表
        //同过邀请码查找那位好友
        myusers user=acc.selmycode(code);
        friend ff=new friend();
        ff.setMyuid(uid);
        ff.setUid(user.getUid());
        ff.setFriendphone(user.getPhone());
        ff.setRealname(user.getRealname());
        Date data =new Date();
        DateFormat dateFormat3 = new SimpleDateFormat("yyyy-MM-dd");
        String data1=dateFormat3.format(data);
        ff.setZctime(data1);
        ff.setResouce("其他");
        //保存到数据库
        acc.addfriend(ff);

        return json;
    }
    //去我的网贷页面
    @RequestMapping("/toloan")
    public ModelAndView toloan(Integer uid ){
        ModelAndView mv=new ModelAndView();
        myusers users=acc.seluserbyid(uid);
        System.out.println("进来了。。");
        List tb = acc.selectbyuserid(uid);
        System.out.println(tb);
        int dsmoney=0;   //代收本金
        float interest =0; //代收利息
        float yzmonry=0;  //已赚利息
        for (int i = 0; i < tb.size(); i++) {
            mytb b= (mytb) tb.get(i);

            if (b.getStatus()!=2){//未结束
                dsmoney+=Integer.parseInt(b.getSjmoney());
                interest+=Float.parseFloat(b.getInterest());

            }
            if (b.getStatus()==2){ //结束
                yzmonry+=Float.parseFloat(b.getInterest());

            }

            System.out.println("代收金额是"+dsmoney+"代收利息是"+interest+"已赚利息"+yzmonry);
            //判断是否绑定银行卡
            if(users.getRealname().equals("false")){//未绑卡
                mv.addObject("bank","false");
            }else{
                //表示以实名认证（去数据库查询实名认证表是否还存在银行卡号）
                //根据用户表uid查询实名认证表
                real_name real=acc.selrealbyuid(uid);
                if (real.getBankcard()==null||real.getBankcard().equals("")) {
                    //表示不存在银行卡号
                    mv.addObject("bank","false");
                }else {

                }
                mv.addObject("bank","true");

            }
        }
        //根据uid 查找今天的签到积分
        Date jf1=new Date();
        DateFormat jf2= new SimpleDateFormat("yyyy-MM-dd");
        String jfdate=jf2.format(jf1);
        integral ins=acc.seljfcheck(uid,jfdate);
        System.out.println("判断的结果是："+ins);
        if(ins==null){
            mv.addObject("res","1");
            //表示没有签到

        }else{//表示已经签到
            mv.addObject("res","2");
        }
        mv.addObject("mytb",tb);
        mv.addObject("dsmoney",dsmoney);
        mv.addObject("interest",interest);
        mv.addObject("yzmonry",yzmonry);
        mv.addObject("user",users);
        mv.setViewName("account/accloan");
        return mv;
    }
    //发送验证码
    @RequestMapping("/sendyzm")
    @ResponseBody
    public JSONObject sendyzm(String phone){
        System.out.println("获取验证码进来了");
        JSONObject json=new JSONObject();
        Random random = new Random();
        int x=random.nextInt(9999-1000+1)+1000;//为变量赋随机值1000-9999
        yzm=x+"";
        String msg[]=new String[2];
        msg[0]=x+"";
        msg[1]="1";
        //SendMessageUtil.sendMessage(phone,msg);
        json.put("msg",yzm);
        System.out.println(phone+yzm);
        return  json;
    }
    //修改交易密码
    @RequestMapping("/updidpwd")
    @ResponseBody
    public String updidpwd(Integer uid,String idpwd){//用户已实名认证
        System.out.println("修改交易密码进来了");
        //根据uid去修改实名认证表的交易密码
        acc.updidpwd(uid,idpwd);
        return null;
    }

    //去资金记录
    @RequestMapping("/torecord")
    public ModelAndView torecord(Pager page,Integer uid){
        ModelAndView mv=new ModelAndView();
        myusers users=acc.seluserbyid(uid);
        //判断是否绑定银行卡
        if(users.getRealname().equals("false")){//未绑卡
            mv.addObject("bank","false");
        }else{
            //表示以实名认证（去数据库查询实名认证表是否还存在银行卡号）
            //根据用户表uid查询实名认证表
            real_name real=acc.selrealbyuid(uid);
            if (real.getBankcard()==null||real.getBankcard().equals("")) {
                //表示不存在银行卡号
                mv.addObject("bank","false");
            }else {
                mv.addObject("bank","true");
            }
        }
        //先初始化每页行数
        page.setPageCount(10);//15条数据
        //根据用户id查询资金记录表
        List list =acc.selrecord(uid);
        //总行数
        page.setTotalRow(list.size());
        //总页数 （数据总条数+每页数据行数-1）/每页数据行数
        page.setTotalPage((page.getTotalRow()+page.getPageCount()-1)/page.getPageCount());

        // 判断页数上限
        if (page.getCurrPage() == null || page.getCurrPage().equals("") || page.getCurrPage() < 1) {
            page.setCurrPage(1);
        }
        if (page.getCurrPage() > page.getTotalPage() && page.getTotalPage() != 0) {
            page.setCurrPage(page.getTotalPage());
        }
        //分页后的数据
        List listpage=acc.selrecordbypage(uid,(page.getCurrPage()-1)*page.getPageCount(),page.getPageCount());

        //根据uid 查找今天的签到积分
        Date jf1=new Date();
        DateFormat jf2= new SimpleDateFormat("yyyy-MM-dd");
        String jfdate=jf2.format(jf1);
        integral ins=acc.seljfcheck(uid,jfdate);
        System.out.println("判断的结果是："+ins);
        if(ins==null){
            mv.addObject("res","1");
            //表示没有签到

        }else{//表示已经签到
            mv.addObject("res","2");
        }
        mv.addObject("redlist",listpage);//资金记录分页后
        mv.addObject("page",page);
        mv.addObject("user",users);
        mv.setViewName("account/record");
        return mv;
    }

    //资金记录分页
    @RequestMapping("/recordpage")
    @ResponseBody
    public JSONObject recordpage(Integer uid,String starttime,String endtime,Pager page){
        System.out.println("分页进来了，页面当前页是："+page.getCurrPage());
        JSONObject json=new JSONObject();
        //先初始化每页行数
        page.setPageCount(10);//15条数据
        //根据用户id查询资金记录表
        List list =acc.selrecord(uid);
        //总行数
        page.setTotalRow(list.size());
        //总页数 （数据总条数+每页数据行数-1）/每页数据行数
        page.setTotalPage((page.getTotalRow()+page.getPageCount()-1)/page.getPageCount());

        // 判断页数上限
        if (page.getCurrPage() == null || page.getCurrPage().equals("") || page.getCurrPage() < 1) {
            page.setCurrPage(1);
        }
        if (page.getCurrPage() > page.getTotalPage() && page.getTotalPage() != 0) {
            page.setCurrPage(page.getTotalPage());
        }
        //分页后的数据
        List listpage=acc.selrecordbypageandtime(uid,starttime,endtime,(page.getCurrPage()-1)*page.getPageCount(),page.getPageCount());
        //操作类型封装数据
        for (int i = 0; i < listpage.size(); i++) {
            record re=(record) listpage.get(i);
            if(re.getRtype().equals("1")){
                re.setRtype("购买投资");
            }
            if(re.getRtype().equals("2")){
                re.setRtype("收益奖励");
            }
            if(re.getRtype().equals("3")){
                re.setRtype("账户充值");
            }
            if(re.getRtype().equals("4")){
                re.setRtype("提现成功");
            }
            if(re.getRtype().equals("5")){
                re.setRtype("申请提现");
            }
        }
        json.put("redlist",listpage);//资金记录数据列表
//        json.put("page",page);//分页数据
        return json;
    }

    //操作类型查询资金记录
    @RequestMapping("/recordtype")
    @ResponseBody
    public JSONObject recordtype(Integer uid,String starttime,String endtime,String rtype1,Pager page){
        System.out.println("操作类型进来了");
        JSONObject json =new JSONObject();
        //先初始化每页行数
        page.setPageCount(10);//15条数据
        //根据用户id查询资金记录表
        List list =acc.selrecord(uid);
        //总行数
        page.setTotalRow(list.size());
        //总页数 （数据总条数+每页数据行数-1）/每页数据行数
        page.setTotalPage((page.getTotalRow()+page.getPageCount()-1)/page.getPageCount());

        // 判断页数上限
        if (page.getCurrPage() == null || page.getCurrPage().equals("") || page.getCurrPage() < 1) {
            page.setCurrPage(1);
        }
        if (page.getCurrPage() > page.getTotalPage() && page.getTotalPage() != 0) {
            page.setCurrPage(page.getTotalPage());
        }
        List listpage=new ArrayList();
        if(rtype1.equals("0")){//表示查询全部
            //分页后的数据
            listpage=acc.selrecordbypageandtime(uid,starttime,endtime,(page.getCurrPage()-1)*page.getPageCount(),page.getPageCount());
        }else{//根据操作类型查询数据
            listpage=acc.selrecordbypageandtype(uid,starttime,endtime,rtype1,(page.getCurrPage()-1)*page.getPageCount(),page.getPageCount());
        }
        //操作类型封装数据
        for (int i = 0; i < listpage.size(); i++) {
            record re=(record) listpage.get(i);
            if(re.getRtype().equals("1")){
                re.setRtype("购买投资");
            }
            if(re.getRtype().equals("2")){
                re.setRtype("收益奖励");
            }
            if(re.getRtype().equals("3")){
                re.setRtype("账户充值");
            }
            if(re.getRtype().equals("4")){
                re.setRtype("提现成功");
            }
            if(re.getRtype().equals("5")){
                re.setRtype("申请提现");
            }
        }
        json.put("redlist",listpage);//资金记录数据列表
        json.put("page",page);//分页数据
        return json;
    }

    //根据时间查询资金记录
    @RequestMapping("/recordtime")
    @ResponseBody
    public JSONObject recordtime(Integer uid,String starttime,String endtime,Pager page){
        JSONObject json=new JSONObject();
        //先初始化每页行数
        page.setPageCount(10);//15条数据
        //根据用户id查询资金记录表
        List list =acc.selrecord(uid);
        //总行数
        page.setTotalRow(list.size());
        //总页数 （数据总条数+每页数据行数-1）/每页数据行数
        page.setTotalPage((page.getTotalRow()+page.getPageCount()-1)/page.getPageCount());

        // 判断页数上限
        if (page.getCurrPage() == null || page.getCurrPage().equals("") || page.getCurrPage() < 1) {
            page.setCurrPage(1);
        }
        if (page.getCurrPage() > page.getTotalPage() && page.getTotalPage() != 0) {
            page.setCurrPage(page.getTotalPage());
        }
        List listpage=new ArrayList();
        listpage=acc.selrecordbypageandtime(uid,starttime,endtime,(page.getCurrPage()-1)*page.getPageCount(),page.getPageCount());
        //操作类型封装数据
        for (int i = 0; i < listpage.size(); i++) {
            record re=(record) listpage.get(i);
            if(re.getRtype().equals("1")){
                re.setRtype("购买投资");
            }
            if(re.getRtype().equals("2")){
                re.setRtype("收益奖励");
            }
            if(re.getRtype().equals("3")){
                re.setRtype("账户充值");
            }
            if(re.getRtype().equals("4")){
                re.setRtype("提现成功");
            }
            if(re.getRtype().equals("5")){
                re.setRtype("申请提现");
            }
        }
        json.put("redlist",listpage);//资金记录数据列表
        return json;
    }

    //查看项目详情
    @RequestMapping("/toxq")
    public ModelAndView toloanqx(Integer uid ,Integer bid,Integer zid){
        ModelAndView mv=new ModelAndView();
        myusers users=acc.seluserbyid(uid);
        System.out.println("进来了。。");
        mytb mytb = acc.selemytbyid(bid);
        Integer counnt = acc.selelscont(zid);
        System.out.println(mytb+"购买次数是"+counnt);

        //判断是否绑定银行卡
        if(users.getRealname().equals("false")){//未绑卡
            mv.addObject("bank","false");
        }else{
            //表示以实名认证（去数据库查询实名认证表是否还存在银行卡号）
            //根据用户表uid查询实名认证表
            real_name real=acc.selrealbyuid(uid);
            if (real.getBankcard()==null||real.getBankcard().equals("")) {
                //表示不存在银行卡号
                mv.addObject("bank","false");
            }else {

            }
            mv.addObject("bank","true");

        }

        mv.addObject("user",users);
        mv.addObject("mytb",mytb);
        mv.addObject("count",counnt);
        mv.setViewName("account/loanxq");
        return mv;
    }
    //查看合同
    @RequestMapping("toht")
    public  ModelAndView tohe(Integer uid ,Integer bid,Integer zid){
        ModelAndView mv=new ModelAndView();
        mytb t = acc.selemytbyid(bid);
        myusers users=acc.seluserbyid(uid);
        real_name real=acc.selrealbyuid(uid);


        mv.addObject("user",users);
        mv.addObject("t",t);
        mv.addObject("real",real);


        mv.setViewName("common/ht");

        return  mv;
    }


    //我的优惠
    @RequestMapping("/coupon")
    public String toCoupon(){
        return "account/coupon";
    }

    //获取我的优惠
    @RequestMapping("/getcoupon")
    @ResponseBody
    public Map getCoupon(HttpSession session){
        Map map=new HashMap();
        myusers user=(myusers) session.getAttribute("user");
        if(user!=null){
            //获取红包列表
            List l1=acc.selSomething("red_envelopes",
                    "user_id="+user.getUid());
            //获取增利券列表
            List l2=acc.selSomething("profit_increase",
                    "user_id="+user.getUid());
            map.put("l1",l1);
            map.put("l2",l2);
        }
        System.out.println(map);
        return map;
    }
    //我的优惠需要的一些信息
    @RequestMapping("/couponsome")
    @ResponseBody
    public JSONObject couponsome(Integer uid){
        JSONObject json=new JSONObject();
        myusers users=acc.seluserbyid(uid);
        //判断是否绑定银行卡
        if(users.getRealname().equals("false")){//未绑卡
            json.put("bank","false");
        }else{
            //表示以实名认证（去数据库查询实名认证表是否还存在银行卡号）
            //根据用户表uid查询实名认证表
            real_name real=acc.selrealbyuid(uid);
            if (real.getBankcard()==null||real.getBankcard().equals("")) {
                //表示不存在银行卡号
                json.put("bank","false");
            }else {
                json.put("bank","true");
            }
        }
        //根据uid 查找今天的签到积分
        Date jf1=new Date();
        DateFormat jf2= new SimpleDateFormat("yyyy-MM-dd");
        String jfdate=jf2.format(jf1);
        integral ins=acc.seljfcheck(uid,jfdate);
        System.out.println("判断的结果是："+ins);
        if(ins==null){
            json.put("res","1");
            //表示没有签到

        }else{//表示已经签到
            json.put("res","2");
        }

        return json;
    }
    //充值需要的验证信息
    @RequestMapping("/topayment")
    @ResponseBody
    public JSONObject topayment(Integer uid){
        JSONObject json=new JSONObject();
        //根据用户表uid查询实名认证表
        real_name real=acc.selrealbyuid(uid);
        json.put("real",real);
        return json;
    }


    //个人账户充值
    @RequestMapping("/paymentadd")
    @ResponseBody
    public JSONObject paymentadd(Integer uid,String kyye,String money){
        JSONObject json =new JSONObject();
        //根据uid查个人账户表
        accounts accounts=acc.selaccountsbyuid(uid);
        Float moneys=Float.parseFloat(money);//充值的金额
        Float kyyes=(moneys+accounts.getKyye());//可用余额
        System.out.println("可用余额="+kyyes);
        //修改个人账户的可用余额 (和总资产)
        Float summoney=(accounts.getCountmoney()+moneys);
        acc.updacc(uid,summoney,kyyes);

        //资金记录表添加一条记录
        record re=new record();
        re.setUid(uid);

        Date data =new Date();
        DateFormat dateFormat2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date=dateFormat2.format(data);
        re.setRtime(date);//时间
        re.setRtype("3");//（1：投资，2：奖励，3：充值，4；体现，5：申请体现）
        re.setRmoney(moneys);//操作金额
        re.setKyye(kyyes);
        re.setBzxx("账户充值");
        //保存到数据库
        acc.addrecord(re);
        json.put("msg","充值成功");
        return json;

    }

    //账户提现
    @RequestMapping("/paymentreduce")
    @ResponseBody
    public JSONObject paymentreduce(Integer uid,String money){
        System.out.println("账户体现进来了");
        JSONObject json=new JSONObject();
        //根据uid查个人账户表
        accounts accounts=acc.selaccountsbyuid(uid);
        Float moneys=Float.parseFloat(money);//体现的金额
        moneys=moneys+1;//体现手续费1远
        Float kyyes=(accounts.getKyye()-moneys);//可用余额
        System.out.println("可用余额="+kyyes);
        //修改个人账户的可用余额 (和总资产)
        Float summoney=(accounts.getCountmoney()-moneys);
        acc.updacc(uid,summoney,kyyes);

        //资金记录表添加一条记录
        record re=new record();
        re.setUid(uid);
        Date data =new Date();
        DateFormat dateFormat2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date=dateFormat2.format(data);
        re.setRtime(date);//时间
        re.setRtype("5");//（1：投资，2：奖励，3：充值，4；体现，5：申请体现）
        re.setRmoney((moneys-1));//操作金额
        re.setKyye((kyyes+1));
        re.setBzxx("账户申请提现");
        //保存到数据库
        acc.addrecord(re);
        //资金记录表添加一条记录
        record re1=new record();
        re1.setUid(uid);
        Date data1 =new Date();
        DateFormat dateFormat3 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date1=dateFormat3.format(data1);
        re1.setRtime(date1);//时间
        re1.setRtype("4");//（1：投资，2：奖励，3：充值，4；体现，5：申请体现）
        re1.setRmoney(moneys);//操作金额
        re1.setKyye(kyyes);
        re1.setBzxx("账户提现");
        //保存到数据库
        acc.addrecord(re1);
        json.put("msg","提交申请成功");

        return json;
    }

    //去我的好友列表
    @RequestMapping("/tofriend")
    public ModelAndView tofriend(Integer uid){
        ModelAndView mv=new ModelAndView();
        myusers users=acc.seluserbyid(uid);
        //判断是否绑定银行卡
        if(users.getRealname().equals("false")){//未绑卡
            mv.addObject("bank","false");
        }else{
            //表示以实名认证（去数据库查询实名认证表是否还存在银行卡号）
            //根据用户表uid查询实名认证表
            real_name real=acc.selrealbyuid(uid);
            if (real.getBankcard()==null||real.getBankcard().equals("")) {
                //表示不存在银行卡号
                mv.addObject("bank","false");
            }else {
                mv.addObject("bank","true");
            }
        }
        //根据uid 查找今天的签到积分
        Date jf1=new Date();
        DateFormat jf2= new SimpleDateFormat("yyyy-MM-dd");
        String jfdate=jf2.format(jf1);
        integral ins=acc.seljfcheck(uid,jfdate);
        System.out.println("判断的结果是："+ins);
        if(ins==null){
            mv.addObject("res","1");
            //表示没有签到

        }else{//表示已经签到
            mv.addObject("res","2");
        }
        //查找好友表
        List fr=acc.selfiriend(uid);
        mv.addObject("fr",fr);
        mv.addObject("user",users);
        mv.setViewName("account/friendship");
        return mv;
    }


    //退出登录
    @RequestMapping("outlogin")
    public  String outlongin(HttpSession session){

        session.removeAttribute("user");
        System.out.println("退出了");
        return  "redirect:/t2/test";
    }

    //签到领积分
    @RequestMapping("/addjf")
    @ResponseBody
    public JSONObject addjf(Integer uid){
        JSONObject json=new JSONObject();
        Date date=new Date();
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date1=dateFormat.format(date);
        integral jf=new integral();
        jf.setUid(uid);
        jf.setTimes(date1);
        jf.setJfz(10);
        jf.setJystate("2");
        jf.setJytype("每日签到");
        //保存到积分记录表
        acc.addpoints(jf);

        //修改用户的可用积分
        myusers users=acc.seluserbyid(uid);
        int point=users.getPoint();
        point=point+10;
        acc.updpiont(uid,point);
       json.put("ss","签到成功！");
        return json;
    }

    //添加联系人
    @RequestMapping("/lxradd")
    @ResponseBody
    public JSONObject lxradd(urgentusers ur){
        System.out.println("联系人添加进来了");
        System.out.println("电话="+ur.getPhonenumber()+"姓名="+ur.getUrname());
        JSONObject json=new JSONObject();
        //保存到数据库
        System.out.println(ur);
        acc.addlxr(ur);
        //修改用户状态
        String state="2";
        acc.upduserlxr(ur.getUid(),state);
        json.put("mes","添加成功");
        return json;
    }

    //添加邮箱
    @RequestMapping("/emaladd")
    @ResponseBody
    public JSONObject emaladd(Integer uid,String email){
        System.out.println("邮箱添加或修改进来了");
        JSONObject json=new JSONObject();
        acc.updemail(uid,email);

        json.put("mes","添加成功");
        return json;
    }

    //修改密码
    @RequestMapping("/uploginpwd")
    @ResponseBody
    public JSONObject uploginpwd(Integer uid,String loginpwd){
        System.out.println("登入密码修改进来了");
        JSONObject json=new JSONObject();
        acc.updloginpwd(uid,loginpwd);
        json.put("mes","修改成功");
        return json;
    }

}
