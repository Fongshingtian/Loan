package com.ht.bean;

/**
 * 合作者表
 * id 合作者id
 * images 合作者图片
 * Route  合作者图片路径
 * category 合作者类别 （0：合作伙伴，1：合作媒体）
 */
public class cooperation {
    private Integer id;
    private String images;
    private String Route;
    private Integer category;

    @Override
    public String toString() {
        return "cooperation{" +
                "id=" + id +
                ", images='" + images + '\'' +
                ", Route='" + Route + '\'' +
                ", category=" + category +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImages() {
        return images;
    }

    public void setImages(String images) {
        this.images = images;
    }

    public String getRoute() {
        return Route;
    }

    public void setRoute(String route) {
        Route = route;
    }

    public Integer getCategory() {
        return category;
    }

    public void setCategory(Integer category) {
        this.category = category;
    }
}
