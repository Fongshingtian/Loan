package com.ht.bean;

/**
 * @company 宏图
 * @User 张冬招
 * @create 2019-04-23 -10:03
 */

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

/**
 * 积分历史纪录表（integral）
 * 	id（交易id）
 *  uid（用户id）
 *  times（交易时间）
 * 	jfz（积分值）
 * 	jystate（交易状态 1支付，2收入）
 * 	jytpte（交易类型）
 */
@Data
@NoArgsConstructor
@Accessors(chain = true
)
public class integral {
    private Integer id;
    private Integer uid;
    private String times;
    private Integer jfz;
    private String jystate;
    private String jytype;

}
