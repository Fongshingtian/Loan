<%--
  Created by IntelliJ IDEA.
  User: asus
  Date: 2019/4/12
  Time: 20:40
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="/Backpage/common/layui/css/layui.css" media="all">
    <link rel="stylesheet" type="text/css" href="/Backpage/common/bootstrap/css/bootstrap.css" media="all">
    <link rel="stylesheet" type="text/css" href="/Backpage/common/global.css" media="all">
    <link rel="stylesheet" type="text/css" href="/Backpage/css/personal.css" media="all">
</head>
<body>
<section class="layui-larry-box">
    <div class="larry-personal">
        <div class="layui-tab">
            <blockquote class="layui-elem-quote news_search">

                <div class="layui-inline">
                    <div class="layui-input-inline">
                        <input value="" placeholder="请输入关键字" class="layui-input search_input" type="text">
                    </div>
                    <a class="layui-btn search_btn">查询</a>
                </div>


            </blockquote>

            <!-- 操作日志 -->
            <div class="layui-form news_list">
                <table class="layui-table">
                    <colgroup>
                        <col width="9%">
                        <col>
                        <col width="9%">
                        <col width="9%">
                        <col width="9%">
                        <col width="9%">
                        <col width="12%">
                        <col width="20%">
                    </colgroup>
                    <thead>
                    <tr>

                        <th style="text-align:left;">申请人姓名</th>
                        <th>性别</th>
                        <th>身份证编号</th>
                        <th>手机号</th>
                        <th>申请产品</th>
                        <th>申请额度</th>
                        <th>审批状态</th>
                        <th>审核</th>
                    </tr>
                    </thead>

                    <tbody class="news_content">
                    <c:forEach items="${list}" var="l">
                        <tr>

                            <td>${l.custName}</td>
                            <td>
                                <c:if test="${l.sex==1}">男</c:if>
                                <c:if test="${l.sex==0}">女</c:if>
                            </td>
                            <td>${l.idCardNo}</td>
                            <td>${l.mobile}</td>
                            <td>${l.productCode}</td>
                            <td>${l.entryAmount}</td>
                            <td><c:choose>

                                <c:when test="${l.status==2}"><font color="red">第一次审批失败</font></c:when>
                                <c:when test="${l.status==3}"><font color="#00bfff">第一次审批通过</font></c:when>
                                <c:when test="${l.status==4}"><font color="#32cd32">第二次审批通过</font></c:when>
                                <c:when test="${l.status==5}"><font color="#8b0000">第二次审批失败</font></c:when>
                                <c:otherwise ><font color="red" >未审批</font></c:otherwise>
                            </c:choose>

                            </td>
                            <td>
                                <button class="btn btn-info  btn-xs" data-toggle="modal" > <a href="/back/splsxq/${l.did}/${l.status}">查看详情</a></button>
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
<script type="text/javascript" src="../Backpage/common/layui/layui.js"></script>
<script type="text/javascript" src="../Backpage/js/newslist.js"></script>

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
