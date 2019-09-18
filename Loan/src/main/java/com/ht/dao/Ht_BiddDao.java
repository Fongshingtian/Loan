package com.ht.dao;

import com.ht.bean.zbgj;
import com.ht.bean.zbgjson;

import java.util.List;

public interface Ht_BiddDao {
    //查看所有的标
    public List selBidd();

    //添加一个招标
    public void addbidd(zbgj zbgj);
    //删除一个招标
    public void delbidd(Integer id);

    //查看一个标下的所有分期子表
    public List selzson(Integer id);
    //添加一个利息子表
    public void addzson(zbgjson zbgjson);
    //删除一个利息子表
    public void delzson(Integer id);
}
