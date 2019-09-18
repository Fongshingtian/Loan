package com.ht.service;

import com.ht.bean.*;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

public interface IVipCenterService {
    //分页获取积分商品
    List<PointMall> getPointMall(@Param("start") Integer start, @Param("limit") Integer limit);

    //获得总行数
    int rows();

    //根据ID获取单个商品
    PointMall getPointMallById(@Param("id")int id);

    //查询成长任务获取完成状态
    Task getTaskByUser(@Param("user") myusers user);

    //查询成长经历生成list
    List<GrowthValue> getGrowthValueByUser(@Param("userId")int userId, @Param("start")Integer start, @Param("limit")Integer limit);

    //查询成长经历生成list获取总条数
    int getGrowthValueByUserRows(@Param("userId")int userId);

    //添加成长经历记录
    void addGrowthValue(@Param("g")GrowthValue g);

    //添加用户成长值
    void updGrowthValueByUser(@Param("u")myusers u,@Param("value")Integer value);

    //更改成长任务完成状态
    void updTask(@Param("t")Task t);

    //积分商城兑换信息添加
    void exchangeAdd(@Param("e") MallExchange e);

    //用户兑换商品之后刷新用户的积分（刷新session）
    void updUserPoint(@Param("uid")int uid,@Param("mid")int mid);

    //用户兑换商品后所兑换的商品库存减1
    void updMallStock(@Param("mid")int mid);

    //兑换商品之后记录至数据库
    void insertIntegral(@Param("i")integral i);

    //每月1号重置用户每月任务
    void resetUserMonthlyTask();

    //更新用户投资后获得积分
    void updPointByBid(@Param("uid")Integer uid,@Param("point")Integer point);

    //根据表名分页获得列表数据
    List<Map> getDataList(@Param("tableName")String tableName,@Param("start")Integer start, @Param("limit")Integer limit);

    //根据表名获得列表数据总条数
    Integer getDataListRows(@Param("tableName")String tableName);

    //积分商城商品添加
    void pointMallAdd(@Param("mall") PointMall mall);

    //积分商城商品修改
    void pointMallUpd(@Param("mall") PointMall mall);

    //用户所要兑换的商品是否超出限制
    Integer validateUserLimit(@Param("uid")Integer uid,@Param("mid")Integer mid);

    //查询某些东西获得count
    int selSomethingGetCount(@Param("conditional")String conditional,@Param("tableName")String tableName);

    //添加一些东西
    void  insertSomething(@Param("tableName")String tableName,@Param("values") String values);

    //查询的到一些东西
    List<Map> selSomething(@Param("column") String column,
                           @Param("tableName") String tableName,
                           @Param("conditional") String conditional);

    //更新一些东西
    void updSomething(@Param("tableName") String tableName,
                      @Param("values") String values,
                      @Param("conditional") String conditional);

    //根据Id获得红包
    RedEnvelopes selRedEnvelopesById(@Param("id")Integer id);
}
