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
                    <div class="layui-input-inline">
                        <input value="" placeholder="请输入关键字" class="layui-input search_input" type="text">
                    </div>
                    <a class="layui-btn search_btn">查询</a>
                </div><div class="layui-inline">
                <a class="layui-btn layui-btn-normal newsAdd_btn">添加文章</a>
            </div>
                <div class="layui-inline">
                    <a class="layui-btn recommend" style="background-color:#5FB878">推荐文章</a>
                </div>
                <div class="layui-inline">
                    <a class="layui-btn audit_btn">审核文章</a>
                </div>
                <div class="layui-inline">
                    <a class="layui-btn layui-btn-danger batchDel">批量删除</a>
                </div>
                <div class="layui-inline">
                    <div class="layui-form-mid layui-word-aux">本页面刷新后除新添加的文章外所有操作无效，关闭页面所有数据重置</div>
                </div>
            </blockquote>

            <!-- 操作日志 -->
            <div class="layui-form news_list">
                <table class="layui-table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>用户ID</th>
                        <th>操作时间</th>
                        <th>类型</th>
                        <th>成长值</th>
                    </tr>
                    </thead>
                    <tbody class="news_content">
                    <c:forEach items="${list}" var="l">
                        <tr>
                            <td>${l.id}</td>
                            <td>${l.user_id}</td>
                            <td>${l.time}</td>
                            <td>${l.type}</td>
                            <td>${l.value}</td>
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
        var phref="/vip/BackStage/growth_value/"+currpage;
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
