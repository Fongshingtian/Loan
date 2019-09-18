<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
	<title>轮播图展示</title>
</head>
<body>
            <table align="center">
                <tr align="center">
                    <c:forEach items="${rotation}" var="r">
                        <td><img src="${pageContext.request.contextPath}/upload/${r.route}" width="134px" height="46"></td>
                    </c:forEach>
                    <c:forEach begin="${l}" end="3">
                        <td><img src="${pageContext.request.contextPath}/images/banner01.png" width="134px" height="46"></td>
                    </c:forEach>
                </tr>
                <tr align="center">
                    <c:forEach items="${rotation}" var="r">
                        <td><a href="${pageContext.request.contextPath}/t2/test3?id=${r.id}">修改</a></td>
                    </c:forEach>
                    <c:forEach begin="${l}" end="3">
                        <td><a href="${pageContext.request.contextPath}/t2/test3">添加</a></td>
                    </c:forEach>
                </tr>
            </table>
</body>
</html>