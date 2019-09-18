<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>添加优惠劵</title>
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
	<center>
	<div class="larry-personal">

	    <div class="layui-tab">
		         <!-- 操作日志 -->
                <form class="layui-form" action="/myusers/addorupdyhj" method="post" enctype="multipart/form-data">
					<input type="hidden" name="did" value="${dis.did}">

					<div class="layui-form-item">
						<label class="layui-form-label">红包金额</label>
						<div class="layui-input-block">
							<input type="text" name="money" value="${dis.money}" required  lay-verify="required" placeholder="请输入红包金额" autocomplete="off" class="layui-input"/>

                        </div>
					</div>

					<div class="layui-form-item">
						<label class="layui-form-label">起始时间</label>
						<div class="layui-input-block">
							<input type="date" name="timestart" value="${dis.timestart}" required  lay-verify="required" placeholder="请输入起始时间" autocomplete="off" class="layui-input">
						</div>
					</div>

					<div class="layui-form-item">
						<label class="layui-form-label">终止时间</label>
						<div class="layui-input-block">
							<input type="date" name="timeover" value="${dis.timeover}" required  lay-verify="required" placeholder="请输入终止时间" autocomplete="off" class="layui-input">
						</div>
					</div>

					<div class="layui-form-item">
						<label class="layui-form-label">使用条件</label>
						<div class="layui-input-block">
							<input type="text" name="ussing" value="${dis.ussing}" required  lay-verify="required" placeholder="请输入使用条件" autocomplete="off" class="layui-input">
						</div>
					</div>

					<div class="layui-form-item">
						<label class="layui-form-label">适用项目说明</label>
						<div class="layui-input-block">
							<input type="text" name="text" value="${dis.text}" required  lay-verify="required" placeholder="请输入适用项目说明" autocomplete="off" class="layui-input">
						</div>
					</div>

					<div class="layui-form-item">
						<label class="layui-form-label">来源渠道</label>
						<div class="layui-input-block">
							<input type="text" name="source" value="${dis.source}" required  lay-verify="required" placeholder="请输入来源渠道" autocomplete="off" class="layui-input">
						</div>
					</div>

					<div class="layui-form-item">
						<label class="layui-form-label">会员等级</label>
						<div class="layui-input-block">
							<input type="text" name="hydj" value="${dis.hydj}" required  lay-verify="required" placeholder="请输入会员等级" autocomplete="off" class="layui-input">
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
	</center>
</section>
<script type="text/javascript" src="../../../Backpage/common/layui/layui.js"></script>
<script type="text/javascript" src="../../../Backpage/js/newslist.js"></script>
<script>
    // $("#tb").change(function(){
    //     $("#picture").attr("src",URL.createObjectURL($(this)[0].files[0]));
    // });

    // obj.preview(function(index, file, result){
    //     //index表示文件索引
    //     //file表示文件信息
    //     //result表示文件src地址
    //     $('#picture').attr('src', result); //图片链接（base64）直接将图片地址赋值给img的src属性
    // });
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