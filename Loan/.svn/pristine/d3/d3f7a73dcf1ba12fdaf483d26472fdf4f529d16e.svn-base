<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<jsp:include page="/WEB-INF/jsp/common/resources.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top2.jsp"></jsp:include>
<head>
    <jsp:include page="../common/resources.jsp"></jsp:include>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title></title>
    <meta name="keywords" content=""/>
    <meta name="description" content="小牛普惠产品,小牛普惠信贷中心包含小牛工薪贷、小牛精英贷、小牛农商贷、小牛业主贷、小牛车主贷、小牛惠农贷、小牛员工贷、小牛助学贷等"/>

    <!-- 页面自定义名称 -->

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->

    <!-- 是否为开发模式 -->

    <!-- 资源加载版本号 -->

    <!--[if lt IE 9]>
    <script src="https://www.xnph66.com/HomePage/resources/xnph/vender/bootstrap/dist/js/ie8-responsive-file-warning.js"></script>
    <![endif]-->
    <script src="../../js/zdzjs/product/ie-emulation-modes-warning.js"></script>

    <script src="http://cdn.bootcss.com/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!-- common -->

    <link rel="stylesheet" type="text/css" href="../../css/zdzcss/product/build.css">

    <link rel="stylesheet" type="text/css" href="../../css/zdzcss/product/product_style.css">
    <!--[if lt IE 9]>
    <script src="http://html5media.googlecode.com/svn/trunk/src/html5media.min.js"></script>
    <![endif]-->
    <!--头部预先加载js-->
    <!-- common -->
    <script type="text/javascript" src="../../js/zdzjs/product/build.js"></script>
    <!-- 百度统计-->
    <script type="text/javascript">
        var XnphVideoPlaying = function () {
            console.log('nothing');
        };
    </script>

    <script>
        var _hmt = _hmt || [];
        (function () {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?d249a44e45d00944e513d824188f2185";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();

        var IsPlay = false;
        XnphVideoPlaying = function () {

            if (!IsPlay && _hmt) {
                _hmt.push(['_trackEvent', 'XNPH_VIDEO', 'play', 'white-collar workers']);
                IsPlay = true;
                console.log('baidu _trackEvent video play');
            }
        }
    </script>

    <!-- https不支持腾讯在线客服js，建议使用图片或者文字超链接发起在线咨询 -->
    <!-- <script charset="utf-8" type="text/javascript" src="https://wpa.b.qq.com/cgi/wpa.php"></script> -->

    <script type="text/javascript" src="../../js/zdzjs/product/jquery.min.js"></script>
    <script type="text/javascript" src="../../js/zdzjs/product/layer.js"></script>
    <script type="text/javascript">

        function openDetail(productCode, productType, qrPath) {
            var url = "https://www.xnph66.com/loanapply?pid=" + productCode;
            if (productType == "1") {
                $("#mask").css('display', 'block');
                $("#mask img").attr('src', 'https://website-img.xnph66.com/' + qrPath);
                $("#mask").click(function () {
                    $(this).css('display', 'none')
                })
                $("#mask img").click(function (event) {
                    event.stopPropagation();
                })
            } else {
                location = url;
            }
        }
    </script>
</head>

<body>
<div id="mask" class="mask">
    <img src="product1.htm" alt="图片">
</div>
<!--头部-->

<input type="hidden" value="https://www.xnph66.com" id="txt-base-url"/>
<input type="hidden" value="https://www.xnph66.com/HomePage/resources" id="txt-resource-url"/>
<input type="hidden" value="https://website-img.xnph66.com/" id="txt-img-url"/>

<!--右侧停靠 begin-->
<div class="BizQQWPA_wrap fix-r-area">
    <div class="fra-wrap">
        <a class="f-btn-ic ic-customer-feedback" href="user_feedback.htm"></a>
        <!-- <a class="f-btn-ic ic-qq-server" id="BizQQWPA"></a> -->
        <a class="f-btn-ic ic-wechat-server"><i></i></a>
        <a class="f-btn-ic ic-back-top"
           href="javascript:document.documentElement.scrollTop = document.body.scrollTop = 0;"></a>
    </div>
</div>
<!--右侧停靠 end-->
<div class="box-gry box-paddingb">
    <div class="crumbs">
        <a href="www_xnph66_default_2.html">首页&nbsp</a>&gt;
        <a href="product1.htm">产品介绍</a>
    </div>
    <div class="body-wrap">
        <div class="wrap-left fl">
            <div class="wrap-left-nav">
                <div class="wrap-left-nav-main">
                    <ul id="product_nav">
                        <li class="bg-gray-lter">
                            <a href="javascript:;" class="block-a">
                                <span class="l-n-title">产品介绍</span>
                                <div class="wrap-left-nav-mask"></div>
                            </a>
                        </li>
                        <li class="current">
                            <a href="javascript:;" class="block-a">
                                <span class="l-n-title">消费分期</span>
                                <img class="nav-arrow" src="../../images/zdzimgs/images/up_icon.png">
                                <div class="wrap-left-nav-mask" style="display: block"></div>
                            </a>
                            <ul class="nav-sub" style="margin-left:0">
                                <%--左边栏--%>
                           <c:forEach var="p" items="${plist}">
                                <li>
                                    <a href="/produce/todetil?pid=${p.pid}" target="_blank" class="block-a">
                                        <span class="l-n-title">${p.pname}</span>
                                    </a>
                                </li>
                           </c:forEach>

                            </ul>
                        </li>
                        <li class="">
                            <a href="/produce/toquestion" class="block-a">
                                <span class="l-n-title">常见问题</span>
                                <img class="nav-arrow" src="../../images/zdzimgs/images/up_icon.png">
                                <div class="wrap-left-nav-mask"></div>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        <div class="wrap-right fr">
            <div class="wrap-right-title">
                产品介绍
            </div>
            <div class="product-general-right-content branch-list product-list">
                <ul>
                    <c:forEach items="${plist}" var="ps">
                        <li class="clearfix ">
                            <div class="fl">
                                <img src="${pageContext.request.contextPath}/upload/${ps.picture}" width="86" height="86">
                            </div>
                            <div class="branch-num">${ps.pname}<span></span></div>
                            <div class="product-num fl">
                                <p class="branch-list-title">借款额度：</p>
                                <p><em>${ps.jked}</em>万</p>
                            </div>
                            <div class="product-time fl">
                                <p class="branch-list-title">审核时效：</p>
                                <p>
                                    ${ps.shtime}
                                </p>
                            </div>
                            <div class="product-intro fl">
                                <p>${ps.ptext}...<a class="text-orange" href="/produce/todetil?pid=${ps.pid}">查看详情 </a></p>
                            </div>
                            <a class="btn btn-orange w-s m-t-xs" href="/loan/zxsq">立即申请</a>
                        </li>
                    </c:forEach>

                </ul>

                <ul style="display:none;opacity:0;margin-top:20px">
                </ul>

            </div>
    </div>
        <div class="clearfix"></div>
    </div>
</div>
<!--尾部-->

<!--贷款协议-->
<div style="position:relative;height:90px;width: 1347px;">
    <jsp:include page="../common/bottom.jsp"></jsp:include>
</div>
<!-- Small modal -->
<!-- Modal -->
<script type="text/javascript" src="https://www.xnph66.com/HomePage/resources/dist/js/about.js"></script>
<script type="text/javascript" src="https://www.xnph66.com/HomePage/resources/dist/js/product/product_list.js"></script>
<script type="text/javascript">
    $('.selectpicker').on('rendered.bs.select', function () {
        $(this).parent().parent().find('.bootstrap-select-replace').remove();
    });
    $('#cpjs').addClass( "zm_cura");
</script>

</body>
</html>