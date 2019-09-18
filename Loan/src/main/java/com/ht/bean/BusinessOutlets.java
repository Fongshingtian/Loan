package com.ht.bean;

/**
 * 营业网点表
 * 表名 business_outlets
 * id 	主键自增
 * name	网点名
 * province	所在省
 * city	所在市
 * contact_phone	联系电话
 * address	所在地址
 * longitude 经度
 * latitude 纬度
 * https://api.map.baidu.com/geocoder/v2/?ak=eIxDStjzbtH0WtU50gqdXYCz&output=json&address=地址
 */
public class BusinessOutlets {
    private int id;
    private String name;
    private String province;
    private String city;
    private String contactPhone;
    private String address;
    private  String longitude;
    private  String latitude;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getContactPhone() {
        return contactPhone;
    }

    public void setContactPhone(String contactPhone) {
        this.contactPhone = contactPhone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }
}
