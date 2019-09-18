package com.ht.bean;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Data
@NoArgsConstructor
@Accessors(chain = true)
public class MallExchange {
    private int id;//主键自增
    private int userId;//用户ID
    private int mallId;//所兑换的商品ID
    private String time;//兑换时间
    private String address;//收货地址
    private String consignee;//收货人
    private String phone;//联系电话
}
