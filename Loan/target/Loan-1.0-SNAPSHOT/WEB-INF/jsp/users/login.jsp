<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html lang="en">
<head>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/WEB-INF/css/rotation.css">
    <title>登录页面</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/WEB-INF/css/mmfstyle.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/WEB-INF/css/jquery.selectlist.css">
    <jsp:include page="../common/resources.jsp"></jsp:include>
</head>
<body>

    <div class="zxcf_nav_wper">
        <div class="zxcf_nav clearfix px1000">
            <div class="zxcf_nav_l fl"><img src="../../images/zxcf_logo.png" alt=""></div>
            <div class="zxcf_nav_r fr">
                <img src="../../images/lg_pic01.png" alt="">
                <span>
                <a href="/t2/test">返回首页</a></span>

            </div>
        </div>
</div>
<!-- end  -->
<div class="login_con_wper">
    <div class="login_con px1000 ">
        <div class="lg_section clearfix">
            <div class="lg_section_l fl">
                <img src="../../images/lg_bg02.png">
            </div>
            <!-- end l -->
            <div class="lg_section_r fl">
                <h2 class="lg_sec_tit clearfix">
                    <span class="fl">登录</span>
                    <em class="fr">没有帐号，<a href="#">立即注册</a></em>
                </h2>
                <form action="/user/login" method="post">
                    <fieldset>
                        <p class="mt20">
                            <input type="text" name="uname" placeholder="用户名/手机" class="lg_input01 lg_input">
                        </p>
                        <p class="mt20">
                            <input type="password" name="loginpwd" placeholder="密码" class="lg_input02 lg_input">
                        </p>
                        <p class="clearfix lg_check"><span class="fl"><input type="checkbox">记住用户名</span><a href="#" class="fr">忘记密码？找回</a></p>
                        <p>
                        <input type="submit" class="lg_btn" value="立即登陆"><br>${msg}
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- footer start -->
<div class="zscf_aboutus_wper">
    <div class="zscf_aboutus px1000 clearfix">
        <div class="zscf_aboutus_l fl">
            <ul class="zscf_aboutus_lul clearfix">
                <li class="pt10"><a href="#"><img src="../../images/app.png" alt=""></a>
                </li>
                <li>
                    <p class="pb20">服务热线</p>
                    <strong>400-027-0101</strong>
                </li>
                <li>
                    <p class="pb10 linkpic">
                        <a href="#"><img src="../../images/ft_sina.png" alt=""></a>
                        <a href="#"><img src="../../images/ft_weixin.png" alt=""></a>
                        <a href="#"><img src="../../images/ft_erji.png" alt=""></a>
                    </p>
                    <p><a href="#">kefu@zhongxincaifu.com</a></p>
                </li>
            </ul>
        </div>
        <!-- end left -->
        <div class="zscf_aboutus_r fl clearfix">
            <a href="#" class="fl ft_ewm"><img src="../../images/ft_erweima.png" alt=""></a>
            <ul class="fl clearfix">
                <li><a href="#">联系我们</a></li>
                <li><a href="#">我要融资</a></li>
                <li><a href="problem.html">帮助中心</a></li>
                <li><a href="#">友情链接</a></li>
                <li><a href="#">招贤纳士</a></li>
                <li><a href="#">收益计算器</a></li>
            </ul>
        </div>
        <!-- end right -->

    </div>
</div>

<div style="position:relative;height:90px;width: 1347px;">
    <jsp:include page="../common/bottom.jsp"></jsp:include>
</div>
<!-- footer end -->
<script type="text/javascript" src="${pageContext.request.contextPath}/WEB-INF/js/rotation.js"></script>
<script src="${pageContext.request.contextPath}/WEB-INF/js/jquery-1.11.2.min.js"></script>
<script src="${pageContext.request.contextPath}/WEB-INF/js/jquery.selectlist.js"></script>
<script type="text/javascript">
    $(function(){
        $('#sy').addClass( "zm_cura");
        $('select').selectlist({
            zIndex: 10,
            width: 205,
            height: 40
        });
        $("#two").attr("class","divClass")
    })
</script>
<script type="text/javascript">
    function outlets() {
        var t1=$("#qwetedu").val();
        var t2=$("#qwetsalary").val();
        var t3="${pageContext.request.contextPath}/outlets?province="+t1+"&city="+t2+"";
        window.location.href=t3;
    }
</script>
</body>
</html>