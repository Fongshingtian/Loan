<%--
  Created by IntelliJ IDEA.
  User: 毛明峰
  Date: 2019/4/24
  Time: 10:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<jsp:include page="/WEB-INF/jsp/common/resources.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top2.jsp"></jsp:include>
<head>
    <%--<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/mmfcs.css">--%>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/images/images/css/kb.css">
    <link rel="shortcut icon" href="//image.xiaoniu88.com/static/WebXn/dist/images/favicon.ico" type="image/x-icon"/>
    <link rel="stylesheet" href="//image.xiaoniu88.com/static/WebXn/dist/css/base-56e256b865.css"/>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/scatteredstyle.css">
    <%--<link rel="stylesheet" href="//image.xiaoniu88.com/static/WebXn/dist/page/product/list/css/style-ceb45e7681.css" />--%>
    <script src="${pageContext.request.contextPath}/js/jquery-1.7.2.min.js"></script>
    <script type="text/javascript" src="//image.xiaoniu88.com/static/WebXn/dist/lib/base-6100562494.js"></script>


    <script>
        window.global = {
            cdn: "//image.xiaoniu88.com",
            siteroot: "http://www.xiaoniu88.com",
            staticPath: "//image.xiaoniu88.com/static/WebXn/dist",
            contextPath: "/product",
            serverTime: "1555846483516" * 1,
            userId: "",
            isLogin: false
        }
    </script>

    <script type="text/javascript"
            src="//image.xiaoniu88.com/static/WebXn/dist/module/common/common-83987ed24e.js"></script>
    <script>
        $(function () {
            seajs.use('module/common/common')
        })
    </script>
    <link rel="stylesheet"
          href="//image.xiaoniu88.com/static/WebXn/dist/page/product/toolList/css/style-2b0c5fa50e.css"/>
</head>
<body>
<script>
    var qx=0;
    var ll=0;
    var hk=0;
    var sy=0;
    var px=0;
    var mintime="0";
    var maxtime="0";
    var minmoney="0";
    var maxmoney="0";
    var hkfs="0";
    var minsy="0";
    var maxsy="0";
    var spx="0";
    var page=${pa};
</script>
<!-- 头部 -->

<!--[if lt IE 9]>
<script src="//image.xiaoniu88.com/static/WebXn/dist/lib/html5/html5-083d84e804.js"></script>
<![endif]-->
<%--投标工具散标装让--%>
<div class="product-menu-contanier" id="productMenu">
    <ul class="product-menu clearfix">
        <li>
            <a href="/product/portal/index" id="menu_optimize">投标工具 (<em id="optimizeCount"
                                                                                         data-count="11">11</em>)</a>
        </li>
        <li>
            <a href="/product/list?type=common" id="menu_common" class=" active">散标 (<em id="commonCount">售罄</em>)</a>
        </li>
        <li>
            <a href="/product/list?type=transfer" id="menu_transfer">转让专区 (<em id="transferCount">99+</em>)</a>
        </li>
    </ul>
</div>



<div class="main">
    <div class="container" id="container">
        <div class="filtrate" id="filtrateModel">
            <div class="content">
                <dl data-key="term" class="term">
                    <dt>项目期限：</dt>
                    <dd class="first-label active"  id="qx0"><a href="javascript:;" onclick="qxd(0)">不限</a></dd>
                    <dd  id="qx1" data-min="0" data-max="3" ><a href="javascript:;"onclick="qxd(1)">3个月以下</a></dd>
                    <dd  id="qx2" data-min="3" data-max="6" ><a href="javascript:;"onclick="qxd(2)">3-6个月</a></dd>
                    <dd  id="qx3" data-min="6" data-max="9" ><a href="javascript:;"onclick="qxd(3)">6-9个月</a></dd>
                    <dd  id="qx4" data-min="9" data-max="12" ><a href="javascript:;"onclick="qxd(4)">9-12个月</a></dd>
                    <dd id="qx5" data-min="12"><a href="javascript:;" data-max onclick="qxd(5)">12个月以上</a></dd>
                </dl>
                <dl data-key="annualRate" class="annualRate">
                    <dt>参考利率：</dt>
                    <dd class="first-label active" id="ll0"><a href="javascript:;" onclick="lld(0)">不限</a></dd>
                    <dd id="ll1" data-min="0" data-max="7" ><a href="javascript:;"onclick="lld(1)">7.00%以下</a></dd>
                    <dd id="ll2" data-min="7" data-max="8"><a href="javascript:;" onclick="lld(2)">7.00-8.00%</a></dd>
                    <dd id="ll3" data-min="8" data-max="10"><a href="javascript:;" onclick="lld(3)">8.00-10.00%</a></dd>
                    <dd id="ll4"data-min="10" data-max><a href="javascript:;"  onclick="lld(4)">10.00%以上</a></dd>
                </dl>
                <dl data-key="repayMode" class="repayMode">
                    <dt>还款方式：</dt>
                    <dd class="first-label active" data-min="0" id="hk0"><a href="javascript:;" onclick="hkd(0)">不限</a></dd>
                    <c:forEach items="${hkfs}" var="l" varStatus="status">
                        <dd id="hk${status.index+1}" data-min="${l}"><a href="javascript:;" onclick="hkd(${status.index+1})">${l}</a></dd>
                    </c:forEach>
                </dl>
                <dl data-key="surplusAmount" class="surplusAmount">
                    <dt>剩余金额：</dt>
                    <dd class="first-label active" id="sy0"><a href="javascript:;" onclick="syd(0)">不限</a></dd>
                    <dd id="sy1" data-min="0" data-max="5000"><a href="javascript:;" onclick="syd(1)">5千以内</a></dd>
                    <dd id="sy2" data-min="5000" data-max="10000"><a href="javascript:;" onclick="syd(2)">5千-1万</a></dd>
                    <dd id="sy3" data-min="10000" data-max="50000"><a href="javascript:;" onclick="syd(3)">1万-5万</a></dd>
                    <dd id="sy4" data-min="50000"><a href="javascript:;" data-max onclick="syd(4)">5万以上</a></dd>
                </dl>
            </div>
        </div>
        <div class="content">
            <a name="listStart" class="list-start"></a>
            <div class="list-main" style="text-align: center;">
                <div class="sorting" id="sortingModel">
                    <span class="sort active" data-val data-sorttype="0" id="px0" onclick="pxd(0)">默认</span>
                    <span class="sort" data-val data-sorttype="rate" id="px1" onclick="pxd(1)">参考利率<i class="icon icon-down"></i></span>
                    <span class="sort" data-val data-sorttype="term" id="px2" onclick="pxd(2)">期限<i class="icon icon-down"></i></span>
                    <span class="sort" data-val data-sorttype="amount" id="px3" onclick="pxd(3)">项目金额<i class="icon icon-down"></i></span>
                </div>
                <div id="list">
                    <div class="list" id="listModel">
                        <c:if test="${s==0}">
                        <div class="g-tc data-empty"><p>暂无记录</p></div>
                        </c:if>

                        <c:forEach items="${l}" var="s">
                            <a href="/scatter/xq?id=${s.id}">
                            <div class="item sell-out" data-href="">
                                <div class="info">
                                    <dl class="title">
                                        <dt>小额消费贷</dt>
                                        <dd>消费贷${s.uid}</dd>
                                    </dl>
                                    <dl class="earnings">
                                        <dt>${s.rate}%</dt>
                                        <dd>参考利率  <i class="icon icon-question"  title="小牛在线P2P互联网金融平台所有项目参考利率是在参考同类型工具历史数据得出，并不代表实际收益，市场有风险，出借需谨慎。"></i></dd>
                                    </dl>
                                    <dl class="limit">
                                        <dt>${s.term}个月<i class="text-tag">1个月可转</i></dt>
                                        <dd>期限</dd>
                                    </dl>
                                    <dl class="starting-amount">
                                        <dt>${s.amount-s.money}</dt>
                                        <dd>剩余金额</dd>
                                    </dl>
                                    <dl class="build-date">
                                        <dt>${s.hkfs}</dt>
                                        <dd>还款方式</dd>
                                    </dl>
                                    <dl class="operate trading">
                                        <dd>成功交易时间</dd>
                                        <dd><c:if test="${s.end==0}">未结束</c:if>
                                            <c:if test="${s.end!=0}">${s.time}</c:if>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            </a>
                        </c:forEach>
                    </div>
                </div>
                <div class="kbdiv5" style="visibility:hidden;" id="kbdiv5">
                    <div class="kbdiv6"><span class="kbspan1">第1页/共 ${p}页</span>
                        <div class="kbdiv7">
                            <div class="kbdiv8"><a href="#"><span  class="kbfont3">首页</span></a></div>
                            <div class="kbdiv9"></div>
                            <div class="kbdiv8"><a href="#"><span  class="kbfont3">上一页</span></a></div>
                            <div class="kbdiv9"></div>
                            <c:if test="${p>=5}">
                                <c:forEach begin="0" end="4" varStatus="status">
                                    <c:if test="${status.index+1==pa}">
                                        <div class="kbdiv8 onthisa"><a href="#"><span  class="kbfont3 onthisa2">${status.index+1}</span></a></div>
                                    </c:if>
                                    <c:if test="${status.index+1!=pa}">
                                        <div class="kbdiv8"><a href="#"><span  class="kbfont3">${status.index+1}</span></a></div>
                                    </c:if>
                                </c:forEach>
                            </c:if>
                            <c:if test="${p<5}">
                                <c:forEach begin="1" end="${p}" varStatus="status">
                                    <c:if test="${status.index==1}">
                                        <div class="kbdiv8 onthisa"><a href="#"><span  class="kbfont3 onthisa2">${status.index}</span></a></div>
                                    </c:if>
                                    <c:if test="${status.index!=1}">
                                        <div class="kbdiv8"><a href="#"><span  class="kbfont3">${status.index}</span></a></div>
                                    </c:if>
                                </c:forEach>
                            </c:if>
                            <div class="kbdiv9"></div>
                            <div class="kbdiv8"><a href="#"><span  class="kbfont3">下一页</span></a></div>
                            <div class="kbdiv9"></div>
                            <div class="kbdiv8"><a href=""><span  class="kbfont3">末页</span></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



</body>
<jsp:include page="/WEB-INF/jsp/common/bottom.jsp"></jsp:include>
<script>
    function qxd(i){
        var ids="qx"+i;
        var sid='qx'+qx;
        $('#'+sid).removeClass("active");
        $('#'+ids).addClass("active");
        qx=i;
        var sssq="#"+ids;
        mintime = $(sssq).attr('data-min');
        maxtime = $(sssq).attr('data-max');
        ajx(mintime,maxtime,minmoney,maxmoney,hkfs,minsy,maxsy,spx,page);
    }
    function lld(i){
        var ids="ll"+i;
        var sid='ll'+ll;
        $('#'+sid).removeClass("active");
        $('#'+ids).addClass("active");
        ll=i;
        var sssq="#"+ids;
        minmoney = $(sssq).attr('data-min');
        maxmoney = $(sssq).attr('data-max');
        ajx(mintime,maxtime,minmoney,maxmoney,hkfs,minsy,maxsy,spx,page);
    }
    function hkd(i){
        var ids="hk"+i;
        var sid='hk'+hk;
        $('#'+sid).removeClass("active");
        $('#'+ids).addClass("active");
        hk=i;
        var sssq="#"+ids;
        hkfs = $(sssq).attr('data-min');
        ajx(mintime,maxtime,minmoney,maxmoney,hkfs,minsy,maxsy,spx,page);
    }
    function syd(i){
        var ids="sy"+i;
        var sid='sy'+sy;
        $('#'+sid).removeClass("active");
        $('#'+ids).addClass("active");
        sy=i;
        var sssq="#"+ids;
        minsy = $(sssq).attr('data-min');
        maxsy = $(sssq).attr('data-max');
        ajx(mintime,maxtime,minmoney,maxmoney,hkfs,minsy,maxsy,spx,page);
    }
    function pxd(i){
        var ids="px"+i;
        var sid='px'+px;
        $('#'+sid).removeClass("active");
        $('#'+ids).addClass("active");
        px=i;
        var sssq="#"+ids;
        spx = $(sssq).attr('data-sorttype');
        ajx(mintime,maxtime,minmoney,maxmoney,hkfs,minsy,maxsy,spx,page);
    }
    function ajx(mintime,maxtime,minmoney,maxmoney,hkfs,minsy,maxsy,px,page){
        if(mintime==null || mintime==""){
            mintime="0";
        }
        if(maxtime==null || maxtime==""){
            maxtime="0";
        }
        if(minmoney==null || minmoney==""){
            minmoney="0";
        }
        if(maxmoney==null || maxmoney==""){
            maxmoney="0";
        }
        if(hkfs==null || hkfs==""){
            hkfs="0";
        }
        if(minsy==null || minsy==""){
            minsy="0";
        }
        if(maxsy==null || maxsy==""){
            maxsy="0";
        }
        if(spx==null || spx==""){
            px="0";
        }
        alert(hkfs);
        alert(spx);
        $.post("fastJSONs3", {mintime:mintime,maxtime:maxtime,minmoney:minmoney,maxmoney:maxmoney,hkfs:hkfs,minsy:minsy,maxsy:maxsy,px:spx,i:page}, function (data) {
            alert(data.uer.length);
        }, "json");
    }
    if (${s!=0}){
        $("#kbdiv5").css("visibility","visible");
    }
</script>
</html>
