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
<jsp:include page="/WEB-INF/jsp/common/resources.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top2.jsp"></jsp:include>
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
<div class="box-gry box-paddingb">
    <div class="crumbs">
        <a href="#">首页&nbsp;</a>&gt;
        <a href="#">业务功能</a>
    </div>
    <div class="body-wrap">
        <div class="wrap-left fl">
            <div class="wrap-left-nav">
                <div class="wrap-left-nav-main">
                    <ul>
                        <li class="bg-gray-lter">
                            <a href="javascript:;" class="block-a">
                                <span class="l-n-title">业务功能</span>
                                <div class="wrap-left-nav-mask"></div>
                            </a>
                        </li>
                        <li class="current" id="xzsq">
                            <a  onclick="zxsq()">
                                <span class="l-n-title">在线申请</span>
                                <div class="wrap-left-nav-mask"></div>
                            </a>
                        </li>
                        <li class="" id="jdcx">
                            <a onclick="jdcx()">
                                <span class="l-n-title">进度查询</span>
                                <div class="wrap-left-nav-mask"></div>
                            </a>
                        </li>
                        <li class="" id="edcs">
                            <a onclick="edcs()">
                                <span class="l-n-title" >额度测算</span>
                                <div class="wrap-left-nav-mask" style="display: block"></div>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="quotaCalcul-sendcode-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog" style="width: 500px;z-index: inherit">

                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title" id="myModalLabel">验证手机</h4>
                    </div>
                    <div class="modal-body" >
                        <form class="form-horizontal m-t-md xn-form inp-warp" role="form" id="sendCodeForm">
                            <!--<img src="../../images/close.png" class="close-mask-calculate" data-dismiss="modal">-->
                            <div class="form-group">
                                <label  class="control-label w-s m-r-md">手机号</label>
                                <input type="text" class="form-control w-xn-xxl i-b" name="mobile" placeholder="请输入常用手机号" id="hm3">
                            </div>
                            <div class="form-group ">
                                <label  class="control-label w-s m-r-md">手机验证码</label>
                                <div class="w-xn-xxl i-b">
                                    <input type="text" class="form-control i-b" style="width: 186px;margin-right:11px;"  name="captcha" placeholder="请输入手机验证码" id="yzm2">
                                    <a class="btn btn-orange" style="width: 148px;margin-top: -2px;" id="captcha3" onclick="sendmsg3()">获取手机验证码</a>
                                </div>
                            </div>
                            <div class="text-danger" >
                                <label  class="control-label w-s m-r-md"></label>
                                <div class="w-xn-xxl i-b error-place" >

                                </div>
                            </div>
                            <div class="form-group">
                                <label  class="control-label w-s m-r-md"></label>
                                <button class="btn btn-orange w-xn-xxl txt-m" id="btn-show-result">立即查看</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!--在线申请-->
        <div class="wrap-right fr" id="div1">
            <div class="wrap-right-title">
                在线申请
            </div>
            <div class="loan-apply-right-content">
                <!-- action="https://www.xnph66.com/loan/apply/append" -->
                <form class="form-horizontal xn-form" role="form" action="${pageContext.request.contextPath}/loan/addloan"  method="post" id="applyForm" novalidate="novalidate">
                  <p align="center" style="color: red" id="p1">${msg}</p>
                    <div class="form-group">
                        <label for="custName" class="control-label w-sm m-r-md">姓名</label>
                        <input type="text" class="form-control w-xn-xxl i-b" id="custName" name="custName" placeholder="请输入姓名" value="">
                        <span class="text-orange m-l-sm xn-error "></span>
                    </div>
                    <div class="form-group">
                        <label for="sex" class="control-label w-sm m-r-md">性别</label>
                        <div class="w-xn-xxl i-b">

                            <div class="btn-group bootstrap-select" style="width: 100%;">
                                <select class="selectpicker" id="sex" name="sex" data-width="100%" title="请选择性别" value="" tabindex="-98">
                                    <option value="1">男</option>
                                    <option value="0">女</option>

                                </select></div>
                        </div>
                        <span class="text-orange m-l-sm xn-error "></span>
                    </div>
                    <div class="form-group">
                        <label for="idCardNo" class="control-label w-sm m-r-md">身份证号</label>
                        <input type="text" class="form-control w-xn-xxl i-b" id="idCardNo" name="idCardNo" placeholder="请输入身份证号">
                        <span class="text-orange m-l-sm xn-error "></span>
                    </div>
                    <div class="form-group">
                        <label class="control-label w-sm m-r-md">常用手机号</label>
                        <input type="text" class="form-control w-xn-xxl i-b" name="mobile" placeholder="请输入常用手机号" value="" id="hm">
                        <span class="text-orange m-l-sm xn-error "></span>
                    </div>
                    <div class="form-group ">
                        <label class="control-label w-sm m-r-md">手机验证码</label>
                        <div class="w-xn-xxl i-b">
                            <input type="text" class="form-control i-b" style="width: 186px;margin-right:11px;" name="captcha" placeholder="请输入手机验证码">
                            <a class="btn btn-orange" style="width: 148px;margin-top: -2px;" id="captcha1" onclick="sendmsg()">获取手机验证码</a>
                        </div>
                        <span class="text-orange m-l-sm xn-error "></span>
                    </div>
                    <div class="form-group ">
                        <label class="control-label w-sm m-r-md">所在城市</label>
                        <div class="w-xn-xxl i-b">

                            <div class="btn-group bootstrap-select form-control i-b" style="width: 148px;"> <select class="form-control selectpicker i-b" id="s_province" name="province"></select>&nbsp;&nbsp;</div>
                            <div class="pull-right" style="width: 186px"> <select  class="form-control" id="s_city" name="city" style="width: 180px;"></select>&nbsp;&nbsp;</div>
                            <script class="resources library" src="${pageContext.request.contextPath}/js/area.js" type="text/javascript"></script>

                                    <script type="text/javascript">_init_area();</script>







                        </div>
                        <span class="text-orange m-l-sm xn-error "></span>
                    </div>
                    <div class="form-group">
                        <label class="control-label w-sm m-r-md">申请产品</label>
                        <div class="w-xn-xxl i-b">


                            <div class="btn-group bootstrap-select form-control i-b" style="width: 350px;"> <select class="form-control selectpicker i-b" id="s2" data-width="100%" title="请选择申请产品" name="productCode">
                   <c:forEach items="${list}" var="p">

                       <option value='${p.pid}' data-loanupperlimit='200000.0' data-loanlowerlimit='20000.0' data-loanmonthnumber='${p.jkqs}'>${p.pname}</option>

                   </c:forEach>

                            </select>&nbsp;&nbsp;</div>

                        </div>
                        <span class="text-orange m-l-sm xn-error "></span>
                    </div>
                    <div class="form-group">
                        <label class="control-label w-sm m-r-md">申请额度</label>
                        <input type="text" class="form-control w-xn-xxl i-b" name="entryAmount" placeholder="请输入申请额度">
                        <span class=" m-l-sm xn-error text-gray">最大申请额度<a class="text-orange">200000</a>元</span>
                    </div>
                    <div class="form-group">
                        <label class="control-label w-sm m-r-md">贷款期数</label>
                        <div class="w-xn-xxl i-b">


                            <div class="btn-group bootstrap-select" style="width: 100%;"><select class="selectpicker" data-width="100%" title="请选择贷款分期数" name="periodNum" tabindex="-98"><option class="bs-title-option" value="">请选择贷款分期数</option>
                                <option value="">请选择贷款分期数</option>
                            </select></div>
                        </div>
                        <span class=" m-l-sm xn-error text-gray">最大分期数<a class="text-orange">36</a>期</span>
                    </div>
                    <div class="form-group">
                        <label class="control-label w-sm m-r-md pull-left">借款用途</label>
                        <div class="w-xn-xxl i-b pull-left pd-l-3">
                            <textarea class="form-control " rows="7" placeholder="请输入贷款用途" name="loanPurposeText" style="width: 350px"></textarea>
                        </div>

                        <span class="text-orange m-l-sm xn-error " style="padding-left:9px;"></span>
                    </div>
                    <div class="form-group mgtb-agree">
                        <label class="control-label w-sm m-r-md"></label>
                        <div class="w-xn-xxl i-b">
                            <label>
                                <input type="checkbox" name="isAgree">
                                我已阅读并同意
                            </label>
                            <a class="text-orange" data-toggle="modal" data-target="#myModal_xy" href="javascript:void(0);">《小刘借款须知》</a>
                        </div>
                        <span class="text-orange m-l-sm xn-error "></span>

                    </div>
                    <div class="form-group">
                        <label class="control-label w-sm m-r-md"></label>
                        <input type="hidden" name="homeProvince">
                        <input type="hidden" name="homeCity">
                        <button class="btn btn-orange w-xn-xxl txt-m" id="btn-loan-apply">提交</button>
                    </div>

                </form>

            </div>
        </div>

        <!--进度查询-->
        <div class="wrap-right fr" id="div2">
            <div class="wrap-right-title">
                进度查询
            </div>
            <div class="branch-appoint-right-content loan-process-right-content">
                <p align="center" style="color: red" >${msgs}</p>

                <form class="form-horizontal xn-form" role="form" action="${pageContext.request.contextPath}/loan/selejd" method="post" id="searchForm" novalidate="novalidate">

                    <div class="form-group">
                        <label for="name" class="control-label w-sm m-r-md">姓名</label>
                        <input type="text" class="form-control w-xn-xxl i-b" id="name" placeholder="请输入姓名" name="custName">
                        <span class="text-orange m-l-sm xn-error "></span>
                    </div>
                    <div class="form-group">
                        <label class="control-label w-sm m-r-md">身份证号</label>
                        <input type="text" class="form-control w-xn-xxl i-b" placeholder="请输入身份证号" name="idCardNo">
                        <span class="text-orange m-l-sm xn-error "></span>
                    </div>
                    <div class="form-group">
                        <label class="control-label w-sm m-r-md">常用手机号</label>
                        <input type="text" class="form-control w-xn-xxl i-b" placeholder="请输入常用手机号" name="mobile" id="hm2">
                        <span class="text-orange m-l-sm xn-error "></span>
                    </div>
                    <div class="form-group ">
                        <label class="control-label w-sm m-r-md">手机验证码</label>
                        <div class="w-xn-xxl i-b">
                            <input type="text" class="form-control i-b" style="width: 186px;margin-right:11px;" placeholder="请输入手机验证码" name="captcha">
                            <a class="btn btn-orange" style="width: 148px;margin-top: -2px;" id="captcha2" onclick="sendmsg2()">获取手机验证码</a>
                        </div>
                        <span class="text-orange m-l-sm xn-error "></span>
                    </div>
                    <div class="form-group m-t-lg">
                        <label class="control-label w-sm m-r-md"></label>
                        <button class="btn btn-orange w-xn-xxl txt-m" id="btn-search">查&nbsp;&nbsp;&nbsp;询</button>
                    </div>
                </form>
                <p id="result_search_wrap" style="padding-left: 165px;margin-top: -3px;">

                </p>
                <!--  -->
            </div>
        </div>

        <!--额度测算-->

        <div class="wrap-right fr" id="div3">
            <div class="wrap-right-title">
                额度测算
            </div>
            <div class="branch-appoint-right-content loan-process-right-content">
                <p align="center" style="color: red" >${msg3}</p>
                <div class="loan-calculateResult-right-content" id="quota-result-area" style="display:none">
                    <div class="bg-gray-ltest">
                        <div class="div-none"></div>
                        <div class="loan-process">
                            <ul>
                                <li class="active pull-left">提交基本信息</li>
                                <li class="active pull-right">计算可贷额度</li>
                            </ul>
                        </div>
                    </div>
                    <div class="success-txt">
                        <p class="loan-result-t txt-l-grey m-t-xxl">根据您提交的相关资料，预估您可贷金额为</p>
                        <p class=" txt-l-grey"><span class="txt-blue-l" id="txt-quota-result">- -</span>元</p>
                        <p>了解<a class="text-orange" href="https://www.xnph66.com/product1" >更多产品</a>　或　<a href="https://www.xnph66.com/index" class="text-orange">返回首页</a></p>
                    </div>
                </div>

                <div id="form-inp-area">
                    <div class="bg-gray-ltest">
                        <div class="div-none"></div>
                        <div class="loan-process  process_50">
                            <ul>
                                <li class="active">提交基本信息</li>
                                <li class="pull-right">计算可贷额度</li>
                            </ul>
                        </div>
                    </div>

                    <form class="form-horizontal m-t-md xn-form" role="form" id="quotaCalculationForm" action="${pageContext.request.contextPath}/loan/seled"  >

                        <div class="form-group">
                            <label for="custName" class="control-label w-sm m-r-md">姓名</label>
                            <input type="text" class="form-control w-xn-xxl i-b" id="custName" name="custName" placeholder="请输入姓名">
                            <span class="text-orange m-l-sm xn-error "></span>
                        </div>
                        <div class="form-group">
                            <label for="age" class="control-label w-sm m-r-md">年龄</label>
                            <input type="text" class="form-control w-xn-xxl i-b" id="age" name="age" placeholder="请输入年龄">
                            <span class="text-orange m-l-sm xn-error "></span>
                        </div>
                        <div class="form-group">
                            <label for="sex" class="control-label w-sm m-r-md">性别</label>
                            <div class="w-xn-xxl i-b">
                                <div class="btn-group bootstrap-select bootstrap-select-replace" style="width: 100%;">
                                    <button type="button" class="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="sex" title="请选择性别"><span class="filter-option pull-left">请选择性别</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button>
                                </div>
                                <select class="selectpicker" id="sex" name="sex" data-width="100%" title="请选择性别">
                                    <option value="">请选择性别</option>
                                    <option value="1">男</option>
                                    <option value="0">女</option>
                                </select>
                            </div>
                            <span class="text-orange m-l-sm xn-error "></span>
                        </div>
                        <div class="form-group">
                            <label  class="control-label w-sm m-r-md">婚姻状况</label>
                            <div class="w-xn-xxl i-b">
                                <div class="btn-group bootstrap-select bootstrap-select-replace" style="width: 100%;">
                                    <button type="button" class="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="sex" title="请选择婚姻状况"><span class="filter-option pull-left">请选择婚姻状况</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button>
                                </div>
                                <select class="selectpicker"  data-width="100%" name="marriageStatus" title="请选择婚姻状况">
                                    <option value="">请选择婚姻状况</option>
                                    <option value="0">已婚</option>
                                    <option value="1">未婚</option>
                                    <option value="2">离异</option>
                                    <option value="3">丧偶</option>
                                </select>
                            </div>
                            <span class="text-orange m-l-sm xn-error "></span>
                        </div>
                        <div class="form-group">
                            <label  class="control-label w-sm m-r-md">寿险保单</label>
                            <div class="w-xn-xxl i-b">
                                <div class="btn-group bootstrap-select bootstrap-select-replace" style="width: 100%;">
                                    <button type="button" class="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="sex" title="请选择您的保单类型"><span class="filter-option pull-left">请选择您的保单类型</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button>
                                </div>
                                <select class="selectpicker"  data-width="100%" name="lifePolicy" title="请选择您的保单类型">
                                    <option value="">请选择您的保单类型</option>
                                    <option value="0">有</option>
                                    <option value="1">无</option>
                                </select>
                            </div>
                            <span class="text-orange m-l-sm xn-error "></span>
                        </div>
                        <div class="form-group">
                            <label  class="control-label w-sm m-r-md">房产</label>
                            <div class="w-xn-xxl i-b">
                                <div class="btn-group bootstrap-select bootstrap-select-replace" style="width: 100%;">
                                    <button type="button" class="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="sex" title="请选择房产类型"><span class="filter-option pull-left">请选择房产类型</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button>
                                </div>
                                <select class="selectpicker"  data-width="100%" name="houseProperty" title="请选择房产类型">
                                    <option value="">请选择房产类型</option>
                                    <option value="0">租赁房屋</option>
                                    <option value="1">有抵押商品房</option>
                                    <option value="2">无抵押商品房</option>
                                    <option value="3">非商品房</option>
                                </select>
                            </div>
                            <span class="text-orange m-l-sm xn-error "></span>
                        </div>
                        <div class="form-group">
                            <label  class="control-label w-sm m-r-md">社保</label>
                            <div class="w-xn-xxl i-b">
                                <div class="btn-group bootstrap-select bootstrap-select-replace" style="width: 100%;">
                                    <button type="button" class="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="sex" title="请选择您的社保类型"><span class="filter-option pull-left">请选择您的社保类型</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button>
                                </div>
                                <select class="selectpicker"  data-width="100%" name="socialSecurity" title="请选择您的社保类型">
                                    <option value="">请选择您的社保类型</option>
                                    <option value="0">其他公司代缴</option>
                                    <option value="1">本公司代缴</option>
                                    <option value="2">个人缴费</option>
                                    <option value="3">其他</option>
                                </select>
                            </div>
                            <span class="text-orange m-l-sm xn-error "></span>
                        </div>
                        <div class="form-group">
                            <label  class="control-label w-sm m-r-md">发薪方式</label>
                            <div class="w-xn-xxl i-b">
                                <div class="btn-group bootstrap-select bootstrap-select-replace" style="width: 100%;">
                                    <button type="button" class="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="sex" title="请选择您的发薪方式"><span class="filter-option pull-left">请选择您的发薪方式</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button>
                                </div>
                                <select class="selectpicker"  data-width="100%" name="incomeType" title="请选择您的发薪方式">
                                    <option value="">请选择您的发薪方式</option>
                                    <option value="0">银行代发</option>
                                    <option value="1">现金</option>
                                    <option value="2">银行代发 + 现金</option>
                                </select>
                            </div>
                            <span class="text-orange m-l-sm xn-error "></span>
                        </div>
                        <div class="form-group">
                            <label  class="control-label w-sm m-r-md">单位性质</label>
                            <div class="w-xn-xxl i-b">
                                <div class="btn-group bootstrap-select bootstrap-select-replace" style="width: 100%;">
                                    <button type="button" class="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="sex" title="请选择您所在单位性质"><span class="filter-option pull-left">请选择您所在单位性质</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button>
                                </div>
                                <select class="selectpicker"  data-width="100%" name="nature" title="请选择您所在单位性质">
                                    <option value="">请选择您所在单位性质</option>
                                    <option value="0">国企</option>
                                    <option value="1">三资</option>
                                    <option value="2">私企</option>
                                    <option value="3">个体</option>
                                    <option value="4">政府部门</option>
                                    <option value="5">事业单位</option>
                                    <option value="6">其他</option>
                                </select>
                            </div>
                            <span class="text-orange m-l-sm xn-error "></span>
                        </div>
                        <div class="form-group">
                            <label  class="control-label w-sm m-r-md">是否持有信用卡</label>
                            <div class="w-xn-xxl i-b">
                                <label>
                                    <input type="radio" name="isCreditCard" value="0" id="radio-has-creditcard" >
                                    有
                                </label>
                                <label class="m-l-lg">
                                    <input type="radio" name="isCreditCard" value="1" >
                                    无
                                </label>
                            </div>
                            <span class="text-orange m-l-sm xn-error "></span>
                        </div>
                          <input type="hidden" name="captcha" id="yzm">
                        <div id="hasCreditCardArea" style="display:none">

                            <div class="form-group">
                                <label for="creditCardAmount" class="control-label w-sm m-r-md">信用卡额度</label>
                                <input type="text" class="form-control w-xn-xxl i-b" id="creditCardAmount" name="creditCardAmount" placeholder="请输入信用卡额度">
                                <span class="text-orange m-l-sm xn-error "></span>
                            </div>
                            <div class="form-group">
                                <label  class="control-label w-sm m-r-md">信用卡还款方式</label>
                                <div class="w-xn-xxl i-b">
                                    <select class="selectpicker"  data-width="100%" name="creditCardRepayMethod" title="请选择信用卡还款方式">
                                        <option value="">请选择信用卡还款方式</option>
                                        <option value="0">全额还款</option>
                                        <option value="1">自定义还款</option>
                                    </select>
                                </div>
                                <span class="text-orange m-l-sm xn-error "></span>
                            </div>


                        </div>


                        <div class="form-group">
                            <label  class="control-label w-sm m-r-md"></label>
                            <button class="btn btn-orange w-xn-xxl txt-m" id="btn-quota-calculation" onclick="sub()">提&nbsp&nbsp&nbsp交</button>
                        </div>

                    </form>
                </div><!-- form-inp-area -->

            </div>
        </div>
        <div class="clearfix" ></div>
        <div class="clearfix"></div>
    </div>
</div>
<c:if test="${isshow==1}">
    <script type="text/javascript">
        $("#div2").hide();
        $("#div3").hide();
        $('#xzsq').addClass( "current");
        $('#jdcx').removeClass("current");
        $('#edcs').removeClass("current");
    </script>

</c:if>
<c:if test="${isshow==2}">
    <script type="text/javascript">
        $("#div1").hide();
        $("#div3").hide();
        $('#jdcx').addClass( "current");
        // $("#xzsq").attr("class","");
        $('#xzsq').removeClass("current");

    </script>

</c:if>
<c:if test="${isshow==3}">
    <script type="text/javascript">
        $("#div1").hide();
        $("#div2").hide();
        $('#edcs').addClass( "current");
        $('#xzsq').removeClass("current");
        $('#jdcx').removeClass("current");


    </script>

</c:if>
</body>

<script type="text/javascript" src="https://www.xnph66.com/HomePage/resources/dist/js/about.js?v=2.1.2"></script>


<script type="text/javascript" src="${pageContext.request.contextPath}/js/quota_calculation.js?v=2.1.2"></script>
<script type="text/javascript">


    //发送验证码后一分钟后才能再次发送
    function doDisAbled(){
        var time=60;
        var captcha=$("#captcha1");
        forTime(time,captcha);
        captcha.attr("disabled",true);
        function forTime(time,captcha){
            setTimeout(function(){
                time--;
                captcha.html(time+"秒后重发");
                if(time>0){
                    forTime(time,captcha);
                }else{
                    captcha.html("发送短信验证码");
                    captcha.attr("disabled",false);
                }
            },1000)
        }
    }
    function doDisAbled1(){
        var time=60;
        var captcha=$("#captcha2");
        forTime(time,captcha);
        captcha.attr("disabled",true);
        function forTime(time,captcha){
            setTimeout(function(){
                time--;
                captcha.html(time+"秒后重发");
                if(time>0){
                    forTime(time,captcha);
                }else{
                    captcha.html("发送短信验证码");
                    captcha.attr("disabled",false);
                }
            },1000)
        }
    }
    function doDisAbled2(){
        var time=60;
        var captcha=$("#captcha3");
        forTime(time,captcha);
        captcha.attr("disabled",true);
        function forTime(time,captcha){
            setTimeout(function(){
                time--;
                captcha.html(time+"秒后重发");
                if(time>0){
                    forTime(time,captcha);
                }else{
                    captcha.html("发送短信验证码");
                    captcha.attr("disabled",false);
                }
            },1000)
        }
    }
    $('.selectpicker').on('rendered.bs.select', function(){

        $(this).parent().parent().find('.bootstrap-select-replace').remove();

    });

      function  jdcx() {

          $("#div2").show();
          $("#div1").hide();
          $("#div3").hide();
      }
    function zxsq() {
        $("#div1").show();
        $("#div2").hide();
        $("#div3").hide();
    }
    function edcs() {
        $("#div1").hide();
        $("#div2").hide();
        $("#div3").show();

    }

 function sendmsg() {
     var hm=$("#hm").val();
     if(hm==null||hm==""){

         alert("请输入手机号码！");
         return;
     }
     doDisAbled()
     $.post("${pageContext.request.contextPath}/loan/sendmsg",{hm:hm},function (data) {

         alert("验证码发送成功！")


     },"text")


 }
 

    function sendmsg2() {
        var hm=$("#hm2").val();
        if(hm==null||hm==""){

            alert("请输入手机号码！");
            return;
        }
        doDisAbled1()
        $.post("${pageContext.request.contextPath}/loan/sendmsg2",{hm:hm},function (data) {

            alert("验证码发送成功！")


        },"text")


    }
    function sendmsg3(){


        var hm=$("#hm3").val();
        if(hm==null||hm==""){

            alert("请输入手机号码！");
            return;
        }
        doDisAbled2()
        $.post("${pageContext.request.contextPath}/loan/sendmsg3",{hm:hm},function (data) {

            alert("验证码发送成功！")


        },"text")

    }
    $('#zxsq').addClass( "zm_cura");

</script>

<script type="text/javascript">
    var Gid  = document.getElementById ;
    var showArea = function(){
        Gid('show').innerHTML = "<h3>省" + Gid('s_province').value + " - 市" +
            Gid('s_city').value + " - 县/区" +
            Gid('s_county').value + "</h3>"
    }
    Gid('s_county').setAttribute('onchange','showArea()');
</script>




<script type="text/javascript" src="${pageContext.request.contextPath}/js/apply.js?v=2.1.2"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/result_search.js?v=2.1.2"></script>
<jsp:include page="/WEB-INF/jsp/common/bottom.jsp"></jsp:include>
</html>
