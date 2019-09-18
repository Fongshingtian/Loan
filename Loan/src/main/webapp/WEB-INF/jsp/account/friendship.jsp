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
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/style-56f226d9f7.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/style-1ed5f9e4a1.css">


    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/style-1c4b124dcb.css">
    <link charset="utf-8" rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/slide-c083fae5c2.css">
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/zdzjs/account/base-6100562494.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/zdzjs/account/common-83987ed24e.js"></script>
    <script src="${pageContext.request.contextPath}/js/zdzjs/account/init-2322a9b61c.js"></script>
    <script src="https://image.xiaoniu88.com/static/WebXn/dist/account/fundrecord/js/init-ac0839c418.js"></script>

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
<div class="mail">
    <div class="g-account-main">

        <div class="path">
            您现在的位置：<span>我的账户 &gt; 我的好友</span>
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
                    <li data-type="index" >
                        <a class="h2" href="/account/toacc?uid=${user.uid}"><b>账户总览</b></a>
                    </li>
                    <li data-type="invest">
                        <a href="/account/toloan?uid=${user.uid}">我的网贷</a>
                    </li>
                    <li data-type="record" >
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
                    <li class="planner last cur" data-type="planner">
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
                <div class="planner">
                    <div class="at-til"><span class="name">我的好友</span></div>

                    <div class="bd">
                        <!-- 收益 -->
                        <ul class="g-cf income">
                            <li>
                                <span>昨日奖励</span>
                                <p>0.00<em>元</em></p>
                            </li>
                            <li>
                                <span>累计奖励</span>
                                <p>0.00<em>元</em></p>
                            </li>
                            <li class="last">
                                <span>本月人脉奖</span>
                                <p>0.00<em>元</em></p>
                            </li>
                        </ul>

                        <!-- tab -->
                        <ul class="g-cf p-tabs">
                            <li data-tab="index"  class="cur" id="t1"><a href="javascript:pagetype();">邀请好友</a></li>
                            <li data-tab="relationship" id="t2"><a href="javascript:pagetype2();">我的人脉</a></li>
                            <li data-tab="earning" id="t3"><a href="javascript:pagetype3();">赚取记录</a></li>
                        </ul>
                        <input type="hidden" value="index" id="pmenu">
                        <!-- 邀请好友 -->
                        <div id="friendtj" style="display: block">

                            <div class="share">
                                <h3><i></i>将您的推荐码复制发给您的好友</h3>
                                <p><input type="text" value="${user.mycode}" style="width: 40px;height: 30px;border: 1px"/></p>
                            </div>
                            <!-- 规则 -->
                            <div class="rule">
                                <h3><i></i>邀请好友规则</h3>
                                <dl class="QA">
                                    <dt>如何邀请好友赚收益？</dt>
                                    <dd>
                                        <p>在平台有过有效出借（包含优享牛、安稳投、散标、存续牛、升财牛，不含转让标），即可成为“邀请人”。</p>
                                    </dd>
                                    <dt>收益奖励规则：</dt>
                                    <dd>
                                        <p>1.您的收益（每天） = 好友1的待收本金*佣金比率/365 + 好友2的待收本金*佣金比率/365 + …… +
                                            好友N的待收本金*佣金比率/365,佣金比率根据好友待收本金不同而定，收益详情可在“我的好友”查看。</p>
                                        <p>2.获得收益奖励的有效期：自好友关系建立起90天内。</p>
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                            <tbody>
                                            <tr>
                                                <th width="50%">单个好友待收本金（单位：元）</th>
                                                <th width="50%">佣金比率</th>
                                            </tr>
                                            <tr>
                                                <td>2000≤待收&lt;10000</td>
                                                <td>0.4%</td>
                                            </tr>
                                            <tr>
                                                <td>10000≤待收&lt;50000</td>
                                                <td>0.6%</td>
                                            </tr>
                                            <tr>
                                                <td>50000≤待收</td>
                                                <td>0.8%</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <p>3.单个好友待收本金≥2000元，可获得收益。低于2000元，不能获得收益。</p>
                                        <p>4.好友待收本金：限优享牛、安稳投、升财牛、散标。注：以上出借产品，都不包含转让标。</p>
                                    </dd>
                                    <dt>人脉奖励获取规则：</dt>
                                    <dd>
                                        <p>1.
                                            活动期间内，每推荐一名好友注册并有效出借，将获得对应奖励：第一位好友，单独奖励50元；第二位好友，单独奖励100元；第三位好友，单独奖励200元；第n位好友（n≥4），每增加一位单独奖励50元；</p>
                                        <p>2.
                                            被推荐好友需满足：活动期间内注册并有效出借，任一笔金额≥5000元，产品期限≥1个月。有效出借产品：限优享牛、安稳投、升财牛、散标计入有效出借。注：以上投标产品，都不包括转让标。</p>
                                    </dd>
                                    <dt>说明及其他：</dt>
                                    <dd>
                                        <p>1.收益奖励和人脉奖励，每日直接发放至小牛在线账户余额；</p>
                                        <p>2.本邀请好友规则将会依据平台的运营情况进行相应调整，邀请好友活动需按规则参加活动，届时以平台公告通知为准；</p>
                                        <p>3.若采取不正当手段获取奖励，一经核实，小牛在线保留拒绝支付奖励或删除相应好友关系的权利；</p>
                                        <p>4.小牛在线有权在合法范围内对邀请好友规则作出解释。</p>
                                    </dd>
                                </dl>
                            </div>

                        </div>
                        <!-- 我的人脉 -->
                        <div id="fromtab" style="display: none">
                            <div class="g-cf list-head">
                                <ul>
                                    <li>好友手机号</li>
                                    <li>实名登记</li>
                                    <li>注册时间</li>
                                    <li>来源</li>
                                </ul>
                            </div>
                            <div class="g-tc data-list" id="relationShipList">
                                <table width="80%"style="font-size: 13px;">
                                    <c:forEach items="${fr}" var="f">
                                        <tr bgcolor="white" style="height: 34px;border-bottom: 1px gainsboro solid ">
                                            <td style="width: 27%;text-align: center">${f.friendphone}</td>
                                            <td style="width: 20%;text-align: center">${f.realname}</td>
                                            <td style="width: 32%;text-align: center">${f.zctime}</td>
                                            <td style="width: 29%;text-align: center">${f.resouce}</td>
                                        </tr>
                                    </c:forEach>
                                </table>
                                <%--<div class="no-data"><i>暂无数据</i></div>--%>
                            </div>
                            <div class="pages">
                                <div class="page"></div>
                            </div>
                        </div>
                       <%--赚取记录--%>
                        <div id="historyfr" style="display: none">
                            <!-- 类型选择 -->
                            <div class="p-type">
                                类型：<span class="cur">收益奖励</span>
                            </div>
                            <!-- 数据表格 -->
                            <div class="data-con" style="display: block;">
                                <div class="g-tc data-list">
                                    <div class="g-cf list-head">
                                        <ul>
                                            <li>奖励日期</li>
                                            <li>金额</li>
                                            <li>奖励类型</li>
                                            <li>发放状态</li>
                                            <li>发放时间</li>
                                        </ul>
                                    </div>
                                    <div class="g-tc data-list" id="rewardList">
                                        <div class="no-data"><i>暂无数据</i></div>
                                    </div>
                                    <div class="pages">
                                        <div class="page"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="g-dn data-con" style="display: none;">
                                <div class="g-cf list-head">
                                    <ul>
                                        <li>奖励日期</li>
                                        <li>金额</li>
                                        <li>奖励类型</li>
                                        <li>发放状态</li>
                                        <li>发放时间</li>
                                    </ul>
                                </div>
                                <div class="g-tc data-list" id="otherRewardList"></div>
                            </div>
                        </div>

                    </div>
                    <!-- 弹窗信息 -->
                   <%-- <div id="sendMsgPop">
                        <div class="send-msg-pop">
                            <p class="note">若您邀请的好友按您填写的手机号码在30天内成功注册,且注册时没有填写推荐人，您将自动成为他的邀请人。</p>
                            <p class="tips">【小牛在线】亲，我是<span>xnwp6175004</span>；小牛在线<span>xiaoniu88.com</span>有惊喜，我在这里等您！</p>
                            <div class="send">
                                <input type="text" class="phone" placeholder="填写好友手机号" maxlength="11">
                                <a href="javascript:;" class="btn">免费发送短信</a>
                            </div>
                            <p class="msg"></p>
                        </div>
                    </div>--%>
                </div>
                <!--内容区 end-->
            </div>

        </div>
    </div>
    <div class="g-h10"></div>
</div>
<script type="text/javascript">
    function pagetype2() {
       $("#friendtj").css("display","none");
       $("#historyfr").css("display","none");
       $("#t1").removeClass("cur");
       $("#t3").removeClass("cur");
       $("#t2").addClass("cur");
       $("#fromtab").css("display","block");
    }
    function pagetype3() {
        $("#friendtj").css("display","none");
        $("#historyfr").css("display","block");
        $("#t1").removeClass("cur");
        $("#t2").removeClass("cur");
        $("#t3").addClass("cur");
        $("#fromtab").css("display","none");
    }
    function pagetype() {
        $("#friendtj").css("display","block");
        $("#historyfr").css("display","none");
        $("#t3").removeClass("cur");
        $("#t2").removeClass("cur");
        $("#t1").addClass("cur");
        $("#fromtab").css("display","none");
    }
</script>

<!--底部-->
<!--start 尾部-->
<div style="position:relative;height:90px;width: 1347px;">
    <jsp:include page="/WEB-INF/jsp/common/bottom.jsp"></jsp:include>
</div>
<!--end 尾部-->
<script src="${pageContext.request.contextPath}/js/zdzjs/account/highcharts-5-2197cdde07.0.0.js"></script>
<script src="${pageContext.request.contextPath}/js/zdzjs/account/init-32553ee30d.js"></script>
<script>
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