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
    <link rel="stylesheet" href="//image.xiaoniu88.com/static/WebXn/dist/account/investment/css/style-57e1e8b6bb.css"/>

    <link rel="shortcut icon" href="//image.xiaoniu88.com/static/WebXn/dist/images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/base-56e256b865.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/style-1ed5f9e4a1.css">
    <link charset="utf-8" rel="stylesheet"
          href="${pageContext.request.contextPath}/css/zdzcss/account/slide-c083fae5c2.css">
    <script type="text/javascript"
            src="${pageContext.request.contextPath}/js/zdzjs/account/base-6100562494.js"></script>
    <script type="text/javascript"
            src="${pageContext.request.contextPath}/js/zdzjs/account/common-83987ed24e.js"></script>
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
<!--导航-->

<!-- 当前选中菜单 -->
<div id="div1" style="left: 116px; top: 0px; visibility: visible;display: none; position: absolute; width: 832px; z-index: 1984;"
     class="">
    <table class="ui_border ui_state_visible ui_state_focus ui_state_lock">
        <tbody>
        <tr>
            <td class="ui_lt"></td>
            <td class="ui_t"></td>
            <td class="ui_rt"></td>
        </tr>
        <tr>
            <td class="ui_l"></td>
            <td class="ui_c">
                <div class="ui_inner">
                    <table class="ui_dialog">
                        <tbody>
                        <tr>
                            <td colspan="2">
                                <div class="ui_title_bar">
                                    <div class="ui_title" unselectable="on" style="cursor: move;">合同详情</div>
                                    <div class="ui_title_buttons"><a class="ui_min" href="javascript:void(0);"
                                                                     title="最小化" style="display: none;"><b
                                            class="ui_min_b"></b></a><a class="ui_max" href="javascript:void(0);"
                                                                        title="最大化" style="display: none;"><b
                                            class="ui_max_b"></b></a><a class="ui_res" href="javascript:void(0);"
                                                                        title="还原"><b class="ui_res_b"></b><b
                                            class="ui_res_t"></b></a><a class="ui_close"  onclick="z2()"
                                                                        title="关闭(esc键)" style="display: inline-block;">×</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="ui_icon" style="display: none;"></td>
                            <td class="ui_main" style="width: 800px; height: 600px;">
                                <div class="ui_content" style="padding: 10px;">
                                    <iframe border="0"
                                            src="${pageContext.request.contextPath}/account/toht?uid=${user.uid}&bid=${mytb.bid}&zid=${mytb.zid}"
                                            width="800" height="600" frameborder="no"></iframe>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div class="ui_buttons" style="display: none;"></div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </td>
            <td class="ui_r"></td>
        </tr>
        <tr>
            <td class="ui_lb"></td>
            <td class="ui_b"></td>
            <td class="ui_rb" style="cursor: se-resize;"></td>
        </tr>
        </tbody>
    </table>
</div>
<div class="mail">
    <div class="g-account-main">

        <div class="path">
            您现在的位置：<span>我的账户 &gt; 我的网贷</span>
        </div>
        <div class="center user-box">
            <!--start 我的账户左边菜单列表-->
            <div class="account-list">
                <div class="account-info">
                    <div class="member-info">
                        <div>
                            <span class="name" id="username">${user.uname}</span>
                            <span class="member-level pop-tip member-level-0" id="member-level"
                                  title="<a target='_blank' href='/user/member/benefits'>了解更多权益</a>">普通会员</span>
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
            <div class="account-cont">
                <div class="at-til">
                    <span class="name">我的项目</span>
                    <a href="javascript:history.go(-1)" class="go-back">返回</a>
                </div>

                <!-- 项目详情 -->
                <div class="at-bd invest-detail">
                    <input type="hidden" id="pageCal" value="4224258" data-root="https://www.xiaoniu88.com"
                           data-imgpath="//image.xiaoniu88.com/static/WebXn/dist">
                    <!-- 项目信息 -->
                    <h2>项目信息</h2>
                    <div class="project-bd project-info">
                        <input type="hidden" id="investDetail" data-creditorstatus="-1" data-productid="146418"
                               data-investid="1236544" data-type="expired" data-productstatus="5"
                               data-investamount="100.00">
                        <h3>安心牛M20151213-${mytb.bid} <a onclick="z1()" class="view-contract">查看合同</a></h3>
                        <table width="100%" cellpadding="0" cellspadding="0" border="0">
                            <tbody>
                            <tr>
                                <td><span>购买金额：</span>${mytb.ckrate}.00 元</td>
                                <td class="th-w"><span>期限：</span>${mytb.periods}</td>
                                <td class="th-w"><span>参考利率：</span>${mytb.ckrate}%</td>
                            </tr>
                            <tr>
                                <td><span>收益处理方式：</span>收益复投</td>


                                <td class="th-w"><span>实际收益：</span>${mytb.interest}元</td>
                                <td class="th-w"><span>实际收益率：</span>${mytb.ckrate}%

                                    <span style="color:red;">+0.0%(奖)</span>

                                </td>


                            </tr>
                            <tr>
                                <td class="th-w"><span>到期日期：</span> ${mytb.endtime}</td>
                                <td class="th-w"><span>加入时间：</span>${mytb.begintime}</td>
                            </tr>
                            <tr>

                                <td><span>加入人次：</span>${count}人次</td>


                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="g-h15"></div>


                    <!-- 债权转让开始 -->

                    <div id="dialogCode">
                        <div class="transfer_pop">
                            <div class="tp_step tp_step1">
                                <h3>您确认需要撤销转让吗?</h3>
                                <div class="g-tc"><input type="button" class="tp_btn ok" value="确定"><input type="button"
                                                                                                           class="tp_btn cancel"
                                                                                                           value="取消">
                                </div>
                            </div>
                            <div class="tp_step tp_step2">
                                <h3>转让申请撤销成功。</h3>
                                <div class="g-tc"><input type="button" class="tp_btn" value="确定"></div>
                            </div>
                        </div>
                    </div>
                    <div class="g-h15"></div>
                    <!-- 债权转让 结束-->

                    <div class="g-h15"></div>



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


    $("#div1").hide();
    function z1(){

        $("#div1").show();

    }
    function z2(){

        $("#div1").hide();

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