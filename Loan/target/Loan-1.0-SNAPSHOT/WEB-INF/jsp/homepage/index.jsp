<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html lang="en">
<head>
    <title>首页</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/mmfstyle.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/mmfstyle2.css">
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.7.2.min.js"></script>
    <jsp:include page="../common/resources.jsp"></jsp:include>
</head>
<body style="background:#ffffff;">
<div style="width: 1347px;">
    <jsp:include page="../common/top.jsp"></jsp:include>
    <jsp:include page="../common/top2.jsp"></jsp:include>
</div>
<div id="box">
    <ul>
        <!--ul为无序列表标签,li标签对象用于进行项目列表的定义操作,即在当前项目对象之前添加一个小圆点-->
        <c:forEach items="${rotation}" var="r">
            <li class="img-li"><img src="${pageContext.request.contextPath}/upload/${r.route}" width="1347px" height="460"></li>
        </c:forEach>
        <c:forEach begin="${l}" end="3">
            <li class="img-li"><img src="${pageContext.request.contextPath}/images/bor_banner01.png" width="1347px" height="460"></li>
        </c:forEach>
    </ul>
    <div id="previous" class="img-button;" style="display:none">《</div>
    <div id="next" class="img-button;" style="display:none">》</div>
    <!-- 建立轮播图按钮对象开始 -->
    <ul class="button-ul"><!-- ul为无序列表标签 -->
        <li class="button-li" id="one"></li>
        <li class="button-li" id="two"></li>
        <li class="button-li" id="three"></li>
        <li class="button-li" id="four"></li>
    </ul>
    <!-- 建立轮播图按钮对象结束 -->
    <div class="zscf_banner px1000" align="center">
        <div class="zscf_box">
            <p>累计成交：<strong>12亿2332万元</strong></p>
            <p>运营时间：<strong>123天</strong></p>
            <p><strong>24</strong>小时成功转让率<strong>12.12%</strong></p>
            <a href="${pageContext.request.contextPath}/loan/zxsq" class="btn btn1">申请贷款</a><br>
            <a href="/user/tologin" class="btn btn2">我要投资</a>
        </div>
    </div>
</div>
<!-- end banner -->
<div style="background:#FFFFFF;">
    <table height="412px">
        <tr>
            <td><a href="${pageContext.request.contextPath}/loan/zxsq"><div class="boxs" align="center"><img src="${pageContext.request.contextPath}/images/recommend_icon4.png"  class="w1" width="100" height="100" border="0" alt=""><br><t class="z1">立即贷款</t><br><t class="z2">无忧信用贷款</t></div></a></td>
            <td><div class="boxs2"></div></td>
            <td><a href="${pageContext.request.contextPath}/loan/zxsq"><div class="boxs" align="center"><img src="${pageContext.request.contextPath}/images/recommend_icon3.png"  class="w1" width="100" height="100" border="0" alt=""><br><t class="z1">进度查询</t><br><t  class="z2">贷款进度一目了然</t></div></a></td>
            <td><div class="boxs2"></div></td>
            <td><a href="${pageContext.request.contextPath}/loan/zxsq"><div class="boxs" align="center"><img src="${pageContext.request.contextPath}/images/recommend_icon2.png"  class="w1" width="100" height="100" border="0" alt=""><br><t class="z1">额度测算</t><br><t  class="z2">靠谱的额度计算神器</t></div></a></td>
            <td><div class="boxs2"></div></td>
            <td><a href="${pageContext.request.contextPath}/loan/zxsq"><div class="boxs" align="center"><img src="${pageContext.request.contextPath}/images/recommend_icon1.png"  class="w1" width="100" height="100" border="0" alt=""><br><t class="z1">贷款助手</t><br><t  class="z2">轻轻松松帮您推荐合适产品</t></div></a></td>
        </tr>
    </table>
</div>
<div style="position:relative;height:98px;" align="center">
    <div style="position:relative;top:40px;font-weight:bold;" class="h1">
        热门产品信息
    </div>
    <div>
        <div style="position:relative;top:40px;" class="h3">
            产品种类丰富　借款资料简单　快速解决您的资金需求
        </div>
        <div style="position:absolute;top:80px;left:1200px;">
            <a href="${pageContext.request.contextPath}/produce/selpro" style="color:#a6a6a6;">更多热门产品...</a>
        </div>
    </div>
</div>
<div style="position:relative;width:1347px;height:530px;">
    <div class="border1" align="center">
        <div class="h1 dkname">${p[0].pname}</div>
        <div class="h3 dkjs">${p[0].ptext}</div>
        <div class="borderx s1">
            <div class="dkname">
                <t class="hh1">${p[0].jked}</t><t class="h2">万</t><br>
                <t class="h2_5">借款额度</t>
            </div>
        </div>
        <div class="shsj">审核时效:${p[0].shtime}</div>
        <a href="${pageContext.request.contextPath}/produce/todetil?pid=${p[0].pid}"><button class="btns1">查看详情</button></a>
    </div>
    <div class="jg"></div>
    <div class="border2" align="center">
        <div class="h1 dkname">${p[1].pname}</div>
        <div class="h3 dkjs">${p[1].ptext}</div>
        <div class="borderx s2">
            <div class="dkname">
                <t class="hh1">${p[1].jked}</t><t class="h2">万</t><br>
                <t class="h2_5">借款额度</t>
            </div>
        </div>
        <div class="shsj">审核时效:${p[1].shtime}</div>
        <a href="${pageContext.request.contextPath}/produce/todetil?pid=${p[1].pid}"><button class="btns2">查看详情</button></a>
    </div>
    <div class="jg"></div>
    <div class="border3" align="center">
        <div class="h1 dkname">${p[2].pname}</div>
        <div class="h3 dkjs">${p[2].ptext}</div>
        <div class="borderx s3">
            <div class="dkname">
                <t class="hh1">${p[2].jked}</t><t class="h2">万</t><br>
                <t class="h2_5">借款额度</t>
            </div>
        </div>
        <div class="shsj">审核时效:${p[2].shtime}</div>
        <a href="${pageContext.request.contextPath}/produce/todetil?pid=${p[2].pid}"><button class="btns3">查看详情</button></a>
    </div>
    <div class="jg"></div>
    <div class="border4" align="center">
        <div class="h1 dkname">${p[3].pname}</div>
        <div class="h3 dkjs">${p[3].ptext}</div>
        <div class="borderx s4">
            <div class="dkname">
                <t class="hh1">${p[3].jked}</t><t class="h2">万</t><br>
                <t class="h2_5">借款额度</t>
            </div>
        </div>
        <div class="shsj">审核时效:${p[3].shtime}</div>
        <a href="${pageContext.request.contextPath}/produce/todetil?pid=${p[3].pid}"><button class="btns4">查看详情</button></a>
    </div>
</div>
<div class="div3" align="center">
    <div style="height:100px;" align="center">
        <div style="position:relative;top:40px;font-weight:bold;" class="h1">
            普惠营业网点
        </div>
        <div>
            <div style="position:relative;top:40px;" class="h3">
                全国230余家营业网点　覆盖面广　为您提供全方位服务
            </div>
            <div style="position:absolute;top:80px;left:1200px;">
                <a href="#" style="color:#a6a6a6;">更多网点信息...</a>
            </div>
        </div>
    </div>
    <div>
        <table>
            <tr>
                <td>
                    <div class="div4">
                        <div style="position:relative;top:125px;left:82px;height:50px;width:590px;">
                            <div class="hs1">
                                普惠营业网点
                                <hr style="position:absolute;top:30px;border:0;background-color:#ffc68c;height:3px;width:200px;"/>
                                <hr style="position:absolute;top:33px;border:0;background-color:#e6e6e6;height:1px;width:590px;"/>

                            </div>
                        </div>
                        <div style="position:relative;top:135px;left:82px;height:312px;width:690px;">
                            <select id="edu" name="edu">
                                <option value="">选择省份</option>
                                <c:forEach items="${sl}" var="s">
                                    <option value="${s}">${s}</option>
                                </c:forEach>
                            </select>
                            <select id="salary" name="salary">
                                <option value="">选择城市</option>
                            </select>
                            <button class="btns5" onclick="outlets()">搜索</button><br>
                            <div style="position:relative;top:35px;width:570px">
                                <h3 style="line-height: 22px;color: #333;line-height:25px;" class="h3">深圳市小牛普惠投资管理有限公司（以下简称“小牛普惠”）。</h3>
                                <p style="color:#6d6d6d;text-indent:2em;" class="h3">小牛普惠成立于2014年7月，总部位于深圳，是小牛资本旗下普惠金融信息服务机构。</p>
                                <p style="color:#6d6d6d;text-indent:2em;" class="h3">小牛普惠通过科技驱动金融创新，依托大数据风控，在消费分期、小额信用贷款等领域为客户提供便捷、高效的借款信息咨询服务。目前，已在全国二十余个省市自治区设立两百余家分子公司，建立了完善的普惠金融服务网络，为客户提供全方位、个性化的普惠金融信息服务。</p>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="div4">
                        <div class="div5">
                            <img src="${pageContext.request.contextPath}/images/map.png" width="443" height="370" border="0" alt="">
                        </div>
                        <div class="h3" align="center">6大区域　230余家门店　覆盖全国30个省市自治区</div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</div>
<div class="div9">
    <div class="div9-1">
        <span class="zxb"><img src="${pageContext.request.contextPath}/images/new-a40e8ae2ae.png" title="小牛在线P2P网贷新手专享标" width="40" height="20" border="0" alt="">  新手专享标</span><span style="color: #999;font-size: 16px;margin-left: 5px;">仅限累积投标少于3次用户</span>
    </div>
    <div>
        <c:forEach items="${zbgjList}" var="r">
            <a class="a1" href="${pageContext.request.contextPath}/invest/selinvestbyid/${r.sid}">
                <div  class="div8">
                    <div class="cd"></div>
                    <dl class="dl-1 db">
                        <dt style="font-size: 20px;"><big>${r.interest}%</big> <span class="orange"><big>+5.0%</big></span> <span class="text-tag">新手奖励</span></dt>
                        <dd>参考利率   <i class="icon"  title="小牛在线P2P互联网金融平台所有项目参考利率是在参考同类型工具历史数据得出，并不代表实际收益，市场有风险，出借需谨慎。"><big>?</big></i></dd>
                    </dl>
                    <dl class="dl-2 db">
                        <dt >${r.period}</dt>
                        <dd>锁定期|持满自动转让</dd>
                    </dl>
                    <dl class="dl-3 db">
                        <dt>${r.quota}</dt>
                        <dd>单笔限额</dd>
                    </dl>
                    <dl class="dl-4 db">
                        <dt>${r.amount}元</dt>
                        <dd>可加入</dd>
                    </dl>
                    <dl class="dl-5 db" >
                        <dd class="items"><button class="btns">立即加入</button></dd>
                    </dl>
                </div>
            </a>
        </c:forEach>
    </div>
</div>
<div class="div10">
    <div class="div9-1">
        <span class="zxb">牛人推荐</span><span style="color: #999;font-size: 16px;margin-left: 5px;">最新最精彩 就在这里</span>
    </div>
    <div class="div12">
        <div class="div13"><img src="${pageContext.request.contextPath}/images/367c04a5-a009-4ab0-9d9b-2fbe4e40986d0.jpg" width="573" height="208" border="0" alt=""></div>
        <div class="div11"></div>
        <div class="div13"><img src="${pageContext.request.contextPath}/images/ae4ad98e-ecd0-4d1f-ac01-c9046c18c45e.jpg" width="573" height="208" border="0" alt=""></div>
    </div>
</div>
<div class="div14">
    <div class="div9-1">
        <span class="zxb">散标</span><span style="color: #999;font-size: 16px;margin-left: 5px;">小额一对一</span>
    </div>
    <div class="div15">
        <div style="float:left;">
            <img src="${pageContext.request.contextPath}/images/flexible-box-bg-292a30a13c.png" width="225" height="404" border="0" alt="">
            <div class="tittlediv" style="color: #24cc3e;">小额一对一</div>
            <div class="btndiv"><a href="#"><button class="btn2s" style="border: 1px solid #45c722;color: #45c722;">查看详情</button></a></div>
        </div>
        <div class="conter"  style="    border-top: 2px solid #d3f2b4;">
            <div class="itemes">
                <div class="sbbox">
                    <div class="divpanel">
                        <div class="divfont1">10.80<span class="divfon1">%</span></div>
                        <div class="divfont2">参考利率   <i class="icon"  title="小牛在线P2P互联网金融平台所有项目参考利率是在参考同类型工具历史数据得出，并不代表实际收益，市场有风险，出借需谨慎。"><big>?</big></i></div>
                        <div class="about">
                            <div class="descripttion">小额消费借款</div>
                            <div class="name">消费贷E20190422-a16</div>
                            <div class="info"><div class="yield">期限：15个月</div></div>
                            <div class="extend">
                                <a class="btn">立即出借</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sbbox">
                    <div class="divpanel">
                        <div class="divfont1">10.80<span class="divfon1">%</span></div>
                        <div class="divfont2">参考利率   <i class="icon"  title="小牛在线P2P互联网金融平台所有项目参考利率是在参考同类型工具历史数据得出，并不代表实际收益，市场有风险，出借需谨慎。"><big>?</big></i></div>
                        <div class="about">
                            <div class="descripttion">小额消费借款</div>
                            <div class="name">消费贷E20190422-a16</div>
                            <div class="info"><div class="yield">期限：15个月</div></div>
                            <div class="extend">
                                <a class="btn">立即出借</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sbbox">
                    <div class="divpanel">
                        <div class="divfont1">10.80<span class="divfon1">%</span></div>
                        <div class="divfont2">参考利率   <i class="icon"  title="小牛在线P2P互联网金融平台所有项目参考利率是在参考同类型工具历史数据得出，并不代表实际收益，市场有风险，出借需谨慎。"><big>?</big></i></div>
                        <div class="about">
                            <div class="descripttion">小额消费借款</div>
                            <div class="name">消费贷E20190422-a16</div>
                            <div class="info"><div class="yield">期限：15个月</div></div>
                            <div class="extend">
                                <a class="btn">立即出借</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="div14">
    <div class="div9-1">
        <div>
            <span class="zxb">投标工具</span><span style="color: #999;font-size: 16px;margin-left: 5px;">	组合投标 分散风险</span><div class="st onhelf" id="scn" onmouseover="cm(this.id)">优享牛</div><div class="st2" id="yxn" onmouseover="cm(this.id)">升财牛</div>
        </div>
    </div>
    <div class="div15" id="scns">
        <div style="float:left;">
            <img src="${pageContext.request.contextPath}/images/fixed-box-bg-d80f79481c.jpg" width="225" height="404" border="0" alt="">
            <div class="tittlediv" style="color: #7cd3e9;">组合投标 分散风险</div>
            <div class="btndiv"><a href="${pageContext.request.contextPath}/invest/toinvest"><button class="btn2s" style="border: 1px solid #7cd3e9;color: #7cd3e9;">查看详情</button></a></div>
        </div>
        <div class="conter"  style="    border-top: 2px solid #7cd3e9;">
            <div class="itemes">
                <c:forEach items="${yunlist}" var="r">
                    <a href="#">
                    <div class="sbbox">
                        <div class="tags-activity" title="拿7.8%返现+6888奖金→" style="background-color: #ef7a46;color: #FFFFFF;">奋斗季</div>
                        <div class="divpanel">
                            <div class="divfont1">${r.interest}<span class="divfon1">%</span><span class="add-rate">+0.80<label>%</label><i>限时</i></span></div>
                            <div class="divfont2">参考利率   <i class="icon"  title="小牛在线P2P互联网金融平台所有项目参考利率是在参考同类型工具历史数据得出，并不代表实际收益，市场有风险，出借需谨慎。"><big>?</big></i></div>
                            <div class="about">
                                <div class="descripttion">${r.headline}</div>
                                <div class="info"><div class="yield2">锁定期：${r.period} | 持满自动转让</div></div>
                                <div class="extend">
                                    <a class="btn">立即加入</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </c:forEach>
            </div>
        </div>
    </div>
    <div class="div15 nohelf" id="yxns">
        <div style="float:left;">
            <img src="${pageContext.request.contextPath}/images/fixed-box-bg-d80f79481c.jpg" width="225" height="404" border="0" alt="">
            <div class="tittlediv" style="color: #7cd3e9;">组合投标 分散风险</div>
            <div class="btndiv"><a href="${pageContext.request.contextPath}/invest/toinvest"><button class="btn2s" style="border: 1px solid #7cd3e9;color: #7cd3e9;">查看详情</button></a></div>
        </div>
        <div class="conter"  style="    border-top: 2px solid #7cd3e9;">
            <div class="itemes">
                <c:forEach items="${scnlist}" var="r">
                    <a href="#">
                        <div class="sbbox">
                            <div class="divpanel">
                                <div class="divfont1"><span class="add-rate">${r.interest}升至</span>${r.interest*1.4}<span class="divfon1">%</span></div>
                                <div class="divfont2">参考利率   <i class="icon"  title="小牛在线P2P互联网金融平台所有项目参考利率是在参考同类型工具历史数据得出，并不代表实际收益，市场有风险，出借需谨慎。"><big>?</big></i></div>
                                <div class="about">
                                    <div class="info"><div class="yield2">锁定期：${r.period} | 持满自动转让</div></div>
                                    <div class="extend">
                                        <a class="btn">立即加入</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </c:forEach>
            </div>
        </div>
    </div>
</div>
<div class="div6">
    <div style="height:100px;" align="center">
        <div style="position:relative;top:40px;height:40px;font-weight:bold;" class="h1">
            友情链接
        </div>
    </div>
    <div class="div7" style="position:relative;left:40px;">
        <img src="${pageContext.request.contextPath}/images/ziben_logo.jpg" width="185" height="50" border="0" alt="">
    </div>
    <div class="div7" style="position:relative;left:60px;">
        <img src="${pageContext.request.contextPath}/images/zaixian_logo.jpg" width="185" height="50" border="0" alt="">
    </div>
    <div class="div7" style="position:relative;left:80px;">
        <img src="${pageContext.request.contextPath}/images/xcf_logo.jpg" width="185" height="50" border="0" alt="">
    </div>
    <div class="div7" style="position:relative;left:100px;">
        <img src="${pageContext.request.contextPath}/images/zhima_logo.jpg" width="185" height="50" border="0" alt="">
    </div>
    <div class="div7" style="position:relative;left:120px;">
        <img src="${pageContext.request.contextPath}/images/tongdun_logo.jpg" width="185" height="50" border="0" alt="">
    </div>
    <div class="div7" style="position:relative;left:140px;">
        <img src="${pageContext.request.contextPath}/images/wangdai_logo.jpg" width="185" height="50" border="0" alt="">
    </div>
</div>
<div style="position:relative;height:90px;width: 1347px;">
    <jsp:include page="../common/bottom.jsp"></jsp:include>
</div>
<!-- footer end -->
<script type="text/javascript" src="${pageContext.request.contextPath}/js/rotation.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery-1.11.2.min.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery.selectlist.js"></script>
<script type="text/javascript">
    $(function(){
        $('#sy').addClass( "zm_cura");
        $('select').selectlist({
            zIndex: 10,
            width: 205,
            height: 40
        });
        $("#two").attr("class","divClass")
    })
</script>
<script type="text/javascript">
    function outlets() {
        var t1=$("#qwetedu").val();
        var t2=$("#qwetsalary").val();
        var t3="${pageContext.request.contextPath}/outlets?province="+t1+"&city="+t2+"";
        window.location.href=t3;
    }
</script>
<script>
    function cm(id){
        var s=id+"s";
        $('#'+id).addClass('onhelf');
        $('#'+s).removeClass('nohelf');
        if(id=='yxn'){
            $('#scn').removeClass('onhelf');
            $('#scns').addClass('nohelf');
        }else{
            $('#yxns').addClass('nohelf');
            $('#yxn').removeClass('onhelf');
        }
    }
</script>
</body>
</html>