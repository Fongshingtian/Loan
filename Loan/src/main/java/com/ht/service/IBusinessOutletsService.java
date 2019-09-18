package com.ht.service;

import com.ht.bean.BusinessOutlets;
import com.ht.bean.OnlineBooking;
import com.ht.bean.product_induce;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

public interface IBusinessOutletsService {
    //获得所有网点所在省/市
    List<Map> getProvince();

    /**
     * 分页获得网点
     * @param bo 内存有省份/城市筛选条件
     * @param start 起始位置
     * @param limit 每页数据条数
     * @return 营业网点
     */
    List<BusinessOutlets> getOutlets(@Param("bo") BusinessOutlets bo,
                                     @Param("start") Integer start,
                                     @Param("limit") Integer limit);

    //获得<分页获得网点>总数据条数
    Integer getOutletsRows(@Param("bo") BusinessOutlets bo);

    //获得所有产品
    List<product_induce> getProduct();

    //根据Id获得网点
    BusinessOutlets getOutletById(@Param("oid")int oid);

    //添加在线预约数据
    void addOnlineBooking(@Param("ob") OnlineBooking ob);

    //添加营业网点
    void outletAdd(@Param("bo") BusinessOutlets bo);

    //修改营业网点
    void outletUpd(@Param("bo") BusinessOutlets bo);

    //删除营业网点
    void outletDel(@Param("id") Integer id);

    //获得在线预约表 分页
    List<OnlineBooking> getOnlineBooking(@Param("start") Integer start,
                                           @Param("limit") Integer limit);

    //获得在线预约总数据条数
    Integer getOnlineBookingRows();
}
