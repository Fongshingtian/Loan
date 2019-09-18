<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2019\4\15 0015
  Time: 19:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<jsp:include page="/WEB-INF/jsp/common/resources.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top2.jsp"></jsp:include>
<head>
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="https://www.xnph66.com/HomePage/resources/dist/build/build.css?v=2.1.2">


    <link rel="stylesheet" type="text/css" href="https://www.xnph66.com/HomePage/resources/dist/css/less/product_style.css?v=2.1.2">

</head>
<body>

<font  align="center" color="#7fff00" size="5">贷款流程</font>
<div class="loan-process" style="height:58px"></div>

<div style=" width: 100%; height: 700px">
   <c:if test="${status==1}">
       <p align="center"> <font size="5" color="black">您的订单受理中1小时内审核完成请等待审核完成短信提醒</font></p>
   </c:if>
    <c:if test="${status==7}">
        <p align="center"> <font size="5" color="black">您的订单受理中1小时内第二次审核完成请等待审核完成短信提醒</font></p>
    </c:if>
   <c:if test="${status==2}">
      <p align="center">  <font size="5"  color="black">对不起您的申请审核失败请一个月后再来尝试</font></p>
       <p align="center"><font color="red" size="3">失败原因：${sm}</font></p>
   </c:if>
 <c:if test="${status==3}">
     <p align="center"> <font size="5" color="black">恭喜审核成功！！！！请在两小时内上传您的详细信息</font></p>
     <p align="center"><font size="5" color="black"> <a href="${pageContext.request.contextPath}/loan/mx?did=${did}">上传资料</a></font></p>
 </c:if>
    <c:if test="${status==5}">
        <p align="center"> <font size="5"  color="black">对不起您的申请审核失败请一个月后再来尝试</font></p>
        <p align="center"><font color="red" size="4">失败原因：${sm}</font></p>
    </c:if>
    <c:if test="${status==4}">
        <p align="center"><font size="5"  color="black">您已经成功申请贷款！！！！实际发放金额是<font color="red"size="5">${sjmoney}</font></font></p>
        <p align="center"> <font size="5"  color="black">收款银行卡号：${mx.cardNo}</font></p>
        <p align="center">${ll}</p>
    </c:if>
<br> <font align="center" size="5"><a href="${pageContext.request.contextPath}/t2/test"  color="black">返回主页</a></font>
</div>
<script type="text/javascript">


</script>
</body>
<jsp:include page="/WEB-INF/jsp/common/bottom.jsp"></jsp:include>
</html>
