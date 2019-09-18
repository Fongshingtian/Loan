package com.ht.service.impl;

import com.ht.bean.BusinessOutlets;
import com.ht.bean.OnlineBooking;
import com.ht.bean.product_induce;
import com.ht.dao.BusinessOutletsDao;
import com.ht.service.IBusinessOutletsService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class BusinessOutletsImpl implements IBusinessOutletsService {

    @Resource
    private BusinessOutletsDao bod;

    @Override
    public List getProvince() {
        return bod.getProvince();
    }

    @Override
    public List<BusinessOutlets> getOutlets(BusinessOutlets bo, Integer start, Integer limit) {
        return bod.getOutlets(bo,start,limit);
    }

    @Override
    public Integer getOutletsRows(BusinessOutlets bo) {
        return bod.getOutletsRows(bo);
    }

    @Override
    public List<product_induce> getProduct() {
        return bod.getProduct();
    }

    @Override
    public BusinessOutlets getOutletById(int oid) {
        return bod.getOutletById(oid);
    }

    @Override
    public void addOnlineBooking(OnlineBooking ob) {
        bod.addOnlineBooking(ob);
    }

    @Override
    public void outletAdd(BusinessOutlets bo) {
        bod.outletAdd(bo);
    }

    @Override
    public void outletUpd(BusinessOutlets bo) {
        bod.outletUpd(bo);
    }

    @Override
    public void outletDel(Integer id) {
        bod.outletDel(id);
    }

    //获得在线预约表 分页
    @Override
    public List<OnlineBooking> getOnlineBooking(Integer start, Integer limit) {
        return bod.getOnlineBooking(start,limit);
    }
    //获得在线预约总数据条数
    @Override
    public Integer getOnlineBookingRows() {
        return bod.getOnlineBookingRows();
    }
}
