<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2019/4/19
  Time: 11:12
  To change this template use File | Settings | File Templates.
--%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>小牛普惠-新闻公告列表</title>
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
        <a class="f-btn-ic ic-back-top" href="javascript:document.documentElement.scrollTop = document.body.scrollTop = 0;" style="display: none;"></a>
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

                        <li class="current">
                            <a href="${pageContext.request.contextPath}/wlk/toNewsList" class="block-a">
                                <span class="l-n-title">新闻公告</span>
                                <div class="wrap-left-nav-mask" style="display: block"></div>
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
                新闻公告
            </div>
            <div class="about-news-right-content news-wraper">
                <ul>
                    <li class="news-type-section ">
                        <div class="clearfix  twoColor-title b-b">
                            <span class="fl  title">最新公告</span>
                            <span class="fr detail-txt-line ">
                                <a href="https://www.xnph66.com/newspreview?newsType=01&amp;pageNum=1&amp;pageSize=12" class="fr">更多内容...</a>
                            </span>
                        </div>
                        <ul class="point-list">

                            <li class="clearfix">
                                <a href="https://www.xnph66.com/news339" title="">
                                    <span class="fl point">· </span>
                                    <span class="fl">关于近期不法分子冒用小牛普惠名义进行诈骗的公告</span>
                                    <span class="fr newsTime-color">2018-08-24</span>
                                </a>
                            </li>


                            <li class="clearfix">
                                <a href="https://www.xnph66.com/news333" title="">
                                    <span class="fl point">· </span>
                                    <span class="fl">关于督促P2P平台借款人积极履行还款义务的通告</span>
                                    <span class="fr newsTime-color">2018-08-14</span>
                                </a>
                            </li>


                            <li class="clearfix">
                                <a href="https://www.xnph66.com/news329" title="">
                                    <span class="fl point">· </span>
                                    <span class="fl">小牛普惠隐私政策</span>
                                    <span class="fr newsTime-color">2018-04-16</span>
                                </a>
                            </li>


                            <li class="clearfix">
                                <a href="https://www.xnph66.com/news323" title="">
                                    <span class="fl point">· </span>
                                    <span class="fl">小牛普惠信贷业务热线春节期间停线维护公告</span>
                                    <span class="fr newsTime-color">2018-02-11</span>
                                </a>
                            </li>


                        </ul>
                    </li>
                    <li class="news-type-section ">
                        <div class="clearfix  twoColor-title b-b">
                            <span class="fl  title">公司新闻</span>
                            <span class="fr detail-txt-line ">
                                <a href="https://www.xnph66.com/newspreview?newsType=02&amp;pageNum=1&amp;pageSize=12" class="fr">更多内容...</a>
                            </span>
                        </div>
                        <ul class="point-list">

                            <li class="clearfix">
                                <a href="https://www.xnph66.com/news344" title="">
                                    <span class="fl point">· </span>
                                    <span class="fl">以公益为纽带 传递企业温度 ——小牛普惠9月公益活动报导</span>
                                    <span class="fr newsTime-color">2018-10-12</span>
                                </a>
                            </li>

                            <li class="clearfix">
                                <a href="https://www.xnph66.com/news342" title="">
                                    <span class="fl point">· </span>
                                    <span class="fl">推进业务整合 加速转型升级 ——小牛普惠携手多家企业开创业务新模式</span>
                                    <span class="fr newsTime-color">2018-09-07</span>
                                </a>
                            </li>

                            <li class="clearfix">
                                <a href="https://www.xnph66.com/news340" title="">
                                    <span class="fl point">· </span>
                                    <span class="fl">践行企业责任 共建美好社会 ——小牛普惠8月公益活动报导</span>
                                    <span class="fr newsTime-color">2018-08-31</span>
                                </a>
                            </li>

                            <li class="clearfix">
                                <a href="https://www.xnph66.com/news337" title="">
                                    <span class="fl point">· </span>
                                    <span class="fl">支持实体经济 促进产业升级 ——小牛普惠与欧德士战略合作签约仪式成功举行</span>
                                    <span class="fr newsTime-color">2018-08-22</span>
                                </a>
                            </li>

                        </ul>
                    </li>
                    <li class="news-type-section ">
                        <div class="clearfix  twoColor-title b-b">
                            <span class="fl  title">行业动态</span>
                            <span class="fr detail-txt-line ">
                                <a href="https://www.xnph66.com/newspreview?newsType=03&amp;pageNum=1&amp;pageSize=12" class="fr">更多内容...</a>
                            </span>
                        </div>
                        <ul class="point-list">

                            <li class="clearfix">
                                <a href="https://www.xnph66.com/news343" title="">
                                    <span class="fl point">· </span>
                                    <span class="fl">“老赖”名下公积金、养老金、理财金、保险金统统能执行</span>
                                    <span class="fr newsTime-color">2018-09-14</span>
                                </a>
                            </li>

                            <li class="clearfix">
                                <a href="https://www.xnph66.com/news341" title="">
                                    <span class="fl point">· </span>
                                    <span class="fl">开学了，别让自己的失信记录影响孩子</span>
                                    <span class="fr newsTime-color">2018-09-03</span>
                                </a>
                            </li>

                            <li class="clearfix">
                                <a href="https://www.xnph66.com/news335" title="">
                                    <span class="fl point">· </span>
                                    <span class="fl">银保监会就进一步做好信贷工作 提升服务实体经济质效下发通知</span>
                                    <span class="fr newsTime-color">2018-08-20</span>
                                </a>
                            </li>

                            <li class="clearfix">
                                <a href="https://www.xnph66.com/news334" title="">
                                    <span class="fl point">· </span>
                                    <span class="fl">互金整治办召开会议 十项举措应对网贷风险</span>
                                    <span class="fr newsTime-color">2018-08-14</span>
                                </a>
                            </li>

                        </ul>
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
                </ul>
            </li>
        </ul>
    </div>
    <div class="clearfix copyright">
        <p>Copyright © 深圳市小牛普惠投资管理有限公司 备案号：粤ICP备16000223号-1</p>



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
