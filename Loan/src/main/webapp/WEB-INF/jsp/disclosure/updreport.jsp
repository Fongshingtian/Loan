<%--
  Created by IntelliJ IDEA.
  User: 毛明峰
  Date: 2019/4/24
  Time: 10:11
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/images/images/css/xxplstyle.css">
    <script type="text/javascript" src="${pageContext.request.contextPath}/images/images/js/jquery-1.7.2.min.js"></script>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/mmfstyle3.css">
    <script type='text/javascript' src='${pageContext.request.contextPath}/images/images/js/jquery.js'></script>
    <!-- 去掉这3行，则点击直接显示原图，如果移动至下面则IE浏览器报错 end -->
</head>
<body style="background:#fff;">
<div style="">
    <div style="position: relative;width:100%;float:left;background:#fff;">
        <div style="position: relative;height: 110px;">
            <font style="font-weight:bolder;line-height: 85px;font-size: 18px;font-weight: 600;">合规报告</font>
            <a href="${pageContext.request.contextPath}/dis/reportupd"><div style="position: relative;height:23px;line-height: 23px;width:40px;border:1px solid #e5e5e5;background:#000;color:#fff;font-size:14px;">+添加</div></a>
        </div>

        <c:if test="${ls==0}">
            <div style="position: relative;width:100%;text-align: center;height: 360px;">
                <img src="${pageContext.request.contextPath}/images/empty-f13aeecb6a.png" width="101" height="122" border="0" alt="">
                <br>暂无信息
            </div>
        </c:if>
        <c:if test="${ls!=0}">
        <div style="position: relative;width:100%;height: ${li}px;text-align: center;">
            <c:forEach items="${l}" var="l" >
                <a href="${pageContext.request.contextPath}/dis/hg?id=${l.id}">
                    <div class="div12">
                        <div class="div13"><img src="${pageContext.request.contextPath}/upload/${l.images}" width="220" height="160" border="0" alt="" class="imgdiv13"></div><br>${l.title}
                    </div>
                </a>
                <div class="div11"></div>
            </c:forEach>
        </div>
        <div style="position: relative;height: 115px;"><font style="position: relative;left:605px;color:#818181;line-height: 85px;font-weight: 600;">法定代表人签名：</font><img src="${pageContext.request.contextPath}/images/images/penggang-194d4f2333.png" style="position: relative;top:30px;left:605px;" width="112" height="80" border="0" alt=""></div>
        </c:if>
    </div>
</div>
</body>
</html>
