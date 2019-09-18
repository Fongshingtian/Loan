<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2019/4/19
  Time: 11:13
  To change this template use File | Settings | File Templates.
--%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>小牛普惠-用户反馈</title>
    <meta name="Keywords" content="小牛普惠公司动态,小牛普惠新闻公告,小牛普惠信贷动态">
    <meta name="Description" content="小牛普惠信贷信息动态中心,主要是关于小牛普惠公司的公司新闻、小牛普惠新闻公告和信贷、网贷信息资讯更新.">

    <!-- 页面自定义名称 -->



    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->

    <!-- 是否为开发模式 -->

    <!-- 资源加载版本号 -->



    <!--[if lt IE 9]><script src="https://www.xnph66.com/HomePage/resources/xnph/vender/bootstrap/dist/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="https://hm.baidu.com/hm.js?d249a44e45d00944e513d824188f2185"></script><script src="https://www.xnph66.com/HomePage/resources/xnph/vender/bootstrap/dist/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="http://cdn.bootcss.com/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->



    <!-- common -->



    <link rel="stylesheet" type="text/css" href="https://www.xnph66.com/HomePage/resources/dist/build/build.css?v=2.1.2">


    <link rel="stylesheet" type="text/css" href="https://www.xnph66.com/HomePage/resources/dist/css/less/about_style.css?v=2.1.2">




    <!--[if lt IE 9]>
    <script src="http://html5media.googlecode.com/svn/trunk/src/html5media.min.js"></script>
    <![endif]-->


    <!--头部预先加载js-->
    <!-- common -->




    <script type="text/javascript" src="https://www.xnph66.com/HomePage/resources/dist/build/build.js?v=2.1.2"></script><link type="text/css" rel="stylesheet" href="https://www.xnph66.com/HomePage/resources/dist/build/need/laydate.css"><link type="text/css" rel="stylesheet" href="https://www.xnph66.com/HomePage/resources/dist/build/skins/default/laydate.css" id="LayDateSkin">



    <!-- 百度统计-->
    <script type="text/javascript">
        var XnphVideoPlaying = function(){console.log('nothing');};
    </script>


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
        label.has-error {
            padding-left: 16px;
            padding-bottom: 2px;
            color: #f05050;
        }
        /*  #feedbackType-error{
position: absolute;
right: -134px;
top: 5px;
}*/

        #feedbackContent-error {
            position: absolute;
        }
    </style>
</head>
<body>
<!--头部-->


<input type="hidden" value="https://www.xnph66.com" id="txt-base-url">
<input type="hidden" value="https://www.xnph66.com/HomePage/resources" id="txt-resource-url">
<input type="hidden" value="https://website-img.xnph66.com/" id="txt-img-url">
<!-- <header>
<div class="g-m">
    <ul>
        <li class="tel fl">全国服务热线：400-8730-666</li>
        <li class="wechat fr">
            <a href="javascript:;">微信关注我们</a>
            <img class="header-qrcode" src="https://www.xnph66.com/HomePage/resources/xnph/images/header-qrcode.png">
        </li>
        <li class="linkus fr"><a href="https://www.xnph66.com/contact">联系我们</a></li>
    </ul>
</div>
</header> -->
<nav class="g-m nav-wrap">
    <a href="https://www.xnph66.com"><img src="https://www.xnph66.com/HomePage/resources/xnph/images/xnph-jf-logo.jpg"></a>
    <a class="xn-nav txt-sty-m" data-menukey="index" href="javascript:window.location.href=location.host.indexOf('.com') == -1 ? '/HomePage/index' : '/'" style="margin-left: 30px">首&nbsp;&nbsp;页</a>
    <a class="xn-nav txt-sty-m" data-menukey="product" href="https://www.xnph66.com/product1">产品介绍</a>
    <a class="xn-nav txt-sty-m" data-menukey="loanapply" href="https://www.xnph66.com/loanapply">在线申请</a>
    <a class="xn-nav txt-sty-m" data-menukey="branch" href="https://www.xnph66.com/branch/1">营业网点</a>
    <a class="xn-nav pos-abt txt-sty-m active" data-menukey="about" href="https://www.xnph66.com/company">关于我们</a>
</nav>
<!--右侧停靠 begin-->
<div class="BizQQWPA_wrap fix-r-area">
    <div class="fra-wrap">
        <a class="f-btn-ic ic-customer-feedback" href="https://www.xnph66.com/user_feedback"></a>
        <!-- <a class="f-btn-ic ic-qq-server" id="BizQQWPA"></a> -->
        <a class="f-btn-ic ic-wechat-server"><i></i></a>
        <a class="f-btn-ic ic-back-top" href="javascript:document.documentElement.scrollTop = document.body.scrollTop = 0;" style="display: block;"></a>
    </div>
</div>
<!--右侧停靠 end-->
<div class="box-gry box-paddingb">
    <div class="crumbs">
        <a href="${pageContext.request.contextPath}/gzl/introduce">首页&nbsp;</a>&gt;
        <a href="${pageContext.request.contextPath}/gzl/introduce">关于我们</a>
    </div>
    <div class="body-wrap">
        <div class="wrap-left fl">
            <div class="wrap-left-nav">
                <div class="wrap-left-nav-main">
                    <ul>
                        <li class="bg-gray-lter">
                            <a href="javascript:;" class="block-a">
                                <span class="l-n-title">关于我们</span>
                                <div class="wrap-left-nav-mask"></div>
                            </a>
                        </li>
                        <li class="">
                            <a href="${pageContext.request.contextPath}/gzl/introduce" class="block-a">
                                <span class="l-n-title">公司介绍</span>
                                <div class="wrap-left-nav-mask"></div>
                            </a>
                        </li>
                        <li class="">
                            <a href="${pageContext.request.contextPath}/gzl/development" class="block-a">
                                <span class="l-n-title">发展历程</span>
                                <div class="wrap-left-nav-mask"></div>
                            </a>
                        </li>

                        <li class="">
                            <a href="${pageContext.request.contextPath}/wlk/toNewsList" class="block-a">
                                <span class="l-n-title">新闻公告</span>
                                <div class="wrap-left-nav-mask"></div>
                            </a>
                        </li>
                        <li class="current">
                            <a href="${pageContext.request.contextPath}/gzl/contactus" class="block-a">
                                <span class="l-n-title">联系我们</span>
                                <div class="wrap-left-nav-mask" style="display: block"></div>
                            </a>
                        </li>
                        <li class="">
                            <a href="#" target="_blank" class="block-a">
                                <span class="l-n-title">加入我们</span>
                                <div class="wrap-left-nav-mask"></div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="wrap-right fr">
            <div class="wrap-right-title">
                联系我们
            </div>
            <div class="about-link-right-content">
                <ul class="about-detail-list">
                    <li>
                        <div class="clearfix twoColor-title b-b">
                            <span class="fl title">尊敬的用户</span>
                            <span class="fr detail-grey-line more-link"></span>
                        </div>
                        <div class="link-explain">
                            <p class="m-t-xs l-h-2x">您好！</p>
                            <p class="l-h-2x">为了给您提供更好的服务，我们希望收集您使用小牛普惠官网时的想法和建议。</p>
                            <p class="l-h-2x">您的意见就是我们的财富，对您的配合和支持表示衷心感谢！</p>
                        </div>
                        <form class="form-horizontal m-t-md xn-form" action="/gzl/addcon" role="form" id="feedBackForm" enctype="multipart/form-data" method="post" novalidate="novalidate">
                            <div class="form-group has-error">
                                <label class="control-label w-xss m-r-md">选择类型</label>
                                <div class="btn-group bootstrap-select" style="width: 300px;"><div class="dropdown-menu open" role="combobox"></div>
                                    <select class="selectpicker" data-width="300px"  name="feedbackType" tabindex="-98" aria-required="true" aria-invalid="true">
                                    <option value="">请选择类型</option>
                                    <option value="1">建议</option>
                                    <option value="2">投诉</option>
                                    <option value="3">其他</option>
                                </select></div>

                            </div>
                            <div class="form-group has-error">
                                <label for="contact" class="control-label w-xss m-r-md">联系方式</label>
                                <input type="text" class="form-control w-xn-xl i-b" onBlur="isEmail()"  id="contact" placeholder="请输入您的邮箱" name="contact" aria-required="true">
                                <span class="text-orange m-l-sm xn-error" id="sp"></span>
                            </div>
                            <div class="form-group has-error">
                                <label class="control-label w-xss m-r-md fl">反馈建议</label>
                                <textarea class="form-control w-xxxl i-b" rows="9" style="margin-left: 4px; width: 650px" placeholder="写下您的意见与建议，我们将认真倾听，非常感谢！" name="feedbackContent" maxlength="500" aria-required="true"></textarea>

                            </div>
                            <div class="form-group ">
                                <div class="w-xn-xl i-b">
                                    <%--<button class="btn btn-orange" style="width: 124px;margin: -2px 0 0 96px;">确认提交</button>--%>
                                    <input type="submit" value="确定提交"  class="btn btn-orange" onclick="sub();" style="width: 124px;margin: -2px 0 0 96px;"/>
                                </div>
                            </div>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</div>

<script type="text/javascript" src="../../js/jquery-1.7.2.min.js"></script>
<script type="text/javascript">
    function cleartext(){
        var box=document.getElementById("sp");
        box.style.display="none";
    }
    function isEmail(){
        var email=document.getElementById("contact").value;
        var checkerror=document.getElementById("sp");
        var myReg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;
        if(email=="")
        {
            checkerror.className="checkerror";
            checkerror.innerHTML="邮箱不能为空";
            setTimeout("cleartext()",1000);
            return false;
        }else{
            if(myReg.test(email))
            {
                return true;
            }else{
                checkerror.className="checkerror";
                checkerror.innerHTML="邮箱格式错误";
                setTimeout("cleartext()",1000);
            }
        }
    }


    function sub() {
        alert("感谢您的意见与建议，我们会尽快处理");

    }



</script>





<!--尾部-->






<footer>
    <div class="g-m">
        <ul class="footer-link-wrap clearfix">
            <li class="fl">
                <ul class="footer-link-list">
                    <li><a href="https://www.xnph66.com/company">关于我们</a></li>
                    <li><a href="https://www.xnph66.com/company">公司介绍</a></li>
                    <li><a href="https://www.xnph66.com/newslistrows4">新闻公告</a></li>
                    <li><a href="http://sc.hotjob.cn/wt/neocapital/web/index/social" target="_blank">加入我们</a></li>
                    <li><a href="https://www.xnph66.com/web_map">网站地图</a></li>
                </ul>
            </li>
            <li class="fl">
                <ul class="footer-link-list">
                    <li><a href="https://www.xnph66.com/product1">产品介绍</a></li>
                    <li><a href="https://www.xnph66.com/product/xnwmd">微秒贷</a></li>
                    <li><a href="https://www.xnph66.com/product/xnjyd">精英贷</a></li>
                    <li><a href="https://www.xnph66.com/product/xngxd">工薪贷</a></li>
                </ul>
            </li>
            <li class="fl">
                <ul class="footer-link-list">
                    <li><a href="javascript:void(0)">客户服务</a></li>
                    <!-- <li><a href="javascript:void(0)" id="footer-BizQQWPA">在线客服</a></li> -->
                    <li><a href="https://www.xnph66.com/branch/1">在线预约</a></li>
                    <li><a href="https://www.xnph66.com/question1">常见问题</a></li>
                    <li><a href="https://www.xnph66.com/user_feedback">用户反馈</a></li>
                </ul>
            </li>
            <li class="fl">
                <img class="qrcode" style="padding:0 5px" src="https://www.xnph66.com/HomePage/resources/xnph/images/erweima.png">
            </li>
            <li class="fl">
                <ul class="footer-link-list">
                    <li>客服专线</li>
                    <li class="footer-tel m-xs">
                        <img class="footer-icon" src="https://www.xnph66.com/HomePage/resources/xnph/images/footer_icon.png">
                        <span style="font-size: 34px;">400-8730-666</span><br>
                        <span class="pdl47 txt-sty-s">周一~周五:　9:00-18:00</span><br>
                        <span class="pdl47 txt-sty-s">(周六~周日公众假期休息)</span>
                    </li>
                    <!-- <li class="footer-qq"><img class="footer-icon" src="https://www.xnph66.com/HomePage/resources/xnph/images/footer_icon.png"><a href="javascript:;"><img  id="footer-img-BizQQWPA" src="https://www.xnph66.com/HomePage/resources/xnph/images/qq.png"></a> </li> -->
                </ul>
            </li>
        </ul>
    </div>
    <div class="clearfix copyright">
        <p>Copyright © 深圳市小牛普惠投资管理有限公司 备案号：粤ICP备16000223号-1</p>


    </div>
</footer>

<script type="text/javascript" src="https://www.xnph66.com/HomePage/resources/dist/js/about.js?v=2.1.2"></script>

</body>
</html>
