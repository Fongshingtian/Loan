package com.ht.bean;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

//设置属性
/*
create table newslist(
nid int PRIMARY key,-- 主键
nedid int null, --  编辑人  指定管理员id
ntitle varchar(100) null, -- 标题
ncontent varchar(2000) null,  -- 内容
ntype int null,-- 1.类型  新闻公告0  公司新闻1  行业动态2
cdate VARCHAR(100) null,-- 创建时间
rdate varchar(100) null,  -- 发布时间
state int null  -- 0 未发布   1发布   2停止展示
)*/
public class NewsList {
    private Integer nid;// 主键
    private Integer nedid;// 编辑人  指定管理员id
    private String ntitle;// 标题
    private String ncontent;// 内容
    private String ntype;//1.类型  新闻公告0  公司新闻1  行业动态2
    private String cdate;//创建时间
    private String rdate;//发布时间
    private  Integer state;//状态   0 未发布   1发布   2  停止展示

    public NewsList(Integer nid, Integer nedid, String ntitle, String ncontent, String ntype, String cdate, String rdate, Integer state) {
        this.nid = nid;
        this.nedid = nedid;
        this.ntitle = ntitle;
        this.ncontent = ncontent;
        this.ntype = ntype;
        this.cdate = cdate;
        this.rdate = rdate;
        this.state = state;
    }

    @Override
    public String toString() {
        return "NewsList{" +
                "nid=" + nid +
                ", nedid=" + nedid +
                ", ntitle='" + ntitle + '\'' +
                ", ncontent='" + ncontent + '\'' +
                ", ntype='" + ntype + '\'' +
                ", cdate='" + cdate + '\'' +
                ", rdate='" + rdate + '\'' +
                ", state=" + state +
                '}';
    }

    public NewsList() {
    }

    public Integer getNid() {
        return nid;
    }

    public void setNid(Integer nid) {
        this.nid = nid;
    }

    public Integer getNedid() {
        return nedid;
    }

    public void setNedid(Integer nedid) {
        this.nedid = nedid;
    }

    public String getNtitle() {
        return ntitle;
    }

    public void setNtitle(String ntitle) {
        this.ntitle = ntitle;
    }

    public String getNcontent() {
        return ncontent;
    }

    public void setNcontent(String ncontent) {
        this.ncontent = ncontent;
    }

    public String getNtype() {
        return ntype;
    }

    public void setNtype(String ntype) {
        this.ntype = ntype;
    }

    public String getCdate() {
        return cdate;
    }

    public void setCdate(String cdate) {
        this.cdate = cdate;
    }

    public String getRdate() {
        return rdate;
    }

    public void setRdate(String rdate) {
        this.rdate = rdate;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }
}
