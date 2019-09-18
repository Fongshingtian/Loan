define("payment/withdrawals/js/init", ["../../../module/tradePwdWin/js/init", "../../../plugIn/scroll/divscroll", "../tpl/main", "../tpl/win"], function (e, t, o) {
    function i(e, t) {
        $.dialog({
            title: "提示",
            max: !1,
            min: !1,
            close: !1,
            content: $.util.dot(j.msgWin, {accountCode: e, msg: t}),
            fixed: !0,
            drag: !1,
            lock: !0,
            btnBar: !1
        })
    }

    function r(e) {
        "realnameNull" == L.errorMsg ? (O("您尚未实名登记，暂不可进行提现操作。请<a href='/payment/deposit/apply'>设置实名登记</a>"), D(5, "/payment/deposit/apply")) : e == M && "tradePwdNull" == L[F[e]].errorMsg ? i(e, "tradePwdNull") : "bankcardNull" == L[F[e]].errorMsg ? i(e, "bankcardNull") : "bankcardMore" == L[F[e]].errorMsg && i(e, "bankcardMore")
    }

    function s() {
        $(document).on("click", ".account-panel", function () {
            var e = $(this).data("code");
            z = $(this).data("balance"), r(e), $("#balance").val(z), $(".account-panel").removeClass("cur"), $(this).addClass("cur"), e == M ? ($(".loan-area").show(), $(".deposit-area").hide(), 0 == X && $("#wd-amt").val(I).attr("disabled", "disabled"), C = M) : ($(".deposit-area").show(), $(".loan-area").hide(), $("#wd-amt").removeAttr("disabled"), C = E), "" != $("#wd-amt").val() && $("#wd-amt").blur()
        }), $("div.wd_amount").delegate(".wd_amt_ipt", "focus", function () {
            "" == $(this).val() && $(".wd_tip").removeClass("errTip").html("提现金额不能大于可用余额").parent().show(), $(this).removeClass("err").addClass("fcs")
        }).delegate(".wd_amt_ipt", "keyup", function () {
            return "" == this.value ? void(this.value2 = "") : void(this.value != this.value2 && (this.value.search(/^[0-9]\d*(?:\.\d{0,2})?$/) == -1 ? this.value = this.value2 ? this.value2 : "" : this.value2 = this.value))
        }).delegate(".wd_amt_ipt", "keyup", function () {
            parseFloat($(this).val()) > 5e4 && C == E && "" == L.de.bankcard.branchName && i(E, "needBranch")
        }).delegate(".wd_amt_ipt", "keyup blur", function (e) {
            if ("" == $(this).val()) $(".wd_tip").addClass("errTip").html("提现金额不能为空").parent().show(), $(this).removeClass("fcs").addClass("err"); else if ("keyup" != e.type && (0 == this.value && 1 == this.value.length || (this.value = this.value.replace(/^0+/, "")), 0 == this.value.indexOf(".") && (this.value = "0" + this.value)), /^([0-9]+\.)$/.test($(this).val())) $(".wd_tip").addClass("errTip").html("请输入正确的提现金额").parent().show(), $(this).removeClass("fcs").addClass("err"); else if (/^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/.test($(this).val())) if (parseFloat($(this).val()) > parseFloat($("#balance").val())) $(".wd_tip").addClass("errTip").html("提现金额不能大于可用余额").parent().show(), $(this).removeClass("fcs").addClass("err"); else if (parseFloat($(this).val()) <= parseFloat(_)) $(".wd_tip").addClass("errTip").html("将扣除" + _ + "元手续费，实际到账金额必须大于0元").parent().show(), $(this).removeClass("fcs").addClass("err"); else {
                var t = parseFloat(q($(this).val(), _));
                $(".wd_tip").removeClass("errTip").html("将扣除" + _ + "元手续费，实际到账金额" + t.toFixed(2) + "元").parent().show(), $(this).removeClass("err"), "keyup" == e.type ? $(this).addClass("fcs") : $(this).removeClass("fcs")
            } else $(".wd_tip").addClass("errTip").html("请输入正确的提现金额，必须为大于0的数字 ").parent().show(), $(this).removeClass("fcs").addClass("err")
        }), $("div.wd_box").delegate(".wd_tradePwd", "focus", function () {
            $(this).removeClass("err").addClass("fcs")
        }).delegate(".wd_tradePwd", "blur", function () {
            "" == $(this).val() ? ($(".wd_pwd_tip").addClass("errTip").html("请输入交易密码").parent().show(), $(this).addClass("err")) : ($(".wd_pwd_tip").removeClass("errTip").parent().hide(), $(this).removeClass("err")), $(this).removeClass("fcs")
        }), $("div.wd_box").delegate(".wd_code_ipt", "focus", function () {
            $(this).removeClass("err").addClass("fcs")
        }).delegate(".wd_code_ipt", "blur", function () {
            "" == $(this).val() ? ($(".wd_code_tip").addClass("errTip").html("请输入短信验证码").parent().show(), $(this).addClass("err")) : /(^\d*$)/g.test($(this).val()) ? ($(".wd_code_tip").removeClass("errTip").parent().hide(), $(this).removeClass("err")) : ($(".wd_code_tip").addClass("errTip").html("短信验证码格式不正确").parent().show(), $(this).addClass("err")), $(this).removeClass("fcs")
        }), $(".wd_box").delegate(".wd_btn", "click", function () {
            if (0 == w) return void W("您已提交了提现申请，请勿重复提交");
            if ("" == $(".wd_amt_ipt").val()) return $(".wd_tip").addClass("errTip").html("提现金额不能为空").parent().show(), void $(".wd_amt_ipt").removeClass("fcs").addClass("err");
            if (0 == Y()) return W("请填写正确的金额"), void $(".wd_amt_ipt").attr("value", "");
            if (C == M) {
                if ("" == $(".wd_tradePwd").val()) return $(".wd_pwd_tip").addClass("errTip").html("交易密码不能为空").parent().show(), void $(".wd_tradePwd").removeClass("fcs").addClass("err");
                if ("" == $(".wd_code_ipt").val()) return $(".wd_code_tip").addClass("errTip").html("短信验证码不能为空").parent().show(), void $(".wd_code_ipt").removeClass("fcs").addClass("err");
                if ($(".wd_tip_line span").hasClass("errTip")) return;
                w = !1, $(".wd_btn").html("提交中...").css("background", "#999"), $.ajax({
                    type: "post",
                    url: v + g,
                    data: {validCode: $(".wd_code_ipt").val(), pwd: RSAUtils.pwdEncode($(".wd_tradePwd").val())},
                    success: function (e) {
                        return w = !0, X = 1, $(".wd_tradePwd,.wd_amt_ipt").removeAttr("disabled"), $(".wd_btn").html("确认提交").css("background", "#fd7500"), 0 == e.status ? (w = !1, void(window.location.href = v + b)) : (1 == e.status ? "PAYMENT_BIZ_0003" == e.errorCode ? ($(".wd_code_tip").addClass("errTip").html(e.errorDetails).parent().show(), $(".wd_code_ipt").removeClass("fcs").addClass("err")) : ($(".wd_pwd_tip").addClass("errTip").html(e.errorDetails).parent().show(), $(".wd_tradePwd").removeClass("fcs").addClass("err")) : W("网络异常,请重试"), $(".wd_tradePwd,.wd_amt_ipt").removeAttr("disabled"), $(".wd_code_ipt").val("").attr("disabled", "disabled"), $(".wd_msg_tip").html(""), void V())
                    },
                    error: function (e, t, o) {
                        w = !0, $(".wd_btn").html("确认提交").css("background", "#fd7500"), W("网络异常,请重试")
                    }
                })
            } else if (C == E) {
                if (parseFloat($(".wd_amt_ipt").val()) > 5e4 && C == E && !P) return void i(E, "needBranch");
                w = !1, $(".wd_btn").html("提交中...").addClass("disabled"), $.ajax({
                    type: "POST",
                    url: "/payment/withdraw/deposit/apply",
                    data: {amount: $(".wd_amt_ipt").val(), cashierId: T},
                    success: function (e) {
                        0 === e.status ? window.location.href = e.data.url : ($.util.alertInfo(e.errorDetails || "系统繁忙，请稍后重试"), w = !0), $(".wd_btn").html("确认提交").removeClass("disabled")
                    },
                    error: function (e, t, o) {
                        $.util.alertInfo("系统繁忙，请稍后重试"), w = !0, $(".wd_btn").html("确认提交").removeClass("disabled")
                    }
                })
            }
        }), $(".wd_clk").click(function () {
            if ($(this).hasClass("wd_clk")) {
                if (N) return void i(M, "needBranch");
                if ("" == $(".wd_amt_ipt").val()) return void $(".wd_amt_ipt").blur();
                if ($(".wd_amt_ipt").hasClass("err")) return void $(".wd_amt_ipt").focus();
                if ("" == $(".wd_tradePwd").val()) return void $(".wd_tradePwd").blur();
                if ($(".wd_tradePwd").hasClass("err")) return void $(".wd_tradePwd").focus();
                $(this).removeClass("wd_clk"), Q(60), $(".wd_tradePwd,.wd_amt_ipt").attr("disabled", "disabled"), $(".wd_msg_tip").html($(".wd_msg_tip").attr("data-msg")), $(".wd_code_tip").parent().hide(), $(".wd_code_ipt").removeClass("err"), U(!1), S && !inUserFlag && A()
            }
        }), $(".wd_msg_tip").delegate(".wd_voice", "click", function () {
            $(".wd_getcode").removeClass("wd_clk"), clearTimeout(f), Q(60), $(".wd_msg_tip").html($(".wd_msg_tip").attr("data-voice")), $(".wd_code_tip").parent().hide(), $(".wd_code_ipt").removeClass("err"), U(!0)
        }), S && (inUserFlag ? T = $("#coupon-list li").data("couponid") : (B = function () {
            $(document).on("click", "#coupon-list li", function () {
                var e = $(this).closest("ul");
                e.find(".selected").removeClass("selected"), $(this).addClass("selected"), T = $(this).data("couponid"), $("#not-use").removeClass("sel"), y.html(0), _ = 0, "" != $.trim(x.val()) && x.blur()
            }), $(document).on("click", "#not-use", function () {
                $("#coupon-list").find(".selected").removeClass("selected"), $(this).addClass("sel"), T = null, y.html(k), _ = k, "" != $.trim(x.val()) && x.blur()
            }), $(document).on("click", "#more-coupon", function () {
                $.dialog({
                    title: "选择提现券",
                    max: !1,
                    min: !1,
                    close: !1,
                    id: "popClose",
                    width: 610,
                    content: $("#more-coupon-list").html(),
                    fixed: !0,
                    drag: !1,
                    init: function () {
                        $(".pop-coupon-list").on("click", "li", function () {
                            var e = $(this).closest("ul");
                            e.find(".selected").removeClass("selected"), $(this).addClass("selected")
                        }), $(".pop-btn").on("click", "#confirm-coupon", function () {
                            var e = $("#pop-coupon-list").find(".selected"), t = e.index();
                            return e.length <= 0 ? ($("#pop-tip").html("请选择一张提现券"), !1) : (T = e.data("couponid"), $("#not-use").removeClass("sel"), $("#pop-tip").html(""), y.html(0), _ = 0, "" != $.trim(x.val()) && x.blur(), $("#coupon-list").find(".selected").removeClass("selected"), t <= 5 && 0 != t ? $("#coupon-list").find("li:eq('" + t + "')").addClass("selected") : $("#coupon-list li:first").attr("data-couponid", e.data("couponid")).html(e.html()).addClass("selected"), void $.dialog({id: "popClose"}).close())
                        }), $(".pop-coupon-list").perfectScrollbar({
                            cursorborder: "#999 solid 1px",
                            cursorcolor: "#999"
                        })
                    },
                    lock: !0,
                    btnBar: !1
                })
            })
        }, A = function () {
            $("#coupon-list li:not(.selected)").removeClass("able").addClass("unable"), $("#not-use").addClass("unable"), $("#more-coupon").addClass("unable"), $(document).off("click", "#coupon-list li"), $(document).off("click", "#not-use"), $(document).off("click", "#more-coupon")
        }, R = function () {
            B(), $("#coupon-list li:not(.selected)").removeClass("unable").addClass("able"), $("#not-use").removeClass("unable"), $("#more-coupon").removeClass("unable")
        }, B(), $("#coupon-list li:first").click()))
    }

    function a(e) {
        L = e, y = $("#wd-fee"), x = $("#wd-amt"), _ = 1 * y.html(), k = y.data("fee"), T = null, S = $(".wd_coupon").length > 0, inUserFlag = L.inUserFlag, N = L.zx && L.zx.bankcard && L.zx.bankcard.isNeedBranch || !1, P = L.de && L.de.bankcard && "" != L.de.bankcard.branchName, z = L.zx && L.zx.balance, r(M)
    }

    function l() {
        $.ajax({
            type: "post", url: H.init, success: function (e) {
                var t = e || [];
                $("#main").html($.util.dot(j.main, {data: t})), a(t), s()
            }, error: function (e, t, o) {
                $.util.alertInfo("系统繁忙，请刷新重试")
            }
        })
    }

    if (e("../../../module/tradePwdWin/js/init"), e("../../../plugIn/scroll/divscroll"), $(".wd-progress").length > 0) {
        var n, c = $(".wd-progress"), d = $(".wd-status"), u = d.data("step");
        switch (u) {
            case 1:
                n = 0;
                break;
            case 2:
                n = 1 / 3;
                break;
            case 3:
                n = 2 / 3;
                break;
            case 4:
                n = 1
        }
        d.find("li:lt(" + u + ")").addClass("wd-completed");
        var p = c.width() - 10, h = c.find(".percent"), m = c.find(".point");
        return h.animate({width: n * p}, 500), void m.animate({left: n * p}, 500)
    }
    var f, w = !0, v = $("#url").attr("data-url"), g = $("#url").attr("data-withdraw-url"),
        b = $("#url").attr("data-success-url"), y = null, x = null, _ = 0, k = 0, T = null, S = !1, C = 0, z = 0, M = 0,
        E = 5, L = null, N = !1, P = !0, B = null, A = null, R = null, I = 0, F = {0: "zx", 5: "de"},
        j = {main: e("../tpl/main"), msgWin: e("../tpl/win")},
        H = {init: "/payment/withdraw/queryValidBankCardData.json", submit: "/payment/withdraw/deposit/apply"},
        q = function (e, t) {
            var o, i, r, s;
            try {
                o = e.toString().split(".")[1].length
            } catch (a) {
                o = 0
            }
            try {
                i = t.toString().split(".")[1].length
            } catch (a) {
                i = 0
            }
            return r = Math.pow(10, Math.max(o, i)), s = o >= i ? o : i, ((e * r - t * r) / r).toFixed(s)
        }, D = function (e, t) {
            e ? ($(".wd_tip_win p span").text(e--), setTimeout(function () {
                D(e, t)
            }, 1e3)) : window.location.href = t
        }, O = function (e) {
            $.dialog({
                fixed: !0,
                lock: !0,
                max: !1,
                min: !1,
                close: !1,
                width: 560,
                height: 280,
                content: "<div class='wd_tip_win'>" + e + "<p>将在<span>5</span>秒后自动跳转</p></div>",
                resize: !1,
                title: !1
            })
        }, W = function (e) {
            dialog_1 = $.dialog({
                title: "提示",
                max: !1,
                min: !1,
                close: !1,
                width: 300,
                content: "<div class='dia_win'><p class='dia_tip'>" + e + "</p><a class='dia_btn' onclick='dialog_1.close();'>确&nbsp;&nbsp;&nbsp;&nbsp;定</a></div>",
                fixed: !0,
                lock: !0,
                btnBar: !0,
                resize: !1
            })
        }, Y = function () {
            var e = $(".wd_amt_ipt").val();
            try {
                var t = parseFloat(e), o = parseFloat(z);
                return t > 0 && t <= o
            } catch (i) {
                return !1
            }
        }, X = 1, U = function (e) {
            X ? K(e) : Z(e)
        }, Z = function (e) {
            $.ajax({
                type: "post",
                url: v + "/getSmsCode.json",
                data: {type: "withdraw", voiceFlag: e},
                success: function (e) {
                    return 0 == e.key ? void $(".wd_code_ipt").removeAttr("disabled") : 1 == e.key ? (V(), void $(".wd_code_tip").addClass("errTip").html("验证码发送失败，请重试").parent().show()) : void 0
                },
                error: function (e, t, o) {
                    W("网络异常,请重试"), V()
                }
            })
        }, K = function (e) {
            $.ajax({
                type: "post",
                url: v + "/withdraw/apply/getSmsCode.json",
                data: {
                    type: "withdraw",
                    voiceFlag: e,
                    amount: $(".wd_amt_ipt").val(),
                    pwd: RSAUtils.pwdEncode($(".wd_tradePwd").val()),
                    cashierId: T
                },
                success: function (e) {
                    return 0 == e.status ? (X = 0, I = $(".wd_amt_ipt").val(), void $(".wd_code_ipt").removeAttr("disabled")) : (1 == e.status ? $(".wd_code_tip").addClass("errTip").html(e.errorDetails).parent().show() : W("网络异常,请重试"), V(), $(".wd_tradePwd,.wd_amt_ipt").removeAttr("disabled"), $(".wd_msg_tip").html(""), void(S && !inUserFlag && R()))
                },
                error: function (e, t, o) {
                    W("网络异常,请重试"), $(".wd_tradePwd,.wd_amt_ipt").removeAttr("disabled"), V(), $(".wd_msg_tip").html(""), S && !inUserFlag && R()
                }
            })
        }, V = function () {
            $(".wd_getcode").addClass("wd_clk").html("获取验证码"), clearTimeout(f)
        }, Q = function (e) {
            e--, 0 == e ? V() : ($(".wd_getcode").html("重新获取(" + e + "s)"), f = setTimeout(function () {
                Q(e)
            }, 1e3))
        };
    !function () {
        l()
    }()
}), define("module/tradePwdWin/js/init", [], function (e, t, o) {
    var i = function (e) {
        $("#tp_pwd").addClass("err").next().addClass("errTip").html(e)
    };
    $("#toPw").length > 0 && $.dialog({
        title: "温馨提示",
        max: !1,
        min: !1,
        close: !1,
        id: "pwClose",
        width: 700,
        content: '<div class="tp_form"><h3>您还未设置交易密码，请立即设置。</h3><span class="po">交易密码将用于充值、提现等重要操作，不可与登录密码相同</span><div class="tp_ipt_line"><label>设置交易密码：</label><input id="tp_pwd" class="tp_ipt" type="password" oncut="return false" oncopy="return false" oncontextmenu="return false" onpaste="return false" maxlength="20"/><span class="tp_tip tp_jypw" data-tip="请输入8~20个字符的密码"></span></div><div class="tp_ipt_line"><label>确认交易密码：</label><input id="tp_confirm_pwd" class="tp_ipt" type="password" oncut="return false" oncopy="return false" oncontextmenu="return false" onpaste="return false" maxlength="20"/><span class="tp_tip" data-tip="请再次输入密码"></span></div><div><label>手机验证码：</label><input id="tp_code" class="tp_ipt" type="text" oncut="return false" oncopy="return false" oncontextmenu="return false" onpaste="return false"/><span class="tp_getcode tp_clk">获取验证码</span><span class="tp_tip tp_code_tip" data-tip="请输入手机验证码"></span><span class="tp_msg_tip" data-msg="短信验证码已发送到您的手机！<br/>没有收到验证码？<span class=&quot;tp_voice&quot;>使用语音验证</span>" data-voice="请注意接听系统语音验证码"></span></div><div class="tp_tip_line" style="display:none;"><span class="tp_err">设置错误</span></div><div><a class="tp_btn">提&nbsp;&nbsp;交</a></div></div>',
        fixed: !0,
        init: function () {
            $(".ui_close").css("display", "none"), $(".tp_form").delegate("a", "click", function () {
                var e = $("input#tp_pwd").val(), t = RSAUtils.pwdEncode(e), o = $("input#tp_code").val();
                return "" == e ? void i("请输入8~20个字符的密码") : e.length >= 8 && /^[0-9]+$/g.test(e) ? void i("密码不能为纯数字") : e.length >= 8 && /^[A-Z]+$/g.test(e) ? void i("密码不能为纯大写字母") : e.length >= 8 && /^[a-z]+$/g.test(e) ? void i("密码不能为纯小写字母") : e.length >= 8 && /^\W+$/g.test(e) ? void i("密码不能为纯符号") : e.length >= 8 && /\s+/g.test(e) ? void i("密码不能包含空格") : "" == $("#tp_confirm_pwd").val() ? void $("#tp_confirm_pwd").next().addClass("errTip").html("请输入确认密码！") : e != $("#tp_confirm_pwd").val() ? void $("#tp_confirm_pwd").next().addClass("errTip").html("两次密码输入不一致") : "" == $("#tp_code").val() ? void $("#tp_code").next().next().addClass("errTip").html("请输入手机验证码") : void($(".tp_tip").hasClass("errTip") || $.post("/user/setdealpwd4payment", {
                    dealPwd: t,
                    verifyCode: o
                }, function (e) {
                    return 1 != e.status ? void $(".tp_tip_line").show().find("span").html(e.errorDetails) : void $.dialog({id: "pwClose"}).close()
                }, "json"))
            })
        },
        lock: !0,
        btnBar: !1
    }), $("#tp_pwd").focus(function () {
        $(this).removeClass("err").addClass("fcs"), $(this).next().removeClass("errTip").html($(this).next().attr("data-tip"))
    }).blur(function () {
        var e = $(this).val();
        return e.length < 8 || e.length > 20 ? void i("请输入8~20个字符的密码") : e.length >= 8 && /^[0-9]+$/g.test(e) ? void i("密码不能为纯数字") : e.length >= 8 && /^[A-Z]+$/g.test(e) ? void i("密码不能为纯大写字母") : e.length >= 8 && /^[a-z]+$/g.test(e) ? void i("密码不能为纯小写字母") : e.length >= 8 && /^\W+$/g.test(e) ? void i("密码不能为纯符号") : e.length >= 8 && /\s+/g.test(e) ? void i("密码不能包含空格") : ($(this).removeClass("fcs"), void $(this).next().removeClass("errTip").html(""))
    }), $("#tp_confirm_pwd").focus(function () {
        $(this).removeClass("err").addClass("fcs"), $(this).next().removeClass("errTip").html($(this).next().attr("data-tip"))
    }).blur(function () {
        var e = $(this).val();
        e != $("#tp_pwd").val() ? ($(this).addClass("err"), $(this).next().addClass("errTip").html("两次密码输入不一致")) : ($(this).removeClass("fcs"), $(this).next().removeClass("errTip").html(""))
    }), $("#tp_code").focus(function () {
        $(this).removeClass("err").addClass("fcs"), $(this).next().next().removeClass("errTip").html($(this).next().next().attr("data-tip"))
    }).blur(function () {
        var e = $(this).val();
        "" == e ? ($(this).addClass("err"), $(this).next().next().addClass("errTip").html("请输入手机验证码")) : /(^\d*$)/g.test(e) ? ($(this).removeClass("fcs"), $(this).next().next().removeClass("errTip").html("")) : ($(this).addClass("err"), $(this).next().next().addClass("errTip").html("短信验证码格式不正确"))
    });
    var r, s = function (e) {
        $.post("/user/setdealpwd4payment/sendverify", {sendType: e}, function (e) {
            1 != e.status && (0 == e.status && 7 == e.errorCode ? $(".tp_jypw").html(e.errorDetails).addClass("errTip").show() : 0 == e.status && $(".tp_tip_line").show().find("span").html(e.errorDetails))
        })
    }, a = function () {
        $(".tp_getcode").addClass("tp_clk").html("获取验证码"), clearTimeout(r)
    }, l = function (e) {
        e--, 0 == e ? a() : ($(".tp_getcode").html("重新获取(" + e + "s)"), r = setTimeout(function () {
            l(e)
        }, 1e3))
    };
    $(".tp_clk").click(function () {
        $(this).hasClass("tp_clk") && ($(this).removeClass("tp_clk"), l(60), $(".tp_msg_tip").html($(".tp_msg_tip").attr("data-msg")), $(".tp_code_tip").removeClass("errTip").html(""), s(1))
    }), $(".tp_msg_tip").delegate(".tp_voice", "click", function () {
        $(".tp_getcode").removeClass("tp_clk"), clearTimeout(r), l(60), $(".tp_msg_tip").html($(".tp_msg_tip").attr("data-voice")), $(".tp_code_tip").removeClass("errTip").html(""), s(0)
    })
}), define("plugIn/scroll/divscroll", [], function (e, t, o) {
    !function (e) {
        function t() {
            var e = document.getElementsByTagName("script"), t = e[e.length - 1].src.split("?")[0];
            return t.split("/").length > 0 ? t.split("/").slice(0, -1).join("/") + "/" : ""
        }

        function o(e, t, o) {
            for (var i = 0; i < t.length; i++) o(e, t[i])
        }

        var i = !1, r = !1, s = 5e3, l = 2e3, n = e, c = t(), d = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || !1
        }(), u = function () {
            return window.cancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || !1
        }(), p = !1, h = function () {
            function e() {
                var e = ["-moz-grab", "-webkit-grab", "grab"];
                (o.ischrome && !o.ischrome22 || o.isie) && (e = []);
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    if (t.style.cursor = r, t.style.cursor == r) return r
                }
                return "url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"
            }

            if (p) return p;
            var t = document.createElement("DIV"), o = {};
            o.haspointerlock = "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document, o.isopera = "opera" in window, o.isopera12 = o.isopera && "getUserMedia" in navigator, o.isie = "all" in document && "attachEvent" in t && !o.isopera, o.isieold = o.isie && !("msInterpolationMode" in t.style), o.isie7 = o.isie && !o.isieold && (!("documentMode" in document) || 7 == document.documentMode), o.isie8 = o.isie && "documentMode" in document && 8 == document.documentMode, o.isie9 = o.isie && "performance" in window && document.documentMode >= 9, o.isie10 = o.isie && "performance" in window && document.documentMode >= 10, o.isie9mobile = /iemobile.9/i.test(navigator.userAgent), o.isie9mobile && (o.isie9 = !1), o.isie7mobile = !o.isie9mobile && o.isie7 && /iemobile/i.test(navigator.userAgent), o.ismozilla = "MozAppearance" in t.style, o.iswebkit = "WebkitAppearance" in t.style, o.ischrome = "chrome" in window, o.ischrome22 = o.ischrome && o.haspointerlock, o.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window, o.hasmstouch = window.navigator.msPointerEnabled || !1, o.ismac = /^mac$/i.test(navigator.platform), o.isios = o.cantouch && /iphone|ipad|ipod/i.test(navigator.platform), o.isios4 = o.isios && !("seal" in Object), o.isandroid = /android/i.test(navigator.userAgent), o.trstyle = !1, o.hastransform = !1, o.hastranslate3d = !1, o.transitionstyle = !1, o.hastransition = !1, o.transitionend = !1;
            for (var i = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"], r = 0; r < i.length; r++) if ("undefined" != typeof t.style[i[r]]) {
                o.trstyle = i[r];
                break
            }
            o.hastransform = 0 != o.trstyle, o.hastransform && (t.style[o.trstyle] = "translate3d(1px,2px,3px)", o.hastranslate3d = /translate3d/.test(t.style[o.trstyle])), o.transitionstyle = !1, o.prefixstyle = "", o.transitionend = !1;
            for (var i = ["transition", "webkitTransition", "MozTransition", "OTransition", "OTransition", "msTransition", "KhtmlTransition"], s = ["", "-webkit-", "-moz-", "-o-", "-o", "-ms-", "-khtml-"], a = ["transitionend", "webkitTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "msTransitionEnd", "KhtmlTransitionEnd"], r = 0; r < i.length; r++) if (i[r] in t.style) {
                o.transitionstyle = i[r], o.prefixstyle = s[r], o.transitionend = a[r];
                break
            }
            return o.hastransition = o.transitionstyle, o.cursorgrabvalue = e(), o.hasmousecapture = "setCapture" in t, t = null, p = o, o
        }, m = function (t, o) {
            function a() {
                var e = w.doc.css(g.trstyle);
                return !(!e || "matrix" != e.substr(0, 6)) && e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/)
            }

            function p(e, t, o) {
                var i = e.css(t), r = parseFloat(i);
                if (isNaN(r)) {
                    r = b[i] || 0;
                    var s = 3 == r ? o ? w.win.outerHeight() - w.win.innerHeight() : w.win.outerWidth() - w.win.innerWidth() : 1;
                    return w.isie8 && r && (r += 1), s ? r : 0
                }
                return r
            }

            function m(e, t) {
                var o = 0, i = 0, r = 1;
                if ("wheelDeltaY" in e) r = w.opt.mousescrollstep / 48, o = Math.floor(e.wheelDeltaX * r), i = Math.floor(e.wheelDeltaY * r), i < 0 && (i += 1), t && 0 == o && i && (o = i, i = 0); else {
                    var s = e.detail ? e.detail * -1 : e.wheelDelta / 40;
                    s && (t ? o = Math.floor(s * w.opt.mousescrollstep) : i = Math.floor(s * w.opt.mousescrollstep))
                }
                o && (w.scrollmom && w.scrollmom.stop(), w.lastdeltax += o, w.synched("mousewheelx", function () {
                    var e = w.lastdeltax;
                    w.lastdeltax = 0, w.rail.drag || w.doScrollLeftBy(e)
                })), i && (w.scrollmom && w.scrollmom.stop(), w.lastdeltay += i, w.synched("mousewheely", function () {
                    var e = w.lastdeltay;
                    w.lastdeltay = 0, w.rail.drag || w.doScrollBy(e)
                }))
            }

            var w = this;
            if (this.version = "3.1.4", this.name = "nicescroll", w.me = o, this.opt = {
                doc: n("body"),
                win: !1,
                zindex: 0,
                cursoropacitymin: 0,
                cursoropacitymax: 1,
                cursorcolor: "#424242",
                cursorwidth: "5px",
                cursorborder: "1px solid #fff",
                cursorborderradius: "5px",
                scrollspeed: 60,
                mousescrollstep: 24,
                touchbehavior: !1,
                hwacceleration: !0,
                usetransition: !0,
                boxzoom: !1,
                dblclickzoom: !0,
                gesturezoom: !0,
                grabcursorenabled: !0,
                autohidemode: !0,
                background: "",
                iframeautoresize: !0,
                cursorminheight: 32,
                preservenativescrolling: !0,
                railoffset: !1,
                bouncescroll: !0,
                spacebarenabled: !0,
                railpadding: {top: 0, right: 0, left: 0, bottom: 0},
                disableoutline: !0,
                horizrailenabled: !0,
                railalign: "right",
                railvalign: "bottom",
                enabletranslate3d: !0,
                enablemousewheel: !0,
                enablekeyboard: !0,
                smoothscroll: !0,
                sensitiverail: !0,
                enablemouselockapi: !0,
                cursorfixedheight: !1
            }, this.opt.snapbackspeed = 80, t) for (var v in w.opt) "undefined" != typeof t[v] && (w.opt[v] = t[v]);
            this.doc = w.opt.doc, this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "", this.ispage = /BODY|HTML/.test(w.opt.win ? w.opt.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = w.opt.win !== !1, this.win = w.opt.win || (this.ispage ? n(window) : this.doc), this.docscroll = this.ispage && !this.haswrapper ? n(window) : this.win, this.body = n("body"), this.viewport = !1, this.isfixed = !1, this.iframe = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != w.opt.autohidemode, this.onmousedown = !1, this.onmouseup = !1, this.onmousemove = !1, this.onmousewheel = !1, this.onkeypress = !1, this.ongesturezoom = !1, this.onclick = !1, this.onscrollstart = !1, this.onscrollend = !1, this.onscrollcancel = !1, this.onzoomin = !1, this.onzoomout = !1, this.view = !1, this.page = !1, this.scroll = {
                x: 0,
                y: 0
            }, this.scrollratio = {
                x: 0,
                y: 0
            }, this.cursorheight = 20, this.scrollvaluemax = 0, this.scrollrunning = !1, this.scrollmom = !1, this.observer = !1;
            do this.id = "ascrail" + l++; while (document.getElementById(this.id));
            this.rail = !1, this.cursor = !1, this.cursorfreezed = !1, this.zoom = !1, this.zoomactive = !1, this.hasfocus = !1, this.hasmousefocus = !1, this.visibility = !0, this.locked = !1, this.hidden = !1, this.cursoractive = !0, this.nativescrollingarea = !1, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltax = 0, this.lastdeltay = 0, this.detected = h();
            var g = n.extend({}, this.detected);
            this.canhwscroll = g.hastransform && w.opt.hwacceleration, this.ishwscroll = this.canhwscroll && w.haswrapper, this.istouchcapable = !1, g.cantouch && g.ischrome && !g.isios && !g.isandroid && (this.istouchcapable = !0, g.cantouch = !1), g.cantouch && g.ismozilla && !g.isios && (this.istouchcapable = !0, g.cantouch = !1), w.opt.enablemouselockapi || (g.hasmousecapture = !1, g.haspointerlock = !1), this.delayed = function (e, t, o, i) {
                var r = w.delaylist[e], s = (new Date).getTime();
                return !(!i && r && r.tt) && (r && r.tt && clearTimeout(r.tt), void(r && r.last + o > s && !r.tt ? w.delaylist[e] = {
                    last: s + o,
                    tt: setTimeout(function () {
                        w.delaylist[e].tt = 0, t.call()
                    }, o)
                } : r && r.tt || (w.delaylist[e] = {last: s, tt: 0}, setTimeout(function () {
                    t.call()
                }, 0))))
            }, this.synched = function (e, t) {
                function o() {
                    w.onsync || (d(function () {
                        w.onsync = !1;
                        for (e in w.synclist) {
                            var t = w.synclist[e];
                            t && t.call(w), w.synclist[e] = !1
                        }
                    }), w.onsync = !0)
                }

                return w.synclist[e] = t, o(), e
            }, this.unsynched = function (e) {
                w.synclist[e] && (w.synclist[e] = !1)
            }, this.css = function (e, t) {
                for (var o in t) w.saved.css.push([e, o, e.css(o)]), e.css(o, t[o])
            }, this.scrollTop = function (e) {
                return "undefined" == typeof e ? w.getScrollTop() : w.setScrollTop(e)
            }, this.scrollLeft = function (e) {
                return "undefined" == typeof e ? w.getScrollLeft() : w.setScrollLeft(e)
            }, BezierClass = function (e, t, o, i, r, s, a) {
                this.st = e, this.ed = t, this.spd = o, this.p1 = i || 0, this.p2 = r || 1, this.p3 = s || 0, this.p4 = a || 1, this.ts = (new Date).getTime(), this.df = this.ed - this.st
            }, BezierClass.prototype = {
                B2: function (e) {
                    return 3 * e * e * (1 - e)
                }, B3: function (e) {
                    return 3 * e * (1 - e) * (1 - e)
                }, B4: function (e) {
                    return (1 - e) * (1 - e) * (1 - e)
                }, getNow: function () {
                    var e = (new Date).getTime(), t = 1 - (e - this.ts) / this.spd,
                        o = this.B2(t) + this.B3(t) + this.B4(t);
                    return t < 0 ? this.ed : this.st + Math.round(this.df * o)
                }, update: function (e, t) {
                    return this.st = this.getNow(), this.ed = e, this.spd = t, this.ts = (new Date).getTime(), this.df = this.ed - this.st, this
                }
            }, this.ishwscroll ? (this.doc.translate = {
                x: 0,
                y: 0,
                tx: "0px",
                ty: "0px"
            }, g.hastranslate3d && g.isios && this.doc.css("-webkit-backface-visibility", "hidden"), this.getScrollTop = function (e) {
                if (!e) {
                    var t = a();
                    if (t) return 16 == t.length ? -t[13] : -t[5];
                    if (w.timerscroll && w.timerscroll.bz) return w.timerscroll.bz.getNow()
                }
                return w.doc.translate.y
            }, this.getScrollLeft = function (e) {
                if (!e) {
                    var t = a();
                    if (t) return 16 == t.length ? -t[12] : -t[4];
                    if (w.timerscroll && w.timerscroll.bh) return w.timerscroll.bh.getNow()
                }
                return w.doc.translate.x
            }, document.createEvent ? this.notifyScrollEvent = function (e) {
                var t = document.createEvent("UIEvents");
                t.initUIEvent("scroll", !1, !0, window, 1), e.dispatchEvent(t)
            } : document.fireEvent ? this.notifyScrollEvent = function (e) {
                var t = document.createEventObject();
                e.fireEvent("onscroll"), t.cancelBubble = !0
            } : this.notifyScrollEvent = function (e, t) {
            }, g.hastranslate3d && w.opt.enabletranslate3d ? (this.setScrollTop = function (e, t) {
                w.doc.translate.y = e, w.doc.translate.ty = e * -1 + "px", w.doc.css(g.trstyle, "translate3d(" + w.doc.translate.tx + "," + w.doc.translate.ty + ",0px)"), t || w.notifyScrollEvent(w.win[0])
            }, this.setScrollLeft = function (e, t) {
                w.doc.translate.x = e, w.doc.translate.tx = e * -1 + "px", w.doc.css(g.trstyle, "translate3d(" + w.doc.translate.tx + "," + w.doc.translate.ty + ",0px)"), t || w.notifyScrollEvent(w.win[0])
            }) : (this.setScrollTop = function (e, t) {
                w.doc.translate.y = e, w.doc.translate.ty = e * -1 + "px", w.doc.css(g.trstyle, "translate(" + w.doc.translate.tx + "," + w.doc.translate.ty + ")"), t || w.notifyScrollEvent(w.win[0])
            }, this.setScrollLeft = function (e, t) {
                w.doc.translate.x = e, w.doc.translate.tx = e * -1 + "px", w.doc.css(g.trstyle, "translate(" + w.doc.translate.tx + "," + w.doc.translate.ty + ")"), t || w.notifyScrollEvent(w.win[0])
            })) : (this.getScrollTop = function () {
                return w.docscroll.scrollTop()
            }, this.setScrollTop = function (e) {
                return w.docscroll.scrollTop(e)
            }, this.getScrollLeft = function () {
                return w.docscroll.scrollLeft()
            }, this.setScrollLeft = function (e) {
                return w.docscroll.scrollLeft(e)
            }), this.getTarget = function (e) {
                return !!e && (e.target ? e.target : !!e.srcElement && e.srcElement)
            }, this.hasParent = function (e, t) {
                if (!e) return !1;
                for (var o = e.target || e.srcElement || e || !1; o && o.id != t;) o = o.parentNode || !1;
                return o !== !1
            };
            var b = {thin: 1, medium: 3, thick: 5};
            this.getOffset = function () {
                if (w.isfixed) return {top: parseFloat(w.win.css("top")), left: parseFloat(w.win.css("left"))};
                if (!w.viewport) return w.win.offset();
                var e = w.win.offset(), t = w.viewport.offset();
                return {top: e.top - t.top + w.viewport.scrollTop(), left: e.left - t.left + w.viewport.scrollLeft()}
            }, this.updateScrollBar = function (e) {
                if (w.ishwscroll) w.rail.css({height: w.win.innerHeight()}), w.railh && w.railh.css({width: w.win.innerWidth()}); else {
                    var t = w.getOffset(), o = {top: t.top, left: t.left};
                    o.top += p(w.win, "border-top-width", !0);
                    (w.win.outerWidth() - w.win.innerWidth()) / 2;
                    o.left += w.rail.align ? w.win.outerWidth() - p(w.win, "border-right-width") - w.rail.width : p(w.win, "border-left-width");
                    var i = w.opt.railoffset;
                    if (i && (i.top && (o.top += i.top), w.rail.align && i.left && (o.left += i.left)), w.locked || w.rail.css({
                        top: o.top,
                        left: o.left,
                        height: e ? e.h : w.win.innerHeight()
                    }), w.zoom && w.zoom.css({
                        top: o.top + 1,
                        left: 1 == w.rail.align ? o.left - 20 : o.left + w.rail.width + 4
                    }), w.railh && !w.locked) {
                        var o = {top: t.top, left: t.left},
                            r = w.railh.align ? o.top + p(w.win, "border-top-width", !0) + w.win.innerHeight() - w.railh.height : o.top + p(w.win, "border-top-width", !0),
                            s = o.left + p(w.win, "border-left-width");
                        w.railh.css({top: r, left: s, width: w.railh.width})
                    }
                }
            }, this.doRailClick = function (e, t, o) {
                var i, r, s, a;
                w.rail.drag && 1 != w.rail.drag.pt || w.locked || w.rail.drag || (w.cancelScroll(), w.cancelEvent(e), t ? (i = o ? w.doScrollLeft : w.doScrollTop, s = o ? (e.pageX - w.railh.offset().left - w.cursorwidth / 2) * w.scrollratio.x : (e.pageY - w.rail.offset().top - w.cursorheight / 2) * w.scrollratio.y, i(s)) : (i = o ? w.doScrollLeftBy : w.doScrollBy, s = o ? w.scroll.x : w.scroll.y, a = o ? e.pageX - w.railh.offset().left : e.pageY - w.rail.offset().top, r = o ? w.view.w : w.view.h, i(s >= a ? r : -r)))
            }, w.hasanimationframe = d, w.hascancelanimationframe = u, w.hasanimationframe ? w.hascancelanimationframe || (u = function () {
                w.cancelAnimationFrame = !0
            }) : (d = function (e) {
                return setTimeout(e, 16)
            }, u = clearInterval), this.init = function () {
                function e(e) {
                    w.iframexd = !1;
                    try {
                        var t = "contentDocument" in this ? this.contentDocument : this.contentWindow.document;
                        t.domain
                    } catch (e) {
                        w.iframexd = !0, t = !1
                    }
                    if (w.iframexd) return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;
                    if (w.forcescreen = !0, w.isiframe && (w.iframe = {
                        doc: n(t),
                        html: w.doc.contents().find("html")[0],
                        body: w.doc.contents().find("body")[0]
                    }, w.getContentSize = function () {
                        return {
                            w: Math.max(w.iframe.html.scrollWidth, w.iframe.body.scrollWidth),
                            h: Math.max(w.iframe.html.scrollHeight, w.iframe.body.scrollHeight)
                        }
                    }, w.docscroll = n(w.iframe.body)), !g.isios && w.opt.iframeautoresize && !w.isiframe) {
                        w.win.scrollTop(0), w.doc.height("");
                        var o = Math.max(t.getElementsByTagName("html")[0].scrollHeight, t.body.scrollHeight);
                        w.doc.height(o)
                    }
                    w.resize(), g.isie7 && w.css(n(w.iframe.html), {"overflow-y": "hidden"}), w.css(n(w.iframe.body), {"overflow-y": "hidden"}), "contentWindow" in this ? w.bind(this.contentWindow, "scroll", w.onscroll) : w.bind(t, "scroll", w.onscroll), w.opt.enablemousewheel && w.bind(t, "mousewheel", w.onmousewheel), w.opt.enablekeyboard && w.bind(t, g.isopera ? "keypress" : "keydown", w.onkeypress), (g.cantouch || w.opt.touchbehavior) && (w.bind(t, "mousedown", w.onmousedown), w.bind(t, "mousemove", function (e) {
                        w.onmousemove(e, !0)
                    }), g.cursorgrabvalue && w.css(n(t.body), {cursor: g.cursorgrabvalue})), w.bind(t, "mouseup", w.onmouseup), w.zoom && (w.opt.dblclickzoom && w.bind(t, "dblclick", w.doZoom), w.ongesturezoom && w.bind(t, "gestureend", w.ongesturezoom))
                }

                if (w.saved.css = [], g.isie7mobile) return !0;
                if (g.hasmstouch && w.css(w.ispage ? n("html") : w.win, {"-ms-touch-action": "none"}), !w.ispage || !g.cantouch && !g.isieold && !g.isie9mobile) {
                    var t = w.docscroll;
                    w.ispage && (t = w.haswrapper ? w.win : w.doc), g.isie9mobile || w.css(t, {"overflow-y": "hidden"}), w.ispage && g.isie7 && ("BODY" == w.doc[0].nodeName ? w.css(n("html"), {"overflow-y": "hidden"}) : "HTML" == w.doc[0].nodeName && w.css(n("body"), {"overflow-y": "hidden"})), !g.isios || w.ispage || w.haswrapper || w.css(n("body"), {"-webkit-overflow-scrolling": "touch"});
                    var o = n(document.createElement("div"));
                    o.css({
                        position: "relative",
                        top: 0,
                        "float": "right",
                        width: w.opt.cursorwidth,
                        height: "0px",
                        "background-color": w.opt.cursorcolor,
                        border: w.opt.cursorborder,
                        "background-clip": "padding-box",
                        "-webkit-border-radius": w.opt.cursorborderradius,
                        "-moz-border-radius": w.opt.cursorborderradius,
                        "border-radius": w.opt.cursorborderradius
                    }), o.hborder = parseFloat(o.outerHeight() - o.innerHeight()), w.cursor = o;
                    var a = n(document.createElement("div"));
                    a.attr("id", w.id);
                    var l, d, u = ["left", "right"];
                    for (var p in u) d = u[p], l = w.opt.railpadding[d], l ? a.css("padding-" + d, l + "px") : w.opt.railpadding[d] = 0;
                    a.append(o), a.width = Math.max(parseFloat(w.opt.cursorwidth), o.outerWidth()) + w.opt.railpadding.left + w.opt.railpadding.right, a.css({
                        width: a.width + "px",
                        zIndex: w.ispage ? w.opt.zindex : w.opt.zindex + 2,
                        background: w.opt.background
                    }), a.visibility = !0, a.scrollable = !0, a.align = "left" == w.opt.railalign ? 0 : 1, w.rail = a, w.rail.drag = !1;
                    var h = !1;
                    if (!w.opt.boxzoom || w.ispage || g.isieold || (h = document.createElement("div"), w.bind(h, "click", w.doZoom), w.zoom = n(h), w.zoom.css({
                        cursor: "pointer",
                        "z-index": w.opt.zindex,
                        backgroundImage: "url(" + c + "zoomico_wev8.png)",
                        height: 18,
                        width: 18,
                        backgroundPosition: "0px 0px"
                    }), w.opt.dblclickzoom && w.bind(w.win, "dblclick", w.doZoom), g.cantouch && w.opt.gesturezoom && (w.ongesturezoom = function (e) {
                        return e.scale > 1.5 && w.doZoomIn(e), e.scale < .8 && w.doZoomOut(e), w.cancelEvent(e)
                    }, w.bind(w.win, "gestureend", w.ongesturezoom))), w.railh = !1, w.opt.horizrailenabled) {
                        w.css(t, {"overflow-x": "hidden"});
                        var o = n(document.createElement("div"));
                        o.css({
                            position: "relative",
                            top: 0,
                            height: w.opt.cursorwidth,
                            width: "0px",
                            "background-color": w.opt.cursorcolor,
                            border: w.opt.cursorborder,
                            "background-clip": "padding-box",
                            "-webkit-border-radius": w.opt.cursorborderradius,
                            "-moz-border-radius": w.opt.cursorborderradius,
                            "border-radius": w.opt.cursorborderradius
                        }), o.wborder = parseFloat(o.outerWidth() - o.innerWidth()), w.cursorh = o;
                        var m = n(document.createElement("div"));
                        m.attr("id", w.id + "-hr"), m.height = 1 + Math.max(parseFloat(w.opt.cursorwidth), o.outerHeight()), m.css({
                            height: m.height + "px",
                            zIndex: w.ispage ? w.opt.zindex : w.opt.zindex + 2,
                            background: w.opt.background
                        }), m.append(o), m.visibility = !0, m.scrollable = !0, m.align = "top" == w.opt.railvalign ? 0 : 1, w.railh = m, w.railh.drag = !1
                    }
                    if (w.ispage) a.css({
                        position: "fixed",
                        top: "0px",
                        height: "100%"
                    }), a.align ? a.css({right: "0px"}) : a.css({left: "0px"}), w.body.append(a), w.railh && (m.css({
                        position: "fixed",
                        left: "0px",
                        width: "100%"
                    }), m.align ? m.css({bottom: "0px"}) : m.css({top: "0px"}), w.body.append(m)); else {
                        if (w.ishwscroll) {
                            "static" == w.win.css("position") && w.css(w.win, {position: "relative"});
                            var v = "HTML" == w.win[0].nodeName ? w.body : w.win;
                            w.zoom && (w.zoom.css({
                                position: "absolute",
                                top: 1,
                                right: 0,
                                "margin-right": a.width + 4
                            }), v.append(w.zoom)), a.css({
                                position: "absolute",
                                top: 0
                            }), a.align ? a.css({right: 0}) : a.css({left: 0}), v.append(a), m && (m.css({
                                position: "absolute",
                                left: 0,
                                bottom: 0
                            }), m.align ? m.css({bottom: 0}) : m.css({top: 0}), v.append(m))
                        } else {
                            w.isfixed = "fixed" == w.win.css("position");
                            var b = w.isfixed ? "fixed" : "absolute";
                            w.isfixed || (w.viewport = w.getViewport(w.win[0])), w.viewport && (w.body = w.viewport), a.css({position: b}), w.zoom && w.zoom.css({position: b}), w.updateScrollBar(), w.body.append(a), w.zoom && w.body.append(w.zoom), w.railh && (m.css({position: b}), w.body.append(m))
                        }
                        g.isios && w.css(w.win, {
                            "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                            "-webkit-touch-callout": "none"
                        }), g.isie && w.opt.disableoutline && w.win.attr("hideFocus", "true"), g.iswebkit && w.opt.disableoutline && w.win.css({outline: "none"})
                    }
                    if (w.opt.autohidemode === !1 ? (w.autohidedom = !1, w.rail.css({opacity: w.opt.cursoropacitymax}), w.railh && w.railh.css({opacity: w.opt.cursoropacitymax})) : w.opt.autohidemode === !0 ? (w.autohidedom = n().add(w.rail), w.railh && (w.autohidedom = w.autohidedom.add(w.railh))) : "scroll" == w.opt.autohidemode ? (w.autohidedom = n().add(w.rail), w.railh && (w.autohidedom = w.autohidedom.add(w.railh))) : "cursor" == w.opt.autohidemode ? (w.autohidedom = n().add(w.cursor), w.railh && (w.autohidedom = w.autohidedom.add(w.railh.cursor))) : "hidden" == w.opt.autohidemode && (w.autohidedom = !1, w.hide(), w.locked = !1), g.isie9mobile) {
                        w.scrollmom = new f(w), w.onmangotouch = function (e) {
                            var t = w.getScrollTop(), o = w.getScrollLeft();
                            if (t == w.scrollmom.lastscrolly && o == w.scrollmom.lastscrollx) return !0;
                            var i = t - w.mangotouch.sy, r = o - w.mangotouch.sx,
                                s = Math.round(Math.sqrt(Math.pow(r, 2) + Math.pow(i, 2)));
                            if (0 != s) {
                                var a = i < 0 ? -1 : 1, l = r < 0 ? -1 : 1, n = +new Date;
                                if (w.mangotouch.lazy && clearTimeout(w.mangotouch.lazy), n - w.mangotouch.tm > 80 || w.mangotouch.dry != a || w.mangotouch.drx != l) w.scrollmom.stop(), w.scrollmom.reset(o, t), w.mangotouch.sy = t, w.mangotouch.ly = t, w.mangotouch.sx = o, w.mangotouch.lx = o, w.mangotouch.dry = a, w.mangotouch.drx = l, w.mangotouch.tm = n; else {
                                    w.scrollmom.stop(), w.scrollmom.update(w.mangotouch.sx - r, w.mangotouch.sy - i);
                                    n - w.mangotouch.tm;
                                    w.mangotouch.tm = n;
                                    var c = Math.max(Math.abs(w.mangotouch.ly - t), Math.abs(w.mangotouch.lx - o));
                                    w.mangotouch.ly = t, w.mangotouch.lx = o, c > 2 && (w.mangotouch.lazy = setTimeout(function () {
                                        w.mangotouch.lazy = !1, w.mangotouch.dry = 0, w.mangotouch.drx = 0, w.mangotouch.tm = 0, w.scrollmom.doMomentum(30)
                                    }, 100))
                                }
                            }
                        };
                        var y = w.getScrollTop(), x = w.getScrollLeft();
                        w.mangotouch = {
                            sy: y,
                            ly: y,
                            dry: 0,
                            sx: x,
                            lx: x,
                            drx: 0,
                            lazy: !1,
                            tm: 0
                        }, w.bind(w.docscroll, "scroll", w.onmangotouch)
                    } else {
                        if (g.cantouch || w.istouchcapable || w.opt.touchbehavior || g.hasmstouch) {
                            w.scrollmom = new f(w), w.ontouchstart = function (e) {
                                if (e.pointerType && 2 != e.pointerType) return !1;
                                if (!w.locked) {
                                    if (g.hasmstouch) for (var t = !!e.target && e.target; t;) {
                                        var o = n(t).getNiceScroll();
                                        if (o.length > 0 && o[0].me == w.me) break;
                                        if (o.length > 0) return !1;
                                        if ("DIV" == t.nodeName && t.id == w.id) break;
                                        t = !!t.parentNode && t.parentNode
                                    }
                                    w.cancelScroll();
                                    var t = w.getTarget(e);
                                    if (t) {
                                        var i = /INPUT/i.test(t.nodeName) && /range/i.test(t.type);
                                        if (i) return w.stopPropagation(e)
                                    }
                                    if (!("clientX" in e) && "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), w.forcescreen) {
                                        var r = e, e = {original: e.original ? e.original : e};
                                        e.clientX = r.screenX, e.clientY = r.screenY
                                    }
                                    if (w.rail.drag = {
                                        x: e.clientX,
                                        y: e.clientY,
                                        sx: w.scroll.x,
                                        sy: w.scroll.y,
                                        st: w.getScrollTop(),
                                        sl: w.getScrollLeft(),
                                        pt: 2
                                    }, w.opt.touchbehavior && w.isiframe && g.isie) {
                                        var s = w.win.position();
                                        w.rail.drag.x += s.left, w.rail.drag.y += s.top
                                    }
                                    if (w.hasmoving = !1, w.lastmouseup = !1, w.scrollmom.reset(e.clientX, e.clientY), !g.cantouch && !this.istouchcapable && !g.hasmstouch) {
                                        var a = !!t && /INPUT|SELECT|TEXTAREA/i.test(t.nodeName);
                                        if (!a) return !w.ispage && g.hasmousecapture && t.setCapture(), w.cancelEvent(e);
                                        /SUBMIT|CANCEL|BUTTON/i.test(n(t).attr("type")) && (pc = {
                                            tg: t,
                                            click: !1
                                        }, w.preventclick = pc)
                                    }
                                }
                            }, w.ontouchend = function (e) {
                                return (!e.pointerType || 2 == e.pointerType) && (w.rail.drag && 2 == w.rail.drag.pt && (w.scrollmom.doMomentum(), w.rail.drag = !1, w.hasmoving && (w.hasmoving = !1, w.lastmouseup = !0, w.hideCursor(), g.hasmousecapture && document.releaseCapture(), !g.cantouch)) ? w.cancelEvent(e) : void 0)
                            };
                            var _ = w.opt.touchbehavior && w.isiframe && !g.hasmousecapture;
                            w.ontouchmove = function (e, t) {
                                if (e.pointerType && 2 != e.pointerType) return !1;
                                if (w.rail.drag && 2 == w.rail.drag.pt) {
                                    if (g.cantouch && "undefined" == typeof e.original) return !0;
                                    w.hasmoving = !0, w.preventclick && !w.preventclick.click && (w.preventclick.click = w.preventclick.tg.onclick || !1, w.preventclick.tg.onclick = w.onpreventclick);
                                    var o = n.extend({original: e}, e);
                                    if (e = o, "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), w.forcescreen) {
                                        var i = e, e = {original: e.original ? e.original : e};
                                        e.clientX = i.screenX, e.clientY = i.screenY
                                    }
                                    var r = ofy = 0;
                                    if (_ && !t) {
                                        var s = w.win.position();
                                        r = -s.left, ofy = -s.top
                                    }
                                    var a = e.clientY + ofy, l = a - w.rail.drag.y, c = w.rail.drag.st - l;
                                    w.ishwscroll && w.opt.bouncescroll ? c < 0 ? c = Math.round(c / 2) : c > w.page.maxh && (c = w.page.maxh + Math.round((c - w.page.maxh) / 2)) : (c < 0 && (c = 0, a = 0), c > w.page.maxh && (c = w.page.maxh, a = 0));
                                    var d = e.clientX + r;
                                    if (w.railh && w.railh.scrollable) {
                                        var u = d - w.rail.drag.x, p = w.rail.drag.sl - u;
                                        w.ishwscroll && w.opt.bouncescroll ? p < 0 ? p = Math.round(p / 2) : p > w.page.maxw && (p = w.page.maxw + Math.round((p - w.page.maxw) / 2)) : (p < 0 && (p = 0, d = 0), p > w.page.maxw && (p = w.page.maxw, d = 0))
                                    }
                                    if (w.synched("touchmove", function () {
                                        try {
                                            if (w.me.is(":visible") === !1) return
                                        } catch (e) {
                                        }
                                        w.rail.drag && 2 == w.rail.drag.pt && (w.prepareTransition && w.prepareTransition(0), w.rail.scrollable && w.setScrollTop(c), w.scrollmom.update(d, a), w.railh && w.railh.scrollable ? (w.setScrollLeft(p), w.showCursor(c, p)) : w.showCursor(c), g.isie10 && document.selection.clear())
                                    }), !g.ischrome && !w.istouchcapable) return w.cancelEvent(e)
                                }
                            }
                        }
                        g.cantouch || w.opt.touchbehavior ? (w.onpreventclick = function (e) {
                            if (w.preventclick) return w.preventclick.tg.onclick = w.preventclick.click, w.preventclick = !1, w.cancelEvent(e)
                        }, w.onmousedown = w.ontouchstart, w.onmouseup = w.ontouchend, w.onclick = !g.isios && function (e) {
                            return !w.lastmouseup || (w.lastmouseup = !1, w.cancelEvent(e))
                        }, w.onmousemove = w.ontouchmove, g.cursorgrabvalue && (w.css(w.ispage ? w.doc : w.win, {cursor: g.cursorgrabvalue}), w.css(w.rail, {cursor: g.cursorgrabvalue}))) : (w.onmousedown = function (e, t) {
                            if (!w.rail.drag || 1 == w.rail.drag.pt) {
                                if (w.locked) return w.cancelEvent(e);
                                w.cancelScroll(), w.rail.drag = {
                                    x: e.clientX,
                                    y: e.clientY,
                                    sx: w.scroll.x,
                                    sy: w.scroll.y,
                                    pt: 1,
                                    hr: !!t
                                };
                                var o = w.getTarget(e);
                                return !w.ispage && g.hasmousecapture && o.setCapture(), w.isiframe && !g.hasmousecapture && (w.saved.csspointerevents = w.doc.css("pointer-events"), w.css(w.doc, {"pointer-events": "none"})), w.cancelEvent(e)
                            }
                        }, w.onmouseup = function (e) {
                            if (w.rail.drag) {
                                if (g.hasmousecapture && document.releaseCapture(), w.isiframe && !g.hasmousecapture && w.doc.css("pointer-events", w.saved.csspointerevents), 1 != w.rail.drag.pt) return;
                                return w.rail.drag = !1, w.cancelEvent(e)
                            }
                        }, w.onmousemove = function (e) {
                            if (w.rail.drag) {
                                if (1 != w.rail.drag.pt) return;
                                if (g.ischrome && 0 == e.which) return w.onmouseup(e);
                                if (w.cursorfreezed = !0, w.rail.drag.hr) {
                                    w.scroll.x = w.rail.drag.sx + (e.clientX - w.rail.drag.x), w.scroll.x < 0 && (w.scroll.x = 0);
                                    var t = w.scrollvaluemaxw;
                                    w.scroll.x > t && (w.scroll.x = t)
                                } else {
                                    w.scroll.y = w.rail.drag.sy + (e.clientY - w.rail.drag.y), w.scroll.y < 0 && (w.scroll.y = 0);
                                    var o = w.scrollvaluemax;
                                    w.scroll.y > o && (w.scroll.y = o)
                                }
                                return w.synched("mousemove", function () {
                                    try {
                                        if (w.me.is(":visible") === !1) return
                                    } catch (e) {
                                    }
                                    w.rail.drag && 1 == w.rail.drag.pt && (w.showCursor(), w.rail.drag.hr ? w.doScrollLeft(Math.round(w.scroll.x * w.scrollratio.x)) : w.doScrollTop(Math.round(w.scroll.y * w.scrollratio.y)))
                                }), w.cancelEvent(e)
                            }
                            w.checkarea = !0
                        }), (g.cantouch || w.opt.touchbehavior) && w.bind(w.win, "mousedown", w.onmousedown), g.hasmstouch && (w.css(w.rail, {"-ms-touch-action": "none"}), w.css(w.cursor, {"-ms-touch-action": "none"}), w.bind(w.win, "MSPointerDown", w.ontouchstart), w.bind(document, "MSPointerUp", w.ontouchend), w.bind(document, "MSPointerMove", w.ontouchmove), w.bind(w.cursor, "MSGestureHold", function (e) {
                            e.preventDefault()
                        }), w.bind(w.cursor, "contextmenu", function (e) {
                            e.preventDefault()
                        })), this.istouchcapable && (w.bind(w.win, "touchstart", w.ontouchstart), w.bind(document, "touchend", w.ontouchend), w.bind(document, "touchcancel", w.ontouchend), w.bind(document, "touchmove", w.ontouchmove)), w.bind(w.cursor, "mousedown", w.onmousedown), w.bind(w.cursor, "mouseup", w.onmouseup), w.railh && (w.bind(w.cursorh, "mousedown", function (e) {
                            w.onmousedown(e, !0)
                        }), w.bind(w.cursorh, "mouseup", function (e) {
                            if (!w.rail.drag || 2 != w.rail.drag.pt) return w.rail.drag = !1, w.hasmoving = !1, w.hideCursor(), g.hasmousecapture && document.releaseCapture(), w.cancelEvent(e)
                        })), w.bind(document, "mouseup", w.onmouseup), g.hasmousecapture && w.bind(w.win, "mouseup", w.onmouseup), w.bind(document, "mousemove", w.onmousemove), w.onclick && w.bind(document, "click", w.onclick), g.cantouch || w.opt.touchbehavior || (w.jqbind(w.rail, "mouseenter", function () {
                            try {
                                if (w.me.is(":visible") === !1) return
                            } catch (e) {
                            }
                            w.canshowonmouseevent && w.showCursor(), w.rail.active = !0
                        }), w.jqbind(w.rail, "mouseleave", function () {
                            w.rail.active = !1, w.rail.drag || w.hideCursor()
                        }), w.opt.sensitiverail && (w.bind(w.rail, "click", function (e) {
                            w.doRailClick(e, !1, !1)
                        }), w.bind(w.rail, "dblclick", function (e) {
                            w.doRailClick(e, !0, !1)
                        }), w.bind(w.cursor, "click", function (e) {
                            w.cancelEvent(e)
                        }), w.bind(w.cursor, "dblclick", function (e) {
                            w.cancelEvent(e)
                        })), w.railh && (w.jqbind(w.railh, "mouseenter", function () {
                            try {
                                if (w.me.is(":visible") === !1) return
                            } catch (e) {
                            }
                            w.canshowonmouseevent && w.showCursor(), w.rail.active = !0
                        }), w.jqbind(w.railh, "mouseleave", function () {
                            w.rail.active = !1, w.rail.drag || w.hideCursor()
                        }), w.opt.sensitiverail && (w.bind(w.railh, "click", function (e) {
                            w.doRailClick(e, !1, !0)
                        }), w.bind(w.railh, "dblclick", function (e) {
                            w.doRailClick(e, !0, !0)
                        }), w.bind(w.cursorh, "click", function (e) {
                            w.cancelEvent(e)
                        }), w.bind(w.cursorh, "dblclick", function (e) {
                            w.cancelEvent(e)
                        }))), w.zoom && (w.jqbind(w.zoom, "mouseenter", function () {
                            try {
                                if (w.me.is(":visible") === !1) return
                            } catch (e) {
                            }
                            w.canshowonmouseevent && w.showCursor(), w.rail.active = !0
                        }), w.jqbind(w.zoom, "mouseleave", function () {
                            w.rail.active = !1, w.rail.drag || w.hideCursor()
                        }))), w.opt.enablemousewheel && (w.isiframe || w.bind(g.isie && w.ispage ? document : w.docscroll, "mousewheel", w.onmousewheel), w.bind(w.rail, "mousewheel", w.onmousewheel), w.railh && w.bind(w.railh, "mousewheel", w.onmousewheelhr)), w.ispage || g.cantouch || /HTML|BODY/.test(w.win[0].nodeName) || (w.win.attr("tabindex") || w.win.attr({tabindex: s++}), w.jqbind(w.win, "focus", function (e) {
                            try {
                                if (w.me.is(":visible") === !1) return
                            } catch (e) {
                            }
                            i = w.getTarget(e).id || !0, w.hasfocus = !0, w.canshowonmouseevent && w.noticeCursor()
                        }), w.jqbind(w.win, "blur", function (e) {
                            i = !1, w.hasfocus = !1
                        }), w.jqbind(w.win, "mouseenter", function (e) {
                            try {
                                if (w.me.is(":visible") === !1) return
                            } catch (e) {
                            }
                            r = w.getTarget(e).id || !0, w.hasmousefocus = !0, w.canshowonmouseevent && w.noticeCursor()
                        }), w.jqbind(w.win, "mouseleave", function () {
                            r = !1, w.hasmousefocus = !1
                        }))
                    }
                    if (w.onkeypress = function (e) {
                        if (w.locked && 0 == w.page.maxh) return !0;
                        e = e ? e : window.e;
                        var t = w.getTarget(e);
                        if (t && /INPUT|TEXTAREA|SELECT|OPTION/.test(t.nodeName)) {
                            var o = t.getAttribute("type") || t.type || !1;
                            if (!o || !/submit|button|cancel/i.tp) return !0
                        }
                        if (w.hasfocus || w.hasmousefocus && !i || w.ispage && !i && !r) {
                            var s = e.keyCode;
                            if (w.locked && 27 != s) return w.cancelEvent(e);
                            var a = e.ctrlKey || !1, l = e.shiftKey || !1, n = !1;
                            switch (s) {
                                case 38:
                                case 63233:
                                    w.doScrollBy(72), n = !0;
                                    break;
                                case 40:
                                case 63235:
                                    w.doScrollBy(-72), n = !0;
                                    break;
                                case 37:
                                case 63232:
                                    w.railh && (a ? w.doScrollLeft(0) : w.doScrollLeftBy(72), n = !0);
                                    break;
                                case 39:
                                case 63234:
                                    w.railh && (a ? w.doScrollLeft(w.page.maxw) : w.doScrollLeftBy(-72), n = !0);
                                    break;
                                case 33:
                                case 63276:
                                    w.doScrollBy(w.view.h), n = !0;
                                    break;
                                case 34:
                                case 63277:
                                    w.doScrollBy(-w.view.h), n = !0;
                                    break;
                                case 36:
                                case 63273:
                                    w.railh && a ? w.doScrollPos(0, 0) : w.doScrollTo(0), n = !0;
                                    break;
                                case 35:
                                case 63275:
                                    w.railh && a ? w.doScrollPos(w.page.maxw, w.page.maxh) : w.doScrollTo(w.page.maxh), n = !0;
                                    break;
                                case 32:
                                    w.opt.spacebarenabled && (l ? w.doScrollBy(w.view.h) : w.doScrollBy(-w.view.h), n = !0);
                                    break;
                                case 27:
                                    w.zoomactive && (w.doZoom(), n = !0)
                            }
                            if (n) return w.cancelEvent(e)
                        }
                    }, w.opt.enablekeyboard && w.bind(document, g.isopera && !g.isopera12 ? "keypress" : "keydown", w.onkeypress), w.bind(window, "resize", w.resize), w.bind(window, "orientationchange", w.resize), w.bind(window, "load", w.resize), g.ischrome && !w.ispage && !w.haswrapper) {
                        var $ = w.win.attr("style"), k = parseFloat(w.win.css("width")) + 1;
                        w.win.css("width", k), w.synched("chromefix", function () {
                            w.win.attr("style", $)
                        })
                    }
                    w.onAttributeChange = function (e) {
                        w.lazyResize()
                    }, w.ispage || w.haswrapper || ("WebKitMutationObserver" in window ? (w.observer = new WebKitMutationObserver(function (e) {
                        e.forEach(w.onAttributeChange)
                    }), w.observer.observe(w.win[0], {
                        attributes: !0,
                        subtree: !1
                    })) : (w.bind(w.win, g.isie && !g.isie9 ? "propertychange" : "DOMAttrModified", w.onAttributeChange), g.isie9 && w.win[0].attachEvent("onpropertychange", w.onAttributeChange))), !w.ispage && w.opt.boxzoom && w.bind(window, "resize", w.resizeZoom), w.istextarea && w.bind(w.win, "mouseup", w.resize), w.resize()
                }
                "IFRAME" == this.doc[0].nodeName && (this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function () {
                    e.call(w.doc[0], !1)
                }, 500), w.bind(this.doc, "load", e))
            }, this.showCursor = function (t, o) {
                if (w.cursortimeout && (clearTimeout(w.cursortimeout), w.cursortimeout = 0), w.rail) {
                    try {
                        var i = w.me.offset().top;
                        w.me.scrollParent && w.me.scrollParent().length > 0 && "BODY" != w.rail.parent().get(0).tagName && (i -= w.me.scrollParent().offset().top, i += w.me.scrollParent().offset().scrollTop()), "BODY" != w.rail.parent().get(0).tagName && (i -= e(".e8_boxhead").height()), w.rail.css("top", i), w.rail.data("__resize") || (w.resize(), w.rail.data("__resize", !0))
                    } catch (r) {
                        window.console && console.log(r, "jquery.nicescroll.js#showCursor")
                    }
                    w.autohidedom && (w.autohidedom.stop().css({opacity: w.opt.cursoropacitymax}), w.cursoractive = !0), "undefined" != typeof t && t !== !1 && (w.scroll.y = Math.round(1 * t / w.scrollratio.y)), "undefined" != typeof o && (w.scroll.x = Math.round(1 * o / w.scrollratio.x)), w.cursor.css({
                        height: w.cursorheight,
                        top: w.scroll.y
                    }), w.cursorh && (!w.rail.align && w.rail.visibility ? w.cursorh.css({
                        width: w.cursorwidth,
                        left: w.scroll.x + w.rail.width
                    }) : w.cursorh.css({
                        width: w.cursorwidth,
                        left: w.scroll.x
                    }), w.cursoractive = !0), w.zoom && w.zoom.stop().css({opacity: w.opt.cursoropacitymax})
                }
            }, this.hideCursor = function (e) {
                w.cursortimeout || w.rail && w.autohidedom && (e ? w.cursortimeout = setTimeout(function () {
                    w.rail.active && w.showonmouseevent || (w.autohidedom.stop().animate({opacity: w.opt.cursoropacitymin}), w.zoom && w.zoom.stop().animate({opacity: w.opt.cursoropacitymin}), w.cursoractive = !1), w.cursortimeout = 0
                }, e || 400) : (w.rail.active && w.showonmouseevent || (w.autohidedom.stop().animate({opacity: w.opt.cursoropacitymin}), w.zoom && w.zoom.stop().animate({opacity: w.opt.cursoropacitymin}), w.cursoractive = !1), w.cursortimeout = 0))
            }, this.noticeCursor = function (e, t, o) {
                w.showCursor(t, o), w.rail.active || w.hideCursor(e)
            }, this.getContentSize = w.ispage ? function () {
                return {
                    w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                    h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
            } : w.haswrapper ? function () {
                return {
                    w: w.doc.outerWidth() + parseInt(w.win.css("paddingLeft")) + parseInt(w.win.css("paddingRight")),
                    h: w.doc.outerHeight() + parseInt(w.win.css("paddingTop")) + parseInt(w.win.css("paddingBottom"))
                }
            } : function () {
                return {w: w.docscroll[0].scrollWidth, h: w.docscroll[0].scrollHeight}
            }, this.onResize = function (e, t) {
                try {
                    if (w.me.is(":visible") === !1) return
                } catch (e) {
                }
                if (!w.win) return !1;
                if (!w.haswrapper && !w.ispage) {
                    if ("none" == w.win.css("display")) return w.visibility && w.hideRail().hideRailHr(), !1;
                    w.hidden || w.visibility || w.showRail().showRailHr()
                }
                var o = w.page.maxh, i = w.page.maxw, r = {h: w.view.h, w: w.view.w};
                if (w.view = {
                    w: w.ispage ? w.win.width() : parseInt(w.win[0].clientWidth),
                    h: w.ispage ? w.win.height() : parseInt(w.win[0].clientHeight)
                }, w.page = t ? t : w.getContentSize(), w.page.maxh = Math.max(0, w.page.h - w.view.h), w.page.maxw = Math.max(0, w.page.w - w.view.w), w.page.maxh == o && w.page.maxw == i && w.view.w == r.w) {
                    if (w.ispage) return w;
                    var s = w.win.offset();
                    if (w.lastposition) {
                        var a = w.lastposition;
                        if (a.top == s.top && a.left == s.left) return w
                    }
                    w.lastposition = s
                }
                if (0 == w.page.maxh ? (w.hideRail(), w.scrollvaluemax = 0, w.scroll.y = 0, w.scrollratio.y = 0, w.cursorheight = 0, w.setScrollTop(0), w.rail.scrollable = !1) : w.rail.scrollable = !0, 0 == w.page.maxw ? (w.hideRailHr(), w.scrollvaluemaxw = 0, w.scroll.x = 0, w.scrollratio.x = 0, w.cursorwidth = 0, w.setScrollLeft(0), w.railh.scrollable = !1) : w.railh.scrollable = !0, w.locked = 0 == w.page.maxh && 0 == w.page.maxw, w.locked) return w.ispage || w.updateScrollBar(w.view), !1;
                w.hidden || w.visibility ? w.hidden || w.railh.visibility || w.showRailHr() : w.showRail().showRailHr(), w.istextarea && w.win.css("resize") && "none" != w.win.css("resize") && (w.view.h -= 20), w.ispage || w.updateScrollBar(w.view), w.cursorheight = Math.min(w.view.h, Math.round(w.view.h * (w.view.h / w.page.h))), w.cursorheight = w.opt.cursorfixedheight ? w.opt.cursorfixedheight : Math.max(w.opt.cursorminheight, w.cursorheight), w.cursorwidth = Math.min(w.view.w, Math.round(w.view.w * (w.view.w / w.page.w))), w.cursorwidth = w.opt.cursorfixedheight ? w.opt.cursorfixedheight : Math.max(w.opt.cursorminheight, w.cursorwidth), w.scrollvaluemax = w.view.h - w.cursorheight - w.cursor.hborder, w.railh && (w.railh.width = w.page.maxh > 0 ? w.view.w - w.rail.width : w.view.w, w.scrollvaluemaxw = w.railh.width - w.cursorwidth - w.cursorh.wborder), w.scrollratio = {
                    x: w.page.maxw / w.scrollvaluemaxw,
                    y: w.page.maxh / w.scrollvaluemax
                };
                var l = w.getScrollTop();
                return l > w.page.maxh ? w.doScrollTop(w.page.maxh) : (w.scroll.y = Math.round(w.getScrollTop() * (1 / w.scrollratio.y)), w.scroll.x = Math.round(w.getScrollLeft() * (1 / w.scrollratio.x)), w.cursoractive && w.noticeCursor()), w.scroll.y && 0 == w.getScrollTop() && w.doScrollTo(Math.floor(w.scroll.y * w.scrollratio.y)), w
            }, this.resize = function () {
                return w.delayed("resize", w.onResize, 30), w
            }, this.lazyResize = function () {
                w.delayed("resize", w.resize, 250)
            }, this._bind = function (e, t, o, i) {
                w.events.push({
                    e: e,
                    n: t,
                    f: o,
                    b: i,
                    q: !1
                }), e.addEventListener ? e.addEventListener(t, o, i || !1) : e.attachEvent ? e.attachEvent("on" + t, o) : e["on" + t] = o
            }, this.jqbind = function (e, t, o) {
                w.events.push({e: e, n: t, f: o, q: !0}), n(e).bind(t, o)
            }, this.bind = function (e, t, o, i) {
                var r = "jquery" in e ? e[0] : e;
                if (r.addEventListener) {
                    if (g.cantouch && /mouseup|mousedown|mousemove/.test(t)) {
                        var s = "mousedown" == t ? "touchstart" : "mouseup" == t ? "touchend" : "touchmove";
                        w._bind(r, s, function (e) {
                            if (e.touches) {
                                if (e.touches.length < 2) {
                                    var t = e.touches.length ? e.touches[0] : e;
                                    t.original = e, o.call(this, t)
                                }
                            } else if (e.changedTouches) {
                                var t = e.changedTouches[0];
                                t.original = e, o.call(this, t)
                            }
                        }, i || !1)
                    }
                    w._bind(r, t, o, i || !1), "mousewheel" == t && w._bind(r, "DOMMouseScroll", o, i || !1), g.cantouch && "mouseup" == t && w._bind(r, "touchcancel", o, i || !1)
                } else w._bind(r, t, function (e) {
                    return e = e || window.event || !1, e && e.srcElement && (e.target = e.srcElement), o.call(r, e) !== !1 && i !== !1 || w.cancelEvent(e)
                })
            }, this._unbind = function (e, t, o, i) {
                e.removeEventListener ? e.removeEventListener(t, o, i) : e.detachEvent ? e.detachEvent("on" + t, o) : e["on" + t] = !1
            }, this.unbindAll = function () {
                for (var e = 0; e < w.events.length; e++) {
                    var t = w.events[e];
                    t.q ? t.e.unbind(t.n, t.f) : w._unbind(t.e, t.n, t.f, t.b)
                }
            }, this.cancelEvent = function (e) {
                var e = e.original ? e.original : e ? e : window.event || !1;
                return !!e && (e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.preventManipulation && e.preventManipulation(), e.cancelBubble = !0, e.cancel = !0, e.returnValue = !1, !1)
            }, this.stopPropagation = function (e) {
                var e = e.original ? e.original : e ? e : window.event || !1;
                return !!e && (e.stopPropagation ? e.stopPropagation() : (e.cancelBubble && (e.cancelBubble = !0), !1))
            }, this.showRail = function () {
                return 0 == w.page.maxh || !w.ispage && "none" == w.win.css("display") || (w.visibility = !0, w.rail.visibility = !0, w.rail.css("display", "block")), w
            }, this.showRailHr = function () {
                return w.railh ? (0 == w.page.maxw || !w.ispage && "none" == w.win.css("display") || (w.railh.visibility = !0, w.railh.css("display", "block")), w) : w
            }, this.hideRail = function () {
                return w.visibility = !1, w.rail.visibility = !1, w.rail.css("display", "none"), w
            }, this.hideRailHr = function () {
                return w.railh ? (w.railh.visibility = !1, w.railh.css("display", "none"), w) : w
            }, this.show = function () {
                return w.hidden = !1, w.locked = !1, w.showRail().showRailHr()
            }, this.hide = function () {
                return w.hidden = !0, w.locked = !0, w.hideRail().hideRailHr()
            }, this.toggle = function () {
                return w.hidden ? w.show() : w.hide()
            }, this.remove = function () {
                w.stop(), w.cursortimeout && clearTimeout(w.cursortimeout), w.doZoomOut(), w.unbindAll(), w.observer !== !1 && w.observer.disconnect(), w.events = [], w.cursor && (w.cursor.remove(), w.cursor = null), w.cursorh && (w.cursorh.remove(), w.cursorh = null), w.rail && (w.rail.remove(), w.rail = null), w.railh && (w.railh.remove(), w.railh = null), w.zoom && (w.zoom.remove(), w.zoom = null);
                for (var e = 0; e < w.saved.css.length; e++) {
                    var t = w.saved.css[e];
                    t[0].css(t[1], "undefined" == typeof t[2] ? "" : t[2])
                }
                return w.saved = !1, w.me.data("__nicescroll", ""), w.me = null, w.doc = null, w.docscroll = null, w.win = null, w
            }, this.scrollstart = function (e) {
                return this.onscrollstart = e, w
            }, this.scrollend = function (e) {
                return this.onscrollend = e, w
            }, this.scrollcancel = function (e) {
                return this.onscrollcancel = e, w
            }, this.zoomin = function (e) {
                return this.onzoomin = e, w
            }, this.zoomout = function (e) {
                return this.onzoomout = e, w
            }, this.isScrollable = function (e) {
                for (var t = e.target ? e.target : e; t && 1 == t.nodeType && !/BODY|HTML/.test(t.nodeName);) {
                    var o = n(t), i = o.css("overflowY") || o.css("overflowX") || o.css("overflow") || "";
                    if (/scroll|auto/.test(i)) return t.clientHeight != t.scrollHeight;
                    t = !!t.parentNode && t.parentNode
                }
                return !1
            }, this.getViewport = function (e) {
                for (var t = !(!e || !e.parentNode) && e.parentNode; t && 1 == t.nodeType && !/BODY|HTML/.test(t.nodeName);) {
                    var o = n(t), i = o.css("overflowY") || o.css("overflowX") || o.css("overflow") || "";
                    if (/scroll|auto/.test(i) && t.clientHeight != t.scrollHeight) return o;
                    if (o.getNiceScroll().length > 0) return o;
                    t = !!t.parentNode && t.parentNode
                }
                return !1
            }, this.onmousewheel = function (e) {
                return !!w.locked || (w.rail.scrollable ? (w.opt.preservenativescrolling && w.checkarea && (w.checkarea = !1, w.nativescrollingarea = w.isScrollable(e)), !!w.nativescrollingarea || (w.locked ? w.cancelEvent(e) : w.rail.drag ? w.cancelEvent(e) : (m(e, !1), w.cancelEvent(e)))) : !w.railh || !w.railh.scrollable || w.onmousewheelhr(e))
            }, this.onmousewheelhr = function (e) {
                return !(!w.locked && w.railh.scrollable) || (w.opt.preservenativescrolling && w.checkarea && (w.checkarea = !1, w.nativescrollingarea = w.isScrollable(e)), !!w.nativescrollingarea || (w.locked ? w.cancelEvent(e) : w.rail.drag ? w.cancelEvent(e) : (m(e, !0), w.cancelEvent(e))))
            }, this.stop = function () {
                try {
                    if (w.me.is(":visible") === !1) return
                } catch (e) {
                }
                return w.cancelScroll(), w.scrollmon && w.scrollmon.stop(), w.cursorfreezed = !1, w.scroll.y = Math.round(w.getScrollTop() * (1 / w.scrollratio.y)), w.noticeCursor(), w
            }, this.getTransitionSpeed = function (e) {
                var t = Math.round(10 * w.opt.scrollspeed), o = Math.min(t, Math.round(e / 20 * w.opt.scrollspeed));
                return o > 20 ? o : 0
            }, w.opt.smoothscroll ? w.ishwscroll && g.hastransition && w.opt.usetransition ? (this.prepareTransition = function (e, t) {
                var o = t ? e > 20 ? e : 0 : w.getTransitionSpeed(e),
                    i = o ? g.prefixstyle + "transform " + o + "ms ease-out" : "";
                return w.lasttransitionstyle && w.lasttransitionstyle == i || (w.lasttransitionstyle = i, w.doc.css(g.transitionstyle, i)), o
            }, this.doScrollLeft = function (e, t) {
                var o = w.scrollrunning ? w.newscrolly : w.getScrollTop();
                w.doScrollPos(e, o, t)
            }, this.doScrollTop = function (e, t) {
                var o = w.scrollrunning ? w.newscrollx : w.getScrollLeft();
                w.doScrollPos(o, e, t)
            }, this.doScrollPos = function (e, t, o) {
                var i = w.getScrollTop(), r = w.getScrollLeft();
                return ((w.newscrolly - i) * (t - i) < 0 || (w.newscrollx - r) * (e - r) < 0) && w.cancelScroll(), 0 == w.opt.bouncescroll && (t < 0 ? t = 0 : t > w.page.maxh && (t = w.page.maxh), e < 0 ? e = 0 : e > w.page.maxw && (e = w.page.maxw)), (e != w.newscrollx || t != w.newscrolly) && (w.newscrolly = t, w.newscrollx = e, w.newscrollspeed = o || !1, !w.timer && void(w.timer = setTimeout(function () {
                    var o = w.getScrollTop(), i = w.getScrollLeft(), r = {};
                    r.x = e - i, r.y = t - o, r.px = i, r.py = o;
                    var s = Math.round(Math.sqrt(Math.pow(r.x, 2) + Math.pow(r.y, 2))),
                        a = w.newscrollspeed ? w.newscrollspeed : s, l = w.prepareTransition(a);
                    if (w.timerscroll && w.timerscroll.tm && clearInterval(w.timerscroll.tm), l > 0) {
                        if (!w.scrollrunning && w.onscrollstart) {
                            var n = {
                                type: "scrollstart",
                                current: {x: i, y: o},
                                request: {x: e, y: t},
                                end: {x: w.newscrollx, y: w.newscrolly},
                                speed: l
                            };
                            w.onscrollstart.call(w, n)
                        }
                        g.transitionend ? w.scrollendtrapped || (w.scrollendtrapped = !0, w.bind(w.doc, g.transitionend, w.onScrollEnd, !1)) : (w.scrollendtrapped && clearTimeout(w.scrollendtrapped), w.scrollendtrapped = setTimeout(w.onScrollEnd, l));
                        var c = o, d = i;
                        w.timerscroll = {
                            bz: new BezierClass(c, w.newscrolly, l, 0, 0, .58, 1),
                            bh: new BezierClass(d, w.newscrollx, l, 0, 0, .58, 1)
                        }, w.cursorfreezed || (w.timerscroll.tm = setInterval(function () {
                            try {
                                if (w.me.is(":visible") === !1) return
                            } catch (e) {
                            }
                            w.showCursor(w.getScrollTop(), w.getScrollLeft())
                        }, 60))
                    }
                    w.synched("doScroll-set", function () {
                        w.timer = 0, w.scrollendtrapped && (w.scrollrunning = !0), w.setScrollTop(w.newscrolly), w.setScrollLeft(w.newscrollx), w.scrollendtrapped || w.onScrollEnd()
                    })
                }, 50)))
            }, this.cancelScroll = function () {
                try {
                    if (w.me.is(":visible") === !1) return
                } catch (e) {
                }
                if (!w.scrollendtrapped) return !0;
                var t = w.getScrollTop(), o = w.getScrollLeft();
                return w.scrollrunning = !1, g.transitionend || clearTimeout(g.transitionend), w.scrollendtrapped = !1, w._unbind(w.doc, g.transitionend, w.onScrollEnd), w.prepareTransition(0), w.setScrollTop(t), w.railh && w.setScrollLeft(o), w.timerscroll && w.timerscroll.tm && clearInterval(w.timerscroll.tm), w.timerscroll = !1, w.cursorfreezed = !1, w.showCursor(t, o), w
            }, this.onScrollEnd = function () {
                try {
                    if (w.me.is(":visible") === !1) return
                } catch (e) {
                }
                w.scrollendtrapped && w._unbind(w.doc, g.transitionend, w.onScrollEnd), w.scrollendtrapped = !1, w.prepareTransition(0), w.timerscroll && w.timerscroll.tm && clearInterval(w.timerscroll.tm), w.timerscroll = !1;
                var t = w.getScrollTop(), o = w.getScrollLeft();
                if (w.setScrollTop(t), w.railh && w.setScrollLeft(o), w.noticeCursor(!1, t, o), w.cursorfreezed = !1, t < 0 ? t = 0 : t > w.page.maxh && (t = w.page.maxh), o < 0 ? o = 0 : o > w.page.maxw && (o = w.page.maxw), t != w.newscrolly || o != w.newscrollx) return w.doScrollPos(o, t, w.opt.snapbackspeed);
                if (w.onscrollend && w.scrollrunning) {
                    var i = {type: "scrollend", current: {x: o, y: t}, end: {x: w.newscrollx, y: w.newscrolly}};
                    w.onscrollend.call(w, i)
                }
                w.scrollrunning = !1
            }) : (this.doScrollLeft = function (e) {
                var t = w.scrollrunning ? w.newscrolly : w.getScrollTop();
                w.doScrollPos(e, t)
            }, this.doScrollTop = function (e) {
                var t = w.scrollrunning ? w.newscrollx : w.getScrollLeft();
                w.doScrollPos(t, e)
            }, this.doScrollPos = function (e, t) {
                function o() {
                    try {
                        if (w.me.is(":visible") === !1) return
                    } catch (e) {
                    }
                    if (w.cancelAnimationFrame) return !0;
                    if (w.scrollrunning = !0, c = 1 - c) return w.timer = d(o) || 1;
                    var t = 0, i = sy = w.getScrollTop();
                    if (w.dst.ay) {
                        i = w.bzscroll ? w.dst.py + w.bzscroll.getNow() * w.dst.ay : w.newscrolly;
                        var r = i - sy;
                        (r < 0 && i < w.newscrolly || r > 0 && i > w.newscrolly) && (i = w.newscrolly), w.setScrollTop(i), i == w.newscrolly && (t = 1)
                    } else t = 1;
                    var s = sx = w.getScrollLeft();
                    if (w.dst.ax) {
                        s = w.bzscroll ? w.dst.px + w.bzscroll.getNow() * w.dst.ax : w.newscrollx;
                        var r = s - sx;
                        (r < 0 && s < w.newscrollx || r > 0 && s > w.newscrollx) && (s = w.newscrollx), w.setScrollLeft(s), s == w.newscrollx && (t += 1)
                    } else t += 1;
                    if (2 == t) {
                        if (w.timer = 0, w.cursorfreezed = !1, w.bzscroll = !1, w.scrollrunning = !1, i < 0 ? i = 0 : i > w.page.maxh && (i = w.page.maxh), s < 0 ? s = 0 : s > w.page.maxw && (s = w.page.maxw), s != w.newscrollx || i != w.newscrolly) w.doScrollPos(s, i); else if (w.onscrollend) {
                            var a = {
                                type: "scrollend",
                                current: {x: sx, y: sy},
                                end: {x: w.newscrollx, y: w.newscrolly}
                            };
                            w.onscrollend.call(w, a)
                        }
                    } else w.timer = d(o) || 1
                }

                var t = "undefined" == typeof t || t === !1 ? w.getScrollTop(!0) : t;
                if (w.timer && w.newscrolly == t && w.newscrollx == e) return !0;
                w.timer && u(w.timer), w.timer = 0;
                var i = w.getScrollTop(), r = w.getScrollLeft();
                ((w.newscrolly - i) * (t - i) < 0 || (w.newscrollx - r) * (e - r) < 0) && w.cancelScroll(), w.newscrolly = t, w.newscrollx = e, w.bouncescroll && w.rail.visibility || (w.newscrolly < 0 ? w.newscrolly = 0 : w.newscrolly > w.page.maxh && (w.newscrolly = w.page.maxh)), w.bouncescroll && w.railh.visibility || (w.newscrollx < 0 ? w.newscrollx = 0 : w.newscrollx > w.page.maxw && (w.newscrollx = w.page.maxw)), w.dst = {}, w.dst.x = e - r, w.dst.y = t - i, w.dst.px = r, w.dst.py = i;
                var s = Math.round(Math.sqrt(Math.pow(w.dst.x, 2) + Math.pow(w.dst.y, 2)));
                w.dst.ax = w.dst.x / s, w.dst.ay = w.dst.y / s;
                var a = 0, l = s;
                0 == w.dst.x ? (a = i, l = t, w.dst.ay = 1, w.dst.py = 0) : 0 == w.dst.y && (a = r, l = e, w.dst.ax = 1, w.dst.px = 0);
                var n = w.getTransitionSpeed(s);
                if (n > 0 ? w.bzscroll = w.bzscroll ? w.bzscroll.update(l, n) : new BezierClass(a, l, n, 0, 1, 0, 1) : w.bzscroll = !1, !w.timer) {
                    (i == w.page.maxh && t >= w.page.maxh || r == w.page.maxw && e >= w.page.maxw) && w.checkContentSize();
                    var c = 1;
                    if (w.cancelAnimationFrame = !1, w.timer = 1, w.onscrollstart && !w.scrollrunning) {
                        var p = {
                            type: "scrollstart",
                            current: {x: r, y: i},
                            request: {x: e, y: t},
                            end: {x: w.newscrollx, y: w.newscrolly},
                            speed: n
                        };
                        w.onscrollstart.call(w, p)
                    }
                    o(), (i == w.page.maxh && t >= i || r == w.page.maxw && e >= r) && w.checkContentSize(), w.noticeCursor()
                }
            }, this.cancelScroll = function () {
                return w.timer && u(w.timer), w.timer = 0, w.bzscroll = !1, w.scrollrunning = !1, w
            }) : (this.doScrollLeft = function (e, t) {
                var o = w.getScrollTop();
                w.doScrollPos(e, o, t)
            }, this.doScrollTop = function (e, t) {
                var o = w.getScrollLeft();
                w.doScrollPos(o, e, t)
            }, this.doScrollPos = function (e, t, o) {
                var i = e > w.page.maxw ? w.page.maxw : e;
                i < 0 && (i = 0);
                var r = t > w.page.maxh ? w.page.maxh : t;
                r < 0 && (r = 0), w.synched("scroll", function () {
                    w.setScrollTop(r), w.setScrollLeft(i)
                })
            }, this.cancelScroll = function () {
            }), this.doScrollBy = function (e, t) {
                try {
                    if (w.me.is(":visible") === !1) return
                } catch (o) {
                }
                var i = 0;
                if (t) i = Math.floor((w.scroll.y - e) * w.scrollratio.y); else {
                    var r = w.timer ? w.newscrolly : w.getScrollTop(!0);
                    i = r - e
                }
                if (w.bouncescroll) {
                    var s = Math.round(w.view.h / 2);
                    i < -s ? i = -s : i > w.page.maxh + s && (i = w.page.maxh + s)
                }
                return w.cursorfreezed = !1, py = w.getScrollTop(!0), i < 0 && py <= 0 ? w.noticeCursor() : i > w.page.maxh && py >= w.page.maxh ? (w.checkContentSize(), w.noticeCursor()) : void w.doScrollTop(i)
            }, this.doScrollLeftBy = function (e, t) {
                try {
                    if (w.me.is(":visible") === !1) return
                } catch (o) {
                }
                var i = 0;
                if (t) i = Math.floor((w.scroll.x - e) * w.scrollratio.x); else {
                    var r = w.timer ? w.newscrollx : w.getScrollLeft(!0);
                    i = r - e
                }
                if (w.bouncescroll) {
                    var s = Math.round(w.view.w / 2);
                    i < -s ? i = -s : i > w.page.maxw + s && (i = w.page.maxw + s)
                }
                return w.cursorfreezed = !1, px = w.getScrollLeft(!0), i < 0 && px <= 0 ? w.noticeCursor() : i > w.page.maxw && px >= w.page.maxw ? w.noticeCursor() : void w.doScrollLeft(i)
            }, this.doScrollTo = function (e, t) {
                var o = t ? Math.round(e * w.scrollratio.y) : e;
                o < 0 ? o = 0 : o > w.page.maxh && (o = w.page.maxh), w.cursorfreezed = !1, w.doScrollTop(e)
            }, this.checkContentSize = function () {
                var e = w.getContentSize();
                e.h == w.page.h && e.w == w.page.w || w.resize(!1, e)
            }, w.onscroll = function (e) {
                try {
                    if (w.me.is(":visible") === !1) return
                } catch (e) {
                }
                w.rail.drag || w.cursorfreezed || w.synched("scroll", function () {
                    w.scroll.y = Math.round(w.getScrollTop() * (1 / w.scrollratio.y)),
                    w.railh && (w.scroll.x = Math.round(w.getScrollLeft() * (1 / w.scrollratio.x))), w.noticeCursor()
                })
            }, w.bind(w.docscroll, "scroll", w.onscroll), this.doZoomIn = function (e) {
                if (!w.zoomactive) {
                    w.zoomactive = !0, w.zoomrestore = {style: {}};
                    var t = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"],
                        o = w.win[0].style;
                    for (var i in t) {
                        var r = t[i];
                        w.zoomrestore.style[r] = "undefined" != typeof o[r] ? o[r] : ""
                    }
                    w.zoomrestore.style.width = w.win.css("width"), w.zoomrestore.style.height = w.win.css("height"), w.zoomrestore.padding = {
                        w: w.win.outerWidth() - w.win.width(),
                        h: w.win.outerHeight() - w.win.height()
                    }, g.isios4 && (w.zoomrestore.scrollTop = n(window).scrollTop(), n(window).scrollTop(0)), w.win.css({
                        position: g.isios4 ? "absolute" : "fixed",
                        top: 0,
                        left: 0,
                        "z-index": w.opt.zindex + 100,
                        margin: "0px"
                    });
                    var s = w.win.css("backgroundColor");
                    return ("" == s || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(s)) && w.win.css("backgroundColor", "#fff"), w.rail.css({"z-index": w.opt.zindex + 110}), w.zoom.css({"z-index": w.opt.zindex + 112}), w.zoom.css("backgroundPosition", "0px -18px"), w.resizeZoom(), w.onzoomin && w.onzoomin.call(w), w.cancelEvent(e)
                }
            }, this.doZoomOut = function (e) {
                if (w.zoomactive) return w.zoomactive = !1, w.win.css("margin", ""), w.win.css(w.zoomrestore.style), g.isios4 && n(window).scrollTop(w.zoomrestore.scrollTop), w.rail.css({"z-index": w.ispage ? w.opt.zindex : w.opt.zindex + 2}), w.zoom.css({"z-index": w.opt.zindex}), w.zoomrestore = !1, w.zoom.css("backgroundPosition", "0px 0px"), w.onResize(), w.onzoomout && w.onzoomout.call(w), w.cancelEvent(e)
            }, this.doZoom = function (e) {
                return w.zoomactive ? w.doZoomOut(e) : w.doZoomIn(e)
            }, this.resizeZoom = function () {
                if (w.zoomactive) {
                    var e = w.getScrollTop();
                    w.win.css({
                        width: n(window).width() - w.zoomrestore.padding.w + "px",
                        height: n(window).height() - w.zoomrestore.padding.h + "px"
                    }), w.onResize(), console.log(e), w.setScrollTop(Math.min(w.page.maxh, e))
                }
            }, this.init(), n.nicescroll.push(this)
        }, f = function (e) {
            var t = this;
            this.nc = e, this.lastx = 0, this.lasty = 0, this.speedx = 0, this.speedy = 0, this.lasttime = 0, this.steptime = 0, this.snapx = !1, this.snapy = !1, this.demulx = 0, this.demuly = 0, this.lastscrollx = -1, this.lastscrolly = -1, this.chkx = 0, this.chky = 0, this.timer = 0, this.time = function () {
                return +new Date
            }, this.reset = function (e, o) {
                t.stop();
                var i = t.time();
                t.steptime = 0, t.lasttime = i, t.speedx = 0, t.speedy = 0, t.lastx = e, t.lasty = o, t.lastscrollx = -1, t.lastscrolly = -1
            }, this.update = function (e, o) {
                var i = t.time();
                t.steptime = i - t.lasttime, t.lasttime = i;
                var r = o - t.lasty, s = e - t.lastx, a = t.nc.getScrollTop(), l = t.nc.getScrollLeft(), n = a + r,
                    c = l + s;
                t.snapx = c < 0 || c > t.nc.page.maxw, t.snapy = n < 0 || n > t.nc.page.maxh, t.speedx = s, t.speedy = r, t.lastx = e, t.lasty = o
            }, this.stop = function () {
                t.nc.unsynched("domomentum2d"), t.timer && clearTimeout(t.timer), t.timer = 0, t.lastscrollx = -1, t.lastscrolly = -1
            }, this.doSnapy = function (e, o) {
                var i = !1;
                o < 0 ? (o = 0, i = !0) : o > t.nc.page.maxh && (o = t.nc.page.maxh, i = !0), e < 0 ? (e = 0, i = !0) : e > t.nc.page.maxw && (e = t.nc.page.maxw, i = !0), i && t.nc.doScrollPos(e, o, t.nc.opt.snapbackspeed)
            }, this.doMomentum = function (e) {
                var o = t.time(), i = e ? o + e : t.lasttime, r = t.nc.getScrollLeft(), s = t.nc.getScrollTop(),
                    a = t.nc.page.maxh, l = t.nc.page.maxw;
                t.speedx = l > 0 ? Math.min(60, t.speedx) : 0, t.speedy = a > 0 ? Math.min(60, t.speedy) : 0;
                var n = i && o - i <= 50;
                (s < 0 || s > a || r < 0 || r > l) && (n = !1);
                var c = !(!t.speedy || !n) && t.speedy, d = !(!t.speedx || !n) && t.speedx;
                if (c || d) {
                    var u = Math.max(16, t.steptime);
                    if (u > 50) {
                        var p = u / 50;
                        t.speedx *= p, t.speedy *= p, u = 50
                    }
                    t.demulxy = 0, t.lastscrollx = t.nc.getScrollLeft(), t.chkx = t.lastscrollx, t.lastscrolly = t.nc.getScrollTop(), t.chky = t.lastscrolly;
                    var h = t.lastscrollx, m = t.lastscrolly, f = function () {
                        var e = t.time() - o > 600 ? .04 : .02;
                        t.speedx && (h = Math.floor(t.lastscrollx - t.speedx * (1 - t.demulxy)), t.lastscrollx = h, (h < 0 || h > l) && (e = .1)), t.speedy && (m = Math.floor(t.lastscrolly - t.speedy * (1 - t.demulxy)), t.lastscrolly = m, (m < 0 || m > a) && (e = .1)), t.demulxy = Math.min(1, t.demulxy + e), t.nc.synched("domomentum2d", function () {
                            if (t.speedx) {
                                var e = t.nc.getScrollLeft();
                                e != t.chkx && t.stop(), t.chkx = h, t.nc.setScrollLeft(h)
                            }
                            if (t.speedy) {
                                var o = t.nc.getScrollTop();
                                o != t.chky && t.stop(), t.chky = m, t.nc.setScrollTop(m)
                            }
                            t.timer || (t.nc.hideCursor(), t.doSnapy(h, m))
                        }), t.demulxy < 1 ? t.timer = setTimeout(f, u) : (t.stop(), t.nc.hideCursor(), t.doSnapy(h, m))
                    };
                    f()
                } else t.doSnapy(t.nc.getScrollLeft(), t.nc.getScrollTop())
            }
        }, w = e.fn.scrollTop;
        n.cssHooks.pageYOffset = {
            get: function (e, t, o) {
                var i = n.data(e, "__nicescroll") || !1;
                return i && i.ishwscroll ? i.getScrollTop() : w.call(e)
            }, set: function (e, t) {
                var o = n.data(e, "__nicescroll") || !1;
                return o && o.ishwscroll ? o.setScrollTop(parseInt(t)) : w.call(e, t), this
            }
        }, e.fn.scrollTop = function (e) {
            if ("undefined" == typeof e) {
                var t = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
                return t && t.ishwscroll ? t.getScrollTop() : w.call(this)
            }
            return this.each(function () {
                var t = n.data(this, "__nicescroll") || !1;
                t && t.ishwscroll ? t.setScrollTop(parseInt(e)) : w.call(n(this), e)
            })
        };
        var v = e.fn.scrollLeft;
        n.cssHooks.pageXOffset = {
            get: function (e, t, o) {
                var i = n.data(e, "__nicescroll") || !1;
                return i && i.ishwscroll ? i.getScrollLeft() : v.call(e)
            }, set: function (e, t) {
                var o = n.data(e, "__nicescroll") || !1;
                return o && o.ishwscroll ? o.setScrollLeft(parseInt(t)) : v.call(e, t), this
            }
        }, e.fn.scrollLeft = function (e) {
            if ("undefined" == typeof e) {
                var t = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
                return t && t.ishwscroll ? t.getScrollLeft() : v.call(this)
            }
            return this.each(function () {
                var t = n.data(this, "__nicescroll") || !1;
                t && t.ishwscroll ? t.setScrollLeft(parseInt(e)) : v.call(n(this), e)
            })
        };
        var g = function (e) {
            var t = this;
            if (this.length = 0, this.name = "nicescrollarray", this.each = function (e) {
                for (var o = 0; o < t.length; o++) e.call(t[o]);
                return t
            }, this.push = function (e) {
                t[t.length] = e, t.length++
            }, this.eq = function (e) {
                return t[e]
            }, e) for (a = 0; a < e.length; a++) {
                var o = n.data(e[a], "__nicescroll") || !1;
                o && (this[this.length] = o, this.length++)
            }
            return this
        };
        o(g.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function (e, t) {
            e[t] = function () {
                var e = arguments;
                return this.each(function () {
                    this[t].apply(this, e)
                })
            }
        }), e.fn.getNiceScroll = function (e) {
            if ("undefined" == typeof e) return new g(this);
            var t = n.data(this[e], "__nicescroll") || !1;
            return t
        }, e.extend(e.expr[":"], {
            nicescroll: function (e) {
                return !!n.data(e, "__nicescroll")
            }
        }), n.fn.niceScroll = function (e, t) {
            "undefined" == typeof t && ("object" != typeof e || "jquery" in e || (t = e, e = !1));
            var o = new g;
            "undefined" == typeof t && (t = {}), e && (t.doc = n(e), t.win = n(this));
            var i = !("doc" in t);
            return i || "win" in t || (t.win = n(this)), this.each(function () {
                var e = n(this).data("__nicescroll") || !1;
                e || (t.doc = i ? n(this) : t.doc, e = new m(t, n(this)), n(this).data("__nicescroll", e)), o.push(e)
            }), 1 == o.length ? o[0] : o
        }, window.NiceScroll = {
            getjQuery: function () {
                return e
            }
        }, n.nicescroll || (n.nicescroll = new g)
    }(jQuery), function (e) {
        e.fn.perfectScrollbar = function (t) {
            if ("update" === t || "resize" === t) return void e(this).getNiceScroll().resize();
            if ("getScrollObj" === t) return e(this).getNiceScroll();
            if ("getScrollTop" === t) {
                var o = e(this).getNiceScroll().eq(0);
                return o.getScrollTop()
            }
            return "hide" === t ? e(this).getNiceScroll().hide() : "show" === t ? e(this).getNiceScroll().show() : "toggle" === t ? e(this).getNiceScroll().toggle() : "remove" === t || "destroy" === t ? e(this).getNiceScroll().remove() : "stop" === t ? e(this).getNiceScroll().stop() : "doScrollPos" === t && e(this).getNiceScroll().doScrollPos(), t = jQuery.extend({
                cursorwidth: 5,
                cursorborder: "none",
                cursorcolor: "#999",
                hidecursordelay: 0,
                zindex: 10001,
                horizrailenabled: !1
            }, t), e(this).niceScroll(t)
        }
    }(jQuery)
}), define("payment/withdrawals/tpl/main", [], function (e, t, o) {
    o.exports = function (e) {
        var t = "", o = e.data || [], i = o.zx && o.zx.bankcard && o.zx.bankcard.bankType || "",
            r = o.zx && o.zx.bankcard && o.zx.bankcard.bankCardNo || "****",
            s = (o.de && o.de.bankcard && o.de.bankcard.bankType || "", o.de && o.de.bankcard && o.de.bankcard.bankCardNo || "****", o.zx && o.zx.branchInfo || ""),
            a = (o.de && o.de.branchInfo || "", o.zx && o.zx.bankcard && o.zx.bankcard.cityName || ""),
            l = o.zx && o.zx.bankcard && o.zx.bankcard.branchName || "",
            n = (o.de && o.de.bankcard && o.de.bankcard.branchName || "", o.zx && o.zx.balance || 0),
            c = (o.de && o.de.balance || 0, o.withdrawFee || 0),
            d = o.withdrawMemberConfig && o.withdrawMemberConfig.memberLevel || 0,
            u = o.withdrawMemberConfig && o.withdrawMemberConfig.remainingNum || 0, p = o.nextLevelNumber || 1,
            h = o.inUserFlag || !1, m = o.allCashiers;
        if (t += '<div class="wd_box"> <input type="hidden" value="' + n + '" class="wd_ava_bal" id="balance"> <div class="wd_bankcard"> <label>提取到 ：</label> <div class="wd_card"> <div class="loan-area"> <div class="wd_cardIcon"><span id="card-icon" class="bank-' + i + '"></span><i id="card-num">尾号 : ' + r + '</i></div> </div>  </div> </div>  <div class="loan-area"> ', "revise" == s && (t += '  <div class="wd_branch"> <label>支行信息 ：</label> <span>' + a + " " + l + '</span> <a href="/payment/bankcard/branch/index?accountType=0" target="_blank">修改开户行信息</a> </div> '), t += ' </div>  <div class="wd_balance"> <label>可用余额 ：</label> <span>' + n + '</span> 元   </div> <div class="wd_fee"> <label>手续费 ：</label> <strong id="wd-fee" data-fee="' + c + '"> ', t += h || null != m ? " 0 " : " " + c + "  ", t += " </strong> 元 <span> ", t += "5" == d ? " 钻石专享免费提现 " : "4" == d ? " 黑金专享免费提现 " : "3" == d ? " 您当前拥有<i>" + u + '</i>次免费提现的机会 （升级为<a href="/user/member/level" target="_blank">黑金会员</a> 可享受每月<i>' + p + "</i>次免费提现） " : "2" == d ? " 您当前拥有<i>" + u + '</i>次免费提现的机会 （升级为<a href="/user/member/level" target="_blank">白金会员</a> 可享受每月<i>' + p + "</i>次免费提现） " : "1" == d ? " 您当前拥有<i>" + u + '</i>次免费提现的机会 （升级为<a href="/user/member/level" target="_blank">黄金会员</a> 可享受每月<i>' + p + "</i>次免费提现） " : " 您当前拥有<i>" + u + '</i>次免费提现的机会 （升级为<a href="/user/member/level" target="_blank">白银会员</a> 可享受每月<i>' + p + "</i>次免费提现） ", t += " </span> </div>  ", (h || c > 0) && null != m) {
            if (t += ' <div class="wd_coupon"> <label>使用提现券 ：</label> ', h) t += '  <div class="coupons coupon-using"> <ul class="coupon-list " id="coupon-list"> <li class="selected inuse-coupon unable" data-couponid="' + m[0].id + '"> <div class="time">免费提现' + m[0].freePriod + "</div> <div>有效时间：" + $.util.formatTime(m[0].activeTime, "yyyy-MM-dd") + "至" + $.util.formatTime(m[0].expireTime, "yyyy-MM-dd") + '</div> </li> </ul> <div class="coupon-desc">您有一张<span class="wd-count">免费提现' + m[0].freePriod + '</span>的提现券正在生效中，</br>截止日期：<span class="wd-expired-time">' + $.util.formatTime(m[0].expireTime, "yyyy-MM-dd") + "</span></div> </div> "; else {
                t += '  <div class="coupons"> <ul class="coupon-list" id="coupon-list"> ';
                for (var f = 0, w = m.length; f < w; f++) {
                    var v = m[f];
                    if (t += ' <li class="able ', 0 == f && (t += "selected"), t += '" data-couponid="' + v.id + '"> <div class="time">免费提现' + v.freePriod + "</div> <div>有效时间：" + $.util.formatTime(v.activeTime, "yyyy-MM-dd") + "至" + $.util.formatTime(v.expireTime, "yyyy-MM-dd") + "</div> </li> ", f > 4) break;
                    t += " "
                }
                t += ' </ul> <div class="no-coupon"> <div class="not-use" id="not-use">不使用提现劵</div> <a href="javascript:" id="more-coupon">查看更多(' + m.length + ")</a> </div> </div> "
            }
            t += ' <div class="more-coupon-list g-dn" id="more-coupon-list"> <div class="coupons pop-coupons"> <ul class="coupon-list pop-coupon-list" id="pop-coupon-list"> ';
            for (var f = 0, w = m.length; f < w; f++) {
                var v = m[f];
                t += ' <li class="able" data-couponid="' + v.id + '"> <div class="time">免费提现' + v.freePriod + "</div> <div>有效时间：" + $.util.formatTime(v.activeTime, "yyyy-MM-dd") + "至" + $.util.formatTime(v.expireTime, "yyyy-MM-dd") + "</div> </li> "
            }
            t += ' </ul> <div class="pop-btn"> <div class="pop-tip" id="pop-tip"></div> <a href="javascript:" id="confirm-coupon">确定</a> </div> </div> </div> </div> '
        }
        return t += ' <div class="wd_amount"> <label>提现金额 ：</label> <div class="wd_amt_i"><input name="money" class="wd_amt_ipt" id="wd-amt" type="text" autocomplete="new-password" placeholder=""><span></span></div> </div> <div class="wd_tip_line"> <span class="wd_tip"></span> </div> <div class="loan-area"> <div class="wd_pwd"> <label>交易密码 ：</label> <input name="pwd" type="password" style="display: none"> <input name="pwd" class="wd_tradePwd" type="password" id="tradePasswd" autocomplete="new-password" onpaste="return false" oncontextmenu="return false" oncopy="return false" oncut="return false"> <a href="/user/uasec/gtdPassword" target="_blank" class="find_pwd">找回交易密码</a> </div> <div class="wd_tip_line"> <span class="wd_pwd_tip"></span> </div> <div class="wd_code"> <label>验证码 ：</label> <input disabled="disabled" class="wd_code_ipt" type="text"><span class="wd_getcode wd_clk">获取验证码</span> <span class="wd_msg_tip" data-msg="短信验证码已发送到您的手机!&lt;br/&gt;没有收到验证码?&lt;span class=&#39;wd_voice&#39;&gt;使用语音验证&lt;/span&gt;" data-voice="&lt;span class=&#39;wd_voice_tip&#39;&gt;请注意接听系统语音验证码&lt;/span&gt;"></span> </div> <div class="wd_tip_line"> <span class="wd_code_tip"></span> </div> </div> <div class="wd_btn_line"> <span class="wd_btn">确认提交</span> <p class="loan-area"> ', "abc" == i || "ccb" == i ? t += " 温馨提示：由于银行处理原因，18:00后提交的提现可能将于次日（遇法定节假日顺延）到账 " : "psbc" == i ? t += " 温馨提示：支行不正确将会影响到账时间，请确认开户支行所在区 " : "boc" == i && (t += " 温馨提示：由于银行处理原因，18:00后提交的提现可能将于次日（遇法定节假日顺延）到账，支行不正确也将影响到账时间。 "), t += ' </p> </div></div><div class="wd_des_title"> <span>到账时间说明</span></div><div class="wd_des loan-area"> <p>提现申请审核通过后预计3小时内到帐（节假日期间提现时效以公告内容为准，请关注公告）</p> <table cellspacing="0" cellpadding="0"> <colgroup><col width="20%"><col width="13%"><col width="13%"><col width="13%"><col width="13%"><col width="13%"><col width="13%"></colgroup> <thead> <tr class="tb_h"> <td>当日累计提现金额</td> <td>普通会员</td> <td>白银会员</td> <td>黄金会员</td> <td>白金会员</td> <td>黑金会员</td> <td>钻石会员</td> </tr> </thead> <tbody> <tr> <td>小于10万元</td> <td>自动审核</td> <td>自动审核</td> <td>自动审核</td> <td>自动审核</td> <td>自动审核</td> <td>自动审核</td> </tr> <tr> <td>大于等于10万元</td> <td>人工审核</td> <td>人工审核</td> <td>自动审核</td> <td>自动审核</td> <td>自动审核</td> <td>自动审核</td> </tr> <tr><td colspan="7" class="tb_l">1、每日（包括节假日）9:00-20:00提交的提现申请，提交后系统自动审核；<br>2、当日20:00以后提交的提现申请，系统将于次日9:00自动审核；<br>3、人工审核需工作日人工手动审核。</td></tr> </tbody> </table></div><div class="wd_des wd-des-deposit deposit-area"> <p><b>快速提现</b>小于5万 ，实时到账 </p> <p><b>普通提现</b>大于5万，工作日（8:30-17:00）实时到账周末及节假日提现，需要审核，通过后实时到账</p></div>'
    }
}), define("payment/withdrawals/tpl/win", [], function (e, t, o) {
    o.exports = function (e) {
        var t = "", o = e.accountCode || 0, i = e.msg;
        return t += '<div class="win"> ', "needBranch" == i ? (t += " ", 0 == o ? t += ' <p class="p1">您的账户银行卡需要补充开户行资料</p> ' : 5 == o && (t += ' <p class="p1">您的存管账户第一次提现大于5万元需要补充开户行资料</p> '), t += ' <a href="/payment/bankcard/branch/index?accountType=' + o + '">去填写</a> ') : "tradePwdNull" == i ? t += ' <p class="p1">您尚未设置交易密码，网贷账户暂不可进行提现操作</p> <a href="/user/uasec/mtdPassword">设置交易密码</a> ' : "bankcardNull" == i ? t += ' <p class="p1">您尚未银行卡认证，暂不可进行提现操作</p> <a href="/payment/deposit/apply">设置银行卡认证</a> ' : "bankcardMore" == i && (t += ' <p class="p1">您已绑定多张卡，暂不可进行提现操作</p> <a href="/payment/bankcard/index">保留一张银行卡</a> '), t += "</div>"
    }
});