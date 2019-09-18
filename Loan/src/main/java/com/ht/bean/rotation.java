package com.ht.bean;

public class rotation {
    private Integer id;//id
    private String route;//轮播图路径

    @Override
    public String toString() {
        return "rotation{" +
                "id=" + id +
                ", route='" + route + '\'' +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getRoute() {
        return route;
    }

    public void setRoute(String route) {
        this.route = route;
    }
}
