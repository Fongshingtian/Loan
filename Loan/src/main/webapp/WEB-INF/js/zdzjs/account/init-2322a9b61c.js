define("module/userNavList/js/init", ["../../../plugIn/poshytip-1.2/src/jquery.poshytip", "../../../module/dosign/dosign", "../../../user/estimate/js/init"], function (e, t, i) {
    function s(e) {
        var t = 5 == e.memberLevel ? "钻石会员" : 4 == e.memberLevel ? "黑金会员" : 3 == e.memberLevel ? "白金会员" : 2 == e.memberLevel ? "黄金会员" : 1 == e.memberLevel ? "白银会员" : "普通会员",
            i = e.userSecurityLevel < 60 ? "低" : 60 <= e.userSecurityLevel && e.userSecurityLevel < 80 ? "中" : e.userSecurityLevel >= 80 ? "高" : "",
            s = 100 != e.userSecurityLevel ? '<a href="/user/uasec">{提升}</a>' : "",
            n = e.signToday ? '<a class="signin-btn already-signIn signOut" href="javascript:;" data-url="${siteroot}/MyAccount/bonus/point/dosign">已连续签到' + (e.signSeq ? e.signSeq : "--") + "天</a>" : '<a class="signin-btn signIn" href="javascript:;" data-url="${siteroot}/MyAccount/bonus/point/dosign">签到领积分</a>';
        $("#username").html(e.realName ? e.realName : e.userName ? e.userName : "**"), $("#member-level").html(t).addClass("member-level-" + e.memberLevel), $("#security-level").html(i + s), e.riskLevel ? $("#riskLevel-info").html("风险评估：" + e.riskLevel + '<a class="startAssess" href="javascript:;" target="_blank">【重新测评】</a>') : $("#riskLevel-info").html('风险评估：<a class="startAssess" href="javascript:;" target="_blank">【风险测评】</a>'), e.realNameAuth ? $("#badge-realname").addClass("enable").attr("title", "已实名登记") : $("#badge-realname").attr("title", '您尚未进行实名登记<br><a href="/payment/deposit/apply" target="_blank">马上认证 </a>'), e.bankCardCount >= 1 ? $("#badge-bindcard").addClass("enable").attr("title", "已绑卡") : $("#badge-bindcard").attr("title", '您可以去充值投标啦，请在提现前绑定银行卡<br><a href="/payment/bankcard/index" target="_blank">马上绑卡</a>'), $("#badge-planner").attr("title", "您是" + e.userPlannerRole + '<br><a href="/financier/overview" target="_blank">查看邀请好友规则</a>'), $("#point-info").html(e.pointBalance || 0 == e.pointBalance ? e.pointBalance : "***"), $("#sign-info").html(n), $(".pop-tip").poshytip({
            alignTo: "target",
            alignX: "inner-left",
            alignY: "bottom",
            offsetX: 0,
            offsetY: 8
        }), $(".startAssess").click(function () {
            function e() {
                window.location.reload()
            }

            a.buildWindow(!1, "/user", e)
        }), e.accountPageTips || r('“限时奖励/增利券/返现红包”等平台待收奖励调整到“网贷 > 待收利息及奖励”<br>投标中的参考利息及奖励不计入总资产（<span style="color:red;">已计入总资产的奖励升级后会暂时扣除此部分金额</span>），开始计息后方计入总资产', {
            title: "总资产计算调整",
            btnText: "知道了",
            iconStyle: "",
            hideClose: !0
        })
    }

    function n() {
        $.ajax({
            type: "get", url: "/MyAccount/account/base/info", success: function (e) {
                if (1 == e.status) {
                    var e = e.data || {};
                    s(e)
                }
            }
        })
    }

    function o(e) {
        $.ajax({
            type: "get", url: "/common/query/position/ad/" + e, success: function (e) {
                for (var t = e || [], i = 0, s = t.length; i < s; i++) for (var n = t[i] || {}, o = n.adPositionDTO || {}, a = n.positionItemDTOList || {}, r = o.width, l = o.height, d = (o.showType, o.hotKey), p = $(".account-list").find("div[data-key=" + d + "]"), c = 0, u = a.length; c < u; c++) {
                    var h = a[c] || {};
                    titile = a[c].titile, p.append('<img width="' + r + 'px" height="' + l + 'px" src="//image.xiaoniu88.com/' + h.imagePath + '" />'), "zhqq01" === d && $("#zhqq-txt").html(titile)
                }
            }, error: function (e) {
                console.log(e)
            }
        })
    }

    e("../../../plugIn/poshytip-1.2/src/jquery.poshytip"), e("../../../module/dosign/dosign");
    var a = e("../../../user/estimate/js/init"), r = $.util.alertInfo;
    $(".parent").hover(function () {
        var e = $(this);
        e.addClass("next"), e.find(".second").css("display", "block")
    }, function () {
        var e = $(this);
        e.removeClass("next"), e.find(".second").removeAttr("style")
    });
    var l = {advertisingKeys1: "kfh01", advertisingKeys2: "zhqq01"};
    if ($("#userNavList").length > 0) {
        var d = $("#userNavList"), p = d.val();
        $("ul.left-menu>li[data-type='" + p + "']").addClass("cur")
    }
    if ($(".account-list").length) {
        var c = location.protocol + "//" + location.host;
        $(".weixin-icon i ,.qqun-icon i").hover(function () {
            $(this).siblings("img").css({display: "inline-block"}).animate({
                width: "94px",
                height: "94px"
            }, 150, "linear")
        }, function () {
            $(this).siblings("img").animate({width: "0", height: "0"}, 150, "linear", function () {
                $(this).css({display: "none"})
            })
        }), $.getJSON(c + "/crossproxy/qqgroup/type", {}, function (e) {
            var t = $(".qqun"), i = t.find(".q1"), s = t.find(".q2");
            if (0 == e.status) {
                switch (e.data) {
                    case"2":
                        s.removeClass("g-dn");
                        break;
                    case"1":
                        i.removeClass("g-dn")
                }
                t.removeClass("g-dn")
            }
        }, "jsonp"), $.ajax({
            type: "get", url: "/MyAccount/user/tips/info", success: function (e) {
                1 == e.status && (e.data.msg > 0 && $("#msg-count").html("(" + e.data.msg + ")"), e.data.bonus > 0 && $("#bonus-count").html("(" + e.data.bonus + ")"))
            }
        })
    }
    o(l.advertisingKeys1), n()
}), define("plugIn/poshytip-1.2/src/jquery.poshytip", [], function (e, t, i) {
    !function (e) {
        function t() {
            e.each(i, function () {
                this.refresh(!0)
            })
        }

        var i = [], s = /^url\(["']?([^"'\)]*)["']?\);?$/i, n = /\.png$/i,
            o = !!window.createPopup && "undefined" == document.documentElement.currentStyle.minWidth;
        e(window).resize(t), e.Poshytip = function (t, i) {
            this.$elm = e(t), this.opts = e.extend({}, e.fn.poshytip.defaults, i), this.$tip = e(['<div class="', this.opts.className, '">', '<div class="tip-inner tip-bg-image"></div>', '<div class="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"></div>', "</div>"].join("")).appendTo(document.body), this.$arrow = this.$tip.find("div.tip-arrow"), this.$inner = this.$tip.find("div.tip-inner"), this.disabled = !1, this.content = null, this.init()
        }, e.Poshytip.prototype = {
            init: function () {
                i.push(this);
                var t = this.$elm.attr("title");
                if (this.$elm.data("title.poshytip", void 0 !== t ? t : null).data("poshytip", this), "none" != this.opts.showOn) switch (this.$elm.bind({
                    "mouseenter.poshytip": e.proxy(this.mouseenter, this),
                    "mouseleave.poshytip": e.proxy(this.mouseleave, this)
                }), this.opts.showOn) {
                    case"hover":
                        "cursor" == this.opts.alignTo && this.$elm.bind("mousemove.poshytip", e.proxy(this.mousemove, this)), this.opts.allowTipHover && this.$tip.hover(e.proxy(this.clearTimeouts, this), e.proxy(this.mouseleave, this));
                        break;
                    case"focus":
                        this.$elm.bind({
                            "focus.poshytip": e.proxy(this.showDelayed, this),
                            "blur.poshytip": e.proxy(this.hideDelayed, this)
                        })
                }
            }, mouseenter: function (e) {
                return !!this.disabled || (this.$elm.attr("title", ""), "focus" == this.opts.showOn || void this.showDelayed())
            }, mouseleave: function (e) {
                if (this.disabled || this.asyncAnimating && (this.$tip[0] === e.relatedTarget || jQuery.contains(this.$tip[0], e.relatedTarget))) return !0;
                if (!this.$tip.data("active")) {
                    var t = this.$elm.data("title.poshytip");
                    null !== t && this.$elm.attr("title", t)
                }
                return "focus" == this.opts.showOn || void this.hideDelayed()
            }, mousemove: function (e) {
                return !!this.disabled || (this.eventX = e.pageX, this.eventY = e.pageY, void(this.opts.followCursor && this.$tip.data("active") && (this.calcPos(), this.$tip.css({
                    left: this.pos.l,
                    top: this.pos.t
                }), this.pos.arrow && (this.$arrow[0].className = "tip-arrow tip-arrow-" + this.pos.arrow))))
            }, show: function () {
                this.disabled || this.$tip.data("active") || (this.reset(), this.update(), this.content && (this.display(), this.opts.timeOnScreen && this.hideDelayed(this.opts.timeOnScreen)))
            }, showDelayed: function (t) {
                this.clearTimeouts(), this.showTimeout = setTimeout(e.proxy(this.show, this), "number" == typeof t ? t : this.opts.showTimeout)
            }, hide: function () {
                !this.disabled && this.$tip.data("active") && this.display(!0)
            }, hideDelayed: function (t) {
                this.clearTimeouts(), this.hideTimeout = setTimeout(e.proxy(this.hide, this), "number" == typeof t ? t : this.opts.hideTimeout)
            }, reset: function () {
                this.$tip.queue([]).detach().css("visibility", "hidden").data("active", !1), this.$inner.find("*").poshytip("hide"), this.opts.fade && this.$tip.css("opacity", this.opacity), this.$arrow[0].className = "tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left", this.asyncAnimating = !1
            }, update: function (e, t) {
                if (!this.disabled) {
                    var i = void 0 !== e;
                    if (i) {
                        if (t || (this.opts.content = e), !this.$tip.data("active")) return
                    } else e = this.opts.content;
                    var s = this, n = "function" == typeof e ? e.call(this.$elm[0], function (e) {
                        s.update(e)
                    }) : "[title]" == e ? this.$elm.data("title.poshytip") : e;
                    this.content !== n && (this.$inner.empty().append(n), this.content = n), this.refresh(i)
                }
            }, refresh: function (t) {
                if (!this.disabled) {
                    if (t) {
                        if (!this.$tip.data("active")) return;
                        var i = {left: this.$tip.css("left"), top: this.$tip.css("top")}
                    }
                    this.$tip.css({
                        left: 0,
                        top: 0
                    }).appendTo(document.body), void 0 === this.opacity && (this.opacity = this.$tip.css("opacity"));
                    var a = this.$tip.css("background-image").match(s),
                        r = this.$arrow.css("background-image").match(s);
                    if (a) {
                        var l = n.test(a[1]);
                        o && l ? (this.$tip.css("background-image", "none"), this.$inner.css({
                            margin: 0,
                            border: 0,
                            padding: 0
                        }), a = l = !1) : this.$tip.prepend('<table class="tip-table" border="0" cellpadding="0" cellspacing="0"><tr><td class="tip-top tip-bg-image" colspan="2"><span></span></td><td class="tip-right tip-bg-image" rowspan="2"><span></span></td></tr><tr><td class="tip-left tip-bg-image" rowspan="2"><span></span></td><td></td></tr><tr><td class="tip-bottom tip-bg-image" colspan="2"><span></span></td></tr></table>').css({
                            border: 0,
                            padding: 0,
                            "background-image": "none",
                            "background-color": "transparent"
                        }).find(".tip-bg-image").css("background-image", 'url("' + a[1] + '")').end().find("td").eq(3).append(this.$inner), l && !e.support.opacity && (this.opts.fade = !1)
                    }
                    r && !e.support.opacity && (o && n.test(r[1]) && (r = !1, this.$arrow.css("background-image", "none")), this.opts.fade = !1);
                    var d = this.$tip.find("> table.tip-table");
                    if (o) {
                        this.$tip[0].style.width = "", d.width("auto").find("td").eq(3).width("auto");
                        var p = this.$tip.width(), c = parseInt(this.$tip.css("min-width")),
                            u = parseInt(this.$tip.css("max-width"));
                        !isNaN(c) && p < c ? p = c : !isNaN(u) && p > u && (p = u), this.$tip.add(d).width(p).eq(0).find("td").eq(3).width("100%")
                    } else d[0] && d.width("auto").find("td").eq(3).width("auto").end().end().width(document.defaultView && document.defaultView.getComputedStyle && parseFloat(document.defaultView.getComputedStyle(this.$tip[0], null).width) || this.$tip.width()).find("td").eq(3).width("100%");
                    if (this.tipOuterW = this.$tip.outerWidth(), this.tipOuterH = this.$tip.outerHeight(), this.calcPos(), r && this.pos.arrow && (this.$arrow[0].className = "tip-arrow tip-arrow-" + this.pos.arrow, this.$arrow.css("visibility", "inherit")), t && this.opts.refreshAniDuration) {
                        this.asyncAnimating = !0;
                        var h = this;
                        this.$tip.css(i).animate({
                            left: this.pos.l,
                            top: this.pos.t
                        }, this.opts.refreshAniDuration, function () {
                            h.asyncAnimating = !1
                        })
                    } else this.$tip.css({left: this.pos.l, top: this.pos.t})
                }
            }, display: function (t) {
                var i = this.$tip.data("active");
                if (!(i && !t || !i && t)) {
                    if (this.$tip.stop(), (this.opts.slide && this.pos.arrow || this.opts.fade) && (t && this.opts.hideAniDuration || !t && this.opts.showAniDuration)) {
                        var s = {}, n = {};
                        if (this.opts.slide && this.pos.arrow) {
                            var o, a;
                            "bottom" == this.pos.arrow || "top" == this.pos.arrow ? (o = "top", a = "bottom") : (o = "left", a = "right");
                            var r = parseInt(this.$tip.css(o));
                            s[o] = r + (t ? 0 : this.pos.arrow == a ? -this.opts.slideOffset : this.opts.slideOffset), n[o] = r + (t ? this.pos.arrow == a ? this.opts.slideOffset : -this.opts.slideOffset : 0) + "px"
                        }
                        this.opts.fade && (s.opacity = t ? this.$tip.css("opacity") : 0, n.opacity = t ? 0 : this.opacity), this.$tip.css(s).animate(n, this.opts[t ? "hideAniDuration" : "showAniDuration"])
                    }
                    if (t ? this.$tip.queue(e.proxy(this.reset, this)) : this.$tip.css("visibility", "inherit"), i) {
                        var l = this.$elm.data("title.poshytip");
                        null !== l && this.$elm.attr("title", l)
                    }
                    this.$tip.data("active", !i)
                }
            }, disable: function () {
                this.reset(), this.disabled = !0
            }, enable: function () {
                this.disabled = !1
            }, destroy: function () {
                this.reset(), this.$tip.remove(), delete this.$tip, this.content = null, this.$elm.unbind(".poshytip").removeData("title.poshytip").removeData("poshytip"), i.splice(e.inArray(this, i), 1)
            }, clearTimeouts: function () {
                this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = 0), this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0)
            }, calcPos: function () {
                var t, i, s, n, o, a, r = {l: 0, t: 0, arrow: ""}, l = e(window),
                    d = {l: l.scrollLeft(), t: l.scrollTop(), w: l.width(), h: l.height()};
                if ("cursor" == this.opts.alignTo) t = i = s = this.eventX, n = o = a = this.eventY; else {
                    var p = this.$elm.offset(),
                        c = {l: p.left, t: p.top, w: this.$elm.outerWidth(), h: this.$elm.outerHeight()};
                    t = c.l + ("inner-right" != this.opts.alignX ? 0 : c.w), i = t + Math.floor(c.w / 2), s = t + ("inner-left" != this.opts.alignX ? c.w : 0), n = c.t + ("inner-bottom" != this.opts.alignY ? 0 : c.h), o = n + Math.floor(c.h / 2), a = n + ("inner-top" != this.opts.alignY ? c.h : 0)
                }
                switch (this.opts.alignX) {
                    case"right":
                    case"inner-left":
                        r.l = s + this.opts.offsetX, this.opts.keepInViewport && r.l + this.tipOuterW > d.l + d.w && (r.l = d.l + d.w - this.tipOuterW), "right" != this.opts.alignX && "center" != this.opts.alignY || (r.arrow = "left");
                        break;
                    case"center":
                        r.l = i - Math.floor(this.tipOuterW / 2), this.opts.keepInViewport && (r.l + this.tipOuterW > d.l + d.w ? r.l = d.l + d.w - this.tipOuterW : r.l < d.l && (r.l = d.l));
                        break;
                    default:
                        r.l = t - this.tipOuterW - this.opts.offsetX, this.opts.keepInViewport && r.l < d.l && (r.l = d.l), "left" != this.opts.alignX && "center" != this.opts.alignY || (r.arrow = "right")
                }
                switch (this.opts.alignY) {
                    case"bottom":
                    case"inner-top":
                        r.t = a + this.opts.offsetY, r.arrow && "cursor" != this.opts.alignTo || (r.arrow = "top"), this.opts.keepInViewport && r.t + this.tipOuterH > d.t + d.h && (r.t = n - this.tipOuterH - this.opts.offsetY, "top" == r.arrow && (r.arrow = "bottom"));
                        break;
                    case"center":
                        r.t = o - Math.floor(this.tipOuterH / 2), this.opts.keepInViewport && (r.t + this.tipOuterH > d.t + d.h ? r.t = d.t + d.h - this.tipOuterH : r.t < d.t && (r.t = d.t));
                        break;
                    default:
                        r.t = n - this.tipOuterH - this.opts.offsetY, r.arrow && "cursor" != this.opts.alignTo || (r.arrow = "bottom"), this.opts.keepInViewport && r.t < d.t && (r.t = a + this.opts.offsetY, "bottom" == r.arrow && (r.arrow = "top"))
                }
                this.pos = r
            }
        }, e.fn.poshytip = function (t) {
            if ("string" == typeof t) {
                var i = arguments, s = t;
                return Array.prototype.shift.call(i), "destroy" == s && (this.die ? this.die("mouseenter.poshytip").die("focus.poshytip") : e(document).undelegate(this.selector, "mouseenter.poshytip").undelegate(this.selector, "focus.poshytip")), this.each(function () {
                    var t = e(this).data("poshytip");
                    t && t[s] && t[s].apply(t, i)
                })
            }
            var n = e.extend({}, e.fn.poshytip.defaults, t);
            if (e("#poshytip-css-" + n.className)[0] || e(['<style id="poshytip-css-', n.className, '" type="text/css">', "div.", n.className, "{visibility:hidden;position:absolute;top:0;left:0;}", "div.", n.className, " table.tip-table, div.", n.className, " table.tip-table td{margin:0;font-family:inherit;font-size:inherit;font-weight:inherit;font-style:inherit;font-variant:inherit;vertical-align:middle;}", "div.", n.className, " td.tip-bg-image span{display:block;font:1px/1px sans-serif;height:", n.bgImageFrameSize, "px;width:", n.bgImageFrameSize, "px;overflow:hidden;}", "div.", n.className, " td.tip-right{background-position:100% 0;}", "div.", n.className, " td.tip-bottom{background-position:100% 100%;}", "div.", n.className, " td.tip-left{background-position:0 100%;}", "div.", n.className, " div.tip-inner{background-position:-", n.bgImageFrameSize, "px -", n.bgImageFrameSize, "px;}", "div.", n.className, " div.tip-arrow{visibility:hidden;position:absolute;overflow:hidden;font:1px/1px sans-serif;}", "</style>"].join("")).appendTo("head"), n.liveEvents && "none" != n.showOn) {
                var o, a = e.extend({}, n, {liveEvents: !1});
                switch (n.showOn) {
                    case"hover":
                        o = function () {
                            var t = e(this);
                            t.data("poshytip") || t.poshytip(a).poshytip("mouseenter")
                        }, this.live ? this.live("mouseenter.poshytip", o) : e(document).delegate(this.selector, "mouseenter.poshytip", o);
                        break;
                    case"focus":
                        o = function () {
                            var t = e(this);
                            t.data("poshytip") || t.poshytip(a).poshytip("showDelayed")
                        }, this.live ? this.live("focus.poshytip", o) : e(document).delegate(this.selector, "focus.poshytip", o)
                }
                return this
            }
            return this.each(function () {
                new e.Poshytip(this, n)
            })
        }, e.fn.poshytip.defaults = {
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
}), define("module/dosign/dosign", ["../swiper2/idangerous.swiper"], function (e, t, i) {
    function s() {
        $(document).on("click", ".signIn", function () {
            return !u && ($.ajax({
                type: "POST", url: l, data: {period: ""}, success: function (e, t, i) {
                    1 == e.status ? (u = !0, h.updateData(e.data), e.data.hasGift && o(e.data.gifts), g.init(e.data.last2MonthSign)) : (u = !1, $.util.alertInfo(e.errorDetails || "签到失败"))
                }
            }), void(u = !0))
        }), $(document).on("click", ".signOut", function () {
            !u && f(), $("#pop-sign").css("display", "block")
        }), $.ajax({
            type: "get", url: "/common/query/position/ad/NRQQD", success: function (e) {
                var e = e || [];
                if (e.length && e[0]) {
                    var t = e[0].positionItemDTOList || [];
                    if (t[0] && t[0].imagePath && t[0].href) {
                        var i = '<img src="//image.xiaoniu88.com' + t[0].imagePath + '">';
                        $("#sign-ad").html(i), $("#sign-ad").attr("href", t[0].href), $("#sign-ad").css("display", "block")
                    }
                }
            }, error: function (e) {
                console.log(e)
            }
        });
        var e = document.createElement("DIV");
        e.className = "pop-sign", e.id = "pop-sign", e.style.display = "none", e.innerHTML = ' <div class="blackbg"></div><div class="inner"><a href="javascript:void(0);" class="btn-close">&times;</a><div class="header-normal"> <p></p><div class="score-con"><h3 class="score">--</h3><p>积分</p></div><p class="tips js-double-result">--</p><p class="tips js-lack-days">再连续签到<span>--</span>天可获得神秘礼品哦！<i class="icon icon-tips js-rule-tips"></i></p></div><div class="operate-con"><div class="date-con" id="date-con"><div class="scroll-con swiper-wrapper"><ul class="swiper-slide"></ul><ul class="swiper-slide"></ul></div></div><p class="pagination"></p><p class="tips">小牛锦囊：不小心忘记签到，点击对应日期即可补签哦！</p></div><a href="javascript:void(0);" class="advertisement" id="sign-ad" target="_blank" style="display:none"></a></div>';
        var t = document.createElement("DIV");
        t.className = "pop-sign-reward", t.id = "pop-sign-reward", t.style.display = "none", t.innerHTML = '<div class="blackbg"></div><div class="inner"><a href="javasctipr:void(0);" class="btn-close">&times;</a><h3>恭喜你！获得<span>--</span>个奖品</h3><div class="reward-con" id="reward-con"><ul  class="swiper-wrapper"></ul></div><a href="javascript:void(0);" class="btn btn-left" style="display:none">&lt;</a><a href="javascript:void(0);" class="btn btn-right"style="display:none">&gt;</a></div>', document.body.appendChild(e), document.body.appendChild(t), a()
    }

    function n(e) {
        $.ajax({
            type: "POST", url: l, data: {period: e}, success: function (e, t, i) {
                1 == e.status ? (h.updateData(e.data), e.data.hasGift ? o(e.data.gifts) : $.toast.tip("补签成功"), g.update(e.data.last2MonthSign)) : ($.util.alertInfo(e.errorDetails || "补签失败"), f())
            }
        })
    }

    function o(e) {
        var t, i = "", s = e.length, n = {1: 0, 2: 1, 5: 2, 6: 3};
        $("#pop-sign-reward h3 span").html(s), s > 1 && $(".pop-sign-reward .btn-right").css("display", "block");
        for (var o = 0; o < e.length; o++) t = n[e[o].giftCategory], i = i + '<li class="swiper-slide swiper-no-swiping"><div class="img-con"><img src="' + e[o].giftImg + '" ></div><p>' + e[o].giftName + "</p>" + (1 == e[o].giftType && '<a href="https://www.xiaoniu88.com/activity/pointmall/mein/index" target="_blank" class="btn btn-adress">填写地址</a>' || '<a href="https://www.xiaoniu88.com/bonus/index?tab=' + t + '" target="_blank" class="btn btn-adress">去看看</a>') + "</li>";
        $("#reward-con ul").html(i), $(".pop-sign-reward .btn-left").css("display", "none");
        var a = new r("#reward-con", {
            noSwiping: !0, onSlideNext: function (e) {
                e.activeIndex == s - 1 && $(".pop-sign-reward .btn-right").css("display", "none"), $(".pop-sign-reward .btn-left").css("display", "block")
            }, onSlidePrev: function (e) {
                0 == e.activeIndex && $(".pop-sign-reward .btn-left").css("display", "none"), $(".pop-sign-reward .btn-right").css("display", "block")
            }
        });
        $(".pop-sign-reward .btn-left").click(function () {
            a.swipePrev()
        }), $(".pop-sign-reward .btn-right").click(function () {
            a.swipeNext()
        }), $("#pop-sign-reward").css("display", "block")
    }

    function a() {
        $("#pop-sign .btn-close").click(function () {
            $("#pop-sign").css("display", "none")
        }), $("#pop-sign-reward .btn-close").click(function () {
            $("#pop-sign-reward").css("display", "none")
        }), $("#date-con").on("click", ".tobe", function () {
            var e = $(this).attr("data-date");
            this.className.indexOf("canTobe") != -1 ? h.data.pointBalance < h.data.patchSignPoint ? $.util.alertInfo("投标三个月及以上的散标、优享牛可以获得积分哦！", {
                title: "积分不足，不能补签哦！",
                btnText: "获取更多积分",
                iconStyle: "",
                hideClose: !1,
                callback: function () {
                    window.location.href = "https://www.xiaoniu88.com/product/portal/index"
                }
            }) : $.util.alertInfo("消耗" + h.data.patchSignPoint + "积分，即可补签1天哦！", {
                btnText: "立即补签",
                hideClose: !1,
                callback: function () {
                    n(e)
                }
            }) : $.util.alertInfo("只能从最近一天补签", {btnText: "确定", hideClose: !1})
        }), $("#pop-sign .js-rule-tips").click(function () {
            $.util.alertInfo("1.每连续签到" + h.data.rewards.join("、") + "天可获得神秘礼品；<br>2.漏签可通过消耗积分补签；<br>3.仅可补签过去最近" + h.data.maxPatchDays + "天的日期，补签需从最近一个漏签日补起，补齐天数则可获取神秘礼品。<br>4、连续签到奖品可在“我的宝贝”查看。", {
                title: "签到规则",
                btnText: "知道了",
                hideClose: !1
            })
        }), $("#pop-sign .score-con").click(function () {
            h.data.point && !h.data.increPoint && e()
        });
        var e = function () {
            var e = 1;
            return function () {
                return !(e > 1) && ($.ajax({
                    type: "POST", url: d, success: function (t, i, s) {
                        1 == t.status ? h.updateData(t.data) : ($.util.alertInfo(t.errorDetails || "翻倍失败！请重新操作"), e = 1, f())
                    }
                }), void e++)
            }
        }()
    }

    var r = e("../swiper2/idangerous.swiper"), l = "/bonus/point/dosign", d = "/bonus/point/increPointDosign",
        p = "/bonus/point/index.json", c = location.pathname.indexOf("/pointmall/") > -1, u = !1, h = {
            data: {
                patchSignPoint: "",
                lackDaysForGift: "",
                maxPatchDays: "",
                pointBalance: "",
                rewards: [],
                signSeq: "",
                point: "",
                increPoint: ""
            }, updateData: function (e) {
                for (var t in e) e[t] && (this.data[t] = e[t]);
                this.updateStatus()
            }, updateStatus: function () {
                c ? ($(".signIn").replaceWith('<a href="javascript:;" class="signOut">已连续签到' + this.data.signSeq + "天</a>"), $('[name="pointBalance"]').text(this.data.pointBalance)) : ($(".signIn").addClass("already-signIn signOut").removeClass("signIn").text("已连续签到" + this.data.signSeq + "天"), $('[data-bind="pointBalance"]').text(this.data.pointBalance)), $(".signOut").html("已连续签到" + this.data.signSeq + "天"), $("#pop-sign .js-lack-days span").html(this.data.lackDaysForGift), $("#pop-sign .score-con h3").html(this.data.point), 1 == this.data.increPoint ? $("#pop-sign .js-double-result").html("翻得1倍积分，再接再厉哦") : this.data.increPoint > 1 ? $("#pop-sign .js-double-result").html("好手气，翻得" + this.data.increPoint + "倍积分！") : $("#pop-sign .js-double-result").html("点击可翻倍")
            }
        };
    s();
    var f = function () {
        $.ajax({
            type: "get", url: p, success: function (e, t, i) {
                u = !0, h.updateData(e.userPoint), g.init(e.userPoint.last2MonthSign)
            }
        })
    }, g = {
        monthLast: "", monthThis: "", init: function (e) {
            this.update(e, function () {
                $("#pop-sign").css("visibility", "hidden"), $("#pop-sign").css("display", "block"), $("#pop-sign").css("visibility", "visible")
            });
            var t = new r("#date-con", {cssWidthAndHeight: !0, pagination: ".pagination", paginationClickable: !0});
            t.swipeTo(1, 1, !1)
        }, update: function (e, t) {
            for (var i, s = (this.monthLast, this.monthThis, function (e, t) {
                var i, s;
                return 2 == e.highlight ? (i = "status-gray tobe canTobe", s = "补") : 1 == e.highlight ? 0 == e.signStatus || 1 == e.signStatus ? (i = "status-highlight", s = '<i class="icon icon-ok"></i>') : (i = "status-emptylight", s = t) : 0 == e.highlight ? (i = "status-gray tobe", s = "补") : (i = "status-gray", s = 0 == e.signStatus || 1 == e.signStatus ? '<i class="icon icon-ok"></i>' : t), '<li class="' + i + '" data-date="' + e.period + '">' + s + "</li>"
            }), n = "", o = e[0].period.split("-")[1], a = 0; a < e.length; a++) i = e[a].period.split("-"), o == i[1] ? n += s(e[a], Number(i[2])) : ($("#date-con ul").eq(0).html(n), o = i[1], n = s(e[a], Number(i[2])));
            $("#date-con ul").eq(1).html(n), t && t()
        }
    }
}), define("module/swiper2/idangerous.swiper", [], function (e, t, i) {
    var s = function (e, t) {
        "use strict";

        function i(e, t) {
            return document.querySelectorAll ? (t || document).querySelectorAll(e) : jQuery(e, t)
        }

        function s(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        }

        function n() {
            var e = I - O;
            return t.freeMode && (e = I - O), t.slidesPerView > E.slides.length && !t.centeredSlides && (e = 0), e < 0 && (e = 0), e
        }

        function o() {
            function e(e) {
                var i, s, n = function () {
                    "undefined" != typeof E && null !== E && (void 0 !== E.imagesLoaded && E.imagesLoaded++, E.imagesLoaded === E.imagesToLoad.length && (E.reInit(), t.onImagesReady && E.fireCallback(t.onImagesReady, E)))
                };
                e.complete ? n() : (s = e.currentSrc || e.getAttribute("src"), s ? (i = new Image, i.onload = n, i.onerror = n, i.src = s) : n())
            }

            var s = E.h.addEventListener, n = "wrapper" === t.eventTarget ? E.wrapper : E.container;
            if (E.browser.ie10 || E.browser.ie11 ? (s(n, E.touchEvents.touchStart, g), s(document, E.touchEvents.touchMove, m), s(document, E.touchEvents.touchEnd, v)) : (E.support.touch && (s(n, "touchstart", g), s(n, "touchmove", m), s(n, "touchend", v)), t.simulateTouch && (s(n, "mousedown", g), s(document, "mousemove", m), s(document, "mouseup", v))), t.autoResize && s(window, "resize", E.resizeFix), a(), E._wheelEvent = !1, t.mousewheelControl) {
                if (void 0 !== document.onmousewheel && (E._wheelEvent = "mousewheel"), !E._wheelEvent) try {
                    new WheelEvent("wheel"), E._wheelEvent = "wheel"
                } catch (o) {
                }
                E._wheelEvent || (E._wheelEvent = "DOMMouseScroll"), E._wheelEvent && s(E.container, E._wheelEvent, d)
            }
            if (t.keyboardControl && s(document, "keydown", l), t.updateOnImagesReady) {
                E.imagesToLoad = i("img", E.container);
                for (var r = 0; r < E.imagesToLoad.length; r++) e(E.imagesToLoad[r])
            }
        }

        function a() {
            var e, s = E.h.addEventListener;
            if (t.preventLinks) {
                var n = i("a", E.container);
                for (e = 0; e < n.length; e++) s(n[e], "click", h)
            }
            if (t.releaseFormElements) {
                var o = i("input, textarea, select", E.container);
                for (e = 0; e < o.length; e++) s(o[e], E.touchEvents.touchStart, f, !0), E.support.touch && t.simulateTouch && s(o[e], "mousedown", f, !0)
            }
            if (t.onSlideClick) for (e = 0; e < E.slides.length; e++) s(E.slides[e], "click", p);
            if (t.onSlideTouch) for (e = 0; e < E.slides.length; e++) s(E.slides[e], E.touchEvents.touchStart, c)
        }

        function r() {
            var e, s = E.h.removeEventListener;
            if (t.onSlideClick) for (e = 0; e < E.slides.length; e++) s(E.slides[e], "click", p);
            if (t.onSlideTouch) for (e = 0; e < E.slides.length; e++) s(E.slides[e], E.touchEvents.touchStart, c);
            if (t.releaseFormElements) {
                var n = i("input, textarea, select", E.container);
                for (e = 0; e < n.length; e++) s(n[e], E.touchEvents.touchStart, f, !0), E.support.touch && t.simulateTouch && s(n[e], "mousedown", f, !0)
            }
            if (t.preventLinks) {
                var o = i("a", E.container);
                for (e = 0; e < o.length; e++) s(o[e], "click", h)
            }
        }

        function l(e) {
            var t = e.keyCode || e.charCode;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey)) {
                if (37 === t || 39 === t || 38 === t || 40 === t) {
                    for (var i = !1, s = E.h.getOffset(E.container), n = E.h.windowScroll().left, o = E.h.windowScroll().top, a = E.h.windowWidth(), r = E.h.windowHeight(), l = [[s.left, s.top], [s.left + E.width, s.top], [s.left, s.top + E.height], [s.left + E.width, s.top + E.height]], d = 0; d < l.length; d++) {
                        var p = l[d];
                        p[0] >= n && p[0] <= n + a && p[1] >= o && p[1] <= o + r && (i = !0)
                    }
                    if (!i) return
                }
                F ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 39 === t && E.swipeNext(), 37 === t && E.swipePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && E.swipeNext(), 38 === t && E.swipePrev())
            }
        }

        function d(e) {
            var i = E._wheelEvent, s = 0;
            if (e.detail) s = -e.detail; else if ("mousewheel" === i) if (t.mousewheelControlForceToAxis) if (F) {
                if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
                s = e.wheelDeltaX
            } else {
                if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
                s = e.wheelDeltaY
            } else s = e.wheelDelta; else if ("DOMMouseScroll" === i) s = -e.detail; else if ("wheel" === i) if (t.mousewheelControlForceToAxis) if (F) {
                if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
                s = -e.deltaX
            } else {
                if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
                s = -e.deltaY
            } else s = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX : -e.deltaY;
            if (t.freeMode) {
                var o = E.getWrapperTranslate() + s;
                if (o > 0 && (o = 0), o < -n() && (o = -n()), E.setWrapperTransition(0), E.setWrapperTranslate(o), E.updateActiveSlide(o), 0 === o || o === -n()) return
            } else (new Date).getTime() - Y > 60 && (s < 0 ? E.swipeNext() : E.swipePrev()), Y = (new Date).getTime();
            return t.autoplay && E.stopAutoplay(!0), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
        }

        function p(e) {
            E.allowSlideClick && (u(e), E.fireCallback(t.onSlideClick, E, e))
        }

        function c(e) {
            u(e), E.fireCallback(t.onSlideTouch, E, e)
        }

        function u(e) {
            if (e.currentTarget) E.clickedSlide = e.currentTarget; else {
                var i = e.srcElement;
                do {
                    if (i.className.indexOf(t.slideClass) > -1) break;
                    i = i.parentNode
                } while (i);
                E.clickedSlide = i
            }
            E.clickedSlideIndex = E.slides.indexOf(E.clickedSlide), E.clickedSlideLoopIndex = E.clickedSlideIndex - (E.loopedSlides || 0)
        }

        function h(e) {
            if (!E.allowLinks) return e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.preventLinksPropagation && "stopPropagation" in e && e.stopPropagation(), !1
        }

        function f(e) {
            return e.stopPropagation ? e.stopPropagation() : e.returnValue = !1, !1
        }

        function g(e) {
            if (t.preventLinks && (E.allowLinks = !0), E.isTouched || t.onlyExternal) return !1;
            var i = e.target || e.srcElement;
            document.activeElement && document.activeElement !== document.body && document.activeElement !== i && document.activeElement.blur();
            var s = "input select textarea".split(" ");
            if (t.noSwiping && i && y(i)) return !1;
            if (J = !1, E.isTouched = !0, U = "touchstart" === e.type, !U && "which" in e && 3 === e.which) return E.isTouched = !1, !1;
            if (!U || 1 === e.targetTouches.length) {
                E.callPlugins("onTouchStartBegin"), !U && !E.isAndroid && s.indexOf(i.tagName.toLowerCase()) < 0 && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
                var n = U ? e.targetTouches[0].pageX : e.pageX || e.clientX,
                    o = U ? e.targetTouches[0].pageY : e.pageY || e.clientY;
                E.touches.startX = E.touches.currentX = n, E.touches.startY = E.touches.currentY = o, E.touches.start = E.touches.current = F ? n : o, E.setWrapperTransition(0), E.positions.start = E.positions.current = E.getWrapperTranslate(), E.setWrapperTranslate(E.positions.start), E.times.start = (new Date).getTime(), N = void 0, t.moveStartThreshold > 0 && (K = !1), t.onTouchStart && E.fireCallback(t.onTouchStart, E, e), E.callPlugins("onTouchStartEnd")
            }
        }

        function m(e) {
            if (E.isTouched && !t.onlyExternal && (!U || "mousemove" !== e.type)) {
                var i = U ? e.targetTouches[0].pageX : e.pageX || e.clientX,
                    s = U ? e.targetTouches[0].pageY : e.pageY || e.clientY;
                if ("undefined" == typeof N && F && (N = !!(N || Math.abs(s - E.touches.startY) > Math.abs(i - E.touches.startX))), "undefined" != typeof N || F || (N = !!(N || Math.abs(s - E.touches.startY) < Math.abs(i - E.touches.startX))), N) return void(E.isTouched = !1);
                if (F) {
                    if (!t.swipeToNext && i < E.touches.startX || !t.swipeToPrev && i > E.touches.startX) return
                } else if (!t.swipeToNext && s < E.touches.startY || !t.swipeToPrev && s > E.touches.startY) return;
                if (e.assignedToSwiper) return void(E.isTouched = !1);
                if (e.assignedToSwiper = !0, t.preventLinks && (E.allowLinks = !1), t.onSlideClick && (E.allowSlideClick = !1), t.autoplay && E.stopAutoplay(!0), !U || 1 === e.touches.length) {
                    if (E.isMoved || (E.callPlugins("onTouchMoveStart"), t.loop && (E.fixLoop(), E.positions.start = E.getWrapperTranslate()), t.onTouchMoveStart && E.fireCallback(t.onTouchMoveStart, E)), E.isMoved = !0, e.preventDefault ? e.preventDefault() : e.returnValue = !1, E.touches.current = F ? i : s, E.positions.current = (E.touches.current - E.touches.start) * t.touchRatio + E.positions.start, E.positions.current > 0 && t.onResistanceBefore && E.fireCallback(t.onResistanceBefore, E, E.positions.current), E.positions.current < -n() && t.onResistanceAfter && E.fireCallback(t.onResistanceAfter, E, Math.abs(E.positions.current + n())), t.resistance && "100%" !== t.resistance) {
                        var o;
                        if (E.positions.current > 0 && (o = 1 - E.positions.current / O / 2, o < .5 ? E.positions.current = O / 2 : E.positions.current = E.positions.current * o), E.positions.current < -n()) {
                            var a = (E.touches.current - E.touches.start) * t.touchRatio + (n() + E.positions.start);
                            o = (O + a) / O;
                            var r = E.positions.current - a * (1 - o) / 2, l = -n() - O / 2;
                            r < l || o <= 0 ? E.positions.current = l : E.positions.current = r
                        }
                    }
                    if (t.resistance && "100%" === t.resistance && (E.positions.current > 0 && (!t.freeMode || t.freeModeFluid) && (E.positions.current = 0), E.positions.current < -n() && (!t.freeMode || t.freeModeFluid) && (E.positions.current = -n())), !t.followFinger) return;
                    if (t.moveStartThreshold) if (Math.abs(E.touches.current - E.touches.start) > t.moveStartThreshold || K) {
                        if (!K) return K = !0, void(E.touches.start = E.touches.current);
                        E.setWrapperTranslate(E.positions.current)
                    } else E.positions.current = E.positions.start; else E.setWrapperTranslate(E.positions.current);
                    return (t.freeMode || t.watchActiveIndex) && E.updateActiveSlide(E.positions.current), t.grabCursor && (E.container.style.cursor = "move", E.container.style.cursor = "grabbing", E.container.style.cursor = "-moz-grabbin", E.container.style.cursor = "-webkit-grabbing"), Q || (Q = E.touches.current), Z || (Z = (new Date).getTime()), E.velocity = (E.touches.current - Q) / ((new Date).getTime() - Z) / 2, Math.abs(E.touches.current - Q) < 2 && (E.velocity = 0), Q = E.touches.current, Z = (new Date).getTime(), E.callPlugins("onTouchMoveEnd"), t.onTouchMove && E.fireCallback(t.onTouchMove, E, e), !1
                }
            }
        }

        function v(e) {
            if (N && E.swipeReset(), !t.onlyExternal && E.isTouched) {
                E.isTouched = !1, t.grabCursor && (E.container.style.cursor = "move", E.container.style.cursor = "grab", E.container.style.cursor = "-moz-grab", E.container.style.cursor = "-webkit-grab"), E.positions.current || 0 === E.positions.current || (E.positions.current = E.positions.start), t.followFinger && E.setWrapperTranslate(E.positions.current), E.times.end = (new Date).getTime(), E.touches.diff = E.touches.current - E.touches.start, E.touches.abs = Math.abs(E.touches.diff), E.positions.diff = E.positions.current - E.positions.start, E.positions.abs = Math.abs(E.positions.diff);
                var i = E.positions.diff, s = E.positions.abs, o = E.times.end - E.times.start;
                s < 5 && o < 300 && E.allowLinks === !1 && (t.freeMode || 0 === s || E.swipeReset(),
                t.preventLinks && (E.allowLinks = !0), t.onSlideClick && (E.allowSlideClick = !0)), setTimeout(function () {
                    "undefined" != typeof E && null !== E && (t.preventLinks && (E.allowLinks = !0), t.onSlideClick && (E.allowSlideClick = !0))
                }, 100);
                var a = n();
                if (!E.isMoved && t.freeMode) return E.isMoved = !1, t.onTouchEnd && E.fireCallback(t.onTouchEnd, E, e), void E.callPlugins("onTouchEnd");
                if (!E.isMoved || E.positions.current > 0 || E.positions.current < -a) return E.swipeReset(), t.onTouchEnd && E.fireCallback(t.onTouchEnd, E, e), void E.callPlugins("onTouchEnd");
                if (E.isMoved = !1, t.freeMode) {
                    if (t.freeModeFluid) {
                        var r, l = 1e3 * t.momentumRatio, d = E.velocity * l, p = E.positions.current + d, c = !1,
                            u = 20 * Math.abs(E.velocity) * t.momentumBounceRatio;
                        p < -a && (t.momentumBounce && E.support.transitions ? (p + a < -u && (p = -a - u), r = -a, c = !0, J = !0) : p = -a), p > 0 && (t.momentumBounce && E.support.transitions ? (p > u && (p = u), r = 0, c = !0, J = !0) : p = 0), 0 !== E.velocity && (l = Math.abs((p - E.positions.current) / E.velocity)), E.setWrapperTranslate(p), E.setWrapperTransition(l), t.momentumBounce && c && E.wrapperTransitionEnd(function () {
                            J && (t.onMomentumBounce && E.fireCallback(t.onMomentumBounce, E), E.callPlugins("onMomentumBounce"), E.setWrapperTranslate(r), E.setWrapperTransition(300))
                        }), E.updateActiveSlide(p)
                    }
                    return (!t.freeModeFluid || o >= 300) && E.updateActiveSlide(E.positions.current), t.onTouchEnd && E.fireCallback(t.onTouchEnd, E, e), void E.callPlugins("onTouchEnd")
                }
                D = i < 0 ? "toNext" : "toPrev", "toNext" === D && o <= 300 && (s < 30 || !t.shortSwipes ? E.swipeReset() : E.swipeNext(!0, !0)), "toPrev" === D && o <= 300 && (s < 30 || !t.shortSwipes ? E.swipeReset() : E.swipePrev(!0, !0));
                var h = 0;
                if ("auto" === t.slidesPerView) {
                    for (var f, g = Math.abs(E.getWrapperTranslate()), m = 0, v = 0; v < E.slides.length; v++) if (f = F ? E.slides[v].getWidth(!0, t.roundLengths) : E.slides[v].getHeight(!0, t.roundLengths), m += f, m > g) {
                        h = f;
                        break
                    }
                    h > O && (h = O)
                } else h = A * t.slidesPerView;
                "toNext" === D && o > 300 && (s >= h * t.longSwipesRatio ? E.swipeNext(!0, !0) : E.swipeReset()), "toPrev" === D && o > 300 && (s >= h * t.longSwipesRatio ? E.swipePrev(!0, !0) : E.swipeReset()), t.onTouchEnd && E.fireCallback(t.onTouchEnd, E, e), E.callPlugins("onTouchEnd")
            }
        }

        function w(e, t) {
            return e && e.getAttribute("class") && e.getAttribute("class").indexOf(t) > -1
        }

        function y(e) {
            var i = !1;
            do w(e, t.noSwipingClass) && (i = !0), e = e.parentElement; while (!i && e.parentElement && !w(e, t.wrapperClass));
            return !i && w(e, t.wrapperClass) && w(e, t.noSwipingClass) && (i = !0), i
        }

        function b(e, t) {
            var i, s = document.createElement("div");
            return s.innerHTML = t, i = s.firstChild, i.className += " " + e, i.outerHTML
        }

        function S(e, i, s) {
            function n() {
                var o = +new Date, c = o - a;
                r += l * c / (1e3 / 60), p = "toNext" === d ? r > e : r < e, p ? (E.setWrapperTranslate(Math.ceil(r)), E._DOMAnimating = !0, window.setTimeout(function () {
                    n()
                }, 1e3 / 60)) : (t.onSlideChangeEnd && ("to" === i ? s.runCallbacks === !0 && E.fireCallback(t.onSlideChangeEnd, E, d) : E.fireCallback(t.onSlideChangeEnd, E, d)), E.setWrapperTranslate(e), E._DOMAnimating = !1)
            }

            var o = "to" === i && s.speed >= 0 ? s.speed : t.speed, a = +new Date;
            if (E.support.transitions || !t.DOMAnimation) E.setWrapperTranslate(e), E.setWrapperTransition(o); else {
                var r = E.getWrapperTranslate(), l = Math.ceil((e - r) / o * (1e3 / 60)),
                    d = r > e ? "toNext" : "toPrev", p = "toNext" === d ? r > e : r < e;
                if (E._DOMAnimating) return;
                n()
            }
            E.updateActiveSlide(e), t.onSlideNext && "next" === i && s.runCallbacks === !0 && E.fireCallback(t.onSlideNext, E, e), t.onSlidePrev && "prev" === i && s.runCallbacks === !0 && E.fireCallback(t.onSlidePrev, E, e), t.onSlideReset && "reset" === i && s.runCallbacks === !0 && E.fireCallback(t.onSlideReset, E, e), "next" !== i && "prev" !== i && "to" !== i || s.runCallbacks !== !0 || T(i)
        }

        function T(e) {
            if (E.callPlugins("onSlideChangeStart"), t.onSlideChangeStart) if (t.queueStartCallbacks && E.support.transitions) {
                if (E._queueStartCallbacks) return;
                E._queueStartCallbacks = !0, E.fireCallback(t.onSlideChangeStart, E, e), E.wrapperTransitionEnd(function () {
                    E._queueStartCallbacks = !1
                })
            } else E.fireCallback(t.onSlideChangeStart, E, e);
            if (t.onSlideChangeEnd) if (E.support.transitions) if (t.queueEndCallbacks) {
                if (E._queueEndCallbacks) return;
                E._queueEndCallbacks = !0, E.wrapperTransitionEnd(function (i) {
                    E.fireCallback(t.onSlideChangeEnd, i, e)
                })
            } else E.wrapperTransitionEnd(function (i) {
                E.fireCallback(t.onSlideChangeEnd, i, e)
            }); else t.DOMAnimation || setTimeout(function () {
                E.fireCallback(t.onSlideChangeEnd, E, e)
            }, 10)
        }

        function x() {
            var e = E.paginationButtons;
            if (e) for (var t = 0; t < e.length; t++) E.h.removeEventListener(e[t], "click", k)
        }

        function C() {
            var e = E.paginationButtons;
            if (e) for (var t = 0; t < e.length; t++) E.h.addEventListener(e[t], "click", k)
        }

        function k(e) {
            for (var i, s = e.target || e.srcElement, n = E.paginationButtons, o = 0; o < n.length; o++) s === n[o] && (i = o);
            t.autoplay && E.stopAutoplay(!0), E.swipeTo(i)
        }

        function L() {
            ee = setTimeout(function () {
                t.loop ? (E.fixLoop(), E.swipeNext(!0, !0)) : E.swipeNext(!0, !0) || (t.autoplayStopOnLast ? (clearTimeout(ee), ee = void 0) : E.swipeTo(0)), E.wrapperTransitionEnd(function () {
                    "undefined" != typeof ee && L()
                })
            }, t.autoplay)
        }

        function $() {
            E.calcSlides(), t.loader.slides.length > 0 && 0 === E.slides.length && E.loadSlides(), t.loop && E.createLoop(), E.init(), o(), t.pagination && E.createPagination(!0), t.loop || t.initialSlide > 0 ? E.swipeTo(t.initialSlide, 0, !1) : E.updateActiveSlide(0), t.autoplay && E.startAutoplay(), E.centerIndex = E.activeIndex, t.onSwiperCreated && E.fireCallback(t.onSwiperCreated, E), E.callPlugins("onSwiperCreated")
        }

        if (!document.body.outerHTML && document.body.__defineGetter__ && HTMLElement) {
            var M = HTMLElement.prototype;
            M.__defineGetter__ && M.__defineGetter__("outerHTML", function () {
                return (new XMLSerializer).serializeToString(this)
            })
        }
        if (window.getComputedStyle || (window.getComputedStyle = function (e, t) {
            return this.el = e, this.getPropertyValue = function (t) {
                var i = /(\-([a-z]){1})/g;
                return "float" === t && (t = "styleFloat"), i.test(t) && (t = t.replace(i, function () {
                    return arguments[2].toUpperCase()
                })), e.currentStyle[t] ? e.currentStyle[t] : null
            }, this
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
            for (var i = t || 0, s = this.length; i < s; i++) if (this[i] === e) return i;
            return -1
        }), (document.querySelectorAll || window.jQuery) && "undefined" != typeof e && (e.nodeType || 0 !== i(e).length)) {
            var E = this;
            E.touches = {
                start: 0,
                startX: 0,
                startY: 0,
                current: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
                abs: 0
            }, E.positions = {start: 0, abs: 0, diff: 0, current: 0}, E.times = {
                start: 0,
                end: 0
            }, E.id = (new Date).getTime(), E.container = e.nodeType ? e : i(e)[0], E.isTouched = !1, E.isMoved = !1, E.activeIndex = 0, E.centerIndex = 0, E.activeLoaderIndex = 0, E.activeLoopIndex = 0, E.previousIndex = null, E.velocity = 0, E.snapGrid = [], E.slidesGrid = [], E.imagesToLoad = [], E.imagesLoaded = 0, E.wrapperLeft = 0, E.wrapperRight = 0, E.wrapperTop = 0, E.wrapperBottom = 0, E.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;
            var P, A, I, D, N, O, W = {
                eventTarget: "wrapper",
                mode: "horizontal",
                touchRatio: 1,
                speed: 300,
                freeMode: !1,
                freeModeFluid: !1,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerViewFit: !0,
                simulateTouch: !0,
                followFinger: !0,
                shortSwipes: !0,
                longSwipesRatio: .5,
                moveStartThreshold: !1,
                onlyExternal: !1,
                createPagination: !0,
                pagination: !1,
                paginationElement: "span",
                paginationClickable: !1,
                paginationAsRange: !0,
                resistance: !0,
                scrollContainer: !1,
                preventLinks: !0,
                preventLinksPropagation: !1,
                noSwiping: !1,
                noSwipingClass: "swiper-no-swiping",
                initialSlide: 0,
                keyboardControl: !1,
                mousewheelControl: !1,
                mousewheelControlForceToAxis: !1,
                useCSS3Transforms: !0,
                autoplay: !1,
                autoplayDisableOnInteraction: !0,
                autoplayStopOnLast: !1,
                loop: !1,
                loopAdditionalSlides: 0,
                roundLengths: !1,
                calculateHeight: !1,
                cssWidthAndHeight: !1,
                updateOnImagesReady: !0,
                releaseFormElements: !0,
                watchActiveIndex: !1,
                visibilityFullFit: !1,
                offsetPxBefore: 0,
                offsetPxAfter: 0,
                offsetSlidesBefore: 0,
                offsetSlidesAfter: 0,
                centeredSlides: !1,
                queueStartCallbacks: !1,
                queueEndCallbacks: !1,
                autoResize: !0,
                resizeReInit: !1,
                DOMAnimation: !0,
                loader: {slides: [], slidesHTMLType: "inner", surroundGroups: 1, logic: "reload", loadAllSlides: !1},
                swipeToPrev: !0,
                swipeToNext: !0,
                slideElement: "div",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                wrapperClass: "swiper-wrapper",
                paginationElementClass: "swiper-pagination-switch",
                paginationActiveClass: "swiper-active-switch",
                paginationVisibleClass: "swiper-visible-switch"
            };
            t = t || {};
            for (var _ in W) if (_ in t && "object" == typeof t[_]) for (var H in W[_]) H in t[_] || (t[_][H] = W[_][H]); else _ in t || (t[_] = W[_]);
            E.params = t, t.scrollContainer && (t.freeMode = !0, t.freeModeFluid = !0), t.loop && (t.resistance = "100%");
            var F = "horizontal" === t.mode, V = ["mousedown", "mousemove", "mouseup"];
            E.browser.ie10 && (V = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), E.browser.ie11 && (V = ["pointerdown", "pointermove", "pointerup"]), E.touchEvents = {
                touchStart: E.support.touch || !t.simulateTouch ? "touchstart" : V[0],
                touchMove: E.support.touch || !t.simulateTouch ? "touchmove" : V[1],
                touchEnd: E.support.touch || !t.simulateTouch ? "touchend" : V[2]
            };
            for (var q = E.container.childNodes.length - 1; q >= 0; q--) if (E.container.childNodes[q].className) for (var j = E.container.childNodes[q].className.split(/\s+/), G = 0; G < j.length; G++) j[G] === t.wrapperClass && (P = E.container.childNodes[q]);
            E.wrapper = P, E._extendSwiperSlide = function (e) {
                return e.append = function () {
                    return t.loop ? e.insertAfter(E.slides.length - E.loopedSlides) : (E.wrapper.appendChild(e), E.reInit()), e
                }, e.prepend = function () {
                    return t.loop ? (E.wrapper.insertBefore(e, E.slides[E.loopedSlides]), E.removeLoopedSlides(), E.calcSlides(), E.createLoop()) : E.wrapper.insertBefore(e, E.wrapper.firstChild), E.reInit(), e
                }, e.insertAfter = function (i) {
                    if ("undefined" == typeof i) return !1;
                    var s;
                    return t.loop ? (s = E.slides[i + 1 + E.loopedSlides], s ? E.wrapper.insertBefore(e, s) : E.wrapper.appendChild(e), E.removeLoopedSlides(), E.calcSlides(), E.createLoop()) : (s = E.slides[i + 1], E.wrapper.insertBefore(e, s)), E.reInit(), e
                }, e.clone = function () {
                    return E._extendSwiperSlide(e.cloneNode(!0))
                }, e.remove = function () {
                    E.wrapper.removeChild(e), E.reInit()
                }, e.html = function (t) {
                    return "undefined" == typeof t ? e.innerHTML : (e.innerHTML = t, e)
                }, e.index = function () {
                    for (var t, i = E.slides.length - 1; i >= 0; i--) e === E.slides[i] && (t = i);
                    return t
                }, e.isActive = function () {
                    return e.index() === E.activeIndex
                }, e.swiperSlideDataStorage || (e.swiperSlideDataStorage = {}), e.getData = function (t) {
                    return e.swiperSlideDataStorage[t]
                }, e.setData = function (t, i) {
                    return e.swiperSlideDataStorage[t] = i, e
                }, e.data = function (t, i) {
                    return "undefined" == typeof i ? e.getAttribute("data-" + t) : (e.setAttribute("data-" + t, i), e)
                }, e.getWidth = function (t, i) {
                    return E.h.getWidth(e, t, i)
                }, e.getHeight = function (t, i) {
                    return E.h.getHeight(e, t, i)
                }, e.getOffset = function () {
                    return E.h.getOffset(e)
                }, e
            }, E.calcSlides = function (e) {
                var i = !!E.slides && E.slides.length;
                E.slides = [], E.displaySlides = [];
                for (var s = 0; s < E.wrapper.childNodes.length; s++) if (E.wrapper.childNodes[s].className) for (var n = E.wrapper.childNodes[s].className, o = n.split(/\s+/), l = 0; l < o.length; l++) o[l] === t.slideClass && E.slides.push(E.wrapper.childNodes[s]);
                for (s = E.slides.length - 1; s >= 0; s--) E._extendSwiperSlide(E.slides[s]);
                i !== !1 && (i !== E.slides.length || e) && (r(), a(), E.updateActiveSlide(), E.params.pagination && E.createPagination(), E.callPlugins("numberOfSlidesChanged"))
            }, E.createSlide = function (e, i, s) {
                i = i || E.params.slideClass, s = s || t.slideElement;
                var n = document.createElement(s);
                return n.innerHTML = e || "", n.className = i, E._extendSwiperSlide(n)
            }, E.appendSlide = function (e, t, i) {
                if (e) return e.nodeType ? E._extendSwiperSlide(e).append() : E.createSlide(e, t, i).append()
            }, E.prependSlide = function (e, t, i) {
                if (e) return e.nodeType ? E._extendSwiperSlide(e).prepend() : E.createSlide(e, t, i).prepend()
            }, E.insertSlideAfter = function (e, t, i, s) {
                return "undefined" != typeof e && (t.nodeType ? E._extendSwiperSlide(t).insertAfter(e) : E.createSlide(t, i, s).insertAfter(e))
            }, E.removeSlide = function (e) {
                if (E.slides[e]) {
                    if (t.loop) {
                        if (!E.slides[e + E.loopedSlides]) return !1;
                        E.slides[e + E.loopedSlides].remove(), E.removeLoopedSlides(), E.calcSlides(), E.createLoop()
                    } else E.slides[e].remove();
                    return !0
                }
                return !1
            }, E.removeLastSlide = function () {
                return E.slides.length > 0 && (t.loop ? (E.slides[E.slides.length - 1 - E.loopedSlides].remove(), E.removeLoopedSlides(), E.calcSlides(), E.createLoop()) : E.slides[E.slides.length - 1].remove(), !0)
            }, E.removeAllSlides = function () {
                for (var e = E.slides.length, t = E.slides.length - 1; t >= 0; t--) E.slides[t].remove(), t === e - 1 && E.setWrapperTranslate(0)
            }, E.getSlide = function (e) {
                return E.slides[e]
            }, E.getLastSlide = function () {
                return E.slides[E.slides.length - 1]
            }, E.getFirstSlide = function () {
                return E.slides[0]
            }, E.activeSlide = function () {
                return E.slides[E.activeIndex]
            }, E.fireCallback = function () {
                var e = arguments[0];
                if ("[object Array]" === Object.prototype.toString.call(e)) for (var i = 0; i < e.length; i++) "function" == typeof e[i] && e[i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]); else "[object String]" === Object.prototype.toString.call(e) ? t["on" + e] && E.fireCallback(t["on" + e], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : e(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, E.addCallback = function (e, t) {
                var i, n = this;
                return n.params["on" + e] ? s(this.params["on" + e]) ? this.params["on" + e].push(t) : "function" == typeof this.params["on" + e] ? (i = this.params["on" + e], this.params["on" + e] = [], this.params["on" + e].push(i), this.params["on" + e].push(t)) : void 0 : (this.params["on" + e] = [], this.params["on" + e].push(t))
            }, E.removeCallbacks = function (e) {
                E.params["on" + e] && (E.params["on" + e] = null)
            };
            var R = [];
            for (var z in E.plugins) if (t[z]) {
                var B = E.plugins[z](E, t[z]);
                B && R.push(B)
            }
            E.callPlugins = function (e, t) {
                t || (t = {});
                for (var i = 0; i < R.length; i++) e in R[i] && R[i][e](t)
            }, !E.browser.ie10 && !E.browser.ie11 || t.onlyExternal || E.wrapper.classList.add("swiper-wp8-" + (F ? "horizontal" : "vertical")), t.freeMode && (E.container.className += " swiper-free-mode"), E.initialized = !1, E.init = function (e, i) {
                var s = E.h.getWidth(E.container, !1, t.roundLengths),
                    n = E.h.getHeight(E.container, !1, t.roundLengths);
                if (s !== E.width || n !== E.height || e) {
                    E.width = s, E.height = n;
                    var o, a, r, l, d, p, c;
                    O = F ? s : n;
                    var u = E.wrapper;
                    if (e && E.calcSlides(i), "auto" === t.slidesPerView) {
                        var h = 0, f = 0;
                        t.slidesOffset > 0 && (u.style.paddingLeft = "", u.style.paddingRight = "", u.style.paddingTop = "", u.style.paddingBottom = ""), u.style.width = "", u.style.height = "", t.offsetPxBefore > 0 && (F ? E.wrapperLeft = t.offsetPxBefore : E.wrapperTop = t.offsetPxBefore), t.offsetPxAfter > 0 && (F ? E.wrapperRight = t.offsetPxAfter : E.wrapperBottom = t.offsetPxAfter), t.centeredSlides && (F ? (E.wrapperLeft = (O - this.slides[0].getWidth(!0, t.roundLengths)) / 2, E.wrapperRight = (O - E.slides[E.slides.length - 1].getWidth(!0, t.roundLengths)) / 2) : (E.wrapperTop = (O - E.slides[0].getHeight(!0, t.roundLengths)) / 2, E.wrapperBottom = (O - E.slides[E.slides.length - 1].getHeight(!0, t.roundLengths)) / 2)), F ? (E.wrapperLeft >= 0 && (u.style.paddingLeft = E.wrapperLeft + "px"), E.wrapperRight >= 0 && (u.style.paddingRight = E.wrapperRight + "px")) : (E.wrapperTop >= 0 && (u.style.paddingTop = E.wrapperTop + "px"), E.wrapperBottom >= 0 && (u.style.paddingBottom = E.wrapperBottom + "px")), p = 0;
                        var g = 0;
                        for (E.snapGrid = [], E.slidesGrid = [], r = 0, c = 0; c < E.slides.length; c++) {
                            o = E.slides[c].getWidth(!0, t.roundLengths), a = E.slides[c].getHeight(!0, t.roundLengths), t.calculateHeight && (r = Math.max(r, a));
                            var m = F ? o : a;
                            if (t.centeredSlides) {
                                var v = c === E.slides.length - 1 ? 0 : E.slides[c + 1].getWidth(!0, t.roundLengths),
                                    w = c === E.slides.length - 1 ? 0 : E.slides[c + 1].getHeight(!0, t.roundLengths),
                                    y = F ? v : w;
                                if (m > O) {
                                    if (t.slidesPerViewFit) E.snapGrid.push(p + E.wrapperLeft), E.snapGrid.push(p + m - O + E.wrapperLeft); else for (var b = 0; b <= Math.floor(m / (O + E.wrapperLeft)); b++) 0 === b ? E.snapGrid.push(p + E.wrapperLeft) : E.snapGrid.push(p + E.wrapperLeft + O * b);
                                    E.slidesGrid.push(p + E.wrapperLeft)
                                } else E.snapGrid.push(g), E.slidesGrid.push(g);
                                g += m / 2 + y / 2
                            } else {
                                if (m > O) if (t.slidesPerViewFit) E.snapGrid.push(p), E.snapGrid.push(p + m - O); else if (0 !== O) for (var S = 0; S <= Math.floor(m / O); S++) E.snapGrid.push(p + O * S); else E.snapGrid.push(p); else E.snapGrid.push(p);
                                E.slidesGrid.push(p)
                            }
                            p += m, h += o, f += a
                        }
                        t.calculateHeight && (E.height = r), F ? (I = h + E.wrapperRight + E.wrapperLeft, t.cssWidthAndHeight && "height" !== t.cssWidthAndHeight || (u.style.width = h + "px"), t.cssWidthAndHeight && "width" !== t.cssWidthAndHeight || (u.style.height = E.height + "px")) : (t.cssWidthAndHeight && "height" !== t.cssWidthAndHeight || (u.style.width = E.width + "px"), t.cssWidthAndHeight && "width" !== t.cssWidthAndHeight || (u.style.height = f + "px"), I = f + E.wrapperTop + E.wrapperBottom)
                    } else if (t.scrollContainer) u.style.width = "", u.style.height = "", l = E.slides[0].getWidth(!0, t.roundLengths), d = E.slides[0].getHeight(!0, t.roundLengths), I = F ? l : d, u.style.width = l + "px", u.style.height = d + "px", A = F ? l : d; else {
                        if (t.calculateHeight) {
                            for (r = 0, d = 0, F || (E.container.style.height = ""), u.style.height = "", c = 0; c < E.slides.length; c++) E.slides[c].style.height = "", r = Math.max(E.slides[c].getHeight(!0), r), F || (d += E.slides[c].getHeight(!0));
                            a = r, E.height = a, F ? d = a : (O = a, E.container.style.height = O + "px")
                        } else a = F ? E.height : E.height / t.slidesPerView, t.roundLengths && (a = Math.ceil(a)), d = F ? E.height : E.slides.length * a;
                        for (o = F ? E.width / t.slidesPerView : E.width, t.roundLengths && (o = Math.ceil(o)), l = F ? E.slides.length * o : E.width, A = F ? o : a, t.offsetSlidesBefore > 0 && (F ? E.wrapperLeft = A * t.offsetSlidesBefore : E.wrapperTop = A * t.offsetSlidesBefore), t.offsetSlidesAfter > 0 && (F ? E.wrapperRight = A * t.offsetSlidesAfter : E.wrapperBottom = A * t.offsetSlidesAfter), t.offsetPxBefore > 0 && (F ? E.wrapperLeft = t.offsetPxBefore : E.wrapperTop = t.offsetPxBefore), t.offsetPxAfter > 0 && (F ? E.wrapperRight = t.offsetPxAfter : E.wrapperBottom = t.offsetPxAfter), t.centeredSlides && (F ? (E.wrapperLeft = (O - A) / 2, E.wrapperRight = (O - A) / 2) : (E.wrapperTop = (O - A) / 2, E.wrapperBottom = (O - A) / 2)), F ? (E.wrapperLeft > 0 && (u.style.paddingLeft = E.wrapperLeft + "px"), E.wrapperRight > 0 && (u.style.paddingRight = E.wrapperRight + "px")) : (E.wrapperTop > 0 && (u.style.paddingTop = E.wrapperTop + "px"), E.wrapperBottom > 0 && (u.style.paddingBottom = E.wrapperBottom + "px")), I = F ? l + E.wrapperRight + E.wrapperLeft : d + E.wrapperTop + E.wrapperBottom, parseFloat(l) > 0 && (!t.cssWidthAndHeight || "height" === t.cssWidthAndHeight) && (u.style.width = l + "px"), parseFloat(d) > 0 && (!t.cssWidthAndHeight || "width" === t.cssWidthAndHeight) && (u.style.height = d + "px"), p = 0, E.snapGrid = [], E.slidesGrid = [], c = 0; c < E.slides.length; c++) E.snapGrid.push(p), E.slidesGrid.push(p), p += A, parseFloat(o) > 0 && (!t.cssWidthAndHeight || "height" === t.cssWidthAndHeight) && (E.slides[c].style.width = o + "px"), parseFloat(a) > 0 && (!t.cssWidthAndHeight || "width" === t.cssWidthAndHeight) && (E.slides[c].style.height = a + "px")
                    }
                    E.initialized ? (E.callPlugins("onInit"), t.onInit && E.fireCallback(t.onInit, E)) : (E.callPlugins("onFirstInit"), t.onFirstInit && E.fireCallback(t.onFirstInit, E)), E.initialized = !0
                }
            }, E.reInit = function (e) {
                E.init(!0, e)
            }, E.resizeFix = function (e) {
                E.callPlugins("beforeResizeFix"), E.init(t.resizeReInit || e), t.freeMode ? E.getWrapperTranslate() < -n() && (E.setWrapperTransition(0), E.setWrapperTranslate(-n())) : (E.swipeTo(t.loop ? E.activeLoopIndex : E.activeIndex, 0, !1), t.autoplay && (E.support.transitions && "undefined" != typeof ee ? "undefined" != typeof ee && (clearTimeout(ee), ee = void 0, E.startAutoplay()) : "undefined" != typeof te && (clearInterval(te), te = void 0, E.startAutoplay()))), E.callPlugins("afterResizeFix")
            }, E.destroy = function (e) {
                var i = E.h.removeEventListener, s = "wrapper" === t.eventTarget ? E.wrapper : E.container;
                if (E.browser.ie10 || E.browser.ie11 ? (i(s, E.touchEvents.touchStart, g), i(document, E.touchEvents.touchMove, m), i(document, E.touchEvents.touchEnd, v)) : (E.support.touch && (i(s, "touchstart", g), i(s, "touchmove", m), i(s, "touchend", v)), t.simulateTouch && (i(s, "mousedown", g), i(document, "mousemove", m), i(document, "mouseup", v))), t.autoResize && i(window, "resize", E.resizeFix), r(), t.paginationClickable && x(), t.mousewheelControl && E._wheelEvent && i(E.container, E._wheelEvent, d), t.keyboardControl && i(document, "keydown", l), t.autoplay && E.stopAutoplay(), e) {
                    E.wrapper.removeAttribute("style");
                    for (var n = 0; n < E.slides.length; n++) E.slides[n].removeAttribute("style")
                }
                E.callPlugins("onDestroy"), window.jQuery && window.jQuery(E.container).data("swiper") && window.jQuery(E.container).removeData("swiper"), window.Zepto && window.Zepto(E.container).data("swiper") && window.Zepto(E.container).removeData("swiper"), E = null
            }, E.disableKeyboardControl = function () {
                t.keyboardControl = !1, E.h.removeEventListener(document, "keydown", l)
            }, E.enableKeyboardControl = function () {
                t.keyboardControl = !0, E.h.addEventListener(document, "keydown", l)
            };
            var Y = (new Date).getTime();
            if (E.disableMousewheelControl = function () {
                return !!E._wheelEvent && (t.mousewheelControl = !1, E.h.removeEventListener(E.container, E._wheelEvent, d), !0)
            }, E.enableMousewheelControl = function () {
                return !!E._wheelEvent && (t.mousewheelControl = !0, E.h.addEventListener(E.container, E._wheelEvent, d), !0)
            }, t.grabCursor) {
                var X = E.container.style;
                X.cursor = "move", X.cursor = "grab", X.cursor = "-moz-grab", X.cursor = "-webkit-grab"
            }
            E.allowSlideClick = !0, E.allowLinks = !0;
            var K, Q, Z, U = !1, J = !0;
            E.swipeNext = function (e, i) {
                "undefined" == typeof e && (e = !0), !i && t.loop && E.fixLoop(), !i && t.autoplay && E.stopAutoplay(!0), E.callPlugins("onSwipeNext");
                var s = E.getWrapperTranslate().toFixed(2), o = s;
                if ("auto" === t.slidesPerView) {
                    for (var a = 0; a < E.snapGrid.length; a++) if (-s >= E.snapGrid[a].toFixed(2) && -s < E.snapGrid[a + 1].toFixed(2)) {
                        o = -E.snapGrid[a + 1];
                        break
                    }
                } else {
                    var r = A * t.slidesPerGroup;
                    o = -(Math.floor(Math.abs(s) / Math.floor(r)) * r + r)
                }
                return o < -n() && (o = -n()), o !== s && (S(o, "next", {runCallbacks: e}), !0)
            }, E.swipePrev = function (e, i) {
                "undefined" == typeof e && (e = !0), !i && t.loop && E.fixLoop(), !i && t.autoplay && E.stopAutoplay(!0), E.callPlugins("onSwipePrev");
                var s, n = Math.ceil(E.getWrapperTranslate());
                if ("auto" === t.slidesPerView) {
                    s = 0;
                    for (var o = 1; o < E.snapGrid.length; o++) {
                        if (-n === E.snapGrid[o]) {
                            s = -E.snapGrid[o - 1];
                            break
                        }
                        if (-n > E.snapGrid[o] && -n < E.snapGrid[o + 1]) {
                            s = -E.snapGrid[o];
                            break
                        }
                    }
                } else {
                    var a = A * t.slidesPerGroup;
                    s = -(Math.ceil(-n / a) - 1) * a
                }
                return s > 0 && (s = 0), s !== n && (S(s, "prev", {runCallbacks: e}), !0)
            }, E.swipeReset = function (e) {
                "undefined" == typeof e && (e = !0), E.callPlugins("onSwipeReset");
                var i, s = E.getWrapperTranslate(), o = A * t.slidesPerGroup;
                -n();
                if ("auto" === t.slidesPerView) {
                    i = 0;
                    for (var a = 0; a < E.snapGrid.length; a++) {
                        if (-s === E.snapGrid[a]) return;
                        if (-s >= E.snapGrid[a] && -s < E.snapGrid[a + 1]) {
                            i = E.positions.diff > 0 ? -E.snapGrid[a + 1] : -E.snapGrid[a];
                            break
                        }
                    }
                    -s >= E.snapGrid[E.snapGrid.length - 1] && (i = -E.snapGrid[E.snapGrid.length - 1]), s <= -n() && (i = -n())
                } else i = s < 0 ? Math.round(s / o) * o : 0, s <= -n() && (i = -n());
                return t.scrollContainer && (i = s < 0 ? s : 0), i < -n() && (i = -n()), t.scrollContainer && O > A && (i = 0), i !== s && (S(i, "reset", {runCallbacks: e}), !0)
            }, E.swipeTo = function (e, i, s) {
                e = parseInt(e, 10), E.callPlugins("onSwipeTo", {index: e, speed: i}), t.loop && (e += E.loopedSlides);
                var o = E.getWrapperTranslate();
                if (!(!isFinite(e) || e > E.slides.length - 1 || e < 0)) {
                    var a;
                    return a = "auto" === t.slidesPerView ? -E.slidesGrid[e] : -e * A, a < -n() && (a = -n()), a !== o && ("undefined" == typeof s && (s = !0), S(a, "to", {
                        index: e,
                        speed: i,
                        runCallbacks: s
                    }), !0)
                }
            }, E._queueStartCallbacks = !1, E._queueEndCallbacks = !1, E.updateActiveSlide = function (e) {
                if (E.initialized && 0 !== E.slides.length) {
                    E.previousIndex = E.activeIndex, "undefined" == typeof e && (e = E.getWrapperTranslate()), e > 0 && (e = 0);
                    var i;
                    if ("auto" === t.slidesPerView) {
                        if (E.activeIndex = E.slidesGrid.indexOf(-e), E.activeIndex < 0) {
                            for (i = 0; i < E.slidesGrid.length - 1 && !(-e > E.slidesGrid[i] && -e < E.slidesGrid[i + 1]); i++) ;
                            var s = Math.abs(E.slidesGrid[i] + e), n = Math.abs(E.slidesGrid[i + 1] + e);
                            s <= n ? E.activeIndex = i : E.activeIndex = i + 1
                        }
                    } else E.activeIndex = Math[t.visibilityFullFit ? "ceil" : "round"](-e / A);
                    if (E.activeIndex === E.slides.length && (E.activeIndex = E.slides.length - 1), E.activeIndex < 0 && (E.activeIndex = 0), E.slides[E.activeIndex]) {
                        if (E.calcVisibleSlides(e), E.support.classList) {
                            var o;
                            for (i = 0; i < E.slides.length; i++) o = E.slides[i], o.classList.remove(t.slideActiveClass), E.visibleSlides.indexOf(o) >= 0 ? o.classList.add(t.slideVisibleClass) : o.classList.remove(t.slideVisibleClass);
                            E.slides[E.activeIndex].classList.add(t.slideActiveClass)
                        } else {
                            var a = new RegExp("\\s*" + t.slideActiveClass),
                                r = new RegExp("\\s*" + t.slideVisibleClass);
                            for (i = 0; i < E.slides.length; i++) E.slides[i].className = E.slides[i].className.replace(a, "").replace(r, ""), E.visibleSlides.indexOf(E.slides[i]) >= 0 && (E.slides[i].className += " " + t.slideVisibleClass);
                            E.slides[E.activeIndex].className += " " + t.slideActiveClass
                        }
                        if (t.loop) {
                            var l = E.loopedSlides;
                            E.activeLoopIndex = E.activeIndex - l, E.activeLoopIndex >= E.slides.length - 2 * l && (E.activeLoopIndex = E.slides.length - 2 * l - E.activeLoopIndex), E.activeLoopIndex < 0 && (E.activeLoopIndex = E.slides.length - 2 * l + E.activeLoopIndex), E.activeLoopIndex < 0 && (E.activeLoopIndex = 0)
                        } else E.activeLoopIndex = E.activeIndex;
                        t.pagination && E.updatePagination(e)
                    }
                }
            }, E.createPagination = function (e) {
                if (t.paginationClickable && E.paginationButtons && x(), E.paginationContainer = t.pagination.nodeType ? t.pagination : i(t.pagination)[0], t.createPagination) {
                    var s = "", n = E.slides.length, o = n;
                    t.loop && (o -= 2 * E.loopedSlides);
                    for (var a = 0; a < o; a++) s += "<" + t.paginationElement + ' class="' + t.paginationElementClass + '"></' + t.paginationElement + ">";
                    E.paginationContainer.innerHTML = s
                }
                E.paginationButtons = i("." + t.paginationElementClass, E.paginationContainer), e || E.updatePagination(), E.callPlugins("onCreatePagination"), t.paginationClickable && C()
            }, E.updatePagination = function (e) {
                if (t.pagination && !(E.slides.length < 1)) {
                    var s = i("." + t.paginationActiveClass, E.paginationContainer);
                    if (s) {
                        var n = E.paginationButtons;
                        if (0 !== n.length) {
                            for (var o = 0; o < n.length; o++) n[o].className = t.paginationElementClass;
                            var a = t.loop ? E.loopedSlides : 0;
                            if (t.paginationAsRange) {
                                E.visibleSlides || E.calcVisibleSlides(e);
                                var r, l = [];
                                for (r = 0; r < E.visibleSlides.length; r++) {
                                    var d = E.slides.indexOf(E.visibleSlides[r]) - a;
                                    t.loop && d < 0 && (d = E.slides.length - 2 * E.loopedSlides + d), t.loop && d >= E.slides.length - 2 * E.loopedSlides && (d = E.slides.length - 2 * E.loopedSlides - d, d = Math.abs(d)), l.push(d)
                                }
                                for (r = 0; r < l.length; r++) n[l[r]] && (n[l[r]].className += " " + t.paginationVisibleClass);
                                t.loop ? void 0 !== n[E.activeLoopIndex] && (n[E.activeLoopIndex].className += " " + t.paginationActiveClass) : n[E.activeIndex] && (n[E.activeIndex].className += " " + t.paginationActiveClass)
                            } else t.loop ? n[E.activeLoopIndex] && (n[E.activeLoopIndex].className += " " + t.paginationActiveClass + " " + t.paginationVisibleClass) : n[E.activeIndex] && (n[E.activeIndex].className += " " + t.paginationActiveClass + " " + t.paginationVisibleClass)
                        }
                    }
                }
            }, E.calcVisibleSlides = function (e) {
                var i = [], s = 0, n = 0, o = 0;
                F && E.wrapperLeft > 0 && (e += E.wrapperLeft), !F && E.wrapperTop > 0 && (e += E.wrapperTop);
                for (var a = 0; a < E.slides.length; a++) {
                    s += n, n = "auto" === t.slidesPerView ? F ? E.h.getWidth(E.slides[a], !0, t.roundLengths) : E.h.getHeight(E.slides[a], !0, t.roundLengths) : A, o = s + n;
                    var r = !1;
                    t.visibilityFullFit ? (s >= -e && o <= -e + O && (r = !0), s <= -e && o >= -e + O && (r = !0)) : (o > -e && o <= -e + O && (r = !0), s >= -e && s < -e + O && (r = !0), s < -e && o > -e + O && (r = !0)), r && i.push(E.slides[a])
                }
                0 === i.length && (i = [E.slides[E.activeIndex]]), E.visibleSlides = i
            };
            var ee, te;
            E.startAutoplay = function () {
                if (E.support.transitions) {
                    if ("undefined" != typeof ee) return !1;
                    if (!t.autoplay) return;
                    E.callPlugins("onAutoplayStart"), t.onAutoplayStart && E.fireCallback(t.onAutoplayStart, E), L()
                } else {
                    if ("undefined" != typeof te) return !1;
                    if (!t.autoplay) return;
                    E.callPlugins("onAutoplayStart"), t.onAutoplayStart && E.fireCallback(t.onAutoplayStart, E), te = setInterval(function () {
                        t.loop ? (E.fixLoop(), E.swipeNext(!0, !0)) : E.swipeNext(!0, !0) || (t.autoplayStopOnLast ? (clearInterval(te), te = void 0) : E.swipeTo(0))
                    }, t.autoplay)
                }
            }, E.stopAutoplay = function (e) {
                if (E.support.transitions) {
                    if (!ee) return;
                    ee && clearTimeout(ee), ee = void 0, e && !t.autoplayDisableOnInteraction && E.wrapperTransitionEnd(function () {
                        L()
                    }), E.callPlugins("onAutoplayStop"), t.onAutoplayStop && E.fireCallback(t.onAutoplayStop, E)
                } else te && clearInterval(te), te = void 0, E.callPlugins("onAutoplayStop"), t.onAutoplayStop && E.fireCallback(t.onAutoplayStop, E)
            }, E.loopCreated = !1, E.removeLoopedSlides = function () {
                if (E.loopCreated) for (var e = 0; e < E.slides.length; e++) E.slides[e].getData("looped") === !0 && E.wrapper.removeChild(E.slides[e])
            }, E.createLoop = function () {
                if (0 !== E.slides.length) {
                    "auto" === t.slidesPerView ? E.loopedSlides = t.loopedSlides || 1 : E.loopedSlides = Math.floor(t.slidesPerView) + t.loopAdditionalSlides, E.loopedSlides > E.slides.length && (E.loopedSlides = E.slides.length);
                    var e, i = "", s = "", n = "", o = E.slides.length, a = Math.floor(E.loopedSlides / o),
                        r = E.loopedSlides % o;
                    for (e = 0; e < a * o; e++) {
                        var l = e;
                        if (e >= o) {
                            var d = Math.floor(e / o);
                            l = e - o * d
                        }
                        n += E.slides[l].outerHTML
                    }
                    for (e = 0; e < r; e++) s += b(t.slideDuplicateClass, E.slides[e].outerHTML);
                    for (e = o - r; e < o; e++) i += b(t.slideDuplicateClass, E.slides[e].outerHTML);
                    var p = i + n + P.innerHTML + n + s;
                    for (P.innerHTML = p, E.loopCreated = !0, E.calcSlides(), e = 0; e < E.slides.length; e++) (e < E.loopedSlides || e >= E.slides.length - E.loopedSlides) && E.slides[e].setData("looped", !0);
                    E.callPlugins("onCreateLoop")
                }
            }, E.fixLoop = function () {
                var e;
                E.activeIndex < E.loopedSlides ? (e = E.slides.length - 3 * E.loopedSlides + E.activeIndex, E.swipeTo(e, 0, !1)) : ("auto" === t.slidesPerView && E.activeIndex >= 2 * E.loopedSlides || E.activeIndex > E.slides.length - 2 * t.slidesPerView) && (e = -E.slides.length + E.activeIndex + E.loopedSlides, E.swipeTo(e, 0, !1))
            }, E.loadSlides = function () {
                var e = "";
                E.activeLoaderIndex = 0;
                for (var i = t.loader.slides, s = t.loader.loadAllSlides ? i.length : t.slidesPerView * (1 + t.loader.surroundGroups), n = 0; n < s; n++) e += "outer" === t.loader.slidesHTMLType ? i[n] : "<" + t.slideElement + ' class="' + t.slideClass + '" data-swiperindex="' + n + '">' + i[n] + "</" + t.slideElement + ">";
                E.wrapper.innerHTML = e, E.calcSlides(!0), t.loader.loadAllSlides || E.wrapperTransitionEnd(E.reloadSlides, !0)
            }, E.reloadSlides = function () {
                var e = t.loader.slides, i = parseInt(E.activeSlide().data("swiperindex"), 10);
                if (!(i < 0 || i > e.length - 1)) {
                    E.activeLoaderIndex = i;
                    var s = Math.max(0, i - t.slidesPerView * t.loader.surroundGroups),
                        n = Math.min(i + t.slidesPerView * (1 + t.loader.surroundGroups) - 1, e.length - 1);
                    if (i > 0) {
                        var o = -A * (i - s);
                        E.setWrapperTranslate(o), E.setWrapperTransition(0)
                    }
                    var a;
                    if ("reload" === t.loader.logic) {
                        E.wrapper.innerHTML = "";
                        var r = "";
                        for (a = s; a <= n; a++) r += "outer" === t.loader.slidesHTMLType ? e[a] : "<" + t.slideElement + ' class="' + t.slideClass + '" data-swiperindex="' + a + '">' + e[a] + "</" + t.slideElement + ">";
                        E.wrapper.innerHTML = r
                    } else {
                        var l = 1e3, d = 0;
                        for (a = 0; a < E.slides.length; a++) {
                            var p = E.slides[a].data("swiperindex");
                            p < s || p > n ? E.wrapper.removeChild(E.slides[a]) : (l = Math.min(p, l), d = Math.max(p, d))
                        }
                        for (a = s; a <= n; a++) {
                            var c;
                            a < l && (c = document.createElement(t.slideElement), c.className = t.slideClass, c.setAttribute("data-swiperindex", a), c.innerHTML = e[a], E.wrapper.insertBefore(c, E.wrapper.firstChild)), a > d && (c = document.createElement(t.slideElement), c.className = t.slideClass, c.setAttribute("data-swiperindex", a), c.innerHTML = e[a], E.wrapper.appendChild(c))
                        }
                    }
                    E.reInit(!0)
                }
            }, $()
        }
    };
    return s.prototype = {
        plugins: {}, wrapperTransitionEnd: function (e, t) {
            "use strict";

            function i(r) {
                if (r.target === o && (e(n), n.params.queueEndCallbacks && (n._queueEndCallbacks = !1), !t)) for (s = 0; s < a.length; s++) n.h.removeEventListener(o, a[s], i)
            }

            var s, n = this, o = n.wrapper,
                a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
            if (e) for (s = 0; s < a.length; s++) n.h.addEventListener(o, a[s], i)
        }, getWrapperTranslate: function (e) {
            "use strict";
            var t, i, s, n, o = this.wrapper;
            return "undefined" == typeof e && (e = "horizontal" === this.params.mode ? "x" : "y"), this.support.transforms && this.params.useCSS3Transforms ? (s = window.getComputedStyle(o, null), window.WebKitCSSMatrix ? n = new WebKitCSSMatrix("none" === s.webkitTransform ? "" : s.webkitTransform) : (n = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = n.toString().split(",")), "x" === e && (i = window.WebKitCSSMatrix ? n.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === e && (i = window.WebKitCSSMatrix ? n.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5]))) : ("x" === e && (i = parseFloat(o.style.left, 10) || 0), "y" === e && (i = parseFloat(o.style.top, 10) || 0)), i || 0
        }, setWrapperTranslate: function (e, t, i) {
            "use strict";
            var s, n = this.wrapper.style, o = {x: 0, y: 0, z: 0};
            3 === arguments.length ? (o.x = e, o.y = t, o.z = i) : ("undefined" == typeof t && (t = "horizontal" === this.params.mode ? "x" : "y"), o[t] = e), this.support.transforms && this.params.useCSS3Transforms ? (s = this.support.transforms3d ? "translate3d(" + o.x + "px, " + o.y + "px, " + o.z + "px)" : "translate(" + o.x + "px, " + o.y + "px)", n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = s) : (n.left = o.x + "px", n.top = o.y + "px"), this.callPlugins("onSetWrapperTransform", o), this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, o)
        }, setWrapperTransition: function (e) {
            "use strict";
            var t = this.wrapper.style;
            t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e / 1e3 + "s", this.callPlugins("onSetWrapperTransition", {duration: e}), this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, e)
        }, h: {
            getWidth: function (e, t, i) {
                "use strict";
                var s = window.getComputedStyle(e, null).getPropertyValue("width"), n = parseFloat(s);
                return (isNaN(n) || s.indexOf("%") > 0 || n < 0) && (n = e.offsetWidth - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-right"))), t && (n += parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-right"))), i ? Math.ceil(n) : n
            }, getHeight: function (e, t, i) {
                "use strict";
                if (t) return e.offsetHeight;
                var s = window.getComputedStyle(e, null).getPropertyValue("height"), n = parseFloat(s);
                return (isNaN(n) || s.indexOf("%") > 0 || n < 0) && (n = e.offsetHeight - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-bottom"))), t && (n += parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-bottom"))), i ? Math.ceil(n) : n
            }, getOffset: function (e) {
                "use strict";
                var t = e.getBoundingClientRect(), i = document.body, s = e.clientTop || i.clientTop || 0,
                    n = e.clientLeft || i.clientLeft || 0, o = window.pageYOffset || e.scrollTop,
                    a = window.pageXOffset || e.scrollLeft;
                return document.documentElement && !window.pageYOffset && (o = document.documentElement.scrollTop, a = document.documentElement.scrollLeft), {
                    top: t.top + o - s,
                    left: t.left + a - n
                }
            }, windowWidth: function () {
                "use strict";
                return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0
            }, windowHeight: function () {
                "use strict";
                return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0
            }, windowScroll: function () {
                "use strict";
                return "undefined" != typeof pageYOffset ? {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                } : document.documentElement ? {
                    left: document.documentElement.scrollLeft,
                    top: document.documentElement.scrollTop
                } : void 0
            }, addEventListener: function (e, t, i, s) {
                "use strict";
                "undefined" == typeof s && (s = !1), e.addEventListener ? e.addEventListener(t, i, s) : e.attachEvent && e.attachEvent("on" + t, i)
            }, removeEventListener: function (e, t, i, s) {
                "use strict";
                "undefined" == typeof s && (s = !1), e.removeEventListener ? e.removeEventListener(t, i, s) : e.detachEvent && e.detachEvent("on" + t, i)
            }
        }, setTransform: function (e, t) {
            "use strict";
            var i = e.style;
            i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t
        }, setTranslate: function (e, t) {
            "use strict";
            var i = e.style, s = {x: t.x || 0, y: t.y || 0, z: t.z || 0},
                n = this.support.transforms3d ? "translate3d(" + s.x + "px," + s.y + "px," + s.z + "px)" : "translate(" + s.x + "px," + s.y + "px)";
            i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = n, this.support.transforms || (i.left = s.x + "px", i.top = s.y + "px")
        }, setTransition: function (e, t) {
            "use strict";
            var i = e.style;
            i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t + "ms"
        }, support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function () {
                "use strict";
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
                "use strict";
                var e = document.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            }(), transforms: window.Modernizr && Modernizr.csstransforms === !0 || function () {
                "use strict";
                var e = document.createElement("div").style;
                return "transform" in e || "WebkitTransform" in e || "MozTransform" in e || "msTransform" in e || "MsTransform" in e || "OTransform" in e
            }(), transitions: window.Modernizr && Modernizr.csstransitions === !0 || function () {
                "use strict";
                var e = document.createElement("div").style;
                return "transition" in e || "WebkitTransition" in e || "MozTransition" in e || "msTransition" in e || "MsTransition" in e || "OTransition" in e
            }(), classList: function () {
                "use strict";
                var e = document.createElement("div");
                return "classList" in e
            }()
        }, browser: {
            ie8: function () {
                "use strict";
                var e = -1;
                if ("Microsoft Internet Explorer" === navigator.appName) {
                    var t = navigator.userAgent, i = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
                    null !== i.exec(t) && (e = parseFloat(RegExp.$1))
                }
                return e !== -1 && e < 9
            }(), ie10: window.navigator.msPointerEnabled, ie11: window.navigator.pointerEnabled
        }
    }, (window.jQuery || window.Zepto) && !function (e) {
        "use strict";
        e.fn.swiper = function (t) {
            var i;
            return this.each(function (n) {
                var o = e(this), a = new s(o[0], t);
                n || (i = a), o.data("swiper", a)
            }), i
        }
    }(window.jQuery || window.Zepto), s
}), define("user/estimate/js/init", [], function (require, exports, module) {
    function option(e, t) {
        for (var i = '<div class="opt-list"><input name="N_' + e + '" value="{value}" type="radio"><span>{text}</span></div>', s = "", n = 0, o = t.length; n < o; n++) {
            var a = t[n];
            s += i.replace("{value}", a.score).replace("{text}", a.optionContent)
        }
        return s
    }

    function subject(e) {
        var t = "<div class='_qList'>{m}<div class='_qOptions'>{list}</div></div>",
            i = '<div class="subject">' + e.assessItemDTO.assessContent + "</div>",
            s = option(e.assessItemDTO.id, e.optionsList);
        return t.replace("{m}", i).replace("{list}", s)
    }

    function list(e) {
        for (var t = "", i = 0, s = e.length; i < s; i++) t += subject(e[i]);
        return t
    }

    function getList(e) {
        var t = "<div class='wenjuanCon'>" + list(e) + "</div><div class='btns'><span class='_Submit'>提交问卷</span><span class='_Prev'>上一题</span><font class='indexNow'>1</font>/<font class='totalIndex'>" + e.length + "</font><span class='_Next'>下一题</span></div><div class='bottomTip'>本问卷根据国家相关法规要求，旨在了解您对风险的承受意愿及能力，以帮助您控制投标风险</div>";
        return t
    }

    function openDialog() {
        $.Zebra_Dialog({
            title: "风险承受能力评估",
            buttons: !1,
            overlay_opacity: "0.5",
            custom_class: "dialog-estimate",
            source: {inline: getList(data)},
            width: 800,
            callback: function (params) {
                $("._qList:first").show(), sceneType && $("._toEnd").show(), $(".opt-list").delegate("input", "change", function () {
                    var e = $(this).parents("._qList"), t = (e.next(), e.next()), i = data.length, s = t.index();
                    if ($("._Next").removeClass("abled"), $("._Prev").removeClass("abled"), e.index() < i - 1) {
                        e.hide(), t.show();
                        var n = 1 * $(".indexNow").text();
                        $(".indexNow").text(++n)
                    } else $("._Submit").show(), $("._toEnd").hide();
                    0 != s && $("._Prev").addClass("abled"), t.find("input:checked").length > 0 && t.index() != i - 1 && $("._Next").addClass("abled")
                }), $(".btns").delegate(".abled", "click", function () {
                    if ($(this).hasClass("_Prev")) {
                        var e = $(".wenjuanCon ._qList:visible").hide(), t = e.prev().show();
                        $("._Next").removeClass("abled").addClass("abled");
                        var i = 1 * $(".indexNow").text();
                        $(".indexNow").text(--i), 0 == t.index() && $(this).removeClass("abled")
                    } else if ($(this).hasClass("_Next")) {
                        var e = $(".wenjuanCon ._qList:visible").hide();
                        $("._Prev").removeClass("abled").addClass("abled");
                        var s = e.next().show(), n = data.length, i = 1 * $(".indexNow").text();
                        $(".indexNow").text(++i), 0 != s.find("input:checked").length && s.index() != n - 1 || $(this).removeClass("abled")
                    }
                });
                var subStatus = !1;
                $("._Submit").click(function () {
                    if (!subStatus) {
                        subStatus = !0;
                        var score = 0;
                        $("._qOptions input:checked").each(function () {
                            score += 1 * this.value
                        }), $.post(ctl + "/assess/sub", {totalScore: score, hotKey: hotKey}, function (d) {
                            subStatus = !1, "string" == typeof d && (d = eval("(" + d + ")")), "1" == d.status ? showSuccMsg(d) : alert("提交失败，请刷新后重试")
                        })
                    }
                })
            }
        })
    }

    function showSuccMsg(e) {
        function t() {
            return !!isIng && ($("#_qOkCountdown").text(--s), s ? void setTimeout(function () {
                t()
            }, 1e3) : ($(".ZebraDialog_Close").click(), void callback()))
        }

        var i = e.data || {}, s = 4, n = i.gradeName || "--", o = i.investMaxLimit || "", a = $(".dialog-estimate"),
            r = '<div class="_qResult">您的测评结果为：' + n + '</div>{investMaxLimitTips}<div class="btns"><span class="_qOk">确定(<font id="_qOkCountdown">3</font>)</span></div>';
        r = r.replace(/{investMaxLimitTips}/g, o ? "<p>" + n + '出借人在本平台网贷产品出借累计金额上限为<span style="color:#ef7a46">' + o + "</span>万</p>" : ""), a.find(".btns").remove(), a.find(".bottomTip").remove(), a.find(".wenjuanCon").html(r), $("._qOk").click(function () {
            $(".ZebraDialog_Close").click(), callback(), isIng = !1
        }), t()
    }

    var data = [], hotKey = "EFCA1", sceneType = !1,
        ctl = window.location.href.indexOf("/user") > -1 ? "/user" : "/cms", isIng = !0, callback = function () {
            window.location.reload()
        };
    exports.buildWindow = function (opt, ctl, cb) {
        sceneType = !!opt || sceneType, callback = cb, $.ajax({
            url: ctl + "/assess/hotKey/" + hotKey,
            dataType: "json",
            type: "get",
            success: function (d) {
                data = "string" == typeof d ? eval("(" + d + ")") : d, data = data.data ? data.data : data, openDialog()
            },
            error: function (e) {
                console.log(e.statusText + " " + e.status)
            }
        })
    }
});