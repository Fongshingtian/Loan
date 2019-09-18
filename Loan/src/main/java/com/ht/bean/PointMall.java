package com.ht.bean;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

/**
 * 积分商城表
 * id
 * name 商品名称
 * stock 库存
 * point 所需积分
 * limit 限制数量
 * image 封面图片
 * detail 商品详情
 */
@NoArgsConstructor
@Data
@Accessors(chain=true)
public class PointMall {
    private Integer id;
    private String name;
    private Integer stock;
    private Integer point;
    private Integer limit;
    private String image;
    private String detail;
}
