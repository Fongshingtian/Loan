package com.ht.dao;

import com.ht.bean.Loan;
import com.ht.bean.Mx;
import com.ht.bean.product_induce;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface Ht_LoanDao {
    //查询新申请的借贷
    public List hselloan(Integer status);
    //第一次申请失败，成功、第二次失败
    public void dycsb(@Param("id") int id ,@Param("sm") String sm, @Param("status") Integer status);


    //第二次申请成功
    public void decsq(@Param("id") Integer id ,@Param("sm") String sm, @Param("status") Integer status,@Param("money") String money);

    //审批历史
    public  List sphistory();

    //查看借款详情
    public Loan selbyloan(Integer id);

    //查询贷款类型
    public product_induce selproduct(Integer id);

    //查询第二次申请的详细信息
    public Mx seltwosq(Integer id);

    //给明细表添加利率和申请时间
    public void uptemx(@Param("mid") Integer mid,@Param("qytime") String qytime,@Param("ll") String ll);
}
