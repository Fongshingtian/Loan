<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html lang="zh-cn">
<head>
    <title>登录-中心财富在线</title>


    <link rel="shortcut icon" href="//image.xiaoniu88.com/static/WebXn/dist/images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/base-56e256b865.css">
    <script async="" src="http://www.google-analytics.com/analytics.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/zdzjs/account/base-6100562494.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.min.js"></script>

    <script>
        window.global = {
            cdn: "//image.xiaoniu88.com",
            siteroot: "http://www.xiaoniu88.com",
            staticPath: "//image.xiaoniu88.com/static/WebXn/dist",
            contextPath: "/user",
            serverTime: "1556162372487" * 1,
            userId: "",
            isLogin: false
        }
    </script>

    <script type="text/javascript" src="${pageContext.request.contextPath}/js/zdzjs/account/common-83987ed24e.js"></script>
    <script>
        $(function () {
            seajs.use('module/common/common')
        })
    </script>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/201610-fce9141272.css">

</head>
<style type="text/css">
    .yanzhenspan{
        display: inline-block;
        width: 125px;
        height: 45px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        font-style: italic;
        font-size: 20px;
        background-color: #f8b551;
        margin-left: 236px;
        border-radius: 2px;
        letter-spacing: 4px;
        cursor: pointer;
    }
</style>
<script type="text/javascript">
    // $("body").on("focus", "input", function () {
    //     $("#msg").removeClass("msg-show").html("");
    // });
    $(function () {
        $("#loginuser").click(function () {
           $(this).removeClass("error");
           $(this).addClass("active");
           $("#loginpwd").removeClass("active");
           $("#logincode").removeClass("active");
            $("#msg").html("");
            $("#msg").removeClass("msg-show");
        });
        $("#loginpwd").click(function () {
            $(this).removeClass("error");
            $(this).addClass("active");
            $("#loginuser").removeClass("active");
            $("#logincode").removeClass("active");
            $("#msg").html("");
            $("#msg").removeClass("msg-show");
        });
        $("#logincode").click(function () {
            $(this).removeClass("error");
            $(this).addClass("active");
            $("#loginuser").removeClass("active");
            $("#loginpwd").removeClass("active");
            $("#msg").html("");
            $("#msg").removeClass("msg-show");
        });

        $("#login-btn").click(function () {
            //得到三个组件的值
            var username=$("#username").val();
            var password=$("#password").val();
            var code=$("#code").val();
            var pcode=$("#pcode").html();//获取文本内容验证码
            var examineTele1 = /^(0|86|17951)?(13[0-9]|15[012356789]|17[01678]|18[0-9]|14[57])[0-9]{8}$/;  //手机验证
            if(username==null||username==""){
                $("#msg").html("");
                $("#msg").addClass("msg-show");
                $("#msg").html("请输入手机号码!");
                $("#loginuser").addClass("error");
                return false;
            }
            if(password==null||password==""){
                $("#msg").html("");
                $("#msg").addClass("msg-show");
                $("#msg").html("请输入密码!");
                $("#loginpwd").addClass("error");
                return false;
            }
            if(!examineTele1.test(username)){
                $("#msg").html("");
                $("#msg").addClass("msg-show");
                $("#msg").html("请输入正确格式的手机号!");
                $("#loginuser").addClass("error");
                return false;
            }
            if(code==null||code==""){
                //alert("请输入验证码");
                $("#msg").html("");
                $("#msg").addClass("msg-show");
                $("#msg").html("请输入验证码!");
                $("#logincode").addClass("error");
                return false;
            }
            if(code!=pcode){
                $("#msg").html("");
                $("#code").val("");//清空验证码的值
                $("#msg").addClass("msg-show");
                $("#msg").html("验证码输入错误!");
                $("#logincode").addClass("error");
                return false;
            }

            $.ajax({
                async:false,
                url: '${pageContext.request.contextPath}/account/login',
                type: 'post',
                data: {username:username,password:password},
                dataType:'json',

                success: function (data) {
                    var meg=data.results;

                    if(meg=="a"){//登入失败
                        alert("登入失败，密码或验证码错误！");
                    }
                    if(meg=="b"){//登入成功去首页

                        window.location.href="${pageContext.request.contextPath}/t2/test";
                    }
                }
        });

            //进入后台保存数据



        });
    });
    //更换验证码
    function changecode(){
        var pcode=$("#pcode").html();
        $.post("${pageContext.request.contextPath}/account/tocode",{},function (data) {
            var code=data.code;
            var pcode=$("#pcode").html(code);

        },"json")
    }

</script>

<body style="">
<!-- IE升级提示 360.cn -->
<div class="user-head">
    <div class="g-container">
        <div class="user-logo">
            <a href="${pageContext.request.contextPath}/t2/test" class="logo">
                <img src="${pageContext.request.contextPath}/images/zxcf_logo.png" alt="中心财富-专业P2P网平台">
            </a>

            <p>欢迎登录</p>

        </div>


    </div>
</div>
<!-- header end -->

<!-- content -->
<input type="hidden" value="" id="timeout">
<div class="login-content g-min1170" id="login-content">
    <div class="login-gg" id="login-gg">
        <ul style="height: 566px; position: absolute; top: 0px;">
            <li data-href="undefined"
                style="background-color: rgb(253, 250, 241); background-image: url(&quot;${pageContext.request.contextPath}/images/zdzimgs/account/20180416041111551.png&quot;); clear: both;"></li>
        </ul>
    </div>
    <div class="g-container" id="login-container">
        <div class="login-main">
            <form class="login-form" method="post" id="login-form">
                <p class="login-title"><a href="/account/toreg" class="login-reg">免费注册</a>登录中心财富</p>
                <!-- username -->
                <div class="form-item login-username" id="loginuser">
                    <label></label>
                    <input type="text" name="username" id="username" placeholder="手机号码" autocomplete="off">
                    <span class="clear clear-show"></span>
                </div>
                <!-- password -->
                <div class="form-item login-password" id="loginpwd">
                    <label></label>
                    <input type="password" name="password" id="password" placeholder="密码" onpaste="return false"
                           oncontextmenu="return false" oncopy="return false" oncut="return false" autocomplete="off"
                           maxlength="20">
                    <span class="clear clear-show"></span>
                </div>
                <!-- imgcode -->
                <div class="form-item form-imgcode" id="logincode">
                    <input type="text" name="code" id="code" placeholder="验证码" autocomplete="off" maxlength="6">
                    <span onclick="changecode();" id="pcode" class="yanzhenspan">${code}</span>
                </div>
                <div class="form-msg" id="msg"></div>
                <p class="login-remember">
                    <a href="#">忘记密码？</a>
                    <input type="checkbox" value="" checked="" id="remember">记住账号
                </p>
                <input type="button" class="form-btn" id="login-btn" style="cursor: pointer" value="登录"></input>
            </form>
        </div>
    </div>
</div>
<!-- foot end -->

<%--<script src="${pageContext.request.contextPath}/js/zdzjs/account/init-6fc716eaa1.js"></script>--%>
<script>
    window.sidebar = false;
    $(function () {
        seajs.use("user/login/js/init", function (login) {
            login.init();
        });
    });

</script>

<div style="display:none">
    <script>
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-104712537-1', 'auto');
        ga('send', 'pageview');

    </script>
</div>

<script>
    //百度统计
    var _hmt = _hmt || [];
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?7226b8c48cd07619c7a9ebd471d9d589";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
</script>


<script async="" src="https://qiyukf.com/script/bbf1f358fbe2baf496d7d57ff885bbd8.js"></script>
<div style="top: 0px; left: 0px; visibility: hidden; position: absolute; width: 1px; height: 1px;">
    <iframe style="height:0px; width:0px;" src="https://qiyukf.com/sdk/res/delegate.html?1556162374257"></iframe>
</div>
</body>
</html>