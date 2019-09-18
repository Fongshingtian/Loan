<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>商品详情_中兴财富在线官网</title>
    <meta name="keywords" content="中兴财富在线积分商城">
    <meta name="description" content="中兴财富在线积分商城服务于所有中兴财富在线客户,中兴财富在线会员可通过各种方式获取积分,通过登录个人账户查询积分获取情况并使用积分兑换礼物.">
    <%--<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">--%>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="shortcut icon" href="https://image.xiaoniu88.com/static/WebXn/dist/images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/jsp/VIPCenter/files/base-56e256b865.css">
    <script charset="utf-8" src="/jsp/VIPCenter/files/v.js"></script><script src="/jsp/VIPCenter/files/hm.js"></script><script async="" src="/jsp/VIPCenter/files/analytics.js"></script><script type="text/javascript" src="/jsp/VIPCenter/files/base-6100562494.js"></script>
    <script>
        window.global = {
            cdn: "//image.xiaoniu88.com",
            siteroot: "https://www.xiaoniu88.com",
            staticPath: "//image.xiaoniu88.com/static/WebXn/dist",
            contextPath: "/activity",
            serverTime: "1555977698512"*1,
            userId: "",
            isLogin: false
        }
    </script>
    <script type="text/javascript" src="/jsp/VIPCenter/files/common-83987ed24e.js"></script>
    <script>
        $(function(){
            seajs.use('module/common/common')
        })
    </script>
    <link rel="stylesheet" href="/jsp/VIPCenter/files/style-5b17b4783f.css">
    <style type="text/css">#YSF-BTN-HOLDER{position: fixed;max-width:30px;max-height:120px;right: 30px; bottom: 24px; cursor: pointer; overflow: visible; filter: alpha(opacity=100);opacity:1;z-index: 9990} #YSF-BTN-HOLDER:hover{filter: alpha(opacity=95);opacity:.95} #YSF-BTN-HOLDER img{ display: block;overflow: hidden; } #YSF-BTN-CIRCLE{display: none;position: absolute;right: -5px;top: -6px;width: auto;min-width: 12px;height: 20px;padding: 0 4px;background-color: #f00;font-size: 12px;line-height: 20px;color: #fff;text-align: center;white-space: nowrap;font-family: sans-serif;border-radius: 10px;z-index:1;} #YSF-BTN-BUBBLE{display: none;position: absolute;left: -274px;bottom:-15px;width: 278px;height: 80px;box-sizing: border-box;padding: 14px 22px;filter: alpha(opacity=100);opacity:1;background: url(https://qiyukf.com/sdk//res/img/sdk/bg_floatMsg2x.png) no-repeat;background:url(https://qiyukf.com/sdk//res/img/sdk/bg_floatMsg.png)9; background-size: 278px 80px; z-index: 1;} #YSF-BTN-HOLDER.layer-6{bottom:0;} #YSF-BTN-HOLDER.layer-1 #YSF-BTN-BUBBLE{top:0} #YSF-BTN-HOLDER.layer-6 #YSF-BTN-BUBBLE{bottom:-6px;} #YSF-BTN-BUBBLE:hover{filter: alpha(opacity=95);opacity:.95} #YSF-BTN-CONTENT{height:45px;padding: 0;white-space: normal;word-break: break-all;text-align: left;font-size: 14px;line-height: 1.6;color: #222;overflow: hidden;z-index: 0;} #YSF-BTN-ARROW{ display: none; } #YSF-BTN-CLOSE{position: absolute; width:15px; height:15px;right: 4px;top: -3px; filter: alpha(opacity=90); opacity:.9; cursor: pointer; background: url(https://qiyukf.com/sdk//res/img/sdk/btn-close.png) no-repeat;z-index: 1} #YSF-BTN-CLOSE:hover{filter: alpha(opacity=100); opacity: 1;} #YSF-PANEL-CORPINFO.ysf-chat-layeropen{ width: 511px; height: 470px; box-shadow: 0 0 20px 0 rgba(0, 0, 0, .15);} #YSF-PANEL-CORPINFO{ position: fixed; bottom: 0px; right: 20px; width: 0; height: 0; z-index: 99999; } #YSF-PANEL-INFO.ysf-chat-layeropen{ width: 311px; height: 470px; filter: alpha(opacity=100);opacity:1; box-shadow: 0 0 20px 0 rgba(0, 0, 0, .15);} #YSF-PANEL-INFO{ position: fixed; bottom: 0px; right: 20px; width: 0px; height: 0px; filter: alpha(opacity=0);opacity:0;z-index: 99999;} #YSF-PANEL-INFO .u-btn{background-color: #F96868} #YSF-CUSTOM-ENTRY{background-color: #F96868;} #YSF-CUSTOM-ENTRY-0{position: relative;width:auto;background-color: #F96868;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);} #YSF-CUSTOM-ENTRY-1{position: relative;width:auto;background-color: #F96868;border-radius: 14px; box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);} #YSF-CUSTOM-ENTRY-2{position: relative;width:auto;background-color: #F96868;border-radius: 0;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);} #YSF-CUSTOM-ENTRY-3{position: relative;width:auto;background-color: #F96868;border-radius: 50%;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);} #YSF-CUSTOM-ENTRY-4{position: relative;width:auto;background-color: #F96868;border-radius: 50%;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);} #YSF-CUSTOM-ENTRY-5{position: relative;width:auto;background-color: #F96868;border-radius: 5px;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);} #YSF-CUSTOM-ENTRY-6{position: relative;width:auto;background-color: #F96868;border-radius:5px;border-bottom-left-radius: 0;border-bottom-right-radius: 0;} #YSF-CUSTOM-ENTRY-0 img{max-width: 300px;height:auto;} #YSF-CUSTOM-ENTRY-1 img{width:28px;height:auto;} #YSF-CUSTOM-ENTRY-2 img{width:58px;height:auto;} #YSF-CUSTOM-ENTRY-3 img{width:60px;height:auto;} #YSF-CUSTOM-ENTRY-4 img{width:60px;height:auto;} #YSF-CUSTOM-ENTRY-5 img{width:60px;height:auto;} #YSF-CUSTOM-ENTRY-6 img{width:115px;height:auto;} #YSF-IFRAME-LAYER{ border:0; outline:none; } .ysf-online-invite-wrap{z-index:10001;position:fixed;_position:absolute;top:50%;left:50%;} .ysf-online-invite{position:relative;top:-50%;left:-50%;cursor:pointer;} .ysf-online-invite img{display:block;width:250px;} .ysf-online-invite .ysf-online-invite-img{width:100%;height:100%} .ysf-online-invite .text{position:absolute;top:-11px;left:0;right:0;overflow:hidden;margin: 36px 20px 0 67px;line-height:140%;color:#526069;font-size:14px;font-family:"Microsoft YaHei","微软雅黑",tahoma,arial,simsun,"宋体";text-align:left;white-space:normal;word-wrap:break-word;} .ysf-online-invite .close{position:absolute;top:-6px;right:-6px;width:32px;height:32px;background:url(https://qiyukf.com/sdk/res/img/invite-close.png) no-repeat;cursor:pointer;} .ysf-online-invite .close.custom{top:-16px;right:-16px;} #YSF-PANEL-MOBILE{ background: rgba(46,47,49,0.7); position: fixed; bottom: 0px; right: 0px; width: 100%; height: 0px; transition-property: height,bottom; transition-duration: 0.3s; transition-timing-function: ease; transition-delay: 0s; z-index: 9999; } #YSF-PANEL-MOBILE.ysf-chat-layeropen{ width: 100%; height: 100%; transition-property:height,bottom; transition-duration: 0.3s; transition-timing-function: ease; transition-delay: 0s; } #YSF-IFRAME-LAYER.ysf-chat-mobile-layeropen{ height: 90% !important; transition-property: height,bottom; transition-duration: 0.3s; transition-timing-function: ease; transition-delay: 0s; } #YSF-IFRAME-LAYER{ position: absolute; bottom: 0px;left: 0; right: 0px; width: 0px; height: 0px; transition-property: height,bottom; transition-duration: 0.3s; transition-timing-function: ease; transition-delay: 0s; z-index: 9999; } .YSF-PANEL-BODY-FIXED{ position: fixed !important; left: 0; right: 0;}</style></head>
<body style="">
<jsp:include page="/WEB-INF/jsp/common/resources.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top2.jsp"></jsp:include>
<div class="" style="left: 0px; top: 0px; visibility: hidden; position: absolute;"><table class="ui_border"><tbody><tr><td class="ui_lt"></td><td class="ui_t"></td><td class="ui_rt"></td></tr><tr><td class="ui_l"></td><td class="ui_c"><div class="ui_inner"><table class="ui_dialog"><tbody><tr><td colspan="2"><div class="ui_title_bar"><div class="ui_title" unselectable="on" style="cursor: move;"></div><div class="ui_title_buttons"><a class="ui_min" href="javascript:void(0);" title="最小化" style="display: inline-block;"><b class="ui_min_b"></b></a><a class="ui_max" href="javascript:void(0);" title="最大化" style="display: inline-block;"><b class="ui_max_b"></b></a><a class="ui_res" href="javascript:void(0);" title="还原"><b class="ui_res_b"></b><b class="ui_res_t"></b></a><a class="ui_close" href="javascript:void(0);" title="关闭(esc键)" style="display: inline-block;">×</a></div></div></td></tr><tr><td class="ui_icon" style="display: none;"></td><td class="ui_main" style="width: auto; height: auto;"><div class="ui_content" style="padding: 10px;"></div></td></tr><tr><td colspan="2"><div class="ui_buttons" style="display: none;"></div></td></tr></tbody></table></div></td><td class="ui_r"></td></tr><tr><td class="ui_lb"></td><td class="ui_b"></td><td class="ui_rb" style="cursor: se-resize;"></td></tr></tbody></table></div>
<!--[if lt IE 9]>
<script src="//image.xiaoniu88.com/static/WebXn/dist/lib/html5/html5-083d84e804.js"></script >
<![endif]-->
<input value="false" type="hidden" id="isLogin">
<div class="affiche" id="afficheModel">
<span>在线提醒您：为了更流畅的访问本网站，建议您使用IE9.0及以上版本浏览器或360浏览器。
	<a class="link" href="http://se.360.cn/" target="_blank" rel="nofollow">点击进入360官网下载&gt;&gt;</a>
</span>
    <i class="icon-common icon-common-close"></i>
</div>
<script>
    (function () {
        var currentMenu = '_menu_'+ document.getElementById('_point_current_menu').value;
        var _menu_ele = document.getElementById(currentMenu);
        _menu_ele.className = _menu_ele.className + 'cur';
    })();
</script>
<div class="content">
    <div class="breadcrumb">
        <div class="section" id="breadcrumb">
            您现在的位置：<a href="/t2/test">首页</a> &gt; <a href="/vip/point/mall/1">积分商城</a> &gt;
            ${mall.name}
        </div>
    </div>
    <div class="detailContainer" id="detailContainer">
        <div class="prd-box g-cf section">
            <div class="prd-photo">
                <img src="${pageContext.request.contextPath}/upload/${mall.image}" width="400" height="400" border="0">
                <label class="label">热门</label>
            </div>
            <div class="prd-trade">
                    <h1>${mall.name}</h1>
                    <p class="prd-price">所需积分：${mall.point}</p>
                    <p>可用积分：
                        <c:choose>
                            <c:when test="${user==null}">
                                --
                            </c:when>
                            <c:otherwise>
                                ${user.point}
                            </c:otherwise>
                        </c:choose>
                    </p>  <p>库存：${mall.stock} </p>
                    <p>限兑：每人每天限兑${mall.limit}件</p>
                    <p class="opt-box">
                        <span class="g-fl">选择数量：</span>
                        <a href="javascript:;" name="minus" class="js_minus opt-btn">-</a>
                        <input type="text" id="exchangeNum" class="count" name="count" value="1">
                        <a href="javascript:;" name="plus" class="js_plus opt-btn">+</a> </p>
                    <c:choose>
                        <c:when test="${user==null}">
                            <input type="button" onclick="window.location.href='/account/tologin'" class="buynow" value="登录兑换">
                        </c:when>
                        <c:when test="${limiting==0}">
                            <input type="button" class="buynow disabled" disabled="disabled" class="buynow" value="限制数量">
                        </c:when>
                        <c:otherwise>
                            <c:choose>
                                <c:when test="${user.point>=mall.point}">
                                    <input type="button" onclick="window.location.href='/vip/point/mall/exchange/${mall.id}'" class="buynow" value="马上兑换">
                                </c:when>
                                <c:otherwise>
                                    <input type="button" class="buynow disabled" disabled="disabled" value="马上兑换">
                                </c:otherwise>
                            </c:choose>
                        </c:otherwise>
                    </c:choose>
            </div>
        </div>
        <div class="prd-introduce">
            <div class="section">
                <div class="introduce-title">
                    <h2>商品介绍</h2>
                </div>
                <div style="text-align:center;">
                    ${mall.detail}
                    <br>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="/jsp/VIPCenter/files/detail-1c1a94aaf6.js"></script>
<script>
    // $(function(){
    //     seajs.use('page/activity/pointmall/detail/js/detail');
    // });
</script>
<div class="footer">
    <div class="g-o" style="width:1170px">
        <ul>
            <li>
                <a target="_blank" href="javascript:;" class="til">信息披露</a>
                <a target="_blank" href="https://www.xiaoniu88.com/portal/platform/index">平台数据</a>
                <a target="_blank" href="https://www.xiaoniu88.com/cms/compliance/complianceAudit">合规报告</a>
                <a target="_blank" href="https://www.xiaoniu88.com/portal/guide/security">风险管理</a>
                <a target="_blank" href="https://www.xiaoniu88.com/cms/about/index">公司概况</a>
                <a target="_blank" href="https://www.xiaoniu88.com/cms/about/contactus">联系我们</a>
            </li>
            <li>
                <a target="_blank" href="https://www.xiaoniu88.com/cms/help/index" class="til">帮助中心</a>
                <a target="_blank" href="https://www.xiaoniu88.com/cms/help/question/1">常见问题</a>
                <a target="_blank" href="https://www.xiaoniu88.com/cms/help/question/15">项目介绍</a>
                <a target="_blank" href="https://www.xiaoniu88.com/cms/help/question/24">操作演示</a>
                <a target="_blank" href="https://www.xiaoniu88.com/cms/help/question/23/id/99">资费说明</a>
            </li>
            <li>
                <a target="_blank" href="https://www.xiaoniu88.com/cms/help/index" class="til">新手指南</a>
                <a target="_blank" href="https://www.xiaoniu88.com/cms/help/question/3">项目</a>
                <a target="_blank" href="https://www.xiaoniu88.com/portal/sitemap/index">网站地图</a>

            </li>
            <li class="last ft-wm">
                <p>
                    <img src="/jsp/VIPCenter/images/wx-e41abfcd0c.png" alt="中兴财富在线互联网金融平台官方微信">
                    <span>官方微信</span>
                </p>
                <p>
                    <img src="/jsp/VIPCenter/images/app-d5f7cf3859.png" alt="专业P2P网贷平台-中兴财富在线APP">
                    <span>手机客户端</span>
                </p>
                <p>
                    <img src="/jsp/VIPCenter/images/community-43d3924ad4.jpg" alt="中兴财富在线兴趣部落">
                    <span>兴趣部落</span>
                </p>
            </li>
            <li class="last">
                <p class="til-ic">全国服务热线：</p>
                <p class="bd">4006-0755-70</p>
                <p>周一到周五8:30-22:30</p>
                <p>周六到周日9:00-18:00</p>
            </li>
        </ul>
    </div>
</div>
<!--start 尾部-->
<div class="foot-bt">
    <p>Copyright © 2015 深圳市中兴财富在线互联网信息咨询有限公司  版权所有    备案号：<a target="_blank" rel="nofollow" href="http://www.miibeian.gov.cn/state/outPortal/loginPortal.action">粤ICP备14079927号</a>&nbsp;&nbsp;<a target="_blank" rel="nofollow" href="https://image.xiaoniu88.com/static/WebXn/dist/images/footer/icp-ee0231e7d0.jpg">ICP证粤B2-20160194</a></p>
    <p>地址：广东省深圳市南山区高新园高新南一道富诚科技大厦四楼   座机：0755－86160888</p>
    <p>市场有风险 出借需谨慎 最终收益以实际为准</p>
    <span>
        <a class="lk01" href="http://www.itrust.org.cn/home/index/itrust_certifi/wm/1061427753" rel="nofollow" target="_blank" title="企业信用评级"></a>
        <a class="lk08" href="http://www.itrust.org.cn/home/index/satification_certificate/wm/MY2017120701" rel="nofollow" target="_blank" title="客户满意度评级"></a>
        <a class="lk02" href="http://www.miitbeian.gov.cn/" rel="nofollow" title="经营性网站备案信息" target="_blank"></a>
        <a style="display:none;" class="lk03" href="http://www.szeca.com.cn/html/fengcai/fhzdw/" rel="nofollow" target="_blank" title="深圳电子商务协会"></a>
        <a class="lk04" href="http://szcert.ebs.org.cn/17b502b9-988c-43b1-b21e-d1008a6af37a" target="_blank" rel="nofollow" title="深圳工商主体认证信息"></a>

        <a class="lk06" title="安全联盟" target="_blank" key="5420e71cefbfb0496364cce3" logo_size="83x30" logo_type="realname" href="http://www.anquan.org/authenticate/cert/?site=www.xiaoniu88.com&amp;at=realname" rel="nofollow"></a>
	    <a class="lk07" href="https://trustsealinfo.verisign.com/splash?form_file=fdf/splash.fdf&amp;dn=www.xiaoniu88.com&amp;lang=zh_cn" rel="nofollow" target="_blank" title="SSL"></a>
    </span>
</div>
<!--end 尾部-->
<!--引入统计代码-->
<div style="display:none">
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
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
<script async="" src="/jsp/VIPCenter/files/bbf1f358fbe2baf496d7d57ff885bbd8.js"></script><div id="ly-side-bar" style="left: 94.4774%; bottom: 0px; margin-bottom: 120px;" class="ly-side-bar side-bar-xn"><a href="javascript:;" class="side-bar-app"><div class="side-bar-pop"><div class="side-bar-pop-content"></div></div></a><a href="javascript:;" class="side-bar-interest"><div class="side-bar-pop"><div class="side-bar-pop-content"></div></div></a><a href="javascript:;" class="side-bar-kefu" data-callback="kefu" style="" id="qiyukefu"></a><a href="javascript:;" class="side-bar-calculator" data-callback="calculator"></a><a href="javascript:;" class="side-bar-wenjuan" data-callback="wenjuan"></a><a href="javascript:;" class="side-bar-top" data-callback="top"></a></div><div style="top: 0px; left: 0px; visibility: hidden; position: absolute; width: 1px; height: 1px;"><iframe style="height:0px; width:0px;" src="/jsp/VIPCenter/files/delegate.html"></iframe></div><div class="layer-1" id="YSF-BTN-HOLDER" style="display: none;"><div id="YSF-CUSTOM-ENTRY-1"><img src="/jsp/VIPCenter/files/1.png"></div><span id="YSF-BTN-CIRCLE"></span><div id="YSF-BTN-BUBBLE"><div id="YSF-BTN-CONTENT"></div><span id="YSF-BTN-ARROW"></span><span id="YSF-BTN-CLOSE"></span></div></div><div id="__nightingale_view_cover" style="width: 100%; height: 100%; transition: -webkit-transform 10s ease-in-out; position: fixed !important; left: 0px !important; bottom: 0px !important; overflow: hidden !important; background: rgb(0, 0, 0) !important; pointer-events: none !important; z-index: 2147483647; opacity: 0;"></div></body>
<jsp:include page="/WEB-INF/jsp/common/bottom.jsp"></jsp:include>
</html>