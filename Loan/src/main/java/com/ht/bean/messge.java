package com.ht.bean;

/**
 * @company 宏图
 * @User 张冬招
 * @create 2019-04-23 -10:28
 */

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

/**
 * 消息表：messge（增删改查）
 * 	mid
 * 	uid(用户id)
 *  mstate 状态（1：已读还是 2：未读）
 *  title 标题
 *  text 内容
 *  sendtime 送达时间
 */
@Data
@NoArgsConstructor
@Accessors(chain = true
)
public class messge {
    private Integer mid;
    private Integer uid;
    private String mstate;
    private String title;
    private String text;
    private String sendtime;

}
