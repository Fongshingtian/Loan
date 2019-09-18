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
    <script type='text/javascript' src='${pageContext.request.contextPath}/images/images/js/jquery.scripts.js'></script>
    <script type='text/javascript' src='${pageContext.request.contextPath}/images/images/js/jquery.custom.js'></script>
    <!-- 去掉这3行，则点击直接显示原图，如果移动至下面则IE浏览器报错 end -->
    <link rel="stylesheet" type="text/css" media="all" href="${pageContext.request.contextPath}/images/images/css/style.min.css" />
    <jsp:include page="../common/resources.jsp"></jsp:include>
    <script>
        //代表外面ul的li的次数
        var r=1;
    </script>
    <script>
        function cm(id){
            var l="i"+id;
            var li="t"+id;
            if($("#"+li).hasClass('active')){//显示状态
                $('#'+li).removeClass('active');
                $('#'+l).attr('class','down');
            }else{//隐藏状态
                //关闭上一个
                if(r!=0){
                    $('#t'+r).removeClass('active');
                    $('#i'+r).attr('class','down');
                }
                //自己显示
                $('#'+l).attr('class','up');
                $('#'+li).addClass('active');
                r=id;
            }
        }
    </script>
</head>
<body style="background:#f0f0f0;">
<div style="width: 1347px;">
    <jsp:include page="../common/top.jsp"></jsp:include>
    <jsp:include page="../common/top2.jsp"></jsp:include>
</div>
<div style="position: relative;left:80px;width:1200px;">
    <div class="cms-side"  style="float:left;" id="cms-side">
        <jsp:include page="left.jsp"></jsp:include>
    </div>
    <div style="float:left;background:#fff;">
        <div style="position: relative;left:40px;width:100%;height: 85px;"><font style="font-weight:bolder;line-height: 85px;font-size: 18px;font-weight: 600;">合规报告</font></div>
        <c:if test="${ls==0}">
            <div style="position: relative;left:30px;width:923px;text-align: center;height: 360px;">
                <img src="${pageContext.request.contextPath}/images/empty-f13aeecb6a.png" width="101" height="122" border="0" alt="">
                <br>暂无信息
            </div>
        </c:if>
        <c:if test="${ls!=0}">
        <div style="position: relative;left:60px;width:923px;height: ${li}px;text-align: center;">
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
<script>
    //给左边栏加选中
    $("#u2l3a3").css("color","#F00");
    $('#u2l3').addClass('act');
    $('#i2').attr('class','up');
    $('#t2').addClass('active');
    //导航栏
    $('#xxpl').addClass( "zm_cura");
</script>
</html>
