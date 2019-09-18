<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2019\4\21 0021
  Time: 19:29
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<jsp:include page="/WEB-INF/jsp/common/resources.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top2.jsp"></jsp:include>
<head>
    <link rel="shortcut icon" href="//image.xiaoniu88.com/static/WebXn/dist/images/favicon.ico" type="image/x-icon"/>
    <link rel="stylesheet" href="//image.xiaoniu88.com/static/WebXn/dist/css/base-56e256b865.css"/>
    <script type="text/javascript" src="//image.xiaoniu88.com/static/WebXn/dist/lib/base-6100562494.js"></script>
    <script src="${pageContext.request.contextPath}/js/jquery-1.7.2.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.min.js"></script>

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

<!-- 头部 -->

<!--[if lt IE 9]>
<script src="//image.xiaoniu88.com/static/WebXn/dist/lib/html5/html5-083d84e804.js"></script>
<![endif]-->
<%--投标工具散标装让--%>
<div class="product-menu-contanier" id="productMenu">
    <ul class="product-menu clearfix">
        <li>
            <a href="${pageContext.request.contextPath}/invest/toinvest" class=" active">投标工具 (<em id="optimizeCount"
                                                                                         data-count="11">10</em>)</a>
        </li>
        <li>
            <a href="${pageContext.request.contextPath}/scatter/index" id="menu_common">散标 (<em id="commonCount">售罄</em>)</a>
        </li>
       <%-- <li>
            <a href="/product/list?type=transfer" id="menu_transfer">转让专区 (<em id="transferCount">99+</em>)</a>
        </li>--%>
    </ul>
</div>


<%--body--%>
<div class="toolList-content" id="contanier">
    <div class="list-box">
        <div class="list-title"><h3 class="new">为您推荐</h3></div>
        <div class="list-row">
            <c:forEach items="${zbgjList}" var="zbgj">
                <a class="row-item g-cf " href="${pageContext.request.contextPath}/invest/selinvestbyid/${zbgj.sid}/${zbgj.period}">
                    <div class="label-content"></div>
                    <dl class="col-1">
                        <dt>新人专享高收益</dt>
                        <dd><span class="black">  单笔限额${zbgj.quota} |</span> <em>仅限累积投标少于3次用户</em></dd>
                    </dl>
                    <dl class="col-2">
                        <dt><big>${zbgj.interest}</big>% <span class="orange">+ <big>5.00</big>%</span> <span
                                class="text-tag">新手奖励</span>
                        </dt>
                        <dd>参考利率<i class="icon-question js_poshytip"
                                   title="小牛在线P2P互联网金融平台所有项目参考利率是在参考同类型工具历史数据得出，<br>并不代表实际收益，市场有风险，出借需谨慎。"></i></dd>
                    </dl>
                    <dl class="col-3">
                        <dt>${zbgj.period}</dt>
                        <dd>锁定期 | 持满自动转让</dd>
                    </dl>
                    <dl class="col-4">
                        <dt>${zbgj.amount}</dt>
                        <dd>
                            <c:if test="${zbgj.amount>0}">
                                可加入
                            </c:if>
                            <c:if test="${zbgj.amount<=0}">
                                已售罄
                            </c:if>
                        </dd>
                    </dl>
                    <dl class="col-5">
                        <dd><em class="btn-primary ">立即加入</em></dd>

                    </dl>
                </a>
            </c:forEach>
        </div>
    </div>
    <div class="list-box">
        <div class="list-title"><h3 class="new">到期自动转让</h3> <span>优享牛</span></div>
        <div class="list-col g-cf col5">
            <c:forEach items="${yunlist}" var="yun">
                <a class="col-item g-cf disabled" href="${pageContext.request.contextPath}/invest/selinvestbyidy/${yun.sid}/${yun.period}">
                    <div class="label-content">
                        <span class="label js_poshytip" style="color:#FFFFFF;background:#ef7a46;"
                              title="拿7.8%返现+6888奖金→">奋斗季</span>
                    </div>
                    <div class="col-item-text add-rate"><p class="orange p1">
                        <big>${yun.interest}</big>%<span class="add-rate">+0.80%<i>限时</i></span></p>
                        <p class="p2">参考利率<i class="icon-question js_poshytip"
                                             title="小牛在线P2P互联网金融平台所有项目参考利率是在参考同类型工具历史数据得出，<br>并不代表实际收益，市场有风险，出借需谨慎。"></i>
                        </p>
                        <p class="p3">${yun.period}</p>
                        <p class="p4">锁定期 | 持满自动转让 </p>
                    </div>
                    <span class="btn-primary">
                       <c:if test="${yun.amount>0}">
                           可加入
                       </c:if>
                        <c:if test="${yun.amount<=0}">
                            已售罄
                        </c:if>

                   </span>
                </a>
            </c:forEach>

        </div>
    </div>

   <%-- <div class="list-box">
        <div class="list-title"><h3>周期增息，周期可转</h3> <span>升财牛</span></div>
        <div class="list-row yxn">

            <c:forEach items="${scnlist}" var="scn">
                <a class="row-item g-cf " href="#">
                    <div class="label-content"></div>
                    <dl class="col-1">
                        <dt class="orange">
                            <span>${scn.interest}</span> <span class="icon-line">升至</span>
                            <big>
                                ${scn.interest*1.4}
                            </big>%
                        </dt>
                        <dd>参考利率<i class="icon-question js_poshytip"
                                   title="小牛在线P2P互联网金融平台所有项目参考利率是在参考同类型工具历史数据得出，<br>并不代表实际收益，市场有风险，出借需谨慎。"></i></dd>
                    </dl>
                    <dl class="col-2">
                        <dt>每${scn.period}开放转让</dt>
                        <dd>锁定期</dd>
                    </dl>
                    <dl class="col-3">
                        <dt>${scn.amount}元</dt>
                        <dd>
                            <c:if test="${scn.amount>0}">
                                可加入
                            </c:if>
                            <c:if test="${scn.amount<=0}">
                                已售罄
                            </c:if>
                        </dd>
                    </dl>
                    <dl class="col-4">
                        <dd><em class="btn-primary enabled">立即加入</em></dd>
                    </dl>
                </a>

            </c:forEach>
        </div>
    </div>--%>

</div>



</body>
<jsp:include page="/WEB-INF/jsp/common/bottom.jsp"></jsp:include>
</html>
