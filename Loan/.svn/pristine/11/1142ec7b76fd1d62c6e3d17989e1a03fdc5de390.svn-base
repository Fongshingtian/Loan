<%--
  Created by IntelliJ IDEA.
  User: ZDZ
  Date: 2019/4/28
  Time: 19:24
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<jsp:include page="/WEB-INF/jsp/common/resources.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top2.jsp"></jsp:include>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>账户安全-中心财富</title>
    <link rel="shortcut icon" href="//image.xiaoniu88.com/static/WebXn/dist/images/favicon.ico" type="image/x-icon">
    <script charset="utf-8" src="https://tag.baidu.com/vcard/v.js?siteid=7391329&amp;url=https%3A%2F%2Fwww.xiaoniu88.com%2Fuser%2Fuasec&amp;source=&amp;rnd=1516420271&amp;hm=1"></script>
    <script src="//hm.baidu.com/hm.js?7226b8c48cd07619c7a9ebd471d9d589"></script>
    <script async="" src="https://www.google-analytics.com/analytics.js"></script>
    <script async="" src="https://qiyukf.com/script/bbf1f358fbe2baf496d7d57ff885bbd8.js"></script>

    <!--本地js与css-->
    <script type="text/javascript" src="/user/static/rsa/utility.js?v=1.0.2"></script>
    <script src="//image.xiaoniu88.com/static/WebXn/dist/lib/html5/html5-083d84e804.js"></script>
    <script src="${pageContext.request.contextPath}/js/zdzjs/account/init-2322a9b61c.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/zdzjs/account/base-6100562494.js"></script>
    <script src="${pageContext.request.contextPath}/js/zdzjs/account/init-037c1e8fa8.js"></script>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/base-56e256b865.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/style-ed9716a8f6.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/style-1ed5f9e4a1.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/style-54e8533899.css">
    <script>
        window.global = {
            cdn: "//image.xiaoniu88.com",
            siteroot: "http://www.xiaoniu88.com",
            staticPath: "//image.xiaoniu88.com/static/WebXn/dist",
            contextPath: "/user",
            serverTime: "1556422265421" * 1,
            userId: "6070489",
            isLogin: true
        }
    </script>
    <script type="text/javascript"
            src="//image.xiaoniu88.com/static/WebXn/dist/module/common/common-83987ed24e.js"></script>
    <script>
        $(function () {
            seajs.use('module/common/common')
        })
    </script>
    <style type="text/css">
        #YSF-BTN-HOLDER {
            position: fixed;
            max-width: 30px;
            max-height: 120px;
            right: 30px;
            bottom: 24px;
            cursor: pointer;
            overflow: visible;
            filter: alpha(opacity=100);
            opacity: 1;
            z-index: 9990
        }

        #YSF-BTN-HOLDER:hover {
            filter: alpha(opacity=95);
            opacity: .95
        }

        #YSF-BTN-HOLDER img {
            display: block;
            overflow: hidden;
        }

        #YSF-BTN-CIRCLE {
            display: none;
            position: absolute;
            right: -5px;
            top: -6px;
            width: auto;
            min-width: 12px;
            height: 20px;
            padding: 0 4px;
            background-color: #f00;
            font-size: 12px;
            line-height: 20px;
            color: #fff;
            text-align: center;
            white-space: nowrap;
            font-family: sans-serif;
            border-radius: 10px;
            z-index: 1;
        }

        #YSF-BTN-BUBBLE {
            display: none;
            position: absolute;
            left: -274px;
            bottom: -15px;
            width: 278px;
            height: 80px;
            box-sizing: border-box;
            padding: 14px 22px;
            filter: alpha(opacity=100);
            opacity: 1;
            background: url(https://qiyukf.com/sdk//res/img/sdk/bg_floatMsg2x.png) no-repeat;
            background: url(https://qiyukf.com/sdk//res/img/sdk/bg_floatMsg.png) 9;
            background-size: 278px 80px;
            z-index: 1;
        }

        #YSF-BTN-HOLDER.layer-6 {
            bottom: 0;
        }

        #YSF-BTN-HOLDER.layer-1 #YSF-BTN-BUBBLE {
            top: 0
        }

        #YSF-BTN-HOLDER.layer-6 #YSF-BTN-BUBBLE {
            bottom: -6px;
        }

        #YSF-BTN-BUBBLE:hover {
            filter: alpha(opacity=95);
            opacity: .95
        }

        #YSF-BTN-CONTENT {
            height: 45px;
            padding: 0;
            white-space: normal;
            word-break: break-all;
            text-align: left;
            font-size: 14px;
            line-height: 1.6;
            color: #222;
            overflow: hidden;
            z-index: 0;
        }

        #YSF-BTN-ARROW {
            display: none;
        }

        #YSF-BTN-CLOSE {
            position: absolute;
            width: 15px;
            height: 15px;
            right: 4px;
            top: -3px;
            filter: alpha(opacity=90);
            opacity: .9;
            cursor: pointer;
            background: url(https://qiyukf.com/sdk//res/img/sdk/btn-close.png) no-repeat;
            z-index: 1
        }

        #YSF-BTN-CLOSE:hover {
            filter: alpha(opacity=100);
            opacity: 1;
        }

        #YSF-PANEL-CORPINFO.ysf-chat-layeropen {
            width: 511px;
            height: 470px;
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, .15);
        }

        #YSF-PANEL-CORPINFO {
            position: fixed;
            bottom: 0px;
            right: 20px;
            width: 0;
            height: 0;
            z-index: 99999;
        }

        #YSF-PANEL-INFO.ysf-chat-layeropen {
            width: 311px;
            height: 470px;
            filter: alpha(opacity=100);
            opacity: 1;
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, .15);
        }

        #YSF-PANEL-INFO {
            position: fixed;
            bottom: 0px;
            right: 20px;
            width: 0px;
            height: 0px;
            filter: alpha(opacity=0);
            opacity: 0;
            z-index: 99999;
        }

        #YSF-PANEL-INFO .u-btn {
            background-color: #F96868
        }

        #YSF-CUSTOM-ENTRY {
            background-color: #F96868;
        }

        #YSF-CUSTOM-ENTRY-0 {
            position: relative;
            width: auto;
            background-color: #F96868;
            box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);
        }

        #YSF-CUSTOM-ENTRY-1 {
            position: relative;
            width: auto;
            background-color: #F96868;
            border-radius: 14px;
            box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);
        }

        #YSF-CUSTOM-ENTRY-2 {
            position: relative;
            width: auto;
            background-color: #F96868;
            border-radius: 0;
            box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);
        }

        #YSF-CUSTOM-ENTRY-3 {
            position: relative;
            width: auto;
            background-color: #F96868;
            border-radius: 50%;
            box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);
        }

        #YSF-CUSTOM-ENTRY-4 {
            position: relative;
            width: auto;
            background-color: #F96868;
            border-radius: 50%;
            box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);
        }

        #YSF-CUSTOM-ENTRY-5 {
            position: relative;
            width: auto;
            background-color: #F96868;
            border-radius: 5px;
            box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);
        }

        #YSF-CUSTOM-ENTRY-6 {
            position: relative;
            width: auto;
            background-color: #F96868;
            border-radius: 5px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        #YSF-CUSTOM-ENTRY-0 img {
            max-width: 300px;
            height: auto;
        }

        #YSF-CUSTOM-ENTRY-1 img {
            width: 28px;
            height: auto;
        }

        #YSF-CUSTOM-ENTRY-2 img {
            width: 58px;
            height: auto;
        }

        #YSF-CUSTOM-ENTRY-3 img {
            width: 60px;
            height: auto;
        }

        #YSF-CUSTOM-ENTRY-4 img {
            width: 60px;
            height: auto;
        }

        #YSF-CUSTOM-ENTRY-5 img {
            width: 60px;
            height: auto;
        }

        #YSF-CUSTOM-ENTRY-6 img {
            width: 115px;
            height: auto;
        }

        #YSF-IFRAME-LAYER {
            border: 0;
            outline: none;
        }

        .ysf-online-invite-wrap {
            z-index: 10001;
            position: fixed;
            _position: absolute;
            top: 50%;
            left: 50%;
        }

        .ysf-online-invite {
            position: relative;
            top: -50%;
            left: -50%;
            cursor: pointer;
        }

        .ysf-online-invite img {
            display: block;
            width: 250px;
        }

        .ysf-online-invite .ysf-online-invite-img {
            width: 100%;
            height: 100%
        }

        .ysf-online-invite .text {
            position: absolute;
            top: -11px;
            left: 0;
            right: 0;
            overflow: hidden;
            margin: 36px 20px 0 67px;
            line-height: 140%;
            color: #526069;
            font-size: 14px;
            font-family: "Microsoft YaHei", "微软雅黑", tahoma, arial, simsun, "宋体";
            text-align: left;
            white-space: normal;
            word-wrap: break-word;
        }

        .ysf-online-invite .close {
            position: absolute;
            top: -6px;
            right: -6px;
            width: 32px;
            height: 32px;
            background: url(https://qiyukf.com/sdk/res/img/invite-close.png) no-repeat;
            cursor: pointer;
        }

        .ysf-online-invite .close.custom {
            top: -16px;
            right: -16px;
        }

        #YSF-PANEL-MOBILE {
            background: rgba(46, 47, 49, 0.7);
            position: fixed;
            bottom: 0px;
            right: 0px;
            width: 100%;
            height: 0px;
            transition-property: height, bottom;
            transition-duration: 0.3s;
            transition-timing-function: ease;
            transition-delay: 0s;
            z-index: 9999;
        }

        #YSF-PANEL-MOBILE.ysf-chat-layeropen {
            width: 100%;
            height: 100%;
            transition-property: height, bottom;
            transition-duration: 0.3s;
            transition-timing-function: ease;
            transition-delay: 0s;
        }

        #YSF-IFRAME-LAYER.ysf-chat-mobile-layeropen {
            height: 90% !important;
            transition-property: height, bottom;
            transition-duration: 0.3s;
            transition-timing-function: ease;
            transition-delay: 0s;
        }

        #YSF-IFRAME-LAYER {
            position: absolute;
            bottom: 0px;
            left: 0;
            right: 0px;
            width: 0px;
            height: 0px;
            transition-property: height, bottom;
            transition-duration: 0.3s;
            transition-timing-function: ease;
            transition-delay: 0s;
            z-index: 9999;
        }

        .YSF-PANEL-BODY-FIXED {
            position: fixed !important;
            left: 0;
            right: 0;
        }</style>
    <style id="poshytip-css-tip-yellow" type="text/css">
        div.tip-yellow {
            visibility: hidden;
            position: absolute;
            top: 0;
            left: 0;
        }

        div.tip-yellow table.tip-table, div.tip-yellow table.tip-table td {
            margin: 0;
            font-family: inherit;
            font-size: inherit;
            font-weight: inherit;
            font-style: inherit;
            font-variant: inherit;
            vertical-align: middle;
        }

        div.tip-yellow td.tip-bg-image span {
            display: block;
            font: 1px/1px sans-serif;
            height: 10px;
            width: 10px;
            overflow: hidden;
        }

        div.tip-yellow td.tip-right {
            background-position: 100% 0;
        }

        div.tip-yellow td.tip-bottom {
            background-position: 100% 100%;
        }

        div.tip-yellow td.tip-left {
            background-position: 0 100%;
        }

        div.tip-yellow div.tip-inner {
            background-position: -10px -10px;
        }

        div.tip-yellow div.tip-arrow {
            visibility: hidden;
            position: absolute;
            overflow: hidden;
            font: 1px/1px sans-serif;
        }</style>
</head>

<body style="">
<script type="text/javascript">
    $(function () {
        //修改交易密码的手机号码隐藏设置
        var bankphone=$("#bankphone").val();
        if(bankphone!=null&&bankphone!=''){
            var t3val="";
            for (var i = 0; i <3 ; i++) {
                t3val+=bankphone[i];
            }
            t3val+="****";
            for (var i = bankphone.length-4; i <bankphone.length ; i++) {
                t3val+=bankphone[i];
            }
            $("#phonetext").text(t3val);

        }

        // 设置登入手机号隐藏设置(手机认证)
        var myphone=$("#myphone").val();
        if(myphone!=null&&myphone!=''){
            var p1="";
            for (var i = 0; i <3 ; i++) {
                p1+=myphone[i];
            }
            p1+="****";
            for (var i = myphone.length-4; i <myphone.length ; i++) {
                p1+=myphone[i];
            }
            $("#myphonetext").text(p1);
            $("#myphonetext2").text(p1);
        }


        var t1=$("#reanname").val();
        if(t1=='true'){
            var t2=$("#reanname1").val();//真实姓名
            var t3=$("#reanname2").val();//身份证
            var t2val="";
            var t3val="";
            for (var i = 0; i < 1; i++) {
                t2val=t2[i];
            }
            for (var i = 0; i <4 ; i++) {
                t3val+=t3[i];
            }
            t2val+="**";
            t3val+="************";
            for (var i = t3.length-2; i <t3.length ; i++) {
                t3val+=t3[i];
            }
            $("#reanname1val").text(t2val);
            $("#reanname2val").text(t3val);
        }

        //手机号码隐藏(交易密码部分)
        if(t1=='true'){//已实名认证，交易密码为空时
            var realidpwd=$("#realidpwd").val();
            if(realidpwd==null||realidpwd==''){
                var phone=$("#phone1").val();
                var phone1="";
                for (var i = 0; i < 3; i++) {
                    phone1+=phone[i];
                }
                phone1+="****";
                for (var i = phone.length-4; i <phone.length ; i++) {
                    phone1+=phone[i];
                }
                $("#phoneval").text(phone1);
            }

        }

        //点击获取验证码
        $("#phonecode").click(function () {
            //得到手机号
            var phone= $("#phone1").val();
            $.post("/account/sendyzm",{phone:phone},function (data) {
                alert("验证码已发送您的手机，请注意查收");
                //得到验证码
                var msg=data.msg;
                $("#sendcode").val(msg);//设置验证码
            },'json');

        });

        //点击获取修改交易密码时的验证码
        $("#getcode").click(function () {
            var bankphone=$("#bankphone").val();
            $.post("/account/sendyzm",{phone:bankphone},function (data) {
                //得到验证码
                alert("验证码已发送您的手机，请注意查收");
                var msg=data.msg;
                $("#codetext").val(msg);//设置验证码
            },'json');
        });


        //手机认证获取验证码
        $("#sjyz_xg_step1_type1_getpcode").click(function () {
            alert("手机获取验证码进来了");
            var myphone=$("#myphone").val();//手机号码
            $.post("/account/sendyzm",{phone:myphone},function (data) {
                //得到验证码
                alert("验证码已发送您的手机，请注意查收");
                var msg=data.msg;
                $("#codetext").val(msg);//设置验证码
            },'json');

        });

        //修改交易密码
        $("#jymm_xg_sub_btn").click(function () {
            var uid=$("#userid").val();
            //得到真实验证码
            var realcode=$("#codetext").val();
            //得到填入的验证码
            var code=$("#jymm_xg_code").val();
            //得到原交易密码(真实)
            var idpwdreal=$("#realidpwd").val()
            //得到填入的原交易密码
            var idpwd=$("#jymm_xg_old_trapwd").val();
            //得到两个密码
            var idpwd1=$("#jymm_xg_trapwd").val();
            var idpwd2=$("#jymm_xg_trapwd_qr").val();
            if(code==null||code==''){
                alert("请输入验证码");
                return false;
            }
            if(idpwd==null||idpwd==''){
                alert("请输入原交易密码");
                return false;
            }
            if(realcode!=code){
                alert("验证码错误");
                return false;
            }
            if(idpwdreal!=idpwd){
                alert("原交易错误");
                return false;
            }
            if(idpwd1==null||idpwd1==''){
                alert("请输入六位数的交易密码");
                return false;
            }
            if(idpwd2==null|idpwd2==''){
                alert("请确认交易密码");
                return false;
            }
            if(idpwd1.length!=6){
                alert("请输入六位数的交易密码");
                return false;
            }
            if(idpwd1!=idpwd2){
                alert("两次密码输入不正确！");
                return false;
            }
            $.post("/account/updidpwd",{uid:uid,idpwd:idpwd1},function (data) {
                alert("修改成功");
                window.location.reload();//加载页面
            },'json');

        });

        //交易密码第一步
        $("#step1check").click(function () {
            //得到真实验证码
            var realcode=$("#sendcode").val();
            //得到填入的验证码
            var code=$("#jymm").val();
            if(realcode!=code){
                alert("验证码错误");
                return false;
            }
            //将步骤1隐藏，将步骤2显示
            $("#step_1").css("display","none");
            $("#step_2").css("display","block");
        });

        //交易密码第二步
        $("#idpwdcheck").click(function () {
            //得到两个密码
            var idpwd1=$("#idpwd1").val();
            var idpwd2=$("#idpwd2").val();
            var uid=$("#userid").val();
            if(idpwd1==null||idpwd1==''){
                alert("请输入六位数的交易密码");
                return false;
            }
            if(idpwd2==null|idpwd2==''){
                alert("请确认交易密码");
                return false;
            }
            if(idpwd1.length!=6){
                alert("请输入六位数的交易密码");
                return false;
            }
            if(idpwd1!=idpwd2){
                alert("两次密码输入不正确！");
                return false;
            }
            $.post("/account/updidpwd",{uid:uid,idpwd:idpwd1},function (data) {
                alert("修改成功");
            },'json');

            $("#step_1").css("display","none");
            $("#step_2").css("display","none");
            $("#step_3").css("display","block");
        });
        //第三步，提交成功
        $("#step3").click(function () {
            $("#step_1").css("display","block");
            $("#step_2").css("display","none");
            $("#step_3").css("display","none");
            window.location.reload();//加载页面
        });
    });


    //推荐人邀请码
    <%--function codecheck(uid){--%>
        <%--var code= $("#setrefferee").val();--%>
        <%--if(code==null||code==''){--%>
            <%--return false;--%>
        <%--}--%>
        <%--$.ajax({--%>
            <%--async:false,--%>
            <%--url: '${pageContext.request.contextPath}/account/checkcode',--%>
            <%--type: 'post',--%>
            <%--data: {code:code,uid:uid},--%>
            <%--dataType:'json',--%>

            <%--success: function (data) {--%>
                <%--var meg=data.mesg;--%>
                <%--if(meg=="2"){//邀请码不存在--%>
                    <%--alert("该邀请码不存在");--%>
                <%--}--%>
                <%--if(meg=="1"){--%>
                    <%--//再去添加邀请码--%>
                    <%--$.ajax({--%>
                        <%--async:false,--%>
                        <%--url: '${pageContext.request.contextPath}/account/addcode',--%>
                        <%--type: 'post',--%>
                        <%--data: {code:code,uid:uid},--%>
                        <%--dataType:'json',--%>

                        <%--success: function (data) {--%>
                            <%--alert("添加成功");--%>
                            <%--window.location.href="${pageContext.request.contextPath}/account/tosecur?uid="+uid;--%>
                        <%--}--%>
                    <%--});--%>

                <%--}--%>
            <%--}--%>
        <%--});--%>


    <%--}--%>

</script>
<%--签到领积分--%>
<script type="text/javascript">
    function addjf(uid) {
        var tt=$("#ischeck").text();
        if(tt=='签到领积分'){
            $.post("/account/addjf",{uid:uid},function (data) {
                alert(data.ss);
                $("#ischeck").text('今天已签到');
            },'json');
        }

    }
</script>
<input value="true" type="hidden" id="isLogin">
<input value="${user.uid}" id="userid" type="hidden">
<div class="affiche" id="afficheModel">
    <span>小牛在线提醒您：为了更流畅的访问本网站，建议您使用IE9.0及以上版本浏览器或360浏览器。
        <a class="link" href="http://se.360.cn" target="_blank" rel="nofollow">点击进入360官网下载&gt;&gt;</a>
    </span>
    <i class="icon-common icon-common-close"></i>
</div>
<!-- 最外层容器container -->
<div class="container">
    <div class="g-account-main">

        <div class="path">
            您现在的位置：<span>我的账户 &gt; 账户安全</span>

        </div>
        <div class="center user-box">
            <!-- 我的账户菜单 -->
            <!--start 我的账户左边菜单列表-->
            <div class="account-list">
                <div class="account-info">
                    <div class="member-info">
                        <div>
                            <span class="name" id="username">${user.uname}</span>
                            <span class="member-level pop-tip member-level-0" id="member-level" title="<a target='_blank' href='/user/member/benefits'>了解更多权益</a>">普通会员</span>
                        </div>
                        <div class="security-level">
                            账户安全：<span id="security-level">
                            高<a href="/user/uasec">{提升}</a>
                            </span>
                        </div>
                    </div>
                    <div class="badge-info">
                        <i class="badge-icon badge-planner pop-tip" id="badge-planner"
                           title="您是理财师<br><a href=&quot;/financier/overview&quot; target=&quot;_blank&quot;>查看邀请好友规则</a>"></i>

                        <%--判断是否实名认证--%>
                        <c:if test="${user.realname=='false'}">
                            <a href="/account/toapp?uid=${user.uid}">
                                <i  class="badge-icon badge-realname middle pop-tip"title="未实名登记，请去实名登记">
                                </i>
                            </a>
                        </c:if>
                        <c:if test="${user.realname=='true'}">
                            <i class="badge-icon badge-realname middle pop-tip enable"
                               title="已实名登记">
                            </i>

                        </c:if>
                        <c:if test="${bank=='true'}">
                            <i class="badge-icon badge-bindcard pop-tip enable"  title="已绑卡"></i>
                        </c:if>
                        <c:if test="${bank=='false'}">
                            <a href="/account/toapp?uid=${user.uid}">
                                <i class="badge-icon badge-bindcard pop-tip" title="未绑卡，去绑卡">

                                </i>
                            </a>
                        </c:if>

                    </div>
                    <div class="point-info" id="riskLevel-info">
                        风险评估：稳健型<a class="startAssess" href="javascript:;"
                                   target="_blank">【重新测评】</a>
                    </div>
                    <div class="point-info">
                        我的积分：<a href="/bonus/point/index" target="_blank" id="point-info"
                                data-bind="pointBalance">${user.point}</a>
                        <a href="#" target="_blank">【积分换礼】</a>
                    </div>
                    <div id="sign-info" class="sign-info">
                        <c:if test="${res=='1'}">
                            <a class="signin-btn signIn" href="javascript:addjf('${user.uid}');" id="ischeck">签到领积分</a>
                        </c:if>
                        <c:if test="${res=='2'}">
                            <a class="signin-btn already-signIn" href="javascript:;">今天已签到</a>
                        </c:if>
                    </div>
                </div>

                <ul class="g-cf left-menu">
                    <li data-type="index">
                        <a class="h2" href="/account/toacc?uid=${user.uid}"><b>账户总览</b></a>
                    </li>
                    <li data-type="invest">
                        <a href="/account/toloan?uid=${user.uid}">我的网贷</a>
                    </li>
                    <li data-type="record">
                        <a href="/account/torecord?uid=${user.uid}">资金记录</a>
                    </li>
                    <li data-type="datum" class="cur">
                        <a href="/account/tosecur?uid=${user.uid}">账户安全</a>
                    </li>
                    <li data-type="bankCard" class="last">
                        <a href="/account/toapp?uid=${user.uid}">银行卡管理</a>
                    </li>
                    <li data-type="news">
                        <a href="/account/tomessage?uid=${user.uid}">我的消息<span id="msg-count">(2)</span></a>
                    </li>
                    <li data-type="redEnvelope">
                        <a href="/account/coupon">我的优惠<span id="bonus-count"></span></a>
                    </li>
                    <li data-type="point">
                        <a href="/account/topoint?uid=${user.uid}">我的积分</a>
                    </li>

                    <li class="planner last" data-type="planner">
                        <a href="/account/tofriend?uid=${user.uid}">我的好友<span>赚收益</span></a>
                    </li>
                </ul>

                <div class="qqun">
                    <p class="q1 g-dn">客户交流群：
                        <br>521069624
                        <a class="qq-icon" target="_blank" rel="nofollow">
                           <%--href="//shang.qq.com/wpa/qunwpa?idkey=772aceff2684cb1e0a2904e4550e02e37ce7cf7900bacdccc6ecc562706ec6f2">--%>
                            <img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="小牛在线客户交流群④"
                                 title="中心财富在线客户交流群④">
                        </a>
                    </p>
                    <p class="q2">投标计划群：
                        <br>479230479
                        <a class="qq-icon" target="_blank" rel="nofollow"
                           href="//shang.qq.com/wpa/qunwpa?idkey=0359784f6397235da982b8db57f19d699a396ea11da21e430395253ab6035580">
                            <img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="小牛在线客户交流群②"
                                 title="小牛在线客户交流群②">
                        </a>
                    </p>
                    <div class="g-cf">
                        <span class="g-fl">微信客服号：<br>niubaobao88888</span>
                        <div class="weixin-icon" data-key="kfh01">
                            <i></i>
                            <img width="103px" height="103px"
                                 src="//image.xiaoniu88.com//image/image_upload/e37a1c93-216f-4e35-88d9-5ae374895b9b.jpg">
                        </div>
                    </div>
                </div>
            </div>

            <script>
                $(function () {
                    seajs.use('module/userNavList/js/init');
                });
            </script>
            <!--end 我的账户左边菜单列表-->

            <!-- 右侧内容 -->
            <div class="account-cont">
                <!-- 右侧标题 -->
                <div class="at-til">
                    <span class="name">账户安全</span>
                </div>
                <!-- 具体内容-账户安全 -->
                <div class="at-bd red-envelope">
                    <!-- 顶部 -->
                    <div class="zccount_msg">
                        <div class="account_number">
                            <span class="account_name">${user.uname}</span>
                            <span class="account_regTime">注册时间&nbsp;&nbsp;${user.zcdata}</span>
                            <%--&lt;%&ndash;当推荐人没有填的时候进来&ndash;%&gt;--%>
                            <%--<c:if test="${user.tjrcode==null||user.tjrcode==''}">--%>
                                <%--<a href="javascript:" class="account_addrecommend">填写推荐人邀请码</a>--%>
                            <%--</c:if>--%>

                        </div>


                        <div id="dialogCode">
                            <div class="recommend_pop">
                                <form method="post" onsubmit="return codecheck('${user.uid}');">
                                    <div class="rp_step rp_step1">
                                        <ul>
                                            <li codecheckclass="g-cf">
                                                <div class="g-fl rp_field">我的推荐人邀请码：</div>
                                                <div class="rp_value">
                                                    <input type="text" id="setrefferee" name="code" placeholder="请填写您的推荐人邀请码"
                                                           class="rp_txt"><br><span class="rp_error">请输入正确的推荐人邀请码!</span>
                                                </div>
                                            </li>
                                            <li class="g-cf">
                                                <div class="g-fl rp_field"></div>
                                                <div class="rp_value">
                                                    <input type="submit" id="rp_btn" class="rp_btn" value="提交">
                                                </div>
                                            </li>
                                        </ul>
                                        <p class="rp_tips">您的推荐人邀请码成功提交后,将不可更改。</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <%--账户等级检测--%>
                        <%-- <div class="security_level">
                            <span class="inline_block">您的账户安全等级：</span>
                            <span class="inline_block level_level_num">
										低
								</span>
                            <span class="inline_block">
									<div class="level_100">
										<div style="width:30%"></div>
									</div>
								</span>
                            <a id="resetAccountLevel" class="inline_block">重新检验</a>
                        </div>--%>
                    </div>
                    <!-- 账户安全设置列表 -->
                    <div class="account_list">
                        <!--1： 实名认证 -->
                        <c:if test="${user.realname=='false'}">
                            <div myid="realName" class="column">

                                <div class="column_name not_seted">

                                    实名认证
                                </div>
                                <div class="column_msg">

											<span class="setting">
												<a mytarget="smdj_rz" href="/account/toapp?uid=${user.uid}">请设置</a>
											</span>

                                    <span class="column_info">合同有效性、资金提现的有力保障，成功提交后不可更改</span>
                                    <span class="info_con"></span>
                                    <span class="info_con"></span>
                                </div>

                            </div>
                        </c:if>
                        <%--已实名认证--%>
                        <c:if test="${user.realname=='true'}">
                            <div myid="realName" class="column">
                                <div class="column_name seted">
                                    实名认证
                                </div>
                                <div class="column_msg">
                                    <input type="hidden" value="${user.realname}" id="reanname">
                                    <input type="hidden" value="${real.realname}" id="reanname1">
                                    <input type="hidden" value="${real.idcard}" id="reanname2">
                                    <span class="has_seted">已实名</span>
                                    <span class="column_info">合同有效性、资金提现的有力保障，成功提交后不可更改</span>
                                    <span class="info_con" id="reanname1val"></span>
                                    <span class="info_con" id="reanname2val"></span>
                                </div>
                            </div>
                        </c:if>

                        <!--2： 交易密码 -->
                        <%--以实名认证--%>
                        <c:if test="${user.realname=='true'}">
                            <input type="hidden" value="${real.idpwd}" id="realidpwd">
                            <c:if test="${real.idpwd==null||real.idpwd==''}">
                                <div myid="tdpwd" class="column">
                                    <div class="column_name not_seted">
                                        交易密码
                                    </div>
                                    <div class="column_msg">
                                        <span class="setting"><a mytarget="step_1" class="showSetting">请设置</a></span>

                                        <span class="cancel_setting"><a class="cancel_action">取消</a></span>

                                        <span class="column_info">
											原提现密码，保障账户资金安全，提现或改动账户信息的时候需要输入的密码
									</span>
                                    </div>
                                    <form id="jymm_form" class="column_form">
                                        <div>
                                            <div class="step_1" id="step_1">
                                                <!-- 第一步 -->
                                                <ul class="steps step1">
                                                    <li>验证身份</li>
                                                    <li class="align_center">设置交易密码</li>
                                                    <li class="align_right">修改完成</li>
                                                </ul>
                                                <table class="form_type for_step1">
                                                    <tbody>
                                                    <tr>
                                                        <td class="align_right">当前号码：</td>
                                                        <input type="hidden" value="${real.bankphone}" id="phone1">
                                                        <td><span class="display_form" id="phoneval"></span></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align_right">验证码：</td>
                                                        <td>
                                                            <input type="hidden" id="sendcode" value="">
                                                            <input class="code_form" id="jymm" type="text">
                                                            <a id="phonecode" class="get_code inline_block">
                                                                <span class="get_code_text">获取验证码</span>
                                                            </a>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="tips"></td>
                                                        <td class="tips">
                                                            <div id="jymm_rz_step1_phonecodeTip" class="tips_content"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td class=""><a id="step1check" class="sbm_btn inline_block">下一步</a>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="step_2" id="step_2">
                                                <!-- 第二步 -->
                                                <ul class="steps step2">
                                                    <li>验证身份</li>
                                                    <li class="align_center">设置交易密码</li>
                                                    <li class="align_right">修改完成</li>
                                                </ul>
                                                <table class="form_type for_step2">
                                                    <tbody>
                                                    <tr>
                                                        <td class="align_right">设置密码：</td>
                                                        <td><input id="idpwd1" type="password"></td>
                                                        <td class="width250">
                                                            <div id="jymm_rz_step2_new_pwdTip" class="tips_content"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="tips"></td>
                                                        <td class="tips"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align_right">再次输入密码：</td>
                                                        <td><input id="idpwd2" type="password"></td>
                                                        <td class="width250">
                                                            <div id="jymm_rz_step2_new_pwd_qrTip" class="tips_content"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="tips"></td>
                                                        <td class="tips"></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td class=""><a id="idpwdcheck" class="sbm_btn inline_block">下一步</a>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="step_3" id="step_3">
                                                <!-- 第三步 -->
                                                <ul class="steps step3">
                                                    <li>验证身份</li>
                                                    <li class="align_center">设置交易密码</li>
                                                    <li class="align_right">修改完成</li>
                                                </ul>
                                                <table class="form_type for_step3">
                                                    <tbody>
                                                    <tr>
                                                        <td class="align_center"><span class="size_16">设置密码成功</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align_center">
                                                            <a id="step3"  class="sbm_btn inline_block">确&nbsp;&nbsp;定</a>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="form_msg">
                                            <p>
                                                <font class="blod">温馨提示：</font>请确保设置的交易密码与登录密码不同，并定期更换交易密码，以确保您的账户更安全。
                                            </p>
                                        </div>

                                    </form>
                                </div>
                            </c:if>
                            <c:if test="${real.idpwd!=null&&real.idpwd!=''}">
                               <input value="${real.bankphone}" type="hidden" id="bankphone">
                                <%--以填写需修改--%>
                                <div myid="tdpwd" class="column">
                                    <div class="column_name seted">
                                        交易密码
                                    </div>
                                    <div class="column_msg">

                                        <span class="setting"><a mytarget="jymm_xg" class="showSetting">修改</a><span class="dividing_line">|</span><a mytarget="step_1" class="showSetting">找回</a></span>
                                        <span class="cancel_setting"><a class="cancel_action">取消</a></span>

                                        <span class="column_info">

											原提现密码，保障账户资金安全，提现或改动账户信息的时候需要输入的密码
									</span>
                                    </div>
                                    <form id="jymm_form" class="column_form">
                                        <div>
                                            <div class="step_1">
                                                <!-- 第一步 -->
                                                <ul class="steps step1">
                                                    <li>验证身份</li><li class="align_center">设置交易密码</li><li class="align_right">设置完成</li>
                                                </ul>
                                                <table class="form_type for_step1">

                                                    <tbody><tr>
                                                        <td class="align_right">身份证号：</td>
                                                        <td><input id="idcard" type="text"></td>
                                                        <td class="width250"><div id="jymm_zh_step1_idnoTip" class="tips_content"></div></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="tips"></td>
                                                        <td class="tips"></td>
                                                    </tr>

                                                    <tr>
                                                        <td class="align_right">绑定手机：</td>
                                                        <td><span class="display_form"></span></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align_right">验证码：</td>
                                                        <td><input id="jymm_zh_step1_phnoecode" class="code_form" type="text"><a id="jymm_zh_step1_getcode" class="get_code inline_block"><span class="get_code_text">获取验证码</span></a></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="tips"></td>
                                                        <td class="tips"><div id="jymm_zh_step1_phnoecodeTip" class="msg_tips_con"></div></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td class=""><a id="jymm_zh_step1_submit" class="sbm_btn inline_block">下一步</a></td>
                                                        <td></td>
                                                    </tr>
                                                    </tbody></table>
                                            </div>
                                            <div class="step_2">
                                                <!-- 第二步 -->
                                                <ul class="steps step2">
                                                    <li>验证身份</li><li class="align_center">设置交易密码</li><li class="align_right">设置完成</li>
                                                </ul>
                                                <table class="form_type for_step2">
                                                    <tbody><tr>
                                                        <td class="align_right">设置新密码：</td>
                                                        <td><input id="jymm_zh_step2_newpwd" type="password" oncut="return false" oncopy="return false" oncontextmenu="return false" onpaste="return false"></td>
                                                        <td class="width250"><div id="jymm_zh_step2_newpwdTip" class="tips_content"></div></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="tips"></td>
                                                        <td class="tips"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align_right">再次输入密码：</td>
                                                        <td><input id="jymm_zh_step2_newpwd_qr" type="password" oncut="return false" oncopy="return false" oncontextmenu="return false" onpaste="return false"></td>
                                                        <td class="width250"><div id="jymm_zh_step2_newpwd_qrTip" class="tips_content"></div></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="tips"></td>
                                                        <td class="tips"></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td class=""><a id="jymm_zh_step2_submit" class="sbm_btn inline_block">下一步</a></td>
                                                    </tr>
                                                    </tbody></table>
                                            </div>
                                            <div class="step_3">
                                                <!-- 第三步 -->
                                                <ul class="steps step3">
                                                    <li>验证身份</li><li class="align_center">设置交易密码</li><li class="align_right">设置完成</li>
                                                </ul>
                                                <table class="form_type for_step3">
                                                    <tbody><tr>
                                                        <td class="align_center"><span class="size_16">设置密码成功</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align_center"><a href="javascript:window.location.reload()" class="sbm_btn inline_block">确&nbsp;&nbsp;认</a></td>
                                                    </tr>
                                                    </tbody></table>
                                            </div>
                                            <!-- 直接修改 -->
                                            <div class="jymm_xg">
                                                <table class="form_type">
                                                    <tbody><tr>
                                                        <td class="align_right">原交易密码：</td>
                                                        <td class="width220">
                                                            <input name="jymm_xg_old_trapwd" id="jymm_xg_old_trapwd" oncut="return false" oncopy="return false" oncontextmenu="return false" onpaste="return false" type="password">
                                                        </td>
                                                        <td class="width250"><div id="jymm_xg_old_trapwdTip"></div></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="tips"></td>

                                                        <td class="tips"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align_right">新交易密码：</td>
                                                        <td><input name="jymm_xg_trapwd" id="jymm_xg_trapwd" oncut="return false" oncopy="return false" oncontextmenu="return false" onpaste="return false" type="password"></td>
                                                        <td class="width250"><div id="jymm_xg_trapwdTip" class="tips_content"></div></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="tips"></td>
                                                        <td class="tips"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align_right">确认新密码：</td>
                                                        <td>
                                                            <input name="jymm_xg_trapwd_qr" id="jymm_xg_trapwd_qr" type="password" oncut="return false" oncopy="return false" oncontextmenu="return false" onpaste="return false">
                                                        </td>
                                                        <td class="width250">
                                                            <div id="jymm_xg_trapwd_qrTip" class="tips_content"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="tips"></td>
                                                        <td class="tips"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align_right">绑定手机：</td>
                                                        <td><span class="display_form" id="phonetext"></span></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="tips"></td>
                                                        <td class="tips"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align_right">验证码：</td>
                                                        <td>
                                                            <input id="codetext" type="hidden">
                                                            <input id="jymm_xg_code" class="code_form" type="text">
                                                            <a id="getcode" class="get_code inline_block">
                                                                <span class="get_code_text">获取验证码</span>
                                                            </a>
                                                        </td>
                                                        <td class="width250">
                                                            <div id="jymm_xg_er" class="tips_content"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="tips"></td>
                                                        <td class="tips" colspan="2">
                                                            <div id="jymm_xg_potcode" class="msg_tips_con"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="tips"></td>
                                                        <td class="tips"></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td class="">
                                                            <a id="jymm_xg_sub_btn" class="sbm_btn inline_block">确&nbsp;&nbsp;定</a>
                                                        </td>
                                                    </tr>
                                                    </tbody></table>
                                            </div>
                                        </div>
                                        <div class="form_msg">
                                            <p>
                                                <font class="blod">温馨提示：</font>请确保设置的交易密码与登录密码不同，并定期更换交易密码，以确保您的账户更安全。
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </c:if>
                        </c:if>
                        <%--先去实名认证--%>
                        <c:if test="${user.realname=='false'}">
                            <div myid="tdpwd" class="column">

                                <div class="column_name not_seted">
                                    交易密码
                                </div>
                                <div class="column_msg">

                                    <span class="setting"><a mytarget="step_1" class="showSetting">请设置</a></span>
                                    <span class="cancel_setting"><a class="cancel_action">取消</a></span>
                                    <span class="column_info">
											原提现密码，保障账户资金安全，提现或改动账户信息的时候需要输入的密码
									</span>
                                </div>
                                <form class="column_form">
                                    <table class="form_type yykrz_xg setting_other marginAuto">
                                        <tbody>
                                        <tr>
                                            <td class="align_center"><span class="size_16">请先设置实名登记，<a class="link"
                                                                                                       href="/account/toapp?uid=${user.uid}">马上设置</a></span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        </c:if>

                        <!--3： 银行卡认证 -->
                        <%--先去实名认证--%>
                        <c:if test="${user.realname=='false'}">
                            <div class="column">

                                <div class="column_name not_seted">
                                    银行卡认证
                                </div>
                                <div class="column_msg">
                                    <span class="setting"><a mytarget="yykrz_xg" class="showSetting">请设置</a></span>
                                    <span class="cancel_setting"><a class="cancel_action">取消</a></span>
                                    <span class="column_info">提现时资金转入的银行卡账户</span>
                                    <span class="info_con"></span>
                                </div>
                                <form class="column_form">
                                    <table class="form_type yykrz_xg setting_other marginAuto">
                                        <tbody>
                                        <tr>
                                            <td class="align_center">
                                                <span class="size_16">请先设置实名登记，
                                                    <a class="link" href="/account/toapp?uid=${user.uid}">马上设置</a></span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        </c:if>
                        <%--已认证--%>
                        <c:if test="${user.realname=='true'}">
                            <c:if test="${real.bankcard==null||real.bankcard==''}">
                                <div class="column">

                                    <div class="column_name not_seted">
                                        银行卡认证
                                    </div>
                                    <div class="column_msg">
                                        <span class="setting"><a mytarget="yykrz_xg" class="showSetting">请设置</a></span>
                                        <span class="cancel_setting"><a class="cancel_action">取消</a></span>
                                        <span class="column_info">提现时资金转入的银行卡账户</span>
                                        <span class="info_con"></span>
                                    </div>
                                    <form class="column_form">
                                        <table class="form_type yykrz_xg setting_other marginAuto">
                                            <tbody>
                                            <tr>
                                                <td class="align_center">
                                                    <a href="/account/toapp?uid=${user.uid}">去银行卡管理认证</a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </form>
                                </div>
                            </c:if>
                            <c:if test="${real.bankcard!=null&&real.bankcard!=''}">
                                <div class="column">
                                    <div class="column_name seted">
                                        银行卡认证
                                    </div>
                                    <div class="column_msg">
                                        <span class="setting"><a href="/account/toapp?uid=${user.uid}">查看</a></span>
                                        <span class="column_info">提现时资金转入的银行卡账户</span>
                                        <span class="info_con">6217***********2605</span>
                                    </div>
                                </div>
                            </c:if>
                        </c:if>


                        <!-- 4：登录密码 -->
                        <input type="hidden" value="${user.loginpwd}" id="realpwd">
                        <div myid="lgPassword" class="column">
                            <div class="column_name seted">
                                登录密码
                            </div>
                            <div class="column_msg">
                                <span class="setting"><a mytarget="dlmm_xg" class="showSetting">修改</a></span>
                                <span class="cancel_setting"><a class="cancel_action">取消</a></span>
                                <span class="column_info">定期修改密码，可以使您的账户更加安全</span>
                            </div>
                            <form id="dlmm_form" class="column_form">
                                <div class="dlmm_xg">
                                    <table class="form_type">
                                        <tbody>
                                        <tr>
                                            <td class="align_right">原登录密码：</td>
                                            <td><input id="loginpwd" type="password" oncut="return false"
                                                       oncopy="return false" oncontextmenu="return false"
                                                       onpaste="return false"></td>
                                            <td class="width250">
                                                <div id="dlmm_xg_old_pwdTip" class="tips_content"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tips"></td>
                                            <td class="tips"></td>
                                        </tr>
                                        <tr>
                                            <td class="align_right">新登录密码：</td>
                                            <td><input id="loginpwd1" type="password" oncut="return false"
                                                       oncopy="return false" oncontextmenu="return false"
                                                       onpaste="return false"></td>
                                            <td class="width250">
                                                <div id="dlmm_xg_new_pwdTip" class="tips_content"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tips"></td>
                                            <td class="tips"></td>
                                        </tr>
                                        <tr>
                                            <td class="align_right">确认新密码：</td>
                                            <td><input id="loginpwd2" type="password" oncut="return false"
                                                       oncopy="return false" oncontextmenu="return false"
                                                       onpaste="return false"></td>
                                            <td class="width250">
                                                <div id="dlmm_xg_new_pwd_qrTip" class="tips_content"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tips"></td>
                                            <td class="tips"></td>
                                        </tr>

                                        <tr>
                                            <td></td>
                                            <td class=""><a id="loginpwdbtn" class="sbm_btn inline_block">确&nbsp;&nbsp;定</a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>


                                <div class="form_msg">
                                    <p>
                                        <font class="blod">温馨提示：</font>请定期修改密码，可以使您的账户更加安全
                                    </p>
                                </div>
                            </form>
                        </div>

                        <!-- 5：手机认证 -->
                        <input type="hidden" value="${user.phone}" id="myphone">
                        <div myid="mobile" class="column">
                            <div class="column_name seted">
                                手机认证
                            </div>
                            <div class="column_msg">
                                <!-- 判断是否是修改鉴权手机号 -->
                                <span class="setting"><a mytarget="step_1_1" class="showSetting">修改</a></span>
                                <span class="cancel_setting"><a class="cancel_action bk_cancel">取消</a></span>
                                <span class="phone_info">
										<span class="column_info">变动账户信息接收验证码，接收资金变动短信通知</span>
										<span class="info_con" id="myphonetext"></span>
									</span>
                            </div>
                            <form id="sjyz_form" class="column_form">
                                <div class="step_1 step_1_1">
                                    <!-- 修改方式1 -->
                                    <div class="modify_mode1">
                                        <table class="form_type">
                                            <tbody>
                                            <tr>
                                                <td class="align_right">身份证号码：</td>
                                                <td><input id="sjyz_xg_step1_type2_idno" type="text"></td>
                                                <td class="width250">
                                                    <div id="sjyz_xg_step1_type2_idnoTip" class="tips_content"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tips"></td>
                                                <td class="tips"></td>
                                            </tr>
                                            <tr>
                                                <td class="align_right">手机号码：</td>
                                                <td>
                                                    <input id="sjyz_xg_step2_mobile" maxlength="11" type="text">
                                                </td>
                                                <td class="width250">
                                                    <div id="sjyz_xg_step2_mobileTip" class="tips_content"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tips"></td>
                                                <td class="tips"></td>
                                            </tr>
                                            <tr>
                                                <td class="align_right">当前号码：</td>
                                                <td>
                                                    <span class="display_form" id="myphonetext2"></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="align_right">验证码：</td>
                                                <td>
                                                    <input id="sjyz_xg_step1_type1_pcode" class="code_form" type="text">
                                                    <input value="" type="hidden" id="sjrzcode">
                                                    <a id="sjyz_xg_step1_type1_getpcode" class="get_code inline_block">
                                                        <span class="get_code_text">获取验证码</span>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tips"></td>
                                                <td class="tips">
                                                    <div id="sjyz_xg_step1_type1_pcodeTip" class="msg_tips_con"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td class="">
                                                    <a id="sjyz_xg_step1_type1_submit" class="sbm_btn inline_block">确认</a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="form_msg">
                                        <p>
                                            <font class="blod">温馨提示：</font>
                                            如果您的手机号码注销或丢失，
                                            请联系客服、拔打 4006-0755-70。
                                        </p>
                                    </div>
                                </div>
                               <%-- <div id="step_1_2" class="step_1">
                                    <ul class="steps step1">
                                        <li>验证身份</li>
                                        <li class="align_center">修改号码</li>
                                        <li class="align_right">修改完成</li>
                                    </ul>
                                    <!-- 修改方式2 -->
                                    <div class="modify_mode1">
                                        <table class="form_type">
                                            <tbody>
                                           &lt;%&ndash; <tr>
                                                <td class="align_right">身份证号码：</td>
                                                <td><input id="sjyz_xg_step1_type2_idno" type="text"></td>
                                                <td class="width250">
                                                    <div id="sjyz_xg_step1_type2_idnoTip" class="tips_content"></div>
                                                </td>
                                            </tr>&ndash;%&gt;
                                            <tr>
                                                <td class="tips"></td>
                                                <td class="tips"></td>
                                            </tr>
                                            <tr>
                                                <td class="align_right">交易密码：</td>
                                                <td><input id="sjyz_xg_step1_type2_jypwd" type="password"
                                                           oncut="return false" oncopy="return false"
                                                           oncontextmenu="return false" onpaste="return false"></td>
                                                <td class="width250">
                                                    <div id="sjyz_xg_step1_type2_jypwdTip" class="tips_content"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tips"></td>
                                                <td class="tips"></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td class=""><a id="sjyz_xg_step1_type2_submit"
                                                                class="sbm_btn inline_block">下一步</a></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div id="step_1_3" class="step_1">
                                    <ul class="steps step1">
                                        <li>验证身份</li>
                                        <li class="align_center">修改号码</li>
                                        <li class="align_right">修改完成</li>
                                    </ul>
                                    <!-- 修改方式3 -->
                                    <div class="modify_mode1">
                                        <table class="form_type">
                                            <tbody>
                                            <tr>
                                                <td class="align_right">认证邮箱：</td>
                                                <td>
                                                    <span class="display_form"></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="align_right">验证码：</td>
                                                <td><input id="sjyz_xg_step1_type3_ecode" class="code_form" type="text"><a
                                                        id="sjyz_xg_step1_type3_getecode" class="get_code inline_block"><span
                                                        class="get_code_text">获取验证码</span></a></td>
                                            </tr>
                                            <tr>
                                                <td class="tips"></td>
                                                <td class="tips">
                                                    <div id="sjyz_xg_step1_type3_ecodeTip" class="msg_tips_con"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="align_right">交易密码：</td>
                                                <td><input id="sjyz_xg_step1_type3_jypwd" type="password"
                                                           oncut="return false" oncopy="return false"
                                                           oncontextmenu="return false" onpaste="return false"></td>
                                                <td class="width250">
                                                    <div id="sjyz_xg_step1_type3_jypwdTip" class="tips_content"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tips"></td>
                                                <td class="tips"></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td class=""><a id="sjyz_xg_step1_type3_submit"
                                                                class="sbm_btn inline_block">下一步</a></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div id="change_type" class="change_type">
                                    <table class="form_type change_type">
                                        <tbody>
                                        <tr>
                                            <td class="align_center">


                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- 修改鉴权手机号 -->
                                <div id="step_1_4" class="step_1 step_1_4">
                                    <ul class="steps step1">
                                        <li>验证身份</li>
                                        <li class="align_center">修改号码</li>
                                        <li class="align_right">修改完成</li>
                                    </ul>
                                    <!-- 修改方式4 -->
                                    <div class="modify_mode1">
                                        <table class="form_type change_bind_phone card_area">
                                            <tbody>
                                            <tr>
                                                <td class="align_right">真实姓名：</td>
                                                <td><input id="sjyz_xg_step1_type4_name" type="text"
                                                           placeholder="请输入真实姓名"></td>
                                                <td class="width250">
                                                    <div id="sjyz_xg_step1_type4_nameTip" class="tips_content"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="align_right">身份证号：</td>
                                                <td><input id="sjyz_xg_step1_type4_idno" type="text" maxlength="18"
                                                           placeholder="请输入身份证号"></td>
                                                <td class="width250">
                                                    <div id="sjyz_xg_step1_type4_idnoTip" class="tips_content"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="align_right">银行卡号：</td>
                                                <td>
                                                    <input id="sjyz_xg_step1_type4_cardnum" type="text" maxlength="19"
                                                           placeholder="请输入银行卡号">
                                                    <div class="num_area"><span></span><em></em><i></i></div>
                                                </td>
                                                <td class="width250">
                                                    <div id="sjyz_xg_step1_type4_cardnumTip" class="tips_content"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tips"></td>
                                                <td class="tips" colspan="2">
                                                    <div id="bk_sys_tip1" class="tips_content"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td class=""><a id="sjyz_xg_step1_type4_submit"
                                                                class="sbm_btn inline_block">下一步</a></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <p class="change_bk_p_tip">温馨提示： 修改过程中如果遇到问题，请联系QQ客服或拔打 4006-0755-70</p>
                                    </div>
                                </div>
                                <!-- 其他流程第二步 -->
                                <div class="step_2">
                                    <ul class="steps step2">
                                        <li>验证身份</li>
                                        <li class="align_center">修改号码</li>
                                        <li class="align_right">修改完成</li>
                                    </ul>
                                    <div class="for_step2">
                                        <table class="form_type">
                                            <tbody>
                                           &lt;%&ndash; <tr>
                                                <td class="align_right">手机号码：</td>
                                                <td>
                                                    <input id="sjyz_xg_step2_mobile" maxlength="11" type="text">
                                                </td>
                                                <td class="width250">
                                                    <div id="sjyz_xg_step2_mobileTip" class="tips_content"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tips"></td>
                                                <td class="tips"></td>
                                            </tr>&ndash;%&gt;
                                            <tr>
                                                <td class="align_right">验证码：</td>
                                                <td><input id="sjyz_xg_step2_pcode" class="code_form" type="text"><a
                                                        id="sjyz_xg_step2_getpcode" class="get_code inline_block"><span
                                                        class="get_code_text">获取验证码</span></a></td>
                                            </tr>
                                            <tr>
                                                <td class="tips"></td>
                                                <td class="tips">
                                                    <div id="sjyz_xg_step2_pcodeTip" class="msg_tips_con"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td class=""><a id="sjyz_xg_step2_submit" class="sbm_btn inline_block">下一步</a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="step_3">
                                    <ul class="steps step3">
                                        <li>验证身份</li>
                                        <li class="align_center">修改号码</li>
                                        <li class="align_right">修改完成</li>
                                    </ul>
                                    <div class="for_step3">
                                        <table class="form_type marginAuto">
                                            <tbody>
                                            <tr>


                                                <td class="align_center"><span class="size_16">修改成功</span></td>


                                            </tr>
                                            <tr>
                                                <td class="align_center"><a href="javascript:window.location.reload()"
                                                                            class="sbm_btn inline_block">确&nbsp;&nbsp;定</a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
--%>

                            </form>
                        </div>

                        <!-- 6：邮箱认证 -->
                        <input type="hidden" value="${user.email}" id="isemail">
                        <c:if test="${user.email=='1'}">
                            <div myid="email" class="column">
                                <div class="column_name not_seted">
                                    邮箱认证
                                </div>
                                <div class="column_msg">
                                    <span class="setting"><a mytarget="yxrz_rz" class="showSetting">请设置</a></span>
                                    <span class="cancel_setting"><a class="cancel_action">取消</a></span>
                                    <span class="column_info">可用于登录、获取账户资金变动通知和投标讯息</span>
                                    <span class="info_con"></span>
                                </div>
                                <form id="yxrz_form" class="column_form">
                                    <div class="yxrz_rz">
                                        <table class="form_type">
                                            <tbody>
                                            <tr>
                                                <td class="align_right">邮箱地址：</td>
                                                <td>
                                                    <input id="email" type="text">
                                                </td>
                                                <td class="width250">
                                                    <div id="yxrz_rz_emailTip" class="tips_content"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tips"></td>
                                                <td class="tips"></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td class=""><a id="emiladd" class="sbm_btn inline_block">确认</a></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>


                                </form>
                            </div>
                        </c:if>
                        <c:if test="${user.email!='1'}">
                            <div myid="email" class="column">
                                <div class="column_name seted">
                                    邮箱认证
                                </div>
                                <div class="column_msg">
                                    <span class="setting"><a mytarget="yxrz_rz" class="showSetting">修改</a></span>
                                    <span class="cancel_setting"><a class="cancel_action">取消</a></span>
                                    <span class="column_info">可用于登录、获取账户资金变动通知和投标讯息</span>
                                    <span class="info_con"></span>
                                </div>
                                <form id="yxrz_form" class="column_form">
                                    <div class="yxrz_rz">
                                        <table class="form_type">
                                            <tbody>
                                            <tr>
                                                <td class="align_right">邮箱地址：</td>
                                                <td>
                                                    <input id="email2" type="text" value="">
                                                </td>
                                                <td class="width250">
                                                    <div id="yxrz_rz_emailTip" class="tips_content"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tips"></td>
                                                <td class="tips"></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td class=""><a id="emiladd2" class="sbm_btn inline_block">确认</a></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>


                                </form>
                            </div>
                        </c:if>
                        
                        <!-- 7：紧急联系人 -->
                        <c:if test="${user.urgentstate=='1'}">
                            <div myid="contact" class="column">
                                <div class="column_name not_seted">
                                    紧急联系人
                                </div>
                                <div class="column_msg">
                                    <span class="setting"><a mytarget="jjlxr_rz" class="showSetting">请设置</a></span>
                                    <span class="cancel_setting"><a class="cancel_action">取消</a></span>
                                    <span class="column_info">当有紧急情况联系不到您的时候，可以联系您的亲人朋友</span>
                                    <span class="info_con"></span>
                                    <span class="info_con"></span>
                                </div>
                                <form id="jjlxr_form" class="column_form">
                                    <input type="hidden" value="${user.uid}" id="uid">
                                    <div class="jjlxr_rz">
                                        <table class="form_type">
                                            <tbody>
                                            <tr>
                                                <td class="align_right">联系人关系：</td>
                                                <td>
                                                    <select name="gx" id="gx" style="width: 200px;">
                                                        <option value="">--请选择联系人--</option>
                                                        <option value="配偶">配偶</option>
                                                        <option value="父母">父母</option>
                                                        <option value="子女">子女</option>
                                                        <option value="亲戚">亲戚</option>
                                                        <option value="同学">同学</option>
                                                        <option value="朋友">朋友</option>
                                                        <option value="同事">同事</option>
                                                    </select>
                                                </td>
                                                <td class="width250">
                                                    <div id="jjlxr_rz_typeTip" class="tips_content"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tips"></td>
                                                <td class="tips"></td>
                                            </tr>
                                            <tr>
                                                <td class="align_right">联系人姓名：</td>
                                                <td><input  type="text" id="urname" name="urname"></td>
                                                <td class="width250">
                                                    <div id="jjlxr_rz_nameTip" class="tips_content"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tips"></td>
                                                <td class="tips"></td>
                                            </tr>
                                            <tr>
                                                <td class="align_right">联系人手机：</td>
                                                <td><input maxlength="11" id="phonenumber" type="text" name="phonenumber"></td>
                                                <td class="width250">
                                                    <div id="jjlxr_rz_mobileTip" class="tips_content"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tips"></td>
                                                <td class="tips"></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td class="">
                                                        <%--<input type="submit" value="确认" class="sbm_btn inline_block">--%>
                                                    <a id="rz_submit" class="sbm_btn inline_block">确认</a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </form>
                            </div>
                        </c:if>
                        <c:if test="${user.urgentstate=='2'}">
                            <div myid="contact" class="column">
                                <div class="column_name seted">
                                    紧急联系人
                                </div>
                                <div class="column_msg">
                                    <span class="setting"><a mytarget="jjlxr_rz" class="showSetting">修改</a></span>
                                    <span class="cancel_setting"><a class="cancel_action">取消</a></span>
                                    <span class="column_info">当有紧急情况联系不到您的时候，可以联系您的亲人朋友</span>
                                    <span class="info_con"></span>
                                    <span class="info_con"></span>
                                </div>
                                <form id="jjlxr_form" class="column_form">
                                    <input type="hidden" value="${user.uid}" id="uid">
                                    <div class="jjlxr_rz">
                                        <table class="form_type">
                                            <tbody>
                                            <tr>
                                                <td class="align_right">联系人关系：</td>
                                                <td>
                                                    <select name="gx" id="gx" style="width: 200px;">
                                                        <option value="">--请选择联系人--</option>
                                                        <option value="配偶">配偶</option>
                                                        <option value="父母">父母</option>
                                                        <option value="子女">子女</option>
                                                        <option value="亲戚">亲戚</option>
                                                        <option value="同学">同学</option>
                                                        <option value="朋友">朋友</option>
                                                        <option value="同事">同事</option>
                                                    </select>
                                                </td>
                                                <td class="width250">
                                                    <div id="jjlxr_rz_typeTip" class="tips_content"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tips"></td>
                                                <td class="tips"></td>
                                            </tr>
                                            <tr>
                                                <td class="align_right">联系人姓名：</td>
                                                <td><input  type="text" id="urname" name="urname"></td>
                                                <td class="width250">
                                                    <div id="jjlxr_rz_nameTip" class="tips_content"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tips"></td>
                                                <td class="tips"></td>
                                            </tr>
                                            <tr>
                                                <td class="align_right">联系人手机：</td>
                                                <td><input maxlength="11" id="phonenumber" type="text" name="phonenumber"></td>
                                                <td class="width250">
                                                    <div id="jjlxr_rz_mobileTip" class="tips_content"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tips"></td>
                                                <td class="tips"></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td class="">
                                                        <%--<input type="submit" value="确认" class="sbm_btn inline_block">--%>
                                                    <a id="rz_submit" class="sbm_btn inline_block">确认</a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </form>
                            </div>
                        </c:if>
                        <%--8：风险评估--%>
                       <%-- <div myid="assess" class="column">
                            <div class="column_name">风险评估</div>
                            <div class="column_msg">
                                <span class="setting"><a class="startAssess">评估</a></span>
                                <span class="column_info">为了不影响您之后的投标，请您立即评估</span>
                            </div>
                        </div>--%>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    $(function () {
        seajs.use('user/safety/js/init')
    });
</script>

<!--引入统计代码-->

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
    <script type="text/javascript">
        $(function () {
            var isemail=$("#isemail").val();
            if(isemail!='1'){//表示邮箱已经写了
                $("#email2").val(isemail);
            }
        });
        //添加联系人
        $("#rz_submit").click(function () {
             var uid=$("#uid").val();
             var gx=$("#gx").val();
             var urname=$("#urname").val();
             var phonenumber=$("#phonenumber").val();
             if(gx==''||gx==null){
                 alert("请选择关系人");
                return false;
             }
             if(urname==''||urname==null){
                 alert("urname="+urname);
                alert("请输入联系人姓名");
                return false;
            }
            if(phonenumber==''||phonenumber==null){
                alert("请输入联系人手机号");
                return false;
            }

            //去后台保存
            $.post("/account/lxradd",{uid:uid,gx:gx,urname:urname,phonenumber:phonenumber},function (data) {
                var mes=data.mes;
                alert(mes);
                window.location.reload();//加载页面
            },'json');


        });

        //修改联系人

        //添加邮箱
        $("#emiladd").click(function () {
            alert("添加邮箱进来了");
            //获取邮箱
            var uid=$("#userid").val();
            alert("uid="+uid);
            var emial=$("#email").val();
            alert("emial="+emial);
           // var check="^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$";
            if(emial==''||emial==null){
                alert("请输入邮箱");
                return false;
            }
            // if(!check.test(emial)){
            //     alert("邮箱格式不正确！");
            //     return false;
            // }
            //去后台保存
            $.post("/account/emaladd",{uid:uid,email:emial},function (data) {
                var mes=data.mes;
                alert(mes);
                window.location.reload();//加载页面
            },'json');

        });
        //修改邮箱
        $("#emiladd2").click(function () {
            //获取邮箱
            var uid=$("#userid").val();
            var emial=$("#email2").val();
            var check="^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$";
            if(emial==''||emial==null){
                alert("请输入邮箱");
                return false;
            }
            if(!check.test(emial)){
                alert("邮箱格式不正确！");
                return false;
            }
            //去后台保存
            $.post("/account/emaladd",{uid:uid,email:emial},function (data) {
                var mes=data.mes;
                alert(mes);
                window.location.reload();//加载页面
            },'json');

        });

        //修改登入密码
        $("#loginpwdbtn").click(function () {
            var uid=$("#userid").val();
            var realpwd=$("#realpwd").val();//真密码
            var loginpwd=$("#loginpwd").val();//原登入密码
            var loginpwd1=$("#loginpwd1").val();//新密码
            var loginpwd2=$("#loginpwd2").val();//新密码

            if(loginpwd==null||loginpwd==''){
               alert("请输入原密码");
               return false;
            }
            if(loginpwd1==null||loginpwd1==''){
                alert("请输入新密码");
                return false;
            }
            if(loginpwd2==null||loginpwd2==''){
                alert("请确认新密码");
                return false;
            }
            if(loginpwd1!=loginpwd2){
                alert("确认新密码错误");
                return false;
            }
            if(realpwd!=loginpwd){
                alert("原密码输入错误");
                return false;
            }

            //去后台保存
            $.post("/account/uploginpwd",{uid:uid,loginpwd:loginpwd1},function (data) {
                var mes=data.mes;
                alert(mes);
                window.location.reload();//加载页面
            },'json');

        });

        //手机认证修改


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
<div id="ly-side-bar" style="left: 94.4774%; bottom: 0px; margin-bottom: 120px;" class="ly-side-bar side-bar-xn">
    <a href="javascript:;" class="side-bar-app">
        <div class="side-bar-pop">
            <div class="side-bar-pop-content"></div>
        </div>
    </a>
    <a href="javascript:;" class="side-bar-interest">
        <div class="side-bar-pop">
            <div class="side-bar-pop-content"></div>
        </div>
    </a>
    <a href="javascript:;" class="side-bar-kefu" data-callback="kefu" style="display:none" id="qiyukefu"></a>
    <a href="javascript:;" class="side-bar-calculator" data-callback="calculator"></a>
    <a href="javascript:;" class="side-bar-wenjuan" data-callback="wenjuan"></a>
    <a href="javascript:;" class="side-bar-top" data-callback="top"></a>
</div>
<div style="position:relative;height:90px;width: 1347px;">
    <jsp:include page="/WEB-INF/jsp/common/bottom.jsp"></jsp:include>
</div>
<div style="top: 0px; left: 0px; visibility: hidden; position: absolute; width: 1px; height: 1px;">
    <iframe style="height:0px; width:0px;" src="https://qiyukf.com/sdk/res/delegate.html?1556422270096"></iframe>
</div>
<div class="layer-1" id="YSF-BTN-HOLDER" style="display: none;">
    <div id="YSF-CUSTOM-ENTRY-1"><img src="https://qiyukf.com/sdk/res/kefu/custom/1.png"></div>
    <span id="YSF-BTN-CIRCLE"></span>
    <div id="YSF-BTN-BUBBLE">
        <div id="YSF-BTN-CONTENT"></div>
        <span id="YSF-BTN-ARROW"></span>
        <span id="YSF-BTN-CLOSE"></span>
    </div>
</div>
<div class="tip-yellow">
    <div class="tip-inner tip-bg-image"></div>
    <div class="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"></div>
</div>
<div class="tip-yellow">
    <div class="tip-inner tip-bg-image"></div>
    <div class="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"></div>
</div>
<div class="tip-yellow">
    <div class="tip-inner tip-bg-image"></div>
    <div class="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"></div>
</div>
<div class="tip-yellow">
    <div class="tip-inner tip-bg-image"></div>
    <div class="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"></div>
</div>
</body>
</html>
