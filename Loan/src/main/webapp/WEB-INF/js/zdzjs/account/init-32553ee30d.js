define("account/index/js/init", ["../../../plugIn/poshytip-1.2/src/jquery.poshytip", "./datepicker", "../../../module/common/dateUtil", "../../../plugIn/countdown/countdown", "../../../module/eSignature/js/init", "../../../module/getgg/main", "../../../product/deposit/common/dialog_deposit", "../tpl/recommend-list"], function (require, exports, module) {
    function drawGraph() {
        var dataTime = [], unVal = [];
        if ($("#sixData").length > 0) for (var $th = eval($("#sixData").val()), i = $th.length - 1; i >= 0; i--) {
            var v = eval($th[i]);
            dataTime.push(v.investTime), unVal.push(v.investAmount)
        }
        $("#chartsData").highcharts({
            colors: ["#ff9933"],
            title: {text: !1},
            xAxis: {categories: dataTime, labels: {style: {color: "#333333", fontSize: "14px"}}},
            yAxis: {
                min: 0,
                title: {text: !1},
                plotLines: [{value: 0, width: 1, color: "#111"}],
                labels: {
                    formatter: function () {
                        return this.value < 1e3 ? this.value : this.value >= 1e3 ? this.value / 1e4 + "万" : void 0
                    }, style: {color: "#333333", fontSize: "14px"}
                }
            },
            tooltip: {valueSuffix: "元"},
            legend: {layout: "horizontal", align: "center", verticalAlign: "bottom", borderWidth: 0},
            series: [{name: "出借金额", data: unVal, showInLegend: !1}],
            credits: {enabled: !1}
        })
    }

    function getRepayment() {
        if ($("#date").length > 0) {
            var t = $("#date").attr("data-url"), e = new Date, a = [], s = [];
            $.get(t + e.getFullYear() + "/" + (e.getMonth() + 1), function (e) {
                $("#calendar-total").html('<div class="month"><span class="left"><b>' + $.util.contUn(e.repayingTotalAmount) + "</b>元<br/>本月预期回款总额</span><span><b>" + $.util.contUn(e.repayedTotalAmount) + '</b>元<br/>本月已回款总额</span></div><div class="day">' + $.toDate(e.currentDate) + "<br/>今日预期回款：<b>" + $.util.contUn(e.currentRepayingAmount) + "</b>元</div>"), $.each(e.detailList, function (t, e) {
                    a.push($.toDate(e.repayDate)), s.push("还款项目：" + e.repayNumber + "笔<br/>应收本息：" + $.util.contUn(e.repayingAmount) + "元")
                });
                var i = function () {
                    $(".datepickerSelected").poshytip({
                        alignTo: "target",
                        alignX: "inner-left",
                        alignY: "bottom",
                        offsetX: -7,
                        offsetY: 8
                    })
                };
                $("#date").DatePicker({
                    flat: !0,
                    locale: {
                        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        daysMin: ["日", "一", "二", "三", "四", "五", "六"],
                        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                        monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                        weekMin: "wk"
                    },
                    prev: "",
                    next: "",
                    date: a,
                    msg: s,
                    calendars: 1,
                    mode: "multiple",
                    changMonOrYear: function () {
                        i()
                    },
                    onPrevMonthChange: function (e) {
                        var a = $(".datepickerMonth span").html().split(", "), s = "0" == e ? "12" : e,
                            n = "0" == e ? 1 * a[1] - 1 : a[1];
                        $.get(t + n + "/" + s, function (t) {
                            $(".total-data .total").html('<div class="month"><span class="left"><b>' + $.util.contUn(t.repayingTotalAmount) + "</b>元<br/>本月预期回款总额</span><span><b>" + $.util.contUn(t.repayedTotalAmount) + '</b>元<br/>本月已回款总额</span></div><div class="day">' + $.toDate(t.currentDate) + "<br/>今日预期回款：<b>" + $.util.contUn(t.currentRepayingAmount) + "</b>元</div>"), $.each(t.detailList, function (e, a) {
                                var s = $.toDate(t.detailList[e].repayDate).split("-"), i = 1 * s[2],
                                    n = $(".datepickerDays td:not('.datepickerNotInMonth') span:contains('" + i + "')");
                                if (i < 10 && 1 * n.closest("td").find("span").html() == i) for (var o = 0; o < n.length; o++) 1 * n.eq(o).closest("td").find("span").html() == i && n.eq(o).closest("td").addClass("datepickerSelected").attr("title", "还款项目：" + a.repayNumber + "笔<br/>应收本息：" + $.util.contUn(a.repayingAmount) + "元"); else i >= 10 && n.closest("td").addClass("datepickerSelected").attr("title", "还款项目：" + a.repayNumber + "笔<br/>应收本息：" + $.util.contUn(a.repayingAmount) + "元")
                            }), i()
                        })
                    },
                    onNextMonthChange: function (e) {
                        var a = $(".datepickerMonth span").html().split(", "), s = "11" == e ? "-1" : e,
                            n = "11" == e ? 1 * a[1] + 1 : a[1];
                        $.get(t + n + "/" + (1 * s + 2), function (t) {
                            $(".total-data .total").html('<div class="month"><span class="left"><b>' + $.util.contUn(t.repayingTotalAmount) + "</b>元<br/>本月预期回款总额</span><span><b>" + $.util.contUn(t.repayedTotalAmount) + '</b>元<br/>本月已回款总额</span></div><div class="day">' + $.toDate(t.currentDate) + "<br/>今日预期回款：<b>" + $.util.contUn(t.currentRepayingAmount) + "</b>元</div>"), $.each(t.detailList, function (e, a) {
                                var s = $.toDate(t.detailList[e].repayDate).split("-"), i = 1 * s[2],
                                    n = $(".datepickerDays td:not('.datepickerNotInMonth') span:contains('" + i + "')");
                                if (i < 10 && 1 * n.closest("td").find("span").html() == i) for (var o = 0; o < n.length; o++) 1 * n.eq(o).closest("td").find("span").html() == i && n.eq(o).closest("td").addClass("datepickerSelected").attr("title", "还款项目：" + a.repayNumber + "笔<br/>应收本息：" + $.util.contUn(a.repayingAmount) + "元"); else i >= 10 && n.closest("td").addClass("datepickerSelected").attr("title", "还款项目：" + a.repayNumber + "笔<br/>应收本息：" + $.util.contUn(a.repayingAmount) + "元")
                            }), i()
                        })
                    },
                    starts: 0
                }), i()
            })
        }
    }

    function initEvents() {
        var t = $("#dialog").html(), e = function () {
            dialog = $.Zebra_Dialog(t, {
                title: "设置失败",
                buttons: !1,
                custom_class: "notip-set",
                width: 568,
                overlay_close: !1
            })
        }, a = !1;
        $(document).on("click", "#set-no-tip", function () {
            a || (a = !0, $.ajax({
                type: "post", url: "/MyAccount/autoInvest/msgNotic/cancel", success: function (t) {
                    a = !1, 1 == t.status && t.data ? $("#autoinvest-tip").fadeOut("slow") : e()
                }, error: function (t, s, i) {
                    a = !1, e()
                }
            }))
        }).on("click", "#monthUpBtn", function () {
            monthupAccredit()
        }), $(".bouse_info_con").on("click", function () {
            function t() {
                $(".blackbg").width($(window).width()).height($(window).height())
            }

            $("body").append("<div class='blackbg'></div>"), $(".code2d-pop").show(), $(window).resize(function () {
                t()
            }), t(), $(".code2d-inner .x").on("click", function () {
                $(".blackbg").fadeOut(), $(this).parents(".code2d-pop").fadeOut()
            })
        })
    }

    function initPoshyTips() {
        setTimeout(function () {
            $(".at-til .grade>i").each(function () {
                var t, e = $(this), a = e.prop("class");
                switch (a) {
                    case"icon_planner":
                        var s = e.data("type");
                        t = "您是" + s + '<br><a href="/financier/overview" target="_blank">查看邀请好友规则</a>';
                        break;
                    case"icon_real":
                        t = '您尚未进行实名登记<br><a href="/payment/deposit/apply" target="_blank">马上认证 </a>';
                        break;
                    case"icon_realed":
                        t = "已实名登记";
                        break;
                    case"icon_bindcard":
                        t = '您可以去充值投标啦，请在提现前绑定银行卡<br><a href="/payment/bankcard/index" target="_blank">马上绑卡</a>';
                        break;
                    case"icon_bindcarded":
                        t = "已绑卡"
                }
                e.poshytip({className: "tip-yellow", bgImageFrameSize: 11, alignY: "bottom", content: t})
            }), $(".sytip").poshytip({
                alignTo: "target",
                alignX: "inner-left",
                alignY: "bottom",
                offsetX: 0,
                offsetY: 8
            }), $(".icon-question").poshytip({
                alignTo: "target",
                alignX: "inner-left",
                alignY: "top",
                offsetX: -15,
                offsetY: 8
            })
        }, 300)
    }

    function getCountdown() {
        var t = $("#recommend").find(".countdown"), e = t.length;
        if (e) for (var a = 0; a < e; a++) {
            var s = $(t[a]);
            s.countdown({
                time: Number(s.data("conutdown")) + 2, zero: !0, render: function () {
                    var t = this.ele, e = this.date;
                    t.html(e.hour + " 时 " + e.minute + " 分 " + e.second + " 秒")
                }, end: function () {
                    var t = this.ele, e = t.parent();
                    e.attr("data-href", "/product/bid/detail/" + t.attr("data-id")).addClass("enable"), t.remove(), e.append('<span class="btn">立即加入</span>')
                }
            })
        }
    }

    function getRecommendList() {
        $.ajax({
            type: "POST", url: requestUrl.recommendList, success: function (t) {
                var t = t.data || {}, e = $.util.dot(tpl.recommendList, t);
                $("#recommend").html(e), $(".icon-question").poshytip({
                    alignTo: "target",
                    alignX: "inner-left",
                    alignY: "top",
                    offsetX: -15,
                    offsetY: 8
                }), getCountdown()
            }, error: function (t) {
            }
        })
    }

    require("../../../plugIn/poshytip-1.2/src/jquery.poshytip"), require("./datepicker"), require("../../../module/common/dateUtil"), require("../../../plugIn/countdown/countdown");
    var eSignature = require("../../../module/eSignature/js/init"), getGG = require("../../../module/getgg/main"),
        tpl = {
            dialog_deposit: require("../../../product/deposit/common/dialog_deposit"),
            recommendList: require("../tpl/recommend-list")
        }, requestUrl = {
            monthupInfo: "/product/smart/move/info",
            monthupAuthorize: "/product/smart/move/authorize",
            checkPuhuiFinancier: "/partner/landing/puhui/checkPuhuiFinancier",
            recommendList: "/product/account/recommend/list"
        }, showMonthUpDig = function () {
            var t = $("#monthupDialog").html();
            dialog = $.Zebra_Dialog(t, {
                title: "月月牛升级为升财牛啦", buttons: [{
                    caption: "授权升级", callback: function () {
                        $(".user-box").hide(), $("#monthupPage").show()
                    }
                }], center_buttons: !0, custom_class: "monthup", width: 682, overlay_close: !1
            })
        }, showMonthAccreditDig = function () {
            var t = $("#monthAccreditDialog").html();
            dialog = $.Zebra_Dialog(t, {
                title: "月月牛升级授权",
                buttons: [{caption: "确认提交"}],
                show_close_button: !1,
                center_buttons: !0,
                custom_class: "monthup",
                width: 682,
                overlay_close: !1,
                onClose: function () {
                    window.location.href = "/MyAccount/index"
                }
            })
        }, getMonthupInfo = function () {
            $.ajax({
                type: "GET", url: requestUrl.monthupInfo, success: function (t) {
                    if (t.needMove) {
                        var e = t.products, a = "<li>月月牛</li>", s = "<li>升财牛</li>";
                        if (e.length > 0) for (i = 0; i < e.length; i++) {
                            var n = e[i];
                            a += "<li>" + n.annualRate + "%</li>", s += "<li>" + n.annualRate + "%+<span>限时" + n.addRate + "%</span></li>"
                        }
                        a += "<li>当前收益率</li>", s += "<li>转入后收益率</li>", $("#monthInfo").html(a), $("#monthUpInfo").html(s), showMonthUpDig(), $("#totalAmount").html(t.movableAmount), e.length >= 2 ? $("#firstAnswer").html("继续享当前收益率<span>" + e[0].annualRate + "% /" + e[1].annualRate + '%</span>，前3个月额外<span class="red-txt">+' + e[0].addRate + "%</span>") : $("#firstAnswer").html("继续享当前收益率<span>" + e[0].annualRate + '%</span>，前3个月额外<span class="red-txt">+' + e[0].addRate + "%</span>")
                    }
                }, error: function (t, e, a) {
                    console.log("获取月月牛信息失败！")
                }
            })
        }, monthupAccredit = function () {
            $.ajax({
                type: "POST", url: requestUrl.monthupAuthorize, success: function (t) {
                    1 == t.status ? showMonthAccreditDig() : $.toast.tip("授权申请提交失败，请重试~")
                }, error: function (t) {
                    $.toast.tip(t.errorDetails), console.log("授权申请提交失败，请重试~")
                }
            })
        }, getPuhuiGG = function () {
            $.ajax({
                type: "POST", url: requestUrl.checkPuhuiFinancier, success: function (t) {
                    0 == t.status && (1 == t.data ? ($("#puhuiContainer").html('<div class="banner-puhui" id="PHLCSzxb001"></div>'), getGG({
                        keys: "PHLCSzxb001",
                        keysElement: {PHLCSzxb001: "#PHLCSzxb001"}
                    })) : 2 == t.data && ($("#puhuiContainer").html('<div class="banner-puhui" id="PHLCSzxb002"></div>'), getGG({
                        keys: "PHLCSzxb002",
                        keysElement: {PHLCSzxb002: "#PHLCSzxb002"}
                    })))
                }, error: function (t) {
                }
            })
        };
    !function () {
        eSignature.checkSignature(), $("#autoinvest-tip").show(), initEvents(), drawGraph(), getRepayment(), initPoshyTips(), getMonthupInfo(), getPuhuiGG(), getRecommendList()
    }()
}), define("plugIn/poshytip-1.2/src/jquery.poshytip", [], function (t, e, a) {
    !function (t) {
        function e() {
            t.each(a, function () {
                this.refresh(!0)
            })
        }

        var a = [], s = /^url\(["']?([^"'\)]*)["']?\);?$/i, i = /\.png$/i,
            n = !!window.createPopup && "undefined" == document.documentElement.currentStyle.minWidth;
        t(window).resize(e), t.Poshytip = function (e, a) {
            this.$elm = t(e), this.opts = t.extend({}, t.fn.poshytip.defaults, a), this.$tip = t(['<div class="', this.opts.className, '">', '<div class="tip-inner tip-bg-image"></div>', '<div class="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"></div>', "</div>"].join("")).appendTo(document.body), this.$arrow = this.$tip.find("div.tip-arrow"), this.$inner = this.$tip.find("div.tip-inner"), this.disabled = !1, this.content = null, this.init()
        }, t.Poshytip.prototype = {
            init: function () {
                a.push(this);
                var e = this.$elm.attr("title");
                if (this.$elm.data("title.poshytip", void 0 !== e ? e : null).data("poshytip", this), "none" != this.opts.showOn) switch (this.$elm.bind({
                    "mouseenter.poshytip": t.proxy(this.mouseenter, this),
                    "mouseleave.poshytip": t.proxy(this.mouseleave, this)
                }), this.opts.showOn) {
                    case"hover":
                        "cursor" == this.opts.alignTo && this.$elm.bind("mousemove.poshytip", t.proxy(this.mousemove, this)), this.opts.allowTipHover && this.$tip.hover(t.proxy(this.clearTimeouts, this), t.proxy(this.mouseleave, this));
                        break;
                    case"focus":
                        this.$elm.bind({
                            "focus.poshytip": t.proxy(this.showDelayed, this),
                            "blur.poshytip": t.proxy(this.hideDelayed, this)
                        })
                }
            }, mouseenter: function (t) {
                return !!this.disabled || (this.$elm.attr("title", ""), "focus" == this.opts.showOn || void this.showDelayed())
            }, mouseleave: function (t) {
                if (this.disabled || this.asyncAnimating && (this.$tip[0] === t.relatedTarget || jQuery.contains(this.$tip[0], t.relatedTarget))) return !0;
                if (!this.$tip.data("active")) {
                    var e = this.$elm.data("title.poshytip");
                    null !== e && this.$elm.attr("title", e)
                }
                return "focus" == this.opts.showOn || void this.hideDelayed()
            }, mousemove: function (t) {
                return !!this.disabled || (this.eventX = t.pageX, this.eventY = t.pageY, void(this.opts.followCursor && this.$tip.data("active") && (this.calcPos(), this.$tip.css({
                    left: this.pos.l,
                    top: this.pos.t
                }), this.pos.arrow && (this.$arrow[0].className = "tip-arrow tip-arrow-" + this.pos.arrow))))
            }, show: function () {
                this.disabled || this.$tip.data("active") || (this.reset(), this.update(), this.content && (this.display(), this.opts.timeOnScreen && this.hideDelayed(this.opts.timeOnScreen)))
            }, showDelayed: function (e) {
                this.clearTimeouts(), this.showTimeout = setTimeout(t.proxy(this.show, this), "number" == typeof e ? e : this.opts.showTimeout)
            }, hide: function () {
                !this.disabled && this.$tip.data("active") && this.display(!0)
            }, hideDelayed: function (e) {
                this.clearTimeouts(), this.hideTimeout = setTimeout(t.proxy(this.hide, this), "number" == typeof e ? e : this.opts.hideTimeout)
            }, reset: function () {
                this.$tip.queue([]).detach().css("visibility", "hidden").data("active", !1), this.$inner.find("*").poshytip("hide"), this.opts.fade && this.$tip.css("opacity", this.opacity), this.$arrow[0].className = "tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left", this.asyncAnimating = !1
            }, update: function (t, e) {
                if (!this.disabled) {
                    var a = void 0 !== t;
                    if (a) {
                        if (e || (this.opts.content = t), !this.$tip.data("active")) return
                    } else t = this.opts.content;
                    var s = this, i = "function" == typeof t ? t.call(this.$elm[0], function (t) {
                        s.update(t)
                    }) : "[title]" == t ? this.$elm.data("title.poshytip") : t;
                    this.content !== i && (this.$inner.empty().append(i), this.content = i), this.refresh(a)
                }
            }, refresh: function (e) {
                if (!this.disabled) {
                    if (e) {
                        if (!this.$tip.data("active")) return;
                        var a = {left: this.$tip.css("left"), top: this.$tip.css("top")}
                    }
                    this.$tip.css({
                        left: 0,
                        top: 0
                    }).appendTo(document.body), void 0 === this.opacity && (this.opacity = this.$tip.css("opacity"));
                    var o = this.$tip.css("background-image").match(s),
                        r = this.$arrow.css("background-image").match(s);
                    if (o) {
                        var d = i.test(o[1]);
                        n && d ? (this.$tip.css("background-image", "none"), this.$inner.css({
                            margin: 0,
                            border: 0,
                            padding: 0
                        }), o = d = !1) : this.$tip.prepend('<table class="tip-table" border="0" cellpadding="0" cellspacing="0"><tr><td class="tip-top tip-bg-image" colspan="2"><span></span></td><td class="tip-right tip-bg-image" rowspan="2"><span></span></td></tr><tr><td class="tip-left tip-bg-image" rowspan="2"><span></span></td><td></td></tr><tr><td class="tip-bottom tip-bg-image" colspan="2"><span></span></td></tr></table>').css({
                            border: 0,
                            padding: 0,
                            "background-image": "none",
                            "background-color": "transparent"
                        }).find(".tip-bg-image").css("background-image", 'url("' + o[1] + '")').end().find("td").eq(3).append(this.$inner), d && !t.support.opacity && (this.opts.fade = !1)
                    }
                    r && !t.support.opacity && (n && i.test(r[1]) && (r = !1, this.$arrow.css("background-image", "none")), this.opts.fade = !1);
                    var l = this.$tip.find("> table.tip-table");
                    if (n) {
                        this.$tip[0].style.width = "", l.width("auto").find("td").eq(3).width("auto");
                        var c = this.$tip.width(), p = parseInt(this.$tip.css("min-width")),
                            h = parseInt(this.$tip.css("max-width"));
                        !isNaN(p) && c < p ? c = p : !isNaN(h) && c > h && (c = h), this.$tip.add(l).width(c).eq(0).find("td").eq(3).width("100%")
                    } else l[0] && l.width("auto").find("td").eq(3).width("auto").end().end().width(document.defaultView && document.defaultView.getComputedStyle && parseFloat(document.defaultView.getComputedStyle(this.$tip[0], null).width) || this.$tip.width()).find("td").eq(3).width("100%");
                    if (this.tipOuterW = this.$tip.outerWidth(), this.tipOuterH = this.$tip.outerHeight(), this.calcPos(), r && this.pos.arrow && (this.$arrow[0].className = "tip-arrow tip-arrow-" + this.pos.arrow, this.$arrow.css("visibility", "inherit")), e && this.opts.refreshAniDuration) {
                        this.asyncAnimating = !0;
                        var u = this;
                        this.$tip.css(a).animate({
                            left: this.pos.l,
                            top: this.pos.t
                        }, this.opts.refreshAniDuration, function () {
                            u.asyncAnimating = !1
                        })
                    } else this.$tip.css({left: this.pos.l, top: this.pos.t})
                }
            }, display: function (e) {
                var a = this.$tip.data("active");
                if (!(a && !e || !a && e)) {
                    if (this.$tip.stop(), (this.opts.slide && this.pos.arrow || this.opts.fade) && (e && this.opts.hideAniDuration || !e && this.opts.showAniDuration)) {
                        var s = {}, i = {};
                        if (this.opts.slide && this.pos.arrow) {
                            var n, o;
                            "bottom" == this.pos.arrow || "top" == this.pos.arrow ? (n = "top", o = "bottom") : (n = "left", o = "right");
                            var r = parseInt(this.$tip.css(n));
                            s[n] = r + (e ? 0 : this.pos.arrow == o ? -this.opts.slideOffset : this.opts.slideOffset), i[n] = r + (e ? this.pos.arrow == o ? this.opts.slideOffset : -this.opts.slideOffset : 0) + "px"
                        }
                        this.opts.fade && (s.opacity = e ? this.$tip.css("opacity") : 0, i.opacity = e ? 0 : this.opacity), this.$tip.css(s).animate(i, this.opts[e ? "hideAniDuration" : "showAniDuration"])
                    }
                    if (e ? this.$tip.queue(t.proxy(this.reset, this)) : this.$tip.css("visibility", "inherit"), a) {
                        var d = this.$elm.data("title.poshytip");
                        null !== d && this.$elm.attr("title", d)
                    }
                    this.$tip.data("active", !a)
                }
            }, disable: function () {
                this.reset(), this.disabled = !0
            }, enable: function () {
                this.disabled = !1
            }, destroy: function () {
                this.reset(), this.$tip.remove(), delete this.$tip, this.content = null, this.$elm.unbind(".poshytip").removeData("title.poshytip").removeData("poshytip"), a.splice(t.inArray(this, a), 1)
            }, clearTimeouts: function () {
                this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = 0), this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0)
            }, calcPos: function () {
                var e, a, s, i, n, o, r = {l: 0, t: 0, arrow: ""}, d = t(window),
                    l = {l: d.scrollLeft(), t: d.scrollTop(), w: d.width(), h: d.height()};
                if ("cursor" == this.opts.alignTo) e = a = s = this.eventX, i = n = o = this.eventY; else {
                    var c = this.$elm.offset(),
                        p = {l: c.left, t: c.top, w: this.$elm.outerWidth(), h: this.$elm.outerHeight()};
                    e = p.l + ("inner-right" != this.opts.alignX ? 0 : p.w), a = e + Math.floor(p.w / 2), s = e + ("inner-left" != this.opts.alignX ? p.w : 0), i = p.t + ("inner-bottom" != this.opts.alignY ? 0 : p.h), n = i + Math.floor(p.h / 2), o = i + ("inner-top" != this.opts.alignY ? p.h : 0)
                }
                switch (this.opts.alignX) {
                    case"right":
                    case"inner-left":
                        r.l = s + this.opts.offsetX, this.opts.keepInViewport && r.l + this.tipOuterW > l.l + l.w && (r.l = l.l + l.w - this.tipOuterW), "right" != this.opts.alignX && "center" != this.opts.alignY || (r.arrow = "left");
                        break;
                    case"center":
                        r.l = a - Math.floor(this.tipOuterW / 2), this.opts.keepInViewport && (r.l + this.tipOuterW > l.l + l.w ? r.l = l.l + l.w - this.tipOuterW : r.l < l.l && (r.l = l.l));
                        break;
                    default:
                        r.l = e - this.tipOuterW - this.opts.offsetX, this.opts.keepInViewport && r.l < l.l && (r.l = l.l), "left" != this.opts.alignX && "center" != this.opts.alignY || (r.arrow = "right")
                }
                switch (this.opts.alignY) {
                    case"bottom":
                    case"inner-top":
                        r.t = o + this.opts.offsetY, r.arrow && "cursor" != this.opts.alignTo || (r.arrow = "top"), this.opts.keepInViewport && r.t + this.tipOuterH > l.t + l.h && (r.t = i - this.tipOuterH - this.opts.offsetY, "top" == r.arrow && (r.arrow = "bottom"));
                        break;
                    case"center":
                        r.t = n - Math.floor(this.tipOuterH / 2), this.opts.keepInViewport && (r.t + this.tipOuterH > l.t + l.h ? r.t = l.t + l.h - this.tipOuterH : r.t < l.t && (r.t = l.t));
                        break;
                    default:
                        r.t = i - this.tipOuterH - this.opts.offsetY, r.arrow && "cursor" != this.opts.alignTo || (r.arrow = "bottom"), this.opts.keepInViewport && r.t < l.t && (r.t = o + this.opts.offsetY, "bottom" == r.arrow && (r.arrow = "top"))
                }
                this.pos = r
            }
        }, t.fn.poshytip = function (e) {
            if ("string" == typeof e) {
                var a = arguments, s = e;
                return Array.prototype.shift.call(a), "destroy" == s && (this.die ? this.die("mouseenter.poshytip").die("focus.poshytip") : t(document).undelegate(this.selector, "mouseenter.poshytip").undelegate(this.selector, "focus.poshytip")), this.each(function () {
                    var e = t(this).data("poshytip");
                    e && e[s] && e[s].apply(e, a)
                })
            }
            var i = t.extend({}, t.fn.poshytip.defaults, e);
            if (t("#poshytip-css-" + i.className)[0] || t(['<style id="poshytip-css-', i.className, '" type="text/css">', "div.", i.className, "{visibility:hidden;position:absolute;top:0;left:0;}", "div.", i.className, " table.tip-table, div.", i.className, " table.tip-table td{margin:0;font-family:inherit;font-size:inherit;font-weight:inherit;font-style:inherit;font-variant:inherit;vertical-align:middle;}", "div.", i.className, " td.tip-bg-image span{display:block;font:1px/1px sans-serif;height:", i.bgImageFrameSize, "px;width:", i.bgImageFrameSize, "px;overflow:hidden;}", "div.", i.className, " td.tip-right{background-position:100% 0;}", "div.", i.className, " td.tip-bottom{background-position:100% 100%;}", "div.", i.className, " td.tip-left{background-position:0 100%;}", "div.", i.className, " div.tip-inner{background-position:-", i.bgImageFrameSize, "px -", i.bgImageFrameSize, "px;}", "div.", i.className, " div.tip-arrow{visibility:hidden;position:absolute;overflow:hidden;font:1px/1px sans-serif;}", "</style>"].join("")).appendTo("head"), i.liveEvents && "none" != i.showOn) {
                var n, o = t.extend({}, i, {liveEvents: !1});
                switch (i.showOn) {
                    case"hover":
                        n = function () {
                            var e = t(this);
                            e.data("poshytip") || e.poshytip(o).poshytip("mouseenter")
                        }, this.live ? this.live("mouseenter.poshytip", n) : t(document).delegate(this.selector, "mouseenter.poshytip", n);
                        break;
                    case"focus":
                        n = function () {
                            var e = t(this);
                            e.data("poshytip") || e.poshytip(o).poshytip("showDelayed")
                        }, this.live ? this.live("focus.poshytip", n) : t(document).delegate(this.selector, "focus.poshytip", n)
                }
                return this
            }
            return this.each(function () {
                new t.Poshytip(this, i)
            })
        }, t.fn.poshytip.defaults = {
            content: "[title]",
            className: "tip-yellow",
            bgImageFrameSize: 10,
            showTimeout: 500,
            hideTimeout: 100,
            timeOnScreen: 0,
            showOn: "hover",
            liveEvents: !1,
            alignTo: "cursor",
            alignX: "right",
            alignY: "top",
            offsetX: -22,
            offsetY: 18,
            keepInViewport: !0,
            allowTipHover: !0,
            followCursor: !1,
            fade: !0,
            slide: !0,
            slideOffset: 8,
            showAniDuration: 300,
            hideAniDuration: 300,
            refreshAniDuration: 200
        }
    }(jQuery)
}), define("account/index/js/datepicker", [], function (t, e, a) {
    !function (t) {
        var e = function () {
            var e = {years: "datepickerViewYears", moths: "datepickerViewMonths", days: "datepickerViewDays"}, a = {
                wrapper: '<div class="datepicker"><div class="datepickerBorderT" /><div class="datepickerBorderB" /><div class="datepickerBorderL" /><div class="datepickerBorderR" /><div class="datepickerBorderTL" /><div class="datepickerBorderTR" /><div class="datepickerBorderBL" /><div class="datepickerBorderBR" /><div class="datepickerContainer"><table cellspacing="0" cellpadding="0"><tbody><tr></tr></tbody></table></div></div>',
                head: ["<td>", '<table cellspacing="0" cellpadding="0">', "<thead>", '<tr class="datepickerControls">', '<th class="datepickerGoPrev"><a class="bg" href="javascript:;"><span><%=prev%></span></a></th>', '<th colspan="5" class="datepickerMonth"><span></span></th>', '<th class="datepickerGoNext"><a href="javascript:;"><span><%=next%></span></a></th>', "</tr>", '<tr class="datepickerDoW">', '<th><span style="color:#fd8218;"><%=day1%></span></th>', "<th><span><%=day2%></span></th>", "<th><span><%=day3%></span></th>", "<th><span><%=day4%></span></th>", "<th><span><%=day5%></span></th>", "<th><span><%=day6%></span></th>", '<th><span style="color:#fd8218;"><%=day7%></span></th>', "</tr>", "</thead>", "</table></td>"],
                space: '<td class="datepickerSpace"><div></div></td>',
                days: ['<tbody class="datepickerDays">', "<tr>", '<td title="<%=weeks[0].days[0].msg%>" class="<%=weeks[0].days[0].classname%>"><a href="#"><span><%=weeks[0].days[0].text%></span></a></td>', '<td title="<%=weeks[0].days[1].msg%>" class="<%=weeks[0].days[1].classname%>"><a href="#"><span><%=weeks[0].days[1].text%></span></a></td>', '<td title="<%=weeks[0].days[2].msg%>" class="<%=weeks[0].days[2].classname%>"><a href="#"><span><%=weeks[0].days[2].text%></span></a></td>', '<td title="<%=weeks[0].days[3].msg%>" class="<%=weeks[0].days[3].classname%>"><a href="#"><span><%=weeks[0].days[3].text%></span></a></td>', '<td title="<%=weeks[0].days[4].msg%>" class="<%=weeks[0].days[4].classname%>"><a href="#"><span><%=weeks[0].days[4].text%></span></a></td>', '<td title="<%=weeks[0].days[5].msg%>" class="<%=weeks[0].days[5].classname%>"><a href="#"><span><%=weeks[0].days[5].text%></span></a></td>', '<td title="<%=weeks[0].days[6].msg%>" class="<%=weeks[0].days[6].classname%>"><a href="#"><span><%=weeks[0].days[6].text%></span></a></td>', "</tr>", "<tr>", '<td title="<%=weeks[1].days[0].msg%>" class="<%=weeks[1].days[0].classname%>"><a href="#"><span><%=weeks[1].days[0].text%></span></a></td>', '<td title="<%=weeks[1].days[1].msg%>" class="<%=weeks[1].days[1].classname%>"><a href="#"><span><%=weeks[1].days[1].text%></span></a></td>', '<td title="<%=weeks[1].days[2].msg%>" class="<%=weeks[1].days[2].classname%>"><a href="#"><span><%=weeks[1].days[2].text%></span></a></td>', '<td title="<%=weeks[1].days[3].msg%>" class="<%=weeks[1].days[3].classname%>"><a href="#"><span><%=weeks[1].days[3].text%></span></a></td>', '<td title="<%=weeks[1].days[4].msg%>" class="<%=weeks[1].days[4].classname%>"><a href="#"><span><%=weeks[1].days[4].text%></span></a></td>', '<td title="<%=weeks[1].days[5].msg%>" class="<%=weeks[1].days[5].classname%>"><a href="#"><span><%=weeks[1].days[5].text%></span></a></td>', '<td title="<%=weeks[1].days[6].msg%>" class="<%=weeks[1].days[6].classname%>"><a href="#"><span><%=weeks[1].days[6].text%></span></a></td>', "</tr>", "<tr>", '<td title="<%=weeks[2].days[0].msg%>" class="<%=weeks[2].days[0].classname%>"><a href="#"><span><%=weeks[2].days[0].text%></span></a></td>', '<td title="<%=weeks[2].days[1].msg%>" class="<%=weeks[2].days[1].classname%>"><a href="#"><span><%=weeks[2].days[1].text%></span></a></td>', '<td title="<%=weeks[2].days[2].msg%>" class="<%=weeks[2].days[2].classname%>"><a href="#"><span><%=weeks[2].days[2].text%></span></a></td>', '<td title="<%=weeks[2].days[3].msg%>" class="<%=weeks[2].days[3].classname%>"><a href="#"><span><%=weeks[2].days[3].text%></span></a></td>', '<td title="<%=weeks[2].days[4].msg%>" class="<%=weeks[2].days[4].classname%>"><a href="#"><span><%=weeks[2].days[4].text%></span></a></td>', '<td title="<%=weeks[2].days[5].msg%>" class="<%=weeks[2].days[5].classname%>"><a href="#"><span><%=weeks[2].days[5].text%></span></a></td>', '<td title="<%=weeks[2].days[6].msg%>" class="<%=weeks[2].days[6].classname%>"><a href="#"><span><%=weeks[2].days[6].text%></span></a></td>', "</tr>", "<tr>", '<td title="<%=weeks[3].days[0].msg%>" class="<%=weeks[3].days[0].classname%>"><a href="#"><span><%=weeks[3].days[0].text%></span></a></td>', '<td title="<%=weeks[3].days[1].msg%>" class="<%=weeks[3].days[1].classname%>"><a href="#"><span><%=weeks[3].days[1].text%></span></a></td>', '<td title="<%=weeks[3].days[2].msg%>" class="<%=weeks[3].days[2].classname%>"><a href="#"><span><%=weeks[3].days[2].text%></span></a></td>', '<td title="<%=weeks[3].days[3].msg%>" class="<%=weeks[3].days[3].classname%>"><a href="#"><span><%=weeks[3].days[3].text%></span></a></td>', '<td title="<%=weeks[3].days[4].msg%>" class="<%=weeks[3].days[4].classname%>"><a href="#"><span><%=weeks[3].days[4].text%></span></a></td>', '<td title="<%=weeks[3].days[5].msg%>" class="<%=weeks[3].days[5].classname%>"><a href="#"><span><%=weeks[3].days[5].text%></span></a></td>', '<td title="<%=weeks[3].days[6].msg%>" class="<%=weeks[3].days[6].classname%>"><a href="#"><span><%=weeks[3].days[6].text%></span></a></td>', "</tr>", "<tr>", '<td title="<%=weeks[4].days[0].msg%>" class="<%=weeks[4].days[0].classname%>"><a href="#"><span><%=weeks[4].days[0].text%></span></a></td>', '<td title="<%=weeks[4].days[1].msg%>" class="<%=weeks[4].days[1].classname%>"><a href="#"><span><%=weeks[4].days[1].text%></span></a></td>', '<td title="<%=weeks[4].days[2].msg%>" class="<%=weeks[4].days[2].classname%>"><a href="#"><span><%=weeks[4].days[2].text%></span></a></td>', '<td title="<%=weeks[4].days[3].msg%>" class="<%=weeks[4].days[3].classname%>"><a href="#"><span><%=weeks[4].days[3].text%></span></a></td>', '<td title="<%=weeks[4].days[4].msg%>" class="<%=weeks[4].days[4].classname%>"><a href="#"><span><%=weeks[4].days[4].text%></span></a></td>', '<td title="<%=weeks[4].days[5].msg%>" class="<%=weeks[4].days[5].classname%>"><a href="#"><span><%=weeks[4].days[5].text%></span></a></td>', '<td title="<%=weeks[4].days[6].msg%>" class="<%=weeks[4].days[6].classname%>"><a href="#"><span><%=weeks[4].days[6].text%></span></a></td>', "</tr>", "<tr>", '<td title="<%=weeks[5].days[0].msg%>" class="<%=weeks[5].days[0].classname%>"><a href="#"><span><%=weeks[5].days[0].text%></span></a></td>', '<td title="<%=weeks[5].days[1].msg%>" class="<%=weeks[5].days[1].classname%>"><a href="#"><span><%=weeks[5].days[1].text%></span></a></td>', '<td title="<%=weeks[5].days[2].msg%>" class="<%=weeks[5].days[2].classname%>"><a href="#"><span><%=weeks[5].days[2].text%></span></a></td>', '<td title="<%=weeks[5].days[3].msg%>" class="<%=weeks[5].days[3].classname%>"><a href="#"><span><%=weeks[5].days[3].text%></span></a></td>', '<td title="<%=weeks[5].days[4].msg%>" class="<%=weeks[5].days[4].classname%>"><a href="#"><span><%=weeks[5].days[4].text%></span></a></td>', '<td title="<%=weeks[5].days[5].msg%>" class="<%=weeks[5].days[5].classname%>"><a href="#"><span><%=weeks[5].days[5].text%></span></a></td>', '<td title="<%=weeks[5].days[6].msg%>" class="<%=weeks[5].days[6].classname%>"><a href="#"><span><%=weeks[5].days[6].text%></span></a></td>', "</tr>", "</tbody>"],
                months: ['<tbody class="<%=className%>">', "<tr>", '<td colspan="2"><a href="#"><span><%=data[0]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[1]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[2]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[3]%></span></a></td>', "</tr>", "<tr>", '<td colspan="2"><a href="#"><span><%=data[4]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[5]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[6]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[7]%></span></a></td>', "</tr>", "<tr>", '<td colspan="2"><a href="#"><span><%=data[8]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[9]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[10]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[11]%></span></a></td>', "</tr>", "</tbody>"]
            }, s = {
                flat: !1,
                starts: 1,
                prev: "&#9664;",
                next: "&#9654;",
                lastSel: !1,
                mode: "single",
                view: "days",
                calendars: 1,
                format: "Y-m-d",
                position: "bottom",
                eventName: "click",
                onRender: function () {
                    return {}
                },
                onChange: function () {
                    return !0
                },
                onShow: function () {
                    return !0
                },
                onBeforeShow: function () {
                    return !0
                },
                onHide: function () {
                    return !0
                },
                onNextMonthChange: function () {
                    return !0
                },
                onPrevMonthChange: function () {
                    return !0
                },
                changMonOrYear: function () {
                    return !0
                },
                locale: {
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    weekMin: "wk"
                }
            }, i = function (e) {
                var s, i, n, r, d, l, c, p, h, u = t(e).data("datepicker"), m = t(e), f = Math.floor(u.calendars / 2),
                    g = 0;
                m.find("td>table tbody").remove();
                for (var y = 0; y < u.calendars; y++) {
                    switch (s = new Date(u.current), s.addMonths(-f + y), h = m.find("table").eq(y + 1), h[0].className) {
                        case"datepickerViewDays":
                            n = o(s, "B, Y");
                            break;
                        case"datepickerViewMonths":
                            n = s.getFullYear();
                            break;
                        case"datepickerViewYears":
                            n = s.getFullYear() - 6 + " - " + (s.getFullYear() + 5)
                    }
                    h.find("thead tr:first th:eq(1) span").text(n), n = s.getFullYear() - 6, i = {
                        data: [],
                        className: "datepickerYears"
                    };
                    for (var w = 0; w < 12; w++) i.data.push(n + w);
                    p = tmpl(a.months.join(""), i), s.setDate(1), i = {weeks: [], test: 10}, r = s.getMonth();
                    var n = (s.getDay() - u.starts) % 7;
                    for (s.addDays(-(n + (n < 0 ? 7 : 0))), d = -1, g = 0; g < 42;) {
                        l = parseInt(g / 7, 10), c = g % 7, i.weeks[l] || (d = s.getWeekNumber(), i.weeks[l] = {
                            week: d,
                            days: []
                        }), i.weeks[l].days[c] = {
                            text: s.getDate(),
                            classname: [],
                            msg: ""
                        }, r != s.getMonth() && i.weeks[l].days[c].classname.push("datepickerNotInMonth"), 0 == s.getDay() && i.weeks[l].days[c].classname.push("datepickerSunday"), 6 == s.getDay() && i.weeks[l].days[c].classname.push("datepickerSaturday");
                        var v = u.onRender(s), k = s.valueOf();
                        (v.selected || u.date == k || t.inArray(k, u.date) > -1 || "range" == u.mode && k >= u.date[0] && k <= u.date[1]) && (i.weeks[l].days[c].classname.push("datepickerSelected"), i.weeks[l].days[c].msg = u.msg[t.inArray(k, u.date)]), v.disabled && i.weeks[l].days[c].classname.push("datepickerDisabled"), v.className && i.weeks[l].days[c].classname.push(v.className), i.weeks[l].days[c].classname = i.weeks[l].days[c].classname.join(" "), g++, s.addDays(1)
                    }
                    p = tmpl(a.days.join(""), i) + p, i = {
                        data: u.locale.monthsShort,
                        className: "datepickerMonths"
                    }, p = tmpl(a.months.join(""), i) + p, h.append(p), t(".datepickerNotInMonth").each(function (e) {
                        t(this).is(".datepickerSelected") && (t(this).attr("title", ""), t(this).addClass("dtselto"))
                    })
                }
            }, n = function (t, e) {
                if (t.constructor == Date) return new Date(t);
                for (var a, s, i, n, o, r = t.split(/\W+/), d = e.split(/\W+/), l = new Date, c = 0; c < r.length; c++) switch (d[c]) {
                    case"d":
                    case"e":
                        a = parseInt(r[c], 10);
                        break;
                    case"m":
                        s = parseInt(r[c], 10) - 1;
                        break;
                    case"Y":
                    case"y":
                        i = parseInt(r[c], 10), i += i > 100 ? 0 : i < 29 ? 2e3 : 1900;
                        break;
                    case"H":
                    case"I":
                    case"k":
                    case"l":
                        n = parseInt(r[c], 10);
                        break;
                    case"P":
                    case"p":
                        /pm/i.test(r[c]) && n < 12 ? n += 12 : /am/i.test(r[c]) && n >= 12 && (n -= 12);
                        break;
                    case"M":
                        o = parseInt(r[c], 10)
                }
                return new Date(void 0 === i ? l.getFullYear() : i, void 0 === s ? l.getMonth() : s, void 0 === a ? l.getDate() : a, void 0 === n ? l.getHours() : n, void 0 === o ? l.getMinutes() : o, 0)
            }, o = function (t, e) {
                var a = t.getMonth(), s = t.getDate(), i = t.getFullYear(), n = (t.getWeekNumber(), t.getDay()),
                    o = t.getHours(), r = o >= 12, d = r ? o - 12 : o, l = t.getDayOfYear();
                0 == d && (d = 12);
                for (var c, p = t.getMinutes(), h = t.getSeconds(), u = e.split(""), m = 0; m < u.length; m++) {
                    switch (c = u[m], u[m]) {
                        case"a":
                            c = t.getDayName();
                            break;
                        case"A":
                            c = t.getDayName(!0);
                            break;
                        case"b":
                            c = t.getMonthName();
                            break;
                        case"B":
                            c = t.getMonthName(!0);
                            break;
                        case"C":
                            c = 1 + Math.floor(i / 100);
                            break;
                        case"d":
                            c = s < 10 ? "0" + s : s;
                            break;
                        case"e":
                            c = s;
                            break;
                        case"H":
                            c = o < 10 ? "0" + o : o;
                            break;
                        case"I":
                            c = d < 10 ? "0" + d : d;
                            break;
                        case"j":
                            c = l < 100 ? l < 10 ? "00" + l : "0" + l : l;
                            break;
                        case"k":
                            c = o;
                            break;
                        case"l":
                            c = d;
                            break;
                        case"m":
                            c = a < 9 ? "0" + (1 + a) : 1 + a;
                            break;
                        case"M":
                            c = p < 10 ? "0" + p : p;
                            break;
                        case"p":
                        case"P":
                            c = r ? "PM" : "AM";
                            break;
                        case"s":
                            c = Math.floor(t.getTime() / 1e3);
                            break;
                        case"S":
                            c = h < 10 ? "0" + h : h;
                            break;
                        case"u":
                            c = n + 1;
                            break;
                        case"w":
                            c = n;
                            break;
                        case"y":
                            c = ("" + i).substr(2, 2);
                            break;
                        case"Y":
                            c = i
                    }
                    u[m] = c
                }
                return u.join("")
            }, r = function (t) {
                Date.prototype.tempDate || (Date.prototype.tempDate = null, Date.prototype.months = t.months, Date.prototype.monthsShort = t.monthsShort, Date.prototype.days = t.days, Date.prototype.daysShort = t.daysShort, Date.prototype.getMonthName = function (t) {
                    return this[t ? "months" : "monthsShort"][this.getMonth()]
                }, Date.prototype.getDayName = function (t) {
                    return this[t ? "days" : "daysShort"][this.getDay()]
                }, Date.prototype.addDays = function (t) {
                    this.setDate(this.getDate() + t), this.tempDate = this.getDate()
                }, Date.prototype.addMonths = function (t) {
                    null == this.tempDate && (this.tempDate = this.getDate()), this.setDate(1), this.setMonth(this.getMonth() + t), this.setDate(Math.min(this.tempDate, this.getMaxDays()))
                }, Date.prototype.addYears = function (t) {
                    null == this.tempDate && (this.tempDate = this.getDate()), this.setDate(1), this.setFullYear(this.getFullYear() + t), this.setDate(Math.min(this.tempDate, this.getMaxDays()))
                }, Date.prototype.getMaxDays = function () {
                    var t, e = new Date(Date.parse(this)), a = 28;
                    for (t = e.getMonth(), a = 28; e.getMonth() == t;) a++, e.setDate(a);
                    return a - 1
                }, Date.prototype.getFirstDay = function () {
                    var t = new Date(Date.parse(this));
                    return t.setDate(1), t.getDay()
                }, Date.prototype.getWeekNumber = function () {
                    var t = new Date(this);
                    t.setDate(t.getDate() - (t.getDay() + 6) % 7 + 3);
                    var e = t.valueOf();
                    return t.setMonth(0), t.setDate(4), Math.round((e - t.valueOf()) / 6048e5) + 1
                }, Date.prototype.getDayOfYear = function () {
                    var t = new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0),
                        e = new Date(this.getFullYear(), 0, 0, 0, 0, 0), a = t - e;
                    return Math.floor(a / 24 * 60 * 60 * 1e3)
                })
            }, d = function (e) {
                var a = t(e).data("datepicker"), s = t("#" + a.id);
                if (!a.extraHeight) {
                    var i = t(e).find("div");
                    a.extraHeight = i.get(0).offsetHeight + i.get(1).offsetHeight, a.extraWidth = i.get(2).offsetWidth + i.get(3).offsetWidth
                }
                var n = s.find("table:first").get(0), o = n.offsetWidth, r = n.offsetHeight;
                s.css({
                    width: o + a.extraWidth + "px",
                    height: r + a.extraHeight + "px"
                }).find("div.datepickerContainer").css({width: o + "px", height: r + "px"})
            }, l = function (e) {
                t(e.target).is("span") && (e.target = e.target.parentNode);
                var a = t(e.target);
                if (a.is("a")) {
                    if (e.target.blur(), a.hasClass("datepickerDisabled")) return !1;
                    var s = t(this).data("datepicker"), n = a.parent(), r = n.parent().parent().parent(),
                        d = t("table", this).index(r.get(0)) - 1, l = new Date(s.current), p = !1, h = !1;
                    if (n.is("th")) {
                        if (n.hasClass("datepickerWeek") && "range" == s.mode && !n.next().hasClass("datepickerDisabled")) {
                            var u = parseInt(n.next().text(), 10);
                            l.addMonths(d - Math.floor(s.calendars / 2)), n.next().hasClass("datepickerNotInMonth") && l.addMonths(u > 15 ? -1 : 1), l.setDate(u), s.date[0] = l.setHours(0, 0, 0, 0).valueOf(), l.setHours(23, 59, 59, 0), l.addDays(6), s.date[1] = l.valueOf(), h = !0, p = !0, s.lastSel = !1
                        } else if (n.hasClass("datepickerMonth")) switch (l.addMonths(d - Math.floor(s.calendars / 2)), r.get(0).className) {
                            case"datepickerViewDays":
                                r.get(0).className = "datepickerViewMonths", a.find("span").text(l.getFullYear());
                                break;
                            case"datepickerViewMonths":
                                r.get(0).className = "datepickerViewYears", a.find("span").text(l.getFullYear() - 6 + " - " + (l.getFullYear() + 5));
                                break;
                            case"datepickerViewYears":
                                r.get(0).className = "datepickerViewDays", a.find("span").text(o(l, "B, Y"))
                        } else if (n.parent().parent().is("thead")) {
                            var m = l.getFullYear(), f = l.getMonth(), g = t(".total").attr("data-year"),
                                y = t(".total").attr("data-month");
                            if ("datepickerGoNext" == n.get(0).className) {
                                if (!(m - g <= 1 || m - g == 1 && f + 2 >= y || m - g == 2 && f + 2 <= y)) return;
                                s.onNextMonthChange.apply(this, [l.getMonth(), l.getYear()]), m - g == 2 && f + 2 == y && t(".datepickerGoNext a").addClass("bg"), t(".datepickerGoPrev a.bg").length > 0 && t(".datepickerGoPrev a.bg").removeClass("bg")
                            }
                            if ("datepickerGoPrev" == n.get(0).className) {
                                if (!(m - g > 0 || m == g && f >= y || m > g && f <= y)) return;
                                s.onPrevMonthChange.apply(this, [l.getMonth()]), (m == g && f == y || m > g && f == y) && t(".datepickerGoPrev").find("a").addClass("bg"), t(".datepickerGoNext a.bg").length > 0 && t(".datepickerGoNext a.bg").removeClass("bg")
                            }
                            switch (r.get(0).className) {
                                case"datepickerViewDays":
                                    s.current.addMonths(n.hasClass("datepickerGoPrev") ? -1 : 1);
                                    break;
                                case"datepickerViewMonths":
                                    s.current.addYears(n.hasClass("datepickerGoPrev") ? -1 : 1);
                                    break;
                                case"datepickerViewYears":
                                    s.current.addYears(n.hasClass("datepickerGoPrev") ? -12 : 12)
                            }
                            h = !0
                        }
                    } else if (n.is("td") && !n.hasClass("datepickerDisabled")) {
                        switch (r.get(0).className) {
                            case"datepickerViewMonths":
                                s.current.setMonth(r.find("tbody.datepickerMonths td").index(n)), s.current.setFullYear(parseInt(r.find("thead th.datepickerMonth span").text(), 10)), s.current.addMonths(Math.floor(s.calendars / 2) - d), r.get(0).className = "datepickerViewDays", h = !0;
                                break;
                            case"datepickerViewYears":
                                s.current.setFullYear(parseInt(a.text(), 10)), r.get(0).className = "datepickerViewMonths", h = !0;
                                break;
                            default:
                                var u = parseInt(a.text(), 10);
                                switch (l.addMonths(d - Math.floor(s.calendars / 2)), n.hasClass("datepickerNotInMonth") && l.addMonths(u > 15 ? -1 : 1), l.setDate(u), s.mode) {
                                    case"multiple":
                                        u = l.setHours(0, 0, 0, 0).valueOf(), t.inArray(u, s.date) > -1 && t.each(s.date, function (t, e) {
                                            if (e == u) return !1
                                        });
                                        break;
                                    case"range":
                                        s.lastSel || (s.date[0] = l.setHours(0, 0, 0, 0).valueOf()), u = l.setHours(23, 59, 59, 0).valueOf(), u < s.date[0] ? (s.date[1] = s.date[0] + 86399e3, s.date[0] = u - 86399e3) : s.date[1] = u, s.lastSel = !s.lastSel;
                                        break;
                                    default:
                                        s.date = l.valueOf()
                                }
                                h = !1
                        }
                        p = !0
                    }
                    h && i(this), p && s.onChange.apply(this, c(s)), h ? s.changMonOrYear.apply(this, [l.getMonth()]) : "datepickerGoNext" == n.get(0).className ? s.onNextMonthChange.apply(this, [l.getMonth()]) : "datepickerGoPrev" == n.get(0).className && s.onPrevMonthChange.apply(this, [l.getMonth()])
                }
                return !1
            }, c = function (e) {
                var a;
                return "single" == e.mode ? (a = new Date(e.date), [o(a, e.format), a, e.el]) : (a = [[], [], e.el], t.each(e.date, function (t, s) {
                    var i = new Date(s);
                    a[0].push(o(i, e.format)), a[1].push(i)
                }), a)
            }, p = function () {
                var t = "CSS1Compat" == document.compatMode;
                return {
                    l: window.pageXOffset || (t ? document.documentElement.scrollLeft : document.body.scrollLeft),
                    t: window.pageYOffset || (t ? document.documentElement.scrollTop : document.body.scrollTop),
                    w: window.innerWidth || (t ? document.documentElement.clientWidth : document.body.clientWidth),
                    h: window.innerHeight || (t ? document.documentElement.clientHeight : document.body.clientHeight)
                }
            }, h = function (t, e, a) {
                if (t == e) return !0;
                if (t.contains) return t.contains(e);
                if (t.compareDocumentPosition) return !!(16 & t.compareDocumentPosition(e));
                for (var s = e.parentNode; s && s != a;) {
                    if (s == t) return !0;
                    s = s.parentNode
                }
                return !1
            }, u = function (e) {
                var a = t("#" + t(this).data("datepickerId"));
                if (!a.is(":visible")) {
                    var s = a.get(0);
                    i(s);
                    var n = a.data("datepicker");
                    n.onBeforeShow.apply(this, [a.get(0)]);
                    var o = t(this).offset(), r = p(), l = o.top, c = o.left;
                    t.curCSS(s, "display");
                    switch (a.css({visibility: "hidden", display: "block"}), d(s), n.position) {
                        case"top":
                            l -= s.offsetHeight;
                            break;
                        case"left":
                            c -= s.offsetWidth;
                            break;
                        case"right":
                            c += this.offsetWidth;
                            break;
                        case"bottom":
                            l += this.offsetHeight
                    }
                    l + s.offsetHeight > r.t + r.h && (l = o.top - s.offsetHeight), l < r.t && (l = o.top + this.offsetHeight + s.offsetHeight), c + s.offsetWidth > r.l + r.w && (c = o.left - s.offsetWidth), c < r.l && (c = o.left + this.offsetWidth), a.css({
                        visibility: "visible",
                        display: "block",
                        top: l + "px",
                        left: c + "px"
                    }), 0 != n.onShow.apply(this, [a.get(0)]) && a.show(), t(document).bind("mousedown", {
                        cal: a,
                        trigger: this
                    }, m)
                }
                return !1
            }, m = function (e) {
                e.target == e.data.trigger || h(e.data.cal.get(0), e.target, e.data.cal.get(0)) || (0 != e.data.cal.data("datepicker").onHide.apply(this, [e.data.cal.get(0)]) && e.data.cal.hide(), t(document).unbind("mousedown", m))
            };
            return {
                init: function (o) {
                    return o = t.extend({}, s, o || {}), r(o.locale), o.calendars = Math.max(1, parseInt(o.calendars, 10) || 1), o.mode = /single|multiple|range/.test(o.mode) ? o.mode : "single", this.each(function () {
                        if (!t(this).data("datepicker")) {
                            if (o.el = this, o.date.constructor == String && (o.date = n(o.date, o.format), o.date.setHours(0, 0, 0, 0)), "single" != o.mode) if (o.date.constructor != Array) o.date = [o.date.valueOf()], "range" == o.mode && o.date.push(new Date(o.date[0]).setHours(23, 59, 59, 0).valueOf()); else {
                                for (var s = 0; s < o.date.length; s++) o.date[s] = n(o.date[s], o.format).setHours(0, 0, 0, 0).valueOf();
                                "range" == o.mode && (o.date[1] = new Date(o.date[1]).setHours(23, 59, 59, 0).valueOf())
                            } else o.date = o.date.valueOf();
                            o.current ? o.current = n(o.current, o.format) : o.current = new Date, t(".total").attr("data-month", o.current.getMonth() + 1), t(".total").attr("data-year", o.current.getFullYear()), o.current.setDate(1), o.current.setHours(0, 0, 0, 0);
                            var r, c = "datepicker_" + parseInt(1e3 * Math.random());
                            o.id = c, t(this).data("datepickerId", o.id);
                            var p = t(a.wrapper).attr("id", c).bind("click", l).data("datepicker", o);
                            o.className && p.addClass(o.className);
                            for (var h = "", s = 0; s < o.calendars; s++) r = o.starts, s > 0 && (h += a.space), h += tmpl(a.head.join(""), {
                                week: o.locale.weekMin,
                                prev: o.prev,
                                next: o.next,
                                day1: o.locale.daysMin[r++ % 7],
                                day2: o.locale.daysMin[r++ % 7],
                                day3: o.locale.daysMin[r++ % 7],
                                day4: o.locale.daysMin[r++ % 7],
                                day5: o.locale.daysMin[r++ % 7],
                                day6: o.locale.daysMin[r++ % 7],
                                day7: o.locale.daysMin[r++ % 7]
                            });
                            p.find("tr:first").append(h).find("table").addClass(e[o.view]), i(p.get(0)), o.flat ? (p.appendTo(this).show().css("position", "relative"), d(p.get(0))) : (p.appendTo(document.body), t(this).bind(o.eventName, u))
                        }
                    })
                }, showPicker: function () {
                    return this.each(function () {
                        t(this).data("datepickerId") && u.apply(this)
                    })
                }, hidePicker: function () {
                    return this.each(function () {
                        t(this).data("datepickerId") && t("#" + t(this).data("datepickerId")).hide()
                    })
                }, setDate: function (e, a) {
                    return this.each(function () {
                        if (t(this).data("datepickerId")) {
                            var s = t("#" + t(this).data("datepickerId")), o = s.data("datepicker");
                            if (o.date = e, o.date.constructor == String && (o.date = n(o.date, o.format), o.date.setHours(0, 0, 0, 0)), "single" != o.mode) if (o.date.constructor != Array) o.date = [o.date.valueOf()], "range" == o.mode && o.date.push(new Date(o.date[0]).setHours(23, 59, 59, 0).valueOf()); else {
                                for (var r = 0; r < o.date.length; r++) o.date[r] = n(o.date[r], o.format).setHours(0, 0, 0, 0).valueOf();
                                "range" == o.mode && (o.date[1] = new Date(o.date[1]).setHours(23, 59, 59, 0).valueOf())
                            } else o.date = o.date.valueOf();
                            a && (o.current = new Date("single" != o.mode ? o.date[0] : o.date)), i(s.get(0))
                        }
                    })
                }, getDate: function (e) {
                    if (this.size() > 0) return c(t("#" + t(this).data("datepickerId")).data("datepicker"))[e ? 0 : 1]
                }, clear: function () {
                    return this.each(function () {
                        if (t(this).data("datepickerId")) {
                            var e = t("#" + t(this).data("datepickerId")), a = e.data("datepicker");
                            "single" != a.mode && (a.date = [], i(e.get(0)))
                        }
                    })
                }, fixLayout: function () {
                    return this.each(function () {
                        if (t(this).data("datepickerId")) {
                            var e = t("#" + t(this).data("datepickerId")), a = e.data("datepicker");
                            a.flat && d(e.get(0))
                        }
                    })
                }
            }
        }();
        t.fn.extend({
            DatePicker: e.init,
            DatePickerHide: e.hidePicker,
            DatePickerShow: e.showPicker,
            DatePickerSetDate: e.setDate,
            DatePickerGetDate: e.getDate,
            DatePickerClear: e.clear,
            DatePickerLayout: e.fixLayout
        })
    }(jQuery), function () {
        var t = {};
        this.tmpl = function e(a, s) {
            var i = /\W/.test(a) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + a.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : t[a] = t[a] || e(document.getElementById(a).innerHTML);
            return s ? i(s) : i
        }
    }()
}), define("module/common/dateUtil", [], function (t, e, a) {
    function s(t) {
        var e = t ? new Date((+t)) : new Date;
        this.yyyy = e.getFullYear(), this.MM = e.getMonth() + 1, this.dd = e.getDate(), this.hh = e.getHours(), this.mm = e.getMinutes(), this.ss = e.getSeconds(), this.D = e.getDay()
    }

    s.prototype = {
        format: function (t) {
            var e = this, t = t || "yyyy-MM-dd";
            return t.replace(/y+|M+|d+|h+|m+|s+|D/g, function (t) {
                return e[t] > 9 ? e[t] : "0" + e[t]
            })
        }
    }, $.extend($, {
        date: function (t) {
            return t = t || new Date, new s((+t))
        }, toDate: function (t) {
            return $.date(t).format("yyyy-MM-dd")
        }, toDatetime: function (t) {
            return t ? $.date(t).format("yyyy-MM-dd hh:mm:ss") : ""
        }, totime: function (t) {
            return t ? $.date(t).format("MM月dd日hh:mm") : ""
        }
    })
}), define("plugIn/countdown/countdown", [], function (t, e, a) {
    $.fn.countdown = function (t, e) {
        var a = {
            ele: null,
            time: 60,
            interval: 1e3,
            format: "date",
            zero: !1,
            zeroShow: !0,
            timer: null,
            render: null,
            end: null,
            date: {day: 0, hour: 0, minute: 0, second: 0},
            dateText: {day: "天 ", hour: "时", minute: "分", second: "秒"}
        }, s = $.extend(!0, {}, a, t), i = $(this);
        s.ele = i, i.data("timer") && clearInterval(i.data("timer"));
        var n = s.format;
        if (s.end || (s.end = function () {
            clearInterval(s.timer)
        }), "number" === n) {
            s.date.second = s.zero && s.time < 10 ? "0" + s.time : s.time;
            var o = function (t) {
                "function" == typeof s.render ? s.render(s) : i.html(t)
            };
            o(s.time), s.timer = setInterval(function () {
                s.time > 0 ? (s.time--, s.date.second = s.zero && s.time < 10 ? "0" + s.time : s.time, o(s.time)) : (clearInterval(s.timer), s.end(s))
            }, s.interval)
        } else {
            var r = 86400, d = r / 24, l = d / 60, o = function (t) {
                var e = parseInt(t / r);
                s.date.day = e >= 0 ? s.zero && e < 10 ? "0" + e : e : "";
                var a = parseInt((t - e * r) / d);
                s.date.hour = a >= 0 ? s.zero && a < 10 ? "0" + a : a : "";
                var n = parseInt((t - e * r - a * d) / l);
                s.date.minute = n >= 0 ? s.zero && n < 10 ? "0" + n : n : "";
                var o = t - e * r - a * d - n * l;
                if (s.date.second = o >= 0 ? s.zero && o < 10 ? "0" + o : o : "", "function" == typeof s.render) s.render(s); else {
                    var c = "", p = s.date.day + s.dateText.day, h = s.date.hour + s.dateText.hour,
                        u = s.date.minute + s.dateText.minute, m = s.date.second + s.dateText.second;
                    c = s.zeroShow ? p + h + u + m : s.date.day > 0 ? p + h + u + m : s.date.hour > 0 ? h + u + m : s.date.minute > 0 ? u + m : m, i.html(c)
                }
            };
            o(s.time), s.timer = setInterval(function () {
                s.time > 0 ? (s.time--, o(s.time)) : (clearInterval(s.timer), s.end(s))
            }, s.interval)
        }
        return i.data("timer", s.timer), "function" == typeof e && e(i, s), s.timer
    }
}), define("module/eSignature/js/init", [], function (t, e, a) {
    function s() {
        $(document).on("click", ".e-signature #check-protocol", function () {
            return p.close(), $.Zebra_Dialog({
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
                    n()
                }
            }), !1
        }), $(document).on("click", ".e-signature #confirm-authorization", function () {
            $.ajax({
                type: "post", url: "/user/allowElectronicSign", success: function (t) {
                    if (p.close(), 1 == t.status) r(1); else {
                        if (0 == t.errorCode) return void(window.location.href = "/user/login");
                        r(0)
                    }
                }, error: function (t, e, a) {
                    r(0)
                }
            })
        })
    }

    function i() {
        s(), n()
    }

    function n() {
        p = $.Zebra_Dialog(d, {
            title: "提示",
            buttons: !1,
            custom_class: "ZebraDialogIframe eSignature",
            width: 480,
            overlay_close: !1,
            show_close_button: !1,
            keyboard: !1
        })
    }

    function o(t, e) {
        t ? u = setTimeout(function () {
            o(--t, e)
        }, 1e3) : (e.close(), clearTimeout(u))
    }

    function r(t) {
        var a = "", s = 0;
        1 == t ? (a = l, s = 3) : (a = c, s = 5), h = $.Zebra_Dialog(a, {
            title: "提示",
            buttons: !1,
            custom_class: "ZebraDialogIframe eSignature",
            width: 300,
            overlay_close: !1,
            show_close_button: !0,
            onClose: function () {
                clearTimeout(u), 0 == t ? n() : e.confirmAuthorize.onsuccess && e.confirmAuthorize.onsuccess()
            }
        }), o(s, h)
    }

    var d = "<div class='e-signature'><p>小牛在线电子签章功能已经上线，为了您的交易安全，请授权小牛在线使用您的电子签章。</p><p>详情可查看附件。</p><div class='protocol'>查看<a href='javascript:' id='check-protocol'>《电子签章授权委托书》</a></div><a href='javascript:' class='submit' id='confirm-authorization'>确认授权</a></div>",
        l = "<div class='e-signature result'><p>授权成功</p></div>",
        c = "<div class='e-signature result'><p>授权失败，请重试</p></div>", p = null, h = null, u = null;
    e.checkSignature = function () {
        window.global.isLogin && $.ajax({
            type: "post", url: "/user/existElectronicSign", success: function (t) {
                1 == t.status && (t.data || i())
            }, error: function (t, e, a) {
            }
        })
    }, e.confirmAuthorize = function () {
        i()
    }
}), define("module/getgg/main", ["//image.xiaoniu88.com/static/WebXn/dist/module/slide/slide-c083fae5c2.css", "../../module/slide/slide"], function (t, e, a) {
    return function (e) {
        function a(t, e) {
            if (!t || !e) return "";
            for (var a in e) t = t.replace("{{" + a + "}}", e[a]);
            return t
        }

        function s() {
            r.ajaxSend ? $.ajax({
                type: d.type, data: d.data, url: d.url + r.keys, beforeSend: function () {
                    "function" == typeof d.beforeSend && d.beforeSend()
                }, success: function (t) {
                    i(t)
                }, error: function (t, e, a) {
                    "function" == typeof d.error && d.error(t, e, a)
                }
            }) : r.data && i(r.data)
        }

        function i(t) {
            var e = {};
            if (t) {
                for (var s = 0, i = t.length; s < i; s++) {
                    var o = t[s];
                    if (o) {
                        var l = o.adPositionDTO;
                        if (l) {
                            var c = l.showType, p = l.hotKey, h = o.positionItemDTOList || [], u = h.length;
                            if (!(u <= 0)) {
                                e[p] = [];
                                var m = $.extend(!0, {}, r.template);
                                "string" != typeof m && (1 == c ? ("static" != p && "slide" != p || n("广告位代号冲突！"), m = m[p] || m["static"]) : 2 == c && (m = m[p] || m.slide)), 1 == c && (u = 1), m = a(m, l).replace("{{parentIndex}}", s);
                                for (var f = 0; f < u; f++) {
                                    var g = h[f], y = ($.trim(g.imagePath), $.trim(g.href));
                                    y && "#" != y || (y = "javascript:;"), function (t) {
                                        var s = a(m, g).replace("{{index}}", t).replace("{{mylink}}", y);
                                        e[p].push(s), t = null
                                    }(f)
                                }
                                if (o.listLength = u, r.keysElement && r.keysElement[p]) {
                                    var w = $(r.keysElement[p]);
                                    w[0] ? 1 == c ? w.html(r.parentTag[0] + e[p].join("") + r.parentTag[1]) : 2 == c && r.effects.slide(w, e[p], t) : n("error:--" + p + "--对应的元素--" + r.keysElement[p] + "--没找到！")
                                }
                                var v = r.callbacks;
                                v && v[p] && "function" == typeof v[p] && v[p](e[p], o)
                            }
                        }
                    }
                }
                d.success && d.success(e, t)
            } else n("error:广告位数据为空！")
        }

        function n(t) {
            console.log(t)
        }

        t("//image.xiaoniu88.com/static/WebXn/dist/module/slide/slide-c083fae5c2.css"), t("../../module/slide/slide");
        var o = {
            ajax: {
                url: "/common/query/position/ad/",
                type: "get",
                data: "",
                beforeSend: null,
                success: null,
                error: null
            },
            ajaxSend: !0,
            data: null,
            keys: "",
            keysElement: null,
            parentTag: ["", ""],
            template: {
                "static": "<a href='{{mylink}}' target='_blank'><img src='" + global.cdn + "{{imagePath}}' /></a>",
                slide: "<div class='slide-tab'><a href='{{mylink}}' target='_blank'><img src='" + global.cdn + "{{imagePath}}' /></a></div>",
                demoAdxx01: "<div>demo{{mylink}}</div>"
            },
            callbacks: null,
            effects: {
                slide: function (t, e, a) {
                    for (var s = ['<a class="slide-prev" href="javascript:;"></a>', '<div class="slide-box">' + e.join("") + "</div>", '<a class="slide-next" href="javascript:;"></a>', '<div class="slide-item">'], i = 0, o = e.length; i < o; i++) 0 == i ? s.push('<a class="slide-item-cur" href="javascript:;"></a>') : s.push('<a href="javascript:;"></a>');
                    s.push("</div>"), t.html(s.join("")), t.magicSlide ? t.magicSlide(this.slideOptions) : n("页面需要引入/module/slide组件")
                }, slideOptions: {}
            }
        }, r = $.extend(!0, {}, o, e), d = r.ajax;
        return r.keys ? void s() : void n("请配置相关参数！")
    }
}), define("module/slide/slide", [], function (t, e, a) {
    $.fn.magicSlide = function (t) {
        var e = $(this), a = window.navigator.userAgent, s = /Android|HTC/i.test(a), i = !s && /iPad/i.test(a),
            n = !s && /iPod|iPhone/i.test(a), o = i || n, r = null, d = document.createElement("div").style,
            l = function (t) {
                return t.replace(/^-ms-/, "ms-").replace(/-([a-z]|[0-9])/gi, function (t, e) {
                    return (e + "").toUpperCase()
                })
            }, c = function () {
                var t = d, e = ["-o-", "-webkit-", "-moz-", "-ms-", ""], a = 0;
                do if (l(e[a] + "transform") in t) return e[a]; while (++a < e.length);
                return ""
            }(), p = (function () {
                return {
                    "-o-": "otransitionend",
                    "-webkit-": "webkitTransitionEnd",
                    "-moz-": "transitionend",
                    "-ms-": "MSTransitionEnd transitionend",
                    "": "transitionend"
                }[c]
            }(), function (t) {
                var e = d, a = l(t), s = l(c + t);
                return a in e && a || s in e && s || ""
            }), h = {
                banSlide: function (t, e, a, i) {
                    function n() {
                        t++, t == h + 1 ? (t = 0, c(t)) : c(t), p(t), r = setTimeout(n, e)
                    }

                    function d(e) {
                        e.preventDefault(), a.element.slide.is(":animated") || (0 == t ? (t = h, c(t)) : (t--, c(t)), p(t))
                    }

                    function l(e) {
                        e.preventDefault(), a.element.slide.is(":animated") || (t == h ? (t = 0, c(t)) : (t++, c(t)), p(t))
                    }

                    function c(t) {
                        a.element.slide.hide().css({
                            opacity: .5,
                            zIndex: 0
                        }), a.element.slide.eq(t).show().stop(!0, !0).animate({
                            opacity: 1,
                            zIndex: 8
                        }, i), a.aniMation && (a.element.slide.removeClass("banAnimate"), a.element.slide.eq(t).addClass("banAnimate"))
                    }

                    function p(t) {
                        a.element.slideCur.removeClass(a.slideCurClass), a.element.slideCur.eq(t).addClass(a.slideCurClass)
                    }

                    clearTimeout(r);
                    var h = a.element.slide.length - 1;
                    if (r = setTimeout(n, e), a.element.slideCur.click(function () {
                        clearTimeout(r), a.element.slideCur.removeClass(a.slideCurClass), $(this).addClass(a.slideCurClass), t = $(this).index(), t <= h && c(t)
                    }), a.element.prev.click(d), a.element.next.click(l), o || s) {
                        var u, m = document.getElementById("touchMain"), f = {x: 0, y: 0};
                        m.addEventListener("touchstart", function (t) {
                            clearTimeout(r), f.x = t.changedTouches[0].pageX, f.y = t.changedTouches[0].pageY
                        }), m.addEventListener("touchend", function (t) {
                            var a = t.changedTouches[0].pageX - f.x;
                            t.changedTouches[0].pageY - f.y;
                            Math.abs(a) > 50 && (a > 0 ? d(t) : l(t)), r = setTimeout(n, e), u = null
                        }), m.addEventListener("touchmove", function (t) {
                            if (null == u) {
                                var e = t.changedTouches[0].pageX - f.x, a = t.changedTouches[0].pageY - f.y;
                                u = Math.abs(e - f.x) < Math.abs(a - f.y)
                            }
                            u || t.preventDefault()
                        })
                    } else a.element.stopAnimte.hover(function () {
                        clearTimeout(r)
                    }, function () {
                        r = setTimeout(n, e)
                    });
                    a.element.slide.eq(0).show().addClass("banAnimate")
                }, init: function (t, e) {
                    var a = {
                        slideCurClass: "slide-item-cur",
                        time: 3e3,
                        speed: 500,
                        element: {
                            stopAnimte: ".slide-tab,.slide-prev,.slide-next,.slide-item",
                            prev: ".slide-prev",
                            next: ".slide-next",
                            slide: ".slide-tab",
                            slideCur: ".slide-item a"
                        },
                        dom: {
                            wrapper: '<div class="slide-main"></div>',
                            prev: '<a class="slide-prev" href="javascript:;"></a>',
                            next: '<a class="slide-next" href="javascript:;"></a>',
                            contentWrapper: '<div class="slide-box"></div>',
                            contentItem: '<div class="slide-tab"></div>'
                        },
                        data: null,
                        render: null
                    }, s = $.extend(!0, {}, a, t);
                    s.render && "function" == typeof s.render && e.html(s.render(s, data)), e.css({position: "relative"}), s.aniMation = p("animation");
                    for (var i in s.element) "slideCurClass" != i && "aniMation" != i && (s.element[i] = e.find(s.element[i]));
                    h.banSlide(0, s.time, s, s.speed)
                }
            };
        h.init(t, e)
    }
}), define("product/deposit/common/dialog_deposit", [], function (t, e, a) {
    a.exports = function (t) {
        var e = '<div class="deposit-top"> <img src="//image.xiaoniu88.com/static/WebXn/dist/images/deposit/icon-top-c0eef0de9a.png"> <p>' + (t.content || t.title) + '</p></div><div class="deposit-icons g-cf"> <p class="g-fl">资金有保障</p> <p class="g-fr">投标更安全</p></div><div class="deposit-buttons"> <a class="js_btn" href="' + (t.btnUrl || "javascrit:void(0)") + '">' + t.btnText + '</a></div><div class="deposit-bottom"></div>';
        return e
    }
}), define("account/index/tpl/recommend-list", [], function (t, e, a) {
    a.exports = function (t) {
        function e(t, e) {
            var a, s, i = t || [], n = i.length, o = 0, r = e || 2, d = "";
            if (!n) return "";
            for (var l = 0; l < n; l++) if (a = i[l], a && a.platform.indexOf("pc") != -1 && a.titleListPage && (s = [' <span class="label js_poshytip" style="color:', a.positionFontColour, ";background:", a.positionColour, ';" title="', a.remark, '">', a.titleListPage, "</span>"].join(""), o += 1, d += s, o >= r)) return d;
            return d
        }

        var a = "", s = t || [], i = s.length, n = "小牛在线P2P互联网金融平台所有项目参考利率是在参考同类型工具历史数据得出，<br>并不代表实际收益，市场有风险，出借需谨慎。",
            o = {1: "天", 2: "个月", 3: "年"};
        if (i) {
            a += ' <h2>热门推荐</h2> <div class="product-list"> ';
            var r = s;
            if (r) for (var d, l = -1, c = r.length - 1; l < c;) d = r[l += 1], a += " ", d && l < 3 && (a += ' <a class="product ' + (20 == d.productStatus && d.leftAmount > 0 ? "enable" : "") + '" href="' + ("/product/bid/detail/" + d.productId + "?specialArea=" + d.specialArea + "&productType=" + d.productType || "") + '"> <div class="label-content">' + e(d.markResultDTOs) + '</div> <p class="p1"><big>' + (d.annualRate || 0).toFixed(2) + "</big>%" + (d.templetAddRate && d.templetAddRate > 0 ? '<span class="add-rate">+' + (d.templetAddRate || 0).toFixed(2) + "%<i>限时</i></span>" : "") + '</p> <p class="p2">参考利率<i class="icon-question js_poshytip" title="' + n + '"></i></p> <p class="p3"><big>' + (d.productTerm || "--") + "</big>" + o[d.termMode] + '</p> <p class="p4">锁定期 | ', d.canTransfer && (a += "" + (d.lockTerm + (o[d.lockTermMode] || "--"))), a += "持满自动转让</p> ", a += 10 == d.productStatus && d.countDownSecond > 0 ? ' <em class="countdown disabled" data-id="' + d.productId + '" data-conutdown="' + d.countDownSecond + '"></em> ' : 20 == d.productStatus && d.leftAmount > 0 ? ' <span class="btn">立即加入</span> ' : ' <span class="btn disabled">已售罄</span> ', a += " </a> "), a += " ";
            a += " </div> "
        }
        return a
    }
});