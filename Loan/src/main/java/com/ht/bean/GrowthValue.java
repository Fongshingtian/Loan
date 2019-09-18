package com.ht.bean;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

/**
 * 成长经历表
 */

@Data
@NoArgsConstructor
@Accessors(chain = true)
public class GrowthValue {
    private int id;//主键自增
    private int userId;//用户ID
    private String time;//时间
    private String type;//类型
    private int value;//成长值
}
