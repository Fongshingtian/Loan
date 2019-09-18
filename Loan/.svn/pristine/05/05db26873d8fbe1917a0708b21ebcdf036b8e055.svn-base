package com.ht.service.impl;

import com.ht.bean.*;
import com.ht.dao.InvestDao;
import com.ht.service.IInvestServic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * @ClassName:
 * @Description:
 * @author:
 * @version:
 * @Date:
 */
@Service
public class InvestServiceImpl implements IInvestServic {
    @Autowired
    private InvestDao investDao;

    public List<zbgj> selezbgj(Integer types) {

        return investDao.selezbgj(types);
    }

    @Override
    public Map selezbgjson(Integer id) {
        return investDao.selzbgjson(id);
    }

    @Override
    public List selezbgjs(Integer s) {
        return investDao.selzbgjs(s);
    }

    @Override
    public real_name buyByuid(Integer suid, String password) {
        return investDao.buybyuid(suid,password);
    }

    @Override
    public accounts selByuid(Integer suid) {
        return investDao.selbyuid(suid);
    }

    @Override
    public void updcounts(Integer uid, float countmoney, float countbj, float countlx, float djmoney, float countsy, float kyye) {
         investDao.updaccounts(countmoney ,countbj,countlx,djmoney,countsy ,kyye,uid  );
    }

    @Override
    public void updZbjgson(Integer sid, float money) {
        investDao.updzbgjson(sid,money);
    }

    @Override
    public zbgjson selzbgjsons(Integer id) {
        return investDao.selzbgjsons(id);
    }



    @Override
    public void updls(Integer zid, Integer uid, String uname, String money, String times) {
        investDao.updls( zid,  uid, uname,  money, times);
    }

    @Override
    public List Sells(Integer zid) {
        return investDao.sells(zid);
    }

    @Override
    public void instmyt(Integer zid, Integer uid,  String interest, String ckrate, String money, String periods, String sjmoney,String begintime, String endtime, Integer status) {
        investDao.instmyt(zid,uid,interest,ckrate,money,periods,sjmoney,begintime,endtime,status);
    }

    @Override
    public Integer selMytbBuUid(Integer uid) {
        return investDao.mytbbyuid(uid);
    }

    @Override
    public List selmytbs() {
        return investDao.selMytbs();
    }

    @Override
    public myusers selmyusers(Integer uid) {
        return investDao.selmyusers(uid);
    }

    @Override
    public void updmytb(Integer bid, Integer status) {
        investDao.updmytb(bid,status);
    }

    @Override
    public void instfriends(String jltime, Float jlmoney, String jltype, String jlstate, String sendtime,String yqcoud) {
        investDao.instfriend(jltime,jlmoney,jltype,jlstate,sendtime,yqcoud);
    }

    @Override
    public void Instrecord(Integer uid, String rtime, String rtype, float rmoney, float kyye, String bzxx) {
        investDao.Instrecord(uid,rtime,rtype,rmoney,kyye,bzxx);
    }

    @Override
    public List selfriendgets() {
        return investDao.selfriendgets();
    }

    @Override
    public myusers selmys(String yqcoud) {
        return investDao
                .selmys(yqcoud);
    }

    @Override
    public void updyqacc(Integer uid, float countmoney, float kyye ,float Invitedsy ,float countsy,float qtsy) {
        investDao.updyqacc(uid,countmoney,kyye,Invitedsy,countsy,qtsy);
    }

    @Override
    public void updfrinendgets(Integer fid, String jlstate) {
        investDao.updfriendget(fid,jlstate);
    }

    @Override
    public List SelloanS(Integer start, Integer cols) {
        return investDao.SelloanS(start,cols);
    }

    @Override
    public Integer SelLoanI() {
        return investDao.SelLoanI();
    }

    @Override
    public Map SelMx(Integer did) {
        return investDao.SelMx(did);
    }

    @Override
    public List SelHongBao() {
        return investDao.SelHongBao();
    }

    @Override
    public void UpdRed(Integer id) {
        investDao.updred(id);
    }

    @Override
    public scattered selscabyid(Integer id) {
        return investDao.selscabyid(id);
    }

    @Override
    public void updsca(Integer id, Integer money, String amount) {
        investDao.updsca(id,money,amount);
    }
}

