package com.ht.controller;

import com.ht.bean.discounts;
import com.ht.bean.messge;
import com.ht.bean.myusers;
import com.ht.service.IMyusersService;
import com.sun.org.apache.xpath.internal.operations.Mod;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
@RequestMapping("/myusers")
public class MyusersController {
    @Resource
    private IMyusersService is;

    /**
     * 个人账户查询 删除
     * @param user
     * @param currpage
     * @return
     */
    @RequestMapping("/list")
    public ModelAndView list(myusers user,Integer currpage){

        Integer limit=5;
        //用户总条数
        Integer rows=is.seltotal();
        System.out.println("总页数"+rows);

        //总页数
        Integer totalpage=(rows-1)/limit+1;

        //判断当前页的上限和下线
        if(currpage==null||currpage<1){
            currpage=1;
        }

        if (currpage>totalpage && totalpage!=0){
            currpage=totalpage;
        }

        //计算出起始位置
        Integer start=(currpage-1)*limit;
        System.out.println("起始页是 "+start);

        ModelAndView mv=new ModelAndView();
        mv.addObject("user",is.listall(user,start,limit));
        mv.addObject("currpage",currpage);
        mv.addObject("totalpage",totalpage);
        mv.addObject("rows",rows);
        mv.setViewName("users/userlist");
        return mv;
    }

    @RequestMapping("/del")
    public String del(Integer uid){
        is.deluser(uid);
        return "redirect:list";
    }


    /**
     * 优惠劵后台 增删改查
     */
    @RequestMapping("/yhjlist")
    public String yhjlist(Integer currpage, Model model){
        System.out.println("list进来了！！！");
        //每页行数
        Integer total=5;

        //总行数
        Integer rows=is.selTotal();
        System.out.println("总行数 "+rows);
        //总页数
        Integer totalpage=(rows-1)/total+1;

        if(currpage == null || currpage < 1){
            currpage=1;
        }

        if (currpage>totalpage && totalpage != 0) {
            currpage=totalpage;
        }

        Integer start=(currpage-1)*total;

        model.addAttribute("dis",is.listAll(start,total));
        model.addAttribute("currpage",currpage);
        model.addAttribute("totalpage",totalpage);
        model.addAttribute("rows",rows);
        return "users/yhjlist";

    }

    //去红包优惠劵添加页面
    @RequestMapping("/toaddyhj")
    public String toaddyhj(){
        return "users/yhjaddorupd";
    }

    //去修改
    @RequestMapping("/toupdyhj")
    public String toupdyhj(Model model,Integer did){
        discounts dis=is.selByDid(did);
        model.addAttribute("dis",dis);
        return "users/yhjaddorupd";
    }

    @RequestMapping("/addorupdyhj")
    public String addhbyhj(discounts dis){

        if (dis.getDid()!=null){//修改
            is.updyhj(dis);
        }else {//添加
            is.addyhj(dis);
        }
        return "redirect:yhjlist";
    }

    @RequestMapping("/delyhj")
    public String deluhj(Integer did){//删除
        is.delByid(did);
        return "redirect:yhjlist";
    }

    /**
     * 紧急联系人 查
     * @param currpage
     * @param model
     * @return
     */
    @RequestMapping("/urgentlist")
    public String urgentlist(Integer currpage,Model model){
        //每页行数
        Integer total=5;

        //总行数
        Integer rows=is.lxrcount();
        System.out.println("总行数 "+rows);
        //总页数
        Integer totalpage=(rows-1)/total+1;

        if(currpage == null || currpage < 1){
            currpage=1;
        }

        if (currpage>totalpage && totalpage != 0) {
            currpage=totalpage;
        }

        Integer start=(currpage-1)*total;

        model.addAttribute("urgent",is.urgentList(start,total));
        model.addAttribute("currpage",currpage);
        model.addAttribute("totalpage",totalpage);
        model.addAttribute("rows",rows);

        return "/users/urgentlist";

    }

    /**
     * 实名认证 （银行卡）查
     * @param currpage
     * @param model
     * @return
     */
    @RequestMapping("/yhklist")
    public String yhklist(Integer currpage,Model model){
        //每页行数
        Integer total=5;

        //总行数
        Integer rows=is.yhkrows();
        System.out.println("总行数 "+rows);
        //总页数
        Integer totalpage=(rows-1)/total+1;

        if(currpage == null || currpage < 1){
            currpage=1;
        }

        if (currpage>totalpage && totalpage != 0) {
            currpage=totalpage;
        }

        Integer start=(currpage-1)*total;

        model.addAttribute("yhk",is.selreal_name(start,total));
        model.addAttribute("currpage",currpage);
        model.addAttribute("totalpage",totalpage);
        model.addAttribute("rows",rows);
        return "/users/yhklist";
    }

    /**
     * 资金记录  查
     * @param currpage
     * @param model
     * @return
     */
    @RequestMapping("/recordlsit")
    public String recordlsit(Integer currpage, Model model){
        //每页行数
        Integer total=5;

        //总行数
        Integer rows=is.recordRows();
        System.out.println("总行数 "+rows);
        //总页数
        Integer totalpage=(rows-1)/total+1;

        if(currpage == null || currpage < 1){
            currpage=1;
        }

        if (currpage>totalpage && totalpage != 0) {
            currpage=totalpage;
        }

        Integer start=(currpage-1)*total;

        model.addAttribute("record",is.recordlist(start,total));
        model.addAttribute("currpage",currpage);
        model.addAttribute("totalpage",totalpage);
        model.addAttribute("rows",rows);
        return "/users/recordlist";
    }

    /**
     * 账户信息 查
     * @param currpage
     * @param model
     * @return
     */
    @RequestMapping("/accountlist")
    public String accountlist(Integer currpage,Model model){
        //每页行数
        Integer total=5;

        //总行数
        Integer rows=is.AccountRows();
        System.out.println("总行数 "+rows);
        //总页数
        Integer totalpage=(rows-1)/total+1;

        if(currpage == null || currpage < 1){
            currpage=1;
        }

        if (currpage>totalpage && totalpage != 0) {
            currpage=totalpage;
        }

        Integer start=(currpage-1)*total;

        model.addAttribute("account",is.accountsList(start,total));
        model.addAttribute("currpage",currpage);
        model.addAttribute("totalpage",totalpage);
        model.addAttribute("rows",rows);
        return "/users/accountlist";
    }

    /**
     * 积分历史记录
     * @param currpage
     * @param model
     * @return
     */
    @RequestMapping("/jflist")
    public String jflist(Integer currpage,Model model){
        //每页行数
        Integer total=5;

        //总行数
        Integer rows=is.integralRows();
        System.out.println("总行数 "+rows);
        //总页数
        Integer totalpage=(rows-1)/total+1;

        if(currpage == null || currpage < 1){
            currpage=1;
        }

        if (currpage>totalpage && totalpage != 0) {
            currpage=totalpage;
        }

        Integer start=(currpage-1)*total;

        model.addAttribute("integral",is.integrallist(start,total));
        model.addAttribute("currpage",currpage);
        model.addAttribute("totalpage",totalpage);
        model.addAttribute("rows",rows);
        return "/users/jflslist";
    }

    /**
     * 消息
     * @param currpage
     * @param model
     * @return
     */
    @RequestMapping("/messgelist")
    public String messgelist(Integer currpage,Model model){
        //每页行数
        Integer total=5;

        //总行数
        Integer rows=is.messgeRows();
        System.out.println("总行数 "+rows);
        //总页数
        Integer totalpage=(rows-1)/total+1;

        if(currpage == null || currpage < 1){
            currpage=1;
        }

        if (currpage>totalpage && totalpage != 0) {
            currpage=totalpage;
        }

        Integer start=(currpage-1)*total;

        model.addAttribute("messge",is.selMessge(start,total));
        model.addAttribute("currpage",currpage);
        model.addAttribute("totalpage",totalpage);
        model.addAttribute("rows",rows);
        return "/users/messagelist";
    }

    @RequestMapping("/toaddmessge")
    public String toaddmessge(){
        return "/users/addorupdmessge";
    }

    @RequestMapping("/toupdmessge")
    public String toupdmessge(Integer mid,Model model){
        messge msg=is.selByMid(mid);
        model.addAttribute("m",msg);
        return "/users/addorupdmessge";
    }

    @RequestMapping("/addorupdmsg")
    public String addorupdmsg(messge msg){
        System.out.println(msg);
        if (msg.getMid()!=null){//修改
            Date date=new Date();
            SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String sendtime=sdf.format(date);

            msg.setSendtime(sendtime);
            System.out.println("修改进来了");
            is.updmessge(msg);
        }else {//添加
            Date date=new Date();
            SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String sendtime=sdf.format(date);

            msg.setSendtime(sendtime);
            System.out.println("添加进来了");
            is.addMessage(msg);
        }
        return "redirect:messgelist";
    }

    @RequestMapping("/delmessge")
    public String delmessge(Integer mid){
        is.delmessge(mid);
        return "redirect:messgelist";
    }

    /**
     * 好友
     * @param currpage
     * @param model
     * @return
     */
    @RequestMapping("/friendlist")
    public String friendlist(Integer currpage,Model model){
        //每页行数
        Integer total=5;

        //总行数
        Integer rows=is.friendrows();
        System.out.println("总行数 "+rows);
        //总页数
        Integer totalpage=(rows-1)/total+1;

        if(currpage == null || currpage < 1 || currpage.equals("")){
            currpage=1;
        }

        if (currpage>totalpage && totalpage != 0) {
            currpage=totalpage;
        }

        Integer start=(currpage-1)*total;

        model.addAttribute("friend",is.FriendList(start,total));
        model.addAttribute("currpage",currpage);
        model.addAttribute("totalpage",totalpage);
        model.addAttribute("rows",rows);
        return "/users/friendlist";
    }

    /**
     * 好友赚取记录
     * @param currpage
     * @param model
     * @return
     */
    @RequestMapping("/friendgetlist")
    public String friendgetlist(Integer currpage,Model model){
        //每页行数
        Integer total=5;

        //总行数
        Integer rows=is.zqjltotalrows();
        System.out.println("总行数 "+rows);
        //总页数
        Integer totalpage=(rows-1)/total+1;

        if(currpage == null || currpage < 1 || currpage.equals("")){
            currpage=1;
        }

        if (currpage>totalpage && totalpage != 0) {
            currpage=totalpage;
        }

        Integer start=(currpage-1)*total;

        model.addAttribute("fget",is.selfriendget(start,total));
        model.addAttribute("currpage",currpage);
        model.addAttribute("totalpage",totalpage);
        model.addAttribute("rows",rows);
        return "/users/friendgetlist";
    }

    @RequestMapping("/middlecount")
    public String middlecount(Integer currpage,Model model){
        //每页行数
        Integer total=5;

        //总行数
        Integer rows=is.middleRows();
        System.out.println("总行数 "+rows);
        //总页数
        Integer totalpage=(rows-1)/total+1;

        if(currpage == null || currpage < 1 || currpage.equals("")){
            currpage=1;
        }

        if (currpage>totalpage && totalpage != 0) {
            currpage=totalpage;
        }

        Integer start=(currpage-1)*total;

        model.addAttribute("middle",is.middlelist(start,total));
        model.addAttribute("currpage",currpage);
        model.addAttribute("totalpage",totalpage);
        model.addAttribute("rows",rows);
        return "/users/messagelist";
    }

}
