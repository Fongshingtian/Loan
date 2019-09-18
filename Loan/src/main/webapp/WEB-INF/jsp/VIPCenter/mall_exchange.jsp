<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>兑换商品_中兴财富在线官网</title>
    <meta name="keywords" content="中兴财富在线积分商城">
    <meta name="description" content="中兴财富在线积分商城服务于所有中兴财富在线客户,中兴财富在线会员可通过各种方式获取积分,通过登录个人账户查询积分获取情况并使用积分兑换礼物.">
    <%--<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">--%>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="shortcut icon" href="https://image.xiaoniu88.com/static/WebXn/dist/images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/jsp/VIPCenter/files/base-56e256b865.css">
    <link rel="stylesheet" type="text/css" href="/jsp/outlets/booking/build.css?v=2.1.2">
    <link rel="stylesheet" type="text/css" href="/jsp/outlets/booking/branch_style.css?v=2.1.2">
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
<span>中兴财富在线提醒您：为了更流畅的访问本网站，建议您使用IE9.0及以上版本浏览器或360浏览器。
	<a class="link" href="http://se.360.cn/" target="_blank" rel="nofollow">点击进入360官网下载&gt;&gt;</a>
</span>
    <i class="icon-common icon-common-close"></i>
</div>
<%--<div class="menu-list head-menu">--%>
    <%--<div class="g-o" style="width:1170px;">--%>
        <%--&lt;%&ndash;<a class="logo" href="https://www.xiaoniu88.com/">&ndash;%&gt;--%>
            <%--&lt;%&ndash;<img src="/jsp/VIPCenter/images/logo-b36cbf7c4f.png" alt="中兴财富在线-专业P2P网平台">&ndash;%&gt;--%>
        <%--&lt;%&ndash;</a>&ndash;%&gt;--%>
        <%--<input id="_point_current_menu" type="hidden" value="mall">--%>
        <%--<ul class="nav">--%>
            <%--<li>--%>
                <%--<a href="https://www.xiaoniu88.com/activity/pointmall/usual/index" id="_menu_mall" class="cur">积分兑换</a>--%>
            <%--</li>--%>
            <%--<!--  -->--%>
            <%--<li>--%>
                <%--<a href="https://www.xiaoniu88.com/activity/pointmall/usual/pointrule" id="_menu_rule">积分规则</a>--%>
            <%--</li>--%>
            <%--<li>--%>
                <%--<a href="https://www.xiaoniu88.com/activity/pointmall/usual/pointfaq" id="_menu_faq">积分问答</a>--%>
            <%--</li>--%>
        <%--</ul>--%>
    <%--</div>--%>
<%--</div>--%>
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
            您现在的位置：<a href="https://www.xiaoniu88.com/">首页</a> &gt; <a href="/vip/point/mall">积分商城</a> &gt;
            ${mall.name}
        </div>
    </div>
    <div class="detailContainer" id="detailContainer" style="width:50%;margin-left:300px">
        <form class="form-horizontal m-t-md xn-form"  method="post" action="/vip/exchange" id="exchange">
            <div class="form-group">
                <label class="control-label w-sm m-r-md fl">兑换商品</label>
                <div class="i-b appoint-address " style="line-height: 28px;">
                    <input type="hidden" id="mallId" name="mallId" value="${mall.id}" />
                    <input type="hidden" id="userId" name="userId" value="${user.uid}" />
                    <input type="hidden" name="point" value="${mall.point}">
                    商品：<span class="txt-blue">${mall.name}</span><br>
                    所需积分：${mall.point}<br>
                    可用积分：${user.point}<br>
                    <img style="width:100px" src="${pageContext.request.contextPath}/upload/${mall.image}">
                </div>
            </div>
            <div class="form-group">
                <label  class="control-label w-sm m-r-md">收货地址</label>
                <div class="w-xn-xxl i-b" style="width:60%">
                    <select class="btn dropdown-toggle bs-placeholder btn-default" data-width="100%"  id="province">
                        <option value="">请选择省份</option>
                        <c:forEach items="${province}" var="p">
                            <option value="${p.key}"> ${p.key} </option>
                        </c:forEach>
                    </select>
                    <select class="btn dropdown-toggle bs-placeholder btn-default" data-width="100%"  id="city">
                        <option value="">请选择市区</option>
                    </select>
                    <select class="btn dropdown-toggle bs-placeholder btn-default" data-width="100%"   id="area">
                        <option value="">请选择县区</option>
                    </select>
                </div>
                <span class="text-orange m-l-sm xn-error " id="productId-error">
                        </span>
            </div>
            <div class="form-group">
                <label class="control-label w-sm m-r-md">详细地址</label>
                <input type="text" class="form-control w-xn-xxl i-b" id="address2" placeholder="请输入详细地址">
                <span class="text-orange m-l-sm xn-error " id="name-error">
                        </span>
            </div>
            <div class="form-group">
                <label  class="control-label w-sm m-r-md">收货人</label>
                <input type="hidden" id="address" name="address">
                <input type="text" class="form-control w-xn-xxl i-b" id="consignee" name="consignee" placeholder="请输入收货人">
                <span class="text-orange m-l-sm xn-error " id="idCard-error">
                        </span>
            </div>
            <div class="form-group">
                <label  class="control-label w-sm m-r-md">联系电话</label>
                <input type="text" class="form-control w-xn-xxl i-b" id="phone" name="phone" placeholder="请输入联系电话">
                <span class="text-orange m-l-sm xn-error " id="phone-error">
                        </span>
            </div>
            <div class="form-group m-t-lg">
                <label  class="control-label w-sm m-r-md"></label>
                <div class="w-xn-xxl i-b">
                    <button class="btn btn-orange w-xn-xxl" type="button" id="sub-btn">确认兑换</button>
                </div>
            </div>
        </form>
    </div>
</div>
<script src="/jsp/VIPCenter/files/detail-1c1a94aaf6.js"></script>
<script>
    $(function(){
        $("#province").change(function(){
            var province=$("#province").val();
            if(province!=""){
                $.ajax({
                    type:"post",
                    url:"/vip/getCity/"+province, //访问的链接
                    success:function(data){  //成功的回调函数
                       var keys= Object.keys(data);
                        $("#city").empty();
                        for(var i=0;i<keys.length;i++){
                            var str="<option value='"+keys[i]+"'>"+keys[i]+"</option>"
                            $("#city").append(str);
                        }
                       var a= data[keys[0]];
                        $("#area").empty();
                        for(var i=0;i<data[keys[0]].length;i++){
                            var str="<option value='"+a[i]+"'>"+a[i]+"</option>"
                            $("#area").append(str);
                        }
                        $("#city").change(function(){
                            var city=$("#city").val();
                            var a= data[city];
                            if(a!=undefined){
                                $("#area").empty();
                                    for(var i=0;i<a.length;i++){
                                    var str="<option value='"+a[i]+"'>"+a[i]+"</option>"
                                    $("#area").append(str);
                                }
                            }else{
                                $("#area").append("<option value=''>请选择县区</option>");
                            }
                        });
                    },
                    error: function (e) {
                        alert("error");
                    }
                });
            }else{
                $("#city").empty();
                $("#city").append("<option value=''>请选择市区</option>");
                $("#area").empty();
                $("#area").append("<option value=''>请选择县区</option>");
            }
        });

        $("#sub-btn").click(function(){
            subCheck();
        });
    });
    function subCheck(){
        var province=$("#province").val();
        var city=$("#city").val();
        var area=$("#area").val();
        var address2=$("#address2").val();

        var consignee=$("#consignee").val();
        var phone=$("#phone").val();
        if(province==""){
            alert("请选择省份！");
            return;
        }
        if(city==""){
            alert("请选择市区！");
            return;
        }
        if(consignee.trim()==""){
            alert("请填写收货人！");
            return;
        }
        if(phone.trim()==""){
            alert("请输入联系电话！");
            return;
        }else if(isNaN(phone)||phone.length!=11){
            return;
            alert("请输入正确的联系电话！");
        }
        var address=province+city+area+address2;
        $("#address").val(address)
        $("#exchange").submit();
    }
</script>
<script async="" src="/jsp/VIPCenter/files/bbf1f358fbe2baf496d7d57ff885bbd8.js"></script><div id="ly-side-bar" style="left: 94.4774%; bottom: 0px; margin-bottom: 120px;" class="ly-side-bar side-bar-xn"><a href="javascript:;" class="side-bar-app"><div class="side-bar-pop"><div class="side-bar-pop-content"></div></div></a><a href="javascript:;" class="side-bar-interest"><div class="side-bar-pop"><div class="side-bar-pop-content"></div></div></a><a href="javascript:;" class="side-bar-kefu" data-callback="kefu" style="" id="qiyukefu"></a><a href="javascript:;" class="side-bar-calculator" data-callback="calculator"></a><a href="javascript:;" class="side-bar-wenjuan" data-callback="wenjuan"></a><a href="javascript:;" class="side-bar-top" data-callback="top"></a></div><div style="top: 0px; left: 0px; visibility: hidden; position: absolute; width: 1px; height: 1px;"><iframe style="height:0px; width:0px;" src="/jsp/VIPCenter/files/delegate.html"></iframe></div><div class="layer-1" id="YSF-BTN-HOLDER" style="display: none;"><div id="YSF-CUSTOM-ENTRY-1"><img src="/jsp/VIPCenter/files/1.png"></div><span id="YSF-BTN-CIRCLE"></span><div id="YSF-BTN-BUBBLE"><div id="YSF-BTN-CONTENT"></div><span id="YSF-BTN-ARROW"></span><span id="YSF-BTN-CLOSE"></span></div></div><div id="__nightingale_view_cover" style="width: 100%; height: 100%; transition: -webkit-transform 10s ease-in-out; position: fixed !important; left: 0px !important; bottom: 0px !important; overflow: hidden !important; background: rgb(0, 0, 0) !important; pointer-events: none !important; z-index: 2147483647; opacity: 0;"></div></body>
<jsp:include page="/WEB-INF/jsp/common/bottom.jsp"></jsp:include>
</html>
