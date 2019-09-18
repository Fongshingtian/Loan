package com.ht.bean;

/**
 * @company 宏图
 * @User 张冬招
 * @create 2019-04-23 -9:10
 */

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

/**
 * urgentusers（紧急联系人表）（查）
 * 	urid（id）
 * 	uid（用户id）
 * 	urname（名字）
 * 	gx（关系）
 * 	phonenumber（联系人号码）
 */
@Data
@NoArgsConstructor
@Accessors(chain = true
)
public class urgentusers {
    private int urid;
    private int uid;
    private String urname;
    private String gx;
    private String phonenumber;
}
