package com.ht.bean;

/**
 在线预约表
 表名 online_booking
 id	主键自增
 outletId 预约营业厅ID（营业厅名）
 productId 预约产品ID
 time 预约时间
 name  预约人姓名
 id_card 预约人身份证号码
 phone	预约人手机号码
 */

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Data
@NoArgsConstructor
@Accessors(chain = true)
public class OnlineBooking {
    private Integer id;
    private Integer outletId;
    private Integer productId;
    private String time;
    private String name;
    private String idCard;
    private String phone;
}
