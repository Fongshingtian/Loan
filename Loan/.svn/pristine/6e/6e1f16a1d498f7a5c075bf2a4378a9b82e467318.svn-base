<%--
  Created by IntelliJ IDEA.
  User: asus
  Date: 2019/4/24
  Time: 10:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<html>
<jsp:include page="/WEB-INF/jsp/common/resources.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top2.jsp"></jsp:include>
<head>
    <title>Title</title>


    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <link rel="shortcut icon" href="//image.xiaoniu88.com/static/WebXn/dist/images/favicon.ico" type="image/x-icon"/>
    <link rel="stylesheet" href="//image.xiaoniu88.com/static/WebXn/dist/css/base-56e256b865.css"/>
    <script type="text/javascript" src="//image.xiaoniu88.com/static/WebXn/dist/lib/base-6100562494.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.min.js"></script>
    <link>
    <script>
        window.global = {
            cdn: "//image.xiaoniu88.com",
            siteroot: "http://www.xiaoniu88.com",
            staticPath: "//image.xiaoniu88.com/static/WebXn/dist",
            contextPath: "/product",
            serverTime: "1556105646004" * 1,
            userId: "",
            isLogin: false
        }
    </script>


    <script type="text/javascript"
            src="//image.xiaoniu88.com/static/WebXn/dist/module/common/common-83987ed24e.js"></script>
    <script>
        $(function () {
            seajs.use('module/common/common')
        })
    </script>
    <link rel="stylesheet"
          href="//image.xiaoniu88.com/static/WebXn/dist/page/product/detail/ushare/css/detail-72afdb09db.css"/>

</head>
<body>

<div class="extend" id="extendModel">
    <ul class="tab">
        <li data-type="borrowing" class="extend-trigger current"><i class="icon icon-borrowing"></i><span>借款人信息</span>
        </li>
    </ul>
    <div class="items">
        <div class="item borrowing tableList" id="borrowingModel" style="display: block;">
            <div class="queue">
                <div class="node first">
                    <div class="model"><i></i><span style="font-size: 24px ;color: orangered;line-height:60px;;align:conter">借款基础信息</span></div>
                    <div class="infos">
                        <span style="font-size: 18px;line-height:60px;">借款金额：<c:if test="${map.sjmoney==null}">暂无信息</c:if><c:if test="${map.sjmoney!=null}">${map.sjmoney}元</c:if> </span>
                        <span style="font-size: 18px;line-height:60px;position: absolute;left: 500px;">借款期限：<c:if test="${map.periodNum==null}">暂无信息</c:if><c:if test="${map.periodNum!=null}">${map.periodNum}个月</c:if> </span><br>
                        <span style="font-size: 18px;line-height:60px;">还款方式：<c:if test="${map.hkfs==null}">暂无信息</c:if><c:if test="${map.hkfs!=null}">${map.hkfs}元</c:if> </span>
                        <span style="font-size: 18px;line-height:60px;position: absolute;left: 500px;">借款用途：<c:if test="${map.jkyt==null}">暂无信息</c:if><c:if test="${map.jkyt!=null}">${map.jkyt}</c:if> </span><br>
                        <span style="font-size: 18px;line-height:60px;">签约时间：<c:if test="${map.qytime==null}">暂无信息</c:if><c:if test="${map.qytime!=null}">${map.qytime}</c:if></span>
                        <span style="font-size: 18px;line-height:60px;position: absolute;left: 500px;">约定利率：<c:if test="${map.ll==null}">暂无信息</c:if><c:if test="${map.ll!=null}">${map.ll}%</c:if></span><br>
                        <span style="font-size: 18px;line-height:60px;">还款来源：<c:if test="${map.hkly==null}">暂无信息</c:if><c:if test="${map.hkly!=null}">${map.hkly}</c:if></span></div>
                </div>
                <br>
                <hr style="background-color: #b92c28">
                <div class="node">
                    <div class="model"><i></i><span style="font-size: 24px ;color: orangered;line-height:60px">借款人基础信息</span></div>
                    <div class="infos">
                        <span style="font-size: 18px;line-height:60px;">借款人：<c:if test="${map.custName==null}">暂无信息</c:if><c:if test="${map.custName!=null}">${fn:substring(map.custName, 0,1 )}**</c:if></span>
                        <span style="font-size: 18px;line-height:60px;position: absolute;left: 500px;">性别：<c:if test="${map.sex==null}">暂无信息</c:if><c:if test="${map.sex!=null}"><c:if test="${map.sex==1}">男</c:if><c:if test="${map.sex==0}">女</c:if> </c:if></span><br>
                        <span style="font-size: 18px;line-height:60px;">年龄：<c:if test="${map.age==null}">暂无信息</c:if><c:if test="${map.age!=null}">${map.age}</c:if></span>
                        <span style="font-size: 18px;line-height:60px;position: absolute;left: 500px;">身份证：<c:if test="${map.idCardNo==null}">暂无信息</c:if><c:if test="${map.idCardNo!=null}">${fn:substring(map.idCardNo, 0,3 )}****${fn:substring(map.idCardNo, 15,18 )}</c:if></span> <br>
                        <span style="font-size: 18px;line-height:60px;">所属城市：<c:if test="${map.city==null}">暂无信息</c:if><c:if test="${map.city!=null}">${map.city}</c:if></span></div>
                </div>
                <br>
                <hr style="background-color: #b92c28">
                <div class="node">
                    <div class="model"><i></i><span style="font-size: 24px ;color: orangered ;line-height:60px">工作信息</span></div>
                    <div class="infos">

                        <span style="font-size: 18px;line-height:60px;">工作行业/性质：<c:if test="${map.gzhy==null}">暂无信息</c:if><c:if test="${map.gzhy!=null}">${map.gzhy}</c:if></span>
                        <span style="font-size: 18px;line-height:60px; position:absolute;left: 500px;">工作地点：<c:if test="${map.workaddress==null}">暂无信息</c:if><c:if test="${map.workaddress!=null}">${map.workaddress}</c:if></span><br>
                        <span style="font-size: 18px;line-height:60px;">工作职位：<c:if test="${map.gzzw==null}">暂无信息</c:if><c:if test="${map.gzzw!=null}">${map.gzzw}</c:if></span>
                        <span style="font-size: 18px;line-height:60px;position:absolute;left: 500px;">月收入<i class="icon icon-question-mark icon__question__mark" style="font-size: 18px;line-height:60px;position: absolute;left: 500px;" title="月收入指月打卡工资收入"></i> ：<c:if test="${map.sl==null}">暂无信息</c:if><c:if test="${map.sl!=null}">${map.sl}元</c:if></span>
                    </div>
                </div>
                <br>
                <hr style="background-color: #b92c28">

            </div>
        </div>

    </div>
</div>
</body>

<jsp:include page="/WEB-INF/jsp/common/bottom.jsp"></jsp:include>
</html>
