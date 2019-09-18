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
<head>
    <title>Title</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/main.css" />
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.min.js"></script>

</head>
<body>
<h4 style="font-size:16px; text-align:center; font-weight:bold;">第二次详细信息</h4>
<br /><br />
<!--中心-->

<div class="content">
    <input type="hidden" value="${did}" name="mid">
    <div class="register-box">
        <div class="wrap">
            <div class="register-box-con2">
                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>企业名称</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" id="name" readonly="readonly " class="login-box-cen-form-input w358" value="${mx.workname}">

                    </div>
                </div>
                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian"></em>企业地址</label>
                    <div class="register-box-con2-box-right">
                        <input type="text"  id="addr" readonly="readonly " class="login-box-cen-form-input w358" value="${mx.workaddress}"/>

                    </div>
                </div>
                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian"></em>企业电话</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" id="qydh"  readonly="readonly " class="login-box-cen-form-input w358" value="${mx.workdh}" />

                    </div>
                </div>
                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian"></em>详细地址</label>
                    <div class="register-box-con2-box-right">
                        <textarea id="xxaddr"  readonly="readonly " class="login-box-cen-form-textarea w358 h88" >${mx.homeaddress}</textarea>

                    </div>
                </div>

                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>联系人1</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" id="dh1" readonly="readonly "  class="login-box-cen-form-input w358" placeholder="请输入能联系的手机号码"value="${mx.linkman1}" />
                    </div>
                </div>

                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>联系人2</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" id="dh2"  readonly="readonly " class="login-box-cen-form-input w358"value="${mx.linkman2}" />

                    </div>
                </div>

                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>联系人3</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" id="dh3" readonly="readonly " class="login-box-cen-form-input w358" value="${mx.linkman3}" />
                    </div>
                </div>
                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>你的联系号码</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" id="dh" readonly="readonly " class="login-box-cen-form-input w358" value="${mx.hm}" />
                    </div>
                </div>


                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>工作行业</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" id="gzhy" readonly="readonly " class="login-box-cen-form-input w358" value="${mx.gzhy}" />

                    </div>
                </div>

                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>工作职位</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" id="gzzw" readonly="readonly " class="login-box-cen-form-input w358" value="${mx.gzzw}" />

                    </div>
                </div>

                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>收入</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" readonly="readonly " class="login-box-cen-form-input w358" value="${mx.sl}"  />

                    </div>
                </div>

                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>还款来源</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" readonly="readonly " class="login-box-cen-form-input w358" value="${mx.hkly}"  />

                    </div>
                </div>

                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>还款方式</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" readonly="readonly " class="login-box-cen-form-input w358" value="${mx.hkfs}"  />

                    </div>
                </div>

                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>年龄</label>
                    <div class="register-box-con2-box-right">
                        <input type="text" readonly="readonly " class="login-box-cen-form-input w358" value="${mx.age}"  />

                    </div>
                </div>
                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>名下房产</label>
                    <div class="register-box-con2-box-right">
                        <c:if test="${mx.fc==1}">
                            <input type="text"readonly="readonly" class="login-box-cen-form-input w358" value="有房产"/>
                        </c:if>
                           <c:if test="${mx.fc==2}">
                            <input type="text"  readonly="readonly" class="login-box-cen-form-input w358" value="没有房产"/>
                            </c:if>
                    </div>
                </div>

                <div class="register-box-con2-box clearfix mar-bottom20">
                    <label class="register-box-con2-box-left"><em class="bitian">*</em>名下车辆</label>
                    <div class="register-box-con2-box-right">
                        <div class="register-box-con2-box-right">
                            <c:if test="${mx.cl==1}">
                                <input type="text"readonly="readonly" class="login-box-cen-form-input w358" value="有车辆"/>
                            </c:if>
                            <c:if test="${mx.cl==2}">
                                <input type="text"  readonly="readonly" class="login-box-cen-form-input w358" value="没有车辆"/>
                            </c:if>
                        </div>

                    </div>
                </div>

                <div class="register-box-con2-box clearfix mar-bottom20" style="margin-left: 190px">
                    <h1>上传的的第一个证件</h1>
                    <img style="width: 500px;height: 350px" src="${pageContext.request.contextPath}/${mx.gjjzm}">
                </div>
                <div class="register-box-con2-box clearfix mar-bottom20" style="margin-left: 190px">
                    <h1>上传的的第二个证件</h1>
                    <img style="width: 500px;height: 350px" src="${pageContext.request.contextPath}/${mx.yhls}">
                </div>
                <div class="register-box-con2-box clearfix mar-bottom20"style="margin-left: 190px">
                    <h1>上传的的第三个证件</h1>
                    <img style="width: 500px;height: 350px" src="${pageContext.request.contextPath}/${mx.identitycard} ">
                </div>

                <div class="register-box-con2-box clearfix  mar-top50">
                    <label class="register-box-con2-box-left"></label>
                    <div class="register-box-con2-box-right">
                        <a href="/back/homes/${dd}" > <button class="  btn-success btn-group btn-group-lg" data-toggle="modal" style="width: 100px">返回</button></a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>


</div>


</body>
</html>
