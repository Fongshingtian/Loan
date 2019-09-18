<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2019\4\16 0016
  Time: 10:33
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<jsp:include page="/WEB-INF/jsp/common/resources.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top2.jsp"></jsp:include>
<head>
    <title>Title</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/main.css" />
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.min.js"></script>
    <script type="text/javascript">



         function check() {
 var name=$("#name").val();
         var addr=$("#addr").val()
         var dh1=$("#dh1").val()
         var dh2=$("#dh2").val()
         var dh3=$("#dh3").val()
         var dh=$("#dh").val()
         var card=$("#card").val()
         var gj=$("#gj").val()
         var ls=$("#ls").val()
         var qydh=$("#qydh").val()
         var xxaddr=$("#xxaddr").val()

             var jkyt=$("#jkyt").val()
             var gzhy=$("#gzhy").val()
             var gzzw=$("#gzzw").val()
             var sl=$("#sl").val()
             var fc =$("#fc ").val()
             var cl=$("#cl").val()

               var  hkly=$("#hkly").val()
               var  hkfs=$("#hkfs").val()
               var  age=$("#age").val()

             var examineTele1 = /^(0|86|17951)?(13[0-9]|15[012356789]|17[01678]|18[0-9]|14[57])[0-9]{8}$/;  //手机验证
             if(name==null||name==""){
                 alert("请输入你的姓名！");
                 return false;
             }
                  if(addr.length<10){
                      alert("企业地址不能少于10个字！");
                      return false;
                  }

             if(!examineTele1.test(qydh)){
                 alert('请输入正确的企业电话！！');
                 return false;
             }
             if(xxaddr.length<10){
                 alert("你的详细地址不能少于10个字！");
                 return false;
             }

             if(!examineTele1.test(dh1)){
                 alert('请输入正确的联系人1');
                 return false;
             }
             if(!examineTele1.test(dh2)){
                 alert('请输入正确的联系人2');
                 return false;
             }
             if(!examineTele1.test(dh3)){
                 alert('请输入正确的联系人3');
                 return false;
             }
             if(!examineTele1.test(dh)){
                 alert('请输入正确的联系手机');
                 return false;
             }
             if(jkyt==null||jkyt==""){
                 alert("请输入你的借款用途！");
                 return false;
             }
             if(gzhy==null||gzhy==""){
                 alert("请输入你的工作行业！");
                 return false;
             }
             if(gzzw==null||gzzw==""){
                 alert("请输入你的工作职位！");
                 return false;
             }


             if(sl==null||sl==""){
                 alert("请输入你的收入！");
                 return false;
             }
             if(hkly==null||hkly==""){
                 alert("请输入你的还款来源！");
                 return false;
             }
             if(isNaN(age)||age>100||age<0){
                 alert("请输入正确的年龄！");
                 return false;
             }
             if(fc==0){
                 alert("请选择是否有房产！");
                 return false;
             }
             if(cl==0){
                 alert("请选择是否有车辆！");
                 return false;
             }
             if(hkfs==0){
                 alert("请选择还款方式！");
                 return false;
             }
             var pattern = /^([1-9]{1})(\d{14}|\d{18})$/,
                 str = $("#cardNo").val().replace(/\s+/g, "");
             if (!pattern.test(str)) {
                 alert("请输入正确的银行卡号！！！")
                 return false;
             }
             if(gj==null||gj==''||card==null||card==''||ls==null||ls==''){
                 alert("请上传你的资料！！");
                 return false;
             }

             return true;
         }
        
    </script>
</head>
<body>
<h4 style="font-size:16px; text-align:center; font-weight:bold;">详细信息</h4>
<br /><br />
<!--中心-->
<form method="post"  enctype="multipart/form-data" action="${pageContext.request.contextPath}/loan/addmx" onsubmit="return check();">
<div class="content">
    <input type="hidden" value="${did}" name="mid">
    <div class="register-box">
        <div class="wrap">
            <div class="register-box-con2">
                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>公司名称</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" id="name" class="login-box-cen-form-input w358" placeholder="请输入与工商营业执照一致的公司名称，不超过20个字" name="workname">

                    </div>
                </div>
                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian"></em>企业地址</label>
                    <div class="register-box-con2-box-right">
                        <input type="text"  id="addr" class="login-box-cen-form-input w358" placeholder="请输入正确的地址" id="reg_info_www" name="workaddress"/>

                    </div>
                </div>
                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian"></em>企业电话</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" id="qydh" class="login-box-cen-form-input w358" placeholder="请输入您公司的联系电话" id="reg_info_address" name="workdh" />

                    </div>
                </div>
                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian"></em>你的详细住址</label>
                    <div class="register-box-con2-box-right">
                        <textarea id="xxaddr" class="login-box-cen-form-textarea w358 h88" id="reg_info_textarea" placeholder="请输入你的现居地址....." name="homeaddress"></textarea>

                    </div>
                </div>

                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>联系人1</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" id="dh1" class="login-box-cen-form-input w358" placeholder="请输入能联系的手机号码" id="reg_info_name"name="linkman1" />
                    </div>
                </div>

                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>联系人2</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" id="dh2" class="login-box-cen-form-input w358" placeholder="请输入能联系的手机号码" name="linkman2" />

                    </div>
                </div>


                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>联系人3</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" id="dh3" class="login-box-cen-form-input w358" placeholder="请输入能联系的手机号码" name="linkman3" />
                    </div>
                </div>

                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>你的联系号码</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" id="dh" class="login-box-cen-form-input w358" placeholder="请输入有手机号码，用于接收平台审核等重要消息通知" name="hm" />
                    </div>
                </div>

                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>借款用途</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" id="jkyt" class="login-box-cen-form-input w358" placeholder="请输入你的借款用途" name="jkyt" />

                    </div>
                </div>

                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>工作行业</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" id="gzhy" class="login-box-cen-form-input w358" placeholder="请输入你的工作性质/行业" name="gzhy" />

                    </div>
                </div>

                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>工作职位</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" id="gzzw" class="login-box-cen-form-input w358" placeholder="请输入你的工作职位" name="gzzw" />

                    </div>
                </div>

                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>收入</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" id="sl" class="login-box-cen-form-input w358" placeholder="请输入你的实际收入" name="sl" />

                    </div>
                </div>

                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>还款来源</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" id="hkly" class="login-box-cen-form-input w358" placeholder="请输入你的还款来源" name="hkly" />

                    </div>
                </div>

                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>年龄</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" id="age" class="login-box-cen-form-input w358" placeholder="请输入你的真实年龄" name="age" />

                    </div>
                </div>

                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>你的的银行卡号</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" id="cardNo" class="login-box-cen-form-input w358" placeholder="请输入正确的银行卡号" name="cardNo" />

                    </div>
                </div>


                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>名下房产</label>
                    <div class="register-box-con2-box-right">
                       <select name="fc" id="fc" class="login-box-cen-form-input w358">
                           <option value="0">请选择有没有房产</option>
                           <option value="1">有</option>
                           <option value="2">无</option>
                       </select>

                    </div>
                </div>

                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>名下车辆</label>
                    <div class="register-box-con2-box-right">
                        <select name="cl" id="cl" class="login-box-cen-form-input w358">
                            <option value="0">请选择有没有车辆</option>
                            <option value="1">有</option>
                            <option value="2">无</option>
                        </select>

                    </div>
                </div>

                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>还款方式</label>
                    <div class="register-box-con2-box-right">
                        <select name="hkfs" id="hkfs" class="login-box-cen-form-input w358">
                            <option value="0">请选择还款方式</option>
                            <option value="一次性还本付息">一次性还本付息</option>
                            <option value="按期还本息">按期还本息</option>
                        </select>

                    </div>
                </div>

                <c:if test="${pid==1||pid==3}">
                <p align="center"><font size="5">请上传相关证明</font></p>
               <p align="center">
                   <font size="4"> 身份证照片：</font><input type="file" id="card" name="card"><br>
                   <font size="4"> 公积金证明：</font><input type="file"  id="gj" name="gj"><br>
                   <font size="4"> 银行流水&nbsp;&nbsp;&nbsp;&nbsp;：</font><input type="file" id="ls" name="ls" >
               </p>
                </c:if>
                <c:if test="${pid==4}">
                    <p align="center"><font size="5">请上传相关证明</font></p>
                    <p align="center">
                        <font size="4"> 身份证照片：</font><input type="file" id="card" name="card"><br>
                        <font size="4"> 行驶证：</font><input type="file" id="gj" name="gj" ><br>
                        <font size="4"> 银行流水&nbsp;&nbsp;&nbsp;&nbsp;：</font><input type="file" id="ls" name="ls" >
                    </p>
                </c:if>
                <c:if test="${pid==5}">
                    <p align="center"><font size="5">请上传相关证明</font></p>
                    <p align="center">
                        <font size="4"> 法定代表人身份证：</font><input type="file" name="card" id="card"><br>
                        <font size="4"> 房产证：</font><input type="file" name="gj" id="gj" ><br>
                        <font size="4"> 银行流水&nbsp;&nbsp;&nbsp;&nbsp;：</font><input type="file" name="ls"  id="ls" >
                    </p>
                </c:if>
                <c:if test="${pid==6}">
                    <p align="center"><font size="5">请上传相关证明</font></p>
                    <p align="center">
                        <font size="4"> 法定代表人身份证：</font><input type="file" name="card" id="card"><br>
                        <font size="4"> 公司营业执照&nbsp;&nbsp;：</font><input type="file" name="gj" id="gj" ><br>
                        <font size="4"> 对公账户流水&nbsp;&nbsp;：</font><input type="file" name="ls" id="ls" >
                    </p>
                </c:if>
                <div class="register-box-con2-box clearfix mar-bottom20 mar-top50">
                    <label class="register-box-con2-box-left"></label>
                    <div class="register-box-con2-box-right">
                        <input type="submit" value="提交申请" class="login-box-cen-form-button w380" id="reg_info_submit" />
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>


</div>
</form>

</body>
<jsp:include page="/WEB-INF/jsp/common/bottom.jsp"></jsp:include>
</html>
