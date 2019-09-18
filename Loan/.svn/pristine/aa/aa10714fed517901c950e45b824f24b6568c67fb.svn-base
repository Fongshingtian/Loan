<%--
  Created by IntelliJ IDEA.
  User: 毛明峰
  Date: 2019/4/16
  Time: 9:17
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
    <title>修改轮播图</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/amazeui.min.css" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/admin.css" />
    <style>
        .keleyitable {
            width: 800px;
        }

        .keleyitable table, td, th {
            border: 1px solid green;margin-top:10px;
        }
        .klytd {width:100px;text-align:right
        }
        .hvttd {
            width:500px}
    </style>
</head>
<body>
        <form class="am-form" method="post" action="${pageContext.request.contextPath}/t2/upload" enctype="multipart/form-data">
            <table  class="am-table am-table-striped am-table-hover table-main">
                <thead>
                <tr>
                    <td class="klytd ">图片：</td>
                    <td class="hvttd">
                        <c:if test="${l!=0}">
                            <c:forEach items="${rotation}" var="r">
                                <input type="text" name="id" value="${r.id}">
                            <img src="${pageContext.request.contextPath}/upload/${r.route}" style="width: 20%">
                            </c:forEach>
                        </c:if>
                        <c:if test="${l==0}">
                            <img alt="" src="${pageContext.request.contextPath}/images/banner01.png"  style="width: 40%">
                            <input type="text" name="id" value="0">
                        </c:if>
                        <input type="file" id="xdaTanFileImg" onchange="xmTanUploadImg(this)"  name="file" accept="image/*"/>
                    </td>
                    <td rowspan="3"><img id="xmTanImg" style="width: 100%"/></td></tr>
                <tr>
                    <td colspan="3">
                        <input type="submit" value="确认"></td>
                </tr>
                </thead>
            </table>
        </form>
</body>
<script type="text/javascript">
    //判断浏览器是否支持FileReader接口
    if (typeof FileReader == 'undefined') {
        document.getElementById("xmTanDiv").InnerHTML = "<h1>当前浏览器不支持FileReader接口</h1>";
        //使选择控件不可操作
        document.getElementById("xdaTanFileImg").setAttribute("disabled", "disabled");
    }

    //选择图片，马上预览
    function xmTanUploadImg(obj) {
        var file = obj.files[0];

        console.log(obj);console.log(file);
        console.log("file.size = " + file.size);  //file.size 单位为byte

        var reader = new FileReader();

        //读取文件过程方法
        reader.onloadstart = function (e) {
            console.log("开始读取....");
        }
        reader.onprogress = function (e) {
            console.log("正在读取中....");
        }
        reader.onabort = function (e) {
            console.log("中断读取....");
        }
        reader.onerror = function (e) {
            console.log("读取异常....");
        }
        reader.onload = function (e) {
            console.log("成功读取....");

            var img = document.getElementById("xmTanImg");
            img.src = e.target.result;
            //或者 img.src = this.result;  //e.target == this
        }

        reader.readAsDataURL(file)
    }
</script>
<script type="text/javascript">
    //判断浏览器是否支持FileReader接口
    if (typeof FileReader == 'undefined') {
        document.getElementById("xmTanDiv2").InnerHTML = "<h1>当前浏览器不支持FileReader接口</h1>";
        //使选择控件不可操作
        document.getElementById("xdaTanFileImg2").setAttribute("disabled", "disabled");
    }

    //选择图片，马上预览
    function xmTanUploadImg2(obj) {
        var file = obj.files[0];

        console.log(obj);console.log(file);
        console.log("file.size = " + file.size);  //file.size 单位为byte

        var reader = new FileReader();

        //读取文件过程方法
        reader.onloadstart = function (e) {
            console.log("开始读取....");
        }
        reader.onprogress = function (e) {
            console.log("正在读取中....");
        }
        reader.onabort = function (e) {
            console.log("中断读取....");
        }
        reader.onerror = function (e) {
            console.log("读取异常....");
        }
        reader.onload = function (e) {
            console.log("成功读取....");

            var img = document.getElementById("xmTanImg2");
            img.src = e.target.result;
            //或者 img.src = this.result;  //e.target == this
        }

        reader.readAsDataURL(file)
    }
</script>
</html>
