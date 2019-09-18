define("user/safety/js/init", ["../../../plugIn/laydate/laydate.cmd", "../../estimate/js/init", "./smdj", "./jymm", "./dlmm", "./yxrz", "./jjlxr", "./sjrz", "./add_recommend"], function (e, t, i) {
    function s() {
        var e = $(this).parent();
        e.hide(), e.siblings(".setting").show(), $(".onError,.onShow").remove();
        var t = $(this).parents(".column_msg"), i = t.siblings(".column_form");
        i[0] && i[0].reset(), t.removeClass("open"), i.hide(), i.find("input").removeClass("wrong"), $(this).hasClass("bk_cancel") && ($(".phone_info").show(), $(".bk_info").length > 0 && $(".bk_info").hide())
    }

    function a() {
        var e = $(this).parent();
        e.hide(), e.siblings(".cancel_setting").show();
        var t = $(this).parents(".column_msg"), i = t.siblings(".column_form");
        t.addClass("open"), i.show();
        var s = $(this).attr("myTarget");
        i.find("." + s).show().siblings().hide(), i.parent().siblings().find(".cancel_action").click(), "step_1_4" == s && ($(".num_area").hide(), $(".phone_info").hide(), $(".bk_info").show())
    }

    function o(e) {
        var t = {
            realName: "div[myid='realName'] .showSetting",
            mtdPassword: "div[myid='tdpwd'] .showSetting:eq(0)",
            gtdPassword: "div[myid='tdpwd'] .showSetting:eq(1)",
            lgPassword: "div[myid='lgPassword'] .showSetting",
            mobile: "div[myid='mobile'] .showSetting",
            email: "div[myid='email'] .showSetting",
            contact: "div[myid='contact'] .showSetting",
            assess: "div[myid='assess'] .startAssess"
        };
        t[e] && ($("body").scrollTop(200), $(t[e]).click())
    }

    e("../../../plugIn/laydate/laydate.cmd");
    var r = e("../../estimate/js/init");
    e("./smdj"), e("./jymm"), e("./dlmm"), e("./yxrz"), e("./jjlxr"), e("./sjrz");
    e("./add_recommend"), $(".startAssess").click(function () {
        function e() {
            window.location.reload()
        }

        r.buildWindow(!1, "/user", e)
    }), $(".cancel_action").click(s), $(".showSetting").click(a), $("#resetAccountLevel").click(function () {
        window.location.reload()
    });
    var d = $("#loctag").val();
    o(d), $("input").bind("focus", function () {
        $(this).removeClass("wrong")
    })
}), define("plugIn/laydate/laydate.cmd", [], function (e, t, i) {
    !function (e) {
        function t(e) {
            s.skinLink.href = s.getPath + n[4] + e + n[5]
        }

        var i = {
                path: "",
                skin: "fax",
                format: "YYYY-MM-DD",
                min: "1900-01-01 00:00:00",
                max: "2099-12-31 23:59:59",
                isv: !1,
                init: !1,
                istime: !1
            }, s = {}, a = document, o = "createElement", r = "getElementById", d = "getElementsByTagName",
            n = ["laydate_box", "laydate_void", "laydate_click", "LayDateSkin", "skins/", "/laydate.css"];
        e.laydate = function (t) {
            t = t || {};
            try {
                n.event = e.event ? e.event : laydate.caller.arguments[0]
            } catch (i) {
            }
            return s.run(t), laydate
        }, laydate.v = "1.1", s.getPath = function () {
            var e = document.scripts, t = e[e.length - 1].src;
            return i.path ? i.path : t.substring(0, t.lastIndexOf("/") + 1)
        }(), s.use = function (e, t) {
            var i = a[o]("link");
            i.type = "text/css", i.rel = "stylesheet", i.href = s.getPath + e + n[5], t && (i.id = t), a[d]("head")[0].appendChild(i), i = null
        }, s.trim = function (e) {
            return e = e || "", e.replace(/^\s|\s$/g, "").replace(/\s+/g, " ")
        }, s.digit = function (e) {
            return e < 10 ? "0" + (0 | e) : e
        }, s.stopmp = function (t) {
            return t = t || e.event, t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, this
        }, s.each = function (e, t) {
            for (var i = 0, s = e.length; i < s && t(i, e[i]) !== !1; i++) ;
        }, s.hasClass = function (e, t) {
            return e = e || {}, new RegExp("\\b" + t + "\\b").test(e.className)
        }, s.addClass = function (e, t) {
            return e = e || {}, s.hasClass(e, t) || (e.className += " " + t), e.className = s.trim(e.className), this
        }, s.removeClass = function (e, t) {
            if (e = e || {}, s.hasClass(e, t)) {
                var i = new RegExp("\\b" + t + "\\b");
                e.className = e.className.replace(i, "")
            }
            return this
        }, s.removeCssAttr = function (e, t) {
            var i = e.style;
            i.removeProperty ? i.removeProperty(t) : i.removeAttribute(t)
        }, s.shde = function (e, t) {
            e.style.display = t ? "none" : "block"
        }, s.query = function (e) {
            if (e && 1 === e.nodeType) {
                if ("input" !== e.tagName.toLowerCase()) throw new Error("选择器elem错误");
                return e
            }
            var t, e = s.trim(e).split(" "), i = a[r](e[0].substr(1));
            if (i) {
                if (e[1]) {
                    if (/^\./.test(e[1])) {
                        var o, n = e[1].substr(1), l = new RegExp("\\b" + n + "\\b");
                        return t = [], o = a.getElementsByClassName ? i.getElementsByClassName(n) : i[d]("*"), s.each(o, function (e, i) {
                            l.test(i.className) && t.push(i)
                        }), t[0] ? t : ""
                    }
                    return t = i[d](e[1]), t[0] ? i[d](e[1]) : ""
                }
                return i
            }
        }, s.on = function (t, i, a) {
            return t.attachEvent ? t.attachEvent("on" + i, function () {
                a.call(t, e.even)
            }) : t.addEventListener(i, a, !1), s
        }, s.stopMosup = function (e, t) {
            "mouseup" !== e && s.on(t, "mouseup", function (e) {
                s.stopmp(e)
            })
        }, s.run = function (e) {
            var t, a, o, r = s.query, d = n.event;
            try {
                o = d.target || d.srcElement || {}
            } catch (l) {
                o = {}
            }
            if (t = e.elem ? r(e.elem) : o, n.elemv = /textarea|input/.test(t.tagName.toLocaleLowerCase()) ? "value" : "innerHTML", ("init" in e ? e.init : i.init) && !t[n.elemv] && (t[n.elemv] = laydate.now(null, e.format || i.format)), d && o.tagName) {
                if (!t || t === s.elem) return;
                s.stopMosup(d.type, t), s.stopmp(d), s.view(t, e), s.reshow()
            } else a = e.event || "click", s.each((0 | t.length) > 0 ? t : [t], function (t, i) {
                s.stopMosup(a, i), s.on(i, a, function (t) {
                    s.stopmp(t), i !== s.elem && (s.view(i, e), s.reshow())
                })
            })
        }, s.scroll = function (e) {
            return e = e ? "scrollLeft" : "scrollTop", a.body[e] | a.documentElement[e]
        }, s.winarea = function (e) {
            return document.documentElement[e ? "clientWidth" : "clientHeight"]
        }, s.isleap = function (e) {
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        }, s.checkVoid = function (e, t, i) {
            var a = [];
            return e = 0 | e, t = 0 | t, i = 0 | i, e < s.mins[0] ? a = ["y"] : e > s.maxs[0] ? a = ["y", 1] : e >= s.mins[0] && e <= s.maxs[0] && (e == s.mins[0] && (t < s.mins[1] ? a = ["m"] : t == s.mins[1] && i < s.mins[2] && (a = ["d"])), e == s.maxs[0] && (t > s.maxs[1] ? a = ["m", 1] : t == s.maxs[1] && i > s.maxs[2] && (a = ["d", 1]))), a
        }, s.timeVoid = function (e, t) {
            if (s.ymd[1] + 1 == s.mins[1] && s.ymd[2] == s.mins[2]) {
                if (0 === t && e < s.mins[3]) return 1;
                if (1 === t && e < s.mins[4]) return 1;
                if (2 === t && e < s.mins[5]) return 1
            } else if (s.ymd[1] + 1 == s.maxs[1] && s.ymd[2] == s.maxs[2]) {
                if (0 === t && e > s.maxs[3]) return 1;
                if (1 === t && e > s.maxs[4]) return 1;
                if (2 === t && e > s.maxs[5]) return 1
            }
            if (e > (t ? 59 : 23)) return 1
        }, s.check = function () {
            var e = s.options.format.replace(/YYYY|MM|DD|hh|mm|ss/g, "\\d+\\").replace(/\\$/g, ""), t = new RegExp(e),
                i = s.elem[n.elemv], a = i.match(/\d+/g) || [], o = s.checkVoid(a[0], a[1], a[2]);
            if ("" !== i.replace(/\s/g, "")) {
                if (!t.test(i)) return s.elem[n.elemv] = "", s.msg("日期不符合格式，请重新选择。"), 1;
                if (o[0]) return s.elem[n.elemv] = "", s.msg("日期不在有效期内，请重新选择。"), 1;
                o.value = s.elem[n.elemv].match(t).join(), a = o.value.match(/\d+/g), a[1] < 1 ? (a[1] = 1, o.auto = 1) : a[1] > 12 ? (a[1] = 12, o.auto = 1) : a[1].length < 2 && (o.auto = 1), a[2] < 1 ? (a[2] = 1, o.auto = 1) : a[2] > s.months[(0 | a[1]) - 1] ? (a[2] = 31, o.auto = 1) : a[2].length < 2 && (o.auto = 1), a.length > 3 && (s.timeVoid(a[3], 0) && (o.auto = 1), s.timeVoid(a[4], 1) && (o.auto = 1), s.timeVoid(a[5], 2) && (o.auto = 1)), o.auto ? s.creation([a[0], 0 | a[1], 0 | a[2]], 1) : o.value !== s.elem[n.elemv] && (s.elem[n.elemv] = o.value)
            }
        }, s.months = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], s.viewDate = function (e, t, i) {
            var a = (s.query, {}), o = new Date;
            e < (0 | s.mins[0]) && (e = 0 | s.mins[0]), e > (0 | s.maxs[0]) && (e = 0 | s.maxs[0]), o.setFullYear(e, t, i), a.ymd = [o.getFullYear(), o.getMonth(), o.getDate()], s.months[1] = s.isleap(a.ymd[0]) ? 29 : 28, o.setFullYear(a.ymd[0], a.ymd[1], 1), a.FDay = o.getDay(), a.PDay = s.months[0 === t ? 11 : t - 1] - a.FDay + 1, a.NDay = 1, s.each(n.tds, function (e, t) {
                var i, o = a.ymd[0], r = a.ymd[1] + 1;
                t.className = "", e < a.FDay ? (t.innerHTML = i = e + a.PDay, s.addClass(t, "laydate_nothis"), 1 === r && (o -= 1), r = 1 === r ? 12 : r - 1) : e >= a.FDay && e < a.FDay + s.months[a.ymd[1]] ? (t.innerHTML = i = e - a.FDay + 1, e - a.FDay + 1 === a.ymd[2] && (s.addClass(t, n[2]), a.thisDay = t)) : (t.innerHTML = i = a.NDay++, s.addClass(t, "laydate_nothis"), 12 === r && (o += 1), r = 12 === r ? 1 : r + 1), s.checkVoid(o, r, i)[0] && s.addClass(t, n[1]), s.options.festival && s.festival(t, r + "." + i), t.setAttribute("y", o), t.setAttribute("m", r), t.setAttribute("d", i), o = r = i = null
            }), s.valid = !s.hasClass(a.thisDay, n[1]), s.ymd = a.ymd, n.year.value = s.ymd[0] + "年", n.month.value = s.digit(s.ymd[1] + 1) + "月", s.each(n.mms, function (e, t) {
                var i = s.checkVoid(s.ymd[0], (0 | t.getAttribute("m")) + 1);
                "y" === i[0] || "m" === i[0] ? s.addClass(t, n[1]) : s.removeClass(t, n[1]), s.removeClass(t, n[2]), i = null
            }), s.addClass(n.mms[s.ymd[1]], n[2]);
            var r = new Date;
            a.times = [s.inymd[s.elemIndexMap.hour] || r.getHours() || 0, s.inymd[s.elemIndexMap.minute] || r.getMinutes() || 0, s.inymd[s.elemIndexMap.second] || r.getSeconds() || 0], s.each(new Array(3), function (e) {
                s.hmsin[e].value = s.digit(s.timeVoid(a.times[e], e) ? 0 | s.mins[e + 3] : 0 | a.times[e])
            }), s[s.valid ? "removeClass" : "addClass"](n.ok, n[1])
        }, s.festival = function (e, t) {
            var i;
            switch (t) {
                case"1.1":
                    i = "元旦";
                    break;
                case"3.8":
                    i = "妇女";
                    break;
                case"4.5":
                    i = "清明";
                    break;
                case"5.1":
                    i = "劳动";
                    break;
                case"6.1":
                    i = "儿童";
                    break;
                case"9.10":
                    i = "教师";
                    break;
                case"10.1":
                    i = "国庆"
            }
            i && (e.innerHTML = i), i = null
        }, s.viewYears = function (e) {
            var t = s.query, i = "";
            s.each(new Array(14), function (t) {
                i += 7 === t ? "<li " + (parseInt(n.year.value) === e ? 'class="' + n[2] + '"' : "") + ' y="' + e + '">' + e + "年</li>" : '<li y="' + (e - 7 + t) + '">' + (e - 7 + t) + "年</li>"
            }), t("#laydate_ys").innerHTML = i, s.each(t("#laydate_ys li"), function (e, t) {
                "y" === s.checkVoid(t.getAttribute("y"))[0] ? s.addClass(t, n[1]) : s.on(t, "click", function (e) {
                    s.stopmp(e).reshow(), s.viewDate(0 | this.getAttribute("y"), s.ymd[1], s.ymd[2])
                })
            })
        }, s.getEachElementIndex = function (e) {
            var t = {}, i = 0;
            return e.replace(/YYYY|MM|DD|hh|mm|ss/g, function (e, s) {
                return "YYYY" === e ? t.year = i++ : "MM" === e ? t.month = i++ : "DD" === e ? t.day = i++ : "hh" === e ? t.hour = i++ : "mm" === e ? t.minute = i++ : "ss" === e && (t.second = i++), ""
            }), t
        }, s.initDate = function (e) {
            var t = (s.query, new Date), i = s.elem[n.elemv].match(/\d+/g) || [], a = s.getEachElementIndex(e);
            s.elemIndexMap = a, i.length < 3 && (i = s.options.start.match(/\d+/g) || [], i.length < 3 && (i = [t.getFullYear(), t.getMonth() + 1, t.getDate()])), s.inymd = i, s.viewDate(i[a.year], i[a.month] - 1, i[a.day])
        }, s.iswrite = function () {
            var e = s.query, t = {time: e("#laydate_hms")};
            s.shde(t.time, !("istime" in s.options ? s.options.istime : i.istime)), s.shde(n.oclear, !("isclear" in s.options ? s.options.isclear : 1)), s.shde(n.otoday, !("istoday" in s.options ? s.options.istoday : 1)), s.shde(n.ok, !("issure" in s.options ? s.options.issure : 1))
        }, s.orien = function (e, t) {
            var i, a = s.elem.getBoundingClientRect();
            e.style.left = a.left + (t ? 0 : s.scroll(1)) + "px", i = a.bottom + e.offsetHeight / 1.5 <= s.winarea() ? a.bottom - 1 : a.top > e.offsetHeight / 1.5 ? a.top - e.offsetHeight + 1 : s.winarea() - e.offsetHeight, e.style.top = Math.max(i + (t ? 0 : s.scroll()), 1) + "px"
        }, s.follow = function (e) {
            s.options.fixed ? (e.style.position = "fixed", s.orien(e, 1)) : (e.style.position = "absolute", s.orien(e))
        }, s.viewtb = function () {
            var e, t = [], i = ["日", "一", "二", "三", "四", "五", "六"], r = {}, n = a[o]("table"), l = a[o]("thead");
            return l.appendChild(a[o]("tr")), r.creath = function (e) {
                var t = a[o]("th");
                t.innerHTML = i[e], l[d]("tr")[0].appendChild(t), t = null
            }, s.each(new Array(6), function (i) {
                t.push([]), e = n.insertRow(0), s.each(new Array(7), function (s) {
                    t[i][s] = 0, 0 === i && r.creath(s), e.insertCell(s)
                })
            }), n.insertBefore(l, n.children[0]), n.id = n.className = "laydate_table", e = t = null, n.outerHTML.toLowerCase()
        }(), s.view = function (e, t) {
            var r, d = s.query, l = {};
            t = t || e, s.elem = e, s.options = t, s.options.format || (s.options.format = i.format), s.options.start = s.options.start || "", s.mm = l.mm = [s.options.min || i.min, s.options.max || i.max], s.mins = l.mm[0].match(/\d+/g), s.maxs = l.mm[1].match(/\d+/g), s.box ? s.shde(s.box) : (r = a[o]("div"), r.id = n[0], r.className = n[0], r.style.cssText = "position: absolute;", r.setAttribute("name", "laydate-v" + laydate.v), r.innerHTML = l.html = '<div class="laydate_top"><div class="laydate_ym laydate_y" id="laydate_YY"><a class="laydate_choose laydate_chprev laydate_tab"><cite></cite></a><input id="laydate_y" readonly><label></label><a class="laydate_choose laydate_chnext laydate_tab"><cite></cite></a><div class="laydate_yms"><a class="laydate_tab laydate_chtop"><cite></cite></a><ul id="laydate_ys"></ul><a class="laydate_tab laydate_chdown"><cite></cite></a></div></div><div class="laydate_ym laydate_m" id="laydate_MM"><a class="laydate_choose laydate_chprev laydate_tab"><cite></cite></a><input id="laydate_m" readonly><label></label><a class="laydate_choose laydate_chnext laydate_tab"><cite></cite></a><div class="laydate_yms" id="laydate_ms">' + function () {
                var e = "";
                return s.each(new Array(12), function (t) {
                    e += '<span m="' + t + '">' + s.digit(t + 1) + "月</span>"
                }), e
            }() + "</div></div></div>" + s.viewtb + '<div class="laydate_bottom"><ul id="laydate_hms"><li class="laydate_sj">时间</li><li><input readonly>:</li><li><input readonly>:</li><li><input readonly></li></ul><div class="laydate_time" id="laydate_time"></div><div class="laydate_btn"><a id="laydate_clear">清空</a><a id="laydate_today">今天</a><a id="laydate_ok">确认</a></div>' + (i.isv ? '<a href="http://sentsin.com/layui/laydate/" class="laydate_v" target="_blank">laydate-v' + laydate.v + "</a>" : "") + "</div>", a.body.appendChild(r), s.box = d("#" + n[0]), s.events(), r = null), s.follow(s.box), t.zIndex ? s.box.style.zIndex = t.zIndex : s.removeCssAttr(s.box, "z-index"), s.stopMosup("click", s.box), s.initDate(t.format), s.iswrite(), s.check()
        }, s.reshow = function () {
            return s.each(s.query("#" + n[0] + " .laydate_show"), function (e, t) {
                s.removeClass(t, "laydate_show")
            }), this
        }, s.close = function () {
            s.reshow(), s.shde(s.query("#" + n[0]), 1), s.elem = null
        }, s.parse = function (e, t, a) {
            return e = e.concat(t), a = a || (s.options ? s.options.format : i.format), a.replace(/YYYY|MM|DD|hh|mm|ss/g, function (t, i) {
                var a = -1;
                return "YYYY" === t ? a = 0 : "MM" === t ? a = 1 : "DD" === t ? a = 2 : "hh" === t ? a = 3 : "mm" === t ? a = 4 : "ss" === t && (a = 5), s.digit(e[a])
            })
        }, s.creation = function (e, t) {
            var i = (s.query, s.hmsin), a = s.parse(e, [i[0].value, i[1].value, i[2].value]);
            s.elem[n.elemv] = a, t || (s.close(), "function" == typeof s.options.choose && s.options.choose(a))
        }, s.events = function () {
            var t = s.query, i = {box: "#" + n[0]};
            s.addClass(a.body, "laydate_body"), n.tds = t("#laydate_table td"), n.mms = t("#laydate_ms span"), n.year = t("#laydate_y"), n.month = t("#laydate_m"), s.each(t(i.box + " .laydate_ym"), function (e, t) {
                s.on(t, "click", function (t) {
                    s.stopmp(t).reshow(), s.addClass(this[d]("div")[0], "laydate_show"), e || (i.YY = parseInt(n.year.value), s.viewYears(i.YY))
                })
            }), s.on(t(i.box), "click", function () {
                s.reshow()
            }), i.tabYear = function (e) {
                0 === e ? s.ymd[0]-- : 1 === e ? s.ymd[0]++ : 2 === e ? i.YY -= 14 : i.YY += 14, e < 2 ? (s.viewDate(s.ymd[0], s.ymd[1], s.ymd[2]), s.reshow()) : s.viewYears(i.YY)
            }, s.each(t("#laydate_YY .laydate_tab"), function (e, t) {
                s.on(t, "click", function (t) {
                    s.stopmp(t), i.tabYear(e)
                })
            }), i.tabMonth = function (e) {
                e ? (s.ymd[1]++, 12 === s.ymd[1] && (s.ymd[0]++, s.ymd[1] = 0)) : (s.ymd[1]--, s.ymd[1] === -1 && (s.ymd[0]--, s.ymd[1] = 11)), s.viewDate(s.ymd[0], s.ymd[1], s.ymd[2])
            }, s.each(t("#laydate_MM .laydate_tab"), function (e, t) {
                s.on(t, "click", function (t) {
                    s.stopmp(t).reshow(), i.tabMonth(e)
                })
            }), s.each(t("#laydate_ms span"), function (e, t) {
                s.on(t, "click", function (e) {
                    s.stopmp(e).reshow(), s.hasClass(this, n[1]) || s.viewDate(s.ymd[0], 0 | this.getAttribute("m"), s.ymd[2])
                })
            }), s.each(t("#laydate_table td"), function (e, t) {
                s.on(t, "click", function (e) {
                    s.hasClass(this, n[1]) || (s.stopmp(e), s.creation([0 | this.getAttribute("y"), 0 | this.getAttribute("m"), 0 | this.getAttribute("d")]))
                })
            }), n.oclear = t("#laydate_clear"), s.on(n.oclear, "click", function () {
                s.elem[n.elemv] = "", s.close()
            }), n.otoday = t("#laydate_today"), s.on(n.otoday, "click", function () {
                var e = new Date, t = s.hmsin, i = new Date;
                t[0].value = i.getHours(), t[1].value = i.getMinutes(), t[2].value = i.getSeconds(), s.creation([e.getFullYear(), e.getMonth() + 1, e.getDate()])
            }), n.ok = t("#laydate_ok"), s.on(n.ok, "click", function () {
                s.valid && s.creation([s.ymd[0], s.ymd[1] + 1, s.ymd[2]])
            }), i.times = t("#laydate_time"), s.hmsin = i.hmsin = t("#laydate_hms input"), i.hmss = ["小时", "分钟", "秒数"], i.hmsarr = [], s.msg = function (e, a) {
                var o = '<div class="laydte_hsmtex">' + (a || "提示") + "<span>×</span></div>";
                "string" == typeof e ? (o += "<p>" + e + "</p>", s.shde(t("#" + n[0])), s.removeClass(i.times, "laydate_time1").addClass(i.times, "laydate_msg")) : (i.hmsarr[e] ? o = i.hmsarr[e] : (o += '<div id="laydate_hmsno" class="laydate_hmsno">', s.each(new Array(0 === e ? 24 : 60), function (e) {
                    o += "<span>" + e + "</span>"
                }), o += "</div>", i.hmsarr[e] = o), s.removeClass(i.times, "laydate_msg"), s[0 === e ? "removeClass" : "addClass"](i.times, "laydate_time1")), s.addClass(i.times, "laydate_show"), i.times.innerHTML = o
            }, i.hmson = function (e, i) {
                var a = t("#laydate_hmsno span"), o = s.valid ? null : 1;
                s.each(a, function (t, a) {
                    o ? s.addClass(a, n[1]) : s.timeVoid(t, i) ? s.addClass(a, n[1]) : s.on(a, "click", function (t) {
                        s.hasClass(this, n[1]) || (e.value = s.digit(0 | this.innerHTML))
                    })
                }), s.addClass(a[0 | e.value], "laydate_click")
            }, s.each(i.hmsin, function (e, t) {
                s.on(t, "click", function (t) {
                    s.stopmp(t).reshow(), s.msg(e, i.hmss[e]), i.hmson(this, e)
                })
            }), s.on(a, "mouseup", function () {
                var e = t("#" + n[0]);
                e && "none" !== e.style.display && (s.check() || s.close())
            }).on(a, "keydown", function (t) {
                t = t || e.event;
                var i = t.keyCode;
                13 === i && s.elem && s.creation([s.ymd[0], s.ymd[1] + 1, s.ymd[2]])
            })
        }, s.init = function () {
            s.skinLink = s.query("#" + n[3])
        }(), laydate.reset = function () {
            s.box && s.elem && s.follow(s.box)
        }, laydate.now = function (e, t) {
            var i = new Date(0 | e ? function (e) {
                return e < 864e5 ? +new Date + 864e5 * e : e
            }(parseInt(e)) : +new Date);
            return s.parse([i.getFullYear(), i.getMonth() + 1, i.getDate()], [i.getHours(), i.getMinutes(), i.getSeconds()], t)
        }, laydate.skin = t;
        var l = null;
        window.onresize = function () {
            l && clearTimeout(l), l = setTimeout(function () {
                laydate.reset()
            }, 150)
        }
    }(window)
}), define("user/estimate/js/init", [], function (require, exports, module) {
    function option(e, t) {
        for (var i = '<div class="opt-list"><input name="N_' + e + '" value="{value}" type="radio"><span>{text}</span></div>', s = "", a = 0, o = t.length; a < o; a++) {
            var r = t[a];
            s += i.replace("{value}", r.score).replace("{text}", r.optionContent)
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
                        var a = 1 * $(".indexNow").text();
                        $(".indexNow").text(++a)
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
                        var s = e.next().show(), a = data.length, i = 1 * $(".indexNow").text();
                        $(".indexNow").text(++i), 0 != s.find("input:checked").length && s.index() != a - 1 || $(this).removeClass("abled")
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

        var i = e.data || {}, s = 4, a = i.gradeName || "--", o = i.investMaxLimit || "", r = $(".dialog-estimate"),
            d = '<div class="_qResult">您的测评结果为：' + a + '</div>{investMaxLimitTips}<div class="btns"><span class="_qOk">确定(<font id="_qOkCountdown">3</font>)</span></div>';
        d = d.replace(/{investMaxLimitTips}/g, o ? "<p>" + a + '出借人在本平台网贷产品出借累计金额上限为<span style="color:#ef7a46">' + o + "</span>万</p>" : ""), r.find(".btns").remove(), r.find(".bottomTip").remove(), r.find(".wenjuanCon").html(d), $("._qOk").click(function () {
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
}), define("user/safety/js/smdj", ["./check_idno"], function (e, t, i) {
    function s(e, t) {
        if ("" == e) {
            t.html(l.replace("{tips}", "请填写您的真实姓名"));
            var i = t.attr("id").replace("Tip", "");
            return $("#" + i).addClass("wrong"), !1
        }
        if (!d.test(e) || e.length < 2 || e.length > 20) {
            t.html(l.replace("{tips}", "姓名格式不正确 "));
            var i = t.attr("id").replace("Tip", "");
            return $("#" + i).addClass("wrong"), !1
        }
        return $("#smdj_usernameTip").empty(), !0
    }

    function a(e, t, i) {
        if (t = t ? t : 1, "" == e) return $("#smdj_identity_numTip").html(l.replace("{tips}", "请填写您的有效证件号码")), $("#smdj_identity_num").addClass("wrong"), !1;
        if (!n[t].test(e)) return $("#smdj_identity_numTip").html(l.replace("{tips}", "证件号码格式不正确")), $("#smdj_identity_num").addClass("wrong"), !1;
        if (1 == t && !r.IdCardValidate(e)) return $("#smdj_identity_numTip").html(l.replace("{tips}", "证件号码证号无效，请重新填写")), $("#smdj_identity_num").addClass("wrong"), !1;
        $("#smdj_identity_numTip").empty();
        var s = function () {
            var e = $("#smdj_identity_num").val().toUpperCase(),
                t = 15 == e.length ? "19" + e.substr(6, 6) : e.substr(6, 8);
            $("#smdj_birthday").val(t.substr(0, 4) + "-" + t.substr(4, 2) + "-" + t.substr(6, 2))
        }, a = 1 != t || i ? function () {
        } : s;
        return o(e, a, i), !0
    }

    function o(e, t, i) {
        if (!i) {
            var s = $("#smdj_idtype").attr("val");
            $.post("/user/existidno", {idNo: e, idType: s}, function (e) {
                1 == e.status && ("true" == e.data ? ($("#smdj_identity_numTip").html(l.replace("{tips}", "您填写的证件号码已被登记，请重新填写")), $("#smdj_identity_num").addClass("wrong")) : 0 == e.errorCode ? window.location.reload() : ($("#smdj_identity_numTip").empty(), t && t()))
            })
        }
    }

    var r = e("./check_idno"), d = /^[\u4e00-\u9fa5]+[\u4e00-\u9fa5\u00b7]*[\u4e00-\u9fa5]+$/,
        n = {1: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, 3: /^(M|H)\d{8}$/, 2: /^\d{8}$/},
        l = "<div class='onError'>{tips}</div>", p = "<div class='onShow'>{tips}</div>";
    $("#smdj_username").bind("focus", function () {
        $("#smdj_usernameTip").html(p.replace("{tips}", '支持简体中文及间隔号"·"；请真实填写，否则会影响您提现与投标计划所签订的合同的合法性'))
    }).bind("blur", function () {
        s(this.value, $("#smdj_usernameTip"))
    }), $("#smdj_identity_num").bind("focus", function () {
        $("#smdj_identity_numTip").html(p.replace("{tips}", "证件号码必须与您有效证件相符，填写后不可修改，是账号归属权凭证。请真实填写")), $("#smdj_identity_num").addClass("wrong")
    }).bind("blur", function () {
        a(this.value, $("#smdj_idtype").attr("val"))
    }), window.idtypeChange = function () {
        1 != $("#smdj_idtype").attr("val") ? (a($("#smdj_identity_num").val().toUpperCase(), $("#smdj_idtype").attr("val")), $("#smdj_birthdayTip").removeAttr("style")) : a($("#smdj_identity_num").val().toUpperCase(), $("#smdj_idtype").attr("val")) || $("#smdj_birthday").val("")
    }, window.onclearedBirth = function () {
        if (1 != $("#smdj_idtype").attr("val")) return $("#smdj_birthdayTip").removeAttr("style"), !0;
        var e = $("#smdj_birthday").val();
        return "" == e ? ($("#smdj_birthdayTip").css("color", "#f00"), !1) : !!/^\d{4}-\d{2}-\d{2}$/.test(e) || ($("#smdj_birthdayTip").html(l.replace("{tips}", "日期格式不正确")), !1)
    }, $("#smdj_sub_btn").bind("click", function () {
        function e() {
            $.post("/user/authrname", {realName: t, idNo: i, idType: r, birthday: d}, function (e) {
                1 == e.status ? window.location.reload() : 1036 == e.errorCode ? ($("#smdj_identity_numTip").html(l.replace("{tips}", "该账号已经实名认证")), $("#smdj_identity_num").addClass("wrong")) : 1057 == e.errorCode ? $("#smdj_birthdayTip").html(l.replace("{tips}", "小牛会在您生日的当天赠送投标返现红包")) : "RealnameAuth_Params_ERROR" == e.errorCode ? ($("#smdj_identity_numTip").html(l.replace("{tips}", "实名验证请求参数错误")), $("#smdj_identity_num").addClass("wrong")) : "RealnameAuth_Service_ERROR" == e.errorCode ? ($("#smdj_identity_numTip").html(l.replace("{tips}", "实名验证服务失败")), $("#smdj_identity_num").addClass("wrong")) : "RealNameAuth_NotAllowed_ERROR" == e.errorCode ? (0 == e.data ? ($("#smdj_identity_numTip").html(l.replace("{tips}", "您的验证次数已经超过上限，请联系客服")), $("#smdj_identity_num").attr("disabled", "disabled")) : $("#smdj_identity_numTip").html(l.replace("{tips}", "您填写的证件信息有误，您还可以填写" + e.data + "次")), $("#smdj_identity_num").addClass("wrong")) : "RealNameAuth_OverDayErrorLimit" == e.errorCode ? ($("#smdj_identity_numTip").html(l.replace("{tips}", "您的验证次数已经超过上限，请联系客服")), $("#smdj_identity_num").attr("disabled", "disabled"), $("#smdj_identity_num").addClass("wrong")) : $("#smdj_identity_numTip").html(l.replace("{tips}", "网络异常，请稍后重试"))
            })
        }

        var t = $("#smdj_username").val(), i = $("#smdj_identity_num").val().toUpperCase(),
            r = $("#smdj_idtype").attr("val"), d = $("#smdj_birthday").val();
        if (s(t, $("#smdj_usernameTip")) && a(i, r, !0)) {
            if (!onclearedBirth()) return;
            o(i, e)
        }
    }), $("#birth_sub_btn").click(function () {
        var e = $("#birth_birthday").val();
        return "" == e ? void $("#birth_birthdayTip").html(l.replace("{tips}", "请选择你的出生日期")) : void $.post("/user/setbirthday", {birthday: e}, function (e) {
            1 == e.status ? window.location.reload() : $("#birth_birthdayTip").html(l.replace("{tips}", "网络异常，请稍后重试"))
        })
    })
}), define("user/safety/js/check_idno", [], function (e, t, i) {
    function s(e) {
        var t = 0;
        "x" == e[17].toLowerCase() && (e[17] = 10);
        for (var i = 0; i < 17; i++) t += d[i] * e[i];
        return valCodePosition = t % 11, e[17] == n[valCodePosition]
    }

    function a(e) {
        var t = e.substring(6, 10), i = e.substring(10, 12), s = e.substring(12, 14),
            a = new Date(t, parseFloat(i) - 1, parseFloat(s));
        return a.getFullYear() == parseFloat(t) && a.getMonth() == parseFloat(i) - 1 && a.getDate() == parseFloat(s)
    }

    function o(e) {
        var t = e.substring(6, 8), i = e.substring(8, 10), s = e.substring(10, 12),
            a = new Date(t, parseFloat(i) - 1, parseFloat(s));
        return a.getYear() == parseFloat(t) && a.getMonth() == parseFloat(i) - 1 && a.getDate() == parseFloat(s)
    }

    function r(e) {
        return e.replace(/(^\s*)|(\s*$)/g, "")
    }

    var d = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1], n = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    t.IdCardValidate = function (e) {
        if (e = r(e.replace(/ /g, "")), 15 == e.length) return o(e);
        if (18 == e.length) {
            var t = e.split("");
            return !(!a(e) || !s(t))
        }
        return !1
    };
    var l = {};
    t.waiting_fun = function (e, i, s, a) {
        if (s = s ? s : "userforwaiting", l[s] && window.clearTimeout(l[s]), !--i) return e.removeClass("disadbed_bg").find(".get_code_text").text("获取验证码"), e.find(".pvoice").remove(), void $("#" + a).removeAttr("disabled");
        a && $("#" + a).attr("disabled", "disabled");
        var o = i + "秒后可再获取";
        e.find(".get_code_text").text(o), l[s] = setTimeout(function () {
            t.waiting_fun(e, i, s, a)
        }, 1e3)
    }, t.clear_waiting = function (e, t, i) {
        t = t ? t : "userforwaiting", l[t] && window.clearTimeout(l[t]), e.removeClass("disadbed_bg").find(".get_code_text").text("获取验证码"), e.find(".pvoice").remove(), $("#" + i).removeAttr("disabled")
    }, t.show_getYY_ui = function (e, t, i, s, a) {
        var o = e.attr("id");
        e.append("<span targetForm='" + (a || "") + "' targetId='" + o + "' codeType='" + t + "' bizCode='" + i + "' phone='" + (s || "") + "' class='pvoice pve-line'>短信已发送到您的手机，如果没有收到验证码，请<i class='phd'>使用语音验证</i></span>")
    }, t.show_getBkYY_ui = function (e, t, i, s, a) {
        var o = e.attr("id");
        e.append("<span targetForm='" + (a || "") + "' targetId='" + o + "' codeType='" + t + "' bizCode='" + i + "' phone='" + (s || "") + "' class='pvoice pve-line bk_line'>短信已发送到您的手机</span>")
    }, $(".get_code").delegate(".phd", "click", function () {
        var e = $(this).parent().attr("codeType"), i = $(this).parent().attr("phone"),
            s = $(this).parent().attr("targetId"), a = $(this).parent().attr("bizCode"),
            o = $(this).parent().attr("targetForm"), r = {sendType: 0, bizCode: a};
        i && (r.mobile = i);
        var d = this;
        $.post("/user/sendverifycode", r, function (i) {
            1 == i.status ? (l[e] && window.clearTimeout(l[e]), t.waiting_fun($(d).parents(".get_code"), 60, e, o), $(d).parent().addClass("offset").html("请注意接听系统语音验证码")) : 1020 == i.errorCode ? $("#" + s).parents("tr").next("tr").find("div").html("<div class='onError'>60秒内只能获取一次验证码</div>") : 0 == i.errorCode ? window.location.reload() : $("#" + s).parents("tr").next("tr").find("div").html("<div class='onError'>网络异常,请稍后操作</div>")
        })
    })
}), define("user/safety/js/jymm", ["./check_idno"], function (e, t, s) {
    function a(e, t) {
        var i = /^\d+$/, s = /^[a-z]+$/, a = /^[A-Z]+$/, o = /^[^0-9a-zA-Z]+$/, r = /\s/,
            d = t.attr("id").replace("Tip", "");
        return e.length < 8 || e.length > 20 ? (u("请输入8~20个字符的密码", d, t), !1) : i.test(e) ? (u("密码不能为纯数字", d, t), !1) : s.test(e) ? (u("密码不能为纯小写字母", d, t), !1) : a.test(e) ? (u("密码不能为纯大写字母", d, t), !1) : o.test(e) ? (u("密码不能为纯符号", d, t), !1) : r.test(e) ? (u("密码不能包含空格", d, t), !1) : (t.empty(), !0)
    }

    function o(e, t, i) {
        if (e == t) return i.empty(), !0;
        i.html(_.replace("{tips}", "两次密码输入不一致"));
        var s = i.attr("id").replace("Tip", "");
        return $("#" + s).addClass("wrong"), !1
    }

    function r() {
        $(".step_1:visible").hide().siblings(".step_2").show()
    }

    function d() {
        $(".step_2:visible").hide().siblings(".step_3").show()
    }

    function n(e) {
        return "" == e ? ($("#jymm_zh_step1_idnoTip").html(_.replace("{tips}", "请填写您的身份证号码")), $("#jymm_zh_step1_idno").addClass("wrong"), !1) : ($("#jymm_zh_step1_idnoTip").empty(), !0)
    }

    function l() {
        $(".pswPower").hide()
    }

    var p = e("./check_idno"), _ = "<div class='onError'>{tips}</div>", c = "<div class='onShow'>{tips}</div>",
        m = "请输入8~20个字符的密码";
    $("#jymm_xg_trapwd").bind("keyup", l).bind("focus", function () {
        $("#jymm_xg_trapwdTip").html(c.replace("{tips}", m)), l.call(this)
    }).bind("blur", function () {
        a(this.value, $("#jymm_xg_trapwdTip"))
    }), $("#jymm_xg_old_trapwd").bind("focus", function () {
        $("#jymm_xg_old_trapwdTip").html(c.replace("{tips}", "请输入原密码"))
    }).bind("blur", function () {
        "" == this.value ? ($("#jymm_xg_old_trapwdTip").html(_.replace("{tips}", "原密码不能为空")), $(this).addClass("wrong")) : $("#jymm_xg_old_trapwdTip").empty()
    });
    var u = function (e, t, i) {
        i.html(_.replace("{tips}", e)), $("#" + t).addClass("wrong")
    };
    $("#jymm_xg_trapwd_qr").bind("focus", function () {
        $("#jymm_xg_trapwd_qrTip").html(c.replace("{tips}", "请再次输入密码"))
    }).bind("blur", function () {
        var e = $("#jymm_xg_trapwd").val();
        o(e, this.value, $("#jymm_xg_trapwd_qrTip"))
    }), $("#jymm_xg_sub_btn").click(function () {
        var e = $("#jymm_xg_trapwd").val();
        if ("" == $("#jymm_xg_old_trapwd").val()) return $("#jymm_xg_old_trapwdTip").html(_.replace("{tips}", "原密码不能为空")), void $("#jymm_xg_old_trapwd").addClass("wrong");
        var t = a(e, $("#jymm_xg_trapwdTip")), i = o(e, $("#jymm_xg_trapwd_qr").val(), $("#jymm_xg_trapwd_qrTip"));
        if (t && i) {
            var s = {
                curPayCode: RSAUtils.pwdEncode($("#jymm_xg_old_trapwd").val()),
                newPayCode: RSAUtils.pwdEncode(e),
                verifyCode: $("#jymm_xg_code").val()
            };
            $.post("/user/modifypaycode", s, function (e) {
                var t = $("#jymm_xg_trapwdTip"), i = $("#jymm_xg_old_trapwdTip");
                1 == e.status ? window.location.reload() : "1017" == e.errorCode ? (i.html(_.replace("{tips}", "交易密码错误")), $("#jymm_xg_old_trapwd").addClass("wrong")) : "1012" == e.errorCode ? (t.html(_.replace("{tips}", "新交易密码不能为空")), $("#jymm_xg_trapwd").addClass("wrong")) : "1055" == e.errorCode ? (t.html(_.replace("{tips}", "为了保护您的账户资产安全，交易密码不能与登录密码相同")), $("#jymm_xg_trapwd").addClass("wrong")) : 0 == e.errorCode ? window.location.reload() : t.html(_.replace("{tips}", "网络异常,请稍后操作"))
            })
        }
    }), $("#jymm_xg_getcode").bind("click", function () {
        return "" == $("#jymm_xg_old_trapwd").val() ? void $("#jymm_xg_old_trapwdTip").addClass("wrong").html(_.replace("{tips}", "请输入原交易密码")) : void($(this).hasClass("disadbed_bg") || y("1"))
    });
    var y = function (e) {
        var t = $("#jymm_xg_getcode");
        $.post("/user/modifypaycode/sendverify", {
            sendType: e,
            curDealPassword: RSAUtils.pwdEncode($("#jymm_xg_old_trapwd").val())
        }, function (i) {
            1 == i.status ? (t.addClass("disadbed_bg"), 1 == e ? $("#jymm_xg_potcode").html("<span class='pvoice pve-line jycode_void'>短信已发送到您的手机，如果没有收到验证码，请<i class='phd'>使用语音验证</i></span>") : $("#jymm_xg_potcode").addClass("offset").html("请注意接听系统语音验证码"), p.waiting_fun(t, 60, "jymm_xg_getcode")) : 0 == i.status && 5 == i.errorCode ? $("#jymm_xg_old_trapwdTip").addClass("wrong").html(_.replace("{tips}", i.errorDetails)) : 0 == i.status && 7 == i.errorCode ? $("#jymm_xg_trapwdTip").addClass("wrong").html(_.replace("{tips}", i.errorDetails)) : 0 == i.status && $("#jymm_xg_er").addClass("wrong").html(_.replace("{tips}", i.errorDetails))
        })
    };
    $("#jymm_xg_potcode").delegate(".phd", "click", function () {
        y("0")
    }), $("#jymm_rz_step1_phonecode").bind("focus", function () {
        $("#jymm_rz_step1_phonecodeTip").empty()
    }).bind("blur", function () {
        "" == this.value && ($("#jymm_rz_step1_phonecodeTip").html(_.replace("{tips}", "请输入验证码")), $(this).addClass("wrong"))
    }), $("#jymm_rz_step1_get_phonecode").bind("click", function () {
        var e = this;
        if (!$(this).hasClass("disadbed_bg")) {
            var e = this;
            $.post("/user/sendverifycode", {sendType: 1, bizCode: 1, msgTemp: "ssp"}, function (t) {
                1 == t.status ? ($(e).addClass("disadbed_bg"), p.show_getYY_ui($(e), "jymm_rz_getpcode", "1"), p.waiting_fun($(e), 60, "jymm_rz_getpcode")) : 1020 == t.errorCode ? $("#jymm_rz_step1_phonecodeTip").html(_.replace("{tips}", "60秒内只能获取一次验证码")) : 0 == t.errorCode ? window.location.reload() : $("#jymm_rz_step1_phonecodeTip").html(_.replace("{tips}", "网络异常,请稍后操作"));
            })
        }
    }), $("#jymm_rz_step1_submit").bind("click", function () {
        var e = $("#jymm_rz_step1_phonecode").val();
        return "" == e ? ($("#jymm_rz_step1_phonecodeTip").html(_.replace("{tips}", "请输入验证码")), void $("#jymm_rz_step1_phonecode").addClass("wrong")) : void $.post("/user/authid/vcode", {
            verifyCode: e,
            bizCode: 1
        }, function (e) {
            1 == e.status ? r() : 1011 == e.errorCode || 6 == e.errorCode ? ($("#jymm_rz_step1_phonecodeTip").html(_.replace("{tips}", "验证码错误")), $("#jymm_rz_step1_phonecode").addClass("wrong")) : 0 == e.errorCode ? window.location.reload() : $("#jymm_rz_step1_phonecodeTip").html(_.replace("{tips}", "网络异常,请稍后操作"))
        })
    }), $("#jymm_rz_step2_new_pwd").bind("keyup", l).bind("focus", function () {
        $("#jymm_rz_step2_new_pwdTip").html(c.replace("{tips}", m)), l.call(this)
    }).bind("blur", function () {
        a(this.value, $("#jymm_rz_step2_new_pwdTip"))
    }), $("#jymm_rz_step2_new_pwd_qr").bind("focus", function () {
        $("#jymm_rz_step2_new_pwd_qrTip").html(c.replace("{tips}", "请再次输入密码"))
    }).bind("blur", function () {
        var e = $("#jymm_rz_step2_new_pwd").val();
        o(e, this.value, $("#jymm_rz_step2_new_pwd_qrTip"))
    }), $("#jymm_rz_step2_submit").click(function () {
        var e = $("#jymm_rz_step2_new_pwd").val(), t = $("#jymm_rz_step2_new_pwd_qr").val(),
            i = a(e, $("#jymm_rz_step2_new_pwdTip")), s = o(e, t, $("#jymm_rz_step2_new_pwd_qrTip"));
        if (i && s) {
            var r = {payCode: RSAUtils.pwdEncode(e)};
            $.post("/user/setpaycode", r, function (e) {
                var t = $("#jymm_rz_step2_new_pwdTip");
                1 == e.status ? d() : "1012" == e.errorCode ? (t.html(_.replace("{tips}", "交易密码不能为空")), $("#jymm_rz_step2_new_pwd").addClass("wrong")) : "1055" == e.errorCode ? (t.html(_.replace("{tips}", "为了保护您的账户资产安全，交易密码不能与登录密码相同")), $("#jymm_rz_step2_new_pwd").addClass("wrong")) : 0 == e.errorCode ? window.location.reload() : t.html(_.replace("{tips}", "网络异常,请稍后操作"))
            })
        }
    }), $("#jymm_zh_step1_idno").bind("focus", function () {
        $("#jymm_zh_step1_idnoTip").html(c.replace("{tips}", "请填写您的正确身份证号码"))
    }).bind("blur", function () {
        n(this.value)
    }), $("#jymm_zh_step1_phnoecode").bind("focus", function () {
        $("#jymm_zh_step1_phnoecodeTip").html(c.replace("{tips}", "请输入手机验证码"))
    }).bind("blur", function () {
        "" == this.value ? ($("#jymm_zh_step1_phnoecodeTip").html(_.replace("{tips}", "手机验证码不能为空")), $(this).addClass("wrong")) : $("#jymm_zh_step1_phnoecodeTip").empty()
    }), $("#jymm_zh_step1_getcode").click(function () {
        var e = this;
        if (!$(this).hasClass("disadbed_bg")) {
            var e = this;
            $.post("/user/sendverifycode", {sendType: 1, bizCode: 1, msgTemp: "sfp"}, function (t) {
                1 == t.status ? ($(e).addClass("disadbed_bg"), p.show_getYY_ui($(e), "jymm_zh_step1_getcode", 1), p.waiting_fun($(e), 60, "jymm_zh_step1_getcode")) : 1020 == t.errorCode ? $("#jymm_zh_step1_phnoecodeTip").html(_.replace("{tips}", "60秒内只能获取一次验证码")) : 0 == t.errorCode ? window.location.reload() : $("#jymm_zh_step1_phnoecodeTip").html(_.replace("{tips}", "网络异常,请稍后操作"))
            })
        }
    }), $("#jymm_zh_step1_submit").bind("click", function () {
        var e = $("#jymm_zh_step1_idno"), t = e.val(), i = ($("#phnoe").val(), $("#jymm_zh_step1_phnoecode").val()),
            s = {verifyCode: i, bizCode: 1}, a = "/user/authid/vcode";
        if (!e.length || (a = "/user/authid/idnovcode", s.idNO = t, n(t))) return "" == i ? ($("#jymm_zh_step1_phnoecodeTip").html(_.replace("{tips}", "请输入手机验证码")), void $("#jymm_zh_step1_phnoecode").addClass("wrong")) : void $.post(a, s, function (e) {
            1 == e.status ? r() : "1019" == e.errorCode ? ($("#jymm_zh_step1_idnoTip").html(_.replace("{tips}", "身份证号不正确")), $("#jymm_zh_step1_idno").addClass("wrong")) : "1003" == e.errorCode ? ($("#jymm_zh_step1_idnoTip").html(_.replace("{tips}", "身份证号格式错误")), $("#jymm_zh_step1_idno").addClass("wrong")) : "1011" == e.errorCode || 6 == e.errorCode ? ($("#jymm_zh_step1_phnoecodeTip").html(_.replace("{tips}", "手机验证码不正确")), $("#jymm_zh_step1_phnoecode").addClass("wrong")) : 0 == e.errorCode ? window.location.reload() : $("#jymm_zh_step1_phnoecodeTip").html(_.replace("{tips}", "网络异常,请稍后操作"))
        })
    }), $("#jymm_zh_step2_newpwd").bind("keyup", l).bind("focus", function () {
        $("#jymm_zh_step2_newpwdTip").html(c.replace("{tips}", m)), l.call(this)
    }).bind("blur", function () {
        a(this.value, $("#jymm_zh_step2_newpwdTip"))
    }), $("#jymm_zh_step2_newpwd_qr").bind("focus", function () {
        $("#jymm_zh_step2_newpwd_qrTip").html(c.replace("{tips}", "请再次输入密码"))
    }).bind("blur", function () {
        var e = $("#jymm_zh_step2_newpwd").val();
        o(e, this.value, $("#jymm_zh_step2_newpwd_qrTip"))
    }), $("#jymm_zh_step2_submit").click(function () {
        var e = $("#jymm_zh_step2_newpwd").val(), t = $("#jymm_zh_step2_newpwd_qr").val(),
            i = a(e, $("#jymm_zh_step2_newpwdTip")), s = o(e, t, $("#jymm_zh_step2_newpwd_qrTip"));
        if (i && s) {
            var r = {payCode: RSAUtils.pwdEncode(e)};
            $.post("/user/setpaycode", r, function (e) {
                var t = $("#jymm_zh_step2_newpwdTip");
                1 == e.status ? d() : "1012" == e.errorCode ? (t.html(_.replace("{tips}", "交易密码不能为空")), $("#jymm_zh_step2_newpwd").addClass("wrong")) : "1055" == e.errorCode ? (t.html(_.replace("{tips}", "为了保护您的账户资产安全，交易密码不能与登录密码相同")), $("#jymm_zh_step2_newpwd").addClass("wrong")) : 0 == e.errorCode ? window.location.reload() : t.html(_.replace("{tips}", "网络异常,请稍后操作"))
            })
        }
    });
    var h = function () {
    };
    h.prototype = {
        constructor: h, CharMode: function (e) {
            return e >= 48 && e <= 57 ? 1 : e >= 65 && e <= 90 ? 2 : e >= 97 && e <= 122 ? 4 : 8
        }, bitTotal: function (e) {
            for (modes = 0, i = 0; i < 4; i++) 1 & e && modes++, e >>>= 1;
            return modes
        }, check: function (e) {
            if (e.length < 6) return 0;
            for (Modes = 0, i = 0; i < e.length; i++) Modes |= this.CharMode(e.charCodeAt(i));
            return this.bitTotal(Modes)
        }
    };
    var h = new h
}), define("user/safety/js/dlmm", ["./check_idno"], function (e, t, s) {
    function a(e, t) {
        var i = /^\d+$/, s = /^[a-z]+$/, a = /^[A-Z]+$/, o = /^[^0-9a-zA-Z]+$/, r = /\s/,
            d = t.attr("id").replace("Tip", ""), l = $("#" + d);
        return e.length < 8 || e.length > 20 ? (t.html(n.replace("{tips}", "请输入8~20个字符的密码")), l.addClass("wrong"), !1) : i.test(e) ? (t.html(n.replace("{tips}", "密码不能为纯数字")), l.addClass("wrong"), !1) : s.test(e) ? (t.html(n.replace("{tips}", "密码不能为纯小写字母")), l.addClass("wrong"), !1) : a.test(e) ? (t.html(n.replace("{tips}", "密码不能为纯大写字母")), l.addClass("wrong"), !1) : o.test(e) ? (t.html(n.replace("{tips}", "密码不能为纯符号")), l.addClass("wrong"), !1) : r.test(e) ? (t.html(n.replace("{tips}", "密码不能包含空格")), l.addClass("wrong"), !1) : (t.empty(), !0)
    }

    function o(e, t, i) {
        if (e == t) return i.empty(), !0;
        i.html(n.replace("{tips}", "两次密码输入不一致"));
        var s = i.attr("id").replace("Tip", "");
        return $("#" + s).addClass("wrong"), !1
    }

    function r() {
        var e = p.check(this.value);
        $(".pswPower li").css("background-color", "#c4c4c4"), $(".pswPower li:lt(" + e + ")").css("background-color", "#f79100")
    }

    var d = e("./check_idno"), n = "<div class='onError'>{tips}</div>", l = "<div class='onShow'>{tips}</div>";
    t.dialog = function (e, t, i, s, a) {
        $.dialog({
            id: e,
            title: t,
            width: s,
            height: a,
            lock: !0,
            opacity: .5,
            background: "#000",
            max: !1,
            min: !1,
            content: i
        })
    }, $("#dlmm_xg_old_pwd").bind("focus", function () {
        $("#dlmm_xg_old_pwdTip").html(l.replace("{tips}", "请输入原登录密码"))
    }).bind("blur", function () {
        "" == this.value ? ($("#dlmm_xg_old_pwdTip").html(n.replace("{tips}", "原登录密码不能为空")), $("#dlmm_xg_old_pwd").addClass("wrong")) : $("#dlmm_xg_old_pwdTip").empty()
    }), $("#dlmm_xg_new_pwd").bind("keyup", r).bind("focus", function () {
        $("#dlmm_xg_new_pwdTip").html(l.replace("{tips}", "8~20位字符，至少包含数字、大写字母、小写字母、符号中的2种<ul class='pswPower'><li>弱</li><li>中</li><li>强</li></ul>")), r.call(this)
    }).bind("blur", function () {
        a(this.value, $("#dlmm_xg_new_pwdTip"))
    }), $("#dlmm_xg_new_pwd_qr").bind("focus", function () {
        $("#dlmm_xg_new_pwd_qrTip").html(l.replace("{tips}", "请再次输入密码"))
    }).bind("blur", function () {
        var e = $("#dlmm_xg_new_pwd").val();
        o(e, this.value, $("#dlmm_xg_new_pwd_qrTip"))
    }), $("#dlmm_xg_submit").bind("click", function () {
        var e = $("#dlmm_xg_old_pwd").val(), i = $("#dlmm_xg_new_pwd").val(), s = $("#dlmm_xg_new_pwd_qr").val();
        if ("" == e) return $("#dlmm_xg_old_pwdTip").html(n.replace("{tips}", "原登录密码不能为空")), void $("#dlmm_xg_old_pwd").addClass("wrong");
        if (a(i, $("#dlmm_xg_new_pwdTip")) && o(i, s, $("#dlmm_xg_new_pwd_qrTip"))) {
            var r = {
                curUserPwd: RSAUtils.pwdEncode(e),
                newUserPwd: RSAUtils.pwdEncode(i),
                verifyCode: $("#dl_xg_cdtx").val()
            };
            $.post("/user/modifyuserpwd", r, function (e) {
                if (1 == e.status) {
                    var i = "<div style='font-size: 15px;text-align: center;padding: 20px 0px;'>恭喜您修改登录密码成功，请<a style='color: #0095ee;cursor:pointer;' id='gotoLoginBtn'>重新登录</a></div><div style='text-align: center;color:#999;'>将在<font id='goToLoginLeftTime'>5</font>秒后自动跳转</div>";
                    t.dialog("", "", i, 400, 235), $(".ui_dialog tr:eq(0)").hide(), $("#gotoLoginBtn").bind("click", function () {
                        window.location.replace("/user/logoutwithlink")
                    });
                    var s = 5;
                    setInterval(function () {
                        s ? $("#goToLoginLeftTime").text(--s) : window.location.replace("/user/logoutwithlink")
                    }, 1e3)
                } else "1018" == e.errorCode || "Origin_LoginPassword_Empty" == e.errorCode ? ($("#dlmm_xg_old_pwdTip").html(n.replace("{tips}", e.errorDetails)), $("#dlmm_xg_old_pwd").addClass("wrong")) : "1055" == e.errorCode || "New_LoginPassword_Empty" == e.errorCode ? ($("#dlmm_xg_new_pwdTip").html(n.replace("{tips}", e.errorDetails)), $("#dlmm_xg_new_pwd").addClass("wrong")) : "LoginPassword_Validate_ERROR" == e.errorCode ? ($("#dlmm_xg_new_pwdTip").html(n.replace("{tips}", "登录密码不满足校验规则")), $("#dlmm_xg_new_pwd").addClass("wrong")) : "1011" == e.errorCode || "1011" == e.errorCode ? $("#dl_xg_er").html(n.replace("{tips}", e.errorDetails)) : "1023" == e.errorCode ? $("#dlmm_xg_new_pwdTip").html(n.replace("{tips}", "登录密码为空")) : 0 == e.errorCode ? window.location.reload() : $("#dl_xg_er").html(n.replace("{tips}", "网络异常,请稍后操作"))
            })
        }
    }), $("#dlmm_rz_pwd").bind("keyup", r).bind("focus", function () {
        $("#dlmm_rz_pwdTip").html(l.replace("{tips}", "8~20位字符，至少包含数字、大写字母、小写字母、符号中的2种<ul class='pswPower'><li>弱</li><li>中</li><li>强</li></ul>")), r.call(this)
    }).bind("blur", function () {
        a(this.value, $("#dlmm_rz_pwdTip"))
    }), $("#dlmm_rz_pwd_qr").bind("focus", function () {
        $("#dlmm_rz_pwd_qrTip").html(l.replace("{tips}", "请再次输入密码"))
    }).bind("blur", function () {
        var e = $("#dlmm_rz_pwd").val();
        o(e, this.value, $("#dlmm_rz_pwd_qrTip"))
    }), $("#dlmm_rz_submit").bind("click", function () {
        var e = $("#dlmm_rz_pwd").val(), t = $("#dlmm_rz_pwd_qr").val();
        if (a(e, $("#dlmm_rz_pwdTip")) && o(e, t, $("#dlmm_rz_pwd_qrTip"))) {
            var i = {userPwd: RSAUtils.pwdEncode(e)};
            $.post("/user/setuserpwd", i, function (e) {
                1 == e.status ? window.location.reload() : 0 == e.errorCode ? window.location.reload() : $("#dlmm_rz_pwd_qrTip").html(n.replace("{tips}", "网络异常,请稍后操作"))
            })
        }
    });
    var p = function () {
    };
    p.prototype = {
        constructor: p, CharMode: function (e) {
            return e >= 48 && e <= 57 ? 1 : e >= 65 && e <= 90 ? 2 : e >= 97 && e <= 122 ? 4 : 8
        }, bitTotal: function (e) {
            for (modes = 0, i = 0; i < 4; i++) 1 & e && modes++, e >>>= 1;
            return modes
        }, check: function (e) {
            if (e.length < 6) return 0;
            for (Modes = 0, i = 0; i < e.length; i++) Modes |= this.CharMode(e.charCodeAt(i));
            return this.bitTotal(Modes)
        }
    };
    var p = new p;
    $("#dl_xg_code").bind("click", function () {
        var e = $("#dlmm_xg_old_pwd").val();
        return "" == e ? void $("#dlmm_xg_old_pwdTip").addClass("wrong").html(n.replace("{tips}", "请输入原登录密码")) : void($(this).hasClass("disadbed_bg") || $.post("/user/authid/lpwd", {loginPwd: RSAUtils.pwdEncode(e)}, function (e) {
            1 == e.status ? _("1") : 0 == e.status && "1018" == e.errorCode ? $("#dlmm_xg_old_pwdTip").addClass("wrong").html(n.replace("{tips}", e.errorDetails)) : $("#dlmm_xg_old_pwdTip").addClass("wrong").html(n.replace("{tips}", "网络异常,请稍后操作"))
        }))
    });
    var _ = function (e) {
        var t = $("#dl_xg_code");
        $.post("/user/sendverifycode", {sendType: e, bizCode: 4, msgTemp: "smlp"}, function (i) {
            1 == i.status ? (t.addClass("disadbed_bg"), 1 == e ? $("#dl_xg_codepot").html("<span class='pvoice pve-line jycode_void'>短信已发送到您的手机，如果没有收到验证码，请<i class='phd'>使用语音验证</i></span>") : $("#dl_xg_codepot").addClass("offset").html("请注意接听系统语音验证码"), d.waiting_fun(t, 60, "dl_xg_code")) : 0 == i.status && 5 == i.errorCode ? $("#dl_xg_er").addClass("wrong").html(n.replace("{tips}", i.errorDetails)) : 0 == i.status && 7 == i.errorCode ? $("#dl_xg_er").addClass("wrong").html(n.replace("{tips}", i.errorDetails)) : 0 == i.status && $("#dl_xg_er").addClass("wrong").html(n.replace("{tips}", "网络异常,请稍后操作"))
        })
    };
    $("#dl_xg_codepot").delegate(".phd", "click", function () {
        _("0")
    })
}), define("user/safety/js/yxrz", ["./check_idno"], function (e, t, i) {
    function s() {
        $(".step_2:visible").hide().siblings(".step_3").show()
    }

    function a(e) {
        $(".step_1:visible").hide().siblings(".step_2").show(), r = e
    }

    function o(e, t) {
        var i = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if ("" == e) {
            t.html(n.replace("{tips}", "邮箱账号不能为空"));
            var s = t.attr("id").replace("Tip", "");
            return $("#" + s).addClass("wrong"), !1
        }
        if (i.test(e)) {
            t.empty();
            var s = t.attr("id").replace("Tip", "");
            return $("#" + s).removeClass("wrong"), !0
        }
        t.html(n.replace("{tips}", "邮箱账号格式错误"));
        var s = t.attr("id").replace("Tip", "");
        return $("#" + s).addClass("wrong"), !1
    }

    var r = 1, d = e("./check_idno"), n = "<div class='onError'>{tips}</div>", l = "<div class='onShow'>{tips}</div>",
        p = !0;
    $("#yxrz_changeToPhoneCheck").bind("click", function () {
        $("div[group='email']").hide(), $("div[group='phone']").show(), p = !1, $("#yxrz_form")[0].reset()
    }), $("#yxrz_changeToEmailCheck").bind("click", function () {
        $("div[group='phone']").hide(), $("div[group='email']").show(), p = !0, $("#yxrz_form")[0].reset()
    }), $("#yxrz_xg_step1_emailcode").bind("focus", function () {
        $("#yxrz_xg_step1_emailcodeTip").html(l.replace("{tips}", "请输入验证码"))
    }).bind("blur", function () {
        "" == this.value ? ($("#yxrz_xg_step1_emailcodeTip").html(n.replace("{tips}", "验证码不能为空")), $(this).addClass("wrong")) : $("#yxrz_xg_step1_emailcodeTip").empty()
    }), $("#yxrz_xg_step1_pcode").bind("focus", function () {
        $("#yxrz_xg_step1_pcodeTip").html(l.replace("{tips}", "请输入验证码"))
    }).bind("blur", function () {
        "" == this.value ? ($("#yxrz_xg_step1_pcodeTip").html(n.replace("{tips}", "验证码不能为空")), $(this).addClass("wrong")) : $("#yxrz_xg_step1_pcodeTip").empty()
    }), $("#yxrz_xg_step1_jypwd").bind("focus", function () {
        $("#yxrz_xg_step1_jypwdTip").html(l.replace("{tips}", "请输入交易密码"))
    }).bind("blur", function () {
        "" == this.value ? ($("#yxrz_xg_step1_jypwdTip").html(n.replace("{tips}", "交易密码不能为空")), $(this).addClass("wrong")) : $("#yxrz_xg_step1_jypwdTip").empty()
    }), $("#yxrz_xg_step1_jypwd_p").bind("focus", function () {
        $("#yxrz_xg_step1_jypwd_pTip").html(l.replace("{tips}", "请输入交易密码"))
    }).bind("blur", function () {
        "" == this.value ? ($("#yxrz_xg_step1_jypwd_pTip").html(n.replace("{tips}", "交易密码不能为空")), $(this).addClass("wrong")) : $("#yxrz_xg_step1_jypwd_pTip").empty()
    }), $("#yxrz_xg_getemailcode").bind("click", function () {
        if (!$(this).hasClass("disadbed_bg")) {
            var e = this;
            $.post("/user/sendverifycode", {sendType: 2, bizCode: 3, msgTemp: "eme"}, function (t) {
                1 == t.status ? ($(e).addClass("disadbed_bg"), d.waiting_fun($(e), 60, "yxrz_checkofmail")) : 1020 == t.errorCode ? ($("#yxrz_xg_step1_emailcodeTip").html(n.replace("{tips}", "60秒内只能获取一次验证码")), $("#yxrz_xg_step1_emailcode").addClass("wrong")) : 0 == t.errorCode ? window.location.reload() : ($("#yxrz_xg_step1_emailcodeTip").html(n.replace("{tips}", "网络异常,请稍后操作")), $("#yxrz_xg_step1_emailcode").addClass("wrong"))
            })
        }
    }), $("#yxrz_xg_step1_getpcode").bind("click", function () {
        var e = this;
        if (!$(this).hasClass("disadbed_bg")) {
            var e = this;
            $.post("/user/sendverifycode", {sendType: 1, bizCode: 3, msgTemp: "sme"}, function (t) {
                1 == t.status ? ($(e).addClass("disadbed_bg"), d.show_getYY_ui($(e), "yxrz_checkofphone", 3), d.waiting_fun($(e), 60, "yxrz_checkofphone")) : 1020 == t.errorCode ? ($("#yxrz_xg_step1_pcodeTip").html(n.replace("{tips}", "60秒内只能获取一次验证码")), $("#yxrz_xg_step1_pcode").addClass("wrong")) : 0 == t.errorCode ? window.location.reload() : ($("#yxrz_xg_step1_pcodeTip").html(n.replace("{tips}", "网络异常,请稍后操作")), $("#yxrz_xg_step1_pcode").addClass("wrong"))
            })
        }
    }), $("#yxrz_xg_step1_submit").bind("click", function () {
        var e = $("#yxrz_xg_step1_emailcode").val(), t = $("#yxrz_xg_step1_jypwd").val(), i = "/user/authid/vcode",
            s = {bizCode: 3, verifyCode: e};
        if ("" == e) return $("#yxrz_xg_step1_emailcodeTip").html(n.replace("{tips}", "请输入邮箱验证码")), void $("#yxrz_xg_step1_emailcode").addClass("wrong");
        if ($("#yxrz_xg_step1_jypwd").length) {
            if (i = "/user/authid/pcodevcode", "" == t) return $("#yxrz_xg_step1_jypwdTip").html(n.replace("{tips}", "请输入交易密码")), void $("#yxrz_xg_step1_jypwd").addClass("wrong");
            s.payCode = RSAUtils.pwdEncode(t)
        }
        $.post(i, s, function (e) {
            1 == e.status ? a($("#yxrz_xg_step1_jypwd").length ? 2 : 1) : "1011" == e.errorCode || 6 == e.errorCode ? ($("#yxrz_xg_step1_emailcodeTip").html(n.replace("{tips}", "验证码错误")), $("#yxrz_xg_step1_emailcode").addClass("wrong")) : "1017" == e.errorCode ? ($("#yxrz_xg_step1_jypwdTip").html(n.replace("{tips}", "交易密码错误")), $("#yxrz_xg_step1_jypwd").addClass("wrong")) : 0 == e.errorCode ? window.location.reload() : ($("#yxrz_xg_step1_emailcodeTip").html(n.replace("{tips}", "网络异常,请稍后操作")), $("#yxrz_xg_step1_emailcode").addClass("wrong"))
        })
    }), $("#yxrz_xg_step1_submit_use_phone").bind("click", function () {
        var e = $("#yxrz_xg_step1_pcode").val(), t = $("#yxrz_xg_step1_jypwd_p").val(), i = "/user/authid/vcode",
            s = {bizCode: 3, verifyCode: e};
        if ("" == e) return $("#yxrz_xg_step1_pcodeTip").html(n.replace("{tips}", "请输入手机验证码")), void $("#yxrz_xg_step1_pcode").addClass("wrong");
        if ($("#yxrz_xg_step1_jypwd_p").length) {
            if (i = "/user/authid/pcodevcode", "" == t) return $("#yxrz_xg_step1_jypwd_pTip").html(n.replace("{tips}", "请输入交易密码")), void $("#yxrz_xg_step1_jypwd_p").addClass("wrong");
            s.payCode = RSAUtils.pwdEncode(t)
        }
        $.post(i, s, function (e) {
            1 == e.status ? a($("#yxrz_xg_step1_jypwd_p").length ? 2 : 1) : "1011" == e.errorCode || 6 == e.errorCode ? ($("#yxrz_xg_step1_pcodeTip").html(n.replace("{tips}", "验证码错误")), $("#yxrz_xg_step1_pcode").addClass("wrong")) : "1017" == e.errorCode ? ($("#yxrz_xg_step1_jypwd_pTip").html(n.replace("{tips}", "交易密码错误")), $("#yxrz_xg_step1_jypwd_p").addClass("wrong")) : 0 == e.errorCode ? window.location.reload() : $("#yxrz_xg_step1_pcodeTip").html(n.replace("{tips}", "网络异常,请稍后操作"))
        })
    }), $("#yxrz_xg_step2_email").bind("focus", function () {
        $("#yxrz_xg_step2_emailTip").html(l.replace("{tips}", "请输入您的新邮箱账号"))
    }).bind("blur", function () {
        o(this.value, $("#yxrz_xg_step2_emailTip"))
    }), $("#yxrz_xg_step2_emailcode").bind("focus", function () {
        $("#yxrz_xg_step2_emailcodeTip").html(l.replace("{tips}", "请输入验证码"))
    }).bind("blur", function () {
        "" == this.value ? ($("#yxrz_xg_step2_emailcodeTip").html(n.replace("{tips}", "验证码不能为空")), $(this).addClass("wrong")) : $("#yxrz_xg_step2_emailcodeTip").empty()
    }), $("#yxrz_xg_step2_getemailcode").bind("click", function () {
        var e = $("#yxrz_xg_step2_email").val();
        if (o(e, $("#yxrz_xg_step2_emailTip")) && !$(this).hasClass("disadbed_bg")) {
            var t = this;
            $.post("/user/isemailexist", {email: e}, function (i) {
                1 == i.status ? 1 == i.data ? ($("#yxrz_xg_step2_emailTip").html(n.replace("{tips}", "邮箱账号已被使用")), $("#yxrz_xg_step2_email").addClass("wrong")) : $.post("/user/sendverifycode_nm", {
                    email: e,
                    sendType: 2,
                    bizCode: 3,
                    msgTemp: "eme"
                }, function (e) {
                    1 == e.status ? ($(t).addClass("disadbed_bg"), d.waiting_fun($(t), 60, "", "yxrz_xg_step2_email")) : 1020 == e.errorCode ? ($("#yxrz_xg_step2_emailcodeTip").html(n.replace("{tips}", "60秒内只能获取一次验证码")), $("#yxrz_xg_step2_emailcode").addClass("wrong"), yxrz_xg_step2_emailTip) : 0 == e.errorCode ? window.location.reload() : ($("#yxrz_xg_step2_emailcodeTip").html(n.replace("{tips}", "网络异常,请稍后操作")), $("#yxrz_xg_step2_emailcode").addClass("wrong"))
                }) : 0 == i.errorCode ? window.location.reload() : $("#yxrz_xg_step2_emailTip").html(n.replace("{tips}", "网络异常,请稍后操作"))
            })
        }
    }), $("#yxrz_xg_step2_submit").bind("click", function () {
        var e = $("#yxrz_xg_step2_email").val(), t = $("#yxrz_xg_step2_emailcode").val();
        if (o(e, $("#yxrz_xg_step2_emailTip"))) {
            if ("" == t) return $("#yxrz_xg_step2_emailcodeTip").html(n.replace("{tips}", "验证码不能为空")), void $("#yxrz_xg_step2_emailcode").addClass("wrong");
            var i = ["/user/setemail", "/user/modifyemail/vcode", "/user/setemail/pcodevcode"];
            $.post(i[r], {email: e, verifyCode: t}, function (e) {
                1 == e.status ? s() : "1011" == e.errorCode || 6 == e.errorCode ? ($("#yxrz_xg_step2_emailcodeTip").html(n.replace("{tips}", "验证码错误")), $("#yxrz_xg_step2_emailcode").addClass("wrong")) : 0 == e.errorCode ? window.location.reload() : $("#yxrz_xg_step2_emailcodeTip").html(n.replace("{tips}", "网络异常,请稍后操作"))
            })
        }
    }), $("#yxrz_rz_email").bind("focus", function () {
        $("#yxrz_rz_emailTip").html(l.replace("{tips}", "请输入邮箱账号"))
    }).bind("blur", function () {
        o(this.value, $("#yxrz_rz_emailTip"))
    }), $("#yxrz_rz_ecode").bind("focus", function () {
        $("#yxrz_rz_ecodeTip").html(l.replace("{tips}", "请输入邮箱验证码"))
    }).bind("blur", function () {
        "" == this.value ? $("#yxrz_rz_ecodeTip").html(n.replace("{tips}", "邮箱验证码不能为空")) : $("#yxrz_rz_ecodeTip").empty()
    }), $("#yxrz_rz_getecode").bind("click", function () {
        var e = $("#yxrz_rz_email").val();
        if (o(e, $("#yxrz_rz_emailTip")) && !$(this).hasClass("disadbed_bg")) {
            var t = this;
            $.post("/user/isemailexist", {email: e}, function (i) {
                1 == i.status ? 1 == i.data ? $("#yxrz_rz_emailTip").html(n.replace("{tips}", "邮箱账号已被使用")) : $.post("/user/sendverifycode_nm", {
                    email: e,
                    sendType: 2,
                    bizCode: 3,
                    msgTemp: "ese"
                }, function (e) {
                    1 == e.status ? ($(t).addClass("disadbed_bg"), d.waiting_fun($(t), 60, "", "yxrz_rz_email")) : 1020 == e.errorCode ? $("#yxrz_rz_ecodeTip").html(n.replace("{tips}", "60秒内只能获取一次验证码")) : 0 == e.errorCode ? window.location.reload() : $("#yxrz_rz_ecodeTip").html(n.replace("{tips}", "网络异常,请稍后操作"))
                }) : 0 == i.errorCode ? window.location.reload() : $("#yxrz_rz_emailTip").html(n.replace("{tips}", "网络异常,请稍后操作"))
            })
        }
    }), $("#yxrz_rz_submit").bind("click", function () {
        var e = $("#yxrz_rz_email").val(), t = $("#yxrz_rz_ecode").val();
        if (o(e, $("#yxrz_rz_emailTip"))) {
            if ("" == t) return void $("#yxrz_rz_ecodeTip").html(n.replace("{tips}", "邮箱验证码不能为空"));
            var i = {email: e, verifyCode: t};
            $.post("/user/setemail", i, function (e) {
                1 == e.status ? window.location.replace("/user/uasec") : "1011" == e.errorCode || 6 == e.errorCode ? $("#yxrz_rz_ecodeTip").html(n.replace("{tips}", "验证码错误")) : 0 == e.errorCode ? window.location.reload() : $("#yxrz_rz_ecodeTip").html(n.replace("{tips}", "网络异常,请稍后操作"))
            })
        }
    })
}), define("user/safety/js/jjlxr", [], function (require, exports, module) {
    function checkName(e, t) {
        var i = t.attr("id").replace("Tip", "");
        return "" == e ? (t.html(errorTip.replace("{tips}", "联系人姓名不能为空")), $("#" + i).addClass("wrong"), !1) : !chinese_regex.test(e) || e.length < 2 || e.length > 20 ? (t.html(errorTip.replace("{tips}", "联系人姓名格式不正确")), $("#" + i).addClass("wrong"), !1) : (t.empty(), !0)
    }

    function checkPhone(e, t) {
        var i = t.attr("id").replace("Tip", "");
        return "" == e ? (t.html(errorTip.replace("{tips}", "联系手机号码不能为空")), $("#" + i).addClass("wrong"), !1) : mobile_regex.test(e) ? (t.empty(), !0) : (t.html(errorTip.replace("{tips}", "联系手机号码格式不正确")), $("#" + i).addClass("wrong"), !1)
    }

    function show_step2() {
        $(".step_1:visible").hide().siblings(".step_2").show()
    }

    function show_step3() {
        $(".step_2:visible").hide().siblings(".step_3").show()
    }

    var chinese_regex = /^[\u4e00-\u9fa5]+$/, mobile_regex = /^[1][34587][0-9]{9}$/,
        errorTip = "<div class='onError'>{tips}</div>", showTip = "<div class='onShow'>{tips}</div>";
    $(".selected").click(function () {
        $(this).next(".options").show()
    }), $(".selectArea .options li").click(function () {
        var val = $(this).attr("val"), text = $(this).text(), select = $(this).parent().prev(".selected");
        select.attr("val", val).text(text), $(".options").hide(), $("#jjlxr_xg_step2_typeTip").empty(), $("#jjlxr_rz_typeTip").empty();
        var callback = select.attr("_onChange");
        eval(callback)
    }), $(document).bind("click", function (e) {
        $(e.target).hasClass("selected") ? $(e.target).next(".options").show() : $(".options").hide()
    }), $("#jjlxr_rz_name").bind("focus", function () {
        $("#jjlxr_rz_nameTip").html(showTip.replace("{tips}", "请输入联系人姓名"))
    }).bind("blur", function () {
        checkName(this.value, $("#jjlxr_rz_nameTip"))
    }), $("#jjlxr_rz_mobile").bind("focus", function () {
        $("#jjlxr_rz_mobileTip").html(showTip.replace("{tips}", "请输入联系人手机号码"))
    }).bind("blur", function () {
        checkPhone(this.value, $("#jjlxr_rz_mobileTip"))
    }), $("#jjlxr_rz_submit").bind("click", function () {
        var e = $("#jjlxr_rz_type").attr("val"), t = $("#jjlxr_rz_name").val(), i = $("#jjlxr_rz_mobile").val();
        if (!e) return $("#jjlxr_rz_typeTip").html(errorTip.replace("{tips}", "请选择联系人与您的关系")), void $("#jjlxr_rz_type").addClass("wrong");
        if (checkName(t, $("#jjlxr_rz_nameTip")) && checkPhone(i, $("#jjlxr_rz_mobileTip"))) {
            var s = {relation: e, name: t, mobile: i};
            $.post("/user/setemergency", s, function (e) {
                1 == e.status ? window.location.reload() : 0 == e.errorCode ? window.location.reload() : $("#jjlxr_rz_mobileTip").html(errorTip.replace("{tips}", "网络异常,请稍后操作"))
            })
        }
    }), $("#jjlxr_xg_step1_jypwd").bind("focus", function () {
        $("#jjlxr_xg_step1_jypwdTip").html(showTip.replace("{tips}", "请输入交易密码"))
    }).bind("blur", function () {
        "" == this.value ? ($("#jjlxr_xg_step1_jypwdTip").html(errorTip.replace("{tips}", "交易密码不能为空")), $("#jjlxr_xg_step1_jypwd").addClass("wrong")) : $("#jjlxr_xg_step1_jypwdTip").empty()
    }), $("#jjlxr_xg_step1_submit").bind("click", function () {
        show_step2()
    }), $("#jjlxr_xg_step2_name").bind("focus", function () {
        $("#jjlxr_xg_step2_nameTip").html(showTip.replace("{tips}", "请输入联系人姓名"))
    }).bind("blur", function () {
        checkName(this.value, $("#jjlxr_xg_step2_nameTip"))
    }), $("#jjlxr_xg_step2_mobile").bind("focus", function () {
        $("#jjlxr_xg_step2_mobileTip").html(showTip.replace("{tips}", "请输入联系人手机号码"))
    }).bind("blur", function () {
        checkPhone(this.value, $("#jjlxr_xg_step2_mobileTip"))
    }), $("#jjlxr_xg_step2_submit").bind("click", function () {
        var e = $("#jjlxr_xg_step2_type").attr("val"), t = $("#jjlxr_xg_step2_name").val(),
            i = $("#jjlxr_xg_step2_mobile").val();
        if (!e) return $("#jjlxr_xg_step2_typeTip").html(errorTip.replace("{tips}", "请选择联系人与您的关系")), void $("#jjlxr_xg_step2_type").addClass("wrong");
        if (checkName(t, $("#jjlxr_xg_step2_nameTip")) && checkPhone(i, $("#jjlxr_xg_step2_mobileTip"))) {
            var s = {relation: e, name: t, mobile: i};
            $.post("/user/setemergency", s, function (e) {
                1 == e.status ? show_step3() : 0 == e.errorCode ? window.location.reload() : $("#jjlxr_xg_step2_mobileTip").html(errorTip.replace("{tips}", "网络异常,请稍后操作"))
            })
        }
    })
}), define("user/safety/js/sjrz", ["./check_idno"], function (e, t, i) {
    function s() {
        $(".step_2:visible").hide().siblings(".step_3").show()
    }

    function a(e) {
        $(".step_1:visible").hide().siblings(".step_2").show(), r = e
    }

    function o(e, t) {
        if ("" == e) {
            t.html(n.replace("{tips}", "手机号码不能为空"));
            var i = t.attr("id").replace("Tip", "");
            return $("#" + i).addClass("wrong"), !1
        }
        if (!p.test(e)) {
            t.html(n.replace("{tips}", "手机号码格式不正确"));
            var i = t.attr("id").replace("Tip", "");
            return $("#" + i).addClass("wrong"), !1
        }
        return t.empty(), !0
    }

    var r = 1, d = e("./check_idno"), n = "<div class='onError'>{tips}</div>", l = "<div class='onShow'>{tips}</div>",
        p = /^[1][3456789][0-9]{9}$/;
    $("#sjyz_xg_step1_type1_pcode").bind("focus", function () {
        $("#sjyz_xg_step1_type1_pcodeTip").html(l.replace("{tips}", "请输入手机验证码"))
    }).bind("blur", function () {
        "" == this.value ? ($("#sjyz_xg_step1_type1_pcodeTip").html(n.replace("{tips}", "手机验证码不能为空")), $(this).addClass("wrong")) : $("#sjyz_xg_step1_type1_pcodeTip").empty()
    }), $("#sjyz_xg_step1_type1_jypwd").bind("focus", function () {
        $("#sjyz_xg_step1_type1_jypwdTip").html(l.replace("{tips}", "请输入交易密码"))
    }).bind("blur", function () {
        "" == this.value ? ($("#sjyz_xg_step1_type1_jypwdTip").html(n.replace("{tips}", "交易密码不能为空")), $(this).addClass("wrong")) : $("#sjyz_xg_step1_type1_jypwdTip").empty()
    }), $("#sjyz_xg_step1_type1_getpcode").bind("click", function () {
        if (!$(this).hasClass("disadbed_bg")) {
            var e = this;
            $.post("/user/sendverifycode", {sendType: 1, bizCode: 2, msgTemp: "smm"}, function (t) {
                1 == t.status ? ($(e).addClass("disadbed_bg"), d.show_getYY_ui($(e), "sjyz_xg_step1_type1_getpcode", "2"), d.waiting_fun($(e), 60, "sjyz_xg_step1_type1_getpcode")) : 1020 == t.errorCode ? ($("#sjyz_xg_step1_type1_pcodeTip").html(n.replace("{tips}", "60秒内只能获取一次验证码")), $("#sjyz_xg_step1_type1_pcode").addClass("wrong")) : 0 == t.errorCode ? window.location.reload() : $("#sjyz_xg_step1_type1_pcodeTip").html(n.replace("{tips}", "网络异常,请稍后操作"))
            })
        }
    }), $("#sjyz_xg_step1_type2_idno").bind("focus", function () {
        $("#sjyz_xg_step1_type2_idnoTip").html(l.replace("{tips}", "请输入身份证号码"))
    }).bind("blur", function () {
        "" == this.value ? ($("#sjyz_xg_step1_type2_idnoTip").html(n.replace("{tips}", "身份证号码不能为空")), $(this).addClass("wrong")) : $("#sjyz_xg_step1_type2_idnoTip").empty()
    }), $("#sjyz_xg_step1_type2_jypwd").bind("focus", function () {
        $("#sjyz_xg_step1_type2_jypwdTip").html(l.replace("{tips}", "请输入交易密码"))
    }).bind("blur", function () {
        "" == this.value ? ($("#sjyz_xg_step1_type2_jypwdTip").html(n.replace("{tips}", "交易密码不能为空")), $(this).addClass("wrong")) : $("#sjyz_xg_step1_type2_jypwdTip").empty()
    }), $("#sjyz_xg_step1_type3_ecode").bind("focus", function () {
        $("#sjyz_xg_step1_type3_ecodeTip").html(l.replace("{tips}", "请输入验证码"))
    }).bind("blur", function () {
        "" == this.value ? ($("#sjyz_xg_step1_type3_ecodeTip").html(n.replace("{tips}", "验证码不能为空")), $(this).addClass("wrong")) : $("#sjyz_xg_step1_type3_ecodeTip").empty()
    }), $("#sjyz_xg_step1_type3_jypwd").bind("focus", function () {
        $("#sjyz_xg_step1_type3_jypwdTip").html(l.replace("{tips}", "请输入交易密码"))
    }).bind("blur", function () {
        "" == this.value ? ($("#sjyz_xg_step1_type3_jypwdTip").html(n.replace("{tips}", "交易密码不能为空")), $(this).addClass("wrong")) : $("#sjyz_xg_step1_type3_jypwdTip").empty()
    }), $("#sjyz_xg_step1_type3_getecode").click(function () {
        if (!$(this).hasClass("disadbed_bg")) {
            var e = this;
            $.post("/user/sendverifycode", {sendType: 2, bizCode: 2, msgTemp: "emm"}, function (t) {
                1 == t.status ? ($(e).addClass("disadbed_bg"), d.waiting_fun($(e), 60)) : 0 == t.errorCode ? window.location.reload() : $("#sjyz_xg_step1_type3_ecodeTip").html(n.replace("{tips}", "获取邮箱验证码失败"))
            })
        }
    }), $("#sjyz_xg_step1_type4_name").bind("focus", function () {
        $("#sjyz_xg_step1_type4_nameTip").html(l.replace("{tips}", "请输入真实姓名"))
    }).bind("blur", function () {
        if ("" == this.value) $("#sjyz_xg_step1_type4_nameTip").html(n.replace("{tips}", "真实姓名不能为空")), $(this).addClass("wrong"); else {
            var e = /^[\u4e00-\u9fa5]+[\u4e00-\u9fa5\u00b7]*[\u4e00-\u9fa5]+$/;
            !e.test(this.value) || this.value.length < 2 || this.value.length > 20 ? ($("#sjyz_xg_step1_type4_nameTip").html(n.replace("{tips}", "姓名格式不正确")), $(this).addClass("wrong")) : $("#sjyz_xg_step1_type4_nameTip").empty()
        }
    }), $("#sjyz_xg_step1_type4_idno").bind("focus", function () {
        $("#sjyz_xg_step1_type4_idnoTip").html(l.replace("{tips}", "请输入身份证号"))
    }).bind("blur", function () {
        "" == this.value ? ($("#sjyz_xg_step1_type4_idnoTip").html(n.replace("{tips}", "身份证号不能为空")), $(this).addClass("wrong")) : /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.value) ? d.IdCardValidate(this.value) ? $("#sjyz_xg_step1_type4_idnoTip").empty() : ($("#sjyz_xg_step1_type4_idnoTip").html(n.replace("{tips}", "您填写的身份证号无效，请重新填写")), $(this).addClass("wrong")) : ($("#sjyz_xg_step1_type4_idnoTip").html(n.replace("{tips}", "您填写的身份证号格式不正确")), $(this).addClass("wrong"))
    }), $("#sjyz_xg_step1_type4_cardnum").bind("focus", function () {
        $("#sjyz_xg_step1_type4_cardnumTip").html(l.replace("{tips}", "请输入银行卡号")), "" != this.value && $(".num_area").show()
    }).bind("blur", function () {
        "" == this.value ? ($("#sjyz_xg_step1_type4_cardnumTip").html(n.replace("{tips}", "银行卡号不能为空")), $(this).addClass("wrong")) : /^\d{16,19}$/.test(this.value) ? $("#sjyz_xg_step1_type4_cardnumTip").empty() : ($("#sjyz_xg_step1_type4_cardnumTip").html(n.replace("{tips}", "银行卡号须为16-19位数字")), $(this).addClass("wrong")), $(".num_area").hide()
    }).bind("keyup", function () {
        if (this.value = this.value.replace(/^ +| +$/g, ""), "" == this.value) $(".num_area").hide(); else {
            var e = this.value.replace(/s/g, "").replace(/(.{4})/g, "$1 ");
            $(".num_area span").text(e).parent().show()
        }
    }), $("#sjyz_xg_step1_type1_submit").bind("click", function () {
        var e = $("#sjyz_xg_step1_type1_pcode").val(), t = !!$("#sjyz_xg_step1_type1_jypwd").length,
            i = $("#sjyz_xg_step1_type1_jypwd").val();
        if ("" == e) return $("#sjyz_xg_step1_type1_pcodeTip").html(n.replace("{tips}", "手机验证码不能为空")), void $("#sjyz_xg_step1_type1_pcode").addClass("wrong");
        if (t && "" == i) return $("#sjyz_xg_step1_type1_jypwdTip").html(n.replace("{tips}", "交易密码不能为空")), void $("#sjyz_xg_step1_type1_jypwd").addClass("wrong");
        var s = {verifyCode: e, bizCode: "2"};
        t && (s.payCode = RSAUtils.pwdEncode(i)), url = "/user/authid/vcode", t && (url = "/user/authid/pcodevcode"), $.post(url, s, function (e) {
            1 == e.status ? a(t ? 2 : 1) : "1011" == e.errorCode || 6 == e.errorCode ? ($("#sjyz_xg_step1_type1_pcodeTip").html(n.replace("{tips}", "手机验证码错误")), $("#sjyz_xg_step1_type1_pcode").addClass("wrong")) : "1017" == e.errorCode ? ($("#sjyz_xg_step1_type1_jypwdTip").html(n.replace("{tips}", "交易密码错误")), $("#sjyz_xg_step1_type1_jypwd").addClass("wrong")) : 0 == e.errorCode ? window.location.reload() : $("#sjyz_xg_step1_type1_pcodeTip").html(n.replace("{tips}", "网络异常,请稍后操作"))
        })
    }), $("#sjyz_xg_step1_type2_submit").bind("click", function () {
        var e = $("#sjyz_xg_step1_type2_idno").val(), t = $("#sjyz_xg_step1_type2_jypwd").val();
        if ("" == e) return $("#sjyz_xg_step1_type2_idnoTip").html(n.replace("{tips}", "身份证号码不能为空")), void $("#sjyz_xg_step1_type2_idno").addClass("wrong");
        if ("" == t) return $("#sjyz_xg_step1_type2_jypwdTip").html(n.replace("{tips}", "交易密码不能为空")), void $("#sjyz_xg_step1_type2_jypwd").addClass("wrong");
        var i = {idNO: e, payCode: RSAUtils.pwdEncode(t)};
        $.post("/user/authid/idnopcode", i, function (e) {
            1 == e.status ? a(3) : "1003" == e.errorCode ? ($("#sjyz_xg_step1_type2_idnoTip").html(n.replace("{tips}", "身份证号码格式错误")), $("#sjyz_xg_step1_type2_idno").addClass("wrong")) : "1019" == e.errorCode ? ($("#sjyz_xg_step1_type2_idnoTip").html(n.replace("{tips}", "身份证号码错误")), $("#sjyz_xg_step1_type2_idno").addClass("wrong")) : "1017" == e.errorCode ? ($("#sjyz_xg_step1_type2_jypwdTip").html(n.replace("{tips}", "交易密码错误")), $("#sjyz_xg_step1_type2_jypwd").addClass("wrong")) : 0 == e.errorCode ? window.location.reload() : $("#sjyz_xg_step1_type2_jypwdTip").html(n.replace("{tips}", "网络异常,请稍后操作"));
        })
    }), $("#sjyz_xg_step1_type3_submit").bind("click", function () {
        var e = $("#sjyz_xg_step1_type3_ecode").val(), t = $("#sjyz_xg_step1_type3_jypwd").val();
        if ("" == e) return $("#sjyz_xg_step1_type3_ecodeTip").html(n.replace("{tips}", "验证码不能为空")), void $("#sjyz_xg_step1_type3_ecode").addClass("wrong");
        if ("" == t) return $("#sjyz_xg_step1_type3_jypwdTip").html(n.replace("{tips}", "交易密码不能为空")), void $("#sjyz_xg_step1_type3_jypwd").addClass("wrong");
        var i = {verifyCode: e, payCode: RSAUtils.pwdEncode(t), bizCode: 2};
        $.post("/user/authid/pcodevcode", i, function (e) {
            1 == e.status ? a(2) : "1011" == e.errorCode || 6 == e.errorCode ? ($("#sjyz_xg_step1_type3_ecodeTip").html(n.replace("{tips}", "邮箱验证码错误")), $("#sjyz_xg_step1_type3_ecode").addClass("wrong")) : "1017" == e.errorCode ? ($("#sjyz_xg_step1_type3_jypwdTip").html(n.replace("{tips}", "交易密码错误")), $("#sjyz_xg_step1_type3_jypwd").addClass("wrong")) : 0 == e.errorCode ? window.location.reload() : $("#sjyz_xg_step1_type3_jypwdTip").html(n.replace("{tips}", "网络异常,请稍后操作"))
        })
    }), $("#sjyz_xg_step1_type4_submit").bind("click", function () {
        if (!$(".change_bind_phone input").hasClass("wrong")) {
            var e = {
                realName: $("#sjyz_xg_step1_type4_name").val(),
                idCardNo: $("#sjyz_xg_step1_type4_idno").val(),
                bankCardNo: $("#sjyz_xg_step1_type4_cardnum").val()
            };
            $.post("/user/modifymobile/factor/chk", e, function (e) {
                1 == e.status ? a(4) : "busy-mobile-modify-000" == e.errorCode ? window.location.reload() : $("#bk_sys_tip1").html(n.replace("{tips}", e.errorDetails))
            })
        }
    }), $("#sjyz_xg_step2_mobile").bind("focus", function () {
        $("#sjyz_xg_step2_mobileTip").html(l.replace("{tips}", "请输入手机号码"))
    }).bind("blur", function () {
        o(this.value, $("#sjyz_xg_step2_mobileTip"))
    }), $("#sjyz_xg_step2_pcode").bind("focus", function () {
        $("#sjyz_xg_step2_pcodeTip").html(l.replace("{tips}", "请输入手机验证码"))
    }).bind("blur", function () {
        "" == this.value ? ($("#sjyz_xg_step2_pcodeTip").html(n.replace("{tips}", "手机验证码不能为空")), $("#sjyz_xg_step2_pcode").addClass("wrong")) : $("#sjyz_xg_step2_pcodeTip").empty()
    }), $("#sjyz_xg_step2_getpcode").bind("click", function () {
        var e = this;
        if (!$(this).hasClass("disadbed_bg")) {
            var t = $("#sjyz_xg_step2_mobile").val(), e = this;
            o($("#sjyz_xg_step2_mobile").val(), $("#sjyz_xg_step2_mobileTip")) && (4 == r && $("#sjyz_xg_step2_pcodeTip").empty(), $(this).addClass("disadbed_bg").find(".get_code_text").text("获取中..."), $.post("/user/ismobileexist", {
                mobile: t,
                sendType: 1,
                bizCode: 2
            }, function (i) {
                1 == i.status ? 1 == i.data ? ($("#sjyz_xg_step2_mobileTip").html(n.replace("{tips}", "手机号码已被使用")), $("#sjyz_xg_step2_mobile").addClass("wrong"), $(e).removeClass("disadbed_bg").find(".get_code_text").text("获取验证码")) : 4 == r ? $.post("/user/modifymobile/factor/gencode", {mobile: t}, function (i) {
                    1 == i.status ? ($(e).addClass("disadbed_bg"), d.show_getBkYY_ui($(e), "sjyz_xg_step2_getpcode", "2", t, "sjyz_xg_step2_mobile"), d.waiting_fun($(e), 60, "sjyz_xg_step2_getpcode", "sjyz_xg_step2_mobile"), $("#bk_sys_tip2").empty()) : "busy-mobile-modify-000" == i.errorCode ? window.location.reload() : ($("#bk_sys_tip2").html(n.replace("{tips}", i.errorDetails)), $(e).removeClass("disadbed_bg").find(".get_code_text").text("获取验证码"))
                }) : $.post("/user/sendverifycode_nm", {
                    mobile: t,
                    sendType: 1,
                    bizCode: 2,
                    msgTemp: "smm"
                }, function (i) {
                    1 == i.status ? ($(e).addClass("disadbed_bg"), d.show_getYY_ui($(e), "sjyz_xg_step2_getpcode", "2", t, "sjyz_xg_step2_mobile"), d.waiting_fun($(e), 60, "sjyz_xg_step2_getpcode", "sjyz_xg_step2_mobile")) : 1020 == i.errorCode ? ($("#sjyz_xg_step2_pcodeTip").html(n.replace("{tips}", "60秒内只能获取一次验证码")), $(e).removeClass("disadbed_bg").find(".get_code_text").text("获取验证码")) : 0 == i.errorCode ? window.location.reload() : ($("#sjyz_xg_step2_pcodeTip").html(n.replace("{tips}", "网络异常,请稍后操作")), $(e).removeClass("disadbed_bg").find(".get_code_text").text("获取验证码"))
                }) : 0 == i.errorCode ? window.location.reload() : ($("#sjyz_xg_step2_pcodeTip").html(n.replace("{tips}", "网络异常,请稍后操作")), $(e).removeClass("disadbed_bg").find(".get_code_text").text("获取验证码"))
            }))
        }
    }), $("#sjyz_xg_step2_submit").bind("click", function () {
        var e = $("#sjyz_xg_step2_mobile").val(), t = $("#sjyz_xg_step2_pcode").val();
        if (o(e, $("#sjyz_xg_step2_mobileTip"))) {
            if ("" == t) return $("#sjyz_xg_step2_pcodeTip").html(n.replace("{tips}", "手机验证码不能为空")), void $("#sjyz_xg_step2_pcode").addClass("wrong");
            var i = {mobile: e, verifyCode: t},
                a = ["/user/setmobile", "/user/modifymobile/vcode", "/user/modifymobile/pcodevcode", "/user/modifymobile/idnopcode", "/user/modifymobile/factor/set"];
            $.post(a[r], i, function (e) {
                1 == e.status ? s() : "1011" == e.errorCode || 6 == e.errorCode ? ($("#sjyz_xg_step2_pcodeTip").html(n.replace("{tips}", "手机验证码错误")), $("#sjyz_xg_step2_pcode").addClass("wrong")) : "1042" == e.errorCode ? ($("#sjyz_xg_step2_mobileTip").html(n.replace("{tips}", "您已领取微信现金红包，领取后7日内不允许修改手机号码")), $("#sjyz_xg_step2_mobile").addClass("wrong")) : "1043" == e.errorCode ? ($("#sjyz_xg_step2_mobileTip").html(n.replace("{tips}", "您的新手机号码已领取微信现金红包，请使用新手机号码注册小牛在线")), $("#sjyz_xg_step2_mobile").addClass("wrong")) : 0 == e.errorCode ? window.location.reload() : 4 == r ? ($("#sjyz_xg_step2_pcodeTip").html(n.replace("{tips}", e.errorDetails)), d.clear_waiting($("#sjyz_xg_step2_getpcode"), "sjyz_xg_step2_getpcode", "sjyz_xg_step2_mobile")) : $("#sjyz_xg_step2_pcodeTip").html(n.replace("{tips}", "网络异常,请稍后操作"))
            })
        }
    }), $("#sjyz_xg_changeType").click(function () {
        $("#change_type").show().siblings().hide()
    }), $("#sjyz_xg_show_type2").click(function () {
        $("#step_1_2").show().siblings().hide()
    }), $("#sjyz_xg_show_type3").click(function () {
        $("#step_1_3").show().siblings().hide()
    }), $("#sjyz_rz_pcode").bind("focus", function () {
        $("#sjyz_rz_pcodeTip").html(l.replace("{tips}", "请输入手机验证码"))
    }).bind("blur", function () {
        "" == this.value ? ($("#sjyz_rz_pcodeTip").html(n.replace("{tips}", "手机验证码不能为空")), $("#sjyz_rz_pcode").addClass("wrong")) : $("#sjyz_rz_pcodeTip").empty()
    }), $("#sjyz_rz_mobile").bind("focus", function () {
        $("#sjyz_rz_mobileTip").html(l.replace("{tips}", "请输入手机号码"))
    }).bind("blur", function () {
        o(this.value, $("#sjyz_rz_mobileTip"))
    }), $("#sjyz_rz_getpcode").bind("click", function () {
        var e = $("#sjyz_rz_mobile").val();
        if (o(e, $("#sjyz_rz_mobileTip"))) {
            var t = this;
            if (!$(this).hasClass("disadbed_bg")) {
                var t = this;
                $.post("/user/ismobileexist", {mobile: e}, function (i) {
                    1 == i.status ? 1 == i.data ? ($("#sjyz_rz_mobileTip").html(n.replace("{tips}", "手机号码已被使用")), $("#sjyz_rz_mobile").addClass("wrong")) : $.post("/user/sendverifycode_nm", {
                        mobile: e,
                        sendType: 1,
                        bizCode: 2,
                        msgTemp: "sd"
                    }, function (i) {
                        1 == i.status ? ($(t).addClass("disadbed_bg"), d.show_getYY_ui($(t), "sjyz_rz_getpcode", "2", e, "sjyz_rz_mobile"), d.waiting_fun($(t), 60, "sjyz_rz_getpcode", "sjyz_rz_mobile")) : 1020 == i.errorCode ? $("#sjyz_rz_pcodeTip").html(n.replace("{tips}", "60秒内只能获取一次验证码")) : 0 == i.errorCode ? window.location.reload() : $("#sjyz_rz_pcodeTip").html(n.replace("{tips}", "网络异常,请稍后操作"))
                    }) : 0 == i.errorCode ? window.location.reload() : $("#sjyz_rz_pcodeTip").html(l.replace("{tips}", "网络异常,请稍后操作"))
                })
            }
        }
    }), $("#sjyz_rz_submit").click(function () {
        var e = $("#sjyz_rz_mobile").val();
        if (o(e, $("#sjyz_rz_mobileTip"))) {
            var t = $("#sjyz_rz_pcode").val();
            if ("" == t) return $("#sjyz_rz_pcodeTip").html(n.replace("{tips}", "手机验证码不能为空")), void $("#sjyz_rz_pcode").addClass("wrong");
            var i = {mobile: e, verifyCode: t};
            $.post("/user/setmobile", i, function (e) {
                1 == e.status ? window.location.replace("/user/uasec") : "1011" == e.errorCode || 6 == e.errorCode ? ($("#sjyz_rz_pcodeTip").html(n.replace("{tips}", "手机验证码错误")), $("#sjyz_rz_pcode").addClass("wrong")) : 0 == e.errorCode ? window.location.reload() : $("#sjyz_rz_mobileTip").html(n.replace("{tips}", "网络异常,请稍后操作"))
            })
        }
    })
}), define("user/safety/js/add_recommend", [], function (e, t, i) {
    function s() {
        return "placeholder" in document.createElement("input")
    }

    function a() {
        if (!s()) for (var e = $(".ui_content input[placeholder][hasPlaceholder!='true']"), t = $(".ui_content input[placeholder]"), i = e.length - 1; i >= 0; i--) {
            var a = $(e[i]), o = a.attr("placeholder"), r = a.height(), d = a.width(),
                n = 1 * a.css("border-top-width").replace("px", ""),
                l = 1 * a.css("border-bottom-width").replace("px", ""),
                p = 1 * a.css("padding-left").replace("px", "") + l, _ = 1 * a.css("padding-top").replace("px", "") + n,
                c = a.css("font-size"),
                m = "<span class='placeholderForInput' style='position:absolute;display:block;overflow:hidden;top:" + _ + "px;left:" + p + "px;height:" + r + "px;width:" + d + "px;overflow:hidden;line-height:" + r + "px;color:#ccc;font-size:" + c + "'>" + o + "</span>";
            $(a).wrapAll("<div style='position:relative;display:inline-block;*display:inline;*zoom:1;'></div>"), a.after(m), "" != a.val() && a.next("span").hide(), a.next("span").bind("mousedown click selest", function () {
                $(this).hide();
                var e = $(this).prev("input");
                t.blur(), e.focus()
            }), a.focus(function () {
                $(this).next("span").hide()
            }), a.blur(function () {
                "" == this.value && $(this).next("span").show()
            }), a.attr("hasPlaceholder", "true")
        }
    }

    t.dialog = function (e, t, i, s, a) {
        $.dialog({
            id: e,
            title: t,
            width: s,
            height: a,
            lock: !0,
            opacity: .5,
            background: "#000",
            max: !1,
            min: !1,
            content: i
        })
    }, $(".account_addrecommend").bind("click", function () {
        var e = $("#dialogCode").html();
        t.dialog("dialog1", "填写推荐人", e, 400, 235), a()
    }), $(document).delegate("#rp_btn", "click", function () {
        var e = $(this), t = $("#setrefferee").val();
        return "" == t ? void $(".ui_content .rp_error").css("visibility", "visible").text("请输入推荐人账号或手机号") : void $.post("/user/setrefferee", {refferee: t}, function (i) {
            1 == i.status ? (e.parents(".rp_step").hide().next().show(), $(".rec_name").text(t)) : 0 == i.errorCode ? window.location.reload() : $(".rp_error").css("visibility", "visible").text(i.errorDetails)
        })
    }).delegate(".rp_step2 .rp_btn", "click", function () {
        window.location.reload()
    }).delegate("#setrefferee", "focus", function () {
        $(".rp_error").css("visibility", "hidden").text("")
    }).delegate("#setrefferee", "blur", function () {
        "" == this.value ? $(".rp_error").css("visibility", "visible").text("推荐人或手机号不能为空") : $(".rp_error").css("visibility", "hidden")
    }), window.addPlaceholer = a, !s()
});