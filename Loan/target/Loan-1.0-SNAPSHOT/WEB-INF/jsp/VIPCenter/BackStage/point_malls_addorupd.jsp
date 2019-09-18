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

<form action='/vip/BackStage/pointMall' enctype="multipart/form-data"  method='post'>

    <div class="zhuce">
        <input type="hidden" name="id" value="${mall.id}" />
        <div class="text">
            <span>商品名称</span>
            <input type="text" name='name'value='${mall.name}' class="input">

        </div><br>
        <div class="text">
            <span>库存</span>
            <input type="text" name='stock' value='${mall.stock}' class="input">

        </div><br>
        <div class="text">
            <span>所需积分</span>
            <input type="text" name='point'  value='${mall.point}' class="input">

        </div><br>
        <div class="text">
            <span>限制数量</span>
            <input type="text" name='limit'  value='${mall.limit}' class="input">

        </div><br>
        <div class="text">
            <span>封面图片</span>
            <input type="file" id="file" name='file' class="input">
            <input type="hidden" name="image">
            <img id="image" src="" width="50" height="50"  class="layui-upload-img" />
        </div><br>
        <div class="text">
            <span>商品详情</span>
        </div>

        <div style="width:90%;align:margin 0 auto" id='editor'>

            <p>${mall.detail}</p>
        </div>
        <input type="hidden" id="detail" name="detail"/>
        <div class="btndl"><input type="submit" value="保存修改" onclick="getcontents();"></div>

        <button type="reset" class="layui-btn layui-btn-primary" onclick="history.go(-1)">返回</button>

    </div>
</form>
<div style="text-align:center;">
</div>
<script type="text/javascript" charset="utf-8">
    function getcontents(){
        // alert("asfds");
        var txt=editor.txt.html();
        document.getElementById("detail").value=txt;
    }

    $("#file").change(function () {
        // alert();
        $("#image").attr("src", URL.createObjectURL($(this)[0].files[0]));
    });

</script>
<script type="text/javascript">
    var E =window.wangEditor;
    var editor=new E('#editor');
    //让文本编译器能上传图片
    editor.customConfig.uploadImgShowBase64 =true;
    editor.create();
</script>
</body>
</html>
