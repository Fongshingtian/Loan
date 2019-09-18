package com.ht.bean;

public class pagercount {
    private Integer PageCount=1;//总页数
    private Integer page=1;//当前页数
    private Integer Numberpage=5;//每页数
    private Integer Total=0;
    private Integer nextpage=2;//下一页
    private Integer Previous=1;//上一页

    @Override
    public String toString() {
        return "pagercount{" +
                "PageCount=" + PageCount +
                ", page=" + page +
                ", Numberpage=" + Numberpage +
                ", Total=" + Total +
                ", nextpage=" + nextpage +
                ", Previous=" + Previous +
                '}';
    }

    public Integer getPrevious() {
        return Previous;
    }

    public void setPrevious(Integer previous) {
        Previous = previous;
    }

    public Integer getNextpage() {
        return nextpage;
    }

    public void setNextpage(Integer nextpage) {
        this.nextpage = nextpage;
    }

    public Integer getTotal() {
        return Total;
    }

    public void setTotal(Integer total) {
        Total = total;
    }

    public Integer getPageCount() {
        return PageCount;
    }

    public void setPageCount(Integer pageCount) {
        PageCount = pageCount;
    }

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Integer getNumberpage() {
        return Numberpage;
    }

    public void setNumberpage(Integer numberpage) {
        Numberpage = numberpage;
    }
}
