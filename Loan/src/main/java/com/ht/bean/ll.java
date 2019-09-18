package com.ht.bean;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@NoArgsConstructor
@Data
@Accessors(chain=true)
public class ll {

    private Integer lid ;// id
    private Integer zid  ;//   招标id
    private Integer periods;// 期数
    private String sjrate;//  利率
    private Integer status;//  状态
}
