package com.ht.dao;

import com.ht.bean.*;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MyusersDao {
    //查询所有用户
    List<myusers> selall(@Param("user")myusers user,@Param("start")Integer start,@Param("limit")Integer limit);

    //查询用户总条数
    public Integer selrows();

    //删除用户
    void delbyid(Integer uid);

    /**
     * 优惠劵增删改查
     */
    //查询红包优惠劵
    List<discounts> selAll(@Param("start")Integer start, @Param("total")Integer total);

    //查询红包优惠劵总条数
    public Integer selRows();

    //添加红包优惠劵
    void addyb(discounts dis);

    //根据id查询红包优惠劵
    discounts selbydid(@Param("did")Integer did);

    //修改红包优惠劵
    void updateyhj(@Param("discounts")discounts discounts);

    //根据id删除
    void delbyId(@Param("did")Integer did);

    /**
     * 查询紧急联系人表
     */
    List<urgentusers> selurgent(@Param("start")Integer start, @Param("total")Integer total);

    //紧急联系人总条数
    public  Integer Urgentrows();

    /**
     * 查询账户表
     */
    List<accounts> selaccounts(@Param("start")Integer start, @Param("total")Integer total);

    //查询账户总条数
    public Integer accountsRows();

    /**
     * 查询资金记录表
     */
    List<record> selrecord(@Param("start")Integer start,@Param("total")Integer total);

    //查询资金记录总条数
    public Integer recordCount();

    /**
     * 查询积分历史记录表
     * @return
     */
    List<integral> selintegral(@Param("start")Integer start,@Param("total")Integer total);

    //积分历史记录总条数
    public Integer integralcount();

    /**
     * 实名认证  （银行卡管理）
     * @return
     */
    List<real_name> selyhk(@Param("start")Integer start, @Param("total")Integer total);

    //查询银行卡总条数
    public Integer yhktotal();

    //添加银行卡
    void addyhk(real_name realName);

    //根据id查询银行卡信息
    real_name selbyrid(@Param("rid")Integer rid);

    //修改银行卡信息
    void updatayhk(real_name real_name);

    //删除银行卡
    void deleteyhk(@Param("rid")Integer rid);

    /**
     * 消息
     * @param start
     * @param total
     * @return
     */
    List<messge> selmessage(@Param("start")Integer start, @Param("total")Integer total);

    //查询消息总条数
    public Integer messgeCount();

    //添加消息
    void addmessge(@Param("messge")messge messge);

    //根据id查询消息
    public messge selbymid(@Param("mid")Integer mid);

    //修改
    void updatamessge(@Param("messge")messge messge);

    //删除消息
    void deletemessge(@Param("mid")Integer mid);

    /**
     * 好友
     * @param start
     * @param total
     * @return
     */
    //查询好友表
    List<friend> selfriend(@Param("start")Integer start, @Param("total")Integer total);

    public Integer ftotalRows();

    /**
     * 好友赚取记录
     * @param start
     * @param total
     * @return
     */
    List<friendget> selzqjl(@Param("start")Integer start, @Param("total")Integer total);

    public Integer zqjlrows();

    /**
     * 优惠表与用户表关联的中间表
     * @param start
     * @param total
     * @return
     */
    List<middlecount> selmiddle(@Param("start")Integer start, @Param("total")Integer total);

    public Integer middletotal();

}
