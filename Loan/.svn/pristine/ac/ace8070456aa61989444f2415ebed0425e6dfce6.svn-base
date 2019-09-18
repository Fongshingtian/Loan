package com.ht.service.impl;

import com.ht.bean.Loan;
import com.ht.bean.Mx;
import com.ht.bean.product_induce;
import com.ht.dao.Ht_LoanDao;
import com.ht.service.Ht_LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Ht_LoanServiceimpl implements Ht_LoanService {
    @Autowired
    private Ht_LoanDao htloan;

    @Override
    //查询新申请的借贷
    public List SelLoan(Integer status) {
        return htloan.hselloan(status);
    }

    @Override
    public void dycsq(Integer status, String sm, Integer id) {
        htloan.dycsb(id,sm,status);
    }

    @Override
    public List Historysp() {
        return htloan.sphistory();
    }

    @Override
    public Loan Selloanbyid(Integer id) {
        return htloan.selbyloan(id);
    }

    @Override
    public product_induce selproducts(Integer id) {
        return htloan.selproduct(id);
    }

    @Override
    public Mx SelTwoSq(Integer id) {
        return htloan.seltwosq(id);
    }

    @Override
    public void twosq(Integer status, String sm, Integer id, String money) {
       htloan.decsq(id,sm,status,money);
    }

    @Override
    public void uptemx(Integer mid, String qytime, String ll) {
        htloan.uptemx(mid,qytime,ll);
    }


}
