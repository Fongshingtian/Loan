<%--营业网点-在线预约(后台)--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
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
</head>
<body>
<section id="list" class="layui-larry-box">
    <div class="larry-personal">
        <div class="layui-tab">
            <blockquote class="layui-elem-quote news_search">

                <div class="layui-inline">
                    <div class="layui-inline">
                        <a class="layui-btn layui-btn-normal newsAdd_btn" href="/vip/BackStage/toaddpointmall">添加</a>
                    </div>
                </div>

            </blockquote>

            <!-- 操作日志 -->
            <div class="layui-form news_list">
                <table class="layui-table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>名称</th>
                        <th>库存</th>
                        <th>所需积分</th>
                        <th>限额</th>
                        <th>封面</th>
                        <%--<th>详情</th>--%>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody class="news_content">
                    <c:forEach items="${list}" var="l">
                        <tr>
                            <td>${l.id}</td>
                            <td>${l.name}</td>
                            <td>${l.stock}</td>
                            <td>${l.point}</td>
                            <td>${l.limit}</td>
                            <td><img style="width:60px;" src="${pageContext.request.contextPath}/upload/${l.image}"></td>
                            <%--<td>${l.detail}</td>--%>
                            <td>
                                <a class="layui-btn layui-btn-mini" href="/vip/BackStage/toupdpointmall?id=${l.id}"><i class="iconfont icon-edit"></i> 编辑</a>
                                <%--<a class="layui-btn layui-btn-danger layui-btn-mini" href="/myusers/delyhj?id=${l.id}"><i class="layui-icon"></i> 删除</a>--%>
                            </td>
                        </tr>
                    </c:forEach>
                    </tbody>
                </table>
                <div class="larry-table-page clearfix">
                    共${rows}条数据
                    共${totalpage}页
                    <!--分页-->
                    <div class="about-page" style="margin-left: 450px;margin-top: -40px">
                        <ul class="pagination">
                            <li ><a href="javascript:void(0);" onclick="choosePage(1)">首页</a></li>
                            <li><a href="javascript:void(0);" onclick="choosePage(${currpage-1})">&laquo;</a></li>
                            <li class="active"><a href="javascript:;void(0)" >1</a></li>
                            <li><a href="javascript:void(0);" onclick="choosePage(${currpage+1})">&raquo;</a></li>
                            <li><a href="javascript:void(0);" onclick="choosePage(${totalpage})">末页</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
<script type="text/javascript" src="/Backpage/common/layui/layui.js"></script>
<script type="text/javascript" src="/Backpage/js/newslist.js"></script>
<script type="text/javascript">
    //选页
    function choosePage(currpage){
        var phref="/vip/BackStage/point_mall/"+currpage;
        window.location.href=phref;
    }
    layui.use(['jquery','layer','element','laypage'],function(){
        window.jQuery = window.$ = layui.jquery;
        window.layer = layui.layer;
        var element = layui.element();
    });
</script>
</body>
</html>
