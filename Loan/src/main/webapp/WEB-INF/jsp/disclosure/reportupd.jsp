<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!doctype html>
<html>
<head>
    <title>Title</title>
    <script type="text/javascript" src="/js/jquery-1.7.2.min.js"></script>
    <script type="text/javascript" src="/js/wangEditor.js"></script>
    <script type="text/javascript" src="/js/wangEditor.min.js"></script>

</head>
<body>
<form class="am-form" method="post" action="${pageContext.request.contextPath}/dis/addreport" enctype="multipart/form-data">
    <table  class="am-table am-table-striped am-table-hover table-main">
        <thead>
        <tr>
            <td class="klytd ">展示图片：
                <input type="file" id="xdaTanFileImg" onchange="xmTanUploadImg(this)"  name="file" accept="image/*"/>
                <br><span>标题</span>
                <input type="text"  name='title'  value='${one.tittle}' class="input">
            </td>
            <td rowspan="3"><img id="xmTanImg" style="width: 100%"/></td></tr>
        <tr>
            <td>
                <div style="align:margin 0 auto" id='editor'>
                    <p>${one.content }</p>
                </div>
            </td>
        </tr>
        <tr>
            <td colspan="3">
                <input type="hidden" id='contents' name='content'>
                <input type="submit" value="保存修改" onclick="getcontents();">
            </td>
        </tr>
        </thead>
    </table>
</form>
<div style="text-align:center;">
</div>
<script type="text/javascript" charset="utf-8">
    function getcontents(){
        var txt=editor.txt.html();
        document.getElementById("contents").value=txt;
    }
</script>
<script type="text/javascript">
    var E =window.wangEditor;
    var editor=new E('#editor');
    //让文本编译器能上传图片
    editor.customConfig.uploadImgShowBase64 =true;
    editor.create();
</script>
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
</body>
</html>
