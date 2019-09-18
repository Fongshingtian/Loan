package com.ht.service.impl;

import com.ht.bean.Law;
import com.ht.bean.NewsList;
import com.ht.dao.NewsListDao;
import com.ht.service.WlkService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class WlkServiceImpl implements WlkService {
    @Resource
    NewsListDao dao;

    @Override
    public List<NewsList> allNewsListByPage(Integer beginIndex, Integer pageCount) {
        return dao.selNewsListByPage(beginIndex,pageCount);
    }

    @Override
    public List<NewsList> allNewsList() {
        System.out.println("底层");
        List<NewsList> list=dao.allNewList();
        return list;
    }
    @Override
    public String demo(){
        System.out.println("底层");
        return "底层";
    }

    @Override
    public int saveNewslist(NewsList list) {
        System.out.println("eidtor底层"+list);
        int id=dao.saveNewsList(list);
        System.out.println(" 主键回填id="+id);
        return id;
    }

    @Override
    public NewsList getOneNew(int id) {
        return dao.getOneNew(id);
    }

    @Override
    public int newsRow() {
        return dao.newsRow();
    }

    @Override
    public boolean delOneNews(int nid) {
        dao.delNewById(nid);
        return true;
    }

    @Override
    public List<Law> allLawList(Integer beginIndex, Integer pageCount) {
        return dao.lawList(beginIndex,pageCount);
    }

    @Override
    public int lawRow() {
        return dao.lawRow();
    }

    @Override
    public Law getOneLaw(int id) {
        System.out.println(" 后台lid"+id);
        return dao.getOneLaw(id);
    }

    @Override
    public boolean delOneLaws(int lid) {
        System.out.println("删除 id"+lid);
        dao.delLawById(lid);
        return true;
    }

    @Override
    public boolean saveLaw(Law law) {
        dao.saveNewsLaw(law);
        return true;
    }
}
