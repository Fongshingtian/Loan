define("account/msg/js/init", ["../../../module/page/js/init", "../../../module/common/tab", "../../../module/eSignature/js/init"], function (a, t, e) {
    var s = a("../../../module/page/js/init"),
        i = (a("../../../module/common/tab"), a("../../../module/eSignature/js/init"));
    i.checkSignature();
    var n = $("#pageCal").attr("data-url"), c = $("#pageCal").attr("data-list-url"),
        r = $("#pageCal").attr("data-detail-url"), l = $("#pageCal").attr("data-update-url"),
        o = $("#pageCal").attr("data-delete-url"), d = $("#pageCal").attr("data-img"),
        u = ('<img src="' + window.global.staticPath + '/images/loading-44bbc291bc.gif" />', $(".mg_num span").html()),
        p = function (a) {
            var t = "", e = a.totalRow, a = a.data, s = a.length;
            if ($("span.mg_tatal").html(e), s > 0) for (var i = 0; i < s; i++) {
                var n = a[i], c = "";
                1 == n.mailStatus ? (t += "<tr class='g-fwb'>", c = "未读") : 3 == n.mailStatus && (t += "<tr>", c = "已读"), t += "<td><input class='mg_ck' type='checkbox' name='ids' value='" + n.id + "'/>&nbsp;</td><td>" + c + "</td><td class='mg_til'><a class='mg_t' id='" + n.id + "'>" + n.mailTitle + "</a></td><td>" + n.sendTime + "</td></tr><tr class='mg_con'><td>&nbsp;</td><td colspan='3' class='align_left'></td></tr>"
            } else t += '<tr><td colspan="4" class="no_btm"><div class="no-data"><i>没有数据</i></div></td></tr>';
            $("table.mg_tab tbody").html(t), $(".mg_ckall").prop("checked", !1)
        }, g = function (a) {
            u -= a, $(".mg_num span").html(u), $("#msg-count").html("(" + u + ")"), $("span.mg_unread").html(u), $(".name-news .ldto .msg").html(u), 0 == u && ($(".mg_num").hide(), $("#msg-count").hide(), $(".name-news .ldto .bouns").html() > 0 ? $(".name-news .ldto .msg").hide() : $(".name-news .ldto .l").hide())
        };
    s.pages(n + c, p, d, "table.mg_tab tbody", 1, 10, "list", 1e3), $(".mg_tab").delegate(".mg_t", "click", function () {
        var a = $(this), t = a.closest("tr");
        if (a.hasClass("mg_t_cur")) a.removeClass("mg_t_cur"), t.removeClass("mg_cur").next().find("td").hide(); else {
            var e = a.prop("id"), s = t.parent().find(".mg_cur");
            s.removeClass("mg_cur").next().find("td").hide(), s.find(".mg_t_cur").removeClass("mg_t_cur"), "" == t.next().find("td").eq(1).text() ? $.get(n + r + "/" + e, function (a) {
                t.hasClass("g-fwb") && (t.removeClass("g-fwb").find("td").eq(1).html("已读"), g(1)), t.addClass("mg_cur").next().find("td").show().eq(1).html(a.mailContent)
            }) : t.addClass("mg_cur").next().find("td").show(), a.addClass("mg_t_cur")
        }
    }), $(".mg_tab").delegate(".mg_ckall", "click", function () {
        this.checked ? $(".mg_ck").prop("checked", !0) : $(".mg_ck").prop("checked", !1)
    }), $(".mg_tab").delegate(".mg_ck", "click", function () {
        $("input[name='ids']:checked").size() == $("input[name='ids']").size() ? $(".mg_ckall").prop("checked", !0) : $(".mg_ckall").prop("checked", !1)
    }), $(".mg_box").delegate(".del_btn", "click", function () {
        return $("input[name='ids']:checked").size() <= 0 ? void alert("请选择需要删除的内容") : void(window.confirm("确定要删除吗?") && $.post(n + o, $("input[name='ids']:checked").serialize(), function (a) {
            if (0 == a.status) {
                var t = 0;
                $("input[name='ids']:checked").each(function () {
                    $(this).closest("tr").hasClass("g-fwb") && t++
                }), g(t), $(".mg_ckall").prop("checked", !1), s.pages(n + c, p, d, "table.mg_tab tbody", 1, 10, "list", 1e3)
            } else alert("删除失败，请重试")
        }))
    }), $(".mg_box").delegate(".read_btn", "click", function () {
        return $("input[name='ids']:checked").size() <= 0 ? void alert("请选择要标记的内容") : void(window.confirm("确定要将所选消息标记为已读吗?") && $.post(n + l, $("input[name='ids']:checked").serialize(), function (a) {
            if (0 == a.status) {
                var t = 0;
                $("input[name='ids']:checked").each(function () {
                    $(this).prop("checked", !1), $(this).closest("tr").hasClass("g-fwb") && ($(this).closest("tr").removeClass("g-fwb").find("td").eq(1).html("已读"), t++)
                }), g(t), $(".mg_ckall").prop("checked", !1)
            } else alert("标记失败，请重试")
        }))
    }), $("ul.at-tab").delegate("li", "click", function () {
        var a = $(this), t = a.data("target"), e = $("#" + t);
        a.addClass("cur").siblings().removeClass("cur"), e.show().siblings(".tag_c").hide()
    });
    var m = function () {
        var a = $("#msgSeting input[type='checkbox']"), t = {};
        a.each(function (a) {
            t[this.name] = this.checked ? 2 : 1
        }), $.post("/MyAccount/message/notice", t, function (a) {
            1 == a.status ? alert("设置成功") : alert("网络异常，请稍后重试")
        })
    };
    $("#set_btn").click(m)
}), define("module/page/js/init", [], function (a, t, e) {
    var s = function (a, t, e, s, i, n) {
        i = i || 10;
        var c = e.totalRow / i;
        n = n || 30, $("#pageCal").val(e.totalRow);
        var r = parseInt(c) >= n ? n : c.toString().indexOf(".") > -1 ? parseInt(c) + 1 : parseInt(c),
            l = "list" == s ? '第<i class="pg">' + (a + 1) + '</i>页/共<i class="cal">' + r + '</i>页<a data-page="fast" href="javascript:void(0);">首页</a><a data-page="up" href="javascript:void(0);">上一页</a>' : '<span class="l">第<i class="pg">' + (a + 1) + '</i>页/共<i class="cal">' + r + '</i>页<a data-page="fast" href="javascript:void(0);">首页</a></span><a class="up" data-page="up" href="javascript:void(0);">上一页</a>',
            o = "list" == s ? '<a data-page="down" href="javascript:void(0)">下一页</a><a data-page="last" href="javascript:void(0)">末页</a>' : '<a class="down" data-page="down" href="javascript:void(0)">下一页</a><span class="l"><a data-page="last" href="javascript:void(0)">末页</a></span>';
        switch (t) {
            case"fast":
                if (r > 5) l += '<a data-page="un" class="cur" href="javascript:void(0);">1</a><a data-page="un" href="javascript:void(0);">2</a><a data-page="un" href="javascript:void(0);">3</a><a data-page="un" href="javascript:void(0);">4</a><a data-page="un" href="javascript:void(0);">5</a>'; else for (var d = 0; d < r; d++) l += '<a data-page="un" href="javascript:void(0);">' + (d + 1) + "</a>";
                $("div.page").html(l + o), $(".page a[data-page='un']:first").addClass("cur");
                break;
            case"up":
                if (a < 4 && r >= 5) {
                    for (var d = 1; d < 6; d++) l += '<a data-page="un" href="javascript:void(0);">' + d + "</a>";
                    $("div.page").html(l + o), $(".page a[data-page='un']:contains('" + (a + 1) + "')").addClass("cur")
                } else if (a < 4 && r < 5) {
                    for (var u = parseInt(r) + 1, d = 1; d < u; d++) l += '<a data-page="un" href="javascript:void(0);">' + d + "</a>";
                    $("div.page").html(l + o), $(".page a[data-page='un']:contains('" + (a + 1) + "')").addClass("cur")
                } else {
                    for (var d = a - 2; d < a + 3; d++) l += '<a data-page="un" href="javascript:void(0);">' + d + "</a>";
                    $("div.page").html(l + o), $(".page a[data-page='un']:last").prev().addClass("cur")
                }
                break;
            case"down":
                var u = parseInt(r) + 1;
                if (r - 5 < a && r > 0) {
                    for (var d = r - 4; d < u; d++) l += '<a data-page="un" href="javascript:void(0);">' + d + "</a>";
                    $("div.page").html(l + o), $(".page a[data-page='un']:contains('" + (a + 1) + "')").addClass("cur")
                } else {
                    for (var d = a; d < a + 5; d++) l += '<a data-page="un" href="javascript:void(0);">' + d + "</a>";
                    $("div.page").html(l + o), $("div.page a[data-page='un']:eq(1)").addClass("cur")
                }
                break;
            case"last":
                if (r > a) for (var p = r - 5 > 0 ? r - 5 : 0, d = p; d < r; d++) l += '<a data-page="un" href="javascript:void(0);">' + (d + 1) + "</a>";
                $("div.page").html(l + o), $("div.page a[data-page='un']:last").addClass("cur")
        }
        $(".page i.pg").html(a + 1)
    };
    t.pages = function (a, t, e, i, n, c, r, l, o, d, u) {
        var u = u ? u : "get", n = n || 1, c = c || 10, o = o ? "?" + o : "", d = d || 1,
            p = '<img src="' + window.global.staticPath + '/images/loading-44bbc291bc.gif" />', g = function (e, n) {
                $(i).html('<span class="loding-img">' + p + "</span>"), e = e - 1 || 0, $.ajaxSetup({cache: !1}), $[u](a + e + "/" + c + o, function (a, i, o) {
                    var a = "object" == typeof a ? a = a || {} : JSON.parse(a);
                    0 != a.totalRow && null != a.totalRow && s(e, n, a, r, c, l), t(a, d, o)
                }, "json")
            }, m = function (a) {
                var t = $(a), e = $("a[data-page='un']:first"), s = $("a[data-page='un']:last"),
                    i = "un" == t.attr("data-page") ? parseInt(t.html()) : parseInt($(".page a[data-page='un'].cur").html()),
                    n = parseInt($(".page .cal").html());
                switch (t.attr("data-page")) {
                    case"fast":
                        1 != i && g(1, "fast");
                        break;
                    case"up":
                        if (e.next().hasClass("cur") && 1 != i) g(i - 1, "up"); else {
                            if (e.hasClass("cur") && 1 == i) return;
                            $(".page .cur").prev().addClass("cur").siblings().removeClass("cur"), g(i - 1)
                        }
                        break;
                    case"un":
                        $(".page a[data-page='un'].cur").html() != t.html() && (e.html() == t.html() && 1 != t.html() ? g(parseInt(t.html()), "up") : s.html() == t.html() && t.html() != n ? g(parseInt(t.html()), "down") : (t.addClass("cur").siblings().removeClass("cur"), g(parseInt(t.html()))));
                        break;
                    case"down":
                        if (s.prev().hasClass("cur") && i != n - 1) g(i + 1, "down"); else {
                            if (s.hasClass("cur") && i == n) return;
                            $(".page .cur").next().addClass("cur").siblings().removeClass("cur"), g(i + 1)
                        }
                        break;
                    case"last":
                        n != i && g(n, "last")
                }
            }, f = function () {
                $("div.page").delegate("a", "click", function (a) {
                    return a.preventDefault(), m(this), !1
                })
            };
        return f(), g(n, "fast"), this
    }
}), define("module/common/tab", [], function (a, t, e) {
    t.tab = function (a, t, e, s, i, n) {
        var c = $(a), r = $(t);
        if (!(c.length <= 0)) {
            var i = i || 0;
            c.each(function (a) {
                $(this).on(e ? e : "mouseenter", function () {
                    var t = $(this), e = r.eq(a);
                    return c.removeClass(s), t.addClass(s), r.hide(), e.show(), "function" == typeof n && n(a, t, e), !1
                })
            }), c.eq(i).trigger(e)
        }
    }
}), define("module/eSignature/js/init", [], function (a, t, e) {
    function s() {
        $(document).on("click", ".e-signature #check-protocol", function () {
            return u.close(), $.Zebra_Dialog({
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
                type: "post", url: "/user/allowElectronicSign", success: function (a) {
                    if (u.close(), 1 == a.status) r(1); else {
                        if (0 == a.errorCode) return void(window.location.href = "/user/login");
                        r(0)
                    }
                }, error: function (a, t, e) {
                    r(0)
                }
            })
        })
    }

    function i() {
        s(), n()
    }

    function n() {
        u = $.Zebra_Dialog(l, {
            title: "提示",
            buttons: !1,
            custom_class: "ZebraDialogIframe eSignature",
            width: 480,
            overlay_close: !1,
            show_close_button: !1,
            keyboard: !1
        })
    }

    function c(a, t) {
        a ? g = setTimeout(function () {
            c(--a, t)
        }, 1e3) : (t.close(), clearTimeout(g))
    }

    function r(a) {
        var e = "", s = 0;
        1 == a ? (e = o, s = 3) : (e = d, s = 5), p = $.Zebra_Dialog(e, {
            title: "提示",
            buttons: !1,
            custom_class: "ZebraDialogIframe eSignature",
            width: 300,
            overlay_close: !1,
            show_close_button: !0,
            onClose: function () {
                clearTimeout(g), 0 == a ? n() : t.confirmAuthorize.onsuccess && t.confirmAuthorize.onsuccess()
            }
        }), c(s, p)
    }

    var l = "<div class='e-signature'><p>小牛在线电子签章功能已经上线，为了您的交易安全，请授权小牛在线使用您的电子签章。</p><p>详情可查看附件。</p><div class='protocol'>查看<a href='javascript:' id='check-protocol'>《电子签章授权委托书》</a></div><a href='javascript:' class='submit' id='confirm-authorization'>确认授权</a></div>",
        o = "<div class='e-signature result'><p>授权成功</p></div>",
        d = "<div class='e-signature result'><p>授权失败，请重试</p></div>", u = null, p = null, g = null;
    t.checkSignature = function () {
        window.global.isLogin && $.ajax({
            type: "post", url: "/user/existElectronicSign", success: function (a) {
                1 == a.status && (a.data || i())
            }, error: function (a, t, e) {
            }
        })
    }, t.confirmAuthorize = function () {
        i()
    }
});