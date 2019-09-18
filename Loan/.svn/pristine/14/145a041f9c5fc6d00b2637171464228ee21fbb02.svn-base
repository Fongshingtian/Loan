<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>添加产品</title>
	<meta name="renderer" content="webkit">	
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">	
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">	
	<meta name="apple-mobile-web-app-status-bar-style" content="black">	
	<meta name="apple-mobile-web-app-capable" content="yes">	
	<meta name="format-detection" content="telephone=no">	
	<link rel="stylesheet" type="text/css" href="../../../Backpage/common/layui/css/layui.css" media="all">
	<link rel="stylesheet" type="text/css" href="../../../Backpage/common/bootstrap/css/bootstrap.css" media="all">
	<link rel="stylesheet" type="text/css" href="../../../Backpage/common/global.css" media="all">
	<link rel="stylesheet" type="text/css" href="../../../Backpage/css/personal.css" media="all">
    <script type="text/javascript" src="/js/jquery-1.7.2.min.js"></script>
    <script type="text/javascript" src="/js/wangEditor.js"></script>
    <script type="text/javascript" src="/js/wangEditor.min.js"></script>
    <script type="text/javascript" src="/js/layui.js"></script>

	<script type="text/javascript" src="../../../Backpage/common/layui/layui.js"></script>
	<script type="text/javascript" src="../../../Backpage/js/newslist.js"></script>


</head>

<script>
	function checkText() {
		var ntitle=document.getElementById("ntitle").value;
		var checkerror=document.getElementById("sp");

		if(ntitle=="")
		{
			checkerror.className="checkerror";
			checkerror.innerHTML="标题不能为空";
			//setTimeout("cleartext()",1000);
			return false;
		}else {
			checkerror.innerHTML="";
			return true;
		}
	}
</script>

<body>
<section class="layui-larry-box">
	<div class="larry-personal">
        <h1>添加公告</h1>
	    <div class="layui-tab">
		         <!-- 操作日志 -->
                <form class="layui-form" action="eidtor" method="post">

					<div class="layui-form-item">
						<label class="layui-form-label">标题</label>
						<div class="layui-input-block">
							<input type="text" onBlur="checkText()" id="ntitle" name="ntitle" required  lay-verify="required" placeholder="请输入产品名称" autocomplete="off" class="layui-input">
							<span class="text-orange m-l-sm xn-error" style="color: red" id="sp"></span>
						</div>
					</div>

                    <div class="layui-form-item">
                        <label class="layui-form-label">公告类型</label>
                        <div class="layui-input-block">
                            <input type="radio" name="ntype" value="最新公告" title="最新公告" checked="">
                            <input type="radio" name="ntype" value="公司新闻" title="公司新闻">
                            <input type="radio" name="ntype" value="行业动态" title="行业动态">
                            <%--<input type="radio" name="sex" value="禁" title="禁用" disabled="">--%>
                        </div>
                    </div>



					<div class="layui-form-item layui-form-text">
						<label class="layui-form-label">内容</label>
						<div class="layui-input-block">
                            <div style="width:90%;align:margin 0 auto" id='editor'>
                                <p>${aboutusinfo.contents }</p>
                            </div>
                            <input type="hidden" id='contents' name='ncontent'>
						</div>
					</div>

				  <div class="layui-form-item">
				    <div class="layui-input-block">
				      <button class="layui-btn" onclick="getcontents();" lay-submit lay-filter="formDemo">保存</button>
				      <%--<button type="reset" class="layui-btn layui-btn-primary">重置</button>
                      --%>

						<button type="reset" class="layui-btn layui-btn-warm" onclick="history.go(-1)">返回</button>

                    </div>
				  </div>
				</form>

		    </div>
		</div>

</section>

<%--<script>

        //Demo
        layui.use('form', function(){
          var form = layui.form;

          //监听提交
          form.on('submit(formDemo)', function(data){
            layer.msg(JSON.stringify(data.field));
            return false;
          });
        });
</script>--%>

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