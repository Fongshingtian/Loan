<%--营业网点(后台)--%>
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
                        <th>营业厅名</th>
                        <th>所属省份</th>
                        <th>所属市区</th>
                        <th>详细地址</th>
                        <th>联系电话</th>
                        <th>经度</th>
                        <th>纬度</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody class="news_content">
                    <c:forEach items="${list}" var="l">
                        <tr>
                            <td>${l.id}</td>
                            <td>${l.name}</td>
                            <td>${l.province}</td>
                            <td>${l.city}</td>
                            <td>${l.address}</td>
                            <td>${l.contactPhone}</td>
                            <td>${l.longitude}</td>
                            <td>${l.latitude}</td>
                            <td>
                                <button infoId="${l.id}" infoName="${l.name}" infoProvince="${l.province}" infoLongitude="${l.longitude}"
                                    infoLatitude="${l.latitude}"    infoCity="${l.city}" infoAddress="${l.address}" infoContactPhone="${l.contactPhone}"
                                        class="layui-btn layui-btn-mini" onclick="upd(this)"><i class="iconfont icon-edit" ></i>编辑 </button>
                                <a class="layui-btn layui-btn-danger layui-btn-mini" onclick="del(${l.id})"><i class="layui-icon"></i> 删除</a>
                            </td>
                        </tr>
                    </c:forEach>
                    </tbody>
                </table>
                <div class="larry-table-page clearfix">
                    <a href="javascript:;" class="layui-btn layui-btn-small" onclick="toAdd();"><i class="iconfont icon-shanchu1"></i>添加</a>
                    共${rows}条数据
                    共${totalpage}页
                    <!--分页-->
                    <div class="about-page" style="margin-left: 450px;margin-top: -40px">
                        <ul class="pagination">
                            <!-- pageNum 当前页码
                            pageSize 每页条数class="disabled"
                            totalPage 总页数 -->
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
<div id="add" style="display: none">
    <br>
    <form id="outletAdd" method="post" >
        <table align="center" width="50%">
            <tr>
                <td>营业厅名称</td><td><input type="text" id="name" name="name"></td>
            </tr>
            <tr>
                <td>所属市区</td>
                <td>
                    <select name="province" id="province">
                        <option value="">请选择省份</option>
                        <c:forEach items="${province}" var="p">
                            <option city="<c:forEach items="${province[p.key]}" var="c"> ${c.key},</c:forEach>" value="${p.key}"> ${p.key} </option>
                        </c:forEach>
                    </select>
                    <select name="city" id="city">
                        <option value="">请选择市区</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>联系电话</td><td><input type="text" id="contactPhone" name="contactPhone"></td>
            </tr>
            <tr>
                <td>
                    详细地址</td><td><input type="text" id="address" name="address">
                    <input type="hidden" id="longitude" name="longitude">
                    <input type="hidden" id="latitude" name="latitude">
                </td>
            </tr>
            <tr>
                <td  align="center">
                    <input type="button" onclick="toList()" name="sub" value="返回列表">
                </td>
                <td  align="center">
                    <input type="button" id="sub" name="sub" value="提交">
                </td>
            </tr>
        </table>
    </form>
</div>
<script type="text/javascript" src="/Backpage/common/layui/layui.js"></script>
<script type="text/javascript" src="/Backpage/js/newslist.js"></script>
<script type="text/javascript">
    function del(id){
        if(confirm("确定删除?")){
            window.location.href="/outletDel?id="+id;
        }
    }
    //选页
    function choosePage(currpage){
        // var province =$("#province").val();
        // var city =$("#city").val();
        var phref="businessOutlets?currpage="+currpage;
        window.location.href=phref;
    }
    function upd(e){
        var o=$(e);
        $("#id").remove();
        $("#list").css("display","none");
        $("#add").css("display","inline");
        var hid="<input type='hidden' id='id' name='id' value='"+o.attr("infoId")+"'>"
        $("#outletAdd").append(hid);
        $("#name").val(o.attr("infoName"));
        $("#province").val(o.attr("infoProvince"));

        var citySel=$("#city");
        var city=$("option[value="+o.attr("infoProvince")+"]").attr("city");
        var citys=city.split(",");
        citySel.empty();
        for(var i=0;i<citys.length-1;i++){
            var option;
            if(citys[i].trim()==o.attr("infoCity")){
                option="<option selected value='"+citys[i].trim()+"'>"+citys[i]+"</option>";
            }else{
                option="<option value='"+citys[i].trim()+"'>"+citys[i]+"</option>";
            }
            citySel.append(option);
        }
        $("#contactPhone").val(o.attr("infoContactPhone"));
        $("#address").val(o.attr("infoAddress"));
        $("#longitude").val(o.attr("infoLongitude"));
        $("#latitude").val(o.attr("infoLatitude"));
    }
    function toAdd(){

        $("#contactPhone").val("");
        $("#name").val("");
        $("#address").val("");
        $("#province").val("");
        $("#city").empty();
        $("#city").append("<option value='' >请选择市区</option>");
        $("#longitude").val("");
        $("#latitude").val("");

        $("#id").remove();
        $("#list").css("display","none");
        $("#add").css("display","inline");
    }
    function toList(){
        $("#list").css("display","inline");
        $("#add").css("display","none");
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
