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
    <script type="text/javascript" src="${pageContext.request.contextPath}/images/images/js/jquery.js"></script>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/images/images/css/xxplstyle.css">
    <script type="text/javascript" src="${pageContext.request.contextPath}/images/images/js/jquery-1.7.2.min.js"></script>


    <script type="text/javascript" src="${pageContext.request.contextPath}/images/images/js/jquery.scripts.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/images/images/js/jquery.custom.js"></script>
    <!-- 去掉这3行，则点击直接显示原图，如果移动至下面则IE浏览器报错 end -->
    <link rel="stylesheet" type="text/css" media="all" href="${pageContext.request.contextPath}/images/images/css/style.min.css" />
</head>
<body style="background:#f0f0f0;">
<div style="position: relative;left:80px;width:1100px;">
    <div style="float:left;background:#fff;">
        <div style="position: relative;left:40px;width:100%;height: 85px;"><font style="font-weight:bolder;line-height: 85px;font-size: 18px;font-weight: 600;">合作伙伴</font></div>
        <div style="position: relative;left:30px;width:1100px;text-align: center;height: ${li}px;">
            <c:forEach items="${l}" var="r">
                <div style="position: relative;left:10px;float:left;">
                    <div style="width:273px;border:1px solid #e6e6e6;">
                        <a class="image-icon" rel="gallery[modal]" title="" href="${pageContext.request.contextPath}/upload/${r.images}"><img src="${pageContext.request.contextPath}/upload/${r.images}" width="127" height="55" border="0" alt=""></a>
                    </div>
                    <div style="line-height: 57px;">${r.route}<br><a href="/dis/delcoll?id=${r.id}">删除</a></div>
                </div>
            </c:forEach>
            <div style="position: relative;left:20px;float:left;">
                <div style="width:273px;border:1px solid #e6e6e6;">
                    <a href="/dis/addcoll?id=0" title=""><img src="${pageContext.request.contextPath}/images/bf4e8a9d8056e9aef4a9b73f29bbe934.jpg" width="127" height="55" border="0" alt=""></a>
                </div>
                <div style="line-height: 57px;">添加</div>
            </div>
        </div>
        <div style="position: relative;left:40px;width:100%;height: 85px;"><font style="font-weight:bolder;line-height: 85px;font-size: 18px;font-weight: 600;">合作媒体</font></div>
        <div style="position: relative;left:60px;width:923px;height: ${ii}px;">
            <c:forEach items="${i}" var="r">
                <div style="position: relative;left:10px;float:left;">
                    <div style="width:273px;border:1px solid #e6e6e6;">
                        <a class="image-icon" rel="gallery[modal]" title="" href="${pageContext.request.contextPath}/upload/${r.images}"><img src="${pageContext.request.contextPath}/upload/${r.images}" width="127" height="55" border="0" alt=""></a>
                    </div>
                    <div style="line-height: 57px;">${r.route}<br><a href="/dis/delcoll?id=${r.id}">删除</a></div>
                </div>
            </c:forEach>
            <div style="position: relative;left:10px;float:left;">
                <div style="width:273px;border:1px solid #e6e6e6;">
                    <a href="/dis/addcoll?id=1" title=""><img src="${pageContext.request.contextPath}/images/bf4e8a9d8056e9aef4a9b73f29bbe934.jpg" width="127" height="55" border="0" alt=""></a>
                </div>
                <div style="line-height: 57px;">添加</div>
            </div>
        </div>
    </div>
</div>
</body>
<script>
    //给左边栏加选中
    $("#u1l3a3").css("color","#F00");
    $('#u1l3').addClass('act');
    $('#i1').attr('class','up');
    $('#t1').addClass('active');
    //导航栏
    $('#xxpl').addClass( "zm_cura");
</script>
</html>
