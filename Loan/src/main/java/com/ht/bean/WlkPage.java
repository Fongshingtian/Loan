package com.ht.bean;

public class WlkPage {

    private Integer currPage=1;
    private Integer pageCount=5;
    private Integer totalPage=0;
    private Integer totalRow=0;

    public WlkPage() {
    }

    public WlkPage(Integer currPage, Integer pageCount, Integer totalPage, Integer totalRow) {
        this.currPage = currPage;
        this.pageCount = pageCount;
        this.totalPage = totalPage;
        this.totalRow = totalRow;
    }

    @Override
    public String toString() {
        return "WlkPage{" +
                "currPage=" + currPage +
                ", pageCount=" + pageCount +
                ", totalPage=" + totalPage +
                ", totalRow=" + totalRow +
                '}';
    }

    public Integer getCurrPage() {
        return currPage;
    }

    public void setCurrPage(Integer currPage) {
        this.currPage = currPage;
    }

    public Integer getPageCount() {
        return pageCount;
    }

    public void setPageCount(Integer pageCount) {
        this.pageCount = pageCount;
    }

    public Integer getTotalPage() {
        return totalPage;
    }

    public void setTotalPage(Integer totalPage) {
        this.totalPage = totalPage;
    }

    public Integer getTotalRow() {
        return totalRow;
    }

    public void setTotalRow(Integer totalRow) {
        this.totalRow = totalRow;
    }
}
