<%--在线预约--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>${outlet.name}_中兴财富第一家线下实体贷款网点</title>
    <meta name="Keywords" content="线上贷款,预约贷款,线上信用贷款,线上小额贷款" />
    <meta name="Description"
          content="中兴财富线上预约贷款平台，全国各地有多个营业部，主要分布于各地省会城市，是国内知名的金融信息在线服务专家" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->
    <!-- 是否为开发模式 -->
    <!-- 资源加载版本号 -->
    <!--[if lt IE 9]><script src="/jsp/outlets/booking/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="/jsp/outlets/booking/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="/jsp/outlets/booking/html5shiv.js"></script>
    <script src="/jsp/outlets/booking/respond.min.js"></script>
    <![endif]-->
    <!-- common -->
    <link rel="stylesheet" type="text/css" href="/jsp/outlets/booking/build.css?v=2.1.2">
    <link rel="stylesheet" type="text/css" href="/jsp/outlets/booking/branch_style.css?v=2.1.2">
    <!--[if lt IE 9]>
    <script src="http://html5media.googlecode.com/svn/trunk/src/html5media.min.js"></script>
    <![endif]-->
    <!--头部预先加载js-->
    <!-- common ?v=2.1.2-->
    <script type="text/javascript" src="/jsp/outlets/booking/build.js"></script>
    <!-- 百度统计-->
    <script type="text/javascript">
        var XnphVideoPlaying = function(){console.log('nothing');};
    </script>
        <jsp:include page="/WEB-INF/jsp/common/resources.jsp"></jsp:include>
        <jsp:include page="/WEB-INF/jsp/common/top.jsp"></jsp:include>
        <jsp:include page="/WEB-INF/jsp/common/top2.jsp"></jsp:include>
    <script>
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?d249a44e45d00944e513d824188f2185";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
        var IsPlay = false;
        XnphVideoPlaying = function() {
            if(!IsPlay && _hmt){
                _hmt.push(['_trackEvent', 'XNPH_VIDEO', 'play', 'white-collar workers']);
                IsPlay = true;
                console.log('baidu _trackEvent video play');
            }
        }
    </script>

    <!-- https不支持腾讯在线客服js，建议使用图片或者文字超链接发起在线咨询 -->
    <!-- <script charset="utf-8" type="text/javascript" src="https://wpa.b.qq.com/cgi/wpa.php"></script> -->
    <style type="text/css">
        .appoint-success-wrap{
            padding-top: 10px;
            min-height: 260px;
            text-align: center;
            opacity: 0;
            margin-top: 40px;
        }
        .appoint-success-wrap .pddl{
            padding-left: 36px;
        }
        .success-bg{
            background: url("https://www.xnph66.com/HomePage/resources/xnph/images/sucess.png") no-repeat 148px 4px;
        }
        .success-bg .txt-l-grey{
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
<!--头部-->

<input type="hidden" value="https://www.xnph66.com" id="txt-base-url" />
<input type="hidden" value="https://www.xnph66.com/HomePage/resources" id="txt-resource-url" />
<input type="hidden" value="https://website-img.xnph66.com/" id="txt-img-url" />
<!--右侧停靠 begin-->
<div class="BizQQWPA_wrap fix-r-area">
    <div class="fra-wrap">
        <a class="f-btn-ic ic-customer-feedback" href="https://www.xnph66.com/user_feedback"></a>
        <!-- <a class="f-btn-ic ic-qq-server" id="BizQQWPA"></a> -->
        <a class="f-btn-ic ic-wechat-server"><i></i></a>
        <a class="f-btn-ic ic-back-top" href="javascript:document.documentElement.scrollTop = document.body.scrollTop = 0;"></a>
    </div>
</div>
<!--右侧停靠 end-->

<div class="box-gry box-paddingb">
    <div class="crumbs">
        <a href="https://www.xnph66.com">首页&nbsp</a>&gt;
        <a href="/outlets">在线预约</a>
    </div>
    <div class="body-wrap">
        <div class="wrap-left fl">
            <div class="wrap-left-nav">
                <div class="wrap-left-nav-main">
                    <ul>
                        <li class="bg-gray-lter">
                            <a href="/outlets"   class="block-a">
                                <span class="l-n-title" >营业网点</span>
                                <div class="wrap-left-nav-mask"></div>
                            </a>
                        </li>
                        <li class="current" style="height: 50px">
                            <a  class="block-a">
                                <span class="l-n-title" >在线预约</span>
                                <div class="wrap-left-nav-mask" style="display: block"></div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="wrap-right fr">
            <div class="wrap-right-title">
                在线预约
            </div>
            <div class="branch-appoint-right-content">
                <form class="form-horizontal m-t-md xn-form"  method="post" action="/booking" id="booking">
                    <div class="form-group">
                        <label class="control-label w-sm m-r-md fl">预约地点</label>
                        <div class="i-b appoint-address ">
                            <input type="hidden" id="outletId" name="outletId" value="${outlet.id}" />
                            地　区：<span class="txt-blue">${outlet.province}&nbsp; ${outlet.city}</span>　　
                            营业厅：<span class="txt-blue">${outlet.name}</span><br>
                            电　话：${outlet.contactPhone} <br>
                            地　址：${outlet.address}
                        </div>
                    </div>
                    <div class="form-group">
                        <label  class="control-label w-sm m-r-md pull-left">预约时间</label>
                        <div class="w-xn-xxl i-b m-l-3 pull-left" style="z-index: 10;position:relative">
                            <div class="input-group date "  onclick="laydate({elem:'#time',istime: true, format: 'YYYY-MM-DD hh:mm:ss', min: laydate.now()})">
                                <input type="text" class="form-control" id="time" name="time" >
                                <div class="input-group-addon input-group-btn">
                                    <button type="button" class="btn btn-default" ><i class="glyphicon glyphicon-calendar"></i></button>
                                </div>
                            </div>
                        </div>
                        <span class="text-orange m-l-sm xn-error" id="time-error">
                        </span>
                    </div>
                    <div class="form-group">
                        <label  class="control-label w-sm m-r-md">申请产品</label>
                        <div class="w-xn-xxl i-b">
                            <%--<div class="btn-group bootstrap-select bootstrap-select-replace" style="width: 100%">--%>
                                <%--<button type="button" class="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="sex" title="请选择预约产品"><span class="filter-option pull-left">请选择预约产品</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button>--%>
                            <%--</div>--%>
                            <select class="btn dropdown-toggle bs-placeholder btn-default"  data-width="100%"  id="productId" name="productId">
                                <option value="">请选择预约产品</option>
                                <c:forEach items="${product}" var="p">
                                    <option value="${p.pid}">${p.pname}</option>
                                </c:forEach>
                            </select>
                        </div>
                        <span class="text-orange m-l-sm xn-error " id="productId-error">
                        </span>
                    </div>
                    <div class="form-group">
                        <label for="name" class="control-label w-sm m-r-md">姓名</label>
                        <input type="text" class="form-control w-xn-xxl i-b" id="name" placeholder="请输入姓名" name="name">
                        <span class="text-orange m-l-sm xn-error " id="name-error">
                        </span>
                    </div>
                    <div class="form-group">
                        <label  class="control-label w-sm m-r-md">身份证号</label>
                        <input type="text" class="form-control w-xn-xxl i-b" id="idCard" name="idCard" placeholder="请输入身份证号">
                        <span class="text-orange m-l-sm xn-error " id="idCard-error">
                        </span>
                    </div>
                    <div class="form-group">
                        <label  class="control-label w-sm m-r-md">常用手机号</label>
                        <input type="text" class="form-control w-xn-xxl i-b" id="phone" name="phone" placeholder="请输入常用手机号">
                        <span class="text-orange m-l-sm xn-error " id="phone-error">
                        </span>
                    </div>
                    <div class="form-group ">
                        <label  class="control-label w-sm m-r-md">手机验证码</label>
                        <div class="w-xn-xxl i-b">
                            <input type="text" class="form-control i-b" style="width: 186px;margin-right:11px;" name="captchaCode" id="captchaCode" placeholder="请输入手机验证码">
                            <button class="btn btn-orange" style="width: 148px;margin-top: -2px;" type="button" id="captcha">获取手机验证码</button>
                        </div>
                        <span class="text-orange m-l-sm xn-error " id="captchaCode-error"></span>
                    </div>
                    <div class="form-group m-t-lg">
                        <label  class="control-label w-sm m-r-md"></label>
                        <div class="w-xn-xxl i-b">
                            <button class="btn btn-orange w-xn-xxl" type="button" onclick="subCheck()" id="sub-btn">预约</button>
                        </div>
                    </div>
                </form>
                <div class="appoint-success-wrap" style="display:none">
                    <div class="success-bg pddl" >
                        <p class="txt-l-grey">您的预约已成功提交！贷款专员将尽快联系您请保持电话通畅！</p>
                    </div>
                    <div class="pddl">
                        了解<a  class="text-orange" href="https://www.xnph66.com/product1">更多产品</a>&nbsp&nbsp&nbsp&nbsp或&nbsp&nbsp&nbsp&nbsp返回<a  class="text-orange" href="https://www.xnph66.com">首页</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="clearfix" ></div>
    </div>
</div>

<script type="text/javascript" src="/jsp/outlets/booking/about.js?v=2.1.2"></script>
<script type="text/javascript" src="/jsp/outlets/booking/appointment.js?v=2.1.2"></script>
<script type="text/javascript">
    $('.selectpicker').on('rendered.bs.select', function(){
        $(this).parent().parent().find('.bootstrap-select-replace').remove();
    });
</script>

<script type="text/javascript">
    //表单提交验证return subCheck()
    function subCheck(){
        var a=propertyCheck("time","请选择预约时间"),
            b=propertyCheck("productId","请选择贷款产品"),
            c=propertyCheck("name","请输入您的姓名"),
            d=propertyCheck("idCard","请输入身份证号"),
            e=propertyCheck("phone","请输入手机号码"),
            f=propertyCheck("captchaCode","请输入手机验证码");
        if(a&&b&&c&&d&&e&&f){
            var a1=blurCheck("idCard","请输入正确的身份证号"),
                b1=blurCheck("phone","请输入正确的手机号码"),
                c1=false;
                if ($("#captchaCode").val() == sessionStorage.getItem("captchaCode")) {
                   c1=true;
                } else {
                    $("#captchaCode-error").html("<label>验证码错误</label>");
                }
                if(a1&&b1&&c1){
                    $("#booking").submit();
                }else{
                }
        }else{
        }
    }

    //属性值检查
    function propertyCheck(id,msg){
        if($("#"+id).val().trim()==""){
            $("#"+id+"-error").html("<label>"+msg+"</label>");
            return false;
        }else{
            return true;
        }
    }

    //得到焦点事件检查
    function focusCheck(id){
        $("#"+id+"-error").html("");
    }

    //失去焦点事件检查
    function blurCheck(id,msg){
        if($("#"+id).val().trim()==""){
            $("#"+id+"-error").html("<label>"+msg+"</label>");
            return false;
        }
        if(id=="idCard"){
            if($("#"+id).val().trim().length!=18){
                $("#"+id+"-error").html("<label>请输入正确的身份证号</label>");
                return false;
            }
        }
        if(id=="phone"){
            if($("#"+id).val().trim().length!=11||isNaN($("#"+id).val())){
                $("#"+id+"-error").html("<label>请输入正确的手机号码</label>");
                return false;
            }
        }
        return true;
    }
    //改变事件
    function changeCheck(id,msg){
        if($("#"+id).val().trim()!=""){
            $("#"+id+"-error").html("");
        }
    }
    //绑定事件
    function bindFocusABlurAChange(id,msg){
        $("#"+id).focus(function(){focusCheck(id)});
        $("#"+id).blur(function(){blurCheck(id,msg)});
        $("#"+id).change(function(){changeCheck(id,msg)});
    }

    $(function(){
        bindFocusABlurAChange("time","请选择预约时间");
        bindFocusABlurAChange("productId","请选择贷款产品");
        bindFocusABlurAChange("name","请输入您的姓名");
        bindFocusABlurAChange("idCard","请输入身份证号");
        bindFocusABlurAChange("phone","请输入手机号码");
        bindFocusABlurAChange("captchaCode","请输入手机验证码");

        //获取验证码
        $("#captcha").click(function(){
            if(propertyCheck("phone","请输入手机号码")&&blurCheck("phone","请输入正确的手机号码")){
                var phone=$("#phone").val();
                doDisAbled();
                $.post("/getCaptcha",{phone:phone},function(data){
                    sessionStorage.setItem("captchaCode",data);
                },"json");
            }
        });
    });
    //发送验证码后一分钟后才能再次发送
    function doDisAbled(){
        var time=60;
        var captcha=$("#captcha");
        forTime(time,captcha);
        captcha.attr("disabled",true);
        function forTime(time,captcha){
            setTimeout(function(){
                time--;
                captcha.html(time+"秒后重发");
                if(time>0){
                    forTime(time,captcha);
                }else{
                    captcha.html("发送短信验证码");
                    captcha.attr("disabled",false);
                }
            },1000)
        }
    }
</script>
</body>
<jsp:include page="/WEB-INF/jsp/common/bottom.jsp"></jsp:include>
</html>