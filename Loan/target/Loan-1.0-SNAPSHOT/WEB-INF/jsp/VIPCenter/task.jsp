<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
    <title>会员任务—中兴财富在线</title>
    <meta name="keywords" content="中兴财富在线,安稳投,散标,互联网金融平台,互联网金融">
    <meta name="description" content="中兴财富在线是中国线上智能金融服务平台,为出借人提供优享牛、散标等出借项目.签署银行资金存管协议,资金做到流转透明,互联网金融服务,首选中兴财富在线！">
    <%--<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">--%>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="shortcut icon" href="https://image.xiaoniu88.com/static/WebXn/dist/images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/jsp/VIPCenter/files/base-56e256b865.css">
    <script charset="utf-8" src="/jsp/VIPCenter/files/v.js"></script><script src="/jsp/VIPCenter/files/hm.js"></script><script async="" src="/jsp/VIPCenter/files/analytics.js"></script><script type="text/javascript" src="/jsp/VIPCenter/files/base-6100562494.js"></script>
    <script>
        window.global = {
            cdn: "//image.xiaoniu88.com",
            siteroot: "http://www.xiaoniu88.com",
            staticPath: "//image.xiaoniu88.com/static/WebXn/dist",
            contextPath: "/user",
            serverTime: "1555893695819"*1,
            userId: "",
            isLogin: false
        }
    </script>
    <script type="text/javascript" src="/jsp/VIPCenter/files/common-83987ed24e.js"></script>
    <script>
        // $(function(){
        //     seajs.use('module/common/common')
        // })
    </script>
    <link rel="stylesheet" href="/jsp/VIPCenter/files/style-e8c14b2126.css">
    <style type="text/css">#YSF-BTN-HOLDER{position: fixed;max-width:30px;max-height:120px;right: 30px; bottom: 24px; cursor: pointer; overflow: visible; filter: alpha(opacity=100);opacity:1;z-index: 9990} #YSF-BTN-HOLDER:hover{filter: alpha(opacity=95);opacity:.95} #YSF-BTN-HOLDER img{ display: block;overflow: hidden; } #YSF-BTN-CIRCLE{display: none;position: absolute;right: -5px;top: -6px;width: auto;min-width: 12px;height: 20px;padding: 0 4px;background-color: #f00;font-size: 12px;line-height: 20px;color: #fff;text-align: center;white-space: nowrap;font-family: sans-serif;border-radius: 10px;z-index:1;} #YSF-BTN-BUBBLE{display: none;position: absolute;left: -274px;bottom:-15px;width: 278px;height: 80px;box-sizing: border-box;padding: 14px 22px;filter: alpha(opacity=100);opacity:1;background: url(https://qiyukf.com/sdk//res/img/sdk/bg_floatMsg2x.png) no-repeat;background:url(https://qiyukf.com/sdk//res/img/sdk/bg_floatMsg.png)9; background-size: 278px 80px; z-index: 1;} #YSF-BTN-HOLDER.layer-6{bottom:0;} #YSF-BTN-HOLDER.layer-1 #YSF-BTN-BUBBLE{top:0} #YSF-BTN-HOLDER.layer-6 #YSF-BTN-BUBBLE{bottom:-6px;} #YSF-BTN-BUBBLE:hover{filter: alpha(opacity=95);opacity:.95} #YSF-BTN-CONTENT{height:45px;padding: 0;white-space: normal;word-break: break-all;text-align: left;font-size: 14px;line-height: 1.6;color: #222;overflow: hidden;z-index: 0;} #YSF-BTN-ARROW{ display: none; } #YSF-BTN-CLOSE{position: absolute; width:15px; height:15px;right: 4px;top: -3px; filter: alpha(opacity=90); opacity:.9; cursor: pointer; background: url(https://qiyukf.com/sdk//res/img/sdk/btn-close.png) no-repeat;z-index: 1} #YSF-BTN-CLOSE:hover{filter: alpha(opacity=100); opacity: 1;} #YSF-PANEL-CORPINFO.ysf-chat-layeropen{ width: 511px; height: 470px; box-shadow: 0 0 20px 0 rgba(0, 0, 0, .15);} #YSF-PANEL-CORPINFO{ position: fixed; bottom: 0px; right: 20px; width: 0; height: 0; z-index: 99999; } #YSF-PANEL-INFO.ysf-chat-layeropen{ width: 311px; height: 470px; filter: alpha(opacity=100);opacity:1; box-shadow: 0 0 20px 0 rgba(0, 0, 0, .15);} #YSF-PANEL-INFO{ position: fixed; bottom: 0px; right: 20px; width: 0px; height: 0px; filter: alpha(opacity=0);opacity:0;z-index: 99999;} #YSF-PANEL-INFO .u-btn{background-color: #F96868} #YSF-CUSTOM-ENTRY{background-color: #F96868;} #YSF-CUSTOM-ENTRY-0{position: relative;width:auto;background-color: #F96868;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);} #YSF-CUSTOM-ENTRY-1{position: relative;width:auto;background-color: #F96868;border-radius: 14px; box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);} #YSF-CUSTOM-ENTRY-2{position: relative;width:auto;background-color: #F96868;border-radius: 0;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);} #YSF-CUSTOM-ENTRY-3{position: relative;width:auto;background-color: #F96868;border-radius: 50%;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);} #YSF-CUSTOM-ENTRY-4{position: relative;width:auto;background-color: #F96868;border-radius: 50%;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);} #YSF-CUSTOM-ENTRY-5{position: relative;width:auto;background-color: #F96868;border-radius: 5px;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);} #YSF-CUSTOM-ENTRY-6{position: relative;width:auto;background-color: #F96868;border-radius:5px;border-bottom-left-radius: 0;border-bottom-right-radius: 0;} #YSF-CUSTOM-ENTRY-0 img{max-width: 300px;height:auto;} #YSF-CUSTOM-ENTRY-1 img{width:28px;height:auto;} #YSF-CUSTOM-ENTRY-2 img{width:58px;height:auto;} #YSF-CUSTOM-ENTRY-3 img{width:60px;height:auto;} #YSF-CUSTOM-ENTRY-4 img{width:60px;height:auto;} #YSF-CUSTOM-ENTRY-5 img{width:60px;height:auto;} #YSF-CUSTOM-ENTRY-6 img{width:115px;height:auto;} #YSF-IFRAME-LAYER{ border:0; outline:none; } .ysf-online-invite-wrap{z-index:10001;position:fixed;_position:absolute;top:50%;left:50%;} .ysf-online-invite{position:relative;top:-50%;left:-50%;cursor:pointer;} .ysf-online-invite img{display:block;width:250px;} .ysf-online-invite .ysf-online-invite-img{width:100%;height:100%} .ysf-online-invite .text{position:absolute;top:-11px;left:0;right:0;overflow:hidden;margin: 36px 20px 0 67px;line-height:140%;color:#526069;font-size:14px;font-family:"Microsoft YaHei","微软雅黑",tahoma,arial,simsun,"宋体";text-align:left;white-space:normal;word-wrap:break-word;} .ysf-online-invite .close{position:absolute;top:-6px;right:-6px;width:32px;height:32px;background:url(https://qiyukf.com/sdk/res/img/invite-close.png) no-repeat;cursor:pointer;} .ysf-online-invite .close.custom{top:-16px;right:-16px;} #YSF-PANEL-MOBILE{ background: rgba(46,47,49,0.7); position: fixed; bottom: 0px; right: 0px; width: 100%; height: 0px; transition-property: height,bottom; transition-duration: 0.3s; transition-timing-function: ease; transition-delay: 0s; z-index: 9999; } #YSF-PANEL-MOBILE.ysf-chat-layeropen{ width: 100%; height: 100%; transition-property:height,bottom; transition-duration: 0.3s; transition-timing-function: ease; transition-delay: 0s; } #YSF-IFRAME-LAYER.ysf-chat-mobile-layeropen{ height: 90% !important; transition-property: height,bottom; transition-duration: 0.3s; transition-timing-function: ease; transition-delay: 0s; } #YSF-IFRAME-LAYER{ position: absolute; bottom: 0px;left: 0; right: 0px; width: 0px; height: 0px; transition-property: height,bottom; transition-duration: 0.3s; transition-timing-function: ease; transition-delay: 0s; z-index: 9999; } .YSF-PANEL-BODY-FIXED{ position: fixed !important; left: 0; right: 0;}</style></head>
<body class="member-body" style="">
<jsp:include page="/WEB-INF/jsp/common/resources.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top2.jsp"></jsp:include>
<div class="" style="left: 0px; top: 0px; visibility: hidden; position: absolute;"><table class="ui_border"><tbody><tr><td class="ui_lt"></td><td class="ui_t"></td><td class="ui_rt"></td></tr><tr><td class="ui_l"></td><td class="ui_c"><div class="ui_inner"><table class="ui_dialog"><tbody><tr><td colspan="2"><div class="ui_title_bar"><div class="ui_title" unselectable="on" style="cursor: move;"></div><div class="ui_title_buttons"><a class="ui_min" href="javascript:void(0);" title="最小化" style="display: inline-block;"><b class="ui_min_b"></b></a><a class="ui_max" href="javascript:void(0);" title="最大化" style="display: inline-block;"><b class="ui_max_b"></b></a><a class="ui_res" href="javascript:void(0);" title="还原"><b class="ui_res_b"></b><b class="ui_res_t"></b></a><a class="ui_close" href="javascript:void(0);" title="关闭(esc键)" style="display: inline-block;">×</a></div></div></td></tr><tr><td class="ui_icon" style="display: none;"></td><td class="ui_main" style="width: auto; height: auto;"><div class="ui_content" style="padding: 10px;"></div></td></tr><tr><td colspan="2"><div class="ui_buttons" style="display: none;"></div></td></tr></tbody></table></div></td><td class="ui_r"></td></tr><tr><td class="ui_lb"></td><td class="ui_b"></td><td class="ui_rb" style="cursor: se-resize;"></td></tr></tbody></table></div>
<div class="member-head">
    <!--[if lt IE 9]>
    <script src="//image.xiaoniu88.com/static/WebXn/dist/lib/html5/html5-083d84e804.js"></script >
    <![endif]-->
    <input value="false" type="hidden" id="isLogin">
    <div class="affiche" id="afficheModel">
<span>中兴财富在线提醒您：为了更流畅的访问本网站，建议您使用IE9.0及以上版本浏览器或360浏览器。
	<a class="link" href="http://se.360.cn/" target="_blank" rel="nofollow">点击进入360官网下载&gt;&gt;</a>
</span>
        <i class="icon-common icon-common-close"></i>
    </div>
</div>
<!--会员体系导航-->
<div class="member-nav">
    <div class="container">
        <%--<div class="logo">--%>
            <%--<a class="to-home" href="https://www.xiaoniu88.com/"></a>--%>
            <%--<a class="to-member" href="https://www.xiaoniu88.com/user/member/index"></a>--%>
        <%--</div>--%>
        <ul class="nav-list" id="member-nav-list">
            <li data-type="index" ><a href="/vip/vip" onclick="_hmt.push([&#39;_trackEvent&#39;, &#39;会员首页&#39;, &#39;click&#39;]);">会员首页</a></li>
            <li data-type="level" ><a href="/vip/level" onclick="_hmt.push([&#39;_trackEvent&#39;, &#39;会员等级选项卡&#39;, &#39;click&#39;]);">会员等级</a></li>
            <li data-type="benefits" ><a href="/vip/benefit" onclick="_hmt.push([&#39;_trackEvent&#39;, &#39;会员权益选项卡&#39;, &#39;click&#39;]);">会员权益</a></li>
            <li data-type="task" class="cur" class="last"><a href="/vip/task" onclick="_hmt.push([&#39;_trackEvent&#39;, &#39;成长任务&#39;, &#39;click&#39;]);">成长任务</a></li>
        </ul>
    </div>
</div>
<input type="hidden" value="task" id="memberMenuCur">
<div class="path">您现在的位置：<a href="https://www.xiaoniu88.com/">首页</a> &gt; <span id="path-name">成长任务</span></div>
<div class="member-container my-task">
    <ul class="my-task-tab" id="my-task-tab">
        <li onclick="task();" class="cur" id="task">成长任务</li>
        <li onclick="growth();" id="growth">成长经历</li>
    </ul>
    <div class="clear"></div>
    <div id="tasklist" class="my-task-tab-content task-content" style="display: block;">
        <div class="task-sec01">
            <h2 class="member-title">新手任务<span>成长值+50点</span></h2>
            <ul class="task-list">
                <li >
                    <span>绑定手机</span><i>成长值：+10点</i>
                    <c:choose>
                    <c:when test="${task.bindPhone==1}">
                        <a href="javascript:" class="done"></a>
                    </c:when>
                    <c:otherwise>
                        <a href="/account/tosecur" class="undone" target="_blank" onclick="_hmt.push([&#39;_trackEvent&#39;, &#39;成长任务-新手任务-任务一-去完成&#39;, &#39;click&#39;]);">去完成</a>
                    </c:otherwise>
                    </c:choose>
                </li>
                <li>
                    <span>实名认证</span><i>成长值：+10点</i>
                    <c:choose>
                        <c:when test="${task.authentication==1}">
                            <a href="javascript:" class="done"></a>
                        </c:when>
                        <c:otherwise>
                            <a href="/account/toapp" class="undone" target="_blank" onclick="_hmt.push([&#39;_trackEvent&#39;, &#39;成长任务-新手任务-任务一-去完成&#39;, &#39;click&#39;]);">去完成</a>
                        </c:otherwise>
                    </c:choose>
                </li>
                <li>
                    <span>绑定银行卡</span><i>成长值：+10点</i>
                    <c:choose>
                        <c:when test="${task.bindBankCard==1}">
                            <a href="javascript:" class="done"></a>
                        </c:when>
                        <c:otherwise>
                            <a href="/account/toapp" class="undone" target="_blank" onclick="_hmt.push([&#39;_trackEvent&#39;, &#39;成长任务-新手任务-任务一-去完成&#39;, &#39;click&#39;]);">去完成</a>
                        </c:otherwise>
                    </c:choose>
                </li>
                <li>
                    <span>首次充值≥100元</span><i>成长值：+20点</i>
                    <c:choose>
                        <c:when test="${task.firstRecharge1h==1}">
                            <a href="javascript:" class="done"></a>
                        </c:when>
                        <c:otherwise>
                            <a href="/invest/toinvest" class="undone" target="_blank" onclick="_hmt.push([&#39;_trackEvent&#39;, &#39;成长任务-新手任务-任务一-去完成&#39;, &#39;click&#39;]);">去完成</a>
                        </c:otherwise>
                    </c:choose>
                </li>
            </ul>
            <h2 class="member-title">进阶任务<span>成长值＋50点</span></h2>
            <ul class="task-list">
                <li class="l-t2">
                    <span>首次投标任意产品</span>
                    <em> </em>
                    <i>成长值：+15点</i>
                    <c:choose>
                        <c:when test="${task.firstBid==1}">
                            <a href="javascript:" class="done"></a>
                        </c:when>
                        <c:otherwise>
                            <a href="/invest/toinvest" class="undone" target="_blank" onclick="_hmt.push([&#39;_trackEvent&#39;, &#39;成长任务-新手任务-任务一-去完成&#39;, &#39;click&#39;]);">去完成</a>
                        </c:otherwise>
                    </c:choose>
                </li>
                <li class="l-t2">
                    <span>首次单笔投标以下任意产品≥3000</span>
                    <em> </em>
                    <i>成长值：+15点</i>
                    <c:choose>
                        <c:when test="${task.firstBid3t==1}">
                            <a href="javascript:" class="done"></a>
                        </c:when>
                        <c:otherwise>
                            <a href="/invest/toinvest" class="undone" target="_blank" onclick="_hmt.push([&#39;_trackEvent&#39;, &#39;成长任务-新手任务-任务一-去完成&#39;, &#39;click&#39;]);">去完成</a>
                        </c:otherwise>
                    </c:choose>
                </li>
            </ul>
            <h2 class="member-title">投标任务<span>成长值＋无限点</span></h2>
            <ul class="task-list">
                <li class="l-t2">
                    <span>每月首笔投标以下任意产品≥5000元</span>
                    <i>成长值：+60点</i>
                    <c:choose>
                        <c:when test="${task.firstMonthBid5t==1}">
                            <a href="javascript:" class="done"></a>
                        </c:when>
                        <c:otherwise>
                            <a href="/invest/toinvest" class="undone" target="_blank" onclick="_hmt.push([&#39;_trackEvent&#39;, &#39;成长任务-新手任务-任务一-去完成&#39;, &#39;click&#39;]);">去完成</a>
                        </c:otherwise>
                    </c:choose>
                </li>
                <li class="l-t2">
                    <span>每月首笔投标以下任意产品≥10000元</span>
                    <i>成长值：+120点</i>
                    <c:choose>
                        <c:when test="${task.firstMonthBid10t==1}">
                            <a href="javascript:" class="done"></a>
                        </c:when>
                        <c:otherwise>
                            <a href="/invest/toinvest" class="undone" target="_blank" onclick="_hmt.push([&#39;_trackEvent&#39;, &#39;成长任务-新手任务-任务一-去完成&#39;, &#39;click&#39;]);">去完成</a>
                        </c:otherwise>
                    </c:choose>
                </li>
                <li class="l-t2">
                    <span>每月首笔投标以下任意产品≥30000元</span>
                    <i>成长值：+400点</i>
                    <c:choose>
                        <c:when test="${task.firstMonthBid30t==1}">
                            <a href="javascript:" class="done"></a>
                        </c:when>
                        <c:otherwise>
                            <a href="/invest/toinvest" class="undone" target="_blank" onclick="_hmt.push([&#39;_trackEvent&#39;, &#39;成长任务-新手任务-任务一-去完成&#39;, &#39;click&#39;]);">去完成</a>
                        </c:otherwise>
                    </c:choose>
                </li>
                <li class="l-t2">
                    <span>每月首笔投标以下任意产品≥50000元</span>
                    <i>成长值：+600点</i>
                    <c:choose>
                        <c:when test="${task.firstMonthBid50t==1}">
                            <a href="javascript:" class="done"></a>
                        </c:when>
                        <c:otherwise>
                            <a href="/invest/toinvest" class="undone" target="_blank" onclick="_hmt.push([&#39;_trackEvent&#39;, &#39;成长任务-新手任务-任务一-去完成&#39;, &#39;click&#39;]);">去完成</a>
                        </c:otherwise>
                    </c:choose>
                </li>
                <li class="l-t2">
                    <span>任意一笔投标金额</span><i>成长值：+1点以上</i>
                    <a href="/invest/toinvest" class="undone" target="_blank" onclick="_hmt.push([&#39;_trackEvent&#39;, &#39;成长任务-投标任务-任务五-去完成&#39;, &#39;click&#39;]);">去完成</a>
                </li>
            </ul>
            <h2 class="member-title">推荐任务<span>成长值＋20点以上</span></h2>
            <ul class="task-list">
                <li class="l-t">
                    <span>每推荐一位注册并投标用户</span><i>成长值：+20点</i>
                    <a href="/invest/toinvest" class="undone" target="_blank" onclick="_hmt.push([&#39;_trackEvent&#39;, &#39;成长任务-推荐任务-任务一-去完成&#39;, &#39;click&#39;]);">去完成</a>
                </li>
            </ul>
        </div>
    </div>

    <div id="growthlist" class="my-task-tab-content experience-content" style="display: none;">
        <c:choose>
            <c:when test="${user!=null}">
                <%--已登录--%>
                <div class="search-bar">
                    <%--<input id="start-time" type="text" class="search-time" readonly="" onclick="laydate({elem:&#39;#start-time&#39;,istime: true,format: &#39;YYYY-MM-DD hh:mm:ss&#39;});">--%>
                    <%--<span class="split"></span>--%>
                    <%--<input id="end-time" type="text" class="search-time" readonly="" onclick="laydate({elem:&#39;#end-time&#39;,istime: true,format: &#39;YYYY-MM-DD hh:mm:ss&#39;});">--%>
                    <%--<a class="srh-btn" id="srh_btn" href="javascript:" onclick="_hmt.push([&#39;_trackEvent&#39;, &#39;成长任务-成长经历-查询&#39;, &#39;click&#39;]);">查询</a>--%>
                    <span class="growth-value" style="float: left;">当前成长值总额：${user.growthValue}点</span>
                </div>
                <div class="search-content">
                    <table id="my-experience-table">
                        <colgroup><col width="20%"><col width="48%"><col width="30%"></colgroup>
                        <thead>
                        <tr><th>时间</th><th>类型</th><th>成长值</th></tr>
                        </thead>
                        <tbody id="content" class="experienceTbody">
                        </tbody>
                    </table>
                    <div class="pages">
                        <div class="page">第<i class="pg" id="currpage">1</i>页/共<i id="totalpage" class="cal">2</i>页
                            <a   href="javascript:void(0);" page="-1" id="first" onclick="choosePage(this);">首页</a><a onclick="choosePage(this);"   id="last" page="-1" href="javascript:void(0);">上一页</a>
                            <select onchange="choosePage(this);"  id="selpage">
                            </select>
                            <a   onclick="choosePage(this);" id="next" href="javascript:void(0)" page="-1">下一页</a><a onclick="choosePage(this);" page="-1"  id="end" href="javascript:void(0)">末页</a></div>
                        <%--<input type="hidden" id="pageCal" value="16">--%>
                    </div>
                    <%--<input type="hidden" id="url" data-img="//image.xiaoniu88.com/static/WebXn/dist">--%>
                </div>
            </c:when>
            <c:otherwise>
                <%--未登录--%>
                <div class="task-not-login">
                    <p><a href="/account/tologin" onclick="_hmt.push([&#39;_trackEvent&#39;, &#39;成长任务-成长经历-登录&#39;, &#39;click&#39;]);">登录</a>查看我的成长经历</p>
                </div>
            </c:otherwise>
        </c:choose>
    </div>
</div>
<script src="/jsp/VIPCenter/files/task-bdf11da116.js"></script>
<script>
</script>
<script src="/js/jquery-1.7.2.min.js"></script>
<script type="text/javascript">
    function growth(){
        var tbody =$("#content");
        $("#task").attr("class","");
        $("#growth").attr("class","cur");
        $("#tasklist").css("display","none");
        $("#growthlist").css("display","block");
        if("${user}"!=""){
            if(tbody.html().trim()==""){
                getGrowth();
            }
        }
    }
    function task(){
        $("#task").attr("class","cur");
        $("#growth").attr("class","");
        $("#tasklist").css("display","block");
        $("#growthlist").css("display","none");
    }
    function getGrowth(){
        $.ajax({
            type:"post",
            url:"/vip/task/growth/list/1", //访问的链接
            // dataType:"jsonp",  //数据格式设置为jsonp
            // jsonp:"callback",  //Jquery生成验证参数的名称
            success:function(data){  //成功的回调函数
                var list=data.list;
                var tbody=$("#content");
                if(list.length==0){
                    tbody.append("<tr><td colspan='3'>暂无记录</td></tr>");
                    return;
                }
                for(var i=0;i<list.length;i++){
                    var str="<tr><td>"+list[i].time+"</td>" +
                                "<td>"+list[i].type+"</td>" +
                                "<td>"+list[i].value+"</td></tr>";
                    tbody.append(str);
                }
                var totalpage=data.totalpage;
                var selpage=$("#selpage");
                $("#currpage").text(data.currpage);
                $("#totalpage").text(data.totalpage);
                for(var i=0;i<totalpage;i++){
                    var str="<option value='"+(i+1)+"'>"+(i+1)+"</option>"
                    selpage.append(str);
                }
                $("#first").attr("page",1);
                $("#last").attr("page",data.currpage-1);
                $("#next").attr("page",data.currpage+1);
                $("#end").attr("page",data.totalpage);
            },
            error: function (e) {
                alert("error");
            }
        });
    }
    function choosePage(e){
        var id=$(e).attr("id");
        var page;
        if(id=="selpage"){
            page=$(e).val();
        }else{
            page=$(e).attr("page");
        }
        $.ajax({
            type:"post",
            url:"/vip/task/growth/list/"+page, //访问的链接
            success:function(data){  //成功的回调函数
                var list=data.list;
                var tbody=$("#content");
                var selpage=$("#selpage");
                $("#currpage").text(data.currpage);
                $("#totalpage").text(data.totalpage);
                tbody.empty();
                for(var i=0;i<list.length;i++){
                    var str="<tr><td>"+list[i].time+"</td>" +
                        "<td>"+list[i].type+"</td>" +
                        "<td>"+list[i].value+"</td></tr>"
                    tbody.append(str);
                }
                selpage.val(data.currpage);
                $("#first").attr("page",1);
                $("#last").attr("page",data.currpage-1);
                $("#next").attr("page",data.currpage+1);
                $("#end").attr("page",data.totalpage);
            },
            error: function (e) {
                alert("error");
            }
        });
    }
</script>
<script src="/js/zdzjs/product/build.js"></script>
<script async="" src="/jsp/VIPCenter/files/bbf1f358fbe2baf496d7d57ff885bbd8.js"></script><div id="ly-side-bar" style="left: 94.4774%; bottom: 0px; margin-bottom: 120px;" class="ly-side-bar side-bar-xn"><a href="javascript:;" class="side-bar-app"><div class="side-bar-pop"><div class="side-bar-pop-content"></div></div></a><a href="javascript:;" class="side-bar-interest"><div class="side-bar-pop"><div class="side-bar-pop-content"></div></div></a><a href="javascript:;" class="side-bar-kefu" data-callback="kefu" style="" id="qiyukefu"></a><a href="javascript:;" class="side-bar-calculator" data-callback="calculator"></a><a href="javascript:;" class="side-bar-wenjuan" data-callback="wenjuan"></a><a href="javascript:;" class="side-bar-top" data-callback="top"></a></div><div style="top: 0px; left: 0px; visibility: hidden; position: absolute; width: 1px; height: 1px;"><iframe style="height:0px; width:0px;" src="/jsp/VIPCenter/files/delegate.html"></iframe></div><div class="layer-1" id="YSF-BTN-HOLDER" style="display: none;"><div id="YSF-CUSTOM-ENTRY-1"><img src="/jsp/VIPCenter/files/1.png"></div><span id="YSF-BTN-CIRCLE"></span><div id="YSF-BTN-BUBBLE"><div id="YSF-BTN-CONTENT"></div><span id="YSF-BTN-ARROW"></span><span id="YSF-BTN-CLOSE"></span></div></div><div id="__nightingale_view_cover" style="width: 100%; height: 100%; transition: -webkit-transform 10s ease-in-out; position: fixed !important; left: 0px !important; bottom: 0px !important; overflow: hidden !important; background: rgb(0, 0, 0) !important; pointer-events: none !important; z-index: 2147483647; opacity: 0;"></div>
</body>
<jsp:include page="/WEB-INF/jsp/common/bottom.jsp"></jsp:include>
</html>