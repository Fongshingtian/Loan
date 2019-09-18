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
				<a class="layui-btn layui-btn-normal newsAdd_btn" href="/produce/toadd">添加产品</a>
			</div>
			<%--<a class="layui-btn layui-btn-normal newsAdd_btn" href="/produce/toadd">添加产品</a>--%>
		</div>

	</blockquote>

                <div class="layui-form news_list">
                    <table class="layui-table">
					<colgroup>
						<col width="5%">
						<col width="5%">
						<col width="10%">
						<col width="8%">
						<col width="2%">

						<col width="5%">
						<col width="30%">
						<col width="25%">
						<col width="10%">

					</colgroup>
					<thead>
						<tr>

							<th>产品图标</th>
							<th>产品名称</th>
							<th>产品说明</th>
							<th>借款额度</th>
							<th>审核时效</th>
							<th>借款期数</th>

							<th>申请条件</th>
							<th>提供资料</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody class="news_content">
						<c:forEach var="p" items="${plist}">
							<tr>

								<td><img src="${pageContext.request.contextPath}/upload/${p.picture}"></td>
								<td>${p.pname}</td>
								<td>${p.ptext}</td>
								<td>${p.jked}</td>
								<td>${p.shtime}</td>
								<td>${p.jkqs}</td>
								<td>${p.sqtj}</td>
								<td>${p.tgzl}</td>
								<td>
									<%--<a class="layui-btn layui-btn-mini" href="/produce/toadd"><i class="iconfont iconpx-user-add"></i> 添加</a>--%>
									<a class="layui-btn layui-btn-mini" href="/produce/toupd?pid=${p.pid}"><i class="iconfont icon-edit"></i> 编辑</a>
									<a class="layui-btn layui-btn-danger layui-btn-mini" href="/produce/del?pid=${p.pid}"><i class="layui-icon"></i> 删除</a>
								</td>
							</tr>

						</c:forEach>
						<tr>
							<td colspan="9">
								<label>第${page.currPage}/${page.totalPage}页 共${page.totalRow}条</label>
								<a href="/produce/list?currPage=1">首页</a>
								<a href="/produce/list?currPage=${page.currPage-1}" onclick="return checkFirst()">上一页</a>
								<a href="/produce/list?currPage=${page.currPage+1}" onclick="return checkNext()">下一页</a>
								<a href="/produce/list?currPage=${page.totalPage}">尾页</a>

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

<script type="text/javascript">

    function checkFirst(){
        if(${page.currPage>1}){

            return true;

        }
        alert("已到页首,无法加载更多");

        return false;
    }

    function checkNext(){

        if(${page.currPage<page.totalPage}){

            return true;

        }
        alert("已到页尾，无法加载更多页");
        return false;

    }

</script>
</html>