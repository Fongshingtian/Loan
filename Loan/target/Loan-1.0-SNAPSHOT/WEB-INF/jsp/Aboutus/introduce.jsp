<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2019/4/19
  Time: 11:11
  To change this template use File | Settings | File Templates.
--%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>小牛普惠-公司介绍</title>
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






</head>
<body>
<!--头部-->


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
                        <li class="current">
                            <a href="${pageContext.request.contextPath}/gzl/introduce" class="block-a">
                                <span class="l-n-title">公司介绍</span>
                                <div class="wrap-left-nav-mask" style="display: block"></div>
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
                        <li class="">
                            <a href="${pageContext.request.contextPath}/gzl/contactus" class="block-a">
                                <span class="l-n-title">联系我们</span>
                                <div class="wrap-left-nav-mask"></div>
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
                公司介绍
            </div>
            <div class="company-image">
                <img src="https://website-img.xnph66.com/static/pics/news/1480423698712971.jpg">
            </div>
            <div class="about-company-right-content">
                <ul>
                    <li>
                        <!-- <span class="compnay-name txt-m-grey">深圳市小牛普惠投资管理有限公司</span> -->
                        <p class="compnay-intro"></p><p style="text-align:justify;text-indent:21pt;" align="justify">
                        <span style="font-family:仿宋;font-size:10.5pt;"><span> </span></span>
                    </p>
                        <p class="MsoNormal" style="margin-left:0.0000pt;text-indent:32.0000pt;text-align:justify;" align="justify">
                            <span style="font-family:Microsoft YaHei;">深圳市小牛普惠投资管理有限公司（以下简称</span><span style="font-family:Microsoft YaHei;">“小牛普惠”）成立于2014年7月，总部位于深圳，是小牛资本旗下普惠金融信息服务机构。</span>
                        </p>
                        <p class="MsoNormal" style="margin-left:0.0000pt;text-indent:32.0000pt;text-align:justify;" align="justify">
                            <span style="font-family:SimHei;"> </span>
                        </p>
                        <p class="MsoNormal" style="margin-left:0.0000pt;text-indent:32.0000pt;text-align:justify;" align="justify">
                            <span style="font-family:Microsoft YaHei;">小牛普惠通过科技驱动金融创新，依托大数据风控，在消费分期、小额信用贷款等领域为客户提供便捷、高效的借款信息咨询服务。目前，已在全国二十余个省市自治区设立两百余家分子公司，建立了完善的普惠金融服务网络，为客户提供全方位、个性化的普惠金融信息服务。</span>
                        </p>
                        <p class="MsoNormal" style="margin-left:0.0000pt;text-indent:32.0000pt;text-align:justify;" align="justify">
                            <span style="font-family:SimHei;"> </span>
                        </p>
                        <p class="MsoNormal" style="margin-left:0.0000pt;text-indent:32.0000pt;text-align:justify;" align="justify">
                            <span style="font-family:Microsoft YaHei;">小牛普惠将积极融入</span><span style="font-family:Microsoft YaHei;">“普惠金融”国家战略，通过产品创新和服务完善，让更多的人参与和享受到普惠金融的服务中去，努力实现“美好资本、美好金融、美好社会”的企业愿景。</span>
                        </p>
                        <p>
                            <br>
                        </p>
                        <p style="text-align:justify;text-indent:21pt;" align="justify">
                            <span style="font-family:仿宋;font-size:10.5pt;"><span></span></span><span style="font-family:仿宋;font-size:10.5pt;"></span><span style="font-family:仿宋;font-size:10.5pt;"><span></span></span><span style="font-family:仿宋;font-size:10.5pt;"></span><span style="font-family:仿宋;font-size:10.5pt;"><span></span></span><span style="font-family:仿宋;font-size:10.5pt;"><span></span></span><span style="font-family:仿宋;font-size:10.5pt;"><span></span></span><span style="font-family:仿宋;font-size:10.5pt;"><span></span></span><span style="font-family:仿宋;font-size:10.5pt;"><span></span></span><span style="font-family:仿宋;font-size:10.5pt;"><span></span></span><span style="font-family:仿宋;font-size:10.5pt;"><span></span></span><span style="font-family:仿宋;font-size:10.5pt;"><span></span></span><span style="font-family:仿宋;font-size:10.5pt;"></span>
                        </p>
                        <p>
                            <br>
                        </p><p></p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</div>
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
        <!-- <div class="secure-link-area">
        <a href="javascript:vrsn_splash();" rel="nofollow" target="_blank" title="SSL" class="icon-seal"><img src="https://www.xnph66.com/HomePage/resources/xnph/images/vseal.gif" alt="SSL"></a>
        <div id="Symantec">
            <script type="text/javascript" src="https://seal.websecurity.norton.com/getseal?host_name=*.xnph66.com&amp;size=S&amp;use_flash=NO&amp;use_transparent=NO&amp;lang=zh_cn"></script>
        </div>
    </div> -->
        <script type="text/javascript">
            /*var sopener;
             function getSeal(){
             var url = 'https://trustsealinfo.websecurity.norton.com/splash?form_file=fdf/splash.fdf&dn=uat.xnph66.com&lang=zh_cn';
             if (sopener && !sopener.closed) {
             sopener.focus();
             } else {
             tbar = "location=yes,status=yes,resizable=yes,scrollbars=yes,width=560,height=500";
             var sw = window.open(url, 'VRSN_Splash', tbar);
             if (sw) {
             sw.focus();
             sopener = sw;
             }
             }
             }*/
        </script>

    </div>
</footer>






<script type="text/javascript" src="https://www.xnph66.com/HomePage/resources/dist/js/about.js?v=2.1.2"></script>






<script type="text/javascript">
    $('.selectpicker').on('rendered.bs.select', function(){

        $(this).parent().parent().find('.bootstrap-select-replace').remove();

    });
</script>









</body>
</html>
