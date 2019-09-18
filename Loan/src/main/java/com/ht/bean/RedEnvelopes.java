package com.ht.bean;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Data
@NoArgsConstructor
@Accessors(chain = true)
public class RedEnvelopes {//红包表
    private Integer id;//id
    private Integer userId;//用户id
    private Integer amount;//红包金额
    private Integer requirement;//使用要求（投资金额>=?）
    private String start;//开始时间
    private String end;//结束时间
    private String detail;//详情
    private String source;//来源
    private int statu;//状态  未使用0 已使用1  以结清3
}
