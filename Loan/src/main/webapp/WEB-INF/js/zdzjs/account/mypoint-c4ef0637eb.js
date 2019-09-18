define("bonus/mypoint/js/mypoint", ["../../../plugIn/laydate/laydate.cmd", "../../../module/common/dateUtil", "../../../module/page/js/init", "../../../module/common/tab"], function (a, e, t) {
    a("../../../plugIn/laydate/laydate.cmd"), a("../../../module/common/dateUtil");
    var n, s, i, o, l, d = a("../../../module/page/js/init"), r = a("../../../module/common/tab"),
        c = $("#pageCal").data("imgpath"), m = '<div class="pages"><div class="page"></div></div>',
        u = {1: "已完成", 2: "已发货", 3: "待发货"}, p = {
            init: function () {
                this.bindEvent()
            }, bindEvent: function () {
                var a = this, e = $(".bd-tb-list");
                e.on("click", "[name='showDetail']", function (e) {
                    var t = $(this).data("orderid");
                    a.getExchangeDetail(t)
                }), $(".search_form").submit(function (e) {
                    e.preventDefault();
                    var t, s;
                    if ("" != $("#beginDate").val()) {
                        if (t = $("#beginDate").val(), "" == $("#endDate").val()) return $.dialog.tip("结束日期不能为空！"), !1;
                        s = $("#endDate").val()
                    }
                    if ("" != $("#endDate").val()) {
                        if ("" == $("#beginDate").val()) return $.dialog.tip("开始日期不能为空！"), !1;
                        t = $("#beginDate").val()
                    }
                    return t && $("#endDate").val() < $("#beginDate").val() ? ($.dialog.tip("结束日期不能小于开始日期！"), !1) : ($(".pages").remove(), l.after(m), void d.pages(n, a.redLoadDataList, c, i, 1, 10, "list", 100, $(".search_form").eq(o).serialize()))
                })
            }, buildDialog: function (a) {
                var e = ($(this), ['<div class="pop exchange">', '    <div class="pop-body">', '        <div class="pop-content clearfix">', '            <div class="clearfix">', '                <div class="order-info-box">', "                    <label>订单提交时间：</label>{transactionTime}<label>&nbsp;&nbsp;&nbsp;&nbsp;消费总计：</label>{costPoints} 积分", "                </div>", "                <h2><em></em>订单信息</h2>", "                <dl>", "                    <dt>&bull;&nbsp;支付及配送方式</dt>", "                    <dd><label>支付方式：</label>积分支付</dd>", "                    <dd><label>配送地址：</label>{recieveUser} {mobile} {recieveAddress}</dd>", "                </dl>", "               {expressInfo}", "                <dl>", "                    <dt>&bull;&nbsp;礼品信息</dt>", "                </dl>", '                <table width="100%" border="0" cellspacing="0" cellpadding="0">', "                    <thead>", "                        <tr>", '                            <th width="25%">礼品名称</th>', '                            <th width="30%">收货信息</th>', '                            <th width="15%">消耗积分</th>', '                            <th width="15%">兑换数量</th>', '                            <th width="15%">状态</th>', "                        </tr>", "                        <tr>", '                            <td width="25%">{productName}</td>', '                            <td width="30%">{recieveUser}<br />{mobile}</td>', '                            <td width="15%">{costPoints}积分</td>', '                            <td width="15%">{productNumber}</td>', '                            <td width="15%">{status}</td>', "                        </tr>", "                    </thead>", "                    <tbody>", "                    </tbody>", "                </table>", "            </div>", "        </div>", "    </div>", "</div>"].join("")),
                    t = ["<dl>", "    <dt>&bull;&nbsp;物流信息</dt>", "    <dd><label>物流公司：</label>{expressComp}</dd>", "    <dd><label>快递编号：</label>{expressNo}</dd>", "</dl>"].join("");
                e = e.replace(/\{[^\}]*\}/g, function (e) {
                    var e = e.slice(1, -1), n = a[e];
                    switch (e) {
                        case"transactionTime":
                            n = $.toDatetime(n);
                            break;
                        case"status":
                            n = u[n];
                            break;
                        case"expressInfo":
                            n = "2" == a.status ? t.replace("{expressComp}", a.expressComp).replace("{expressNo}", a.expressNo) : ""
                    }
                    return null == n ? "" : n
                }), $.dialog.extend("exchange", "查看礼品详情", e, 766, "auto")
            }, getExchangeDetail: function (a) {
                var e = this;
                $.get("/bonus/point/exchangeDetail/" + a, function (a) {
                    a && e.buildDialog(a)
                })
            }, redLoadDataList: function (a) {
                var e = a.data;
                if (e && e.length) {
                    for (var t = "", n = 0; n < e.length; n++) {
                        t += "<tr>";
                        for (var o = 0, l = s.length; o < l; o++) {
                            var d = s[o], r = e[n][d] || "";
                            switch (d) {
                                case"detail":
                                    switch (e[n].productType) {
                                        case 1:
                                            r = '<a href="javascript:;" title="" class="orange-link" name="showDetail" data-orderid="' + e[n].orderId + '">查看详情</a>';
                                            break;
                                        case 2:
                                            r = '<a href="/bonus/index" target="_blank" title="" class="orange-link">查看详情</a>'
                                    }
                                    break;
                                case"bizType":
                                    r = e[n].point > 0 ? "积分收入" : "积分支出";
                                    break;
                                case"status":
                                    r = u[r]
                            }
                            t += "<td>" + (r || "") + "</td>"
                        }
                        t += "</tr>"
                    }
                    i.html(t)
                } else p.noRedList(), $(".pages").remove()
            }, noRedList: function () {
                var a = $("#nodata").data("noimgsrc"), e = "point1" == l.data("type") ? 5 : l.find("th").length,
                    t = '<tr ><td colspan="' + e + '" class="no-data"><img src="' + a + '" alt="没有记录">没有记录</td></tr>';
                i.html(t)
            }
        };
    p.init(), r.tab("ul.point-tab li", "div.at-bd", "click", "cur", 0, function (a, e, t) {
        o = a, l = t, i = l.find("tbody"), $(".pages").remove(), l.after(m), 0 == o ? (n = "/bonus/point/accessRecord/", s = ["changeTimeStr", "point", "bizType", "bizTypeStr"]) : (n = "/bonus/point/exchangeRecord/", s = ["createTimeStr", "productName", "productNumber", "costPoints", "status", "exchangeTypeStr", "detail"]), d.pages(n, p.redLoadDataList, c, i, 1, 10, "list", 100, $(".search_form").eq(o).serialize())
    })
}), define("plugIn/laydate/laydate.cmd", [], function (a, e, t) {
    !function (a) {
        function e(a) {
            n.skinLink.href = n.getPath + d[4] + a + d[5]
        }

        var t = {
                path: "",
                skin: "fax",
                format: "YYYY-MM-DD",
                min: "1900-01-01 00:00:00",
                max: "2099-12-31 23:59:59",
                isv: !1,
                init: !1,
                istime: !1
            }, n = {}, s = document, i = "createElement", o = "getElementById", l = "getElementsByTagName",
            d = ["laydate_box", "laydate_void", "laydate_click", "LayDateSkin", "skins/", "/laydate.css"];
        a.laydate = function (e) {
            e = e || {};
            try {
                d.event = a.event ? a.event : laydate.caller.arguments[0]
            } catch (t) {
            }
            return n.run(e), laydate
        }, laydate.v = "1.1", n.getPath = function () {
            var a = document.scripts, e = a[a.length - 1].src;
            return t.path ? t.path : e.substring(0, e.lastIndexOf("/") + 1)
        }(), n.use = function (a, e) {
            var t = s[i]("link");
            t.type = "text/css", t.rel = "stylesheet", t.href = n.getPath + a + d[5], e && (t.id = e), s[l]("head")[0].appendChild(t), t = null
        }, n.trim = function (a) {
            return a = a || "", a.replace(/^\s|\s$/g, "").replace(/\s+/g, " ")
        }, n.digit = function (a) {
            return a < 10 ? "0" + (0 | a) : a
        }, n.stopmp = function (e) {
            return e = e || a.event, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, this
        }, n.each = function (a, e) {
            for (var t = 0, n = a.length; t < n && e(t, a[t]) !== !1; t++) ;
        }, n.hasClass = function (a, e) {
            return a = a || {}, new RegExp("\\b" + e + "\\b").test(a.className)
        }, n.addClass = function (a, e) {
            return a = a || {}, n.hasClass(a, e) || (a.className += " " + e), a.className = n.trim(a.className), this
        }, n.removeClass = function (a, e) {
            if (a = a || {}, n.hasClass(a, e)) {
                var t = new RegExp("\\b" + e + "\\b");
                a.className = a.className.replace(t, "")
            }
            return this
        }, n.removeCssAttr = function (a, e) {
            var t = a.style;
            t.removeProperty ? t.removeProperty(e) : t.removeAttribute(e)
        }, n.shde = function (a, e) {
            a.style.display = e ? "none" : "block"
        }, n.query = function (a) {
            if (a && 1 === a.nodeType) {
                if ("input" !== a.tagName.toLowerCase()) throw new Error("选择器elem错误");
                return a
            }
            var e, a = n.trim(a).split(" "), t = s[o](a[0].substr(1));
            if (t) {
                if (a[1]) {
                    if (/^\./.test(a[1])) {
                        var i, d = a[1].substr(1), r = new RegExp("\\b" + d + "\\b");
                        return e = [], i = s.getElementsByClassName ? t.getElementsByClassName(d) : t[l]("*"), n.each(i, function (a, t) {
                            r.test(t.className) && e.push(t)
                        }), e[0] ? e : ""
                    }
                    return e = t[l](a[1]), e[0] ? t[l](a[1]) : ""
                }
                return t
            }
        }, n.on = function (e, t, s) {
            return e.attachEvent ? e.attachEvent("on" + t, function () {
                s.call(e, a.even)
            }) : e.addEventListener(t, s, !1), n
        }, n.stopMosup = function (a, e) {
            "mouseup" !== a && n.on(e, "mouseup", function (a) {
                n.stopmp(a)
            })
        }, n.run = function (a) {
            var e, s, i, o = n.query, l = d.event;
            try {
                i = l.target || l.srcElement || {}
            } catch (r) {
                i = {}
            }
            if (e = a.elem ? o(a.elem) : i, d.elemv = /textarea|input/.test(e.tagName.toLocaleLowerCase()) ? "value" : "innerHTML", ("init" in a ? a.init : t.init) && !e[d.elemv] && (e[d.elemv] = laydate.now(null, a.format || t.format)), l && i.tagName) {
                if (!e || e === n.elem) return;
                n.stopMosup(l.type, e), n.stopmp(l), n.view(e, a), n.reshow()
            } else s = a.event || "click", n.each((0 | e.length) > 0 ? e : [e], function (e, t) {
                n.stopMosup(s, t), n.on(t, s, function (e) {
                    n.stopmp(e), t !== n.elem && (n.view(t, a), n.reshow())
                })
            })
        }, n.scroll = function (a) {
            return a = a ? "scrollLeft" : "scrollTop", s.body[a] | s.documentElement[a]
        }, n.winarea = function (a) {
            return document.documentElement[a ? "clientWidth" : "clientHeight"]
        }, n.isleap = function (a) {
            return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
        }, n.checkVoid = function (a, e, t) {
            var s = [];
            return a = 0 | a, e = 0 | e, t = 0 | t, a < n.mins[0] ? s = ["y"] : a > n.maxs[0] ? s = ["y", 1] : a >= n.mins[0] && a <= n.maxs[0] && (a == n.mins[0] && (e < n.mins[1] ? s = ["m"] : e == n.mins[1] && t < n.mins[2] && (s = ["d"])), a == n.maxs[0] && (e > n.maxs[1] ? s = ["m", 1] : e == n.maxs[1] && t > n.maxs[2] && (s = ["d", 1]))), s
        }, n.timeVoid = function (a, e) {
            if (n.ymd[1] + 1 == n.mins[1] && n.ymd[2] == n.mins[2]) {
                if (0 === e && a < n.mins[3]) return 1;
                if (1 === e && a < n.mins[4]) return 1;
                if (2 === e && a < n.mins[5]) return 1
            } else if (n.ymd[1] + 1 == n.maxs[1] && n.ymd[2] == n.maxs[2]) {
                if (0 === e && a > n.maxs[3]) return 1;
                if (1 === e && a > n.maxs[4]) return 1;
                if (2 === e && a > n.maxs[5]) return 1
            }
            if (a > (e ? 59 : 23)) return 1
        }, n.check = function () {
            var a = n.options.format.replace(/YYYY|MM|DD|hh|mm|ss/g, "\\d+\\").replace(/\\$/g, ""), e = new RegExp(a),
                t = n.elem[d.elemv], s = t.match(/\d+/g) || [], i = n.checkVoid(s[0], s[1], s[2]);
            if ("" !== t.replace(/\s/g, "")) {
                if (!e.test(t)) return n.elem[d.elemv] = "", n.msg("日期不符合格式，请重新选择。"), 1;
                if (i[0]) return n.elem[d.elemv] = "", n.msg("日期不在有效期内，请重新选择。"), 1;
                i.value = n.elem[d.elemv].match(e).join(), s = i.value.match(/\d+/g), s[1] < 1 ? (s[1] = 1, i.auto = 1) : s[1] > 12 ? (s[1] = 12, i.auto = 1) : s[1].length < 2 && (i.auto = 1), s[2] < 1 ? (s[2] = 1, i.auto = 1) : s[2] > n.months[(0 | s[1]) - 1] ? (s[2] = 31, i.auto = 1) : s[2].length < 2 && (i.auto = 1), s.length > 3 && (n.timeVoid(s[3], 0) && (i.auto = 1), n.timeVoid(s[4], 1) && (i.auto = 1), n.timeVoid(s[5], 2) && (i.auto = 1)), i.auto ? n.creation([s[0], 0 | s[1], 0 | s[2]], 1) : i.value !== n.elem[d.elemv] && (n.elem[d.elemv] = i.value)
            }
        }, n.months = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], n.viewDate = function (a, e, t) {
            var s = (n.query, {}), i = new Date;
            a < (0 | n.mins[0]) && (a = 0 | n.mins[0]), a > (0 | n.maxs[0]) && (a = 0 | n.maxs[0]), i.setFullYear(a, e, t), s.ymd = [i.getFullYear(), i.getMonth(), i.getDate()], n.months[1] = n.isleap(s.ymd[0]) ? 29 : 28, i.setFullYear(s.ymd[0], s.ymd[1], 1), s.FDay = i.getDay(), s.PDay = n.months[0 === e ? 11 : e - 1] - s.FDay + 1, s.NDay = 1, n.each(d.tds, function (a, e) {
                var t, i = s.ymd[0], o = s.ymd[1] + 1;
                e.className = "", a < s.FDay ? (e.innerHTML = t = a + s.PDay, n.addClass(e, "laydate_nothis"), 1 === o && (i -= 1), o = 1 === o ? 12 : o - 1) : a >= s.FDay && a < s.FDay + n.months[s.ymd[1]] ? (e.innerHTML = t = a - s.FDay + 1, a - s.FDay + 1 === s.ymd[2] && (n.addClass(e, d[2]), s.thisDay = e)) : (e.innerHTML = t = s.NDay++, n.addClass(e, "laydate_nothis"), 12 === o && (i += 1), o = 12 === o ? 1 : o + 1), n.checkVoid(i, o, t)[0] && n.addClass(e, d[1]), n.options.festival && n.festival(e, o + "." + t), e.setAttribute("y", i), e.setAttribute("m", o), e.setAttribute("d", t), i = o = t = null
            }), n.valid = !n.hasClass(s.thisDay, d[1]), n.ymd = s.ymd, d.year.value = n.ymd[0] + "年", d.month.value = n.digit(n.ymd[1] + 1) + "月", n.each(d.mms, function (a, e) {
                var t = n.checkVoid(n.ymd[0], (0 | e.getAttribute("m")) + 1);
                "y" === t[0] || "m" === t[0] ? n.addClass(e, d[1]) : n.removeClass(e, d[1]), n.removeClass(e, d[2]), t = null
            }), n.addClass(d.mms[n.ymd[1]], d[2]);
            var o = new Date;
            s.times = [n.inymd[n.elemIndexMap.hour] || o.getHours() || 0, n.inymd[n.elemIndexMap.minute] || o.getMinutes() || 0, n.inymd[n.elemIndexMap.second] || o.getSeconds() || 0], n.each(new Array(3), function (a) {
                n.hmsin[a].value = n.digit(n.timeVoid(s.times[a], a) ? 0 | n.mins[a + 3] : 0 | s.times[a])
            }), n[n.valid ? "removeClass" : "addClass"](d.ok, d[1])
        }, n.festival = function (a, e) {
            var t;
            switch (e) {
                case"1.1":
                    t = "元旦";
                    break;
                case"3.8":
                    t = "妇女";
                    break;
                case"4.5":
                    t = "清明";
                    break;
                case"5.1":
                    t = "劳动";
                    break;
                case"6.1":
                    t = "儿童";
                    break;
                case"9.10":
                    t = "教师";
                    break;
                case"10.1":
                    t = "国庆"
            }
            t && (a.innerHTML = t), t = null
        }, n.viewYears = function (a) {
            var e = n.query, t = "";
            n.each(new Array(14), function (e) {
                t += 7 === e ? "<li " + (parseInt(d.year.value) === a ? 'class="' + d[2] + '"' : "") + ' y="' + a + '">' + a + "年</li>" : '<li y="' + (a - 7 + e) + '">' + (a - 7 + e) + "年</li>"
            }), e("#laydate_ys").innerHTML = t, n.each(e("#laydate_ys li"), function (a, e) {
                "y" === n.checkVoid(e.getAttribute("y"))[0] ? n.addClass(e, d[1]) : n.on(e, "click", function (a) {
                    n.stopmp(a).reshow(), n.viewDate(0 | this.getAttribute("y"), n.ymd[1], n.ymd[2])
                })
            })
        }, n.getEachElementIndex = function (a) {
            var e = {}, t = 0;
            return a.replace(/YYYY|MM|DD|hh|mm|ss/g, function (a, n) {
                return "YYYY" === a ? e.year = t++ : "MM" === a ? e.month = t++ : "DD" === a ? e.day = t++ : "hh" === a ? e.hour = t++ : "mm" === a ? e.minute = t++ : "ss" === a && (e.second = t++), ""
            }), e
        }, n.initDate = function (a) {
            var e = (n.query, new Date), t = n.elem[d.elemv].match(/\d+/g) || [], s = n.getEachElementIndex(a);
            n.elemIndexMap = s, t.length < 3 && (t = n.options.start.match(/\d+/g) || [], t.length < 3 && (t = [e.getFullYear(), e.getMonth() + 1, e.getDate()])), n.inymd = t, n.viewDate(t[s.year], t[s.month] - 1, t[s.day])
        }, n.iswrite = function () {
            var a = n.query, e = {time: a("#laydate_hms")};
            n.shde(e.time, !("istime" in n.options ? n.options.istime : t.istime)), n.shde(d.oclear, !("isclear" in n.options ? n.options.isclear : 1)), n.shde(d.otoday, !("istoday" in n.options ? n.options.istoday : 1)), n.shde(d.ok, !("issure" in n.options ? n.options.issure : 1))
        }, n.orien = function (a, e) {
            var t, s = n.elem.getBoundingClientRect();
            a.style.left = s.left + (e ? 0 : n.scroll(1)) + "px", t = s.bottom + a.offsetHeight / 1.5 <= n.winarea() ? s.bottom - 1 : s.top > a.offsetHeight / 1.5 ? s.top - a.offsetHeight + 1 : n.winarea() - a.offsetHeight, a.style.top = Math.max(t + (e ? 0 : n.scroll()), 1) + "px"
        }, n.follow = function (a) {
            n.options.fixed ? (a.style.position = "fixed", n.orien(a, 1)) : (a.style.position = "absolute", n.orien(a))
        }, n.viewtb = function () {
            var a, e = [], t = ["日", "一", "二", "三", "四", "五", "六"], o = {}, d = s[i]("table"), r = s[i]("thead");
            return r.appendChild(s[i]("tr")), o.creath = function (a) {
                var e = s[i]("th");
                e.innerHTML = t[a], r[l]("tr")[0].appendChild(e), e = null
            }, n.each(new Array(6), function (t) {
                e.push([]), a = d.insertRow(0), n.each(new Array(7), function (n) {
                    e[t][n] = 0, 0 === t && o.creath(n), a.insertCell(n)
                })
            }), d.insertBefore(r, d.children[0]), d.id = d.className = "laydate_table", a = e = null, d.outerHTML.toLowerCase()
        }(), n.view = function (a, e) {
            var o, l = n.query, r = {};
            e = e || a, n.elem = a, n.options = e, n.options.format || (n.options.format = t.format), n.options.start = n.options.start || "", n.mm = r.mm = [n.options.min || t.min, n.options.max || t.max], n.mins = r.mm[0].match(/\d+/g), n.maxs = r.mm[1].match(/\d+/g), n.box ? n.shde(n.box) : (o = s[i]("div"), o.id = d[0], o.className = d[0], o.style.cssText = "position: absolute;", o.setAttribute("name", "laydate-v" + laydate.v), o.innerHTML = r.html = '<div class="laydate_top"><div class="laydate_ym laydate_y" id="laydate_YY"><a class="laydate_choose laydate_chprev laydate_tab"><cite></cite></a><input id="laydate_y" readonly><label></label><a class="laydate_choose laydate_chnext laydate_tab"><cite></cite></a><div class="laydate_yms"><a class="laydate_tab laydate_chtop"><cite></cite></a><ul id="laydate_ys"></ul><a class="laydate_tab laydate_chdown"><cite></cite></a></div></div><div class="laydate_ym laydate_m" id="laydate_MM"><a class="laydate_choose laydate_chprev laydate_tab"><cite></cite></a><input id="laydate_m" readonly><label></label><a class="laydate_choose laydate_chnext laydate_tab"><cite></cite></a><div class="laydate_yms" id="laydate_ms">' + function () {
                var a = "";
                return n.each(new Array(12), function (e) {
                    a += '<span m="' + e + '">' + n.digit(e + 1) + "月</span>"
                }), a
            }() + "</div></div></div>" + n.viewtb + '<div class="laydate_bottom"><ul id="laydate_hms"><li class="laydate_sj">时间</li><li><input readonly>:</li><li><input readonly>:</li><li><input readonly></li></ul><div class="laydate_time" id="laydate_time"></div><div class="laydate_btn"><a id="laydate_clear">清空</a><a id="laydate_today">今天</a><a id="laydate_ok">确认</a></div>' + (t.isv ? '<a href="http://sentsin.com/layui/laydate/" class="laydate_v" target="_blank">laydate-v' + laydate.v + "</a>" : "") + "</div>", s.body.appendChild(o), n.box = l("#" + d[0]), n.events(), o = null), n.follow(n.box), e.zIndex ? n.box.style.zIndex = e.zIndex : n.removeCssAttr(n.box, "z-index"), n.stopMosup("click", n.box), n.initDate(e.format), n.iswrite(), n.check()
        }, n.reshow = function () {
            return n.each(n.query("#" + d[0] + " .laydate_show"), function (a, e) {
                n.removeClass(e, "laydate_show")
            }), this
        }, n.close = function () {
            n.reshow(), n.shde(n.query("#" + d[0]), 1), n.elem = null
        }, n.parse = function (a, e, s) {
            return a = a.concat(e), s = s || (n.options ? n.options.format : t.format), s.replace(/YYYY|MM|DD|hh|mm|ss/g, function (e, t) {
                var s = -1;
                return "YYYY" === e ? s = 0 : "MM" === e ? s = 1 : "DD" === e ? s = 2 : "hh" === e ? s = 3 : "mm" === e ? s = 4 : "ss" === e && (s = 5), n.digit(a[s])
            })
        }, n.creation = function (a, e) {
            var t = (n.query, n.hmsin), s = n.parse(a, [t[0].value, t[1].value, t[2].value]);
            n.elem[d.elemv] = s, e || (n.close(), "function" == typeof n.options.choose && n.options.choose(s))
        }, n.events = function () {
            var e = n.query, t = {box: "#" + d[0]};
            n.addClass(s.body, "laydate_body"), d.tds = e("#laydate_table td"), d.mms = e("#laydate_ms span"), d.year = e("#laydate_y"), d.month = e("#laydate_m"), n.each(e(t.box + " .laydate_ym"), function (a, e) {
                n.on(e, "click", function (e) {
                    n.stopmp(e).reshow(), n.addClass(this[l]("div")[0], "laydate_show"), a || (t.YY = parseInt(d.year.value), n.viewYears(t.YY))
                })
            }), n.on(e(t.box), "click", function () {
                n.reshow()
            }), t.tabYear = function (a) {
                0 === a ? n.ymd[0]-- : 1 === a ? n.ymd[0]++ : 2 === a ? t.YY -= 14 : t.YY += 14, a < 2 ? (n.viewDate(n.ymd[0], n.ymd[1], n.ymd[2]), n.reshow()) : n.viewYears(t.YY)
            }, n.each(e("#laydate_YY .laydate_tab"), function (a, e) {
                n.on(e, "click", function (e) {
                    n.stopmp(e), t.tabYear(a)
                })
            }), t.tabMonth = function (a) {
                a ? (n.ymd[1]++, 12 === n.ymd[1] && (n.ymd[0]++, n.ymd[1] = 0)) : (n.ymd[1]--, n.ymd[1] === -1 && (n.ymd[0]--, n.ymd[1] = 11)), n.viewDate(n.ymd[0], n.ymd[1], n.ymd[2])
            }, n.each(e("#laydate_MM .laydate_tab"), function (a, e) {
                n.on(e, "click", function (e) {
                    n.stopmp(e).reshow(), t.tabMonth(a)
                })
            }), n.each(e("#laydate_ms span"), function (a, e) {
                n.on(e, "click", function (a) {
                    n.stopmp(a).reshow(), n.hasClass(this, d[1]) || n.viewDate(n.ymd[0], 0 | this.getAttribute("m"), n.ymd[2])
                })
            }), n.each(e("#laydate_table td"), function (a, e) {
                n.on(e, "click", function (a) {
                    n.hasClass(this, d[1]) || (n.stopmp(a), n.creation([0 | this.getAttribute("y"), 0 | this.getAttribute("m"), 0 | this.getAttribute("d")]))
                })
            }), d.oclear = e("#laydate_clear"), n.on(d.oclear, "click", function () {
                n.elem[d.elemv] = "", n.close()
            }), d.otoday = e("#laydate_today"), n.on(d.otoday, "click", function () {
                var a = new Date, e = n.hmsin, t = new Date;
                e[0].value = t.getHours(), e[1].value = t.getMinutes(), e[2].value = t.getSeconds(), n.creation([a.getFullYear(), a.getMonth() + 1, a.getDate()])
            }), d.ok = e("#laydate_ok"), n.on(d.ok, "click", function () {
                n.valid && n.creation([n.ymd[0], n.ymd[1] + 1, n.ymd[2]])
            }), t.times = e("#laydate_time"), n.hmsin = t.hmsin = e("#laydate_hms input"), t.hmss = ["小时", "分钟", "秒数"], t.hmsarr = [], n.msg = function (a, s) {
                var i = '<div class="laydte_hsmtex">' + (s || "提示") + "<span>×</span></div>";
                "string" == typeof a ? (i += "<p>" + a + "</p>", n.shde(e("#" + d[0])), n.removeClass(t.times, "laydate_time1").addClass(t.times, "laydate_msg")) : (t.hmsarr[a] ? i = t.hmsarr[a] : (i += '<div id="laydate_hmsno" class="laydate_hmsno">', n.each(new Array(0 === a ? 24 : 60), function (a) {
                    i += "<span>" + a + "</span>"
                }), i += "</div>", t.hmsarr[a] = i), n.removeClass(t.times, "laydate_msg"), n[0 === a ? "removeClass" : "addClass"](t.times, "laydate_time1")), n.addClass(t.times, "laydate_show"), t.times.innerHTML = i
            }, t.hmson = function (a, t) {
                var s = e("#laydate_hmsno span"), i = n.valid ? null : 1;
                n.each(s, function (e, s) {
                    i ? n.addClass(s, d[1]) : n.timeVoid(e, t) ? n.addClass(s, d[1]) : n.on(s, "click", function (e) {
                        n.hasClass(this, d[1]) || (a.value = n.digit(0 | this.innerHTML))
                    })
                }), n.addClass(s[0 | a.value], "laydate_click")
            }, n.each(t.hmsin, function (a, e) {
                n.on(e, "click", function (e) {
                    n.stopmp(e).reshow(), n.msg(a, t.hmss[a]), t.hmson(this, a)
                })
            }), n.on(s, "mouseup", function () {
                var a = e("#" + d[0]);
                a && "none" !== a.style.display && (n.check() || n.close())
            }).on(s, "keydown", function (e) {
                e = e || a.event;
                var t = e.keyCode;
                13 === t && n.elem && n.creation([n.ymd[0], n.ymd[1] + 1, n.ymd[2]])
            })
        }, n.init = function () {
            n.skinLink = n.query("#" + d[3])
        }(), laydate.reset = function () {
            n.box && n.elem && n.follow(n.box)
        }, laydate.now = function (a, e) {
            var t = new Date(0 | a ? function (a) {
                return a < 864e5 ? +new Date + 864e5 * a : a
            }(parseInt(a)) : +new Date);
            return n.parse([t.getFullYear(), t.getMonth() + 1, t.getDate()], [t.getHours(), t.getMinutes(), t.getSeconds()], e)
        }, laydate.skin = e;
        var r = null;
        window.onresize = function () {
            r && clearTimeout(r), r = setTimeout(function () {
                laydate.reset()
            }, 150)
        }
    }(window)
}), define("module/common/dateUtil", [], function (a, e, t) {
    function n(a) {
        var e = a ? new Date((+a)) : new Date;
        this.yyyy = e.getFullYear(), this.MM = e.getMonth() + 1, this.dd = e.getDate(), this.hh = e.getHours(), this.mm = e.getMinutes(), this.ss = e.getSeconds(), this.D = e.getDay()
    }

    n.prototype = {
        format: function (a) {
            var e = this, a = a || "yyyy-MM-dd";
            return a.replace(/y+|M+|d+|h+|m+|s+|D/g, function (a) {
                return e[a] > 9 ? e[a] : "0" + e[a]
            })
        }
    }, $.extend($, {
        date: function (a) {
            return a = a || new Date, new n((+a))
        }, toDate: function (a) {
            return $.date(a).format("yyyy-MM-dd")
        }, toDatetime: function (a) {
            return a ? $.date(a).format("yyyy-MM-dd hh:mm:ss") : ""
        }, totime: function (a) {
            return a ? $.date(a).format("MM月dd日hh:mm") : ""
        }
    })
}), define("module/page/js/init", [], function (a, e, t) {
    var n = function (a, e, t, n, s, i) {
        s = s || 10;
        var o = t.totalRow / s;
        i = i || 30, $("#pageCal").val(t.totalRow);
        var l = parseInt(o) >= i ? i : o.toString().indexOf(".") > -1 ? parseInt(o) + 1 : parseInt(o),
            d = "list" == n ? '第<i class="pg">' + (a + 1) + '</i>页/共<i class="cal">' + l + '</i>页<a data-page="fast" href="javascript:void(0);">首页</a><a data-page="up" href="javascript:void(0);">上一页</a>' : '<span class="l">第<i class="pg">' + (a + 1) + '</i>页/共<i class="cal">' + l + '</i>页<a data-page="fast" href="javascript:void(0);">首页</a></span><a class="up" data-page="up" href="javascript:void(0);">上一页</a>',
            r = "list" == n ? '<a data-page="down" href="javascript:void(0)">下一页</a><a data-page="last" href="javascript:void(0)">末页</a>' : '<a class="down" data-page="down" href="javascript:void(0)">下一页</a><span class="l"><a data-page="last" href="javascript:void(0)">末页</a></span>';
        switch (e) {
            case"fast":
                if (l > 5) d += '<a data-page="un" class="cur" href="javascript:void(0);">1</a><a data-page="un" href="javascript:void(0);">2</a><a data-page="un" href="javascript:void(0);">3</a><a data-page="un" href="javascript:void(0);">4</a><a data-page="un" href="javascript:void(0);">5</a>'; else for (var c = 0; c < l; c++) d += '<a data-page="un" href="javascript:void(0);">' + (c + 1) + "</a>";
                $("div.page").html(d + r), $(".page a[data-page='un']:first").addClass("cur");
                break;
            case"up":
                if (a < 4 && l >= 5) {
                    for (var c = 1; c < 6; c++) d += '<a data-page="un" href="javascript:void(0);">' + c + "</a>";
                    $("div.page").html(d + r), $(".page a[data-page='un']:contains('" + (a + 1) + "')").addClass("cur")
                } else if (a < 4 && l < 5) {
                    for (var m = parseInt(l) + 1, c = 1; c < m; c++) d += '<a data-page="un" href="javascript:void(0);">' + c + "</a>";
                    $("div.page").html(d + r), $(".page a[data-page='un']:contains('" + (a + 1) + "')").addClass("cur")
                } else {
                    for (var c = a - 2; c < a + 3; c++) d += '<a data-page="un" href="javascript:void(0);">' + c + "</a>";
                    $("div.page").html(d + r), $(".page a[data-page='un']:last").prev().addClass("cur")
                }
                break;
            case"down":
                var m = parseInt(l) + 1;
                if (l - 5 < a && l > 0) {
                    for (var c = l - 4; c < m; c++) d += '<a data-page="un" href="javascript:void(0);">' + c + "</a>";
                    $("div.page").html(d + r), $(".page a[data-page='un']:contains('" + (a + 1) + "')").addClass("cur")
                } else {
                    for (var c = a; c < a + 5; c++) d += '<a data-page="un" href="javascript:void(0);">' + c + "</a>";
                    $("div.page").html(d + r), $("div.page a[data-page='un']:eq(1)").addClass("cur")
                }
                break;
            case"last":
                if (l > a) for (var u = l - 5 > 0 ? l - 5 : 0, c = u; c < l; c++) d += '<a data-page="un" href="javascript:void(0);">' + (c + 1) + "</a>";
                $("div.page").html(d + r), $("div.page a[data-page='un']:last").addClass("cur")
        }
        $(".page i.pg").html(a + 1)
    };
    e.pages = function (a, e, t, s, i, o, l, d, r, c, m) {
        var m = m ? m : "get", i = i || 1, o = o || 10, r = r ? "?" + r : "", c = c || 1,
            u = '<img src="' + window.global.staticPath + '/images/loading-44bbc291bc.gif" />', p = function (t, i) {
                $(s).html('<span class="loding-img">' + u + "</span>"), t = t - 1 || 0, $.ajaxSetup({cache: !1}), $[m](a + t + "/" + o + r, function (a, s, r) {
                    var a = "object" == typeof a ? a = a || {} : JSON.parse(a);
                    0 != a.totalRow && null != a.totalRow && n(t, i, a, l, o, d), e(a, c, r)
                }, "json")
            }, h = function (a) {
                var e = $(a), t = $("a[data-page='un']:first"), n = $("a[data-page='un']:last"),
                    s = "un" == e.attr("data-page") ? parseInt(e.html()) : parseInt($(".page a[data-page='un'].cur").html()),
                    i = parseInt($(".page .cal").html());
                switch (e.attr("data-page")) {
                    case"fast":
                        1 != s && p(1, "fast");
                        break;
                    case"up":
                        if (t.next().hasClass("cur") && 1 != s) p(s - 1, "up"); else {
                            if (t.hasClass("cur") && 1 == s) return;
                            $(".page .cur").prev().addClass("cur").siblings().removeClass("cur"), p(s - 1)
                        }
                        break;
                    case"un":
                        $(".page a[data-page='un'].cur").html() != e.html() && (t.html() == e.html() && 1 != e.html() ? p(parseInt(e.html()), "up") : n.html() == e.html() && e.html() != i ? p(parseInt(e.html()), "down") : (e.addClass("cur").siblings().removeClass("cur"), p(parseInt(e.html()))));
                        break;
                    case"down":
                        if (n.prev().hasClass("cur") && s != i - 1) p(s + 1, "down"); else {
                            if (n.hasClass("cur") && s == i) return;
                            $(".page .cur").next().addClass("cur").siblings().removeClass("cur"), p(s + 1)
                        }
                        break;
                    case"last":
                        i != s && p(i, "last")
                }
            }, y = function () {
                $("div.page").delegate("a", "click", function (a) {
                    return a.preventDefault(), h(this), !1
                })
            };
        return y(), p(i, "fast"), this
    }
}), define("module/common/tab", [], function (a, e, t) {
    e.tab = function (a, e, t, n, s, i) {
        var o = $(a), l = $(e);
        if (!(o.length <= 0)) {
            var s = s || 0;
            o.each(function (a) {
                $(this).on(t ? t : "mouseenter", function () {
                    var e = $(this), t = l.eq(a);
                    return o.removeClass(n), e.addClass(n), l.hide(), t.show(), "function" == typeof i && i(a, e, t), !1
                })
            }), o.eq(s).trigger(t)
        }
    }
});