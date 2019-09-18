<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html lang="zh-cn">
<jsp:include page="/WEB-INF/jsp/common/resources.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top2.jsp"></jsp:include>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>中兴财富金融</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">

    <script src="${pageContext.request.contextPath}/js/zdzjs/account/highcharts-5-2197cdde07.0.0.js"></script>
    <script src="${pageContext.request.contextPath}/js/zdzjs/account/init-32553ee30d.js"></script>
    <link rel="shortcut icon" href="//image.xiaoniu88.com/static/WebXn/dist/images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/base-56e256b865.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/style-1ed5f9e4a1.css">
    <link charset="utf-8" rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/slide-c083fae5c2.css">
    <link charset="utf-8" rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/apply-73c8a78781.css">
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/zdzjs/account/base-6100562494.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/zdzjs/account/common-83987ed24e.js"></script>
    <script src="${pageContext.request.contextPath}/js/zdzjs/account/init-2322a9b61c.js"></script>
    <script src="${pageContext.request.contextPath}/js/zdzjs/account/apply-ea73681945.js"></script>

    <script src="${pageContext.request.contextPath}/js/zdzjs/account/init-97a1dfe62d.js"></script>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/style-54e8533899.css">
    <script>
        window.global = {
            cdn: "//image.xiaoniu88.com",
            siteroot: "https://www.xiaoniu88.com",
            staticPath: "//image.xiaoniu88.com/static/WebXn/dist",
            contextPath: "/payment",
            serverTime: "1556367858201" * 1,
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
    <script type="text/javascript">
        $(function () {
            $("#text2").hide();//先隐藏
            
            $("#all").click(function () {
                if(this.checked){
                    $("input[name='ids']").prop("checked", true);
                }else{
                    $("input[name='ids']").prop("checked", false);
                }
            });

            //点击删除
            $("#dell").click(function () {
                var uid=$("#uid").val();
                var id_array=new Array();
                $('input[name="ids"]:checked').each(function(){  //获取选中的多选框
                    id_array.push($(this).val());//向数组中添加元素
                });
                var idstr=id_array.join(',');
                //将数组元素连接起来以构建一个字符串
	 		   // alert("选中的id"+idstr);
                if(idstr!=null&&idstr!=''){//有选中的就进来
                    <%--$.ajax({--%>
                        <%--async:false,--%>
                        <%--url: '${pageContext.request.contextPath}/account/dellmesg',--%>
                        <%--type: 'post',--%>
                        <%--data: {ids:idstr},--%>
                        <%--dataType:'json',--%>

                        <%--success: function (data) {--%>
                            <%--alert("删除成功");--%>
                           <%--window.location.href="${pageContext.request.contextPath}/account/tomessage?uid="+uid;--%>
                        <%--}--%>
                    <%--});--%>
                    $.post("${pageContext.request.contextPath}/account/dellmesg",{ids:idstr},function (data) {
                        alert("删除成功");
                        window.location.href="${pageContext.request.contextPath}/account/tomessage?uid="+uid;

                    },'json');

                }else{
                    alert("您没有选择要删除的");

                }
            });

            //点击改变标记
            $("#statechang").click(function () {
                var uid=$("#uid").val();
                var id_array=new Array();
                $('input[name="ids"]:checked').each(function(){  //获取选中的多选框
                    //得到选中的状态
                    var vals=$(this).val();
                    var state=$("#"+vals+"s").text();
                    if(state=='未读'){
                        id_array.push($(this).val());//向数组中添加元素
                    }
                    //alert(state);
                });
                var idstr=id_array.join(',');
                //将数组元素连接起来以构建一个字符串
                //alert("选中的id"+idstr);
                if(idstr!=null&&idstr!=''){//有选中的就进来
                    //alert("改变进来了");
                    <%--$.ajax({--%>
                        <%--async:false,--%>
                        <%--url: '${pageContext.request.contextPath}/account/changstate',--%>
                        <%--type: 'post',--%>
                        <%--data: {ids:idstr},--%>
                        <%--dataType:'json',--%>

                        <%--success: function (data) {--%>
                            <%--alert("设置成功");--%>
                            <%--window.location.href="${pageContext.request.contextPath}/account/tomessage?uid="+uid;--%>
                        <%--}--%>
                    <%--});--%>

                    $.post("${pageContext.request.contextPath}/account/changstate",{ids:idstr},function (data) {
                        alert("设置成功");
                        window.location.href="${pageContext.request.contextPath}/account/tomessage?uid="+uid;
                    },'json');
                }else{
                    alert("您没有选择要改变的");

                }
            });
        });
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
        }
    </style>
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
        }
    </style>
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

</head>
<body style="">
<input value="${user.uid}" type="hidden" id="uid">
<!--导航-->
<div class="container">
    <div class="g-account-main">
        <div class="path">您现在的位置：我的账户 &gt;
            <span id="pathTitle">我的消息</span>
        </div>
        <div class="center user-box">
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
                        我的积分：<a href="/account/topoint?uid=${user.uid}" target="_blank" id="point-info"
                                data-bind="pointBalance">${user.point}</a>
                        <a href="/vip/point/mall/${user.uid}" target="_blank">【积分换礼】</a>
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

                <%--右边导航--%>
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
                    <li data-type="datum">
                        <a href="/account/tosecur?uid=${user.uid}">账户安全</a>
                    </li>
                    <li data-type="arsua">
                        <a href="/account/toapp?uid=${user.uid}">银行卡管理</a>
                    </li>
                    <li data-type="news" class="cur">
                        <a href="/account/tomessage?uid=${user.uid}">我的消息<span id="msg-count"></span></a>
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
                        <a class="qq-icon" target="_blank" rel="nofollow"
                           href="//shang.qq.com/wpa/qunwpa?idkey=772aceff2684cb1e0a2904e4550e02e37ce7cf7900bacdccc6ecc562706ec6f2">
                            <img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="小牛在线客户交流群④"
                                 title="小牛在线客户交流群④">
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
            <input type="hidden" value="bankCard" id="userNavList">
            <!-- 左侧当前选中菜单 -->
            <div class="account-cont">
                <div class="at-til"><span class="name">我的消息</span><font class="mg_num">（<span id="xxwd2">${count}</span>）</font></div>
                <!--内容区 start-->
                <div class="at-bd">
                    <ul class="at-tab" data-tab="holding">
                        <li data-target="myMsg" class="cur">消息内容</li>
                    </ul>
                    <div class="r_content">
                        <div class="tag_c" id="myMsg">
                            <div class="mg_box">
                    <span class="g-fr mg_info">仅显示最近三个月的消息：共<span class="mg_tatal">${page.totalRow}</span>条消息，其中<span
                            class="mg_unread" id="xxwd">${count}</span>条未读</span>
                                <a class="mg_btn del_btn" id="dell">删除</a>
                                <a class="mg_btn read_btn" id="statechang">标记为已读</a>
                            </div>
                            <table class="mg_tab" border="0" style="font-size: 12px;" cellspacing="0" cellpadding="0">
                                <colgroup>
                                    <col width="5%">
                                    <col width="10%">
                                    <col width="45%">
                                    <col width="39%">
                                </colgroup>
                                <thead>
                                <tr>
                                    <th><input class="mg_ckall" type="checkbox" id="all"></th>
                                    <th>标记</th>
                                    <th>标题</th>
                                    <th>发送时间</th>
                                </tr>
                                </thead>
                                <tbody id="text1">
                                <c:forEach items="${mes}" var="me">
                                    <c:if test="${me.mstate=='已读'}">
                                        <tr id="${me.mid}t">
                                            <td><input class="mg_ck" type="checkbox" name="ids" value="${me.mid}">&nbsp;</td>
                                            <td id="${me.mid}s">${me.mstate}</td>
                                            <td class="mg_til"><a class="mg_t" id="${me.mid}" href="javascript:statechange('${me.mid}','${me.mstate}','${me.text}');">${me.title}</a></td>
                                            <td>${me.sendtime}</td>
                                        </tr>
                                        <tr class="mg_con" id="${me.mid}a">

                                        </tr>

                                    </c:if>
                                    <c:if test="${me.mstate=='未读'}">
                                    <tr class="g-fwb" id="${me.mid}t">
                                        <td><input class="mg_ck" type="checkbox" name="ids" value="${me.mid}">&nbsp;</td>
                                        <td id="${me.mid}s">${me.mstate}</td>
                                        <td class="mg_til"><a class="mg_t" id="${me.mid}" href="javascript:statechange('${me.mid}','${me.mstate}','${me.text}');">${me.title}</a></td>
                                        <td>${me.sendtime}</td>
                                    </tr>
                                    <tr class="mg_con" id="${me.mid}a">

                                    </tr>
                                    </c:if>
                                </c:forEach>

                                </tbody>
                                <tbody id="text2"></tbody>
                            </table>

                            <div class="pages">
                                <div class="page">第<i class="pg" id="curpage">${page.currPage}</i>页/共<i class="cal">${page.totalPage}</i>页
                                    <a data-page="fast" href="javascript:pagechange(1);">首页</a>
                                    <a data-page="up" href="javascript:pagechange('${page.currPage-1}');">上一页</a>
                                    <a data-page="down"href="javascript:pagechange('${page.currPage+1}')">下一页</a>
                                    <a data-page="last" href="javascript:pagechange('${page.totalPage}')">末页</a>
                                </div>
                            </div>
                        </div>

                        <div class="g-h30"></div>
                    </div>
                </div>
                <!--内容区 end-->
            </div>
        </div>
        <div class="g-h30"></div>
    </div>
</div>
<script type="text/javascript">
    //分页操作
  function  pagechange(currpage){
      //获取用户uid
     var uid= $("#uid").val();
      $.post("/account/mesgepage",{uid:uid,currPage:currpage},function (data) {
        var me=data.mes;
        var curr=data.currpage
        var ss="";
        $.each(me,function(index,b){
            if(b.mstate=='已读'){
                ss+="<tr id='"+b.mid+"t'>" +
                    "<td><input class='mg_ck' type='checkbox' name='ids' value="+b.mid+">&nbsp;</td>" +
                    "<td id='"+b.mid+"s'>"+b.mstate+"</td>" +
                    " <td class='mg_til'><a class='mg_t' id='"+b.mid+"'href='javascript:statechange('"+b.mid+"','"+b.mstate+"','"+b.text+"');'>"+b.title+"</a></td>" +
                    "<td>"+b.sendtime+"</td>" +
                    "</tr>" +
                    "<tr class='mg_con' id='"+b.mid+"a'>" +
                    "</tr>";
            }
            if(b.mstate=='未读'){
                ss+="<tr class='g-fwb' id='"+b.mid+"t'>" +
                    "<td><input class='mg_ck' type='checkbox' name='ids' value="+b.mid+">&nbsp;</td>" +
                    "<td id='"+b.mid+"s'>"+b.mstate+"</td>" +
                    " <td class='mg_til'><a class='mg_t' id='"+b.mid+"'href='javascript:statechange("+b.mid+","+b.mstate+","+b.text+");'>"+b.title+"</a></td>" +
                    "<td>"+b.sendtime+"</td>" +
                    "</tr>" +
                    "<tr class='mg_con' id='"+b.mid+"a'>" +
                    "</tr>";
            }

        });
        $("#text2").html(ss);
        $("#text1").hide();
        $("#text2").show();
        $("#curpage").text(curr);
      },'json');


  }

  //状态改变和查看详情
    function statechange(mid,mstate,text) {
        //点击的id
        var id=mid;
        var styles=$("#"+mid+"a").html();//
        var sta=$("#"+mid+"s").text();//获取状态
        if(styles!=null&&styles!=""&&styles!=''){
            $("#"+mid+"").removeClass("mg_t_cur");
            $("#"+mid+"t").removeClass("mg_cur");
            $("#"+mid+"a").html("");
        }else{
            $("#"+mid+"").addClass("mg_t_cur");
            $("#"+mid+"t").addClass("mg_cur");
            var ss="<td style='display: table-cell;'>&nbsp;</td>" +
                "<td colspan='3' style='display: table-cell;' class='align_left'>"+text+"</td>";
            $("#"+mid+"a").html(ss);
        }


        if(sta=="未读"){
            $("#"+mid+"s").text("已读");
            var wd=$("#xxwd").text();
            wd=parseInt(wd,10);
            $("#xxwd").text((wd-1));
            $("#xxwd2").text((wd-1));

            //去后台
            $.post("/account/meschangdestate",{mid:mid},function (data) {

            },'json');
        }


    }

</script>
<!--end 内容-->

<script>
    var supportQuickPay = "";// 0:协议失效
    $(function () {
        seajs.use('page/payment/deposit/apply/js/apply');
    });
</script>
<!--end 尾部-->

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
    <a href="javascript:;" class="side-bar-top" data-callback="top"></a></div>
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
<%--底部--%>
<div style="position:relative;height:90px;width: 1347px;">
    <jsp:include page="/WEB-INF/jsp/common/bottom.jsp"></jsp:include>
</div>
</body>
</html>