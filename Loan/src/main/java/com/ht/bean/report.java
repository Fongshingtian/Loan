package com.ht.bean;

public class report {
    private Integer id;
    private String title;
    private String images;
    private String content;

    @Override
    public String toString() {
        return "report{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", images='" + images + '\'' +
                ", content='" + content + '\'' +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImages() {
        return images;
    }

    public void setImages(String images) {
        this.images = images;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
