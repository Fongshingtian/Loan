<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
	<title>Title</title>
  <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/images/images/css/xxplstyle.css">
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/images/images/css/kb.css">
  <script type="text/javascript" src="${pageContext.request.contextPath}/images/images/js/jquery-1.7.2.min.js"></script>
	<jsp:include page="../common/resources.jsp"></jsp:include>
<link rel="stylesheet" type="text/css" media="all" href="${pageContext.request.contextPath}/images/images/css/style.min.css" />
<script>
	var r=1;
</script>
  <script>
		function cm(id){
			var l="i"+id;
			var li="t"+id;
			if($("#"+li).hasClass('active')){//显示状态
				$('#'+li).removeClass('active');
				$('#'+l).attr('class','down');
			}else{//隐藏状态
				//关闭上一个
				if(r!=0){
					$('#t'+r).removeClass('active');
					$('#i'+r).attr('class','down');
				}
				//自己显示
				$('#'+l).attr('class','up');
				$('#'+li).addClass('active');
				r=id;
			}
		}
	</script>
 </head>
 <body style="background:#f0f0f0;">
 <div style="width: 100%;">
	 <jsp:include page="../common/top.jsp"></jsp:include>
	 <jsp:include page="../common/top2.jsp"></jsp:include>
 </div>
 <div style="position: relative;left:80px;width:1200px;">
	<div class="cms-side"  style="float:left;" id="cms-side">
		<jsp:include page="left.jsp"></jsp:include>
	</div>
	 <div class="kbdiv1">
		 <img src="${pageContext.request.contextPath}/images/images/media-80fec29113.jpg" width="923px" height="242" border="0" alt="">
		 <div class="kbdiv2"><font class="kbfont1">媒体快报</font><br><font class="kbfont2">Media Express</font></div>
		 <div>
			 <div class="kbdiv3">
				 <ul>
					 <c:forEach items="${news}" var="r">
						 <a href="${pageContext.request.contextPath}/wlk/backoneNew?id=${r.nid}">
							 <div class="kbdiv4">
								 <s class="kbdivs"></s><li class="kbli1">${r.ntitle}
								 <span style="position: relative;top:30px;right:40px;float:right;color:#cecece;">${r.rdate}</span></li>
							 </div>
						 </a>
					 </c:forEach>
				 </ul>
				 <div class="kbdiv5">
					 <div class="kbdiv6"><span class="kbspan1">第${pages.page}页/共 ${p}页</span>
						 <div class="kbdiv7">
							 <div class="kbdiv8"><a href="${pageContext.request.contextPath}/dis/mtkb?pe=1"><span  class="kbfont3">首页</span></a></div>
							 <div class="kbdiv9"></div>
							 <div class="kbdiv8"><a href="${pageContext.request.contextPath}/dis/mtkb?pe=${pages.previous}"><span  class="kbfont3">上一页</span></a></div>
							 <div class="kbdiv9"></div>
							 <c:forEach begin="0" end="${p-1}" varStatus="status">
								 <c:if test="${status.index+1==pages.page}">
									 <div class="kbdiv8 onthisa"><a href="${pageContext.request.contextPath}/dis/mtkb?pe=${status.index+1}"><span  class="kbfont3 onthisa2">${status.index+1}</span></a></div>
								 </c:if>
								 <c:if test="${status.index+1!=pages.page}">
									 <div class="kbdiv8"><a href="${pageContext.request.contextPath}/dis/mtkb?pe=${status.index+1}"><span  class="kbfont3">${status.index+1}</span></a></div>
								 </c:if>
							 </c:forEach>
							 <div class="kbdiv9"></div>
							 <div class="kbdiv8"><a href="${pageContext.request.contextPath}/dis/mtkb?pe=${pages.nextpage}"><span  class="kbfont3">下一页</span></a></div>
							 <div class="kbdiv9"></div>
							 <div class="kbdiv8"><a href="${pageContext.request.contextPath}/dis/mtkb?pe=${p}"><span  class="kbfont3">末页</span></a></div>
						 </div>
					 </div>
				 </div>
				 <div style="position: relative;top:40px;height: 205px;"><font style="position: relative;left:605px;color:#818181;line-height: 85px;font-weight: 600;">法定代表人签名：</font><img src="${pageContext.request.contextPath}/images/images/penggang-194d4f2333.png" style="position: relative;top:30px;left:605px;" width="112" height="80" border="0" alt=""></div>
			 </div>
		 </div>
	 </div>
 </div>
 </body>
 <script>
 	$("#u1l6a6").css("color","#F00"); 
	$('#u1l6').addClass('act');
	$('#i1').attr('class','up');
    $('#t1').addClass('active');
    $('#xxpl').addClass( "zm_cura");
 </script>
</html>