package com.ht.service;

import com.ht.bean.Loan;
import com.ht.bean.Mx;
import com.ht.bean.product_induce;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface Ht_LoanService {
    //查询新申请的借贷
    public List SelLoan(Integer status);
    //第一次申请失败，成功、第二次失败
    public void dycsq(Integer status ,String sm ,Integer id );
    //审批历史
    public  List Historysp();
    //查看借款详情
    public Loan Selloanbyid(Integer id);

    //查询贷款类型
    public product_induce selproducts(Integer id);
    //查询第二次申请的详情
    public Mx SelTwoSq(Integer id);

    //第二次申请失成功
    public void twosq(Integer status ,String sm ,Integer id ,String money);
    //给明细表添加利率和申请时间
    public void uptemx( Integer mid,  String qytime, String ll);
}
