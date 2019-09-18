package com.ht.bean;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@NoArgsConstructor
@Data
@Accessors(chain=true)
public class xmlb {
   private Integer zid ;//  招标ID
    private Integer did ;// 贷款申请ID
}
