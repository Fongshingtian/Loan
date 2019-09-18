<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<jsp:include page="/WEB-INF/jsp/common/resources.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top2.jsp"></jsp:include>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>小牛普惠问题列表页面</title>

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
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
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
    <style type="text/css">
        .question-list .question-answer {
            padding-left: 30px;
        }

        .question-list-hide {
            display: none;
        }

        .product-qusetion-right-content {
            *height: 300px;
            _height: 300px;
            min-height: 300px;
        }
    </style>
</head>
<body>
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
        <a href="question1.htm">常见问题</a>
    </div>
    <div class="body-wrap">
        <div class="wrap-left fl">
            <div class="wrap-left-nav">
                <div class="wrap-left-nav-main">
                    <ul class="question_list_ul">
                        <li class="bg-gray-lter">
                            <a href="javascript:;" class="block-a">
                                <span class="l-n-title">常见问题</span>
                                <div class="wrap-left-nav-mask"></div>
                            </a>
                        </li>
                        <li class="current">
                            <a href="javascript:;" class="block-a">
                                <span class="l-n-title">新手指南</span>
                                <div class="wrap-left-nav-mask" style="display: block"></div>
                            </a>
                        </li>
                        <li class="">
                            <a href="javascript:;" class="block-a">
                                <span class="l-n-title">申请问题</span>
                                <div class="wrap-left-nav-mask"></div>
                            </a>
                        </li>
                        <li class="">
                            <a href="javascript:;" class="block-a">
                                <span class="l-n-title">材料准备</span>
                                <div class="wrap-left-nav-mask"></div>
                            </a>
                        </li>
                        <li class="">
                            <a href="javascript:;" class="block-a">
                                <span class="l-n-title">还款问题</span>
                                <div class="wrap-left-nav-mask"></div>
                            </a>
                        </li>
                        <li class="">
                            <a href="javascript:;" class="block-a">
                                <span class="l-n-title">其他问题</span>
                                <div class="wrap-left-nav-mask"></div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="wrap-right fr">
            <div class="wrap-right-title">
                关于贷款常见问题
            </div>
            <div class="product-qusetion-right-content">
                <ul class="question-list">

                    <li class="clearfix">
                        <p class="question-name">Q：哪些城市可以申请贷款？</p>
                        <div class="mgt10 question-answer">
                            <p>
                                目前我司门店已覆盖全国各主要城市，同时辐射网外城市达数百座。凡申请人所在城市有我司门店（或其所在城市在我司门店的辐射范围之内）均可进行申请。详情请咨询我司客服400-8730-666。</p>
                            <p>
                                微秒贷目前在北京市、上海市、广州市、深圳市、成都市、重庆市、武汉市、昆明市、宁波市、郑州市、天津市、南京市、海口市、杭州市、温州市、青岛市、佛山市、兰州市、太原市、西安市、沧州市、玉溪市等63个城市开放申请。<br/>
                            </p>
                        </div>
                    </li>

                    <li class="clearfix">
                        <p class="question-name">Q：一次可以申请几笔贷款？</p>
                        <div class="mgt10 question-answer">
                            <p>一次只能申请一笔贷款，但是我司针对还款情况良好的优质客户，在第一笔贷款未结清的情况下可以进行追加贷。</p>
                        </div>
                    </li>

                    <li class="clearfix">
                        <p class="question-name">Q：贷款费率是如何设定的？</p>
                        <div class="mgt10 question-answer">
                            <p>各产品费率不同，同一产品期限不同，费率也不尽相同，具体费率以最终批核为主。</p>
                        </div>
                    </li>

                    <li class="clearfix">
                        <p class="question-name">Q：贷款审批的时间一般是多长?</p>
                        <div class="mgt10 question-answer">
                            <p>&quot;小牛普惠&quot;竭诚为客户提供方便快捷的优质贷款服务,只要客户资料齐备,审批时间一般为3-5个工作日,可靠轻松。 &nbsp;</p>
                        </div>
                    </li>

                    <li class="clearfix">
                        <p class="question-name">Q：申请额度大概是多少？</p>
                        <div class="mgt10 question-answer">
                            <p>根据各产品的申请条件，申请额度在1万元-20万元。具体额度需根据借款人提交申请资料后经过详细审核和综合评定才能确定。</p>
                        </div>
                    </li>

                </ul>
                <ul class="question-list" style="display:none">
                    <li class="clearfix">
                        <p class="question-name">Q：可以通过哪些方式申请贷款？</p>
                        <div class="mgt10 question-answer">
                            <p>1）直接去营业网点申请；</p>
                            <p>2）通过网站申请；</p>
                            <p>3）通过微信公众号申请。</p>
                        </div>
                    </li>


                    <li class="clearfix">
                        <p class="question-name">Q：申请被拒了，是怎么回事？</p>
                        <div class="mgt10 question-answer">
                            <p><span style="text-decoration: none;">贷款审批结果由我司系统综合审批评定，审核影响因素是多方面的，包括外部的经济环境、我司的抗风险能力及不同时期的政策调整等。具体可咨询我司客服人员。</span>
                            </p>
                        </div>
                    </li>


                    <li class="clearfix">
                        <p class="question-name">Q：借款流程是怎样的？</p>
                        <div class="mgt10 question-answer">
                            <p>提出申请 —— 提交所需资料 —— 资料审核 —— 签署合同 —— 贷款成功。</p>
                        </div>
                    </li>


                    <li class="clearfix">
                        <p class="question-name">Q：若现在为失业状态，是否可以申请？</p>
                        <div class="mgt10 question-answer">
                            <p>小牛普惠暂时不接受无业/学生人群的申请。</p>
                        </div>
                    </li>


                    <li class="clearfix">
                        <p class="question-name">Q：可以通过什么途径申请？</p>
                        <div class="mgt10 question-answer">
                            <p>可以通过小牛普惠营业网点填写申请表进行申请，或在官网/“小牛普惠服务号”微信公众号填写简单资料申请。</p>
                        </div>
                    </li>


                    <li class="clearfix">
                        <p class="question-name">Q：提交申请之后，要过多久才知道审核结果？</p>
                        <div class="mgt10 question-answer">
                            <p>1-3个工作日内，即可知道是否通过审核。</p>
                        </div>
                    </li>


                </ul>
                <ul class="question-list" style="display:none">
                    <li class="clearfix">
                        <p class="question-name">Q：影响贷款额度的因素有哪些？</p>
                        <div class="mgt10 question-answer">
                            <p>主要因素包括但不限于：1）收入情况；2）个人信用情况；3）负债水平。</p>
                        </div>
                    </li>

                    <li class="clearfix">
                        <p class="question-name">Q：借款人申请条件有哪些？</p>
                        <div class="mgt10 question-answer">
                            <p>1）&nbsp;申请人为自然人；</p>
                            <p>2）&nbsp;申请人持有效的中华人民共和国身份证（港、澳、台除外），具有完全民事行为能力；</p>
                            <p>3）&nbsp;申请人年龄在20(含)至60周岁之间。</p>
                        </div>
                    </li>
                    <li class="clearfix">
                        <p class="question-name">Q：申请人需提供哪些材料？</p>
                        <div class="mgt10 question-answer">
                            <p>借款申请相关信息、身份证明。借款人可根据所申请产品的具体要求，提供其他相关证明。详情请咨询我司客服400-8730-666。</p>
                        </div>
                    </li>


                    <li class="clearfix">
                        <p class="question-name">Q：有什么材料是必须要提供的？</p>
                        <div class="mgt10 question-answer">
                            <p>身份证、借款申请表、个人征信报告、个人银行流水。</p>
                        </div>
                    </li>


                    <li class="clearfix">
                        <p class="question-name">Q：是否可以补充什么材料以提高贷款额度？</p>
                        <div class="mgt10 question-answer">
                            <p>提供社保/学历证明/车辆/房产证明等辅助资料，有助于获取更高的额度批复。</p>
                        </div>
                    </li>


                    <li class="clearfix">
                        <p class="question-name">Q：个人银行流水有什么要求？</p>
                        <div class="mgt10 question-answer">
                            <p>微秒贷需要提供最近连续6个月主结算银行卡流水。</p>
                        </div>
                    </li>


                </ul>
                <ul class="question-list" style="display:none">
                    <li class="clearfix">
                        <p class="question-name">Q：我想一次性结清贷款,需要怎么办理?</p>
                        <div class="mgt10 question-answer">
                            <p>可亲临我司网点提交申请或拨打我司客服热线400-8730-666办理。</p>
                        </div>
                    </li>
                    <li class="clearfix">
                        <p class="question-name">Q：是否允许提前还款？</p>
                        <div class="mgt10 question-answer">
                            <p>可以，但我司需收取相应的提前还款违约金。</p>
                        </div>
                    </li>

                    <li class="clearfix">
                        <p class="question-name">Q：怎么确定自己扣款成功了？</p>
                        <div class="mgt10 question-answer">
                            <p>建议客户可在扣款日第二日拨打我司客服热线 400-8730-666进行查询。</p>
                        </div>
                    </li>

                    <li class="clearfix">
                        <p class="question-name">Q：贷款期限是多久？</p>
                        <div class="mgt10 question-answer">
                            <p>根据产品以及申请人资质不同，贷款期限在6期-36期之间，具体期限以审核为准。</p>
                        </div>
                    </li>
                    <li class="clearfix">
                        <p class="question-name">Q：如何知道我的扣款日以及扣款银行？</p>
                        <div class="mgt10 question-answer">
                            <p>可查看签订的贷款合同,详情咨询我司客服热线 400-777-1268。</p>
                        </div>
                    </li>

                    <li class="clearfix">
                        <p class="question-name">Q：还款期间出现逾期如何解决？</p>
                        <div class="mgt10 question-answer">
                            <p>如出现未按时还款需要支付违约金。</p>
                        </div>
                    </li>
                    <li class="clearfix">
                        <p class="question-name">Q：最长可以选择分多少期还款？</p>
                        <div class="mgt10 question-answer">
                            <p>微秒贷产品的最长期数为36期。</p>
                        </div>
                    </li>
                    <li class="clearfix">
                        <p class="question-name">Q：能否提前还款？</p>
                        <div class="mgt10 question-answer">
                            <p>可以提前还款，但可能会产生一定的违约金。</p>
                            <p><br/></p>
                        </div>
                    </li>
                    <li class="clearfix">
                        <p class="question-name">Q：如何还款？</p>
                        <div class="mgt10 question-answer">
                            <p>银行自动扣款，只需在每月扣款日之前，保证扣款银行卡有足够的余额即可。</p>
                        </div>
                    </li>
                    <li class="clearfix">
                        <p class="question-name">Q：什么时候还款？</p>
                        <div class="mgt10 question-answer">
                            <p style="text-indent: 0"><span
                                    style="font-size: 14px; font-family:'微软雅黑';&#39;Microsoft:YaHei&#39;">放款日即为每个月的还款日，例如张三在我司申请了一笔借款，2015年9月5日成功放款到张三的银行卡，张三选择的期数为12期，则张三需要从2015年10月5日开始还款，以后每个月的5日都要进行还款，直至12期还请。</span>
                            </p>
                        </div>
                    </li>

                </ul>
                <ul class="question-list" style="display:none">


                    <li class="clearfix">
                        <p class="question-name">Q：为什么需要面签？</p>
                        <div class="mgt10 question-answer">
                            <p>根据“亲核亲访”原则，贷款申请人必须亲自至申请所在城市核实身份，从而降低冒名申请贷款的风险。</p>
                        </div>
                    </li>


                    <li class="clearfix">
                        <p class="question-name">Q：面签后什么时候可以放款？</p>
                        <div class="mgt10 question-answer">
                            <p>提供的材料齐全且真实，面签第二天可以放款，若是周五面签，顺延到下周一放款，具体情况以我司审批为准。</p>
                        </div>
                    </li>


                    <li class="clearfix">
                        <p class="question-name">Q：微信端可以申请哪些贷款产品？</p>
                        <div class="mgt10 question-answer">
                            <p>微信端可以申请小牛工薪贷、小牛精英贷、小牛升值贷、小牛保单贷。</p>
                        </div>
                    </li>


                </ul>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</div>
<!--尾部-->
<jsp:include page="../common/bottom.jsp"></jsp:include>
<!-- Small modal -->
<script type="text/javascript" src="https://www.xnph66.com/HomePage/resources/dist/js/about.js"></script>
<script type="text/javascript" src="https://www.xnph66.com/HomePage/resources/dist/js/product/question_list.js"></script>
<script type="text/javascript">
    $('.selectpicker').on('rendered.bs.select', function () {

        $(this).parent().parent().find('.bootstrap-select-replace').remove();

    });
</script>

</body>
</html>