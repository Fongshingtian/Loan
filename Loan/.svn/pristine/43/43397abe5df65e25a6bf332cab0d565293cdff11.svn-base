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
            您现在的位置：<span>我的账户 &gt; 资金记录</span>
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
                    <li data-type="record" class="cur">
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
                <div class="at-til" style="height: 47px;">
                    <span class="name">资金记录</span>
                </div>
                <!--内容区 start-->
                <div class="srh_box">
                    <span>起止时间：</span>

                    <input id="starttime" type="date">
                    -
                    <input id="endtime" type="date">
                    <a class="srh_btn" id="timeserch">查询</a>
                </div>
                <div class="deal_type">
                    <span>交易类型：</span>
                    <a class="d_all cur" id="typecur" href="javascript:changetype(0);">全部</a>
                    <a class="d_invest" id="typecur1" href="javascript:changetype(1);">投标</a>
                    <a class="d_recharge"id="typecur3" href="javascript:changetype(3);">充值</a>
                    <a class="d_withdraw" id="typecur4"href="javascript:changetype(4);">提现</a>
                    <a class="d_reward"id="typecur2" href="javascript:changetype(2);">奖励</a>
                </div>
                <!-- 全部 -->
                <table class="deal_tab" style="display: table;" cellspacing="0" cellpadding="0" border="0">
                    <colgroup>
                        <col width="25%">
                        <col width="10%">
                        <col width="20%">
                        <col width="19%">
                        <col width="25%">
                    </colgroup>
                    <thead>
                    <tr>
                        <th>时间</th>
                        <th>类型</th>
                        <th>操作金额(元)</th>
                        <th>可用余额(元)</th>
                        <th>备注</th>
                    </tr>
                    </thead>
                    <tbody class="tbody1" id="recodtext1">
                    <c:forEach var="re" items="${redlist}">
                        <tr class="bt">
                            <td>${re.rtime}</td>
                            <c:if test="${re.rtype=='1'}">
                                <td>购买投资</td>
                            </c:if>
                            <c:if test="${re.rtype=='2'}">
                                <td>收益奖励</td>
                            </c:if>
                            <c:if test="${re.rtype=='3'}">
                                <td>账户充值</td>
                            </c:if>
                            <c:if test="${re.rtype=='4'}">
                                <td>提现成功</td>
                            </c:if>
                            <c:if test="${re.rtype=='5'}">
                                <td>申请提现</td>
                            </c:if>
                            <td>${re.rmoney}</td>
                            <td>${re.kyye}</td>
                            <td>${re.bzxx}</td>
                        </tr>

                    </c:forEach>
                    </tbody>
                    <tbody id="recodtext2"></tbody>
                    <tbody id="recodtext3"></tbody>
                    <tbody id="recodtext4"></tbody>
                </table>
                <div class="pages"id="pages1">
                    <div class="page">
                        第<i class="pg">${page.currPage}</i>页/共<i class="cal">${page.totalPage}</i>页
                        <a data-page="fast"href="javascript:changepage(1);">首页</a>
                        <a data-page="up" href="javascript:changepage('${page.currPage-1}');">上一页</a>
                        <a data-page="un" href="javascript:changepage(1);" id="cur" class="cur">1</a>
                        <a data-page="un" href="javascript:changepage(2);">2</a>
                        <a data-page="un" href="javascript:changepage(3);">3</a>
                        <a data-page="down" href="javascript:changepage('${page.currPage+1}')">下一页</a>
                        <a data-page="last" href="javascript:changepage('${page.totalPage}')">末页</a>
                    </div>
                    <input type="hidden" id="userid" value="${user.uid}">
                </div>
                <div class="pages" id="pages2">

                </div>
<%--
                <input type="hidden" id="url" data-type="" data-img="//image.xiaoniu88.com/static/WebXn/dist" data-url="/MyAccount"
                       data-all-url="/fundRecord/all/" data-recharge-url="/fundRecord/recharge/"
                       data-withdraw-url="/fundRecord/withdraw/" data-reward-url="/fundRecord/reward/"
                       data-cancel-withdraw-url="/fundRecord/withdraw/cancel/" data-invest-url="/fundRecord/invest/">--%>
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
<script type="text/javascript">
    $(function () {
        $("#recodtext2").hide();//一开始隐藏
        $("#recodtext3").hide();
        $("#recodtext4").hide();
        $("#pages2").hide();//分页隐藏

        //时间分类查询
        $("#timeserch").click(function () {
            $("#typecur1").removeClass("cur");
            $("#typecur2").removeClass("cur");
            $("#typecur3").removeClass("cur");
            $("#typecur4").removeClass("cur");
            $("#typecur").addClass("cur");

            //获取两个时间
            var start=$("#starttime").val();
            var end=$("#endtime").val();
            var uid=$("#userid").val();//获取用户id
            $.post("/account/recordtime",{uid:uid,starttime:start,endtime:end},function (data) {
                var list=data.redlist;
                var ss="";
                $.each(list,function(index,b){
                    ss+="<tr>"+
                        "<td>"+b.rtime+"</td>"+
                        "<td>"+b.rtype+"</td>"+
                        "<td>"+b.rmoney+"</td>"+
                        "<td>"+b.kyye+"</td>"+
                        "<td>"+b.bzxx+"</td>"+
                        "</tr>";
                });
                $("#recodtext1").hide();
                $("#recodtext2").hide();
                $("#recodtext3").hide();
                $("#recodtext4").html(ss);
                $("#recodtext4").show();
                $("#pages2").hide();
                $("#pages1").show();


            },'json');



        });
    });
    //分页切换模块
    function changepage(currPage) {

        var start=$("#starttime").val();
        var end=$("#endtime").val();
        //移出一开始的样式
        $("#cur").removeClass("cur");
        var uid=$("#userid").val();//获取用户id
        $.post("/account/recordpage",{uid:uid,starttime:start,endtime:end,currPage:currPage},function (data) {
            var list=data.redlist;
            var ss="";
            $.each(list,function(index,b){
                ss+="<tr>"+
                    "<td>"+b.rtime+"</td>"+
                    "<td>"+b.rtype+"</td>"+
                    "<td>"+b.rmoney+"</td>"+
                    "<td>"+b.kyye+"</td>"+
                    "<td>"+b.bzxx+"</td>"+
                    "</tr>";
            });
            $("#recodtext1").hide();
            $("#recodtext3").hide();
            $("#recodtext4").hide();
            $("#recodtext2").html(ss);
            $("#recodtext2").show();
            $("#pages2").hide();
            $("#pages1").show();

        },'json');

    }
    
    //操作状态分类
    function changetype(rtype) {
        var rtype=rtype;
        $("#typecur").removeClass("cur");
        if(rtype==0){
            $("#typecur1").removeClass("cur");
            $("#typecur2").removeClass("cur");
            $("#typecur3").removeClass("cur");
            $("#typecur4").removeClass("cur");
            $("#typecur").addClass("cur");

        }
        if(rtype==1){
            $("#typecur").removeClass("cur");
            $("#typecur2").removeClass("cur");
            $("#typecur3").removeClass("cur");
            $("#typecur4").removeClass("cur");
            $("#typecur1").addClass("cur");

        }
        if(rtype==2){
            $("#typecur").removeClass("cur");
            $("#typecur1").removeClass("cur");
            $("#typecur3").removeClass("cur");
            $("#typecur4").removeClass("cur");
            $("#typecur2").addClass("cur");

        }
        if(rtype==3){
            $("#typecur").removeClass("cur");
            $("#typecur1").removeClass("cur");
            $("#typecur3").removeClass("cur");
            $("#typecur4").removeClass("cur");
            $("#typecur3").addClass("cur");

        }
        if(rtype==4){
            $("#typecur").removeClass("cur");
            $("#typecur1").removeClass("cur");
            $("#typecur3").removeClass("cur");
            $("#typecur2").removeClass("cur");
            $("#typecur4").addClass("cur");

        }

        var start=$("#starttime").val();
        var end=$("#endtime").val();
        var uid=$("#userid").val();//获取用户id
        $.post("/account/recordtype",{uid:uid,starttime:start,endtime:end,rtype1:rtype},function (data) {
            var list=data.redlist;
            var pag=data.page;
            var ss="";
            var p1="";//分页
            $.each(list,function(index,b){
                ss+="<tr>"+
                    "<td>"+b.rtime+"</td>"+
                    "<td>"+b.rtype+"</td>"+
                    "<td>"+b.rmoney+"</td>"+
                    "<td>"+b.kyye+"</td>"+
                    "<td>"+b.bzxx+"</td>"+
                    "</tr>";
            });
            //分页
            p1+="<div class='page'>"+
                "第<i class='pg'>"+pag.currPage+"</i>页/共<i class='cal'>"+pag.totalPage+"</i>页" +
                "<a data-page='fast'href='javascript:changepage2(1,"+rtype+");'>首页</a>" +
                "<a data-page='up' href='javascript:changepage2("+(pag.currPage-1)+","+rtype+");'>上一页</a>" +
                "<a data-page='un' href='javascript:changepage2(1,"+rtype+");' id='cur' class='cur'>1</a>" +
                "<a data-page='un' href='javascript:changepage2(2,"+rtype+");'>2</a>" +
                "<a data-page='un' href='javascript:changepage2(3,"+rtype+");'>3</a>" +
                "<a data-page='down' href='javascript:changepage2("+(pag.currPage+1)+","+rtype+");'>下一页</a>" +
                "<a data-page='last' href='javascript:changepage2("+pag.totalPage+","+rtype+");'>末页</a>" +
                "</div>" +
                "<input type='hidden' id='userid' value="+uid+">";

            $("#recodtext1").hide();
            $("#recodtext2").hide();
            $("#recodtext4").hide();
            $("#recodtext3").html(ss);
            $("#recodtext3").show();
            $("#pages1").hide();
            $("#pages2").html(p1);
            $("#pages2").show();

        },'json');

    }
    //有类型和时间的分页
    function changepage2(currpage,rtype) {
        $("#typecur").removeClass("cur");
        $("#cur").removeClass("cur");
        if(rtype==0){
            $("#typecur1").removeClass("cur");
            $("#typecur2").removeClass("cur");
            $("#typecur3").removeClass("cur");
            $("#typecur4").removeClass("cur");
            $("#typecur").addClass("cur");
        }
        if(rtype==1){
            $("#typecur").removeClass("cur");
            $("#typecur2").removeClass("cur");
            $("#typecur3").removeClass("cur");
            $("#typecur4").removeClass("cur");
            $("#typecur1").addClass("cur");

        }
        if(rtype==2){
            $("#typecur").removeClass("cur");
            $("#typecur1").removeClass("cur");
            $("#typecur3").removeClass("cur");
            $("#typecur4").removeClass("cur");
            $("#typecur2").addClass("cur");

        }
        if(rtype==3){
            $("#typecur").removeClass("cur");
            $("#typecur1").removeClass("cur");
            $("#typecur3").removeClass("cur");
            $("#typecur4").removeClass("cur");
            $("#typecur3").addClass("cur");

        }
        if(rtype==4){
            $("#typecur").removeClass("cur");
            $("#typecur1").removeClass("cur");
            $("#typecur3").removeClass("cur");
            $("#typecur2").removeClass("cur");
            $("#typecur4").addClass("cur");

        }
        var start=$("#starttime").val();
        var end=$("#endtime").val();
        var uid=$("#userid").val();//获取用户id
        $.post("/account/recordtype",{uid:uid,starttime:start,endtime:end,rtype1:rtype,currPage:currpage},function (data) {
            var list=data.redlist;
            var pag=data.page;
            var ss="";
            var p1="";//分页
            $.each(list,function(index,b){
                ss+="<tr>"+
                    "<td>"+b.rtime+"</td>"+
                    "<td>"+b.rtype+"</td>"+
                    "<td>"+b.rmoney+"</td>"+
                    "<td>"+b.kyye+"</td>"+
                    "<td>"+b.bzxx+"</td>"+
                    "</tr>";
            });
            $("#recodtext1").hide();
            $("#recodtext2").hide();
            $("#recodtext4").hide();
            $("#recodtext3").html(ss);
            $("#recodtext3").show();
            // $("#pages1").hide();
            // $("#pages2").html(p1);
            // $("#pages2").show();

        },'json');

    }


</script>
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