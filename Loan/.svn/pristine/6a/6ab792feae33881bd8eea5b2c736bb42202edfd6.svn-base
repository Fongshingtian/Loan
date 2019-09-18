<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>注册</title>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/style.css">
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/all.js"></script>

	<script type="text/javascript">
	$(function(){
      $("#phone").change(function(){
        	//$(this).css("background-color","#FFFFCC");
		  $("#msg").hide();
	  });
	});
	function changecode(){
	    var pcode=$("#pcode").html();
        $.post("${pageContext.request.contextPath}/account/tocode",{},function (data) {
            var code=data.code;
            var pcode=$("#pcode").html(code);

        },"json")
	}

	function check() {
        var uname=$("#uname").val();//用户名
        var loginpwd=$("#loginpwd").val();//登入密码
        var loginpwd2=$("#loginpwd2").val();//确认密码
        var phone=$("#phone").val();//电话
        var precode=$("#precode").val();//验证码
        var pcode=$("#pcode").html();//获取文本内容验证码
        var examineTele1 = /^(0|86|17951)?(13[0-9]|15[012356789]|17[01678]|18[0-9]|14[57])[0-9]{8}$/;  //手机验证
        if(uname==null||uname==""){
            alert("请输入用户名");
            return false;
        }
        if(loginpwd==null||loginpwd==""){
            alert("请输入密码");
            return false;
        }
        if(loginpwd2==null||loginpwd2==""){
            alert("请确认密码");
            return false;
        }
        if(loginpwd2!=loginpwd){
            alert("两次密码输入不一致");
            return false;
        }
        if(phone==null||phone==""){
            alert("请输入手机号码");
            return false;
        }
        if(!examineTele1.test(phone)){
            alert("请输入正确格式的手机号");
            return false;

        }
        if(precode==null||precode==""){
            alert("请输入验证码");
            return false;
        }
        if(precode!=pcode){
            alert("验证码输入错误");
            return false;
        }
        //去后台验证该用户是否存在

       <%--// $.post("${pageContext.request.contextPath}/account/toequlphnoe",{phone:phone},function (data) {--%>
            //var msg=data.msgg;
            //alert(data.msgg);
           // $("#pps").val(msg);
       // },"json")
		//var ssp=$("#pps").val();
        //alert(ssp);
        //if(ssp=="a"){
            //alert("该手机号码已经注册过用户，请换一个");
           // return false;
		//}
        return true;
    }
	</script>

	<style type="text/css">
		.boxcss{
			padding-top: 50px;
			width: 1000px;
			margin: 0 auto;
		}
	</style>
</head>
<body>
<!-- header start -->
<div class="zxcf_top_wper">
	<div class="zxcf_top px1000 clearfix">
		 <div class="zxcf_top_l fl">
		    <img src="images/zxcf_phone.png" alt="">
		    400-027-0101(工作时间9:00-17:30)
		    <a href="#"><img src="${pageContext.request.contextPath}/images/zxcf_weixin.png" alt=""></a>
		    <a href="#"><img src="${pageContext.request.contextPath}/images/zxcf_sina.png" alt=""></a>
		    <a href="#"><img src="${pageContext.request.contextPath}/images/zxcf_qq.png" alt=""></a>
		 </div>
		 <div class="zxcf_top_r fr">
		 	<a href="/account/tologin" class="curspan">立即登录</a>
		 	<span>|</span>
		 	<a href="/account/toreg">免费注册</a>
		 	<span>|</span>
		 	<a href="problem.html">常见问题</a>
		 </div>
	</div>
</div>
<!-- end top -->
<div class="zxcf_nav_wper">
	<div class="zxcf_nav clearfix px1000">
		 <div class="zxcf_nav_l fl"><img src="${pageContext.request.contextPath}/images/zxcf_logo.png" alt=""></div>
		 <div class="zxcf_nav_r fr">
		 		<img src="${pageContext.request.contextPath}/images/lg_pic01.png" alt="">
		 	<span>
		    <a href="#">返回首页</a></span>

		 </div>
	</div>
</div>
<!-- end  -->
<div class="reg_con_wper">
	<div class="boxcss">
		   <div class="reg_box clearfix">
		   	   <div class="reg_box_l fl">
		   	   	  <img src="
		   	   	  ${pageContext.request.contextPath}/images/reg_pic01.png" alt="">
		   	   </div>
		   	   <div class="reg_box_r fl">
		   	   	    <h2 class="lg_sec_tit clearfix">
	  	   	     	      <span class="fl">注册</span>
	  	   	     	      <em class="fr">已有帐号，<a href="/account/tologin">立即登录</a></em>
	  	   	     	</h2>
	  	   	     	<form method="post" action="${pageContext.request.contextPath}/account/regsucced" onsubmit="return check();">
	  	   	     	   	    <fieldset>
	  	   	     	   	    	  <p class="mt20">
	  	   	     	   	    	  	 <input type="text" placeholder="用户名" class="lg_input01 lg_input" name="uname" id="uname">
	  	   	     	   	    	  </p>
                                  <p class="mt20">
	  	   	     	   	    	  	 <input type="text" placeholder="密码" class="lg_input02 lg_input" name="loginpwd" id="loginpwd">
	  	   	     	   	    	  </p>
                                  <p class="mt20">
	  	   	     	   	    	  	 <input type="text" placeholder="密码确认" class="lg_input02 lg_input"id="loginpwd2">
	  	   	     	   	    	  </p>
                                  <p class="mt20">
	  	   	     	   	    	  	 <input type="text" placeholder="手机号" class="lg_input03 lg_input" name="phone" id="phone">
									<p style="color: red" id="msg">${msg}</p>
	  	   	     	   	    	  </p>
                                  <p class="mt20 yanzheng">
	  	   	     	   	    	  	 <input type="text" placeholder="验证码" class="lg_input04 lg_input" id="precode">
	  	   	     	   	    	  	 <span onclick="changecode();" style="cursor: pointer" id="pcode">${code}</span>
	  	   	     	   	    	  </p>
                                   <p class="mt20">
	  	   	     	   	    	  	 <input type="text" placeholder="邀请码" class="lg_input03 lg_input" name="tjrcode">
	  	   	     	   	    	  </p>
                                  <p class="pt10"><a href="#">使用条款</a>&nbsp;&nbsp;<a href="#">隐私条款</a></p>
                                 <p class="mt20">
									 <input type="submit" value="立即注册" class="lg_btn"/>
								 </p>
	  	   	     	   	    </fieldset>
	  	   	     	   </form>
		   	   </div>
		   </div>
	</div>
</div>
<!-- footer start -->
<div class="zscf_aboutus_wper">
	  <div class="zscf_aboutus px1000 clearfix">
	  	    <div class="zscf_aboutus_l fl">
	  	    	   <ul class="zscf_aboutus_lul clearfix">
	  	    	   	  <li class="pt10"><a href="#"><img src="${pageContext.request.contextPath}/images/app.png" alt=""></a>
	  	    	   	  </li>
	  	    	   	  <li>
	  	    	   	  <p class="pb20">服务热线</p>
	  	    	   	  <strong>400-027-0101</strong>
	  	    	   	  </li>
	  	    	   	  <li>
	  	    	   	  	  <p class="pb10 linkpic">
	  	    	   	  	     <a href="#"><img src="${pageContext.request.contextPath}/images/ft_sina.png" alt=""></a>
	  	    	   	  	     <a href="#"><img src="${pageContext.request.contextPath}/images/ft_weixin.png" alt=""></a>
	  	    	   	  	     <a href="#"><img src="${pageContext.request.contextPath}/images/ft_erji.png" alt=""></a>
	  	    	   	  	  </p>
	  	    	   	  	  <p><a href="#">kefu@zhongxincaifu.com</a></p>
	  	    	   	  </li>
	  	    	   </ul>
	  	    </div>
	  	    <!-- end left -->
	  	    <div class="zscf_aboutus_r fl clearfix">
	  	    	 <a href="#" class="fl ft_ewm"><img src="${pageContext.request.contextPath}/images/ft_erweima.png" alt=""></a>
	  	    	 <ul class="fl clearfix">
	  	    	 	<li><a href="#">联系我们</a></li>
	  	    	 	<li><a href="#">我要融资</a></li>
	  	    	 	<li><a href="problem.html">帮助中心</a></li>
	  	    	 	<li><a href="#">友情链接</a></li>
	  	    	 	<li><a href="#">招贤纳士</a></li>
	  	    	 	<li><a href="#">收益计算器</a></li>
	  	    	 </ul>
	  	    </div>
	  	    <!-- end right -->

	  </div>
</div>

<div class="zscf_bottom_wper">
	<div class="zscf_bottom px1000 clearfix">
		  <p class="fl">© 2014 zhongxincaifu &nbsp;  &nbsp;&nbsp;   中兴财富金融信息服务股份有限公司 &nbsp;&nbsp;&nbsp;</p>
		  <p class="fr">
		    <a href="#"><img src="${pageContext.request.contextPath}/images/360.png" alt=""></a>
		    <a href="#"><img src="${pageContext.request.contextPath}/images/kexin.png" alt=""></a>
		    <a href="#"><img src="${pageContext.request.contextPath}/images/norton.png" alt=""></a>
		  </p>
	</div>
</div>
<!-- footer end -->
</body>
</html>