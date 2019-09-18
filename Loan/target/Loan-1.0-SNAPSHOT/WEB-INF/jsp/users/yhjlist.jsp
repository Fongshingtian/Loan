<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>红包优惠劵</title>
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
				<a class="layui-btn layui-btn-normal newsAdd_btn" href="/myusers/toaddyhj">添加</a>
			</div>
		</div>

	</blockquote>

                <div class="layui-form news_list">
                    <table class="layui-table">
					<colgroup>
						<col width="10%">
						<col width="10%">
						<col width="10%">
						<col width="25%">
						<col width="15%">

						<col width="12%">
						<col width="8%">
						<col width="10%">

					</colgroup>
					<thead>
						<tr>

							<th>红包金额</th>
							<th>有效时间开始</th>
							<th>有效时间结束</th>
							<th>使用条件</th>
							<th>适用项目说明</th>
							<th>来源渠道</th>

							<th>会员等级</th>

							<th>操作</th>
						</tr>
					</thead>
					<tbody class="news_content">
						<c:forEach var="d" items="${dis}">
							<tr>

								<td>${d.money}</td>
								<td>${d.timestart}</td>
								<td>${d.timeover}</td>
								<td>${d.ussing}</td>
								<td>${d.text}</td>
								<td>${d.source}</td>

								<td>${d.hydj}</td>
								<td>
									<%--<a class="layui-btn layui-btn-mini" href="/yhj/toadd"><i class="iconfont iconpx-user-add"></i> 添加</a>--%>
									<a class="layui-btn layui-btn-mini" href="/myusers/toupdyhj?did=${d.did}"><i class="iconfont icon-edit"></i> 编辑</a>
									<a class="layui-btn layui-btn-danger layui-btn-mini" href="/myusers/delyhj?did=${d.did}"><i class="layui-icon"></i> 删除</a>
								</td>
							</tr>

						</c:forEach>
						<tr>
							<td colspan="10">
								<label>第${currpage}/${totalpage}页 共${rows}条</label>
								<a href="/myusers/yhjlist?currpage=1">首页</a>
								<a href="/myusers/yhjlist?currpage=${currpage-1}">上一页</a>
								<a href="/myusers/yhjlist?currpage=${currpage+1}">下一页</a>
								<a href="/myusers/yhjlist?currpage=${totalpage}">尾页</a>

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