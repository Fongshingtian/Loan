package com.ht.service;

import com.ht.bean.*;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * @ClassName:
 * @Description:
 * @author:
 * @version:
 * @Date:
 */
public interface IInvestServic {
    //查询所有招标工具
    public List<zbgj> selezbgj( Integer types);

    //查看招标详情
    public Map selezbgjson(Integer id);

    //查看一个标的所有期数
    public List selezbgjs(Integer s);

    //验证支付密码是否真确
    public real_name buyByuid(Integer suid, String password);

    //查询账户余额
    public accounts selByuid(Integer suid);

    //修改账户金额
    public void updcounts(Integer uid ,float countmoney ,float countbj, float countlx ,float djmoney ,float countsy ,float kyye);

    //修改投标的总金额
    public void updZbjgson(Integer sid, float money);

    //查询标的剩余金额
    public zbgjson selzbgjsons (Integer id);


    //添加投标记入
    public void updls(Integer zid, Integer uid,String uname ,String  money ,String times);

    //查询投标历史
    public  List Sells(Integer zid);
    //添加我的投标记入表
    public void instmyt(Integer zid,Integer uid, String interest, String ckrate , String money, String periods , String sjmoney, String begintime,String endtime, Integer status);

    //查询是否为新手用户
    public Integer selMytbBuUid(Integer uid);

    //查询所有投标记入
    public List selmytbs();

    //查询用户表的推荐码
    public myusers selmyusers (Integer uid);

    //更改mytb状态
    public void updmytb(Integer bid,Integer status);

    //添加好友奖励表数据
    public void instfriends(String jltime, Float jlmoney,String jltype,String jlstate,String sendtime,String yqcoud);

    //添加资金流水记录
    public void Instrecord(Integer uid ,String rtime,String rtype,float rmoney,float kyye, String bzxx);

    //查询好友表数据
    public List selfriendgets();

    //根据好友邀请码查询用户
    public myusers selmys(String yqcoud);

    //添加邀请好友的钱
    public void updyqacc(Integer uid,float countmoney,float kyye,float Invitedsy,float countsy,float qtsy);

    //修改好友邀请表状态
    public void updfrinendgets (Integer fid ,String jlstate);

    //查询投标项目表  起始页，显示行数
    List SelloanS( Integer start, Integer cols);
    //查询总条数
    Integer SelLoanI();
    //查看申请详情
    public Map SelMx (Integer did);

    //查询已使用的红包
    List SelHongBao();

    //修改红包状态为2 已结算
    public void UpdRed(Integer id);

    //查询散标的总金额
    public scattered selscabyid(Integer id);

    //修改散标的剩余金额
   public  void updsca( Integer id,Integer money ,String amount);

}
