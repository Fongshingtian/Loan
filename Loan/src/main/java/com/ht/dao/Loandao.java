package com.ht.dao;

import com.ht.bean.Loan;
import com.ht.bean.Mx;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @ClassName:
 * @Description:
 * @author:
 * @version:
 * @Date:
 */
public interface Loandao {
     //添加贷款申请
     public void addloan(Loan loan );
     //查询有没有申请过贷款s
     public List<Loan> selesfz(String sfz);
     //查询进度
     public List<Loan> seleloanjd(Loan loan);
     //根据id查询申请表
     public Loan selebyid(String did);

     //添加申请明细

     public void  addMx(Mx mx);


       //根据申请表id查询明细表

     public Mx selelmxbuyid(Integer id);

     //申请放款
     public  void  updatestatus(@Param("status") Integer status,@Param("did") Integer id);

}
