<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>修改产品</title>
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
</head>
<body>
<section class="layui-larry-box">
	<div class="larry-personal">
		<h1>产品修改</h1>
	    <div class="layui-tab">
		         <!-- 操作日志 -->
                <form class="layui-form" action="/produce/updproduct" method="post" enctype="multipart/form-data">
					<input type="hidden" name="pid" value="${prod.pid}">
					<input type="hidden" name="picture" value="${prod.picture}">
					<div class="layui-form-item">
						<label class="layui-form-label">产品图标</label>
						<div class="layui-input-block">
							<input type="file" name="tb" required  lay-verify="required" autocomplete="off" class="layui-input"/>
						</div>
					</div>

					<div class="layui-form-item">
						<label class="layui-form-label">产品名称</label>
						<div class="layui-input-block">
							<input type="text" name="pname" value="${prod.pname}" required  lay-verify="required" placeholder="请输入产品名称" autocomplete="off" class="layui-input">
						</div>
					</div>

					<div class="layui-form-item">
						<label class="layui-form-label">产品说明</label>
						<div class="layui-input-block">
							<input type="text" name="ptext" value="${prod.ptext}" required  lay-verify="required" placeholder="请输入产品说明" autocomplete="off" class="layui-input">
						</div>
					</div>

					<div class="layui-form-item">
						<label class="layui-form-label">借款额度</label>
						<div class="layui-input-block">
							<input type="text" name="jked" value="${prod.jked}" required  lay-verify="required" placeholder="请输入借款额度" autocomplete="off" class="layui-input">
						</div>
					</div>

					<div class="layui-form-item">
						<label class="layui-form-label">审核时效</label>
						<div class="layui-input-block">
							<input type="text" name="shtime" value="${prod.shtime}" required  lay-verify="required" autocomplete="off" class="layui-input">
						</div>
					</div>

					<div class="layui-form-item">
						<label class="layui-form-label">借款期数</label>
						<div class="layui-input-block">
							<input type="text" name="jkqs" value="${prod.jkqs}" required  lay-verify="required" autocomplete="off" class="layui-input">
						</div>
					</div>

					<div class="layui-form-item">
						<label class="layui-form-label">费率说明</label>
						<div class="layui-input-block">
							<input type="text" name="flsm" value="${prod.flsm}" required  lay-verify="required" autocomplete="off" class="layui-input">
						</div>
					</div>

				  <div class="layui-form-item layui-form-text">
				    <label class="layui-form-label">申请条件</label>
				    <div class="layui-input-block">
				      <textarea name="sqtj" placeholder="请输入内容" class="layui-textarea">${prod.sqtj}</textarea>
				    </div>
				  </div>

					<div class="layui-form-item layui-form-text">
						<label class="layui-form-label">提供资料</label>
						<div class="layui-input-block">
							<textarea name="tgzl" placeholder="请输入内容" class="layui-textarea">${prod.tgzl}</textarea>
						</div>
					</div>

				  <div class="layui-form-item">
				    <div class="layui-input-block">
				      <button class="layui-btn" lay-submit lay-filter="formDemo">保存</button>
				      <button type="reset" class="layui-btn layui-btn-primary">重置</button>
						<button type="reset" class="layui-btn layui-btn-primary" onclick="history.go(-1)">返回</button>
				    </div>
				  </div>
				</form>
			   
		    </div>
		</div>
	
</section>
<script type="text/javascript" src="../../../Backpage/common/layui/layui.js"></script>
<script type="text/javascript" src="../../../Backpage/js/newslist.js"></script>
<script>
//Demo
layui.use('form', function(){
  var form = layui.form;
  
  //监听提交
  form.on('submit(formDemo)', function(data){
    layer.msg(JSON.stringify(data.field));
    return false;
  });
});
</script>
</body>
</html>