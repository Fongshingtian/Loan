<%--
  Created by IntelliJ IDEA.
  User: 毛明峰
  Date: 2019/4/24
  Time: 10:11
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/images/images/css/xxplstyle.css">
    <script type="text/javascript" src="${pageContext.request.contextPath}/images/images/js/jquery-1.7.2.min.js"></script>

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
<div style="width: 100%;">
    <jsp:include page="../common/top.jsp"></jsp:include>
    <jsp:include page="../common/top2.jsp"></jsp:include>
</div>
<div style="position: relative;left:80px;width:1200px;">
    <div class="cms-side"  style="float:left;" id="cms-side">
        <jsp:include page="left.jsp"></jsp:include>
    </div>
    <div style="position: relative;width:923px;float:left;background:#fff;" id="cssq">
        <div style="position: relative;width:880px;left:20px;">${one.content}</div>
        <div style="position: relative;height: 115px;"><font style="position: relative;left:605px;color:#818181;line-height: 85px;font-weight: 600;">法定代表人签名：</font><img src="${pageContext.request.contextPath}/images/images/penggang-194d4f2333.png" style="position: relative;top:30px;left:605px;" width="112" height="80" border="0" alt=""></div>
    </div>
</div>
</body>
<script>
    //给左边栏加选中
    var sqid="#u${ul}l${sl}a${sl}";
    var sqi="#u${ul}l${sl}";
    var sq="#i${ul}";
    $(sqid).css("color","#F00");
    $(sqi).addClass('act');
    $(sq).attr('class','up');
    $('#t'+${ul}).addClass('active');
    //导航栏
    $('#xxpl').addClass( "zm_cura");
    r=${ul};
</script>
</html>
