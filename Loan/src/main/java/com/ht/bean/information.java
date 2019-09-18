package com.ht.bean;
/***
 *
 * 2019年4月23日08:57:52
 * 毛明峰
 *
 * 网站信息表
 *  turnover  累计成交（元）
 *  enrollment  注册人数
 *  uptime上线时间
 */
public class information {
    private Integer id;
    private String turnover;
    private String enrollment;
    private String uptime;

    @Override
    public String toString() {
        return "information{" +
                "id=" + id +
                ", turnover=" + turnover +
                ", enrollment='" + enrollment + '\'' +
                ", uptime='" + uptime + '\'' +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTurnover() {
        return turnover;
    }

    public void setTurnover(String turnover) {
        this.turnover = turnover;
    }

    public String getEnrollment() {
        return enrollment;
    }

    public void setEnrollment(String enrollment) {
        this.enrollment = enrollment;
    }

    public String getUptime() {
        return uptime;
    }

    public void setUptime(String uptime) {
        this.uptime = uptime;
    }
}
