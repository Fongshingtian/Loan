<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2019\5\9 0009
  Time: 8:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>

<style>
    /*合同样式*/
    .xn-hetong {
        margin: 0 auto;
        position: relative;
        font-size: 12px;
        color: #666;
        padding: 0 15px;
        font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif, "宋体";
    }

    .xn-hetong a {
        color: #666;
        text-decoration: none;
    }

    .xn-hetong p {
        line-height: 20px;
        padding: 0;
        margin: 0;
        position: relative;
    }
    /*下划线*/

    .xn-hetong u {
        padding: 0 8px;
        display: inline-block;
        border-bottom: #666 solid 1px;
        text-decoration: none;
        margin: 0 3px;
        min-width: 20px;
    }

    .xn-hetong u.min {
        min-width: 50px;
    }
    /*标题*/

    .xn-hetong-title {
        border-bottom: 2px solid #ababab;
        position: relative;
    }

    .xn-hetong-title h1 {
        width: 100%;
        font-size: 16px;
        color: #333;
        text-align: center;
        padding: 20px 0;
        font-weight: 700;
        margin: 0;
    }

    .xn-hetong-title h1 u {
        border-color: #333;
    }

    .xn-hetong-title .downloadArea {
        position: absolute;
        right: 0;
        top: 18px;
        width: 61px;
        height: 23px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAXCAYAAAC4VUe5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFN0IwMThBMDNEMDhFNTExODk5QkVBNzA1RTQyMkNCMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxRjZDNDU5RDA4NDMxMUU1OEVBRTg5MjY4ODE4RjQzMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxRjZDNDU5QzA4NDMxMUU1OEVBRTg5MjY4ODE4RjQzMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU4QjAxOEEwM0QwOEU1MTE4OTlCRUE3MDVFNDIyQ0IzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU3QjAxOEEwM0QwOEU1MTE4OTlCRUE3MDVFNDIyQ0IzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+QFqqvgAAAmlJREFUeNrsWLtKA0EUzcYHCCpGEUshoqKlolgJQvIJ0UYsYyPYmVgIFiLG3iLpLAQxn2AaQUTRlKKFxtInrDYi+FjPyFkZhl3N7iyiiQOHm53Zmdwz994zkxiWZYWqrYVDVdiqknStzuS3OaMBJgoYwCtwBjz/aNRWrZ8ljTYE7EjPfcBppad3zV8sF10nX9WM/xeyCiV9rzxfVqx6Q7XbYZqBTmVoDLgFjh02xKkNApEyv9YEitLzNpABCvRJyHgrkISiZ75ayPBzI8MX9MMcAfUOYvYA9AA3ZSy1QuJyi9lElCYI5znH3rASN0P0Z0HWgG9ZHmXTgZIm8SmYdYehEeBAI/ssnvvftY9Ig9xnpAVpfo7Z/YGS5uLzMMtSl9jdnGbJCYfijKzpkhkRKeVDDpH/yAwQTwdOmsQ3YSaADWAyAJ2xWKsJbmLBpSxMRtr24zPy+ByBNX1HGgsIhe8GmoBzdTGMi5peAJaAF2V6B6+pV8CFx/QWtb3FzLEjliSiiqgVGekMsyD2VU2Xo97ifr0PtAAzwJrDBWXRZa5I/1ngEBj2GHER4S7W7jZTPkdyeSmF7ZpOcSzGDNE6sizpPcOj42HN+4BJslGpL8kNEX0myNrqbXJMbEQpiHP6EWgErj06fUf7pFHj6vlsb3xKEbsIIz3+nYJ7vZwMYLGSw9nsdi/v8Zkhbi3BaJqSWhdoU7QJ+Fjgu75Jh3nTCVFQ0j6cbQuIdF6qZznSWdZ7keI3qGSHZ9IiNfeAUQ1ndz28Gy/zvaJ0LqclQRunmOW0LidYqA6m18dPR4NzTn7TPydGNf4b+i7AANN705Fm4/N6AAAAAElFTkSuQmCC) center center no-repeat;
    }

    .xn-hetong-title .downloadArea a {
        display: block;
        width: 100%;
        height: 100%;
    }

    .xn-hetong h3 {
        font-size: 12px;
        font-weight: 700;
        padding: 15px 0;
        margin: 0;
    }
    /*编号及下载按钮*/

    .xn-hetong-meta {
        padding: 10px 0;
        text-align: right;
    }

    .xn-hetong-meta p a {
        color: #666;
    }

    .xn-hetong-meta p {
        padding: 5px 0 0 0;
        word-wrap: break-word;
        word-break: break-all;
    }
    /*甲乙双方 */

    .xn-hetong-sf {
        margin-bottom: 10px;
    }
    /*主体内容*/

    .xn-hetong-main ul {
        padding: 0;
        margin: 0;
        padding: 0 20px;
    }

    .xn-hetong-main ul li {
        color: #666;
        font-size: 12px;
        line-height: 20px;
        position: relative;
        left: 25px;
        list-style: none;
        padding: 0;
        margin: 0;
        word-wrap: break-word;
        word-break: break-all;
    }

    .xn-hetong-main ul li i {
        position: absolute;
        left: -25px;
        font-style: normal;
    }
    /*结尾*/

    .xn-hetong-end {
        text-align: center;
        padding: 10px 0;
        font-size: 12px;
    }
    .xn-hetong-end ul {
        width: 50%;
        float:left;
        display: block;
        padding-top:20px;
    }
    .xn-hetong-end ul li {
        line-height: 22px;
        list-style: none;
        width: 100%;
        text-align: left;
        padding:5px 20px;
    }
    .xn-hetong-end ul.right li {
        text-align: center;
    }
    .xn-hetong-end2 ul {
        width:45%;
    }
    .xn-hetong-end2 ul.right {
        width:54%;
    }
    .xn-hetong-end3 ul.left {
        width:27%;
    }
    .xn-hetong-end3 ul.right {
        width:45%;
    }
    .xn-hetong-end3-transfer ul.left {
        width:50%;
    }
    .xn-hetong-end3-transfer ul.middle {
        width:20%;
    }
    .xn-hetong-end3-transfer ul.right {
        width:29%;
    }
    .xn-hetong-end3-factor ul.left {
        width:20%;
    }
    .xn-hetong-end3-factor ul.middle {
        width:50%;
    }
    .xn-hetong-end3-factor ul.right {
        width:29%;
    }
    .clearfix {
        zoom: 1;
    }
    .clearfix:after {
        content: '.';
        display: block;
        visibility: hidden;
        clear: both;
        height: 0px;
    }
</style>
<style>
    *{padding:0px;margin:0px;border:none;}

    body{color: #666;font-size: 12px;font-family: 'Microsoft YaHei';}

    h4{font-size:12px;font-weight:700;}

    .content{padding:20px;}

    .content a{color: #666;}

    .content a:hover{color:#028ccb}

    .titleArea{border-bottom:2px solid #ababab;}

    .titleArea .title{text-align:center;font-size:16px;color:#333}

    .downloadArea:after{content:"";display:block;clear:both;}

    .downloadArea{height:23px;}

    .downloadArea .download{display:block;width:61px;height:23px;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAXCAYAAAC4VUe5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFN0IwMThBMDNEMDhFNTExODk5QkVBNzA1RTQyMkNCMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxRjZDNDU5RDA4NDMxMUU1OEVBRTg5MjY4ODE4RjQzMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxRjZDNDU5QzA4NDMxMUU1OEVBRTg5MjY4ODE4RjQzMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU4QjAxOEEwM0QwOEU1MTE4OTlCRUE3MDVFNDIyQ0IzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU3QjAxOEEwM0QwOEU1MTE4OTlCRUE3MDVFNDIyQ0IzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+QFqqvgAAAmlJREFUeNrsWLtKA0EUzcYHCCpGEUshoqKlolgJQvIJ0UYsYyPYmVgIFiLG3iLpLAQxn2AaQUTRlKKFxtInrDYi+FjPyFkZhl3N7iyiiQOHm53Zmdwz994zkxiWZYWqrYVDVdiqknStzuS3OaMBJgoYwCtwBjz/aNRWrZ8ljTYE7EjPfcBppad3zV8sF10nX9WM/xeyCiV9rzxfVqx6Q7XbYZqBTmVoDLgFjh02xKkNApEyv9YEitLzNpABCvRJyHgrkISiZ75ayPBzI8MX9MMcAfUOYvYA9AA3ZSy1QuJyi9lElCYI5znH3rASN0P0Z0HWgG9ZHmXTgZIm8SmYdYehEeBAI/ssnvvftY9Ig9xnpAVpfo7Z/YGS5uLzMMtSl9jdnGbJCYfijKzpkhkRKeVDDpH/yAwQTwdOmsQ3YSaADWAyAJ2xWKsJbmLBpSxMRtr24zPy+ByBNX1HGgsIhe8GmoBzdTGMi5peAJaAF2V6B6+pV8CFx/QWtb3FzLEjliSiiqgVGekMsyD2VU2Xo97ifr0PtAAzwJrDBWXRZa5I/1ngEBj2GHER4S7W7jZTPkdyeSmF7ZpOcSzGDNE6sizpPcOj42HN+4BJslGpL8kNEX0myNrqbXJMbEQpiHP6EWgErj06fUf7pFHj6vlsb3xKEbsIIz3+nYJ7vZwMYLGSw9nsdi/v8Zkhbi3BaJqSWhdoU7QJ+Fjgu75Jh3nTCVFQ0j6cbQuIdF6qZznSWdZ7keI3qGSHZ9IiNfeAUQ1ndz28Gy/zvaJ0LqclQRunmOW0LidYqA6m18dPR4NzTn7TPydGNf4b+i7AANN705Fm4/N6AAAAAElFTkSuQmCC) center center no-repeat;float:right;}

    .htph{text-align:right;line-height:40px;min-height:20px;}

    .jiafang{}

    .jiafang span{padding-left:5px;}

    .table{margin:10px 10px 10px 40px;font-size:12px;}

    .table td,.table th{border-collapse: separate;border-spacing: 0;border:1px solid #d7d7d5;text-align:center;padding:5px 20px;}

    .table th{background:#f8f5f0;}

    .w_table td,.w_table th{padding:5px 5px;}

    .bingfang{margin:10px 0px;}

    .listArea{margin:10px 0px;padding-left:20px;}

    .listArea .listLine{width:100%;position:relative;}

    .listArea .listLine:after{content:"";display:block;clear:both;}

    .listLine .listIndex{width:20px;float:left;}

    .listLine .listContent{margin-left:25px;}

    .listLine .listContent2{margin-left:30px;}

    .beizhu{padding-left:40px;margin:10px 0px;}

    .beizhu p{text-indent:2em;font-weight:600;}

    .qianming{margin:30px 0px;}

    .underLine{display:inline-block;*display:inline;*zoom:1;border-bottom:1px solid #666;padding:0px 10px;min-width:30px;text-align:center;}

    .textLine{text-decoration: underline;line-height:20px;}

    .margin_bottom1x{margin-bottom:10px;}

    .instructions{padding:5px 0px;}

    .instructions p{text-indent:2em;}

    .instructions p span{text-indent:0em;}

    .bold{font-weight:bold;}

    .end{text-align:center;}

    .table .alignLeft{text-align:left;}

    .minWidth{min-width:200px;}

    .titleNoArea{text-align:right;margin:0px 5px 5px 0px;color:orange;font-weight:bold;}

    .left_table{margin-left:0px}

    .titleCenter{text-align:center;font-size:16px;color:#333;}

    .textLeft{margin-left:80px;}

    .textFontWeight{font-weight:700;}

    .textFontWhite{color:white;}

    .xnLogoBackground {background-image:url(/cms/common/dist/img/xn.png);}

    .noBordertable{margin:0px;font-size:12px;}

    .noBordertable td,.noBordertable th{border-collapse: separate;border-spacing: 0;border: 0px solid #d7d7d5;text-align:center;padding:5px 8px;}

    .noBordertable th{background:#f8f5f0;}
</style>
<style>
    @media screen and (max-width:640px) {
        .content {
            padding: 20px 0;
        }
        .listArea {
            padding-left: 5px;
        }
        .xn-hetong-main ul li {
            padding-left: 5px;
        }
        .table td,.table th {
            padding: 5px;
        }
        .minWidth {
            min-width:100px;
        }
        .xn-hetong-end ul li {
            padding: 5px;
        }
    }
</style>
<body>


<div class="content">



    <div class="titleArea">
        <div class="title">



            安心牛M20151213-3076期服务合同


        </div>

        <div class="downloadArea">
            <a class="download" href="/cms/contract/download/pdf/borrowId/146418/investId/1236544"></a>
        </div>

    </div>
    <div class="htph">合同编号：201512131464${mytb.bid}</div>






    <div>
        <p>本合同（下称“本合同”）由以下各方于${mybt.begintime}于深圳市福田区签署：</p>
    </div>
    <div class="jiafang">
        <p>甲方：<span class="underLine">${real.realname}</span></p>
        <p>身份证号码：<span class="underLine">${real.idcard}</span></p>
        <p>网站用户名：<span class="underLine">${user.uname}</span></p>
    </div>
    <div class="bingfang">
        <p>乙方：<span class="underLine">深圳市小牛在线互联网信息咨询有限公司</span></p>
        <p>住所：<span class="underLine">深圳市前海深港合作区临海大道59号海运中心主塔楼2117C室</span></p>
    </div>
    <!-- 合同主体 -->
    <div class="xn-hetong-main">
        <h3>定义：</h3>
        <p>除非本合同另有规定，以下用语在本合同中定义如下：</p>
        <p>1、甲方指通过乙方平台注册账户的会员，加入本期服务计划并通过乙方出借一定金额资金给他人的自然人。</p>
        <p>2、乙方是一家在深圳市合法成立并有效存续的有限责任公司，拥有网络借贷信息中介平台：小牛在线网站（网址：www.xiaoniu88.com，以下统称“本网站”）的经营权，专业提供借贷信息的采集整理、甄别筛选、网上发布、资信评估、借贷撮合、融资咨询等相关服务。</p>
        <p>3、第三方支付平台：小牛在线合作的支付机构。</p>
        <p>4、以上各方本着实事求是、平等互利、共同发展的原则，就甲方通过本网站向借款人出借资金事宜，经过友好协商，达成合同如下：</p>
        <h3>第1条 服务计划意向</h3>
        <ul>
            <li><i>1.1</i>安心牛服务计划指“出借人委托自动投标及到期按相关规则退出”的服务计划（下称“本期服务计划”），乙方根据甲方的委托，将甲方加入服务计划的资金分散投入到经过乙方审核的优质资产项目中。</li>
            <li><i>1.2</i>安心牛服务计划将由乙方对各类资产进行分散筛选、协助甲方将资金分散投入到乙方筛选的各类资产项目，甲方委托乙方依照本网站公布的各项规则、合同、条款及声明就本期服务计划项下所涉及的各类电子合同和纸质合同进行管理，以及服务计划信息的公告与发布等。</li>
            <li><i>1.3</i>甲方理解并接受本期服务计划及本合同的全部内容，一旦甲方使用本网站提供的任何一项服务，即表示甲方同意遵守本合同之相关所有约定。</li>
        </ul>
        <h3>第2条 本期服务计划详情</h3>
        <ul>
            <li><i>2.1</i> 甲方同意按照如下条件加入乙方提供的本期服务计划，详情如下：
                <p>（1）加入本金数额（下称“加入资金”）：<span class="underLine">${t.sjmoney}.00</span></p>
                <p>（2）参考利率： <span class="underLine">${t.ckrate}</span> % 至 <span class="underLine">${t.ckrate}</span>%</p>
                <p>（3）服务期限：



                    <span class="underLine">${t.periods}</span>个月


                    （<span class="underLine">${t.begintime}</span>至<span class="underLine">${t.endtime}</span>）
                </p>
                <p>（4）回款处理方式：回款（含本金及利息）再投标。</p>
                <p>（5）收益规则：本期服务计划自成立日开始计算收益，服务计划资金募集完成次日即为成立日。</p>
                <p>（6）可否申请提前退出：
                    <span class="underLine">

                        否
                    </span>
                </p>
            </li>
            <li><i>2.2</i> 甲方在本期服务计划成立日<span class="underLine">${t.begintime}</span>前（含成立日）支付完毕加入资金的，自本服务计划成立日起视为已加入本期服务计划；甲方加入资金的收益按本期服务计划进行投标所对应签署的《借款合同》确定，各笔借款每期偿还的利息在合并计提当期管理费（计提方法参见本合同第4条）后剩余的部分将作为本服务计划的可支配收益（下称“收益”），在本服务计划期限内由乙方继续代为投标，适用本合同各项约定。</li>
            <li><i>2.3</i> 甲方加入本服务计划的投标收益所得按本合同约定的参考利率计算（即：投标收益所得=加入资金*实际投标天数*参考利率/360）。甲方已经知悉、了解并同意：参考利率不代表甲方最终实际收益率，甲方出借本金以及利息存在不能够按期收回的风险，在实际收益率未达到参考利率的情况下，甲方仅能按实际收益率收取投标收益，乙方不对甲方加入资金的收回、可获收益金额做出任何承诺、保证。
            </li>
        </ul>
        <h3>第3条 服务计划退出</h3>
        <ul>
            <li><i>3.1</i> 到期退出 服务期限届满次日，甲方将不再享受自动投标服务并自动退出本期服务计划，届时甲方通过本期服务计划自动投标而对应产生的债权、资金按照本合同第3条3.4款约定进行处理。
            </li>
            <li><i>3.2</i> 提前退出 （1） 甲方加入的本期服务计划，按照本合同第2条2.1款（6）项约定，允许申请提前退出且满足本网站债权转让规则的，甲方可提出一次性全额提前退出申请，申请一经提出不可撤销。 （2） 甲方的提前退出申请经乙方确认后，即视为其已退出本期服务计划。甲方通过本期服务计划自动投标借款项目而产生的债权及对应的资金按照本合同第3条3.4款约定进行处理。</li>
            <li><i>3.3</i> 自动退出 甲方加入本服务计划后，如出现一定时期内无足够资产项目可供乙方代甲方进行投标，使得整体投标实际收益率无法达到计划的参考利率，按照本服务计划投标人先进先出原则，甲方将视为自动退出本计划。自退出之日起，甲方加入资金不再享有收益。乙方根据本合同第4条约定的标准扣除相关费用后将余额直接提取至甲方平台账户，甲方可自行支配、使用。
            </li>
            <li><i>3.4</i> 退出服务计划时债权及资金的处理方式： 甲方不可撤销地同意并授权乙方将甲方加入资金自动投标而产生的债权及对应的资金按如下方式处理： （1）如甲方加入资金通过乙方进行出借后对应债权本息尚未完全回款并处于正常还款状态，则乙方将于甲方退出本期服务计划之时将该等债权进行转让；债权最终转让完毕的时间以实际交易情况确定，乙方并不对该等债权转让完成的时间做出任何承诺和保证；转让所得资金按照本款（2）项约定处理； （2）对于甲方退出本期服务计划时甲方加入资金中尚未进行投标的部分，以及虽投标但是已收回的本息资金，均由乙方在根据本合同第4条约定的标准扣除相关费用后直接提取至甲方平台账户，甲方可自行支配、使用； （3）如甲方加入资金出借后对应债权本息尚未完全回款且部分处于逾期状态，则对于该部分已逾期的债权，暂不进行转让；在该部分逾期债权的债务人对逾期欠款进行清偿且该等债权的状态为正常还款后，可按照本款（1）项约定进行转让。
            </li>
        </ul>
        <h3>第4条 管理、手续费用收取</h3>
        <ul>
            <li><i>4.1</i> 乙方依据本合同向甲方提供服务，有权向甲方收取相应的管理费用及手续费（目前乙方收取的费用包括管理费用和提前退出的转让服务费，如有调整见本网站公告）。</li>
            <li><i>4.2</i> 管理费的计算和收取： （1） 乙方依据本合同对甲方加入资金进行优先投标。甲方按照本合同约定退出本期服务计划时，若甲方各笔出借款项中（含回款复投）借款人偿还的利息总额超过本合同约定的历史收益时，超额部分视为乙方向甲方收取的管理费（可以合并或分期计提），归乙方所有。 （2） 参考利率仅为乙方向甲方收取管理费的基准和依据，不代表对乙方加入本期服务计划可以取得的收益的任何预测，也不是乙方对甲方加入本期服务计划可以取得的收益的任何保证、承诺。</li>
            <li><i>4.3</i> 提前退出的转让手续费的计算和收取： 甲方满足提前退出条件且申请提前退出的，应向乙方支付转让手续费，收费标准详见本网站债权转让规则。</li>
        </ul>
        <h3>第5条 授权与委托</h3>
        <ul>
            <li><i>5.1</i> 授权投标：甲方在签署本合同时不可撤销地委托并授权乙方根据本网站有关规则通过网站系统将甲方加入资金按一定比例自动投标于各类资产。
            </li>
            <li><i>5.2</i> 授权签署合同：甲方不可撤销地委托并授权乙方代为签署投标过程中涉及的相关合同。甲方对此等自动投标和自动签署相关合同之安排已充分知悉并理解，该等自动签署的合同均视为甲方真实意思的表示，甲方对该等法律文件的效力均予以认可且无任何异议并无条件接受该等自动签署的合同约束。
            </li>
            <li><i>5.3</i> 甲方在此无条件且不可撤销地同意并确认：甲方通过系统自动投标而签署的合同等法律文件或其中的相关条款生效后，乙方即可根据该等合同和本合同相关约定，对甲方相关款项进行划扣、支付、冻结以及行使其他权利，甲方对此均予以接受和认可。
            </li>
        </ul>
        <h3>第6条 服务计划保障</h3>
        <ul>
            <li><i>6.1</i> 为降低因甲方加入资金过于集中投标某些资产而带来的借款人信用违约风险高度集中而带来的不良影响，乙方将对甲方加入本期服务计划金额根据本网站有关规则安排分散化的优先自动投标。
            </li>
            <li><i>6.2</i> 为保证本期服务计划的及时性，在甲方加入本期服务计划时，系统即为甲方加入本期服务计划的甲方加入资金启动优先自动投标的功能。
            </li>
        </ul>
        <h3>第7条 服务计划变更</h3>
        <ul>
            <li><i>7.1</i> 在下列情况出现时，乙方可采取提前终止、暂停本期服务计划，或控制交易额度、调整参考利率或其他合理措施对本期服务计划进行调整，以降低甲方资金及服务计划面临的风险，保护甲方的合法利益。
                <p>a.宏观经济变化，导致整体市场环境恶化，融资风险提高的；</p>
                <p>b.国家政策调整，导致本服务计划面临重大风险的；</p>
                <p>c.本期服务计划参与投标人债权转让频繁导致服务计划内出借金额度短期内发生剧烈变动，导致管理成本提高或管理难度加大的；</p>
                <p>d.本期服务计划内资金所投向的借款人逾期导致服务计划无法持续的。</p>
                <p>e.发生战争、地震、火山喷发、罢工、游行示威或政府管制等不可抗力原因导致服务计划无法持续的。 发生以上情形的，乙方将采取合理措施最大程度规避风险，并及时通过约定的方式告知甲方，甲方确认在此情况下乙方不承担违约责任。服务计划终止情况下乙方应当按照过往期间实际利率额外向甲方支付1至3天的利息并将相应款项按照本合同约定方式支付至甲方在平台开立的账户。
                </p>
            </li>
            <li><i>7.2</i> 如因司法机关或行政机关对甲方采取强制措施导致其在本期服务计划金额的加入资金及相应收益被全部或部分扣划，视为甲方提前退出本期服务计划，本合同自动终止。本合同因此而自动终止的，甲方将不再享有相应收益。但甲方仍应按照本合同约定支付相关管理费或服务费。
            </li>
        </ul>
        <h3>第8条 甲方声明和保证</h3>
        <ul>
            <li><i>8.1</i> 在签署本合同书以前，乙方已就本合同书及有关交易文件的全部条款和内容向甲方进行了详细的说明和解释，甲方已认真阅读本合同有关条款，对有关条款不存在任何疑问或异议，并对合同双方的权利、义务、责任与风险有清楚和准确的理解。
            </li>
            <li><i>8.2</i> 甲方保证加入本期服务计划的资金为合法取得，且甲方对该等资金拥有完全且无瑕疵的处分权。</li>
            <li><i>8.3</i> 甲方保证为履行本合同而向乙方提供的全部资料均真实、有效。</li>
            <li><i>8.4</i>甲方同意并承诺按本合同及本网站的相关规则和说明向乙方支付相关费用。</li>
        </ul>
        <h3>第9条 违约责任</h3>
        <ul>
            <li><i>9.1</i> 在本合同有效期内，一方违反本合同之任何条款，致使相关方遭受损失时，违约方须赔偿因此给对方造成的一切经济损失（包括但不限于诉讼/仲裁费用、律师费用、评估费、保全及担保费、交通费、差旅费、调查费及其他实现债权所产生的费用等）；双方均有过错的，应根据双方实际过错程度，分别承担各自的违约责任。
            </li>
        </ul>
        <h3>第10条 其他</h3>
        <ul>
            <li><i>10.1</i>甲方需要通过本网站查询或咨询客服人员等方式了解相关信息，如未及时查询，或由于通讯故障、系统故障以及其他不可抗力等因素影响使甲方无法及时了解相关信息，由此产生的责任和风险由甲方自行承担。</li>
            <li><i>10.2</i> 本期服务计划和甲方通过点击确认与乙方签署的用户注册合同等相关合同，以及乙方在本网站不时公示之交易规则、说明、公告等涉及甲乙双方权利义务的法律文件，共同构成了约束甲方接受乙方在本合同项下提供之服务时双方行为的合同之整体，甲方均须予以遵守，如有违反，应当自行承担相关法律后果。
            </li>
            <li><i>10.3</i> 由于地震、火灾、战争、电力中断、黑客攻击、计算机病毒、系统或网络故障等不可抗力导致的交易中断、延误的，甲乙双方互不追究责任。但应在条件允许的情况下，应采取一切必要的补救措施以减小不可抗力造成的损失。
            </li>
            <li><i>10.4</i> 甲方成功加入本期服务计划后，如果在本期服务计划成立日前（含成立日），甲方向本期服务计划追加加入资金的，则甲方与乙方之间的权利义务约定及甲方加入本期服务计划的总金额应以最后生成的合同书所约定的内容为准。
            </li>
            <li><i>10.5</i> 本合同自甲方在本网站操作确认并成功加入本期服务计划时生效。本合同采用电子文本形式制成，可以有一份或者多份并且每一份具有同等法律效力，对各方均具有法律约束力。本期服务计划不提供纸质合同或相关账单。
            </li>
            <li><i>10.6</i> 甲方自行承担、缴纳本服务计划所获收益的应纳税额。
            </li>
            <li><i>10.7</i> 本合同适用中华人民共和国法律和法规。各方同意并遵守，凡因本合同引起的或本合同有关的任何争议，均应提交湛江仲裁委员会按照该院仲裁规则进行仲裁。涉及费用包括但不限于仲裁费、执行费、交通费、律师费等均由甲方承担。
            </li>
            <li><i>10.8</i> 本服务计划及相关本服务计划项下借贷撮合项目各方当事人提交的相关文件材料及签署的合同文本，乙方将保存至借款期限届满后五年。
            </li>
        </ul>
    </div>
    <div class="xn-hetong-end">（以下无正文）</div>




















































</div>
</body>
</html>
