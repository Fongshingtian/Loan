<%--
  Created by IntelliJ IDEA.
  User: 毛明峰
  Date: 2019/4/24
  Time: 20:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<ul class="cms-side-bd" style="visibility: visible;">
    <li>
        <a class="cms-side-sub"  onclick="cm(1)">关于中兴</a><i class="down" id="i1"></i>
        <ul class="cms-side-list" id="t1">
            <li  class="actives" id="u1l1">
                <a href="${pageContext.request.contextPath}/t2/backoneNew?id=1" id="u1l1a1">平台介绍</a>
            </li>
            <li  class="actives" id="u1l2">
                <a href="${pageContext.request.contextPath}/dis/honor" id="u1l2a2">资质荣誉</a>
            </li>
            <li  class="actives" id="u1l3">
                <a href="${pageContext.request.contextPath}/dis/collaborator" id="u1l3a3">合作伙伴</a>
            </li>
            <li  class="actives" id="u1l4">
                <a href="/t2/backoneNew?id=10" id="u1l4a4">发展历程</a>
            </li>
            <li  class="actives" id="u1l5">
                <a href="/t2/backoneNew?id=2" id="u1l5a5">重大事项</a>
            </li>
            <li  class="actives" id="u1l6">
                <a href="/dis/mtkb" id="u1l6a6">媒体快报</a>
            </li>
            <li  class="actives" id="u1l7">
                <a href="/t2/backoneNew?id=3" id="u1l7a7">联系我们</a>
            </li>
        </ul>
    </li>
    <li>
        <a class="cms-side-sub" onclick="cm(2)">合规备案</a><i class="down" id="i2"></i>
        <ul class="cms-side-list" id="t2">
            <li  class="actives" id="u2l1">
                <a href="/t2/backoneNew?id=4" id="u2l1a1">备案信息</a>
            </li>
            <%--<li  class="actives" id="u2l2">--%>
                <%--<a href="#" id="u2l2a2">财务审计</a>--%>
            <%--</li>--%>
            <li  class="actives" id="u2l3">
                <a href="/dis/report" id="u2l3a3">合规报告</a>
            </li>
            <%--<li  class="actives" id="u2l4">--%>
                <%--<a href="#" id="u2l4a4">法律法规</a>--%>
            <%--</li>--%>
        </ul>
    </li>
    <li>
        <a class="cms-side-sub" onclick="cm(3)">业务介绍</a><i class="down" id="i3"></i>
        <ul class="cms-side-list" id="t3">
            <li  class="actives" id="u3l1">
                <a href="/t2/backoneNew?id=5" id="u3l1a1">消费金融</a>
            </li>
            <li  class="actives" id="u3l2">
                <a href="/t2/backoneNew?id=6" id="u3l2a2">信贷金融</a>
            </li>
            <li  class="actives" id="u3l3">
                <a href="/t2/backoneNew?id=7" id="u3l3a3">收费标准</a>
            </li>
        </ul>
    </li>
    <%--<li>--%>
        <%--<a class="cms-side-sub" onclick="cm(4)">运营信息</a><i class="down" id="i4"></i>--%>
        <%--<ul class="cms-side-list" id="t4">--%>
            <%--<li  class="actives" id="u4l1">--%>
                <%--<a href="#" id="u4l1a1">运营数据</a>--%>
            <%--</li>--%>
            <%--<li  class="actives" id="u4l2">--%>
                <%--<a href="#" id="u4l2a2">运营报告</a>--%>
            <%--</li>--%>
        <%--</ul>--%>
    <%--</li>--%>
    <li>
        <a class="cms-side-sub" onclick="cm(5)">保障体系</a><i class="down" id="i5"></i>
        <ul class="cms-side-list" id="t5">
            <li  class="actives" id="u5l1">
                <a href="/t2/backoneNew?id=8" id="u5l1a1">保障方式</a>
            </li>
            <li  class="actives" id="u5l2">
                <a href="/t2/backoneNew?id=9" id="u5l2a2">风险管理</a>
            </li>
        </ul>
    </li>
</ul>
</body>
</html>
