define("page/payment/deposit/apply/js/apply", ["../../../../../payment/bankcard/js/check_idno", "../tpl/contanier", "../tpl/success"], function (a, e, t) {
    function r(a) {
        var e = (a + "").length;
        if (0 == e) return 0;
        if (15 != e && 18 != e) return 0;
        var t = "";
        18 == e && (t = a.substr(6, 4) + "/" + a.substr(10, 2) + "/" + a.substr(12, 2)), 15 == e && (t = "19" + a.substr(6, 2) + "/" + a.substr(8, 2) + "/" + a.substr(10, 2));
        var r = new Date(t), i = new Date, n = i.getFullYear() - r.getFullYear();
        return (i.getMonth() < r.getMonth() || i.getMonth() == r.getMonth() && i.getDate() < r.getDate()) && n--, n
    }

    var i, n, s, d, o, l, c, u, p = a("../../../../../payment/bankcard/js/check_idno"),
        b = {realName: "/payment/deposit/apply", normal: "/payment/bankcard/index/normal"},
        m = {contanier: a("../tpl/contanier"), success: a("../tpl/success")}, f = {
            init: function () {
                var a;
                if (void 0 !== u) {
                    if (a = this.getBindCardLogic(), a.openUrl) return void(window.location.href = a.openUrl);
                    u.bankCardInfo = a.bankCardInfo || {}, u.applyUrl = a.applyUrl, this.render(), this.setDefaultCardBin(u.bankCardInfo.bankType, u.bankCardInfo.bankTypeName, !0), this.initEvent()
                }
            }, queryValidBankCardData: function () {
                $.post("/payment/bankcard/queryValidBankCardData.json", function (a) {
                    var e = a.zx || {};
                    e.bankcard = e.bankcard || {}, u = a, u.zx = e, u.verifyBindCard = e.verifyBindCard, u.supportList = e.supportListDTOs || [], f.init()
                })
            }, getBindCardLogic: function () {
                var a = u.zx.bankcard || {}, e = "quickPayBindIndex", t = a.status;
                return a.bindCardNo = u.zx.bindCardNo, "0" === window.supportQuickPay || 7 === t ? {
                    bankCardInfo: a,
                    applyUrl: "applyQuickPay"
                } : 2 === t || 4 === t ? {openUrl: b.normal} : {bankCardInfo: a, applyUrl: e}
            }, getBankCardNo: function () {
                return u.bankCardInfo.bindCardNo || n[0].value.replace(/\s/g, "")
            }, render: function () {
                var a = $("#contanier");
                i = a, a.html($.util.dot(m.contanier, u)), $realName = a.find("#realName"), $idnumber = a.find("#idnumber"), n = a.find("#banknum"), s = a.find("#codeBtn"), d = a.find(".selected"), o = a.find("#submitMsg"), l = a.find("#submitBtn"), c = a.find("#getcodeBtn")
            }, setDefaultCardBin: function (a, e, t) {
                var r = !1;
                a && e && (r = d.find('option[value="' + a + '"]').length, r || !t && !u.verifyBindCard || d.append('<option value="' + a + '">' + e + "</option>"), d.find('option[value="' + a + '"]').length && d.val(a).attr("disabled", !0))
            }, getCardBin: function () {
                var a = this.getBankCardNo();
                a && $.get("/payment/bankcard/getCardBin/" + a, function (a) {
                    var e = a.data || {};
                    f.setDefaultCardBin(e.bankCode, e.bankName)
                })
            }, initEvent: function (a) {
                var e = this;
                i.find("input").focus(e.focusValidator).blur(e.blurValidator), $idnumber.on("input", function () {
                    this.value = this.value.toUpperCase()
                }), n.on("input", function () {
                    e.cardSplit(this, function (a) {
                        a.length >= 10 && e.getCardBin()
                    })
                }), d.change(function (a) {
                    var t = this.value, r = $(this).next();
                    return t ? "other" === t ? void e.dialogAuth() : void r.removeClass("errTip").html(r.attr("data-tip")) : void e.tipsError(r, "请选择您的常用银行卡")
                }), i.on("click", ".normal_link", e.dialogAuth), c.click(function () {
                    return e.getCode(), !1
                }), i.on("click", ".bindcard-info", function () {
                    return e.dialogProtocol($(this).attr("href")), !1
                }), this.bindSubmit()
            }, bindSubmit: function () {
                var a = this;
                l.click(function () {
                    var e = s.val();
                    return o.html(""), $("#arge")[0].checked ? "" == e || isNaN(e) ? (s.removeClass("fcs").addClass("err"), void a.tipsError(c, "请输入验证码")) : (s.removeClass("fcs err"), s.next().removeClass("errTip").html(""), void a.submitData()) : ($.util.alertInfo("请勾选我已阅读并同意《资金管理服务协议》"), !1)
                })
            }, focusValidator: function (a) {
                var e = $(a.target), t = e.siblings(".bindcard-tip");
                e.removeClass("err").addClass("fcs"), t.html(t.attr("data-tip")).removeClass("errTip")
            }, blurValidator: function (a) {
                var e = f, t = $(a.target), r = t.val().replace(/\s/g, ""), i = t.siblings(".bindcard-tip");
                switch (t.attr("name")) {
                    case"realName":
                        if ("" == r) return t.removeClass("fcs").addClass("err"), void e.tipsError(t, "请填写您的真实姓名");
                        if (!/^[\u4e00-\u9fa5]+[\u4e00-\u9fa5\u00b7]*[\u4e00-\u9fa5]+$/.test(r) || r.length < 2 || r.length > 20) return t.removeClass("fcs").addClass("err"), void e.tipsError(t, "您填写的真实姓名格式不正确");
                        t.removeClass("fcs err"), i.removeClass("errTip").html(i.attr("data-tip"));
                        break;
                    case"idnumber":
                        if ("" == r) return t.removeClass("fcs").addClass("err"), void e.tipsError(t, "请填写您的身份证号码");
                        if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(r)) return t.removeClass("fcs").addClass("err"), void e.tipsError(t, "您填写的身份证号格式不正确");
                        if (!p.IdCardValidate(r)) return t.removeClass("fcs").addClass("err"), void e.tipsError(t, "您填写的身份证号无效，请重新填写");
                        t.removeClass("fcs err"), i.removeClass("errTip").html(i.attr("data-tip"));
                        break;
                    case"banknum":
                        if ("" == r) return t.removeClass("fcs").addClass("err"), void e.tipsError(t, "请输入银行卡号");
                        if (!/^\d{16,19}$/.test(r)) return t.removeClass("fcs").addClass("err"), void e.tipsError(t, "银行卡号须为16-19位数字");
                        t.removeClass("fcs err"), i.removeClass("errTip").html(i.attr("data-tip"));
                        break;
                    case"code":
                        if ("" == r || isNaN(r)) return t.removeClass("fcs").addClass("err"), void e.tipsError(t, "请输入验证码");
                        t.removeClass("fcs err"), i.removeClass("errTip").html("")
                }
            }, getSubmitParams: function () {
                var a;
                if ("applyQuickPay" === u.applyUrl) return {};
                if (a = {
                    bankType: d.val(),
                    bankTypeName: d.find("option:selected").html(),
                    bankCardNo: this.getBankCardNo()
                }, !u.realNameAuthFlag) {
                    if (a.realName = $realName.val(), a.idNo = $idnumber.val(), !a.realName) return this.tipsError($realName, "请输入真实姓名"), !1;
                    if (!a.idNo) return this.tipsError($idnumber, "请输入身份证号码"), !1;
                    if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(a.idNo)) return this.tipsError($idnumber, "您填写的身份证号格式不正确"), !1;
                    if (!p.IdCardValidate(a.idNo)) return this.tipsError($idnumber, "您填写的身份证号无效，请重新填写"), !1;
                    if (r(a.idNo) < 18) return this.tipsError($idnumber, "未满18周岁不能进行注册投资"), !1
                }
                return a.bankCardNo ? a.bankType && a.bankTypeName ? a : (this.tipsError(d, "请选择您的常用银行卡"), !1) : (this.tipsError(n, "请输入银行卡号"), !1)
            }, getCode: function () {
                function a(a) {
                    u.realNameAuthFlag || ($realName[0].disabled = !1, $idnumber[0].disabled = !1), u.bankCardInfo.bankCardNo || (n[0].disabled = !1, d[0].disabled = !1), o.html(a || "网络或系统繁忙，请稍后再试！"), f.stopGetCodeTimer()
                }

                var e = this.getSubmitParams();
                if (e) {
                    if (u.verifyBindCard) return void o.html("绑卡申请正在处理中，请稍后查看！");
                    o.html(""), this.disForm(), s[0].disabled = !1, s[0].innerHTML = "", c.next().removeClass("errTip").html(""), this.startGetCodeTimer(120), $.ajax({
                        type: "post",
                        url: "/payment/bankcard/" + u.applyUrl,
                        data: e,
                        success: function (e) {
                            0 != e.status && a(e.errorDetails)
                        },
                        error: function () {
                            a()
                        }
                    })
                }
            }, submitData: function () {
                var a = this;
                o.html(""), this.stopGetCodeTimer(), this.disForm(), l[0].disabled = !0, this.startBindTimer(30), $.ajax({
                    type: "post",
                    url: "/payment/bankcard/quickPayBindVerify",
                    data: {regCode: s.val()},
                    success: function (e) {
                        return "NOPASS" == e.errorCode ? void(window.location.href = "/payment/bankcard/payCode") : 0 != e.status ? (a.stopBindTimer(), void a.submitError(e.errorDetails)) : void a.renderSuccess()
                    },
                    error: function () {
                        a.submitError()
                    }
                })
            }, renderSuccess: function () {
                var a = "绑定结果", e = $(".account-list"), t = ($.util.getQueryStrObj() || {}).rp;
                e.parents(".user-box").css("background", "#fff"), e.remove(), $("#contanier").css("width", "1000px"), $("#pathTitle").html(a), $("#contanier").html($.util.dot(m.success, {
                    title: a,
                    rp: t
                })), this.getexperienceId()
            }, getexperienceId: function () {
                $.get("/product/experience/id", function (a) {
                    var e = a.data;
                    e && $("#experienceUrl").attr("href", "/product/taste/detail/" + e).fadeIn(300)
                })
            }, submitError: function (a) {
                l.attr("disabled", !1).html("立即绑定"), o.html(a || "网络或系统繁忙，请稍后再试！"), this.stopBindTimer()
            }, tipsError: function (a, e) {
                a.siblings(".bindcard-tip").addClass("errTip").html(e)
            }, cardSplit: function (a, e) {
                var t;
                a.value = a.value.replace(/[^\d]/g, ""), t = a.value, /\S{5}/.test(t) && (a.value = t.replace(/(.{4})/g, "$1 ")), e && e(t.replace(/\s/g, ""))
            }, disForm: function () {
                $realName[0].disabled = !0, $idnumber[0].disabled = !0, n[0].disabled = !0, d[0].disabled = !0, c[0].disabled = !0, s[0].disabled = !0
            }, enForm: function () {
                s[0].disabled = !1, this.resetGetCode()
            }, stopGetCodeTimer: function () {
                clearTimeout(this.timer), this.resetGetCode(), this.enForm()
            }, resetGetCode: function (a) {
                c[0].disabled = !1, c[0].innerHTML = "免费获取"
            }, startGetCodeTimer: function (a) {
                var e = this;
                a--, 0 == a ? this.stopGetCodeTimer() : (c[0].innerHTML = "免费获取(" + a + "s)", this.timer = setTimeout(function () {
                    e.startGetCodeTimer(a)
                }, 1e3))
            }, dialogProtocol: function (a) {
                $.Zebra_Dialog({
                    title: "资金管理服务协议",
                    buttons: ["确&nbsp;&nbsp;&nbsp;&nbsp;认"],
                    source: {iframe: {src: a, height: 685}},
                    width: 750
                })
            }, stopBindTimer: function () {
                clearTimeout(this.timer2), l.attr("disabled", !1).html("立即绑定"), this.enForm()
            }, startBindTimer: function (a) {
                var e = this;
                a--, 0 == a ? (this.stopBindTimer(), o.html("网络或系统繁忙，请稍后再试！")) : (l.html("正在验证(" + a + ")"), this.timer2 = setTimeout(function () {
                    e.startBindTimer(a)
                }, 1e3))
            }, dialogAuth: function () {
                return u.realNameAuthFlag ? void(window.location.href = b.normal) : void $.Zebra_Dialog({
                    title: "温馨提示",
                    buttons: [{
                        caption: "实名登记", callback: function () {
                            window.location.href = b.realName
                        }
                    }],
                    source: {inline: "<div class='dia_win'><p class='dia_tip'>为保障您的投标权益和资金安全，请先完成实名登记！</p></div>"},
                    width: 570
                })
            }
        };
    f.queryValidBankCardData()
}), define("payment/bankcard/js/check_idno", [], function (a, e, t) {
    function r(a) {
        var e = 0;
        "x" == a[17].toLowerCase() && (a[17] = 10);
        for (var t = 0; t < 17; t++) e += d[t] * a[t];
        return valCodePosition = e % 11, a[17] == o[valCodePosition]
    }

    function i(a) {
        var e = a.substring(6, 10), t = a.substring(10, 12), r = a.substring(12, 14),
            i = new Date(e, parseFloat(t) - 1, parseFloat(r));
        return i.getFullYear() == parseFloat(e) && i.getMonth() == parseFloat(t) - 1 && i.getDate() == parseFloat(r)
    }

    function n(a) {
        var e = a.substring(6, 8), t = a.substring(8, 10), r = a.substring(10, 12),
            i = new Date(e, parseFloat(t) - 1, parseFloat(r));
        return i.getYear() == parseFloat(e) && i.getMonth() == parseFloat(t) - 1 && i.getDate() == parseFloat(r)
    }

    function s(a) {
        return a.replace(/(^\s*)|(\s*$)/g, "")
    }

    var d = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1], o = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    e.IdCardValidate = function (a) {
        if (a = s(a.replace(/ /g, "")), 15 == a.length) return n(a);
        if (18 == a.length) {
            var e = a.split("");
            return !(!i(a) || !r(e))
        }
        return !1
    }
}), define("page/payment/deposit/apply/tpl/contanier", [], function (a, e, t) {
    t.exports = function (a) {
        var e = "", t = a || {}, r = t.bankCardInfo || {}, i = t.zx;
        i.bindFailNum = i.bindFailNum || 0, e += '<div class="at-til"> <span class="name">绑定网贷银行卡</span></div><div class="bindcard-form" id="bindcardForm"> <img class="xn-logo" src="' + window.global.staticPath + '/images/logo/xn-8ee532502d.png" /> <div> <label>真实姓名：</label> <input type="text" class="bindcard-input" name="realName" id="realName" value="' + (t.realName || "") + '" ' + (t.realName ? "disabled" : "") + ' /> <span class="bindcard-tip" data-tip="真实姓名必须与您的银行卡开户名一致">真实姓名必须与您的银行卡开户名一致</span> </div> <div> <label>身份证号码：</label> <input type="text" class="bindcard-input" name="idnumber" id="idnumber" maxlength="18" value="' + (t.idNo || "") + '" ' + (t.idNo ? "disabled" : "") + ' /> <span class="bindcard-tip" data-tip="请输入身份证号码">请输入身份证号码</span> </div> <div class="bk_cardnum"> <label>银行卡号：</label> <input type="text" class="bindcard-input" name="banknum" id="banknum" maxlength="23" value="' + (r.bankCardNo || "") + '" ' + (r.bankCardNo ? "disabled" : "") + ' /> <span class="bindcard-tip" data-tip="仅支持储蓄卡">仅支持储蓄卡</span> </div> <div> <label>开户银行：</label> <select class="bindcard-input selected"> <option value="">请选择开户银行</option> ';
        var n = t.supportList;
        if (n) for (var s, d = -1, o = n.length - 1; d < o;) s = n[d += 1], e += ' <option value="' + s.bankCode + '">' + s.bankName + "</option> ";
        return e += ' </select> </div> <div> <label>银行预留手机号：</label> <input class="bindcard-input" value="' + (t.mobile || "") + '" ' + (t.mobile ? "disabled" : "") + " /> <span class=\"bindcard-tip\" data-tip=\"若您在银行预留的手机号码发生变更，请<a href='/user/uasec/mobile' target='_blank'>更新手机号</a>\"> 该手机号不是银行预留手机号？请先<a href='/user/uasec/mobile' target=\"_blank\">修改认证手机号</a> </span> </div>  ", t.openDepositNow || (e += ' <div class="js_code"> <label>手机号验证码：</label> <input name="code" class="bk_ipt bk_code" type="text" disabled id="codeBtn" /> <button class="btn-getcode js_getcode" id="getcodeBtn">免费获取</button> <span class="bindcard-tip" data-tip=""></span> </div> <div class="code_msg js_code"> <span>短信验证码已发送到您的手机 <i>' + t.mobile + '</i></br>若您在银行预留的手机号码发生变更，将无法接收短信，请 <a href="/user/uasec/mobile" target="_blank">点击此处</a> 更新手机号 </span> </div> '), e += ' <div class="bk_arge_line"> <input type="checkbox" name="arge" class="arge" id="arge" checked="checked" /> <span class="bk_arge">我已阅读并同意 <a class="bindcard-info" href="//image.xiaoniu88.com/static/WebXn/dist/payment/agreement/fundManagement.html">《资金管理服务协议》</a> </span> </div> <div class="bindcard-msg" id="submitMsg"></div> <button class="bind-btn" id="submitBtn">立即绑定</button></div><dl class="bindcard-tips"> <dt>温馨提示</dt> <dd> 1、银行卡的开户名必须与实名登记的姓名一致； <br> 2、为了您的资金安全，仅限绑定一张银行卡；仅支持储蓄卡，不可用信用卡；<br> 3、更改绑定银行卡，需要提交个人证明材料进行人工审核；如有其它问题咨询，请联系客服。 </dd></dl>'
    }
}), define("page/payment/deposit/apply/tpl/success", [], function (a, e, t) {
    t.exports = function (a) {
        var e = '<div class="at-til"> <span class="name">' + a.title + '</span></div><div class="result-content"> <h3 class="result-title success">恭喜你，成功绑定银行卡！</h3> <a href="javascript:;" class="g-dn" id="experienceUrl"> <img src="' + window.global.staticPath + '/page/payment/deposit/apply/img/13888-4a98f4869e.png" /> </a> <div class="result-btns"> <a href="' + (a.rp || "/product/portal/index") + '" class="result-btn">知道了</a> </div> </div>';
        return e
    }
});