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

    <link rel="shortcut icon" href="//image.xiaoniu88.com/static/WebXn/dist/images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/base-56e256b865.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/style-1ed5f9e4a1.css">
    <link charset="utf-8" rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/slide-c083fae5c2.css">
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/zdzjs/account/base-6100562494.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/zdzjs/account/common-83987ed24e.js"></script>
    <script src="${pageContext.request.contextPath}/js/zdzjs/account/init-2322a9b61c.js"></script>
    <script src="https://image.xiaoniu88.com/static/WebXn/dist/account/project/js/index-1478c4e9bc.js"></script>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/index-ea0cdc4339.css">
    <script>
        window.global = {
            cdn: "//image.xiaoniu88.com",
            siteroot: "https://www.xiaoniu88.com",
            staticPath: "//image.xiaoniu88.com/static/WebXn/dist",
            contextPath: "/MyAccount",
            serverTime: "1555725657139" * 1,
            userId: "94755",
            isLogin: true
        }
    </script>
    <script>
        $(function () {
            seajs.use('module/common/common')
        })
    </script>
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
<!--导航-->

<!-- 当前选中菜单 -->
<div class="mail">
    <div class="g-account-main">

        <div class="path">
            您现在的位置：<span>我的账户 &gt; 账户总览</span>
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
                        <a class="signin-btn already-signIn signOut"
                           href="javascript:;"
                           data-url="">已连续签到1天</a>
                        <%-- <a class="signin-btn signIn" href="javascript:;"
                            data-url="${siteroot}/MyAccount/bonus/point/dosign">签到领积分</a>--%>
                    </div>
                </div>

                <%--右边导航--%>
                <ul class="g-cf left-menu">
                    <li data-type="index" >
                        <a class="h2" href="/account/toacc?uid=${user.uid}"><b>账户总览</b></a>
                    </li>
                    <li data-type="invest" class="cur">
                        <a href="/account/toloan?uid=${user.uid}">我的网贷</a>
                    </li>
                    <li data-type="record">
                        <a href="/account/torecord?uid=${user.uid}">资金记录</a>
                    </li>
                    <li data-type="datum">
                        <a href="/account/tosecur?uid=${user.uid}">账户安全</a>
                    </li>
                    <li data-type="bankCard" class="last">
                        <a href="/account/toapp?uid=${user.uid}">银行卡管理</a>
                    </li>
                    <li data-type="news">
                        <a href="/account/tomessage?uid=${user.uid}">我的消息<span id="msg-count"></span></a>
                    </li>
                    <li data-type="redEnvelope">
                        <a href="/account/coupon">我的优惠<span id="bonus-count">(1)</span></a>
                    </li>
                    <li data-type="point">
                        <a href="/account/topoint?uid=${user.uid}">我的积分</a>
                    </li>
                    <li data-type="myactivity" class="last">
                        <a href="/activity/limitTransfer/index">我的活动</a>
                    </li>
                    <li class="planner last" data-type="planner">
                        <a href="/financier/overview">邀请好友<span>赚收益</span></a>
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
            <div class="account-cont">
                <div class="at-til">
                    <span class="name">我的网贷</span>
                </div>
                <div class="at-bd" id="main">
                    <ul class="project-nav" id="project-nav">
                        <li data-type="3" class="cur"><span>安稳投</span></li>
                    </ul>
                    <div class="project-content" id="project-content">
                        <div class="project-detail" id="project-detail">
                            <dl>
                                <dt>待收本金（元）</dt>
                                <dd>${dsmoney}.00</dd>
                            </dl>
                            <dl>
                                <dt>待收利息及奖励（元）<i class="icon icon-question icon-dueinterest"
                                                 title="待收利息及奖励指持有中/转让中的待收利息及待收平台奖励，平台奖励包括新手奖励、增利券奖励、限时奖励、续期奖励、返现红包和其他奖励"></i></dt>
                                <dd>${interest}</dd>
                            </dl>
                            <dl>
                                <dt>已赚收益（元）</dt>
                                <dd>${yzmonry}</dd>
                            </dl>
                        </div>
                        <div class="project-list" id="project-list">
                            <ul class="list-nav" id="list-nav">
                                <li  data-status="1" class="cur"  id="l1" onclick="f1()">进行中</li>
                                <li data-status="2"  id="l2" onclick="f2()">已完成</li>
                            </ul>
                            <div class="list-content" data-type="3" data-status="1" style="position: relative;" id="div1">
                                <table class="list-tab" width="100%" cellspacing="0" cellpadding="0" border="0">
                                    <thead>
                                    <tr>
                                        <th width="15%">工具名称</th>
                                        <th width="15%">购买金额（元）</th>
                                        <th width="15%">待收本金（元）</th>
                                        <th width="15%">待收利息及奖励（元）</th>
                                        <th width="15%">参考利率</th>
                                        <th width="5%">状态</th>
                                        <th width="10%">结束时间</th>
                                        <th width="10%">操作</th>
                                    </tr>
                                    </thead>
                                    <tbody id="t1">

                                    <c:forEach items="${mytb}" var="b">
                                     <c:if test="${b.status!=2}">
                                        <tr >
                                            <td class="product-name"><a href="/invest/selinvestbyid/${b.zid}" target="_blank">${b.zid}</a>
                                            </td>
                                            <td>${b.money}.00</td>
                                            <td>${b.sjmoney}.00</td>
                                            <td>${b.interest}</td>
                                            <td>${b.ckrate}%</td>
                                            <td>锁定中</td>
                                            <td>${b.endtime}</td>
                                            <td><a href="/account/toxq?uid=${user.uid}&bid=${b.bid}&zid=${b.zid}" class="view-detail"><i
                                                    class="icon icon-detail"></i></a></td>
                                        </tr>
                                     </c:if>
                                    </c:forEach>

                                    </tbody>
                                </table>
                                <div class="loading-container loading" style="width: 100%; height: 100%; display: none;">
                                    <div class="loading-inner"><img
                                            src="//image.xiaoniu88.com/static/WebXn/dist/images/loading-44bbc291bc.gif"></div>
                                </div>
                            </div>
                            <div class="list-content g-dn" data-type="3" data-status="2"
                                 style="position: relative;" id="div2">
                                <table class="list-tab" width="100%" cellspacing="0" cellpadding="0" border="0">
                                    <thead>
                                    <tr>
                                        <th width="18%">工具名称</th>
                                        <th width="12%">购买金额（元）</th>
                                        <th width="12%">回款本金（元）</th>
                                        <th width="12%">已赚收益（元）</th>
                                        <th width="15%">参考利率</th>
                                        <th width="12%">开始日期</th>
                                        <th width="12%">退出日期</th>
                                        <th width="7%">详情</th>
                                    </tr>
                                    </thead>
                                    <tbody id="t2">
                                       <c:forEach items="${mytb}" var="b">
                                           <c:if test="${b.status==2}">
                                               <tr>
                                                   <td class="product-name"><a href="/product/planning/detail/141149" target="_blank">安心牛D20151209-3030</a>
                                                   </td>
                                                   <td>${b.money}.00</td>
                                                   <td>${b.sjmoney}.00</td>
                                                   <td>${b.interest}</td>
                                                   <td>${b.ckrate}%</td>
                                                   <td>${b.begintime}</td>
                                                   <td>${b.endtime}</td>
                                                   <td><a href="/account/toxq?uid=${user.uid}&bid=${b.bid}&zid=${b.zid}" class="view-detail"><i
                                                           class="icon icon-detail"></i></a></td>
                                               </tr>

                                           </c:if>

                                       </c:forEach>
                                    </tbody>
                                </table>
                                <div class="loading-container loading" style="width: 100%; height: 100%; display: none;">
                                    <div class="loading-inner"><img
                                            src="//image.xiaoniu88.com/static/WebXn/dist/images/loading-44bbc291bc.gif"></div>
                                </div>
                            </div>
                            <div style="text-align: center;">
                                <div class="pages paginator" id="pages" style="visibility: hidden;">
                                    <div class="paginator-main" id="paginator-main" style="display: block;">
                                        <div class="paginator-info">第1页/共1页</div>
                                        <div class="paginator-left">
                                            <ol>
                                                <li><a href="javascript:;" data-role="first" class="disabled">首页</a></li>
                                                <li><a href="javascript:;" data-role="prev" class="disabled">&lt;上一页</a></li>
                                            </ol>
                                        </div>
                                        <div class="paginator-list" style="width: 35px;">
                                            <ol class="paginator-list-main" style="width: 35px;">
                                                <li><a href="javascript:;" data-role="1" class="current">1</a></li>
                                            </ol>
                                        </div>
                                        <div class="paginator-right">
                                            <ol>
                                                <li><a href="javascript:;" data-role="next" class="disabled">下一页&gt;</a></li>
                                                <li><a href="javascript:;" data-role="last" class="disabled">末页</a></li>
                                            </ol>
                                        </div>
                                    </div>
                                    <p class="paginator-none" style="display:none;"><i class="icon icon-no-data"></i> <span>您暂时没有数据可显示</span>
                                    </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="g-h10"></div>
</div>

<!--底部-->
<!--start 尾部-->
<div style="position:relative;height:90px;width: 1347px;">
    <jsp:include page="/WEB-INF/jsp/common/bottom.jsp"></jsp:include>
</div>
<!--end 尾部-->
<script src="${pageContext.request.contextPath}/js/zdzjs/account/highcharts-5-2197cdde07.0.0.js"></script>
<script src="${pageContext.request.contextPath}/js/zdzjs/account/init-32553ee30d.js"></script>
<script>

    $("#div1").show();
    $("#div2").hide();
    function f1() {
        $("#div1").show();
        $("#div2").hide();
        $('#l1').addClass( "cur");
        $('#l2').removeClass( "cur");




    }
    function f2() {
        $("#div2").show();
        $("#div1").hide();
        $('#l2').addClass( "cur");
        $('#l1').removeClass( "cur");
    }

    var t1=$("#t1").html();
    if (t1.length<503){


        $("#t1").html("<tr><td colspan='8' class='empty'><div class='no-data'><i>没有数据</i></div></td> </tr>");
    }
    var t2=$("#t2").html();


    if (t2.length<503){


        $("#t2").html("<tr><td colspan='8' class='empty'><div class='no-data'><i>没有数据</i></div> </td> </tr>");
    }
    var PAGE_DATA = {
        rewardedDetails: {
            investBonusSum: "20.00" * 1,
            interestIncomeSum: "0" * 1,
            productRaiseRewardSum: "0" * 1,
            otherRewardSum: "0.00" * 1,
        },
        depositFlag: '1' * 1 //是否开通存管账户 1已开户 2开户中 3未开户
    };
    $(function () {
        seajs.use('account/index/js/init');
    });

</script>
<div class="tip-yellow">
    <div class="tip-inner tip-bg-image"></div>
    <div class="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"></div>
</div>
</body>
</html>