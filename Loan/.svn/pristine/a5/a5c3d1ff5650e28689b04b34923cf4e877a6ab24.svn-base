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
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/style-422bbe54db.css">

    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/style-f37c86cdf4.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/style-1ed5f9e4a1.css">
    <link charset="utf-8" rel="stylesheet" href="${pageContext.request.contextPath}/css/zdzcss/account/slide-c083fae5c2.css">
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/zdzjs/account/base-6100562494.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/zdzjs/account/common-83987ed24e.js"></script>
    <script src="${pageContext.request.contextPath}/js/zdzjs/account/init-2322a9b61c.js"></script>
    <script src="https://image.xiaoniu88.com/static/WebXn/dist/payment/recharge/js/init-3a57464aac.js"></script>


    <%--<script type="text/javascript" src="${pageContext.request.contextPath}/js/zdzjs/account/init-04db39f11b.js"></script>--%>
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
    <script type="text/javascript">
        //充值
        function acccz(uid) {
            //将充值界面展开，原本界面隐藏
            $("#accountmain").css("display","none");
            $("#accountcz").css("display","block");

            //根据uid去查询实名认证表
            $.post("/account/topayment",{uid:uid},function (data) {
                var rea=data.real;
                var bankcard1=rea.bankcard;
                var name=rea.realname;
                var bk="*";
                var na="";
                for (var i = bankcard1.length-4; i <bankcard1.length ; i++) {
                    bk+=bankcard1[i];
                }
                for (var i = 0; i <1 ; i++) {
                    na+=name[i];
                }
                na+="**";
                var ss="<i></i>" +
                    "<em></em>"+bk+" | "+na+"";
                $("#paymentdetil").html(ss);//将结果写在标签上

                var phone=rea.bankphone;
                $("#phone").val(phone);

                //获取交易密码
                var jycode=rea.idpwd;
                $("#jycode").val(jycode);
            },'json');


        }
        $(function () {
            //组件的改变事件
            $("#money").bind('input propertychange',function(){
               var money=$(this).val();
                money=parseFloat(money,10);
                if(money>=2000000){
                    alert("单次充值限制在20万之内");
                    $(this).val("");
                    return false;
                }else {
                    //获取原先的可用余额
                    var kyye1 = $("#paykyye").text();
                    kyye1 = parseFloat(kyye1, 10);
                    //将两个值添加在一起
                    var sun = (money + kyye1);
                    $("#paykyye2").text("");
                    $("#paykyye2").text(sun);
                }
            });
            //获取验证码
            $("#getyzm").click(function () {
                var phone=$("#phone").val();
                $.post("/account/sendyzm",{phone:phone},function (data) {
                    alert("验证码已发出请查收");
                    //得到验证码
                    var msg=data.msg;
                    //设置验证码
                    $("#sendcode").val(msg);//设置验证码
                },'json');


            });

            //充值
            $("#rcbtn").click(function () {

                var sum=$("#paykyye2").text();//获取充值后可用余额
                var uid=$("#uid").val();//用户id
                //得到充值金额
                var money=$("#money").val();
                var jycode=$("#paycode").val();
                var yzcode=$("#validCode").val();
                //发送的验证码
                var redcode=$("#sendcode").val();

                var jycode2= $("#jycode").val();//获得交易密码

                if(money==null||money==''){
                    alert("请填写充值金额");
                    return false;
                }
                if(jycode==null||jycode==''){
                    alert("请填写交易密码");
                    return false;
                }
                if(jycode!=jycode2){
                    alert("交易密码错误");
                    $("#paycode").val("").focus();
                    return false;
                }
                if(yzcode==null||yzcode==''){
                    alert("请输入验证码");
                    return false;
                }
                if(yzcode!=redcode){
                    alert("验证码错误");
                    $("#validCode").val("").focus();
                    return false;
                }

                //到后台保存数据
                $.ajax({
                    async:false,
                    url: '${pageContext.request.contextPath}/account/paymentadd',
                    type: 'post',
                    data: {kyye:sum,uid:uid,money:money},
                    dataType:'json',

                    success: function (data) {
                        $("#money").val("");
                        $("#paycode").val("");
                        $("#validCode").val("");
                       var meg=data.msg;
                       alert(meg);
                    }
                });

            });
        });
    </script>
    <script type="text/javascript">
        //提现
        function acctx(uid) {
            //将充值界面展开，原本界面隐藏
            $("#accountmain").css("display","none");
            $("#accounttx").css("display","block");
            //根据uid去查询实名认证表
            $.post("/account/topayment",{uid:uid},function (data) {
                var rea=data.real;
                var bankcard1=rea.bankcard;
                var bk="";
                for (var i = bankcard1.length-4; i <bankcard1.length ; i++) {
                    bk+=bankcard1[i];
                }
                var ss="尾号 ："+bk+"";
                $("#card-num").text(ss);//将结果写在标签上
                //获取交易密码
                var jycode=rea.idpwd;
                $("#txjycode").val(jycode);
            },'json');
        }
        $(function () {

            //得到焦点事件
            $("#wd-amt").focus(function () {
                var mm=$(this).val();
                if(mm==null||mm==''){
                    $(this).addClass("err");
                   //表示提现金额不能为空
                    var ss="<span class='wd_tip errTip'>提现金额不能为空</span>";
                    $("#txtext").html(ss);
                    $("#txtext").css("display","block");
                }
            });
            //得到焦点事件
            $("#tradePasswd").focus(function () {
                $(this).removeClass("err");
                $("#jytext").css("display","none");

            });
            //文本框改变事件
            $("#wd-amt").bind('input propertychange',function () {
                var mm=$(this).val();
                mm=parseFloat(mm, 10);
                //获取可用余额
                var kyye=$("#txkyye").text();
                kyye = parseFloat(kyye, 10);
                if(mm>=kyye){
                    $(this).addClass("err");
                    var ss="<span class='wd_tip errTip'>提现金额不能大于可用余额</span>";
                    $("#txtext").html(ss);
                    $("#txtext").css("display","block");
                }
                if(mm<kyye){
                    $("#txtext").css("display","none");
                    $(this).removeClass("err");
                }
                if(isNaN(mm)){//表示不是数字
                    $(this).addClass("err");
                    var ss="<span class='wd_tip errTip'>提现金额请输入大于0的数字</span>";
                    $("#txtext").html(ss);
                    $("#txtext").css("display","block");
                }
                if(mm==0){
                    $(this).addClass("err");
                    var ss="<span class='wd_tip errTip'>提现金额请输入大于0的数字</span>";
                    $("#txtext").html(ss);
                    $("#txtext").css("display","block");
                }
            });
            
            //体现数据提交
            $("#txbtn").click(function () {
                var uid=$("#uid").val();//用户id
                //获取可用余额
                var kyye=$("#txkyye").text();
                kyye = parseFloat(kyye, 10);
                //体现金额
                var mm=$("#wd-amt").val();
                mm= parseFloat(mm, 10);
                //获取交易密码
                var jycode=$("#tradePasswd").val();
                //真的交易密码
                var rejycode=$("#txjycode").val();
                if(jycode!=rejycode){
                    //交易密码错误
                    $("#tradePasswd").addClass("err");
                    $("#tradePasswd").val("");
                    var ss="<span class='wd_tip errTip'>交易密码错误！</span>";
                    $("#jytext").html(ss);
                    $("#jytext").css("display","block");
                    return false;
                }
                if(mm>=kyye){
                    $("#wd-amt").addClass("err");
                    var ss="<span class='wd_tip errTip'>提现金额不能大于可用余额</span>";
                    $("#txtext").html(ss);
                    $("#txtext").css("display","block");
                    return false;
                }
                if(isNaN(mm)){//表示不是数字
                    $("#wd-amt").addClass("err");
                    $("#wd-amt").val("").focus();
                    var ss="<span class='wd_tip errTip'>提现金额请输入大于0的数字</span>";
                    $("#txtext").html(ss);
                    $("#txtext").css("display","block");
                    return false;
                }
                if(mm==0){
                    $("#wd-amt").addClass("err");
                    $("#wd-amt").val("").focus();
                    var ss="<span class='wd_tip errTip'>提现金额请输入大于0的数字</span>";
                    $("#txtext").html(ss);
                    $("#txtext").css("display","block");
                    return false;
                }
                if(mm==null||mm==''){
                    $("#wd-amt").addClass("err");
                    var ss="<span class='wd_tip errTip'>提现金额不能为空</span>";
                    $("#txtext").html(ss);
                    $("#txtext").css("display","block");
                    return false;
                }

                //到后台保存数据
                $.ajax({
                    async:false,
                    url: '${pageContext.request.contextPath}/account/paymentreduce',
                    type: 'post',
                    data: {uid:uid,money:mm},
                    dataType:'json',
                    success: function (data) {
                        //体现金额
                        $("#wd-amt").val("");
                        $("#tradePasswd").val("");
                        var meg=data.msg;
                        alert(meg);
                    }
                });


            });

        });

    </script>
</head>
<body style="">
<!--导航-->

<!-- 当前选中菜单 -->
<input value="${user.uid}" type="hidden" id="uid">
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
                    <li data-type="index" class="cur">
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
            <div class="account-cont" id="accountmain">
                <div class="account-index">
                    <div class="assets">
                        <div class="assets-left">
                            <dl class="total" data-month="4" data-year="2019">
                                <dt>总资产<i class="icon-question"
                                          title="<p style='color:red;'>*投标中状态的待收利息及奖励不计入总资产。</p><p>总资产=待收本金+待收利息及奖励+提现冻结+可用余额</p><p>待收本金：含体验金本金及投资冻结金额</p><p>待收利息及奖励= 待收利息+待收奖励</p><p>待收奖励=待收新手奖励+待收增利券奖励+待收限时奖励+待收续期奖励+待收其他奖励</p>"></i>
                                </dt>
                                <dd>
                                    <big>${account.countmoney}</big>
                                    <small>元</small>

                                </dd>
                            </dl>
                            <div class="detail">
                                <dl class="due-principal">
                                    <dt>待收本金(元)</dt>
                                    <dd>${account.countbj}</dd>
                                </dl>
                                <dl class="due-interest">
                                    <dt>待收利息及奖励(元)<i class="icon-question"
                                                     title="<p>待收利息及奖励是指持有中/转让中的待收利息及待收平台奖励，待收平台奖励包括新手奖励、增利券奖励、限时奖励、续期奖励、返现红包和平台其他奖励</p><p>*转让标待收利息包括待收垫付利息</p>"></i>
                                    </dt>
                                    <dd>${account.countlx}</dd>
                                </dl>
                                <dl class="assets-freeze last">
                                    <dt>资金冻结(元)<i class="icon-question"
                                                  title="<p>资金冻结=提现冻结+体验标利息冻结</p><p>体验标利息冻结：用户未在平台完成首次充值时，已回款的体验标利息会处于冻结状态，需用户完成首次充值后才会解冻到网贷余额</p>"></i>
                                    </dt>
                                    <dd>${account.djmoney}</dd>
                                </dl>
                            </div>
                            <div class="balance">
                                <dl>
                                    <dt>可用余额(元)</dt>
                                    <dd>${account.kyye}</dd>
                                </dl>
                                <c:if test="${bank=='false'}">
                                    <a class="withdrawal-btn" href="/account/toapp?uid=${user.uid}">提现</a>
                                    <a class="recharge-btn" href="/account/toapp?uid=${user.uid}">充值</a>
                                </c:if>
                                <c:if test="${bank=='true'}">
                                    <a class="withdrawal-btn" href="javascript:acctx('${user.uid}');">提现</a>
                                    <a class="recharge-btn" href="javascript:acccz('${user.uid}');">充值</a>
                                </c:if>

                            </div>
                        </div>
                        <div class="assets-right">
                            <dl class="earned">
                                <dt>累计已赚(元)<i class="icon-question"
                                              title="<p style='color:red'>*累计已赚是指用户从加入平台第一天至今实际已到账的收益</p><p>累计已赚=已赚收益+已赚邀请奖励-提现手续费；</p><p>已赚收益=已赚利息及奖励+获得让利-让利亏损-转让手续费</p><p>获得让利：购买转让标时的获得让利</p><p>让利亏损：安稳投/散标/转让标转让时，让利亏损金额</p><p>转让手续费：安稳投/散标/转让标提前转让时平台收取的服务费</p>"></i>
                                </dt>
                                <dd>${account.countsy}</dd>
                            </dl>
                            <div class="detail">
                                <dl class="profit-earnings">
                                    <dt>其他收益(元)</dt>
                                    <dd>${account.qtsy}</dd>
                                </dl>
                                <dl class="fp-earnings last">
                                    <dt>邀请好友收益(元)</dt>
                                    <dd>${account.invitedsy}</dd>
                                </dl>
                            </div>
                            <div class="pk-area">
                                <a class="pk-link"
                                   href="#">收益PK赢好礼&gt;</a>
                            </div>
                        </div>
                    </div>

                    <div class="lend">
                        <input type="hidden" value='[{"investTime":"2019-04","investAmount":0},{"investTime":"2019-03","investAmount":0},{"investTime":"2019-02","investAmount":0},{"investTime":"2019-01","investAmount":0},{"investTime":"2018-12","investAmount":0},{"investTime":"2018-11","investAmount":0}]' id="sixData" />
                        <div class="charts">
                            <h2>出借走势</h2>
                            <div class="inner">
                                <div id="chartsData"></div>
                            </div>
                        </div>
                        <div class="calendar">
                            <h2>回款日历</h2>
                            <div class="total-data">
                                <div id="date" data-url="#">
                                    <div class="datepicker" id="datepicker_826"
                                         style="display: block; position: relative; width: 245px; height: 308px;">
                                        <div class="datepickerBorderT"></div>
                                        <div class="datepickerBorderB"></div>
                                        <div class="datepickerBorderL"></div>
                                        <div class="datepickerBorderR"></div>
                                        <div class="datepickerBorderTL"></div>
                                        <div class="datepickerBorderTR"></div>
                                        <div class="datepickerBorderBL"></div>
                                        <div class="datepickerBorderBR"></div>
                                        <div class="datepickerContainer" style="width: 223px; height: 285px;">
                                            <table cellspacing="0" cellpadding="0">
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <table cellspacing="0" cellpadding="0"
                                                               class="datepickerViewDays">
                                                            <thead>
                                                            <tr class="datepickerControls">
                                                                <th class="datepickerGoPrev"><a class="bg"
                                                                                                href="javascript:;"><span></span></a>
                                                                </th>
                                                                <th colspan="5" class="datepickerMonth">
                                                                    <span>四月, 2019</span></th>
                                                                <th class="datepickerGoNext"><a
                                                                        href="javascript:;"><span></span></a></th>
                                                            </tr>
                                                            <tr class="datepickerDoW">
                                                                <th><span style="color:#fd8218;">日</span></th>
                                                                <th><span>一</span></th>
                                                                <th><span>二</span></th>
                                                                <th><span>三</span></th>
                                                                <th><span>四</span></th>
                                                                <th><span>五</span></th>
                                                                <th><span style="color:#fd8218;">六</span></th>
                                                            </tr>
                                                            </thead>
                                                            <tbody class="datepickerMonths">
                                                            <tr>
                                                                <td colspan="2"><a href="#"><span>一月</span></a></td>
                                                                <td colspan="2"><a href="#"><span>二月</span></a></td>
                                                                <td colspan="2"><a href="#"><span>三月</span></a></td>
                                                                <td colspan="2"><a href="#"><span>四月</span></a></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2"><a href="#"><span>五月</span></a></td>
                                                                <td colspan="2"><a href="#"><span>六月</span></a></td>
                                                                <td colspan="2"><a href="#"><span>七月</span></a></td>
                                                                <td colspan="2"><a href="#"><span>八月</span></a></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2"><a href="#"><span>九月</span></a></td>
                                                                <td colspan="2"><a href="#"><span>十月</span></a></td>
                                                                <td colspan="2"><a href="#"><span>十一月</span></a></td>
                                                                <td colspan="2"><a href="#"><span>十二月</span></a></td>
                                                            </tr>
                                                            </tbody>
                                                            <tbody class="datepickerDays">
                                                            <tr>
                                                                <td title=""
                                                                    class="datepickerNotInMonth datepickerSunday"><a
                                                                        href="#"><span>31</span></a></td>
                                                                <td title="" class=""><a href="#"><span>1</span></a>
                                                                </td>
                                                                <td title="" class=""><a href="#"><span>2</span></a>
                                                                </td>
                                                                <td title="" class=""><a href="#"><span>3</span></a>
                                                                </td>
                                                                <td title="" class=""><a href="#"><span>4</span></a>
                                                                </td>
                                                                <td title="" class=""><a href="#"><span>5</span></a>
                                                                </td>
                                                                <td title="" class="datepickerSaturday"><a
                                                                        href="#"><span>6</span></a></td>
                                                            </tr>
                                                            <tr>
                                                                <td title="" class="datepickerSunday"><a href="#"><span>7</span></a>
                                                                </td>
                                                                <td title="" class=""><a href="#"><span>8</span></a>
                                                                </td>
                                                                <td title="" class=""><a href="#"><span>9</span></a>
                                                                </td>
                                                                <td title="" class=""><a href="#"><span>10</span></a>
                                                                </td>
                                                                <td title="" class=""><a href="#"><span>11</span></a>
                                                                </td>
                                                                <td title="" class=""><a href="#"><span>12</span></a>
                                                                </td>
                                                                <td title="" class="datepickerSaturday"><a
                                                                        href="#"><span>13</span></a></td>
                                                            </tr>
                                                            <tr>
                                                                <td title="" class="datepickerSunday"><a href="#"><span>14</span></a>
                                                                </td>
                                                                <td title="" class=""><a href="#"><span>15</span></a>
                                                                </td>
                                                                <td title="" class=""><a href="#"><span>16</span></a>
                                                                </td>
                                                                <td title="" class=""><a href="#"><span>17</span></a>
                                                                </td>
                                                                <td title="" class=""><a href="#"><span>18</span></a>
                                                                </td>
                                                                <td title="" class=""><a href="#"><span>19</span></a>
                                                                </td>
                                                                <td title="" class="datepickerSaturday"><a
                                                                        href="#"><span>20</span></a></td>
                                                            </tr>
                                                            <tr>
                                                                <td title="" class="datepickerSunday"><a href="#"><span>21</span></a>
                                                                </td>
                                                                <td title="" class=""><a href="#"><span>22</span></a>
                                                                </td>
                                                                <td title="" class=""><a href="#"><span>23</span></a>
                                                                </td>
                                                                <td title="" class=""><a href="#"><span>24</span></a>
                                                                </td>
                                                                <td title="" class=""><a href="#"><span>25</span></a>
                                                                </td>
                                                                <td title="" class=""><a href="#"><span>26</span></a>
                                                                </td>
                                                                <td title="" class="datepickerSaturday"><a
                                                                        href="#"><span>27</span></a></td>
                                                            </tr>
                                                            <tr>
                                                                <td title="" class="datepickerSunday"><a href="#"><span>28</span></a>
                                                                </td>
                                                                <td title="" class=""><a href="#"><span>29</span></a>
                                                                </td>
                                                                <td title="" class=""><a href="#"><span>30</span></a>
                                                                </td>
                                                                <td title="" class="datepickerNotInMonth"><a
                                                                        href="#"><span>1</span></a></td>
                                                                <td title="" class="datepickerNotInMonth"><a
                                                                        href="#"><span>2</span></a></td>
                                                                <td title="" class="datepickerNotInMonth"><a
                                                                        href="#"><span>3</span></a></td>
                                                                <td title=""
                                                                    class="datepickerNotInMonth datepickerSaturday"><a
                                                                        href="#"><span>4</span></a></td>
                                                            </tr>
                                                            <tr>
                                                                <td title=""
                                                                    class="datepickerNotInMonth datepickerSunday"><a
                                                                        href="#"><span>5</span></a></td>
                                                                <td title="" class="datepickerNotInMonth"><a
                                                                        href="#"><span>6</span></a></td>
                                                                <td title="" class="datepickerNotInMonth"><a
                                                                        href="#"><span>7</span></a></td>
                                                                <td title="" class="datepickerNotInMonth"><a
                                                                        href="#"><span>8</span></a></td>
                                                                <td title="" class="datepickerNotInMonth"><a
                                                                        href="#"><span>9</span></a></td>
                                                                <td title="" class="datepickerNotInMonth"><a
                                                                        href="#"><span>10</span></a></td>
                                                                <td title=""
                                                                    class="datepickerNotInMonth datepickerSaturday"><a
                                                                        href="#"><span>11</span></a></td>
                                                            </tr>
                                                            </tbody>
                                                            <tbody class="datepickerYears">
                                                            <tr>
                                                                <td colspan="2"><a href="#"><span>2013</span></a></td>
                                                                <td colspan="2"><a href="#"><span>2014</span></a></td>
                                                                <td colspan="2"><a href="#"><span>2015</span></a></td>
                                                                <td colspan="2"><a href="#"><span>2016</span></a></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2"><a href="#"><span>2017</span></a></td>
                                                                <td colspan="2"><a href="#"><span>2018</span></a></td>
                                                                <td colspan="2"><a href="#"><span>2019</span></a></td>
                                                                <td colspan="2"><a href="#"><span>2020</span></a></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2"><a href="#"><span>2021</span></a></td>
                                                                <td colspan="2"><a href="#"><span>2022</span></a></td>
                                                                <td colspan="2"><a href="#"><span>2023</span></a></td>
                                                                <td colspan="2"><a href="#"><span>2024</span></a></td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="total" id="calendar-total" data-month="4" data-year="2019">
                                    <div class="month"><span
                                            class="left"><b>0.00</b>元<br>本月预期回款总额</span><span><b>0.00</b>元<br>本月已回款总额</span>
                                    </div>
                                    <div class="day">2019-04-20<br>今日预期回款：<b>0.00</b>元</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="recommend" id="recommend"><h2>热门推荐</h2>
                        <div class="product-list">
                            <a class="product " href="/product/bid/detail/64268292?specialArea=1&amp;productType=11">
                                <div class="label-content">
                                    <span class="label js_poshytip" style="color:#FFFFFF;background:#ef7a46;" title="拿7.8%返现+6888奖金→">奋斗季</span>
                                    <span class="label js_poshytip" style="color:#FFFFFF;background:#ef7a46;" title="奋斗季额外增利+0.8%，戳→">增利0.8%</span>
                                </div>
                                <p class="p1">
                                    <big>10.00</big>
                                    %<span class="add-rate">+0.80%<i>限时</i></span>
                                </p>
                                <p class="p2">参考利率
                                    <i class="icon-question js_poshytip" title=""></i>
                                </p>
                                <p class="p3"><big>24</big>个月</p>
                                <p class="p4">锁定期 | 持满自动转让</p>
                                <span class="btn disabled">已售罄</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="g-h30"></div>
                <!-- 普惠广告位760*247 -->
                <div id="puhuiContainer">

                </div>
                <!--内容区 end-->
            </div>
            <%--充值--%>
            <div class="account-cont" id="accountcz" style="display:none">
                <div class="at-til"><span class="name">充值</span></div>
                <!--内容区 start-->
                <h2 class="rc_til">选择充值方式</h2>
                <div class="kq-box">

                    <div class="kq-rz">
                        <h2 class="til-kq til-icon">认证支付</h2>
                        <div class="blank-sig kq-set">
                            <label>
                                <input name="groud" type="radio" value="" checked="">
                                <span id="paymentdetil" class="ne sel ccb" data-name="ccb" needbranch="false" needunionpay="false" minconsume="0.00"
                                      singlelimits="200000.00" dailylimits="200000.00" monthlylimits="0.00">

					            </span>
                            </label>
                            <span class="un" style="height: 40px; line-height: 18px; max-width: 340px;">银行默认限额：单笔限额20万元，单日限额20万元<br>若您已超出支付限额，请使用网银充值</span>
                        </div>
                    </div>
                    <div class="limits_tab"></div>
                </div>
                <!--内容区 end-->
                <div class="bank-list">
                </div>
                <div class="g-h0"></div>
                <div class="rc_option">
                    <h2 class="rc_til">填写充值金额</h2>
                    <div class="act_bal">
                        <span class="left_bal">当前可用余额 ：&nbsp;&nbsp;&nbsp;
                            <em class="g-fs18 bef_amot" id="paykyye">${account.kyye}</em>&nbsp;元
                        </span>
                        <span class="rgt_bal">充值后可用余额 ：&nbsp;&nbsp;&nbsp;
                            <em class="g-fs18 ava_amot" id="paykyye2">${account.kyye}</em>&nbsp;元
                        </span>
                        <input type="hidden" value="0.00" class="bef_amot_val">
                    </div>
                    <div class="rc_amount">
                        <div class="rc_money_line">
                            <label>充值金额 ：</label>
                            <input id="money" type="text" autocomplete="off" class="many rc_mon_ipt" name="money" data-start="1">
                        </div>
                       <%-- <div class="rc_fee">
                            <label>手 续 费 ：</label>
                            <span class="rc_fee_a">0.00</span>元&nbsp;&nbsp;
                            <span class="rc_fee_tip"title="<div class='fee_tip'>充值手续费按充值金额的0.2%由第三方支付平台收取，当前由小牛在线为客户垫付，实现客户充值0费用。</div>"></span>
                        </div>--%>
                        <span class="rc_money_tip"></span>
                        <div class="rc_mreg">
                            <label>交易密码 ：</label>
                            <input type="password" maxlength="20" data-start="2" autocomplete="off" class="rc_mon_ipt" id="paycode" >
                            <input type="hidden" id="jycode" value="">
                            <a href="#">找回交易密码</a>
                        </div>
                        <span class="rc_money_tip"></span>
                        <div class="rc_mreg" style="display: block;">
                            <label>验证码 ：</label>
                            <input class="rc_mon_ipt wd_code_ipt" type="text" data-start="3" id="validCode">
                            <input type="hidden" id="phone" value="">
                            <input type="hidden" id="sendcode" value="">
                            <span class="wd_getcode wd_clk" id="getyzm">获取验证码</span>
                        </div>
                        <span class="rc_money_tip"></span>
                    </div>
                    <div class="rc_bank_tip"></div>
                    <a class="rc_btn" id="rcbtn">确认充值</a>
                </div>

                <div class="rc_tip" id="chrome">
                    <h3>温馨提示</h3>
                    <p>1.为了您的资金安全，请您在充值之前先完成实名登记；</p>
                    <p>2.单笔充值最低1元，最高不能超过100万元；具体充值限额依据各银行限额为准；</p>
                    <p>3.充值之后就可以购买项目，请同时完成账户安全设置；</p>
                    <p>4.严禁信用卡套现、洗钱等行为，一经发现，资金将退回原卡并封停账号；</p>
                    <p>5.其他问题请查看<a class="help_link" target="_blank" href="#">充值帮助</a>，如有疑问请联系客服4006-0755-70。</p>
                </div>
                <div class="g-h30"></div>
            </div>
            <!--体现-->
            <div class="account-cont" id="accounttx" style="display:none">
                <div class="at-til"><span class="name">提现</span></div>
                <!--内容区 start-->
                <div id="main">
                    <div class="wd_box"><input type="hidden" value="0" class="wd_ava_bal" id="balance">
                        <div class="wd_bankcard"><label>提取到 ：</label>
                            <div class="wd_card">
                                <div class="loan-area">
                                    <div class="wd_cardIcon">
                                        <span id="card-icon" class="bank-ccb"></span>
                                        <i id="card-num"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="loan-area"></div>
                        <div class="wd_balance">
                            <label>可用余额 ：</label>
                            <span id="txkyye">${account.kyye}</span> 元</div>
                        <div class="wd_fee">
                            <label>手续费 ：</label> <strong id="wd-fee" data-fee="1"> 1 </strong> 元
                            <span> 您当前拥有<i>0</i>次免费提现的机会</span>
                        </div>
                        <div class="wd_amount">
                            <label>提现金额 ：</label>
                            <div class="wd_amt_i">
                                <input class="wd_amt_ipt" id="wd-amt" type="text">
                                <span></span>
                            </div>
                        </div>
                        <div class="wd_tip_line" style="display: none;" id="txtext">

                        </div>
                        <div class="loan-area">
                            <div class="wd_pwd"><label>交易密码 ：</label>
                                <input id="txjycode" type="hidden" value="">
                                <input name="pwd" class="wd_tradePwd" type="password" id="tradePasswd">
                                <a href="#" target="_blank" class="find_pwd">找回交易密码</a>
                            </div>
                            <div class="wd_tip_line" style="display: none;" id="jytext">

                            </div>
                            <%--<div class="wd_code">
                                <label>验证码 ：</label>
                                <input disabled="disabled" class="wd_code_ipt" type="text">
                                <span class="wd_getcode wd_clk">获取验证码</span>
                            </div>--%>
                            <div class="wd_tip_line">
                                <span class="wd_code_tip"></span>
                            </div>
                        </div>
                        <div class="wd_btn_line">
                            <span class="wd_btn" id="txbtn">确认提交</span>
                            <p class="loan-area"> 温馨提示：由于银行处理原因，18:00后提交的提现可能将于次日（遇法定节假日顺延）到账 </p></div>
                    </div>
                    <div class="wd_des_title"><span>到账时间说明</span></div>
                    <div class="wd_des loan-area"><p>提现申请审核通过后预计3小时内到帐（节假日期间提现时效以公告内容为准，请关注公告）</p>
                        <table cellspacing="0" cellpadding="0">
                            <colgroup>
                                <col width="20%">
                                <col width="13%">
                                <col width="13%">
                                <col width="13%">
                                <col width="13%">
                                <col width="13%">
                                <col width="13%">
                            </colgroup>
                            <thead>
                            <tr class="tb_h">
                                <td>当日累计提现金额</td>
                                <td>普通会员</td>
                                <td>白银会员</td>
                                <td>黄金会员</td>
                                <td>白金会员</td>
                                <td>黑金会员</td>
                                <td>钻石会员</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>小于10万元</td>
                                <td>自动审核</td>
                                <td>自动审核</td>
                                <td>自动审核</td>
                                <td>自动审核</td>
                                <td>自动审核</td>
                                <td>自动审核</td>
                            </tr>
                            <tr>
                                <td>大于等于10万元</td>
                                <td>人工审核</td>
                                <td>人工审核</td>
                                <td>自动审核</td>
                                <td>自动审核</td>
                                <td>自动审核</td>
                                <td>自动审核</td>
                            </tr>
                            <tr>
                                <td colspan="7" class="tb_l">1、每日（包括节假日）9:00-20:00提交的提现申请，提交后系统自动审核；<br>2、当日20:00以后提交的提现申请，系统将于次日9:00自动审核；<br>3、人工审核需工作日人工手动审核。
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="wd_des wd-des-deposit deposit-area"><p><b>快速提现</b>小于5万 ，实时到账 </p>
                        <p><b>普通提现</b>大于5万，工作日（8:30-17:00）实时到账周末及节假日提现，需要审核，通过后实时到账</p></div>
                </div>
                <div class="g-h30"></div>
                <!--内容区 end-->
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