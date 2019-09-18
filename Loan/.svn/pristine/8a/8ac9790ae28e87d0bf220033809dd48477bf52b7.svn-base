package com.ht.service.impl;

import com.ht.bean.*;
import com.ht.dao.VipCenterDao;
import com.ht.service.IVipCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
@Transactional
public class VipCenterImpl implements IVipCenterService {

    @Autowired
    private VipCenterDao vcd;

    @Override
    //分页获取积分商品
    public List<PointMall> getPointMall(Integer start, Integer limit) {
        return vcd.getPointMall(start,limit);
    }


    //获得总行数
    @Override
    public int rows(){
        return vcd.rows();
    };


    //根据ID获取单个商品
    @Override
   public PointMall getPointMallById(int id){
        return vcd.getPointMallById(id);
    };

    //查询成长任务获取完成状态
    @Override
    public Task getTaskByUser(myusers user) {
        return vcd.getTaskByUser(user);
    }

    //查询成长经历生成list
    @Override
    public List<GrowthValue> getGrowthValueByUser(int userId, Integer start, Integer limit) {
        return vcd.getGrowthValueByUser(userId,start,limit);
    }

    //查询成长经历生成list获取总条数
    @Override
    public int getGrowthValueByUserRows(int userId) {
        return vcd.getGrowthValueByUserRows(userId);
    }

    //添加成长经历记录
    @Override
    public void addGrowthValue(GrowthValue g) {
        vcd.addGrowthValue(g);
    }

    //添加用户成长值
    @Override
    public void updGrowthValueByUser(myusers u, Integer value) {
        vcd.updGrowthValueByUser(u,value);
    }

    //更改成长任务完成状态
    @Override
    public void updTask(Task t) {
        vcd.updTask(t);
    }
    //积分商城兑换信息添加
    @Override
    public void exchangeAdd(MallExchange e) {
        vcd.exchangeAdd(e);
    }

    //用户兑换商品之后刷新用户的积分（刷新session）
    @Override
    public void updUserPoint(int uid, int mid) {
        vcd.updUserPoint(uid,mid);
    }

    //用户兑换商品后所兑换的商品库存减1
    @Override
    public void updMallStock(int mid) {
        vcd.updMallStock(mid);
    }

    //兑换商品之后记录至数据库
    @Override
    public void insertIntegral(integral i) {
        vcd.insertIntegral(i);
    }

    //每月1号重置用户每月任务
    @Override
    public void resetUserMonthlyTask() {
        vcd.resetUserMonthlyTask();
    }

    //更新用户投资后获得积分
    @Override
    public void updPointByBid(Integer uid, Integer point) {
        vcd.updPointByBid(uid,point);
    }

    @Override
    public List<Map> getDataList(String tableName,Integer start, Integer limit) {
        return vcd.getDataList(tableName,start,limit);
    }

    @Override
    public Integer getDataListRows(String tableName) {
        return vcd.getDataListRows(tableName);
    }

    @Override
    public void pointMallAdd(PointMall mall) {
        vcd.pointMallAdd(mall);
    }

    @Override
    public void pointMallUpd(PointMall mall) {
        vcd.pointMallUpd(mall);
    }

    @Override
    public Integer validateUserLimit(Integer uid, Integer mid) {
        return vcd.validateUserLimit(uid,mid);
    }

    @Override
    public int selSomethingGetCount(String conditional,String tableName) {
        return vcd.selSomethingGetCount(conditional,tableName);
    }

    @Override
    public void insertSomething(String tableName, String values) {
        vcd.insertSomething(tableName,values);
    }

    @Override
    public List<Map> selSomething(String column, String tableName, String conditional) {
        return vcd.selSomething(column,tableName,conditional);
    }

    @Override
    public void updSomething(String tableName, String values, String conditional) {
        vcd.updSomething(tableName,values,conditional);
    }

    @Override
    public RedEnvelopes selRedEnvelopesById(Integer id) {
        return vcd.selRedEnvelopesById(id);
    }
}
