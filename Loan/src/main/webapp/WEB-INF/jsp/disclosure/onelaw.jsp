<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/images/images/css/xxplstyle.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/images/images/css/kb.css">
    <script type="text/javascript" src="${pageContext.request.contextPath}/images/images/js/jquery-1.7.2.min.js"></script>
    <jsp:include page="../common/resources.jsp"></jsp:include>
    <link rel="stylesheet" type="text/css" media="all" href="${pageContext.request.contextPath}/images/images/css/style.min.css" />
    <script>
        var r=2;
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
        <script>
            $("#u2l4a4").css("color","#F00");
            $('#u2l4').addClass('act');
            $('#i2').attr('class','up');
            $('#t2').addClass('active');
        </script>
    </div>
    <div class="kbdiv1">
        <%--<img src="${pageContext.request.contextPath}/images/images/media-80fec29113.jpg" width="923px" height="242" border="0" alt="">
        <div class="kbdiv2"><font class="kbfont1">媒体快报</font><br><font class="kbfont2">Media Express</font></div>
        --%>
            <div style="width: 950px;position: relative;">

                    <div style="width: 100%;text-align: center;">
                        <br/>
                        <font style="font-size:30px;font-weight:bold;">${oneNew.title}</font>
                    </div>
                        <br/>
                    <div style="float:left;float:right;">${oneNew.cdate}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</div>
                    <div style="width: 100%;margin:auto;">

                        <div style="width: 90%;margin:auto;">

                            <hr style="height:1px;border:none;border-top:1px groove skyblue;width: 100%;" />

                        </div>
                    </div>

                    <div  style="height:10px"></div>

                <div style="width: 100%;margin:auto;">

                    <div style="width: 90%;margin:auto;">

                        <div>${oneNew.context}
                            <div  style="height: 30px">

                            </div>
                        </div>
                    </div>
                </div>



                    <div  style="height: 50px;background-color: #f0f0f0;">

                    </div>

            </div>
    </div>

</div>
</body>
</html>