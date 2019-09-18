package com.ht.dao;

import com.ht.bean.Law;
import com.ht.bean.NewsList;
import com.ht.bean.product_induce;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface NewsListDao {

    Law getOneLaw(@Param(value="lid") int lid);

    //法规表总条数
    Integer lawRow();

    //法规表
    List<Law> lawList(@Param("beginIndex")Integer beginIndex, @Param("pageCount")Integer pageCount);

    //查询出所有的新闻公告
    List<NewsList> allNewList();

    //保存新闻公告
    int saveNewsList(NewsList list);//

    NewsList getOneNew(@Param(value="nid") int nid);

    //查询新闻公告总条数
    Integer newsRow();

    //查询新闻公告列表
    List<NewsList> selNewsListByPage(@Param("beginIndex")Integer beginIndex, @Param("pageCount")Integer pageCount);

    //删除
    void delNewById(@Param("nid")Integer nid);

    //删除
    void delLawById(@Param("lid")Integer lid);

    //保存新闻公告
    void saveNewsLaw(Law law);//
}
