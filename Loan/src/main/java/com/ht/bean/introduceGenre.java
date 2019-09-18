package com.ht.bean;
/**
 *信息类别表 introduceGenre
 *id        id
 * Genre    信息类别
 *
 * 毛明峰
 * 2019年4月19日15:14:48
 * */
public class introduceGenre {
    private Integer id;
    private String Genre;

    @Override
    public String toString() {
        return "introduceGenre{" +
                "id=" + id +
                ", Genre='" + Genre + '\'' +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getGenre() {
        return Genre;
    }

    public void setGenre(String genre) {
        Genre = genre;
    }
}
