<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>消息管理</title>
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
				<a class="layui-btn layui-btn-normal newsAdd_btn" href="/myusers/toaddmessge">添加</a>
			</div>
		</div>

	</blockquote>

                <div class="layui-form news_list">
                    <table class="layui-table">
					<colgroup>
						<col width="15%">
						<col width="10%">
						<col width="20%">
						<col width="15%">
						<col width="15%">



						<col width="10%">

					</colgroup>
					<thead>
						<tr>

							<th>奖励日期</th>
							<th>金额奖励</th>
							<th>类型发放</th>
							<th>状态</th>
							<th>发放时间</th>

							<th>操作</th>
						</tr>
					</thead>
					<tbody class="news_content">
						<c:forEach var="f" items="${fget}">
							<tr>

								<td>${f.jltime}</td>
								<td>${f.jlmoney}</td>
								<td>${f.jltype}</td>
								<td>${f.jlstate}</td>
								<td>${f.sendtime}</td>

								<td>
									<%--<a class="layui-btn layui-btn-mini" href="/yhj/toadd"><i class="iconfont iconpx-user-add"></i> 添加</a>--%>
									<%--<a class="layui-btn layui-btn-mini" href="/myusers/toupdmessge?mid=${m.mid}"><i class="iconfont icon-edit"></i> 编辑</a>--%>
									<a class="layui-btn layui-btn-danger layui-btn-mini" href="/myusers/delmessge?mid=${m.mid}"><i class="layui-icon"></i> 删除</a>
								</td>
							</tr>

						</c:forEach>
						<tr>
							<td colspan="6">
								<label>第${currpage}/${totalpage}页 共${rows}条</label>
								<a href="/myusers/messgelist?currpage=1">首页</a>
								<a href="/myusers/messgelist?currpage=${currpage-1}">上一页</a>
								<a href="/myusers/messgelist?currpage=${currpage+1}">下一页</a>
								<a href="/myusers/messgelist?currpage=${totalpage}">尾页</a>

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

<%--<script type="text/javascript">--%>

    <%--function checkFirst(){--%>
        <%--if(${currpage>1}){--%>

            <%--return true;--%>

        <%--}--%>
        <%--alert("已到页首,无法加载更多");--%>

        <%--return false;--%>
    <%--}--%>

    <%--function checkNext(){--%>

        <%--if(${currpage<totalpage}){--%>

            <%--return true;--%>

        <%--}--%>
        <%--alert("已到页尾，无法加载更多页");--%>
        <%--return false;--%>

    <%--}--%>

<%--</script>--%>
</html>