package com.ht.bean;

/**
 * @company 宏图
 * @User 张冬招
 * @create 2019-04-23 -10:21
 */

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

/**
 * friend  好友表：
 *  fid
 *  myuid（用户id）
 *  uid（好友id）
 * 	friendphone（好友手机号 ）
 *  realname（是否 实名登记   ）
 *  zctime（ 注册时间 ）
 *  resouce（ 好友来源）
 */
@Data
@NoArgsConstructor
@Accessors(chain = true
)
public class friend {
    private Integer fid;
    private Integer myuid;
    private Integer uid;
    private String friendphone;
    private String realname;
    private String zctime;
    private String resouce;

}
