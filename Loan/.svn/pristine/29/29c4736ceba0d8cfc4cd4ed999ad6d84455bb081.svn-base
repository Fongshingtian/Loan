package com.ht.dao;

import com.ht.bean.Pager;
import com.ht.bean.product_induce;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface ProductInduceDao {
    //查询贷款产品表 分页查询
    List<product_induce> selpro(@Param("pro")product_induce pro,@Param("beginIndex")Integer beginIndex,@Param("pageCount")Integer pageCount);

    //查询贷款产品表
    List<product_induce> prolist();

    //添加产品
    void addpro(product_induce product_induce);

    //根据id查询产品
    product_induce selbyid(@Param("pid")Integer pid);

    //修改产品
    void updpro(@Param("product_induce")product_induce product_induce);

    //删除
    void delprobyid(@Param("pid")Integer pid);

    //筛选字段查询
    public List<product_induce> selplistbuselect();

    //查询产品总条数
    //@Select("select count(*) from product_induce")
     public Integer prototalRow();
}
