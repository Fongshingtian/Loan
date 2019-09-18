<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>消息</title>
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
                <form class="layui-form" action="/myusers/addorupdmsg" method="post">
					<input type="hidden" name="mid" value="${m.mid}">

					<div class="layui-form-item">
						<label class="layui-form-label">用户id</label>
						<div class="layui-input-block">
							<input type="text" name="uid" value="${m.uid}" required  lay-verify="required" placeholder="请输入用户id" autocomplete="off" class="layui-input"/>

                        </div>
					</div>

					<div class="layui-form-item">
						<label class="layui-form-label">状态</label>
						<div class="layui-input-block">
							<input type="text" name="mstate" value="${m.mstate}" required  lay-verify="required" placeholder="请输入消息状态" autocomplete="off" class="layui-input">
						</div>
					</div>

					<div class="layui-form-item">
						<label class="layui-form-label">标题</label>
						<div class="layui-input-block">
							<input type="text" name="title" value="${m.title}" required  lay-verify="required" placeholder="请输入消息标题" autocomplete="off" class="layui-input">
						</div>
					</div>

					<div class="layui-form-item">
						<label class="layui-form-label">内容</label>
						<div class="layui-input-block">
							<input type="text" name="text" value="${m.text}" required  lay-verify="required" placeholder="请输入消息内容" autocomplete="off" class="layui-input">
						</div>
					</div>

					<%--<div class="layui-form-item">--%>
						<%--<label class="layui-form-label">送达时间</label>--%>
						<%--<div class="layui-input-block">--%>
							<%--<input type="datetime-local" name="sendtime" value="${m.sendtime}" required  lay-verify="required" placeholder="请输入送达时间" autocomplete="off" class="layui-input">--%>
						<%--</div>--%>
					<%--</div>--%>

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