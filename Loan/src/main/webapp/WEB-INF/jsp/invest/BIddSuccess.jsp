<%--
  Created by IntelliJ IDEA.
  User: asus
  Date: 2019/5/6
  Time: 9:39
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>购买成功界面</title>
    <jsp:include page="/WEB-INF/jsp/common/resources.jsp"></jsp:include>
    <jsp:include page="/WEB-INF/jsp/common/top.jsp"></jsp:include>
    <jsp:include page="/WEB-INF/jsp/common/top2.jsp"></jsp:include>
</head>

<body>
<div style="height: 500px;">
    <span style=" font-size: 50px;margin-left: 500px;color: aqua;">${msg}</span>
</div>
</body>
<jsp:include page="/WEB-INF/jsp/common/bottom.jsp"></jsp:include>
</html>
