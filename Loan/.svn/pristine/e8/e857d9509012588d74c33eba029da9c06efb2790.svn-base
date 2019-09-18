<%--
  Created by IntelliJ IDEA.
  User: asus
  Date: 2019/4/11
  Time: 8:14
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib  uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
    <title>Title</title>
    <script src="https://www.xnph66.com/HomePage/resources/xnph/vender/bootstrap/dist/js/ie-emulation-modes-warning.js"></script>
    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <!--[if lt IE 9]>
    <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <script src="../js/loan/ie-emulation-modes-warning.js"></script>
    <link rel="stylesheet" type="text/css" href="https://www.xnph66.com/HomePage/resources/dist/build/build.css?v=2.1.2">
    <link rel="stylesheet" type="text/css" href="https://www.xnph66.com/HomePage/resources/dist/css/less/loanapply_style.css?v=2.1.2">

    <script type="text/javascript" src="https://www.xnph66.com/HomePage/resources/dist/build/build.js?v=2.1.2"></script>
    <link type="text/css" rel="stylesheet" href="https://www.xnph66.com/HomePage/resources/dist/build/skins/default/laydate.css" id="LayDateSkin">
    <link type="text/css" rel="stylesheet" href="https://www.xnph66.com/HomePage/resources/dist/build/need/laydate.css">


</head>
<body>
<div class="box-gry box-paddingb"style="width:1000px " >
    <div class="body-wrap" style="margin-left: 23%">
            <div class="loan-apply-right-content">
                <!-- action="https://www.xnph66.com/loan/apply/append" -->
                <div class="form-horizontal xn-form" role="form"   method="post" id="applyForm" novalidate="novalidate">
                  <p align="center" style="color: red" id="p1">${msg}</p>
                    <div class="form-group">
                        <label class="control-label w-sm m-r-md">姓名</label>
                        <input type="text" class="form-control w-xn-xxl i-b" readonly="readonly " value="${loan.custName}"   >
                        <span class="text-orange m-l-sm xn-error "></span>
                    </div>
                    <div class="form-group">
                        <label class="control-label w-sm m-r-md">申请时间</label>
                        <input type="text" class="form-control w-xn-xxl i-b" readonly="readonly " value="${loan.time}"   >
                        <span class="text-orange m-l-sm xn-error "></span>
                    </div>
                    <div class="form-group">
                        <label  class="control-label w-sm m-r-md">性别</label>
                        <input type="text" class="form-control w-xn-xxl i-b" readonly="readonly " value="<c:if test="${loan.sex==1}">男</c:if><c:if test="${loan.sex==0}">女</c:if>">
                        <span class="text-orange m-l-sm xn-error "></span>
                        <span class="text-orange m-l-sm xn-error "></span>
                    </div>
                    <div class="form-group">
                        <label  class="control-label w-sm m-r-md">身份证号</label>
                        <input type="text" class="form-control w-xn-xxl i-b" readonly="readonly " value="${loan.idCardNo}">
                        <span class="text-orange m-l-sm xn-error "></span>
                    </div>
                    <div class="form-group">
                        <label class="control-label w-sm m-r-md">常用手机号</label>
                        <input type="text" class="form-control w-xn-xxl i-b" readonly="readonly " value="${loan.mobile}" >
                        <span class="text-orange m-l-sm xn-error "></span>
                    </div>

                    <div class="form-group ">
                        <label class="control-label w-sm m-r-md">所在城市</label>
                        <input type="text" class="form-control w-xn-xxl i-b" readonly="readonly " value="${loan.province},${loan.city}" >

                        <span class="text-orange m-l-sm xn-error "></span>
                    </div>
                    <div class="form-group">
                        <label class="control-label w-sm m-r-md">申请产品</label>
                        <div class="w-xn-xxl i-b">
                            <input type="text" class="form-control w-xn-xxl i-b" readonly="readonly " id="pname"  >
                            <script>
                                $.post("/back/produ/${loan.productCode}",function (data) {
                                    sname= data.sname;
                                    $("#pname").val(sname);
                                },"json");
                            </script>
                        </div>
                        <span class="text-orange m-l-sm xn-error "></span>
                    </div>
                    <div class="form-group">
                        <label class="control-label w-sm m-r-md">申请额度</label>
                        <input type="text" class="form-control w-xn-xxl i-b" readonly="readonly " value="${loan.entryAmount}">
                        </span>
                    </div>
                    <div class="form-group">
                        <label class="control-label w-sm m-r-md">贷款期数</label>
                        <div class="w-xn-xxl i-b">


                            <div class="btn-group bootstrap-select" style="width: 100%;">
                                <input type="text" class="form-control w-xn-xxl i-b" readonly="readonly " value="${loan.periodNum}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label w-sm m-r-md pull-left">借款用途</label>
                        <div class="w-xn-xxl i-b pull-left pd-l-3">
                            <textarea class="form-control " rows="7" readonly="readonly " style="width: 350px">${loan.loanPurposeText}</textarea>
                        </div>

                        <span class="text-orange m-l-sm xn-error " style="padding-left:9px;"></span>
                    </div>
                    <div class="form-group mgtb-agree">
                        <label class="control-label w-sm m-r-md"></label>

                        <span class="text-orange m-l-sm xn-error "></span>

                    </div>

                    <div class="form-group">
                        <label class="control-label w-sm m-r-md"></label>
                        <input type="hidden" name="homeProvince">
                        <input type="hidden" name="homeCity">
                        <a href="/back/home/${dd}" ><button class="btn  btn-success btn-xs" data-toggle="modal" style="width: 100px">返回</button></a>

                    </div>
                </div>

            </div>



    </div>
</div>
</body>





<script type="text/javascript" src="${pageContext.request.contextPath}/js/apply.js?v=2.1.2"></script>

</html>
