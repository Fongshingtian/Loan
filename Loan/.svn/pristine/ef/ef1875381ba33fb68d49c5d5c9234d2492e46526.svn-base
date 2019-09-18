<%--
  Created by IntelliJ IDEA.
  User: asus
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
    <title>Title</title>


    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <link rel="shortcut icon" href="//image.xiaoniu88.com/static/WebXn/dist/images/favicon.ico" type="image/x-icon"/>
    <link rel="stylesheet" href="//image.xiaoniu88.com/static/WebXn/dist/css/base-56e256b865.css"/>
    <script type="text/javascript" src="//image.xiaoniu88.com/static/WebXn/dist/lib/base-6100562494.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.min.js"></script>
    <link>
    <script>
        window.global = {
            cdn: "//image.xiaoniu88.com",
            siteroot: "http://www.xiaoniu88.com",
            staticPath: "//image.xiaoniu88.com/static/WebXn/dist",
            contextPath: "/product",
            serverTime: "1556105646004" * 1,
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
          href="//image.xiaoniu88.com/static/WebXn/dist/page/product/detail/ushare/css/detail-72afdb09db.css"/>

</head>

<body>
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
<script>

</script>
<div class="container detail-container" id="contanier">
    <div class="shoulder" id="shoulderModel" onclick="click();">
        <div class="neck"><h2 class="title" id="headline">${all.headline}</h2><span
                class="sub-title">到期自动转让</span><a
                class="contract to-contract" href="javascript:;"
                data-url="/cms/contract/pcts/1/template/productId/65375542">《服务合同》</a><a
                class="contract dialog-risk-info" href="javascript:;">《风险提示函》</a></div>
        <div class="subject g-cf">
            <div class="sub-left">
                <div class="sub-left-top">
                    <dl class="earnings">
                        <dt class="curRate"><b class="f-rate" id="interest">${all.interest}%</b><i>+</i><b
                                class="s-rate">0.80<span>%</span></b><b
                                class="text-tag" title="">限时奖励</b></dt>
                        <dd>参考利率<i class="icon icon-question-mark js_poshytip"
                                   title="小牛在线P2P互联网金融平台所有项目参考利率是在参考同类型工具历史数据得出，<br>并不代表实际收益，市场有风险，出借需谨慎。"></i></dd>
                    </dl>
                    <dl class="borrow-amount">
                        <dt><span class="f-rate js_term" id="period">${all.period}</span></dt>
                        <dd>锁定期 | 持满自动转让</dd>
                    </dl>
                    <dl class="lock-day">
                        <dt><span class="f-rest" id="amount">${all.amount}</span> 元</dt>
                        <dd id="cun">
                            <c:if test="${all.amount>0}">
                                可加入
                                <script>

                                        $("#durings").hide();
                                        $("#during").show();


                                </script>
                            </c:if>
                            <c:if test="${all.amount<=0}">
                                已售罄
                                <script>
                                    $(document).ready(function () {
                                        $("#during").hide();
                                        $("#durings").show();
                                         $("#hhss").hide();
                                        $("#hhsss").hide();
                                    });
                                </script>
                            </c:if>
                        </dd>
                    </dl>
                </div>
                <ul class="sub-left-mid"></ul>
                <ul class="subject-term g-cf" id="productTerm">
                    <c:forEach items="${list}" var="l">
                        <li id="${l.sid}" data-productid="${l.sid}"  periodid="${l.period}" class>
                            <c:if test="${all.sid==l.sid}">
                                <script>
                                    $("#${l.sid}").addClass("active");
                                </script>
                            </c:if>
                            <p class="p1">${l.period}</p>
                            <p>
                                <c:if test="${l.amount>0}">

                                    ${l.interest}
                                    <script>
                                        $(document).ready(function () {
                                            $("#durings").hide();
                                            $("#during").show();
                                            if(${user!=null}){
                                                $("#hhsss").show();
                                                $("#hhss").hide();
                                            }else{
                                                $("#hhsss").hide();
                                                $("#hhss").show();
                                            }
                                        });
                                    </script>
                                </c:if>
                                <c:if test="${l.amount<=0}">
                                    已售罄
                                    <script>
                                        $("#${l.sid}").addClass("disabled")
                                        $(document).ready(function () {
                                            $("#during").hide();
                                            $("#durings").show();

                                        });
                                    </script>
                                </c:if>
                            </p>
                        </li>
                    </c:forEach>
                </ul>
            </div>

            <script>
                $(document).ready(function () {
                    $("li").click(function () {
                        $(this).siblings("li").removeClass("active");  // 删除其他兄弟元素的样式
                        $(this).addClass("active");                            // 添加当前元素的样式
                        var a = $(this).attr("data-productid");
                        var periodsp = $(this).attr("periodid");
                        var p = parseInt(periodsp);
                        $.ajax({
                            async:false,
                            url: '${pageContext.request.contextPath}/invest/jsbidding',
                            type: 'post',
                            data: {sid: a,per :p },
                            dataType:'json',

                            success: function (data) {
                                var ms = data.ms;
                                var times =data.times;
                                $("#times").html(times);
                                var begintime = data.begintime;
                                $("#begintime").html(begintime);
                                var endtime = data.endtime;
                                $("#endtime").html(endtime);
                                var aomunt = ms.amount;
                                $("#period").html(ms.period);
                                $("#periods").html(ms.period);
                                $("#amount").html(ms.amount);
                                $("#interest").html(ms.interest+"%");
                                $("#quota").html(ms.quota+"，累计限额"+ms.quota);
                                $("#headine").html(ms.headline);
                                $("#sids").val(ms.sid);
                                $("#sidd").val(ms.sid);
                                $("#earningsWrap").hide();
                                $("#notmoney").hide();
                                $("#hst").hide();
                                $("#buyMoney").val("");
                                $("#increase").show();
                                $("#fs").hide();
                                $("#quotas").hide();
                                if (aomunt <= 0) {
                                    $("#cun").html("已售罄");
                                    $("#during").hide();
                                    $("#durings").show();


                                }
                                if (aomunt > 0) {
                                    $("#cun").html("可加入");
                                    $("#durings").hide();

                                    $("#during").show();
                                    $("#increase").hide();

                                   if(${user!=null}){
                                       $("#hhsss").show();
                                       $("#hhss").hide();
                                   }else{
                                       $("#hhsss").hide();
                                       $("#hhss").show();
                                   }
                                }

                            }
                        });

                        });
                        });
            </script>

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
                          action="/invest/buy"
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
                            <div id="earningsWrap"style="display: none" class="g-dn"><label id="periodss">${all.period}目标收益：</label><span
                                    id="realEarnings">0.00</span>元
                            </div>
                        </div>
                        <div class="purchase">
                            <input name="buyAmount" type="text" id="buyMoney" placeholder="100元起投，100元递增" maxlength="20" onkeyup="tsts(this);">
                        </div>
                        <div class="tips"></div>

                        <script>


                            if(${user==null}){
                                var kyye =0;
                            }else{
                                var kyye =${acc.kyye};
                            }
                            function tsts(v) {
                                v.value = v.value.replace(/\D/g, '')
                                var bumone = $("#buyMoney").val();     /*购买的金额*/
                                var bumoney=parseInt(bumone);
                                var interest = $("#interest").html(); /*利息*/
                                var ss = parseFloat(interest) + 0.8;      /*利息*/
                                $("#interests").val(ss);
                                var period = $("#period").html();       /*期数*/
                                $("#periodd").val(period);//获取期数传递
                                var periods = parseInt(period);
                                $("#periodsd").val(periods);
                                var quota = parseInt($("#quota").html());
                                var quotas =quota*10000;
                                $("#ssd").html(quotas);     /*单次最大可购买的金额*/
                                var amount = $("#amount").html();

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
                                            }

                                            $("#increase").hide();

                                            if(kyye<=0){
                                                $("#hst").show();
                                            }
                                        }
                                        if(bumoney>quotas){
                                            $("#quotas").show();
                                            $("#hst").hide();
                                            $("#increase").hide();
                                        }
                                        if(bumoney<=quotas){
                                            $("#quotas").hide();

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


                                        if (periods == 7) {
                                            var sss = ss * 0.01 * 7 / 360 * bumoney;
                                        }
                                        if (periods == 1) {
                                            var sss = ss * 0.01 * 30 / 360 * bumoney;
                                        }
                                        if (periods == 3) {
                                            var sss = ss * 0.01 * 90 / 360 * bumoney;
                                        }
                                        if (periods == 12) {
                                            var sss = ss * 0.01 * bumoney;
                                        }
                                        if (periods == 6) {
                                            var sss = ss * 0.01 * 180/360 * bumoney;
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

    <div class="plan-content">
        <ul class="plan g-cf">
            <li class="plan-item plan-item1 active"><p class="p1">加入</p>
                <p class="p2" id="times">${times}</p>
                <p class="p3">匹配项目</p></li>
            <li class="plan-item plan-item2"><p class="p1">开始收益</p>
                <p class="p2" id="begintime">${begintime}</p>
                <p class="p3"><span class="js_term" id="periods">${all.period}</span>锁定期</p></li>
            <li class="plan-item plan-item3"><p class="p1">锁定期结束</p>
                <p class="p2" id="endtime">${endtime}</p>
                <p class="p3">锁定期结束自动转让</p></li>
            <li class="plan-item plan-item4"><i></i><i></i><i></i></li>
        </ul>
    </div>
    <div class="extend" id="extendModel">
        <ul class="tab">
            <li id="clic1" data-type="introduce" class="extend-trigger current" onclick="clik();"><i
                    class="icon icon-project"></i><span>工具介绍</span>
            </li>
            <li id="clic2" data-type="projectList" class="extend-trigger" onclick="cliks();"><i
                    class="icon icon-issue"></i><span>投标项目列表</span></li>
            <li id="clic4" data-type="investList" class="extend-trigger" onclick="clikss();"><i
                    class="icon icon-invest"></i><span>投标记录</span></li>
        </ul>
        <div class="items">
            <div class="item introduce tableList" id="introduceModel" style="display: block;">
                <h3 class="title">
                    优享牛工具介绍</h3>
                <p class="extend-describe">
                    优享牛是小牛在线平台推出的便捷高效的委托投标工具，出借人委托平台将资金投向平台项目，且回款本息由出借人委托系统复投，保障资金利用率。锁定期结束后自动发起债权转让，系统优先协助本产品出借人完成债转退出。</p>
                <div class="extend-describe-pic g-cf">
                    <dl class="d1 g-fl">
                        <dt>自动投标，省心便捷</dt>
                        <dd>委托平台自动分散投标，风险更可控</dd>
                    </dl>
                    <dl class="d2 g-fl">
                        <dt>自动复投，收益可观</dt>
                        <dd>锁定期内回款自动复投，保障资金利用率</dd>
                    </dl>
                    <dl class="d3 g-fr">
                        <dt>到期自动转让</dt>
                        <dd>锁定期结束系统自动发起转让退出，回款省心</dd>
                    </dl>
                </div>
                <table>
                    <tbody>
                    <tr>
                        <td class="nape">投标项目总额</td>
                        <td>1,000,000.00元</td>
                    </tr>
                    <tr>
                        <td class="nape">加入规则</td>
                        <td>100.00元起投，100.00元递增，单笔限额<span id="quota">${all.quota}，累计限额${all.quota}</span></td>
                    </tr>
                    <tr>
                        <td class="nape">开始收益</td>
                        <td>加入后系统实时匹配标的，匹配成功后次日开始计息</td>
                    </tr>
                    <tr>
                        <td class="nape">转让规则</td>
                        <td>锁定期结束后，系统经出借人授权下自动发起债权转让退出优享牛投标工具，具体退出时间以出借人持有债权全部退出完成时间为准。退出期间可继续享有收益，平台不保证退出时效。</td>
                    </tr>
                    <tr>
                        <td class="nape">费用说明</td>
                        <td>加入费用：0元；</td>
                    </tr>
                    </tbody>
                </table>
                <h3 class="title" style="margin-bottom:0">常见问题</h3>
                <dl class="extend-question">
                    <dt><span>问：</span>优享牛有哪些期限及对应的参考利率？</dt>
                    <dd><span>答：</span>
                        <p>新手标：7天，5%+5%；1个月，6%+6%；3个月，7%+5.5%；<br>普通标：7天，5%；3个月，7.0%；6个月，7.70%；12个月，9%；24个月，10.00%</p>
                    </dd>
                </dl>
                <dl class="extend-question">
                    <dt><span>问：</span>加入优享牛后平台如何匹配项目？</dt>
                    <dd><span>答：</span>
                        <p>系统会实时匹配项目，成功匹配后次日起息，锁定期间回款将自动复投，保证收益不断档。</p></dd>
                </dl>
                <dl class="extend-question">
                    <dt><span>问：</span>加入优享牛后，可以看到具体投向的借款项目么？</dt>
                    <dd><span>答：</span>
                        <p>可以，平台将委托资金分散投标向平台的借款项目。在“我的-网贷-优享牛”中，点击相应优享牛项目，进入二级详情页可以看到优享牛的投标项目列表。</p></dd>
                </dl>
                <dl class="extend-question">
                    <dt><span>问：</span>优享牛产品如何退出？</dt>
                    <dd><span>答：</span>
                        <p>锁定期结束后，系统经出借人授权下自动发起债权转让退出优享牛投标工具，转让不收取费用。锁定期内不可转让退出。</p></dd>
                </dl>
                <dl class="extend-question">
                    <dt><span>问：</span>优享牛发起债权转让退出，多长时间成功？</dt>
                    <dd><span>答：</span>
                        <p>
                            用户持有优享牛锁定期结束后，系统会及时并尽力寻找合适的债权受让人，但不排除存在交易撮合延迟或失败的情况，具体转让时间以出借人持有债权全部完成转让时间为准。转让期间可继续享有收益，平台不保证转让时效。</p>
                    </dd>
                </dl>
            </div>
            <div class="item projectList tableList g-dn" id="projectListModel"
                 style="display: none; text-align: center;">
                <div class="content">
                    <div class="g-tl sequence"> 投标项目总金额<span>100000000+</span>元，共计<span id="currpage">2500+</span>个项目 </div>
                    <table>
                        <tbody>
                        <tr>
                            <th>序号</th>
                            <th>项目名称</th>
                            <th>期限</th>
                            <th>项目金额</th>
                            <th>状态</th>
                        </tr>
                        </tbody>
                        <tbody id="loans">

                        </tbody>
                    </table>
                </div>
                <div class="page paginator" style="visibility: visible;">
                    <div class="paginator-main" id="paginator-main" style="display: block;" >
                        <div class="paginator-info">第1页/共2500页</div>
                        <div class="paginator-left">
                            <ol>
                                <li><a href="javascript:;" data-role="first" >首页</a></li>
                                <li><a href="javascript:;" data-role="prev" class="disabled">上一页</a></li>
                            </ol>
                        </div>
                        <div class="paginator-list" style="width: 175px;">
                            <ol class="paginator-list-main" style="width: 150px;" >
                                <li><a href="javascript:;" data-role="1" class="current">1</a></li>
                                <li><a href="javascript:;" data-role="2">2</a></li>
                                <li><a href="javascript:;" data-role="3">3</a></li>
                                <li><a href="javascript:;" data-role="4">4</a></li>
                                <li><a href="javascript:;" data-role="5">5</a></li>
                            </ol>
                        </div>
                        <div class="paginator-right">
                            <ol>
                                <li><a href="javascript:loanfy(2);" data-role="next">下一页</a></li>
                                <li><a href="javascript:;" data-role="last">末页</a></li>
                            </ol>
                        </div>
                        <div class="paginator-jump"><input type="tel" value="" maxlength="10"><a href="javascript:;"
                                                                                                 data-role="jump">跳转</a>
                        </div>
                    </div>

                    <p class="paginator-none" style="display:none;"><i class="icon icon-no-data"></i>
                        <span>您暂时没有数据可显示</span></p></div>
            </div>

            <div class="item recordList investList g-dn" id="investListModel"
                 style="display: none; text-align: center;">
                <div class="content">
                    <div class="sequence g-tl"> *为保护出借人信息，仅展示最近10笔出借人的出借信息</div>
                    <table>
                        <thead>
                        <tr class="head">
                            <th>购买人</th>
                            <th>金额（元）</th>
                            <th>成交时间</th>
                        </tr>
                        </thead>
                        <tbody id="Sidss">
                        <tr class="even">
                            <td><i class="vipIcon icon-vipsilver_member"></i>x****30</td>
                            <td>1,100.00</td>
                            <td>2019-04-24 10:28:16</td>
                        </tr>
                        <tr class="">
                            <td><i class="vipIcon icon-vipgold_member"></i>x****56</td>
                            <td>5,000.00</td>
                            <td>2019-04-24 10:27:02</td>
                        </tr>
                        <tr class="even">
                            <td><i class="vipIcon icon-vipgold_member"></i>x****08</td>
                            <td>2,000.00</td>
                            <td>2019-04-24 10:24:38</td>
                        </tr>
                        <tr class="">
                            <td><i class="vipIcon icon-vipniello_member"></i>x****19</td>
                            <td>50,000.00</td>
                            <td>2019-04-24 10:18:18</td>
                        </tr>
                        <tr class="even">
                            <td><i class="vipIcon icon-vipniello_member"></i>x****19</td>
                            <td>50,000.00</td>
                            <td>2019-04-24 10:17:51</td>
                        </tr>
                        <tr class="">
                            <td><i class="vipIcon icon-vipniello_member"></i>x****19</td>
                            <td>50,000.00</td>
                            <td>2019-04-24 10:17:08</td>
                        </tr>
                        <tr class="even">
                            <td><i class="vipIcon icon-vipsilver_member"></i>x****05</td>
                            <td>2,100.00</td>
                            <td>2019-04-24 10:15:58</td>
                        </tr>
                        <tr class="">
                            <td><i class="vipIcon icon-vipsilver_member"></i>x****92</td>
                            <td>200.00</td>
                            <td>2019-04-24 10:14:24</td>
                        </tr>
                        <tr class="even">
                            <td><i class="vipIcon icon-vipsilver_member"></i>W****21</td>
                            <td>1,000.00</td>
                            <td>2019-04-24 10:13:35</td>
                        </tr>
                        <tr class="">
                            <td><i class="vipIcon icon-vipgold_member"></i>x****08</td>
                            <td>5,000.00</td>
                            <td>2019-04-24 10:13:02</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="page paginator" style="visibility: hidden;">
                    <div class="paginator-main" id="paginator-mains" style="display: block;">
                        <div class="paginator-info">第1页/共1页</div>
                        <div class="paginator-left">
                            <ol>
                                <li><a href="javascript:;" data-role="first" class="disabled">首页</a></li>
                                <li><a href="javascript:;" data-role="prev" class="disabled">上一页</a></li>
                            </ol>
                        </div>
                        <div class="paginator-list" style="width: 35px;">
                            <ol class="paginator-list-main" style="width: 35px;" >
                                <li><a href="javascript:;" data-role="1" class="current">1</a></li>
                            </ol>
                        </div>
                        <div class="paginator-right">
                            <ol>
                                <li><a href="javascript:;" data-role="next" class="disabled">下一页</a></li>
                                <li><a href="javascript:;" data-role="last" class="disabled">末页</a></li>
                            </ol>
                        </div>

                    </div>
                    <p class="paginator-none" style="display:none;"><i class="icon icon-no-data"></i>
                        <span>您暂时没有数据可显示</span></p></div>
            </div>
        </div>
    </div>
</div>
<input type="hidden" name="sidss" id="sidd" value="${all.sid}">
</body>
<script>
    //分页
    function loanfy(i) {
        var fy = i;

        $.post("/invest/SelLoans",{start:fy},function(data){
            var currpage =data.currpage;
            $("#currpage").html(currpage+"+");
            var list = data.list;
            var page = data.page;
            var colspage =data.colspage
            var trs ="";
            $.each(list,function(i,j){
                trs+="<tr>" +
                    "<td class='g-tc'>"+(i+1)+"</td>" +
                    "<td class='g-tc'><a target='_blank' href='/invest/biddcheck/"+j.did+"'>"+j.pname+"</a></td>" +
                    "<td class='g-tc'>"+j.periodNum+"月"+"</td>" +
                    "<td class='g-tc'>"+j.sjmoney+"元"+"</td>" +
                    "<td class='g-tc'>"+"招标中"+"</td>" +
                    "</tr>";
            });

            //分页
            var ss="<div class='paginator-info'>"+"第"+colspage+"页/共"+page+"页"+"</div>" +
                "<div class='paginator-left'><ol>" +
                "<li><a href='javascript:loanfy(1);'>"+"首页"+"</a></li>" +
                "<li><a href='javascript:loanfy("+(colspage-1)+");' data-role='prev'>"+"上一页"+"</a></li>" +
                "</ol></div>" +
                " <div class='paginator-list' style='width: 175px;'>" +
                "<ol class='paginator-list-main' style='width: 150px;'>";

            for(var i=1;i<=page;i++){
                ss+="<li><a href='javascript:loanfy("+i+");' data-role='1' class='current'>"+i+"</a></li>";
            }

            ss+="  </ol></div><div class='paginator-right'><ol>" +
                "<li><a href='javascript:loanfy("+(colspage+1)+");' data-role='next'>"+"下一页"+"</a></li>" +
                "<li><a href='javascript:loanfy("+page+");' data-role='last' >"+"末页"+"</a></li></ol></div>";

            $("#paginator-main").html(ss);
            $("#loans").html(trs);
        });
    }

    function clik() {
        $("#introduceModel").show(); //工具介绍
        $("#projectListModel").hide();//投标项目列表
        $("#investListModel").hide();//投标记录
        $("#clic1").addClass("current");
        $("#clic2").removeClass("current");
        $("#clic3").removeClass("current");
        $("#clic4").removeClass("current");
    }

    function cliks() {
        $("#introduceModel").hide();
        $("#projectListModel").show();
        $("#investListModel").hide();
        $("#clic2").addClass("current");
        $("#clic1").removeClass("current");
        $("#clic3").removeClass("current");
        $("#clic4").removeClass("current");
        $.post("/invest/SelLoans",{start:1},function(data){
            var currpage =data.currpage;
            $("#currpage").html(currpage+"+");
            var list = data.list;
            var page = data.page;
            var colspage =data.colspage
            var trs ="";
            $.each(list,function(i,j){
                trs+="<tr>" +
                        "<td class='g-tc'>"+(i+1)+"</td>" +
                        "<td class='g-tc'><a target='_blank' href='/invest/biddcheck/"+j.did+"'>"+j.pname+"</a></td>" +
                        "<td class='g-tc'>"+j.periodNum+"月"+"</td>" +
                        "<td class='g-tc'>"+j.sjmoney+"元"+"</td>" +
                        "<td class='g-tc'>"+"招标中"+"</td>" +
                    "</tr>";
            });

            //分页
            var ss="<div class='paginator-info'>"+"第"+colspage+"页/共"+page+"页"+"</div>" +
                "<div class='paginator-left'><ol>" +
                "<li><a href='javascript:loanfy(1);'>"+"首页"+"</a></li>" +
                "<li><a href='javascript:loanfy("+(colspage-1)+");' data-role='prev'>"+"上一页"+"</a></li>" +
                "</ol></div>" +
                " <div class='paginator-list' style='width: 175px;'>" +
                "<ol class='paginator-list-main' style='width: 150px;'>";

            for(var i=1;i<=page;i++){
                ss+="<li><a href='javascript:loanfy("+i+");' data-role='1' class='current'>"+i+"</a></li>";
            }

            ss+="  </ol></div><div class='paginator-right'><ol>" +
                    "<li><a href='javascript:loanfy("+(colspage+1)+");' data-role='next' >"+"下一页"+"</a></li>" +
                    "<li><a href='javascript:loanfy("+page+");' data-role='last' >"+"末页"+"</a></li></ol></div>";

           $("#paginator-main").html(ss);
            $("#loans").html(trs);
        });

    }

    function clikss() {
        $("#introduceModel").hide();
        $("#projectListModel").hide();
        $("#investListModel").show();
        $("#clic4").addClass("current");
        $("#clic3").removeClass("current");
        $("#clic2").removeClass("current");
        $("#clic1").removeClass("current");
            var sidss= $("#sidd").val();

        $.post("/invest/sells",{zid:sidss},function(data){
          var list = data.list;

          var trs ="";
          $.each(list,function(i,j){
                trs+="<tr id='trss'> <c:if test='i%2==0'>${'#trss'}.addClass('even')</c:if>"+
                    "<td><i class='vipIcon icon-vipsilver_member'>" +
                    "</i>"+"***"+j.uname+"***"+"</td><td>"+j.money+"</td>" +
                    "<td>"+j.times+"</td></tr>";
            });
          $("#Sidss").html(trs);
        });
    }
</script>
<jsp:include page="/WEB-INF/jsp/common/bottom.jsp"></jsp:include>
</html>
