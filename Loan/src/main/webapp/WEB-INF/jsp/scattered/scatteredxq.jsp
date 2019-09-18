<%--
  Created by IntelliJ IDEA.
  User: 毛明峰
  Date: 2019/4/24
  Time: 10:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<jsp:include page="/WEB-INF/jsp/common/resources.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top.jsp"></jsp:include>
<jsp:include page="/WEB-INF/jsp/common/top2.jsp"></jsp:include>
<head>
    <%--<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/mmfcs.css">--%>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/images/images/css/kb.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/asda.css">

    <link rel="shortcut icon" href="//image.xiaoniu88.com/static/WebXn/dist/images/favicon.ico" type="image/x-icon"/>
    <link rel="stylesheet" href="//image.xiaoniu88.com/static/WebXn/dist/css/base-56e256b865.css"/>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/scatteredstyle.css">
    <%--<link rel="stylesheet" href="//image.xiaoniu88.com/static/WebXn/dist/page/product/list/css/style-ceb45e7681.css" />--%>
    <script src="${pageContext.request.contextPath}/js/jquery-1.7.2.min.js"></script>
    <script type="text/javascript" src="//image.xiaoniu88.com/static/WebXn/dist/lib/base-6100562494.js"></script>


    <script>
        window.global = {
            cdn: "//image.xiaoniu88.com",
            siteroot: "http://www.xiaoniu88.com",
            staticPath: "//image.xiaoniu88.com/static/WebXn/dist",
            contextPath: "/product",
            serverTime: "1555846483516" * 1,
            userId: "",
            isLogin: false
        }
    </script>

    <script type="text/javascript"
            src="//image.xiaoniu88.com/static/WebXn/dist/module/common/common-83987ed24e.js"></script>
    <script>
        $(function () {
            seajs.use('module/common/common')
        })
    </script>
    <link rel="stylesheet"
          href="//image.xiaoniu88.com/static/WebXn/dist/page/product/toolList/css/style-2b0c5fa50e.css"/>
</head>
<body>

<!-- 头部 -->

<!--[if lt IE 9]>
<script src="//image.xiaoniu88.com/static/WebXn/dist/lib/html5/html5-083d84e804.js"></script>
<![endif]-->
<%--投标工具散标装让--%>
<div class="product-menu-contanier" id="productMenu">
    <ul class="product-menu clearfix">
        <li>
            <a href="${pageContext.request.contextPath}/invest/toinvest" class=" active">投标工具 (<em id="optimizeCount"
                                                                                                   data-count="11">10</em>)</a>
        </li>
        <li>
            <a href="${pageContext.request.contextPath}/scatter/index" id="menu_common">散标 (<em id="commonCount">售罄</em>)</a>
        </li>
    </ul>
</div>



<!-- body内容 -->
<div class="container detail-container" id="contanier"><div class="shoulder" id="shoulderModel">
    <div class="neck">
        <h2 class="title">消费贷AH20190506-a2</h2>
        <div class="tags"></div>
        <a class="contract to-contract serviceContract" href="javascript:;" data-url="/cms/contract/pcts/1/template/productId/69138688">《服务合同》</a>
        <a class="contract to-contract loanContract" href="javascript:;" data-url="/cms/contract/pcts/2/template/productId/69138688">《借款合同》</a>
        <a class="contract dialog-risk-info" href="javascript:;">《风险提示函》</a>
    </div>
    <div class="subject g-cf">
        <div class="sub-left">
            <div class="sub-left-top">
                <dl class="earnings">
                    <dt class="curRate">
                        <b class="f-rate color-orange" id="interest">${s.rate}<span>%</span></b>
                    </dt>
                    <dd>参考利率
                        <i class="icon icon-question-mark js_poshytip" title="小牛在线P2P互联网金融平台所有项目参考利率是在参考同类型工具历史数据得出，&lt;br&gt;并不代表实际收益，市场有风险，出借需谨慎。"></i>
                    </dd>
                </dl>
                <dl class="borrow-amount">
                    <dt>
                        <span class="f-rate js_term" id="period">${s.term}个月</span>
                        <i class="text-tag" title="持满1个月且剩余期限不能少于1个月">1个月可转</i>
                    </dt><dd>项目期限
                </dd>
                </dl>
                <dl class="lock-day">
                    <dt><span class="f-rest">${s.amount-s.money}</span> 元</dt>
                    <dd>项目金额</dd>
                </dl>
            </div>
            <div class="sub-left-bottom g-cf">
                <dl>
                    <dt>到期时间：</dt>
                    <dd>${dq}</dd>
                </dl>
                <dl>
                    <dt>还款方式：</dt>
                    <dd>${s.hkfs}<i class="icon icon-question-mark js_poshytip" title="每月还本金及利息，其中还款本金每月相同。"></i></dd>
                </dl>
                <dl><dt>起息日期：</dt><dd>${s.theory}</dd></dl>
                <dl><dt>项目进度：</dt><dd><span class="schedule">
                    <c:if test="${js==0}">
                        <b style="width:${jd}%"></b></span><span>${jd}%</span></dd>
                    </c:if>
                    <c:if test="${js==1}">
                        <b style="width:100%"></b></span><span>100%</span></dd>
                    </c:if>
                </dl>
                <dl><dt>募集期：</dt><dd>3天</dd></dl>
                <dl><dt>项目风险等级：</dt><dd>R+2级<i class="icon icon-question-mark js_poshytip" title="项目风险等级：&lt;br&gt;R+1为优质资产，资信状况好，安全系数高且本金收益稳定；&lt;br&gt;R+2为优良资产，资信状况良好，安全系数较高且本金收益较稳定；&lt;br&gt;R+3为一般性资产，资产状况和安全系数一般，本金收益有一定程度的波动。"></i></dd></dl>
                <dl><dt>出借条件：</dt><dd>风险承受能力为“稳健型”及以上</dd></dl>
            </div>
        </div>
        <div class="sub-right">
            <div class="during" id="ss" style="display: none">
                <div style="width: 350px;height: 250px;margin:auto;border:1px #f5a346 solid; background-color:#f58746 ">
                    <div class="modal-header">
                        <button type="button" onclick="$('#ss').hide();$('#during').show();" class="close" data-dismiss="modal" aria-hidden="true"style="width: 30px;margin-left: 320px;">
                            &times;
                        </button>
                        <h4 class="modal-title" style="font-size: 32px;margin-left: 100px;">
                            请输入密码
                        </h4>
                    </div>
                    <div  style="margin:auto; width: 300px; height: 100px;  ">
                        <br>

                        <br><input id="pass" maxlength="18" style="width: 300px;height: 60px;font-size:xx-large;" class="layui-form-text" type="password" name="password">
                        <button class="btn btn-info  btn-xs" data-toggle="modal" style="width: 100px;height: 40px;font-size:25px;margin-left: 100px;" onclick="password();">确定</button>
                    </div>
                    <script>
                        function password() {
                            var password = $("#pass").val();
                            $("#password").val(password);
                            $("#buyform").submit();
                        }

                    </script>
                </div>
            </div><%--//输入密码--%>
            <div class="during" id="hb" style="display: none">
                <div style="width: 350px;height: 250px;margin:auto;border:1px #f5a346 solid; background-color:#f58746 ">
                    <div class="modal-header">
                        <h4 class="modal-title" style="font-size: 32px;margin-left: 80px;">
                            选择优惠红包
                        </h4>
                    </div>
                    <div  style="margin:auto; width: 300px; height: 100px; ">
                        <br>
                        <span id="hbs"></span>

                        <button class="btn btn-info  btn-xs" data-toggle="modal" style="width: 100px;height: 40px;font-size:25px;margin-left: 100px;margin-top: 60px;" onclick="
confirm();">确定</button>
                    </div>
                    <script>
                        function confirm() {
                            $("#ss").show();
                            $("#hb").hide();
                            $("#during").hide();
                        }

                    </script>
                </div>
            </div>
            <%--正常--%>
            <div class="during" id="during">
                <form id="buyform" name="form"
                      action="/scatter/buy"
                      method="post" autocomplete="off">
                    <div id="hhss" class="remaining-amount g-cf" >
                        <label class="g-fl">网贷账户余额：</label>
                        <a href="${pageContext.request.contextPath}/account/tologin"><span class="g-fl to-login" >登录</span></a><label>后可见</label>
                    </div>

                    <div  id="hhsss"  style="display: none" class="remaining-amount g-cf">
                        <label class="g-fl">网贷账户余额：</label>
                        <span class="g-fl">${acc.kyye}</span><em class="g-fl">元</em>
                        <a class="to-recharge g-fr" href="/payment/recharge/index">充值</a>
                        <input type="hidden" id="periodd" value="" name="periodd" >  <%--期数--%>
                        <input type="hidden" id="sids" value="" name="sids" >  <%--投标的标号--%>
                        <input type="hidden" id="periodsd" value="" name="months" >  <%--期数--%>
                        <input type="hidden" id="interests" value="" name="interest" > <%--利息率--%>
                        <input type="hidden" id="password" name="password">           <%--密码--%>
                        <input type="hidden" value="${user.uid}" name="suid" >  <%--id--%>
                        <input type="hidden" id="realEarningsd" name="realEarnings" >     <%--可获取利息--%>

                        <input type="hidden"  id="hongbao" name="hongbao" value="" >
                        <input type="hidden"  id="hongbaoid" name="hongbaoid" value="" >
                    </div>
                    <div class="target-earnings">
                        <div id="earningsWrap"style="display: none" class="g-dn"><label id="periodss">目标收益：</label><span
                                id="realEarnings">0.00</span>元
                        </div>
                    </div>
                    <div class="purchase">
                        <input name="buyAmount" type="text" id="buyMoney" placeholder="100元起投，100元递增" maxlength="20" onkeyup="tsts(this);">
                    </div>
                    <div class="tips"></div>

                    <script>
                        var amount = ${s.amount-s.money};  //标的金额
                        $(document).ready(function () {
                            if(${user.uid !=null}){
                               $("#hhsss").show();
                               $("#hhss").hide();
                            }

                        });
                        var kyye=0;
                        if(${acc==null}){
                            kyye =0;
                        }else{
                            kyye =${acc.kyye};
                        }

                        function tsts(v) {

                            v.value = v.value.replace(/\D/g, '')
                            var bumone = $("#buyMoney").val();     /*购买的金额*/
                            var bumoney=parseInt(bumone);
                            var ins = $("#interest").html(); /*利息*/
                            var interest =parseFloat(ins);
                            var ss = parseFloat(interest);      /*利息*/
                            $("#interests").val(ss);
                            var period = $("#period").html();       /*期数*/
                            $("#periodd").val(period);//获取期数传递
                            var periods = parseInt(period);
                            $("#periodsd").val(periods);

                            var id =${s.id};
                            $("#sids").val(id);
                           //计算利息
                           /* var lx = ss *bumoney*0.01;
                            $("#realEarningsd").val(lx);
                            $("#realEarnings").html(lx);*/
                            if (bumoney>0) {
                                $("#earningsWrap").hide();
                                if (bumoney < 100) {
                                    $("#notmoney").show();
                                    $("#increase").hide();
                                    $("#hst").hide();
                                    $("#fs").hide();
                                    $("#quotas").hide();
                                }
                                if (bumoney >= 100) {

                                    if(bumoney%100!=0){
                                        $("#increase").show();
                                        $("#hst").hide();
                                    }
                                    if(bumoney%100==0){
                                        if(kyye < bumoney){
                                            $("#increase").hide();
                                            $("#hst").show();
                                        }
                                        if(kyye>=bumoney){
                                            $("#hst").hide();
                                            $("#earningsWrap").show();
                                        }

                                        $("#increase").hide();

                                        if(kyye<=0){
                                            $("#hst").show();
                                        }
                                    }
                                    if(bumoney>amount){
                                        $("#fs").show();
                                        $("#quotas").hide();
                                        $("#hst").hide();
                                        $("#increase").hide();
                                    }
                                    if(bumoney<=amount){
                                        $("#fs").hide();

                                    }

                                    $("#notmoney").hide();



                                    if (periods == 36) {
                                        var sss = ss * 0.01 * 3 * bumoney;
                                    }
                                    if (periods == 18) {
                                        var sss = ss * 0.01 * 1.5 * bumoney;
                                    }
                                    if (periods == 12) {
                                        var sss = ss * 0.01 * bumoney;
                                    }
                                    if (periods == 6) {
                                        var sss = ss * 0.01 * 0.5 * bumoney;
                                    }
                                    if (periods == 24) {
                                        var sss = ss * 0.01 * 2 * bumoney;
                                    }
                                    var result = sss.toFixed(2);
                                    $("#periodss").html(period+"目标收益：");
                                    $("#earningsWrap").show();
                                    $("#realEarnings").html(result);
                                    $("#realEarningss").val(result);
                                    $("#realEarningsd").val(result);

                                }
                            }
                            if(bumoney<=0){
                                $("#fs").hide();
                                $("#quotas").hide();
                                $("#hst").hide();
                                $("#increase").show();
                                $("#notmoney").hide();
                            }
                        }

                    </script>
                    <div class="tips" id="fs" style="display: none"><i></i>购买金额不能大于剩余金额！</div>
                    <div class="tips" id="quotas" style="display: none"><i></i>不能高于个人的最大购买金额，当前可购买为<span id="ssd"></span>元！</div>
                    <div class="tips" id="hst" style="display: none"><i></i>余额不足，<a class="to-recharge" href="/payment/recharge/index" target="_blank">请先充值</a>！</div>
                    <div  id="increase" class="tips" style="display: none"><i></i>起投金额为100元，递增金额为100元！</div>
                    <div id="notmoney" class="tips" style="display: none"><i></i>不能低于该标的单次最小购买金额100元！</div>
                    <a class="to-buy to-login" href="javascript:;" onclick="toubiao();">立即加入</a>
                    <script>
                        function toubiao() {
                            var   buymoney = $("#buymoney ").val();
                            if(${user.uid!=null||buymoney!=null}){
                                var uid =${user.uid};
                                $("#hb").show();
                                /*查询红包*/
                                $.post("/invest/selhb",{uid:uid,buymoney:buymoney},function (data) {
                                    var list = data.list;
                                    var hb = "<input type='radio'name='hb' id='0'value='0'onclick='optionhb(this);'>"+"不使用红包 "+"<br>";
                                    $.each(list,function (i,j) {
                                        hb+="<input type='radio'name='hb' rid='"+j.id+"'value='"+j.amount+"'onclick='optionhb(this);'>"+ j.detail+" <br>"
                                    })
                                    $("#hbs").html(hb);
                                },"json");
                                $("#during").hide();
                            }else{
                                window.location.href="${pageContext.request.contextPath}/account/tologin";
                            }
                        }
                        function optionhb(i) {
                            /*获取红包金额 赋值 */
                            $("#hongbao").val($('input:radio:checked').val());
                            //获取红包id
                            $("#hongbaoid").val($(i).attr("rid"));
                        }
                    </script>
                    <div class="remind">小牛提醒您：市场有风险 出借需谨慎【<a href="${pageContext.request.contextPath}/t2/backoneNew?id=8" target="_blank">查看保障</a>】
                    </div>
                </form>
            </div>
            <%--已售罄显示--%>
            <div class="sellout abs " style="display: none" id="durings"></div>

            <div class="novice abs" style="display: none" id="xs">
                <div class="info">本项目为新手专享项目</div>
                <div class="describe">各类累计出借<span>少于3次</span>的客户才可加入</div>
            </div>

            <%--实名登记--%>
            <div class="sub-right" style="display: none">
                <div class="special-box stop-autonym">
                    <div class="info">请完成实名登记</div>
                    <div class="describe">只有通过实名登记，才能充值，投标，提现。<br><a href="/payment/deposit/apply"
                                                                     class="font-blue">立即前往实名登记</a></div>
                </div>
            </div>
        </div>
    </div>
</div>
    <div class="extend" id="extendModel">
        <ul class="tab">
            <li data-type="introduce" class="extend-trigger" id="li1"><i class="icon icon-project"></i><span>项目详情</span></li>
            <li data-type="borrowing" class="extend-trigger"id="li2"><i class="icon icon-borrowing"></i><span>借款人信息</span></li>
            <li data-type="investList" class="extend-trigger current"id="li3"><i class="icon icon-invest"></i><span>投标记录</span></li>
        </ul>
        <div class="items">
            <div class="item introduce tableList" id="introduceModel" style="display: none;">
                <h3 class="title">项目简介与风险评估</h3>
                <div class="extend-describe">${l.sm}</div>
                <h3 class="title">借款用途</h3>
                <div class="extend-describe">${l.loanPurposeText}</div>
                <h3 class="title" style="margin-bottom:0">常见问题</h3>
                <dl class="extend-question">
                    <dt><span>问：</span>散标主要包括哪些项目？</dt>
                    <dd><span>答：</span>
                        <p>散标主要包括信用借款、消费分期借款、房产抵押借款、车辆抵押借款等项目。</p>
                    </dd>
                </dl>
                <dl class="extend-question">
                    <dt><span>问：</span>散标项目的亮点是什么？</dt>
                    <dd><span>答：</span>
                        <p>（1）100元起投，7%-13%的参考利率，门槛低，收益稳健</p>
                        <p>（2）1个月及以上等多种期限</p>
                        <p>（3）透明的购买过程，更安心</p>
                        <p>（4）一次性还款、等额本息还款等多种还款方式</p>
                    </dd></dl><dl class="extend-question"><dt>
                <span>问：</span>散标项目安全吗？有担保吗？</dt><dd><span>答：</span>
                <p>散标项目经过严格的风控审查，包括征信报告、资金流水、资产状况、还款能力等；散标项目对应逾期借款均由其资产推荐方提供代偿或回购。</p>
            </dd>
            </dl>
            </div>
            <div class="item borrowing tableList" id="borrowingModel" style="display: none;">
                <div class="queue">
                    <div class="node first">
                        <div class="model"><i></i><span>借款基础信息</span></div>
                        <div class="infos">
                            <span>借款金额：${s.amount}元</span>
                            <span>借款期限：${s.term}个月</span>
                            <span>还款方式：${s.hkfs}</span>
                            <span>借款用途：${m.jkyt}</span>
                            <span>签约时间：${m.qytime}</span>
                            <span>约定利率：${m.ll} %</span>
                            <span>还款来源：${m.hkly}</span>
                            <span>还款保障措施：${s.guarantor}。</span>
                        </div>
                    </div>
                    <div class="node">
                        <div class="model">
                            <i></i>
                            <span>借款人基础信息</span>
                        </div>
                        <div class="infos">
                            <span>借款人：${l.custName}</span>
                            <span>性别：${l.sex}</span>
                            <span>年龄：${m.age}</span>
                            <span>身份证：${l.idCardNo}</span>
                            <span>居住地点：${m.homeaddress}</span>
                            <span>所属城市：${l.city}</span>
                        </div>
                    </div>
                    <div class="node">
                        <div class="model">
                            <i></i>
                            <span>工作信息</span>
                        </div>
                        <div class="infos">
                            <span>工作行业/性质：${m.gzhy}</span>
                            <span>工作地点：${m.workaddress}</span>
                            <span>工作职位：${m.gzzw}</span>
                            <span>月收入
                                <i class="icon icon-question-mark icon__question__mark" title="月收入指月打卡工资收入"></i>
                                ：${m.sl}元
                            </span>
                        </div>
                    </div>
                    <div class="node">
                        <div class="model">
                            <i></i>
                            <span>资产信息</span>
                        </div>
                        <div class="infos">
                            <span>名下房产：无</span>
                            <span>名下车辆：无</span>
                        </div>
                    </div>
                    <div class="node">
                        <div class="model">
                            <i></i>
                            <span>信用信息</span>
                        </div>
                        <div class="infos">
                            <span>历史借款金额：17,500元</span>
                            <span>历史借款次数：1次</span>
                            <span>历史结清次数：0次</span>
                            <span>最近一次借款时间：2019-05-08</span>
                            <span>当前待还本息
                                <i class="icon icon-question-mark icon__question__mark" title="当前待还本息只包括已募集完成并且处于还款中的借款"></i>
                                ：  18,900.00  元
                            </span>
                            <span>征信报告说明：无</span>
                            <span>在本平台逾期次数：0次</span>
                            <span>在本平台逾期总金额：0元</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item recordList investList g-dn" id="investListModel" style="display: block; text-align: center;">
                <div class="content">
                <div class="sequence g-tl">  购买人数
                    <span>7</span>人
                </div>
                    <table>
                        <thead>
                        <tr class="head">
                            <th>购买人</th>
                            <th>金额（元）</th>
                            <th>成交时间</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr class="even">
                            <td>
                                <i class="vipIcon icon-vipsilver_member"></i>
                                f****23
                            </td>
                            <td>3,884.09</td>
                            <td>2019-05-08 10:04:39</td>
                        </tr>
                        <tr class="">
                            <td><i class="vipIcon icon-vipsilver_member"></i>x****50</td>
                            <td>1,935.13</td>
                            <td>2019-05-08 10:04:20</td>
                        </tr>
                        <tr class="even">
                            <td><i class="vipIcon icon-vipplatinum_member"></i>x****30</td>
                            <td>102.00</td>
                            <td>2019-05-08 01:19:53</td>
                        </tr>
                        <tr class="">
                            <td><i class="vipIcon icon-vipgold_member"></i>x****82</td>
                            <td>5,977.78</td>
                            <td>2019-05-08 00:13:56</td>
                        </tr>
                        <tr class="even">
                            <td><i class="vipIcon icon-vipsilver_member"></i>x****03</td>
                            <td>5,100.00</td>
                            <td>2019-05-07 04:21:41</td>
                        </tr>
                        <tr class="">
                            <td><i class="vipIcon icon-vipgold_member"></i>x****92</td>
                            <td>401.00</td>
                            <td>2019-05-07 04:00:04</td>
                        </tr>
                        <tr class="even">
                            <td><i class="vipIcon icon-vipsilver_member"></i>x****48</td>
                            <td>100.00</td>
                            <td>2019-05-06 20:26:35</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="page paginator" style="visibility: hidden;">
                    <div class="paginator-main" id="paginator-main" style="display: block;">
                        <div class="paginator-info">第1页/共1页</div>
                        <div class="paginator-left">
                            <ol>
                                <li><a href="javascript:;" data-role="first" class="disabled">首页</a></li>
                                <li><a href="javascript:;" data-role="prev" class="disabled">上一页</a></li>
                            </ol>
                        </div>
                        <div class="paginator-list" style="width: 35px;">
                            <ol class="paginator-list-main" style="width: 35px;">
                                <li><a href="javascript:;" data-role="1" class="current">1</a></li>
                            </ol>
                        </div>
                        <div class="paginator-right">
                            <ol>
                                <li><a href="javascript:;" data-role="next" class="disabled">下一页</a></li>
                                <li><a href="javascript:;" data-role="last" class="disabled">末页</a></li>
                            </ol>
                        </div>
                        <div class="paginator-jump">
                            <input type="tel" value="" maxlength="10">
                            <a href="javascript:;" data-role="jump">跳转</a>
                        </div>
                    </div>
                    <p class="paginator-none" style="display:none;">
                        <i class="icon icon-no-data"></i>
                        <span>您暂时没有数据可显示</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="token">
    <input type="hidden" id="ooh.token.name" name="ooh.token.name" value="3ba1f43713a04c2d92e152472d663a9e">
    <input type="hidden" id="ooh.token.value" name="ooh.token.value" value="GJR634S0JFBZ8Y9C54HVSE0KKUIR4PZI">

</div>

</body>
<jsp:include page="/WEB-INF/jsp/common/bottom.jsp"></jsp:include>
<script>
    $("#li1").click(function(event){
        $("#borrowingModel").attr("style","display:none;");
        $("#introduceModel").attr("style","display:block;");
        $("#investListModel").attr("style","display:none;");
        $("#li1").attr("class","current");
        $("#li2").removeClass("current");
        $("#li3").removeClass("current");
    });
    $("#li2").click(function(event){
        $("#borrowingModel").attr("style","display:block;");
        $("#introduceModel").attr("style","display:none;");
        $("#investListModel").attr("style","display:none;");
        $("#li2").attr("class","current");
        $("#li1").removeClass("current");
        $("#li3").removeClass("current");
    });
    $("#li3").click(function(event){
        $("#borrowingModel").attr("style","display:none;");
        $("#introduceModel").attr("style","display:none;");
        $("#investListModel").attr("style","display:block;");
        $("#li3").attr("class","current");
        $("#li2").removeClass("current");
        $("#li1").removeClass("current");
    });

</script>
</html>
