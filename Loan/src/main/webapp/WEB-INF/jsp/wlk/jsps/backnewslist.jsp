<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>新闻公告管理</title>
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

	<script type="text/javascript" src="../../../Backpage/common/layui/layui.js"></script>
	<script type="text/javascript" src="../../../Backpage/js/newslist.js"></script>

	<style type="text/css">
		/*{# 设置table每一行的height #}*/
		.layui-table-cell{
			height: 28px;
			line-height: 28px;
		}
	</style>

</head>
<body>
<section class="layui-larry-box">
	<div class="larry-personal">
	    <div class="layui-tab">
            <blockquote class="layui-elem-quote news_search">

		<div class="layui-inline">
			<div class="layui-inline">
				<a class="layui-btn layui-btn-normal newsAdd_btn" href="/wlk/toBackstage">添加公告</a>
			</div>
			<%--<a class="layui-btn layui-btn-normal newsAdd_btn" href="/produce/toadd">添加产品</a>--%>
		</div>

	    </blockquote>

                <div class="layui-form news_list">
                    <table class="layui-table"><%--style="table-layout:fixed"--%>
					<colgroup>
						<col width="5%">
						<col width="5%">
						<col width="10%">
						<col width="8%">
						<col width="2%">

					</colgroup>
					<thead>
						<tr>

							<th>公告类型</th>

							<th>发布时间</th>
							<th>公告标题</th>

							<th>查看详情</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody class="news_content">
						<c:forEach var="p" items="${list}">
							<tr style="height: 30px;">
								<td>${p.ntype}</td>
								<td>${p.rdate}</td>
								<td>${p.ntitle}</td>
								<td><a href="/wlk/backoneNew?id=${p.nid}"><button class="layui-btn layui-btn-normal">查看详情</button></a></td>

								<td>
									<%--<a class="layui-btn layui-btn-mini" href="/produce/toadd"><i class="iconfont iconpx-user-add"></i> 添加</a>--%>
									<%--<a class="layui-btn layui-btn-mini" href="/produce/toupd?pid=${p.nid}"><i class="iconfont icon-edit"></i> 编辑</a>--%>
									<a class="layui-btn layui-btn-danger layui-btn-mini" href="/wlk/del?nid=${p.nid}"><i class="layui-icon"></i> 删除</a>
								</td>
							</tr>

						</c:forEach>
						<tr>
							<td colspan="9" style="width: auto">
								<label>第${page.currPage}/${page.totalPage}页 共${page.totalRow}条</label>
								<a href="/wlk/newsList2?currPage=1">首页</a>
								<a href="/wlk/newsList2?currPage=${page.currPage-1}" onclick="return checkFirst()">上一页</a>
								<a href="/wlk/newsList2?currPage=${page.currPage+1}" onclick="return checkNext()">下一页</a>
								<a href="/wlk/newsList2?currPage=${page.totalPage}">尾页</a>


							</td>
						</tr>
					</tbody>
					</table>

			    </div>

		    </div>
		</div>
	
</section>

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