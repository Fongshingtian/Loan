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
<div class="head">
    <span class="head_lf"><a href="javascript:history.back(-1);" ><h4 style="text-indent:-7em">返回</h4></a></span>
    <h3 style="text-indent:-17em;">编辑</h3>
</div>	<!--aboutusalter-->
<form action='/t2/eidtor' method='post'\>
    <div class="zhuce">
        <div class="text">
            <span>标题</span>
            <input type="text" name='tittle' readonly="readonly" value='${one.tittle}' class="input">
            <input type="hidden" name="id" value="${one.id}" />
        </div>
        <div style="width:90%;align:margin 0 auto" id='editor'>
            <p>${one.content }</p>
        </div>
        <input type="hidden" id='contents' name='content'>
        <div class="btndl"><input type="submit" value="保存修改" onclick="getcontents();"></div>
    </div>
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
</body>
</html>
