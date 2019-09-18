package com.ht.bean;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

/**
 * 分页参数
 * currPage 当前页
 * pageCount 每页行数
 * totalPage 总页数
 * totalRow 总行数
 */

@Data
@NoArgsConstructor
@Accessors(chain = true)
public class Pager {
    private Integer currPage=1;
    private Integer pageCount=5;
    private Integer totalPage=0;
    private Integer totalRow=0;

}
