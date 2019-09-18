package com.ht.dao;

import com.ht.bean.*;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Update;

import java.util.List;
import java.util.Map;

/**
 * @ClassName:
 * @Description:
 * @author:
 * @version:
 * @Date:
 */
public interface InvestDao {
    //查询所有招标工具
    public List selezbgj(Integer types);

    //查看投标详情
    public Map selzbgjson(Integer id);

    //查询一个标 的所有期数
    public List selzbgjs(Integer s);
    //验证支付密码、
    public real_name buybyuid(@Param("suid") Integer suid , @Param("password") String password);

    //查询账户余额
    accounts selbyuid (@Param("uid") Integer suid);

    //修改账户金额
    void updaccounts(@Param("countmoney") float countmoney , @Param("countbj") float countbj ,@Param("countlx")float countlx,@Param("djmoney") float djmoney,@Param("countsy") float countsy,@Param("kyye") float kyye,@Param("uid")Integer uid);


    //修改投标的总金额
    void updzbgjson (@Param("sid") Integer sid, @Param("money") float money);

    //查询标的剩余金额
     zbgjson selzbgjsons(Integer id);

    //添加投标记入
    void updls(@Param("zid")Integer zid, @Param("uid")Integer uid,@Param("uname")String uname ,@Param("money")String  money ,@Param("times")String times);

    //查询投标历史
    List sells(Integer zid);

    //添加我的投标记入
    void instmyt(@Param("zid")Integer zid, @Param("uid")Integer uid, @Param("interest")String interest, @Param("ckrate")String ckrate , @Param("money")String money, @Param("periods")String periods , @Param("sjmoney")String sjmoney, @Param("begintime")String begintime, @Param("endtime")String endtime, @Param("status")Integer status);

    //查询是否为新手
    Integer mytbbyuid(Integer uid);

    //查询所有投标记入
    List selMytbs();

    //查询用户表 的推荐码
    myusers selmyusers(Integer uid);

    //更改mytb表的状态；
    void updmytb(@Param("bid") Integer bid ,@Param("status")Integer status);

    //添加好友邀请表记入
    void instfriend(@Param("jltime")String jltime,@Param("jlmoney")Float jlmoney,@Param("jltype")String jltype,@Param("jlstate")String jlstate,@Param("sendtime")String sendtime,@Param("yqcoud")String yqcoud);

    //添加资金流水记录
    void Instrecord(@Param("uid")Integer uid ,@Param("rtime")String rtime,@Param("rtype")String rtype,@Param("rmoney")float rmoney,@Param("kyye")float kyye,@Param("bzxx") String bzxx);

    //查询好友奖励表的数据
    List selfriendgets();

    //根据好友邀请码查询用户
    myusers selmys(String yqcoud );

    //添加邀请好友的钱
    void updyqacc(@Param("uid") Integer uid,@Param("countmoney")float countmoney,@Param("kyye")float kyye,@Param("Invitedsy")float Invitedsy,@Param("countsy")float countsy,@Param("qtsy")float qtsy);

    //修改好友邀请表状态为2
    void updfriendget(@Param("fid") Integer fid ,@Param("jlstate")String jlstate);

    //查询投标项目表  起始页，显示行数
    List SelloanS(@Param("start") Integer start,@Param("cols") Integer cols);
    //查询总条数
    Integer SelLoanI();

    //查看申请详情
    Map SelMx (Integer did);

    //查询已使用的红包
    List SelHongBao();

    //修改红包状态 为2 已结算
    void updred(Integer id);

    //查询散标的总资产
    scattered selscabyid(Integer id);

    //修改散标的剩余金额
    void updsca(@Param("id") Integer id, @Param("money") Integer money ,@Param("amount") String amount);
}
