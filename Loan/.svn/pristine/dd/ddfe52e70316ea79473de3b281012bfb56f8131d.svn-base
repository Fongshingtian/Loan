package com.ht.service.impl;

import com.ht.bean.*;
import com.ht.dao.AccountDao;
import com.ht.service.Accountservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * @company 宏图
 * @User 张冬招
 * @create 2019-04-24 -19:25
 */
@Service
public class Accountserviceimpl implements Accountservice {
    @Autowired
    private AccountDao accountDao;

    @Override
    public int useradd(myusers myusers) {
        return accountDao.addmyusers(myusers);
    }

    @Override
    public List<myusers> selphones() {
        return accountDao.selphone();
    }

    @Override
    public void addaccounts(accounts accounts) {
        accountDao.addaccounts(accounts);
    }

    @Override
    public myusers loginsel(String phone, String loginpwd) {
        return accountDao.loginsel(phone, loginpwd);
    }

    @Override
    public myusers seluserbyid(Integer uid) {
        return accountDao.seluserbyid(uid);
    }

    @Override
    public accounts selaccountsbyuid(Integer uid) {
        return accountDao.selaccountbyuid(uid);
    }

    @Override
    public real_name selrealbyuid(Integer uid) {
        return accountDao.selrealbyuid(uid);
    }

    @Override
    public List selpoint(Integer uid) {
        return accountDao.selpoint(uid);
    }

    @Override
    public List selpointtwos(Integer uid, String begintime, String endtime) {
        return accountDao.selpointtwo(uid,begintime,endtime);
    }

    @Override
    public List selpointthrees(Integer uid, String begintime, String endtime, String changetype) {
        return accountDao.selpointthree(uid,begintime,endtime,changetype);
    }

    @Override
    public void addpoints(integral integral) {
        accountDao.addpoint(integral);
    }

    @Override
    public Integer selpointscount(Integer uid) {
        System.out.println("结果是"+accountDao.selpointscount(uid));
        return accountDao.selpointscount(uid);
    }

    @Override
    public Integer selpointsmonth(Integer uid, String date1) {
        System.out.println("这个月的积分获得是："+accountDao.selpointsmonth(uid,date1));
        return accountDao.selpointsmonth(uid,date1);
    }

    @Override
    public List selcodemy(Integer uid) {
        return accountDao.selcodemy(uid);
    }

    @Override
    public void updatemycoe(Integer uid, String code) {
        accountDao.updmycode(uid,code);
    }

    @Override
    public myusers selmycode(String code) {
        return accountDao.selmycode(code);
    }

    @Override
    public void addfriend(friend ff) {
        accountDao.addfriend(ff);
    }

    @Override
    public void authentication(real_name r) {
        accountDao.authentication(r);
    }

    @Override
    public void updSomething(String tableName, String columnAValue, String requirement) {
        accountDao.updSomething(tableName,columnAValue,requirement);
    }

    @Override
    public void insertTask(Integer id) {
        accountDao.insertTask(id);
    }

    @Override
    public void updidpwd(Integer uid, String idpwd) {
        accountDao.updidpwd(uid,idpwd);
    }

    @Override
    public List selrecord(Integer uid) {
        return accountDao.selrecord(uid);
    }

    @Override
    public List selrecordbypage(Integer uid, Integer beginIndex, Integer pageCount) {
        return accountDao.selrecordbypage(uid,beginIndex,pageCount);
    }

    @Override
    public List selrecordbypageandtype(Integer uid, String starttime,String endtime,String rtype, Integer beginIndex, Integer pageCount) {
        return accountDao.selrecordbypageandtype(uid,starttime,endtime,rtype,beginIndex,pageCount);
    }

    @Override
    public List selrecordbypageandtime(Integer uid, String starttime, String endtime, Integer beginIndex, Integer pageCount) {
        return accountDao.selrecordbypageandtime(uid,starttime,endtime,beginIndex,pageCount);
    }

    @Override
    public List<mytb> selectbyuserid(Integer id) {
       return accountDao.selectbyuserid(id);
    }

    @Override
    public void insertSomething(String tableName, String values) {
        accountDao.insertSomething(tableName,values);
    }

    @Override
    public void addmessage(messge me) {
        accountDao.addmessage(me);
    }

    @Override
    public void updacc(Integer uid, Float countmoney, Float kyye) {
        accountDao.updacc(uid,countmoney,kyye);
    }

    @Override
    public void addrecord(record re) {
        accountDao.addrecord(re);
    }

    @Override
    public String seltimebefore() {
        return accountDao.seltimebefore();
    }

    @Override
    public List selmessgelist(Integer uid, String times) {
        return accountDao.selmessgelist(uid,times);
    }

    @Override
    public List selmessgelistbypage(Integer uid, String times, Integer beginIndex, Integer pageCount) {
        return accountDao.selmessgelistbypage(uid,times,beginIndex,pageCount);
    }

    @Override
    public void updmesgmsatte(Integer mid, String mstate) {
        accountDao.updmesgmsatte(mid,mstate);
    }

    @Override
    public void dellmesg(String ids) {
        accountDao.dellmesg(ids);
    }

    @Override
    public void updstateall(String ids, String state) {
        accountDao.updstateall(ids,state);
    }

    @Override
    public List selfiriend(Integer myuid) {
        return accountDao.selfiriend(myuid);
    }

    @Override
    public List<Map> selSomething(String tableName, String requirement) {
        return accountDao.selSomething(tableName,requirement);
    }
    @Override
    public void updatemybt(String id, String status) {
        accountDao.updatemybt(id,status);
    }

    @Override
    public mytb selemytbyid(Integer bid) {
        return accountDao.selemytbyid(bid);
    }

    @Override
    public Integer selelscont(Integer zid) {
        return accountDao.selelscont(zid);
    }
    @Override
    public List<zbgj> selezbgj(Integer types) {

        return accountDao.selezbgj(types);
    }

    @Override
    public integral seljfcheck(Integer uid, String times) {
        return accountDao.seljfcheck(uid,times);
    }

    @Override
    public void updpiont(Integer uid, Integer point) {
        accountDao.updpiont(uid,point);
    }

    @Override
    public void addlxr(urgentusers ur) {
        accountDao.addlxr(ur);
    }

    @Override
    public void upduserlxr(Integer uid,String state) {
        accountDao.upduserlxr(uid,state);
    }

    @Override
    public void updemail(Integer uid, String email) {
        accountDao.updemail(uid,email);
    }

    @Override
    public void updloginpwd(Integer uid, String loginpwd) {
        accountDao.updloginpwd(uid,loginpwd);
    }

}
