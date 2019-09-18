define("user/login/js/init", ["../../../plugIn/placeholder/jquery.placeholder.cmd", "../../../module/common/form", "../../../module/common/security", "../../../module/ad/main", "../../../module/common/slide", "../../../module/ie-update/main", "../../../module/eSignature/js/init"], function (i, t, e) {
    function s() {
        u.getAd({
            url: "/crossproxy/common/query/position/ad/",
            adkeys: "dl06",
            background: {element: $("#login-gg"), color: ["#fbd448", "#7479ef", "#f3f7fa"]},
            success: function (i) {
                var t = $("#login-gg-link");
                this.background.element.html("<ul></ul>");
                var e = this.background.element.find("ul");
                i = i || [];
                for (var s = 0, n = i.length; s < n && !(s >= 1); s++) {
                    for (var r = i[s] || {}, o = r.adPositionDTO || {}, a = r.positionItemDTOList || [], l = o.showType, d = [], u = 0, h = a.length; u < h && !(1 == l && u >= 1); u++) {
                        var f = a[u];
                        if (f.imagePath) {
                            e.append('<li data-href="' + g + '" style="background-color:' + this.background.color[u] + ";background-image:url(//image.xiaoniu88.com" + f.imagePath + ')"></li>');
                            var g = f && f.href ? f.href : "#";
                            "#" == g ? d.push("<a></a>") : d.push('<a href="' + g + '"></a>')
                        }
                    }
                    t.html(d.join("")), 2 == l && new c(e, e.find("li"), {
                        slideWidth: "100%",
                        slideHeight: 566,
                        slideDirection: 1,
                        slides_auto_span: 5e3,
                        slides_fun: function (i) {
                            t.find("a").hide()
                        },
                        slides_end: function (i) {
                            t.find("a").eq(i).css({display: "block"}).siblings().hide()
                        }
                    })
                }
            }
        })
    }

    function n() {
        $("body").on("focus", "input", function () {
            return $("#msg").removeClass("msg-show").html(""), !1
        }), v.on("click", function () {
            return o($(this)), !1
        }), $(document).on("keydown", function (i) {
            13 == i.keyCode && (g.find("input").blur(), o(v))
        })
    }

    function r(i, t) {
        x.switchCode(), i && t && ($("input[name='ooh.token.name']").val(i), $("input[name='ooh.token.value']").val(t)), v.html("登录").removeClass("disabled")
    }

    function o(i) {
        if (i.hasClass("disabled")) return !1;
        if (x.validate()) {
            var t = p.val();
            t.length <= 20 && (t = RSAUtils.pwdEncode(p.val())), p.val(t);
            var e = g.serialize();
            $.ajax({
                url: g.data("url") + "?" + (new Date).getTime(),
                type: "POST",
                dataType: "json",
                data: e,
                beforeSend: function () {
                    i.addClass("disabled").text("登录中..."), x.tipRemove()
                },
                success: function (i) {
                    if ("0" == i.resultCode) {
                        if ($("#remember").prop("checked")) expire = ";expires=" + new Date((new Date).getTime() + 2592e6).toGMTString(), document.cookie = "xiaoniu88Name=" + escape(m.val()) + expire; else for (var t = unescape(document.cookie).split("; "), e = 0; e < t.length; e++) {
                            var s = t[e].split("=");
                            if ("xiaoniu88Name" == s[0]) {
                                var n = new Date;
                                n.setTime(n.getTime() - 1), document.cookie = s[0] + "=; expires=" + n.toGMTString()
                            }
                        }
                        return h.confirmAuthorize.loginData = i, h.confirmAuthorize.onsuccess = a, 1 != i.elecSign ? h.confirmAuthorize() : void h.confirmAuthorize.onsuccess()
                    }
                    switch (i.resultCode) {
                        case"1":
                            x.tip("验证码为空！", b);
                            break;
                        case"2":
                            x.tip("验证码错误！", b);
                            break;
                        case"3":
                            x.tip("账号为空！", m);
                            break;
                        case"4":
                            x.tip("密码为空！", p);
                            break;
                        case"5":
                            var o = parseInt(i.maxErrorTimes) - parseInt(i.errorTimes);
                            i.errorTimes >= parseInt(i.maxErrorTimes) ? x.tip("密码已锁定，请明日再登录！") : (x.tip("账号或密码错误。今日再输错 <b>" + o + "</b> 次，账户将锁定！"), m.val(""), p.val(""), x.clearShow(m.add(p)));
                            break;
                        case"6":
                            x.tip("账号被禁用！");
                            break;
                        case"-1":
                            x.tip("系统忙,请稍候再试！");
                            break;
                        case"10":
                            x.tip("密码已锁定，请明日再登录！");
                            break;
                        case"11":
                            x.tip("图形验证码过期！");
                            break;
                        case"17":
                            x.tip("因小牛在线和乾牛贷平台账户互通升级，为了您的账户安全，请重新设置您的登录密码！");
                            break;
                        case"19":
                            x.tip("账户异常，请联系客服合并账户后再登录！")
                    }
                    r(i.tokenName, i.tokenValue)
                },
                error: function () {
                    x.tip("网终繁忙，请重试！")
                }
            })
        }
    }

    function a() {
        var i = "https://www.xiaoniu88.com";
        if (window.location.href.indexOf("url=") != -1) {
            var t = window.location.href.split("url=")[1];
            "" !== t && t.indexOf("user/forgetpassword") == -1 && (t = decodeURIComponent(t), d(t) && (i = t))
        }
        var e = this.loginData;
        e && e.sSOInfoDTO ? l(e.sSOInfoDTO, i) : window.location.href = i
    }

    function l(i, t) {
        var e = "", s = {};
        s = $.extend({}, i, s), /^\/[^\/]*/.test(t) ? s.backUrl = location.protocol + "www.xiaoniu88.com" + t : s.backUrl = t;
        for (var n in s) e += '<input type="hidden" name="' + n + '" value="' + s[n] + '"/>';
        $("#formRedirect").attr("action", i.ssoWebUrl).html(e).submit()
    }

    function d(i) {
        i = "" + i;
        var t = i[0];
        if (/^http(s)?:\/\//gi.test(i)) {
            if (!/^http(s)?:\/\/www\.xiaoniu88\.com/gi.test(i) && !/^http(s)?:\/\/www\.xiaoniufax\.com/gi.test(i)) return !1
        } else i.indexOf("xiaoniu88.com") == -1 && (i = "https://www.xiaoniu88.com" + ("/" === t ? "" : "/") + i);
        var e = !!/^(http(s)?:)?\/\/([\w-]+\.)+[\w-]+(\/[\w-\.\/\?%&=]*)?$/gi.test(i);
        return e
    }

    i("../../../plugIn/placeholder/jquery.placeholder.cmd"), i("../../../module/common/form"), i("../../../module/common/security");
    var u = i("../../../module/ad/main"), c = i("../../../module/common/slide");
    i("../../../module/ie-update/main");
    var h = i("../../../module/eSignature/js/init"), f = $("#timeout"), g = $("#login-form"), m = $("#username"),
        p = $("#password"), b = $("#code"), v = $("#login-btn"), x = null;
    t.init = function () {
        x = new $.formInit({
            form: "#login-form", item: ".form-item", tip: "#msg", extend: {
                validate: function () {
                    return "" == $.trim(m.val()) ? (x.tip("请输入用户名/邮箱/手机号码！", m), !1) : "" == $.trim(p.val()) ? (x.tip("请输入密码！", p), !1) : "" != $.trim(b.val()) || (x.tip("请输入验证码！", b), !1)
                }
            }
        }), "timeout" == $.trim(f.val()) && x.tip("登录超时，请重新登录！");
        for (var i = unescape(document.cookie).split("; "), t = 0; t < i.length; t++) {
            var e = i[t].split("=");
            "xiaoniu88Name" == e[0] && m.val(unescape(e[1]))
        }
        n(), setTimeout(function () {
            s()
        }, 500)
    }
}), define("plugIn/placeholder/jquery.placeholder.cmd", [], function (i, t, e) {
    function s(i) {
        var t = {}, e = /^jQuery\d+$/;
        return $.each(i.attributes, function (i, s) {
            s.specified && !e.test(s.name) && (t[s.name] = s.value)
        }), t
    }

    function n(i, t) {
        var e = this, s = $(this);
        if (e.value === s.attr(d ? "placeholder-x" : "placeholder") && s.hasClass(m.customClass)) if (e.value = "", s.removeClass(m.customClass), s.data("placeholder-password")) {
            if (s = s.hide().nextAll('input[type="password"]:first').show().attr("id", s.removeAttr("id").data("placeholder-id")), i === !0) return s[0].value = t, t;
            s.focus()
        } else e == o() && e.select()
    }

    function r(i) {
        var t, e = this, r = $(this), o = e.id;
        if (!i || "blur" !== i.type || !r.hasClass(m.customClass)) if ("" === e.value) {
            if ("password" === e.type) {
                if (!r.data("placeholder-textinput")) {
                    try {
                        t = r.clone().prop({type: "text"})
                    } catch (a) {
                        t = $("<input>").attr($.extend(s(this), {type: "text"}))
                    }
                    t.removeAttr("name").data({
                        "placeholder-enabled": !0,
                        "placeholder-password": r,
                        "placeholder-id": o
                    }).bind("focus.placeholder", n), r.data({"placeholder-textinput": t, "placeholder-id": o}).before(t)
                }
                e.value = "", r = r.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", r.data("placeholder-id")).show()
            } else {
                var l = r.data("placeholder-password");
                l && (l[0].value = "", r.attr("id", r.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))
            }
            r.addClass(m.customClass), r[0].value = r.attr(d ? "placeholder-x" : "placeholder")
        } else r.removeClass(m.customClass)
    }

    function o() {
        try {
            return document.activeElement
        } catch (i) {
        }
    }

    var a, l, d = !1, u = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
        c = "placeholder" in document.createElement("input") && !u && !d,
        h = "placeholder" in document.createElement("textarea") && !u && !d, f = $.valHooks, g = $.propHooks, m = {};
    c && h ? (l = $.fn.placeholder = function () {
        return this
    }, l.input = !0, l.textarea = !0) : (l = $.fn.placeholder = function (i) {
        var t = {customClass: "placeholder"};
        return m = $.extend({}, t, i), this.filter((c ? "textarea" : ":input") + "[" + (d ? "placeholder-x" : "placeholder") + "]").not("." + m.customClass).not(":radio, :checkbox, [type=hidden]").bind({
            "focus.placeholder": n,
            "blur.placeholder": r
        }).data("placeholder-enabled", !0).trigger("blur.placeholder")
    }, l.input = c, l.textarea = h, a = {
        get: function (i) {
            var t = $(i), e = t.data("placeholder-password");
            return e ? e[0].value : t.data("placeholder-enabled") && t.hasClass(m.customClass) ? "" : i.value
        }, set: function (i, t) {
            var e, s, a = $(i);
            return "" !== t && (e = a.data("placeholder-textinput"), s = a.data("placeholder-password"), e ? (n.call(e[0], !0, t) || (i.value = t), e[0].value = t) : s && (n.call(i, !0, t) || (s[0].value = t), i.value = t)), a.data("placeholder-enabled") ? ("" === t ? (i.value = t, i != o() && r.call(i)) : (a.hasClass(m.customClass) && n.call(i), i.value = t), a) : (i.value = t, a)
        }
    }, c || (f.input = a, g.value = a), h || (f.textarea = a, g.value = a), $(function () {
        $(document).delegate("form", "submit.placeholder", function () {
            var i = $("." + m.customClass, this).each(function () {
                n.call(this, !0, "")
            });
            setTimeout(function () {
                i.each(r)
            }, 10)
        })
    }), $(window).bind("beforeunload.placeholder", function () {
        var i = !0;
        try {
            "javascript:void(0)" === document.activeElement.toString() && (i = !1)
        } catch (t) {
        }
        i && $("." + m.customClass).each(function () {
            this.value = ""
        })
    }))
}), define("module/common/form", [], function (i, t, e) {
    $.formInit = function (i) {
        var t = {
            form: "#form",
            item: ".form-item",
            itemActiveClass: "active",
            itemErrorClass: "error",
            clear: !0,
            clearEle: ".clear",
            clearShowClass: "clear-show",
            imgCode: "#img-code",
            tip: "#msg",
            tipClass: "msg-show",
            tipIconClass: "ok",
            extend: {}
        };
        if (this.opts = $.extend(!0, {}, t, i), this.myform = $(this.opts.form), this.myform[0]) {
            this.opts.clear !== !1 && this.clear(), this.switchCode(!0, !0), this.placeholder();
            for (var e in this.opts.extend) this[e] = this.opts.extend[e];
            document.msCapsLockWarningOff = !0
        }
    }, $.formInit.prototype = {
        myform: null, opts: {}, clear: function () {
            var i = this, t = this.opts, e = this.myform;
            e.on("focus", "input", function () {
                var e = $(this).parent(t.item);
                e.addClass(t.itemActiveClass).removeClass(t.itemErrorClass), i.tipRemove(), i.tipIconHide($(this))
            }).on("blur", "input", function () {
                $(this).parent(t.item).removeClass(t.itemActiveClass)
            }).on("keyup", "input", function () {
                var i = $(this).val(), e = $(this).parent(t.item).find(t.clearEle);
                i ? e.addClass(t.clearShowClass) : e.removeClass(t.clearShowClass)
            }).on("click", t.clearEle, function () {
                $(this).removeClass(t.clearShowClass), $(this).parent(t.item).find("input").val("").focus()
            }), setTimeout(function () {
                e.find("input").each(function (i, e) {
                    "" !== $(this).val() && "hidden" != $(this).attr("type") && $(this).parent(t.item).find(t.clearEle).addClass(t.clearShowClass)
                })
            }, 500)
        }, clearShow: function (i, t) {
            var e = this.opts, s = i.parent(e.item).find(e.clearEle);
            t ? s.addClass(e.clearShowClass) : s.removeClass(e.clearShowClass)
        }, tipIconShowTimer: null, tipIconShow: function (i) {
            var t = this.opts, e = i.parent(t.item), s = e.find("." + t.tipIconClass);
            this.tipIconShowTimer && clearTimeout(this.tipIconShowTimer), this.tipIconShowTimer = setTimeout(function () {
                "" != i.val() && (s[0] ? s.show() : e.append("<span class='" + t.tipIconClass + "'></span>"))
            }, 350)
        }, tipIconHide: function (i) {
            var t = this.opts, e = i.parent(t.item), s = e.find("." + t.tipIconClass);
            s[0] && s.hide()
        }, switchCode: function (i, t) {
            var e = this, s = this.opts, n = $(s.imgCode);
            if (e.myform.find(s.imgCode).length > 0) {
                var r = n.parent(s.item).find("input");
                r.val(""), this.clearShow(r), t || n.attr("src", n.data("url") + "?" + (new Date).getTime()), i && e.myform.on("click", s.imgCode, function () {
                    e.switchCode()
                })
            }
        }, placeholder: function () {
            "function" == typeof this.myform.placeholder && ("function" == typeof $.util.isIE ? $.util.isIE() && this.myform.find("input").placeholder() : this.myform.find("input").placeholder())
        }, tip: function (i, t, e) {
            if (e) $(t).parent(this.opts.item).find(this.opts.tip).html(i); else {
                var s = $(this.opts.tip);
                i && s.addClass(this.opts.tipClass).html(i)
            }
            t && $(t).parent(this.opts.item).addClass("error")
        }, tipRemove: function (i) {
            $(i).parent(this.opts.item).find(this.opts.tip).html(""), i && $(i).parent(this.opts.item).removeClass("error")
        }, validate: function () {
        }
    }
}), define("module/common/security", [], function (t, e, s) {
    !function (t) {
        function e(i) {
            var t = u, e = t.biDivideByRadixPower(i, this.k - 1), s = t.biMultiply(e, this.mu),
                n = t.biDivideByRadixPower(s, this.k + 1), r = t.biModuloByRadixPower(i, this.k + 1),
                o = t.biMultiply(n, this.modulus), a = t.biModuloByRadixPower(o, this.k + 1), l = t.biSubtract(r, a);
            l.isNeg && (l = t.biAdd(l, this.bkplus1));
            for (var d = t.biCompare(l, this.modulus) >= 0; d;) l = t.biSubtract(l, this.modulus), d = t.biCompare(l, this.modulus) >= 0;
            return l
        }

        function s(i, t) {
            var e = u.biMultiply(i, t);
            return this.modulo(e)
        }

        function n(i, t) {
            var e = new b;
            e.digits[0] = 1;
            for (var s = i, n = t; ;) {
                if (0 != (1 & n.digits[0]) && (e = this.multiplyMod(e, s)), n = u.biShiftRight(n, 1), 0 == n.digits[0] && 0 == u.biHighIndex(n)) break;
                s = this.multiplyMod(s, s)
            }
            return e
        }

        function r(i) {
            for (var t = "", e = 0; e < i; e++) t += Math.floor(10 * Math.random());
            return t
        }

        var o, a, l, d, u = t.RSAUtils || {}, c = 16, h = c, f = 65536, g = f >>> 1, m = f * f, p = f - 1,
            b = t.BigInt = function (i) {
                "boolean" == typeof i && 1 == i ? this.digits = null : this.digits = a.slice(0), this.isNeg = !1
            };
        u.setMaxDigits = function (i) {
            o = i, a = new Array(o);
            for (var t = 0; t < a.length; t++) a[t] = 0;
            l = new b, d = new b, d.digits[0] = 1
        }, u.setMaxDigits(20);
        var v = 15;
        u.biFromNumber = function (i) {
            var t = new b;
            t.isNeg = i < 0, i = Math.abs(i);
            for (var e = 0; i > 0;) t.digits[e++] = i & p, i = Math.floor(i / f);
            return t
        };
        var x = u.biFromNumber(1e15);
        u.biFromDecimal = function (i) {
            for (var t, e = "-" == i.charAt(0), s = e ? 1 : 0; s < i.length && "0" == i.charAt(s);) ++s;
            if (s == i.length) t = new b; else {
                var n = i.length - s, r = n % v;
                for (0 == r && (r = v), t = u.biFromNumber(Number(i.substr(s, r))), s += r; s < i.length;) t = u.biAdd(u.biMultiply(t, x), u.biFromNumber(Number(i.substr(s, v)))), s += v;
                t.isNeg = e
            }
            return t
        }, u.biCopy = function (i) {
            var t = new b((!0));
            return t.digits = i.digits.slice(0), t.isNeg = i.isNeg, t
        }, u.reverseStr = function (i) {
            for (var t = "", e = i.length - 1; e > -1; --e) t += i.charAt(e);
            return t
        };
        var w = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        u.biToString = function (i, t) {
            var e = new b;
            e.digits[0] = t;
            for (var s = u.biDivideModulo(i, e), n = w[s[1].digits[0]]; 1 == u.biCompare(s[0], l);) s = u.biDivideModulo(s[0], e), digit = s[1].digits[0], n += w[s[1].digits[0]];
            return (i.isNeg ? "-" : "") + u.reverseStr(n)
        }, u.biToDecimal = function (i) {
            var t = new b;
            t.digits[0] = 10;
            for (var e = u.biDivideModulo(i, t), s = String(e[1].digits[0]); 1 == u.biCompare(e[0], l);) e = u.biDivideModulo(e[0], t), s += String(e[1].digits[0]);
            return (i.isNeg ? "-" : "") + u.reverseStr(s)
        };
        var y = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        u.digitToHex = function (t) {
            var e = 15, s = "";
            for (i = 0; i < 4; ++i) s += y[t & e], t >>>= 4;
            return u.reverseStr(s)
        }, u.biToHex = function (i) {
            for (var t = "", e = (u.biHighIndex(i), u.biHighIndex(i)); e > -1; --e) t += u.digitToHex(i.digits[e]);
            return t
        }, u.charToHex = function (i) {
            var t, e = 48, s = e + 9, n = 97, r = n + 25, o = 65, a = 90;
            return t = i >= e && i <= s ? i - e : i >= o && i <= a ? 10 + i - o : i >= n && i <= r ? 10 + i - n : 0
        }, u.hexToDigit = function (i) {
            for (var t = 0, e = Math.min(i.length, 4), s = 0; s < e; ++s) t <<= 4, t |= u.charToHex(i.charCodeAt(s));
            return t
        }, u.biFromHex = function (i) {
            for (var t = new b, e = i.length, s = e, n = 0; s > 0; s -= 4, ++n) t.digits[n] = u.hexToDigit(i.substr(Math.max(s - 4, 0), Math.min(s, 4)));
            return t
        }, u.biFromString = function (i, t) {
            var e = "-" == i.charAt(0), s = e ? 1 : 0, n = new b, r = new b;
            r.digits[0] = 1;
            for (var o = i.length - 1; o >= s; o--) {
                var a = i.charCodeAt(o), l = u.charToHex(a), d = u.biMultiplyDigit(r, l);
                n = u.biAdd(n, d), r = u.biMultiplyDigit(r, t)
            }
            return n.isNeg = e, n
        }, u.biDump = function (i) {
            return (i.isNeg ? "-" : "") + i.digits.join(" ")
        }, u.biAdd = function (i, t) {
            var e;
            if (i.isNeg != t.isNeg) t.isNeg = !t.isNeg, e = u.biSubtract(i, t), t.isNeg = !t.isNeg; else {
                e = new b;
                for (var s, n = 0, r = 0; r < i.digits.length; ++r) s = i.digits[r] + t.digits[r] + n, e.digits[r] = s % f, n = Number(s >= f);
                e.isNeg = i.isNeg
            }
            return e
        }, u.biSubtract = function (i, t) {
            var e;
            if (i.isNeg != t.isNeg) t.isNeg = !t.isNeg, e = u.biAdd(i, t), t.isNeg = !t.isNeg; else {
                e = new b;
                var s, n;
                n = 0;
                for (var r = 0; r < i.digits.length; ++r) s = i.digits[r] - t.digits[r] + n, e.digits[r] = s % f, e.digits[r] < 0 && (e.digits[r] += f), n = 0 - Number(s < 0);
                if (n == -1) {
                    n = 0;
                    for (var r = 0; r < i.digits.length; ++r) s = 0 - e.digits[r] + n, e.digits[r] = s % f, e.digits[r] < 0 && (e.digits[r] += f), n = 0 - Number(s < 0);
                    e.isNeg = !i.isNeg
                } else e.isNeg = i.isNeg
            }
            return e
        }, u.biHighIndex = function (i) {
            for (var t = i.digits.length - 1; t > 0 && 0 == i.digits[t];) --t;
            return t
        }, u.biNumBits = function (i) {
            var t, e = u.biHighIndex(i), s = i.digits[e], n = (e + 1) * h;
            for (t = n; t > n - h && 0 == (32768 & s); --t) s <<= 1;
            return t
        }, u.biMultiply = function (i, t) {
            for (var e, s, n, r = new b, o = u.biHighIndex(i), a = u.biHighIndex(t), l = 0; l <= a; ++l) {
                for (e = 0, n = l, j = 0; j <= o; ++j, ++n) s = r.digits[n] + i.digits[j] * t.digits[l] + e, r.digits[n] = s & p, e = s >>> c;
                r.digits[l + o + 1] = e
            }
            return r.isNeg = i.isNeg != t.isNeg, r
        }, u.biMultiplyDigit = function (i, t) {
            var e, s, n;
            result = new b, e = u.biHighIndex(i), s = 0;
            for (var r = 0; r <= e; ++r) n = result.digits[r] + i.digits[r] * t + s, result.digits[r] = n & p, s = n >>> c;
            return result.digits[1 + e] = s, result
        }, u.arrayCopy = function (i, t, e, s, n) {
            for (var r = Math.min(t + n, i.length), o = t, a = s; o < r; ++o, ++a) e[a] = i[o]
        };
        var S = [0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535];
        u.biShiftLeft = function (i, t) {
            var e = Math.floor(t / h), s = new b;
            u.arrayCopy(i.digits, 0, s.digits, e, s.digits.length - e);
            for (var n = t % h, r = h - n, o = s.digits.length - 1, a = o - 1; o > 0; --o, --a) s.digits[o] = s.digits[o] << n & p | (s.digits[a] & S[n]) >>> r;
            return s.digits[0] = s.digits[o] << n & p, s.isNeg = i.isNeg, s
        };
        var C = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535];
        u.biShiftRight = function (i, t) {
            var e = Math.floor(t / h), s = new b;
            u.arrayCopy(i.digits, e, s.digits, 0, i.digits.length - e);
            for (var n = t % h, r = h - n, o = 0, a = o + 1; o < s.digits.length - 1; ++o, ++a) s.digits[o] = s.digits[o] >>> n | (s.digits[a] & C[n]) << r;
            return s.digits[s.digits.length - 1] >>>= n, s.isNeg = i.isNeg, s
        }, u.biMultiplyByRadixPower = function (i, t) {
            var e = new b;
            return u.arrayCopy(i.digits, 0, e.digits, t, e.digits.length - t), e
        }, u.biDivideByRadixPower = function (i, t) {
            var e = new b;
            return u.arrayCopy(i.digits, t, e.digits, 0, e.digits.length - t), e
        }, u.biModuloByRadixPower = function (i, t) {
            var e = new b;
            return u.arrayCopy(i.digits, 0, e.digits, 0, t), e
        }, u.biCompare = function (i, t) {
            if (i.isNeg != t.isNeg) return 1 - 2 * Number(i.isNeg);
            for (var e = i.digits.length - 1; e >= 0; --e) if (i.digits[e] != t.digits[e]) return i.isNeg ? 1 - 2 * Number(i.digits[e] > t.digits[e]) : 1 - 2 * Number(i.digits[e] < t.digits[e]);
            return 0
        }, u.biDivideModulo = function (i, t) {
            var e, s, n = u.biNumBits(i), r = u.biNumBits(t), o = t.isNeg;
            if (n < r) return i.isNeg ? (e = u.biCopy(d), e.isNeg = !t.isNeg, i.isNeg = !1, t.isNeg = !1, s = biSubtract(t, i), i.isNeg = !0, t.isNeg = o) : (e = new b, s = u.biCopy(i)), [e, s];
            e = new b, s = i;
            for (var a = Math.ceil(r / h) - 1, l = 0; t.digits[a] < g;) t = u.biShiftLeft(t, 1), ++l, ++r, a = Math.ceil(r / h) - 1;
            s = u.biShiftLeft(s, l), n += l;
            for (var c = Math.ceil(n / h) - 1, v = u.biMultiplyByRadixPower(t, c - a); u.biCompare(s, v) != -1;) ++e.digits[c - a], s = u.biSubtract(s, v);
            for (var x = c; x > a; --x) {
                var w = x >= s.digits.length ? 0 : s.digits[x], y = x - 1 >= s.digits.length ? 0 : s.digits[x - 1],
                    S = x - 2 >= s.digits.length ? 0 : s.digits[x - 2], C = a >= t.digits.length ? 0 : t.digits[a],
                    _ = a - 1 >= t.digits.length ? 0 : t.digits[a - 1];
                w == C ? e.digits[x - a - 1] = p : e.digits[x - a - 1] = Math.floor((w * f + y) / C);
                for (var I = e.digits[x - a - 1] * (C * f + _), $ = w * m + (y * f + S); I > $;) --e.digits[x - a - 1], I = e.digits[x - a - 1] * (C * f | _), $ = w * f * f + (y * f + S);
                v = u.biMultiplyByRadixPower(t, x - a - 1), s = u.biSubtract(s, u.biMultiplyDigit(v, e.digits[x - a - 1])), s.isNeg && (s = u.biAdd(s, v), --e.digits[x - a - 1])
            }
            return s = u.biShiftRight(s, l), e.isNeg = i.isNeg != o, i.isNeg && (e = o ? u.biAdd(e, d) : u.biSubtract(e, d), t = u.biShiftRight(t, l), s = u.biSubtract(t, s)), 0 == s.digits[0] && 0 == u.biHighIndex(s) && (s.isNeg = !1), [e, s]
        }, u.biDivide = function (i, t) {
            return u.biDivideModulo(i, t)[0]
        }, u.biModulo = function (i, t) {
            return u.biDivideModulo(i, t)[1]
        }, u.biMultiplyMod = function (i, t, e) {
            return u.biModulo(u.biMultiply(i, t), e)
        }, u.biPow = function (i, t) {
            for (var e = d, s = i; ;) {
                if (0 != (1 & t) && (e = u.biMultiply(e, s)), t >>= 1, 0 == t) break;
                s = u.biMultiply(s, s)
            }
            return e
        }, u.biPowMod = function (i, t, e) {
            for (var s = d, n = i, r = t; ;) {
                if (0 != (1 & r.digits[0]) && (s = u.biMultiplyMod(s, n, e)), r = u.biShiftRight(r, 1), 0 == r.digits[0] && 0 == u.biHighIndex(r)) break;
                n = u.biMultiplyMod(n, n, e)
            }
            return s
        }, t.BarrettMu = function (i) {
            this.modulus = u.biCopy(i), this.k = u.biHighIndex(this.modulus) + 1;
            var t = new b;
            t.digits[2 * this.k] = 1, this.mu = u.biDivide(t, this.modulus), this.bkplus1 = new b, this.bkplus1.digits[this.k + 1] = 1, this.modulo = e, this.multiplyMod = s, this.powMod = n
        };
        var _ = function (i, e, s, n) {
            var r = u;
            this.e = r.biFromHex(i), this.d = r.biFromHex(e), this.m = r.biFromHex(s), this.chunkSize = 2 * r.biHighIndex(this.m), this.radix = 16, this.barrett = new t.BarrettMu(this.m), this.rndLen = n
        };
        u.getKeyPair = function (i, t, e, s) {
            return new _(i, t, e, s)
        }, "undefined" == typeof t.twoDigit && (t.twoDigit = function (i) {
            return (i < 10 ? "0" : "") + String(i)
        });
        var I = "00d3e5839928d17df7ad0ae809c772cd07615cc6531e49aaa2331ba80d1308d25a67f055d2e5c2e90871e779e6ac8629de1d9203333e3b3aabdb1c90dea66c23db6d6941ec89bb99a1f8e44e0a4207341a58f5e43e49f9b69bff1f3115dda47a27e67c6d4b81895a39065ca1ae278d0dfca752aac9c8ac9d0b25cdea70e17e39db",
            $ = "010001", N = "7";
        u.pwdEncode = function (i) {
            var t = u.getKeyPair($, "", I, N);
            return u.encryptedString(t, i)
        }, u.encryptedString = function (i, t) {
            for (var e = r(i.rndLen) + t, s = [], n = e.length, o = 0; o < n;) s[o] = e.charCodeAt(o), o++;
            for (; s.length % i.chunkSize != 0;) s[o++] = 0;
            var a, l, d, c = s.length, h = "";
            for (o = 0; o < c; o += i.chunkSize) {
                for (d = new b, a = 0, l = o; l < o + i.chunkSize; ++a) d.digits[a] = s[l++], d.digits[a] += s[l++] << 8;
                var f = i.barrett.powMod(d, i.e), g = 16 == i.radix ? u.biToHex(f) : u.biToString(f, i.radix);
                h += g + " "
            }
            return h.substring(0, h.length - 1)
        }, u.decryptedString = function (i, t) {
            var e, s, n, r = t.split(" "), o = "";
            for (e = 0; e < r.length; ++e) {
                var a;
                for (a = 16 == i.radix ? u.biFromHex(r[e]) : u.biFromString(r[e], i.radix), n = i.barrett.powMod(a, i.d), s = 0; s <= u.biHighIndex(n); ++s) o += String.fromCharCode(255 & n.digits[s], n.digits[s] >> 8)
            }
            return 0 == o.charCodeAt(o.length - 1) && (o = o.substring(0, o.length - 1)), o
        }, u.setMaxDigits(130), t.RSAUtils = u
    }(window)
}), define("module/ad/main", [], function (i, t, e) {
    t.getAd = function (i) {
        var t = {
            url: "/crossproxy/common/query/position/ad/",
            type: "get",
            data: "",
            beforeSend: null,
            success: null,
            error: null,
            adkeys: "",
            background: {element: null, color: null}
        }, e = $.extend(!0, {}, t, i);
        return e.adkeys && e.success ? void $.ajax({
            type: e.type,
            data: e.data,
            url: e.url + e.adkeys,
            beforeSend: function () {
                "function" == typeof e.beforeSend && e.beforeSend()
            },
            success: function (i) {
                "function" == typeof e.success && e.success(i)
            },
            error: function (i, t, s) {
                "function" == typeof e.error && e.error(i, t, s)
            }
        }) : void console.log("请配置相关参数！")
    }
}), define("module/common/slide", [], function (i, t, e) {
    e.exports = function (i, t, e) {
        this.slideButs_arr = [], this.slideInner = $(i), this.slides = $(t), this.slidesItem = this.slides.length, this.setOptions(e), this.numberOfSlides = -1, this.slides_xc = null, this.zantin = !1, this.info()
    }, e.exports.prototype = {
        setOptions: function (i) {
            this.options = {
                currentPosition: 0,
                slideWidth: 180,
                slideHeight: 180,
                slideDirection: 0,
                slideSeries: 0,
                slideButs: null,
                slideButs_html: null,
                slideButs_bindsj: "click",
                slideButs_selectclass: "s",
                slides_xssm: 1,
                slides_auto_span: 5e3,
                slides_span: "normal",
                slides_to_l: null,
                slides_to_r: null,
                slides_fun: function (i) {
                },
                slides_end: function (i) {
                },
                slides_zindex: 2
            };
            for (var t in i) this.options[t] = i[t];
            for (var e in this.options) this[e] = this.options[e]
        }, shenchen_buts: function () {
            if (!(this.slides.length / 2 <= 1)) {
                var i = this;
                if (this.slideButs) {
                    this.slideButs = $(this.slideButs);
                    for (var t = 0; t < this.numberOfSlides; t++) {
                        var e;
                        e = this.slideButs_html ? "function" == typeof this.slideButs_html ? $(this.slideButs_html(t)) : $(this.slideButs_html) : $('<a href="javascript:;" onfocus="this.blur()">' + (t + 1) + "</a>"), +function () {
                            var s = t;
                            e.bind(i.slideButs_bindsj, function (t) {
                                return i.toItem(s), !1
                            })
                        }(), this.slideButs_arr.push(e), this.slideButs.append(e)
                    }
                }
            }
        }, bind_but: function () {
            var i = this;
            this.slides_to_l && (this.slides_to_l = $(this.slides_to_l), this.slides_to_l.bind("click", function () {
                return i.toLast(), !1
            })), this.slides_to_r && (this.slides_to_r = $(this.slides_to_r), this.slides_to_r.bind("click", function () {
                return i.toNext(), !1
            }))
        }, toLast: function () {
            this.toItem(this.currentPosition - 1)
        }, toNext: function () {
            this.toItem(this.currentPosition + 1)
        }, toItem: function (i, t) {
            var e = this;
            if (this.slides_xc && clearTimeout(this.slides_xc), this.zantin) return void(this.slides_xc = setTimeout(function () {
                e.toItem(i)
            }, 1e3));
            switch (i < 0 || i > this.numberOfSlides - 1 ? this.slidesItem > 1 ? this.slideSeries ? (1 != Math.abs(this.currentPosition - i) && (i = i < 0 ? this.currentPosition - 1 : this.currentPosition + 1), i >= this.numberOfSlides ? this.currentPosition = i - this.numberOfSlides : i < 0 ? this.currentPosition = i + this.numberOfSlides : this.currentPosition = i) : this.currentPosition = i = i < 0 ? this.numberOfSlides - 1 : i > this.numberOfSlides - 1 ? 0 : i : this.currentPosition = i = 0 : this.currentPosition = i, this.slides_fun.call(e, this.currentPosition), this.slideDirection) {
                case 0:
                    !function () {
                        var t = i;
                        t < 0 && (e.slideInner.stop().css("left", -e.numberOfSlides * e.slideWidth), t = e.currentPosition), e.slideInner.stop().animate({left: e.slideWidth * -t}, e.slides_span, function () {
                            t < 0 && e.slideInner.css("left", -(e.numberOfSlides + t) * e.slideWidth), t > e.numberOfSlides - 1 && e.slideInner.css("left", -(t - e.numberOfSlides) * e.slideWidth), e.slides_end.call(e, e.currentPosition)
                        })
                    }();
                    break;
                case 1:
                    !function () {
                        var t = i;
                        t < 0 && (e.slideInner.stop().css("top", -e.numberOfSlides * e.slideHeight), t = e.currentPosition), e.slideInner.stop().animate({top: e.slideHeight * -t}, e.slides_span, function () {
                            t < 0 && e.slideInner.css("top", -(e.numberOfSlides + t) * e.slideHeight), t > e.numberOfSlides - 1 && e.slideInner.css("top", -(t - e.numberOfSlides) * e.slideHeight), e.slides_end.call(e, e.currentPosition)
                        })
                    }();
                    break;
                case 2:
                    this.slides.not(this.slides[this.currentPosition]).css({"z-index": 3}).fadeOut(this.slides_span), $(this.slides[this.currentPosition]).css({
                        "z-index": 2,
                        display: ""
                    }).fadeIn(this.slides_span, function () {
                        e.slides_end.call(e, e.currentPosition)
                    })
            }
            this.slides_auto_span && (this.slides_xc && clearTimeout(this.slides_xc), this.slides_xc = setTimeout(function () {
                e.toNext()
            }, e.slides_auto_span))
        }, infoSeries: function () {
            if (this.slideSeries) {
                this.numberOfSlides = 1 == this.slides_xssm ? this.numberOfSlides : this.slidesItem;
                var i = this.slides.clone();
                this.slides.last().after(i), this.slides = this.slides.add(i)
            }
        }, info: function () {
            var i = this;
            switch (this.numberOfSlides = this.slidesItem - this.slides_xssm + 1, this.slideDirection) {
                case 0:
                    this.infoSeries(), this.slideInner.css({
                        width: this.slideWidth * this.slidesItem * (this.slideSeries ? 2 : 1),
                        position: "absolute"
                    }), this.slides.css({"float": "left"});
                    break;
                case 1:
                    this.infoSeries(), this.slideInner.css({
                        height: this.slideHeight * this.slidesItem * (this.slideSeries ? 2 : 1),
                        position: "absolute"
                    }), this.slides.css({clear: "both"});
                    break;
                case 2:
                    this.slideInner.css({position: "relative", zoom: 1}), this.slides.css({
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zoom: 1
                    })
            }
            this.slideInner.bind("mouseenter", function () {
                i.zantin = !0
            }).bind("mouseleave", function () {
                i.zantin = !1
            }), this.shenchen_buts(), this.bind_but(), this.toItem(this.currentPosition)
        }
    }, e.exports.definedfun = function (i) {
        var t = this.slideButs_arr, e = this.slideButs_selectclass;
        this.slideButs_selectclass && ($.each(t, function (i, t) {
            t.removeClass(e)
        }), $(t[i]).addClass(e))
    }
}), define("module/ie-update/main", [], function (i, t, e) {
    function s() {
        var i, t, e = navigator.appName, s = parseFloat(navigator.appVersion), n = navigator.userAgent,
            r = "Microsoft Internet Explorer" == e, o = "Netscape" == e;
        if (o) if (s >= 5) {
            if (n.indexOf("Netscape") != -1) {
                var a = n.lastIndexOf("/"), l = n.lastIndexOf(" "), d = n.substring(0, a), u = d.lastIndexOf(" ");
                i = n.substring(a + 1, n.length), t = d.substring(u + 1, d.length)
            }
            if (n.indexOf("Firefox") != -1) {
                var a = n.lastIndexOf("/"), l = n.lastIndexOf(" ");
                i = n.substring(a + 1, n.length), t = n.substring(l + 1, a)
            }
            if (n.indexOf("Safari") != -1) if (n.indexOf("Chrome") != -1) {
                var a = n.lastIndexOf(" "), l = n.substring(0, a), c = l.lastIndexOf("/"), d = l.lastIndexOf(" ");
                i = l.substring(c + 1, l.length), t = l.substring(d + 1, c)
            } else {
                var a = n.lastIndexOf("/"), l = n.substring(0, a), c = l.lastIndexOf("/"), d = n.lastIndexOf(" ");
                i = n.substring(c + 1, d), t = n.substring(d + 1, a)
            }
        } else i = s, t = e; else if (r) {
            var h = n.indexOf("MSIE"), f = n.indexOf(";", h);
            if (i = n.substring(h + 5, f), t = e, n.indexOf("Maxthon") != -1 || n.indexOf("MAXTHON") != -1) {
                var g = n.lastIndexOf(" "), m = n.substring(g, n.length - 1);
                m = "遨游版本:" + m, t += "(Maxthon)", i += m
            }
        } else if (n.indexOf("Opera") != -1) {
            t = "Opera";
            n.indexOf("Opera"), n.length;
            i = s
        } else t = "Unknown Navigator", i = "Unknown Version";
        navigator.Actual_Name = t, navigator.Actual_Version = i, this.Name = t, this.Version = i
    }

    s();
    var n = $("#ie-update");
    ("Microsoft Internet Explorer" == navigator.Actual_Name && navigator.Actual_Version < 8 || "Opera" == navigator.Actual_Name || "MSIE" == navigator.Actual_Name) && n.slideDown(), n.off("click").on("click", "a.close", function () {
        n.slideUp()
    })
}), define("module/eSignature/js/init", [], function (i, t, e) {
    function s() {
        $(document).on("click", ".e-signature #check-protocol", function () {
            return c.close(), $.Zebra_Dialog({
                title: "电子签章授权委托书",
                buttons: !1,
                custom_class: "ZebraDialogIframe eSignature",
                source: {
                    iframe: {
                        src: "//image.xiaoniu88.com/static/WebXn/dist/module/eSignature/protocol/querytips.html",
                        height: 300
                    }
                },
                width: 800,
                onClose: function () {
                    r()
                }
            }), !1
        }), $(document).on("click", ".e-signature #confirm-authorization", function () {
            $.ajax({
                type: "post", url: "/user/allowElectronicSign", success: function (i) {
                    if (c.close(), 1 == i.status) a(1); else {
                        if (0 == i.errorCode) return void(window.location.href = "/user/login");
                        a(0)
                    }
                }, error: function (i, t, e) {
                    a(0)
                }
            })
        })
    }

    function n() {
        s(), r()
    }

    function r() {
        c = $.Zebra_Dialog(l, {
            title: "提示",
            buttons: !1,
            custom_class: "ZebraDialogIframe eSignature",
            width: 480,
            overlay_close: !1,
            show_close_button: !1,
            keyboard: !1
        })
    }

    function o(i, t) {
        i ? f = setTimeout(function () {
            o(--i, t)
        }, 1e3) : (t.close(), clearTimeout(f))
    }

    function a(i) {
        var e = "", s = 0;
        1 == i ? (e = d, s = 3) : (e = u, s = 5), h = $.Zebra_Dialog(e, {
            title: "提示",
            buttons: !1,
            custom_class: "ZebraDialogIframe eSignature",
            width: 300,
            overlay_close: !1,
            show_close_button: !0,
            onClose: function () {
                clearTimeout(f), 0 == i ? r() : t.confirmAuthorize.onsuccess && t.confirmAuthorize.onsuccess()
            }
        }), o(s, h)
    }

    var l = "<div class='e-signature'><p>小牛在线电子签章功能已经上线，为了您的交易安全，请授权小牛在线使用您的电子签章。</p><p>详情可查看附件。</p><div class='protocol'>查看<a href='javascript:' id='check-protocol'>《电子签章授权委托书》</a></div><a href='javascript:' class='submit' id='confirm-authorization'>确认授权</a></div>",
        d = "<div class='e-signature result'><p>授权成功</p></div>",
        u = "<div class='e-signature result'><p>授权失败，请重试</p></div>", c = null, h = null, f = null;
    t.checkSignature = function () {
        window.global.isLogin && $.ajax({
            type: "post", url: "/user/existElectronicSign", success: function (i) {
                1 == i.status && (i.data || n())
            }, error: function (i, t, e) {
            }
        })
    }, t.confirmAuthorize = function () {
        n()
    }
});