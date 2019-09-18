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
                        <th>营业厅ID</th>
                        <th>预约产品ID</th>
                        <th>预约时间</th>
                        <th>姓名</th>
                        <th>身份证号</th>
                        <th>联系电话</th>
                    </tr>
                    </thead>
                    <tbody class="news_content">
                    <c:forEach items="${list}" var="l">
                        <tr>
                            <td>${l.id}</td>
                            <td>${l.outletId}</td>
                            <td>${l.productId}</td>
                            <td>${l.time}</td>
                            <td>${l.name}</td>
                            <td>${l.idCard}</td>
                            <td>${l.phone}</td>
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
        var phref="/onlineBookings?currpage="+currpage;
        window.location.href=phref;
    }
    layui.use(['jquery','layer','element','laypage'],function(){
        window.jQuery = window.$ = layui.jquery;
        window.layer = layui.layer;
        var element = layui.element();

        $(function(){
            $("#province").change(function(){
                var province=$(this).val();
                var citySel=$("#city");
                if(province!=""){
                    var city=$("option[value="+province+"]").attr("city");
                    var citys=city.split(",");
                    citySel.empty();
                    for(var i=0;i<citys.length-1;i++){
                        var option="<option value='"+citys[i].trim()+"'>"+citys[i]+"</option>";
                        citySel.append(option);
                    }
                }else{
                    citySel.html("<option value=''>请选择市区</option>");
                }
            });

            $("#sub").click(function(){
                // alert($("#id").val());
                var name=$("#name").val();
                var contactPhone=$("#contactPhone").val();
                var province =$("#province").val();
                var city =$("#city").val();
                var address =$("#address").val();
                var addressD =province+city+$("#address").val();
                if(name==""){
                    alert("请输入营业厅名！");
                }
                if(province==""){
                    alert("请选择省份！");
                }
                if(contactPhone==""){
                    alert("请输入联系电话！");
                }
                if(address!=''){
                    $.ajax({
                        type:"GET",
                        url:"https://api.map.baidu.com/geocoder/v2/?ak=eIxDStjzbtH0WtU50gqdXYCz&output=json&address="+addressD, //访问的链接
                        dataType:"jsonp",  //数据格式设置为jsonp
                        jsonp:"callback",  //Jquery生成验证参数的名称
                        success:function(data){  //成功的回调函数
                            if(data.status==0){
                                $("#longitude").val(data.result.location.lng);
                                $("#latitude").val(data.result.location.lat);
                                if($("#id").val()==undefined){
                                    $("#outletAdd").attr("action","/outletAdd");
                                }else{
                                    $("#outletAdd").attr("action","/outletUpd");
                                }
                                $("#outletAdd").submit();
                            }else{
                                alert("地址错误！");
                            }
                        },
                        error: function (e) {
                            alert("error");
                        }
                    });

                }else{
                    alert("请输入详细地址！");
                }
            });
        });
    });
</script>
</body>
</html>
