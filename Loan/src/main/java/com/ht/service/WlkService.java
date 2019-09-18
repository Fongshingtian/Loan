package com.ht.service;

import com.ht.bean.Law;
import com.ht.bean.NewsList;
import com.ht.bean.product_induce;

import java.util.List;

public interface WlkService {

    public String demo();

    //查询出所有的新闻公告
    public List<NewsList> allNewsList();

    public int saveNewslist(NewsList list);

    public NewsList getOneNew(int id);

    public int newsRow();

    public List<NewsList> allNewsListByPage(Integer beginIndex, Integer pageCount);

    public boolean delOneNews(int nid);

    public List<Law> allLawList(Integer beginIndex, Integer pageCount);

    public int lawRow();

    public Law getOneLaw(int id);

    public boolean delOneLaws(int lid);

    public boolean saveLaw(Law law);

}
