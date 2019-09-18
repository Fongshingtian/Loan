<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="format-detection" content="telephone=no">
<link rel="stylesheet" type="text/css" href="common/layui/css/layui.css"
	media="all">
<link rel="stylesheet" type="text/css"
	href="common/bootstrap/css/bootstrap.css" media="all">
<link rel="stylesheet" type="text/css" href="common/global.css"
	media="all">
<link rel="stylesheet" type="text/css" href="css/personal.css"
	media="all">

<!-- 注意， 只需要引用 JS，无需引用任何 CSS ！！！-->
<script type="text/javascript"
	src="${pageContext.request.contextPath}/js/jquery.min.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath }/wangEditor-3.1.1/release/wangEditor.js"></script>

</head>

<body class="childrenBody">
	<form class="layui-form" action="houtai1!commogityaddorupd"
		method="post" onsubmit="return check();" enctype="multipart/form-data">
		<input type="hidden" value="${com.img }" name="imgs">
		<div class="layui-form-item">
			<label class="layui-form-label"></label>
			<div class="layui-input-block">
				<input class="layui-input newsName" lay-verify="required"
					type="hidden" name="com.cid" value="${com.cid }">
			</div>
		</div>
		<div class="layui-form-item">
			<label class="layui-form-label">城市</label>
			<div id="cityhtml" class="layui-input-block">
				<script type="text/javascript">
					$.post("houtai1!city", {}, function(data) {

						var list = data.lists;
						$("#cityhtml").html("");
						var ss = "<select name='com.cityid'>";
						$.each(list, function(i, u) {
							ss += "<option value='"+u.cityid+"'>" + u.cityname
									+ "</option>"

						});
						ss += "</select>";
						$("#cityhtml").html(ss);
					}, "json");
				</script>

			</div>
		</div>
		<div class="layui-form-item">
			<label class="layui-form-label">分类名称</label>
			<div id="typehtml" class="layui-input-block">
				<script type="text/javascript">
					$.post("houtai1!type", {}, function(data) {

						var list = data.lists;
						$("#typehtml").html("");
						var ss = "<select name='com.typeid'>";
						$.each(list, function(i, u) {
							ss += "<option value='"+u.classid+"'>"
									+ u.classname + "</option>"

						});
						ss += "</select>";
						$("#typehtml").html(ss);
					}, "json");
				</script>

			</div>
		</div>
		<div class="layui-form-item">
			<label class="layui-form-label">品牌</label>
			<div id="brandhtml" class="layui-input-block">
				<script type="text/javascript">
					$.post("houtai1!bind", {}, function(data) {

						var list = data.lists;
						$("#brandhtml").html("");
						var ss = "<select name='com.bid'>";
						$.each(list, function(i, u) {
							ss += "<option value='"+u.bid+"'>" + u.bname
									+ "</option>"

						});
						ss += "</select>";
						$("#brandhtml").html(ss);
					}, "json");
				</script>
				<input class="layui-input newsName" lay-verify="required"
					type="text" name="com.bid" value="${com.bid }">
			</div>
		</div>
		<div class="layui-form-item">
			<label class="layui-form-label">商品名称</label>
			<div class="layui-input-block">
				<input class="layui-input newsName" lay-verify="required"
					type="text" name="com.cname" value="${com.cname }">
			</div>
		</div>
		<div class="layui-form-item">
			<label class="layui-form-label">价格</label>
			<div class="layui-input-block">
				<input class="layui-input newsName" lay-verify="required"
					type="text" name="com.price" value="${com.price }">
			</div>
		</div>
		<div class="layui-form-item">
			<label class="layui-form-label">总库存</label>
			<div class="layui-input-block">
				<input class="layui-input newsName" lay-verify="required"
					type="text" name="com.kc" value="${com.kc }">
			</div>
		</div>
		<div class="layui-form-item">
			<label class="layui-form-label">销量</label>
			<div class="layui-input-block">
				<input class="layui-input newsName" lay-verify="required"
					type="text" name="com.sales" value="${com.sales }">
			</div>
		</div>
		<div class="layui-form-item">
			<label class="layui-form-label">生产日期</label>
			<div class="layui-input-inline">
				<input class="layui-input newsTime" lay-verify="required|date"
					onClick="layui.laydate({elem:this})" type="text"
					name="com.datetime" value="${com.datetime }">
			</div>
		</div>
		<div class="layui-form-item">
			<label class="layui-form-label">商品描述</label>
			<div class="layui-input-block">
				<textarea class="layui-textarea" name="com.recommend">${com.recommend }</textarea>
			</div>
		</div>
		<div class="layui-form-item">
			<label class="layui-form-label">商品介绍</label>
			<div class="layui-input-block" id="js">${com.js }</div>
			<input lay-verify="required" type="hidden" name="com.js" id="j">
		</div>
		<div class="layui-form-item">
			<label class="layui-form-label">规格参数</label>
			<div class="layui-input-block" id="parameter">${com.parameter}
			</div>
			<input lay-verify="required" type="hidden" name="com.parameter"
				id="p">
		</div>
		<div class="layui-form-item">
			<label class="layui-form-label">包装清单</label>
			<div class="layui-input-block" id="packing">${com.packing }</div>
			<input lay-verify="required" type="hidden" name="com.packing" id="pk">
		</div>
		<div class="layui-form-item">
			<label class="layui-form-label">售后服务</label>
			<div class="layui-input-block" id="services">${com.service}</div>
			<input lay-verify="required" type="hidden" name="com.service" id="s">
		</div>
		<div class="layui-form-item">
			<label class="layui-form-label">类型</label>
			<div class="layui-input-block">
				<select name="com.state"><!-- （状态是1表示推荐产品  状态是2表示选机中心） -->
					<option value="1">产品推荐</option>
					<option value="2">选机中心</option>
				</select>

			</div>
		</div>

		<div class="upload_box layui-form-item">
			<label class="layui-form-label">图片</label> <input
				 type="file" name="face" id="file"
				accept="image/*" onchange="imgChange(this);" />
			<!--文件上传选择按钮-->
			<div id="preview" style="margin-top:20px;min-height:500px;width:900px">
				<img id="imghead"
					src="${pageContext.request.contextPath}/zdzimg/shouye/${com.img }" />
				<!--图片显示位置-->
			</div>
		</div>
		<div class="layui-form-item">
			<div class="layui-input-block">
				<input type="submit" value="立即提交" class="layui-btn"
					lay-filter="addNews" />
				<button type="reset" class="layui-btn layui-btn-primary">重置</button>
			</div>
		</div>
	</form>
	<script type="text/javascript" src="common/layui/layui.js"></script>
	<script type="text/javascript" src="js/newsadd.js"></script>
	<script type="text/javascript">
		// 选择图片显示
		function imgChange(obj) {
			//获取点击的文本框
			var file = document.getElementById("file");
			var imgUrl = window.URL.createObjectURL(file.files[0]);

			var img = document.getElementById('imghead');

			img.setAttribute('src', imgUrl); // 修改img标签src属性值
		};

		var P = window.wangEditor;
		var parameter = new P('#parameter');
		var S = window.wangEditor;
		var service = new S('#services');
		var A = window.wangEditor;
		var packing = new A('#packing');
		var J = window.wangEditor;
		var js = new J('#js');
		// 或者 var editor = new E( document.getElementById('editor') )

		//让文本编译器能上传图片
		parameter.customConfig.uploadImgShowBase64 = true;
		service.customConfig.uploadImgShowBase64 = true;
		js.customConfig.uploadImgShowBase64 = true;
		packing.customConfig.uploadImgShowBase64 = true;
		//创建文本编译器
		parameter.create();
		service.create();
		packing.create();
		js.create();

		function check() {
			// 读取文本编译器的html
			var txt = parameter.txt.html();
			document.getElementById("p").value = txt;//把值赋给文本框一起提交
			var txt1 = service.txt.html();
			document.getElementById("s").value = txt1;
			var txt2 = packing.txt.html();
			document.getElementById("pk").value = txt2;
			var txt3 = js.txt.html();
			document.getElementById("j").value = txt3;
		}
	</script>
</body>
</html>