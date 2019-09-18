<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
    <title>添加图</title>
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
<form class="am-form" method="post" action="${pageContext.request.contextPath}/dis/adduploadcoll" enctype="multipart/form-data">
    <table  class="am-table am-table-striped am-table-hover table-main">
        <thead>
        <tr>
            <td class="klytd ">${s}图片：</td>
            <td class="hvttd">
                    <img alt="" src="${pageContext.request.contextPath}/images/bf4e8a9d8056e9aef4a9b73f29bbe934.jpg"  style="width: 60px;height:60px;">
                    <input type="hidden" name="id" value="${l}">
                <input type="text" name="title" placeholder="网站路径">
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