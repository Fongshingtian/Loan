<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>用户个人信息</title>
	<meta name="renderer" content="webkit">	
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">	
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">	
	<meta name="apple-mobile-web-app-status-bar-style" content="black">	
	<meta name="apple-mobile-web-app-capable" content="yes">	
	<meta name="format-detection" content="telephone=no">	
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/Backpage/common/layui/css/layui.css" media="all">
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/Backpage/common/bootstrap/css/bootstrap.css" media="all">
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/Backpage/common/global.css" media="all">
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/Backpage/css/personal.css" media="all">
</head>
<body>
<section class="layui-larry-box">
	<div class="larry-personal">
	    <div class="layui-tab">
            <blockquote class="layui-elem-quote news_search">

		<div class="layui-inline">
			<div class="layui-inline">
				<a class="layui-btn layui-btn-normal newsAdd_btn" href="/myusers/toadd">添加</a>
			</div>
		</div>

	</blockquote>

                <div class="layui-form news_list">
                    <table class="layui-table">
					<colgroup>
						<col width="10%">
						<col width="10%">
						<col width="10%">
						<col width="10%">
						<col width="10%">

						<col width="10%">
						<col width="10%">
						<col width="10%">
						<col width="10%">
						<col width="10%">

					</colgroup>
					<thead>
						<tr>

							<th>姓名</th>
							<th>手机号</th>
							<th>登录密码</th>
							<th>注册时间</th>
							<th>实名认证</th>
							<th>邮箱认证</th>

							<th>紧急联系人状态</th>
							<th>我的邀请码</th>
							<th>推荐人邀请码</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody class="news_content">
						<c:forEach var="u" items="${user}">
							<tr>

								<td>${u.uname}</td>
								<td>${u.phone}</td>
								<td>${u.loginpwd}</td>
								<td>${u.zcdata}</td>
								<td>
									<c:if test="${u.realname==false}">未实名认证</c:if>
									<c:if test="${u.realname==true}">已实名认证</c:if>
								</td>
								<td>${u.email}</td>
								<td>
									<c:if test="${u.urgentstate==1}">信息完善</c:if>
									<c:if test="${u.urgentstate==2}">信息不完善</c:if>
								</td>
								<td>${u.mycode}</td>
								<td>${u.tjrcode}</td>
								<td>
									<%--<a class="layui-btn layui-btn-mini" href="/produce/toadd"><i class="iconfont iconpx-user-add"></i> 添加</a>--%>
									<%--<a class="layui-btn layui-btn-mini" href="/myusers/toupd?pid=${p.pid}"><i class="iconfont icon-edit"></i> 编辑</a>--%>
									<a class="layui-btn layui-btn-danger layui-btn-mini" href="/myusers/del?uid=${u.uid}"><i class="layui-icon"></i> 删除</a>
								</td>
							</tr>

						</c:forEach>
						<tr>
							<td colspan="10">
								<label>第${currpage}/${totalpage}页 共${rows}条</label>
								<a href="/myusers/list?currpage=1">首页</a>
								<a href="/myusers/list?currpage=${currpage-1}">上一页</a>
								<a href="/myusers/list?currpage=${currpage+1}">下一页</a>
								<a href="/myusers/list?currpage=${totalpage}">尾页</a>

							</td>
						</tr>
					</tbody>
					</table>

			    </div>
			     <!-- 登录日志 -->
			    <div class="layui-tab-item layui-field-box">
			          <table class="layui-table table-hover" lay-even="" lay-skin="nob">
                           <thead>
                              <tr>
                                  <th><input type="checkbox" id="selected-all"></th>
                                  <th>ID</th>
                                  <th>管理员账号</th>
                                  <th>状态</th>
                                  <th>最后登录时间</th>
                                  <th>上次登录IP</th>
                                  <th>登录IP</th>
                                  <th>IP所在位置</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><input type="checkbox"></td>
                                <td>110</td>
                                <td>admin</td>
                                <td>后台登录成功</td>
                                <td>2016-12-19 14:26:03</td>
                                <td>127.0.0.1</td>
                                <td>127.0.0.1</td>
                                <td>Unknown</td>
                              </tr>
                            </tbody>
			          </table>
			          <div class="larry-table-page clearfix">
                          <a href="javascript:;" class="layui-btn layui-btn-small"><i class="iconfont icon-shanchu1"></i>删除</a>
				          <div id="page2" class="page"></div>
			         </div>
			    </div>
		    </div>
		</div>
	
</section>
<script type="text/javascript" src="../../../Backpage/common/layui/layui.js"></script>
<script type="text/javascript" src="../../../Backpage/js/newslist.js"></script>

</body>

</html>