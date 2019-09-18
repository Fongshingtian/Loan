package com.ht.bean;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

/**
 * @ClassName:
 * @Description:
 * @author:
 * @version:
 * @Date:
 */
@NoArgsConstructor
@Data
@Accessors(chain=true)
public class Cs {

    private String custName;
    private Integer age;
    private Integer sex;
    private Integer marriageStatus;//婚姻情况
    private Integer lifePolicy;//保单类型
    private Integer houseProperty;//房产类型
    private Integer socialSecurity;//社保类型
    private Integer nature;//单位性质
    private Integer isCreditCard;//是否有信用卡
    private Integer creditCardAmount;//信用卡额度
    private Integer incomeType;//发薪方式
    private  String captcha;//验证码

}
