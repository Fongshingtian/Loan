package com.ht.service;

import com.ht.bean.*;

import java.util.List;

public interface IMyusersService {
    public List<myusers> listall(myusers user,Integer start,Integer limit);

    //查询用户总条数
    public Integer seltotal();

    public void deluser(Integer uid);


    //查询所有优惠
    public List<discounts> listAll(Integer start, Integer total);

    //查询优惠劵总条数
    public Integer selTotal();

    //添加红包优惠劵
    public void addyhj(discounts dis);

    //根据id查询红包优惠劵
    public discounts selByDid(Integer did);

    //修改红包优惠劵
    public void updyhj(discounts discounts);

    public void delByid(Integer did);

    /**
     * 查询紧急联系人
     */
    public List<urgentusers> urgentList(Integer start, Integer total);

    //查询紧急联系人总条数
    public Integer lxrcount();

    /**
     * 查询账户表
     */
    public List<accounts> accountsList(Integer start,Integer total);

    //查询账户总条数
    public Integer AccountRows();

    /**
     * 查询资金记录表
     */
    public List<record> recordlist(Integer start,Integer total);

    //查询账户总条数
    public Integer recordRows();


    /**
     * 查询积分历史记录表
     * @param start
     * @param total
     * @return
     */
    public List<integral> integrallist(Integer start,Integer total);

    //积分历史记录总条数
    public Integer integralRows();

    /**
     * 查询实名认证（银行卡管理）
     * @return
     */
    public List<real_name> selreal_name(Integer start,Integer total);

    //查询银行卡总条数
    public Integer yhkrows();

    //添加银行卡
    public void addrealname(real_name realName);

    //根据id查询银行卡信息
    public real_name selByRid(Integer rid);

    //修改银行卡信息
    public void updyhk(real_name realName);

    //删除银行卡
    public void delyhk(Integer rid);

    /**
     * 消息
     * @param start
     * @param total
     * @return
     */
    public List<messge> selMessge(Integer start,Integer total);

    public Integer messgeRows();

    public void addMessage(messge messge);

    public messge selByMid(Integer mid);

    public void updmessge(messge messge);

    public void delmessge(Integer mid);

    /**
     * 好友
     * @param start
     * @param total
     * @return
     */
    public List<friend> FriendList(Integer start,Integer total);

    public Integer friendrows();

    /**
     * 好友赚取记录
     * @param start
     * @param total
     * @return
     */
    public List<friendget> selfriendget(Integer start,Integer total);

    public Integer zqjltotalrows();

    /**
     * 优惠表与用户表关联的中间表
     * @param start
     * @param total
     * @return
     */
    public List<middlecount> middlelist(Integer start,Integer total);

    public Integer middleRows();

}
