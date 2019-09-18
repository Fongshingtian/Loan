package com.ht.service.impl;

import com.ht.bean.Loan;
import com.ht.bean.Mx;
import com.ht.dao.Loandao;
import com.ht.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @ClassName:
 * @Description:
 * @author:
 * @version:
 * @Date:
 */

@Service

public class LoanServiceImpl implements LoanService {

    @Autowired
    private Loandao loandao;

    public void addloan(Loan loan) {
        loandao.addloan(loan);
    }


    public List<Loan> selesfz(String sfz) {
        return loandao.selesfz(sfz);
    }

    @Override
    public List<Loan> seleloanjd(Loan loan) {
        return loandao.seleloanjd(loan);
    }

    @Override
    public Loan selebyid(String did) {
        return loandao.selebyid(did);
    }

    @Override
    public Mx selelmxbuyid(Integer id) {
        return loandao.selelmxbuyid(id);
    }

    @Override
    public void addMx(Mx mx) {
        loandao.addMx(mx);
    }

    @Override
    public void updatestatus(Integer status, Integer id) {
        loandao.updatestatus(status,id);
    }
}
