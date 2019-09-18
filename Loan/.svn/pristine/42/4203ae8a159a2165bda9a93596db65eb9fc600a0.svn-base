package com.ht.bean;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

/**
 * 贷款申请表(loan)：
 贷款申请表(loan)：
 id  did
 姓名 custName
 性别 sex 1男，0女
 身份证号 idCardNo
 手机号码 mobile
 省份  province
 市区 city
 产品类型ID  productCode
 申请额度 entryAmount
 贷款期数 periodNum
 借款用途  loanPurposeText
 申请时间  time
 状态      // status 1.未处理 2 申请失败  3 申请成功,4第二次成功，5第二次失败。6银行卡收款,7第二次未处理  8 散标
 审核说明  sm
 实际放款 sjmoney
 */
@NoArgsConstructor
@Data
@Accessors(chain=true)
public class Loan {
  private  Integer did;
  private  String custName;
  private  String sex;
  private  String idCardNo;
  private  String mobile;
  private  String province;
  private  String city;
  private  String loanPurposeText;
  private  String time;
  private  String periodNum;
  private  Integer status;
  private  String sm;
  private  String sjmoney;
  private  String entryAmount;
  private  Integer productCode;
  private  String captcha;

}
