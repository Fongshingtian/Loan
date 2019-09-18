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
    <script src="${pageContext.request.contextPath}/js/jquery-1.7.2.min.js"></script>
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
                            <td id="pname${l.did}">
                                <script>
                                    $.post("/back/produ/${l.productCode}",function (data) {
                                        sname= data.sname;
                                        $("#pname${l.did}").html(sname);
                                    },"json");
                                </script>
                            </td>
                            <td>${l.entryAmount}</td>
                            <td><c:choose>
                                <c:when test="${l.status==3||l.status==7}"><font color="green">第一次审批通过</font></c:when>
                                <c:otherwise ><font color="red" >审批未通过</font></c:otherwise>
                            </c:choose>

                            </td>
                            <td>
                                <button class="btn btn-info  btn-xs" data-toggle="modal" > <a href="/back/towdetails/${l.did}">查看详情</a></button>
                                <button class="btn  btn-success btn-xs" data-toggle="modal" onclick="spcg(${l.did},${l.mobile},'${l.custName}',${l.entryAmount});">审批通过</button>
                                <button class="btn btn btn-danger btn-xs" data-toggle="modal"onclick="spsb(${l.did},${l.mobile},'${l.custName}');">审批失败</button>
                            </td>
                        </tr>
                    </c:forEach>

                    </tbody>
                </table>
                <div class="larry-table-page clearfix">
                    <a href="javascript:;" class="layui-btn layui-btn-small"><i class="iconfont icon-shanchu1"></i>删除</a>
                    <div id="page" class="page"></div>
                </div>
            </div>

        </div>
    </div>

</section>
<script type="text/javascript" src="../Backpage/common/layui/layui.js"></script>
<script type="text/javascript" src="../Backpage/js/newslist.js"></script>
<script>
    /*审批操作*/
    function spcg(id,tel,name,money) {

        layer.open({
            title: '提交申请成功',
            type: 1,
            skin: 'layui-layer-demo', //样式类名
            closeBtn: 1, //不显示关闭按钮
            anim: 2,  //弹出层样式
            shadeClose: true, //开启遮罩关闭
            area: ['35%', '55%'],
            content: "<div style='height:90%;width:90%;margin:0 auto;margin-top:5%;'><form action='/back/spcztwoc' method='post'>"
                +"贷款金额 <input type='text'style=' width: 150px;height: 30px;' name='money' placeholder='最高金额"+money+"'>"
                +" <h3 style='margin-left: 100px;'>审核说明</h3>"
                +"<input type='hidden' name ='id' value='"+id+"'/>"
                +"<input type='hidden' name ='tel' value='"+tel+"'/>"
                +"<input type='hidden' name ='name' value='"+name+"'/>"
                +"<textarea class='form-control ' rows='7' name='sq' style='width: 350px'placeholder='成功样式：恭喜您贷款成功，您贷款的最终金额为233333元，详情请登录账号查看。'></textarea>"
                +"<span class='text-orange m-l-sm xn-error '></span>"
                +"<input class='btn btn-group btn-group-lg' type='submit'value='提交'style='width: 80px;height: 40px;margin-left: 140px;'>"
                +"</form></div>"
        });
    }
    /*审批失败*/
    function spsb(id,tel,name) {

        layer.open({
            title: '提交申请成功',
            type: 1,
            skin: 'layui-layer-demo', //样式类名
            closeBtn: 1, //不显示关闭按钮
            anim: 2,  //弹出层样式
            shadeClose: true, //开启遮罩关闭
            area: ['35%', '52%'],
            content: "<div style='height:90%;width:90%;margin:0 auto;margin-top:5%;'><form action='/back/spcztwo' method='post'>"
                +" <h3 style='margin-left: 100px;'>审核说明</h3>"
                +"<input type='hidden' name ='id' value='"+id+"'/>"
                +"<input type='hidden' name ='tel' value='"+tel+"'/>"
                +"<input type='hidden' name ='name' value='"+name+"'/>"
                +"<textarea class='form-control ' rows='7' name='sq' style='width: 350px'placeholder='请输入返回给客会的的会话'></textarea>"
                +"<span class='text-orange m-l-sm xn-error '></span>"
                +"<input class='btn btn-group btn-group-lg' type='submit'value='提交'style='width: 80px;height: 40px;margin-left: 140px;'>"
                +"</form></div>"
        });
    }

</script>
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
