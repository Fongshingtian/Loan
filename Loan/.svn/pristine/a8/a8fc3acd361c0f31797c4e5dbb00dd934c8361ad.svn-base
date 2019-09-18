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


    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/jquery.selectlist.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/rotation.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/style.css">
    <!-- <link rel="stylesheet/less" type="text/css" href="css/style.less" /> -->


    <!--[if IE 6]>
    <script src="../js/iepng.js" type="text/javascript"></script>
    <script type="text/javascript">
        EvPNG.fix('div, ul, img, li, input,span, p');
    </script>
    <![endif]-->
    <script>
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
        <img src="${pageContext.request.contextPath}/images/images/honor-fca2a20d08.jpg" width="923px" height="242" border="0" alt="">
        <div style="position:absolute;top:90px;left:320px;"><font style="font-size:28px;color:#fff;">资质荣誉</font><br><font style="font-size:12px;color:#fff;">Qualification Honor</font></div>
        <div style="position: relative;left:40px;width:100%;height: 85px;"><font style="font-weight:bolder;line-height: 85px;font-size: 18px;font-weight: 600;">资质证书</font></div>
        <div style="position: relative;left:30px;width:100%;text-align: center;height: ${li}px;">
            <c:forEach items="${l}" var="r">
                <div style="position: relative;left:10px;float:left;">
                    <div style="width:273px;border:1px solid #e6e6e6;">
                        <a class="image-icon" rel="gallery[modal]" title="" href="${pageContext.request.contextPath}/upload/${r.images}"><img src="${pageContext.request.contextPath}/upload/${r.images}" width="273" height="199" border="0" alt=""></a>
                    </div>
                    <div style="line-height: 57px;">${r.title}</div>
                </div>
            </c:forEach>
        </div>
        <div style="position: relative;left:40px;width:100%;height: 85px;"><font style="font-weight:bolder;line-height: 85px;font-size: 18px;font-weight: 600;">在线荣誉</font></div>
        <div style="position: relative;left:30px;width:923px;text-align: center;height: ${ii}px;">
            <c:forEach items="${i}" var="r">
                <div style="position: relative;left:10px;float:left;">
                    <div style="width:273px;border:1px solid #e6e6e6;">
                        <a class="image-icon" rel="gallery[modal]" title="" href="${pageContext.request.contextPath}/upload/${r.images}"><img src="${pageContext.request.contextPath}/upload/${r.images}" width="273" height="199" border="0" alt=""></a>
                    </div>
                    <div style="line-height: 57px;">${r.title}</div>
                </div>
            </c:forEach>
        </div>
        <div style="position: relative;height: 115px;"><font style="position: relative;left:605px;color:#818181;line-height: 85px;font-weight: 600;">法定代表人签名：</font><img src="${pageContext.request.contextPath}/images/images/penggang-194d4f2333.png" style="position: relative;top:30px;left:605px;" width="112" height="80" border="0" alt=""></div>
    </div>
</div>
</body>
<script>
    $("#u1l2a2").css("color","#F00");
    $('#u1l2').addClass('act');
    $('#i1').attr('class','up');
    $('#xxpl').addClass( "zm_cura");
    $('#t1').addClass('active');
</script>
</html>
