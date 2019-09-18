<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>个人信息</title>
	<meta name="renderer" content="webkit">	
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">	
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">	
	<meta name="apple-mobile-web-app-status-bar-style" content="black">	
	<meta name="apple-mobile-web-app-capable" content="yes">	
	<meta name="format-detection" content="telephone=no">	
	<link rel="stylesheet" type="text/css" href="/Backpage/common/layui/css/layui.css" media="all">
	<link rel="stylesheet" type="text/css" href="/Backpage/common/bootstrap/css/bootstrap.css" media="all">
	<link rel="stylesheet" type="text/css" href="/Backpage/common/global.css" media="all">
	<link rel="stylesheet" type="text/css" href="/Backpage/css/personal.css" media="all">
	<!--模态框插件-->
	<link rel="stylesheet" href="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
<section class="layui-larry-box">
	<div class="larry-personal">
	    <div class="layui-tab">
			<blockquote class="layui-elem-quote news_search">
				<div class="layui-inline">
					<button class="btn btn-info  btn-xs" data-toggle="modal" data-target="#myModal"> 添加招标</button>
				</div>
			</blockquote>

                <div class="layui-form news_list">
                    <table class="layui-table">
					<colgroup>
						<col width="10%">
						<col width="30%">
						<col width="20%">

					</colgroup>
					<thead>
						<tr>
							<th style="text-align:left;">标编号</th>
							<th>标题</th>
							<th>类型</th>
							<th>操作</th>

						</tr>
					</thead>
					<tbody class="news_content">
						<c:forEach items="${list}" var="l">
							<tr>
								<td>${l.zid}</td>
								<td>${l.headline}</td>
								<td><c:choose>
									<c:when test="${l.types==1}"><font color="#ff4500">为您推荐</font></c:when>
									<c:when test="${l.types==2}"><font color="#32cd32">优享牛</font></c:when>
									<c:otherwise ><font color="red" >升财牛</font></c:otherwise>
									</c:choose></td>
								<td>
									<button class="btn btn-info  btn-xs" data-toggle="modal" > <a href="/bidding/zson/${l.zid}">查看期数详情</a></button>
									<a href="/bidding/delbidd/${l.zid}"><button class="btn  btn-success btn-xs" data-toggle="modal" >删除</button></a>
								</td>
							</tr>
						</c:forEach>

					</tbody>
					</table>
                     <div class="larry-table-page clearfix">
				          <div id="page" class="page"></div>
			         </div>
			    </div>

		    </div>
		</div>
	
</section>
<!-- 模态框（Modal） -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
					&times;
				</button>
				<h4 class="modal-title" id="myModalLabel">
					添加招标项目
				</h4>
			</div>

			<form action="/bidding/addbidd" method="post">
				<div class="register-box-con2-box clearfix mar-bottom20"style="margin-left: 150px">

					<div class="register-box-con2-box-right">
						　标题：  <input type="text"  class="login-box-cen-form-input w358" placeholder="请输入期数" name="headline" style="height: 30px;"/>
					</div>
					<div class="register-box-con2-box-right">
						　类型：<select class="selectpicker" name="types" data-width="100%" title="亲请选择类型" value="" tabindex="-98">
								<option value="1">为您推荐</option>
								<option value="2">优享牛</option>
								<option value="3">升财牛</option>
							</select>
					</div>

				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">关闭
					</button>
					<input type="submit"  class="btn btn-default"value="添加" style="height: 34px;"/>

				</div>
			</form>
		</div><!-- /.modal-content -->
	</div><!-- /.modal -->
</div>

<script type="text/javascript" src="/Backpage/common/layui/layui.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/Backpage/js/newslist.js"></script>
<script type="text/javascript">
	layui.use(['jquery','layer','element','laypage'],function(){
	      window.jQuery = window.$ = layui.jquery;
	      window.layer = layui.layer;
          var element = layui.element(),
              laypage = layui.laypage;

            
          laypage({
					cont: 'page',
					pages: 10 //总页数
						,
					groups: 5 //连续显示分页数
						,
					jump: function(obj, first) {
						//得到了当前页，用于向服务端请求对应数据
						var curr = obj.curr;
						if(!first) {
							//layer.msg('第 '+ obj.curr +' 页');
						}
					}
				});

          laypage({
					cont: 'page2',
					pages: 10 //总页数
						,
					groups: 5 //连续显示分页数
						,
					jump: function(obj, first) {
						//得到了当前页，用于向服务端请求对应数据
						var curr = obj.curr;
						if(!first) {
							//layer.msg('第 '+ obj.curr +' 页');
						}
					}
				});
    });
</script>
</body>
</html>