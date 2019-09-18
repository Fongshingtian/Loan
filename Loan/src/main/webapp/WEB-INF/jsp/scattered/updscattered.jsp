<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
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
		    <div class="layui-tab-content larry-personal-body clearfix mylog-info-box">
		         <!-- 操作日志 -->
                <div class="layui-tab-item layui-field-box layui-show">
                     <table class="layui-table table-hover" lay-even="" lay-skin="nob">
                          <thead>
                              <tr>
                                  <th>申请人</th>
                                  <th>性别</th>
                                  <th>身份证号</th>
                                  <th>手机号码</th>
                                  <th>申请额度</th>
                                  <th>贷款期数</th>
                                  <th>借款用途</th>
                                  <th>审核说明</th>
                                  <th>操作</th>
                              </tr>
                          </thead>
                          <tbody id="qk">
                          <c:forEach items="${l}" var="l">
                              <tr>
                                <td>${l.custName}</td>
                                <td><c:if test="${l.sex==1}">男</c:if><c:if test="${l.sex!=1}">女</c:if></td>
                                <td>${l.idCardNo}</td>
                                <td>${l.mobile}</td>
                                <td>${l.entryAmount}</td>
                                <td>${l.periodNum}</td>
                                <td>${l.loanPurposeText}</td>
                                <td>${l.sm}</td>
                                <td><a href="${pageContext.request.contextPath}/scatter/sb?id=${l.did}" class="layui-btn layui-btn-small"><i class="iconfont icon-shanchu1"></i>设为散标</a></td>
                              </tr>
                          </c:forEach>
                          </tbody>
                     </table>
                     <div class="larry-table-page clearfix">
                          <%--<a href="javascript:;" class="layui-btn layui-btn-small"><i class="iconfont icon-shanchu1"></i>删除</a>--%>
				          <div id="page" class="page"></div>
			         </div>
			    </div>
			     <!-- 登录日志 -->
			    <div class="layui-tab-item layui-field-box">
			          <table class="layui-table table-hover" lay-even="" lay-skin="nob">
                           <thead>
                              <tr>
                                  <th><input type="checkbox" id="selected-alls"></th>
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
	</div>
</section>
<script type="text/javascript" src="${pageContext.request.contextPath}/Backpage/common/layui/layui.js"></script>
<script type="text/javascript">
	layui.use(['jquery','layer','element','laypage'],function(){
	      window.jQuery = window.$ = layui.jquery;
	      window.layer = layui.layer;
          var element = layui.element(),
              laypage = layui.laypage;

            
          laypage({
					cont: 'page',
					pages: ${p} //总页数
						,
					groups: 5 //连续显示分页数
						,
					jump: function(obj, first) {
						//得到了当前页，用于向服务端请求对应数据
						var curr = obj.curr;
						if(!first) {
							<%--layer.msg('第 '+ obj.curr +' 页'+${sp});--%>
							var sad=${sp};
                            $.post("fastJSONs1", {t: obj.curr,i:sad}, function (data) {
                                var qasd=data.user;//id=qk;
                                $("#qk").empty();
                                $.each(qasd,function(index,u){
                                    var t1=$("<tr>",{});
                                    var t1td1=$("<td>",{
                                        text:u.custName
                                    });
                                    var sex="男";
                                    if(u.sex!=1){
                                        sex="女";
                                    }
                                    var t1td2=$("<td>",{
                                        text:sex
                                    });
                                    var t1td3=$("<td>",{
                                        text:u.idCardNo
                                    });
                                    var t1td4=$("<td>",{
                                        text:u.mobile
                                    });
                                    var t1td5=$("<td>",{
                                        text:u.entryAmount
                                    });
                                    var t1td6=$("<td>",{
                                        text:u.periodNum
                                    });
                                    var t1td7=$("<td>",{
                                        text:u.loanPurposeText
                                    });
                                    var t1td8=$("<td>",{
                                        text:u.sm
                                    });
                                    var t1td9=$("<td>",{});
                                        var sad="${pageContext.request.contextPath}/scatter/sb?id="+u.id
                                        var a=$("<a>",{
                                            href:sad,
                                            class:"layui-btn layui-btn-small"
                                        });
                                            var ai=$("<i>",{
                                                class:"iconfont icon-shanchu1",
                                            });
                                        $(a).append(ai);
                                        $(a).append("设为散标");
                                    $(t1td9).append(a);
                                $(t1).append(t1td1);
                                $(t1).append(t1td2);
                                $(t1).append(t1td3);
                                $(t1).append(t1td4);
                                $(t1).append(t1td5);
                                $(t1).append(t1td6);
                                $(t1).append(t1td7);
                                $(t1).append(t1td8);
                                $(t1).append(t1td9);
                                $("#qk").append(t1);
                                });
                            }, "json");
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