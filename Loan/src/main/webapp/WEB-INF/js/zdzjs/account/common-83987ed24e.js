define("module/common/common", ["../dialog/js/init", "../../plugIn/zebradialog/js/zebra-dialog-min", "../head/js/init", "./statistics", "./utils", "./toast", "../sidebar/main"], function (t, e, i) {
    t("../dialog/js/init"), t("../../plugIn/zebradialog/js/zebra-dialog-min"), t("../head/js/init"), t("./statistics");
    var n = t("./utils"), o = t("./toast");
    $.util = n, $.toast = o, t("../sidebar/main")
}), define("module/dialog/js/init", ["../../../plugIn/lhgdialog/lhgdialog.mod"], function (t, e, i) {
    t("../../../plugIn/lhgdialog/lhgdialog.mod"), i.exports = $.dialog, $.dialog.tip = function (t, e, i) {
        this({id: "xnTip", content: t || "提示信息", fixed: !0, title: !1, time: e || 1.5, close: i || null})
    }, $.dialog.alert = function (t, e) {
        this({id: "xnAlert", content: t || "警告信息", fixed: !0, title: !1, ok: e || null})
    }, $.dialog.confirm = function (t, e, i) {
        this({
            id: "xnConfirm", content: t || "请确认操作？", fixed: !0, title: !1, ok: e || function () {
            }, cancel: i || function () {
            }
        })
    }, $.dialog.error = function (t, e) {
        this({id: "xnError", content: t || "错误提示", fixed: !0, title: !1, ok: e || !0})
    }, $.dialog.success = function (t, e, i) {
        this({id: "xnSuccess", content: t || "成功提示", fixed: !0, title: !1, time: e || 1.5, close: i || null})
    }, $.dialog.loading = function (t) {
        return this({
            id: "xnLoading",
            content: t || "处理中……",
            fixed: !0,
            lock: !0,
            opacity: .3,
            title: !1,
            init: function () {
            }
        }), this({id: "xnLoading"})
    }, $.dialog.extend = function (t, e, i, n, o, s) {
        this({
            id: t,
            title: e,
            fixed: !0,
            width: n,
            height: o,
            lock: !0,
            opacity: .9,
            background: "#000",
            max: !1,
            min: !1,
            close: s || function () {
            },
            content: i
        })
    }
}), define("plugIn/lhgdialog/lhgdialog.mod", [], function (t, e, i) {
    !function (t, e, i) {
        var n, o, s, a, l = e.ActiveXObject && !e.XMLHttpRequest, r = function () {
            }, c = 0, d = /^url:/, u = e.document, p = "JDG" + +new Date,
            g = '<table class="ui_border"><tbody><tr><td class="ui_lt"></td><td class="ui_t"></td><td class="ui_rt"></td></tr><tr><td class="ui_l"></td><td class="ui_c"><div class="ui_inner"><table class="ui_dialog"><tbody><tr><td colspan="2"><div class="ui_title_bar"><div class="ui_title" unselectable="on"></div><div class="ui_title_buttons"><a class="ui_min" href="javascript:void(0);" title="最小化"><b class="ui_min_b"></b></a><a class="ui_max" href="javascript:void(0);" title="最大化"><b class="ui_max_b"></b></a><a class="ui_res" href="javascript:void(0);" title="还原"><b class="ui_res_b"></b><b class="ui_res_t"></b></a><a class="ui_close" href="javascript:void(0);" title="关闭(esc键)">×</a></div></div></td></tr><tr><td class="ui_icon"></td><td class="ui_main"><div class="ui_content"></div></td></tr><tr><td colspan="2"><div class="ui_buttons"></div></td></tr></tbody></table></div></td><td class="ui_r"></td></tr><tr><td class="ui_lb"></td><td class="ui_b"></td><td class="ui_rb"></td></tr></tbody></table>',
            f = function (t, e, i) {
                for (var n = t.length; e < n && (i = u.querySelector ? t[e].src : t[e].getAttribute("src", 4), i.substr(i.lastIndexOf("/")).indexOf("lhgdialog") === -1); e++) ;
                return i = i.split("?"), s = i[1], i[0].substr(0, i[0].lastIndexOf("/") + 1)
            }(u.getElementsByTagName("script"), 0), h = function (t) {
                if (s) for (var e, i = s.split("&"), n = 0, o = i.length; n < o; n++) if (e = i[n].split("="), t === e[0]) return e[1];
                return null
            }, m = (h("skin") || "default", function (t) {
                try {
                    a = t.top.document, a.getElementsByTagName
                } catch (e) {
                    return a = t.document, t
                }
                return "true" === h("self") || a.getElementsByTagName("frameset").length > 0 ? (a = t.document, t) : t.top
            }(e)), v = a.documentElement, b = "BackCompat" === a.compatMode;
        _$doc = t(a), _$top = t(m), _$html = t(a.getElementsByTagName("html")[0]);
        try {
            a.execCommand("BackgroundImageCache", !1, !0)
        } catch (_) {
        }
        l && function (t) {
            "fixed" !== _$html.css(t) && _$html.css({
                zoom: 1,
                backgroundImage: "url(about:blank)",
                backgroundAttachment: "fixed"
            })
        }("backgroundAttachment");
        var y = function (t) {
            t = t || {};
            var e, o = y.setting;
            for (var s in o) t[s] === i && (t[s] = o[s]);
            return t.id = t.id || p + c, (e = y.list[t.id]) ? e.zindex().focus() : (t.button = t.button || [], t.ok && t.button.push({
                id: "ok",
                name: t.okVal,
                callback: t.ok,
                focus: t.focus
            }), t.cancel && t.button.push({
                id: "cancel",
                name: t.cancelVal,
                callback: t.cancel
            }), y.setting.zIndex = t.zIndex, c++, y.list[t.id] = n ? n._init(t) : new y.fn._init(t))
        };
        y.fn = y.prototype = {
            constructor: y, _init: function (t) {
                var i, o = this, s = t.content, a = d.test(s);
                return o.opener = e, o.config = t, o.DOM = i = o.DOM || o._getDOM(), o.closed = !1, o.data = t.data, t.icon && !a ? (t.min = !1, t.max = !1, i.icon[0].style.display = "", i.icon[0].innerHTML = '<img src="' + t.path + "skins/icons/" + t.icon + '" class="ui_icon_bg"/>') : i.icon[0].style.display = "none", i.wrap.addClass(t.skin), i.rb[0].style.cursor = t.resize ? "se-resize" : "auto", i.title[0].style.cursor = t.drag ? "move" : "auto", i.max[0].style.display = t.max ? "inline-block" : "none", i.min[0].style.display = t.min ? "inline-block" : "none", i.close[0].style.display = t.cancel === !1 ? "none" : "inline-block", i.content[0].style.padding = t.padding, o.button.apply(o, t.button), o.title(t.title).content(s, !0, a).size(t.width, t.height).position(t.left, t.top).time(t.time)[t.show ? "show" : "hide"](!0).zindex(), t.focus && o.focus(), t.lock && o.lock(), o._ie6PngFix()._addEvent(), n = null, !a && t.init && t.init.call(o, e), o
            }, button: function () {
                for (var e, i, n, o, s, l = this, r = l.DOM, c = r.buttons[0], d = "ui_state_highlight", u = l._listeners = l._listeners || {}, g = [].slice.call(arguments), f = 0; f < g.length; f++) e = g[f], i = e.name, n = e.id || i, o = !u[n], s = o ? a.createElement("input") : u[n].elem, s.type = "button", u[n] || (u[n] = {}), i && (s.value = i), e.callback && (u[n].callback = e.callback), e.focus && (l._focus && l._focus.removeClass(d), l._focus = t(s).addClass(d), l.focus()), s[p + "callback"] = n, s.disabled = !!e.disabled, o && (u[n].elem = s, c.appendChild(s));
                return c.style.display = g.length ? "" : "none", l._ie6SelectFix(), l
            }, title: function (t) {
                if (t === i) return this;
                var e = this.DOM, n = e.border, o = e.title[0];
                return t === !1 ? (o.style.display = "none", o.innerHTML = "", n.addClass("ui_state_tips")) : (o.style.display = "", o.innerHTML = t, n.removeClass("ui_state_tips")), this
            }, content: function (t, e, n) {
                if (t === i) return this;
                var o = this, s = o.DOM, a = s.wrap[0], l = a.offsetWidth, r = a.offsetHeight,
                    c = parseInt(a.style.left), d = parseInt(a.style.top), u = a.style.width, p = s.content,
                    g = y.setting.content;
                return n ? (p[0].innerHTML = g, o._iframe(t.split("url:")[1])) : p.html(t), e || (l = a.offsetWidth - l, r = a.offsetHeight - r, c -= l / 2, d -= r / 2, a.style.left = Math.max(c, 0) + "px", a.style.top = Math.max(d, 0) + "px", u && "auto" !== u && (a.style.width = a.offsetWidth + "px"), o._autoPositionType()), o._ie6SelectFix(), o
            }, size: function (t, e) {
                var i = this, n = i.DOM, o = n.wrap[0], s = n.main[0].style;
                return o.style.width = "auto", "number" == typeof t && (t += "px"), "number" == typeof e && (e += "px"), s.width = t, s.height = e, "auto" !== t && (o.style.width = o.offsetWidth + "px"), i._ie6SelectFix(), i
            }, position: function (t, e) {
                var n = this, o = n.config, s = n.DOM.wrap[0], a = s.style, r = !l && o.fixed, c = l && o.fixed,
                    d = _$top.scrollLeft(), u = _$top.scrollTop(), p = r ? 0 : d, g = r ? 0 : u, f = _$top.width(),
                    h = _$top.height(), m = s.offsetWidth, v = s.offsetHeight;
                return (t || 0 === t) && (n._left = t.toString().indexOf("%") !== -1 ? t : null, t = n._toNumber(t, f - m), "number" == typeof t && (t = c ? t += d : t + p, t = Math.max(t, p) + "px"), a.left = t), (e || 0 === e) && (n._top = e.toString().indexOf("%") !== -1 ? e : null, e = n._toNumber(e, h - v), "number" == typeof e && (e = c ? e += u : e + g, e = Math.max(e, g) + "px"), a.top = e), t !== i && e !== i && n._autoPositionType(), n
            }, time: function (t, e) {
                var i = this, n = i._timer;
                return n && clearTimeout(n), e && e.call(i), t && (i._timer = setTimeout(function () {
                    i._click("cancel")
                }, 1e3 * t)), i
            }, show: function (e) {
                return this.DOM.wrap[0].style.visibility = "visible", this.DOM.border.addClass("ui_state_visible"), !e && this._lock && (t("#ldg_lockmask", a)[0].style.display = ""), this
            }, hide: function (e) {
                return this.DOM.wrap[0].style.visibility = "hidden", this.DOM.border.removeClass("ui_state_visible"), !e && this._lock && (t("#ldg_lockmask", a)[0].style.display = "none"), this
            }, zindex: function () {
                var t = this, e = t.DOM, i = t._load, n = y.focus, o = y.setting.zIndex++;
                return e.wrap[0].style.zIndex = o, n && n.DOM.border.removeClass("ui_state_focus"), y.focus = t, e.border.addClass("ui_state_focus"), i && i.style.zIndex && (i.style.display = "none"), n && n !== t && n.iframe && (n._load.style.display = ""), t
            }, focus: function () {
                try {
                    elemFocus = this._focus && this._focus[0] || this.DOM.close[0], elemFocus && elemFocus.focus()
                } catch (t) {
                }
                return this
            }, lock: function () {
                var e, i = this, n = y.setting.zIndex - 1, o = (i.config, t("#ldg_lockmask", a)[0]),
                    s = o ? o.style : "", r = l ? "absolute" : "fixed";
                return o || (e = '<iframe src="javascript:\'\'" style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1;filter:alpha(opacity=0)"></iframe>', o = a.createElement("div"), o.id = "ldg_lockmask", o.style.cssText = "position:" + r + ";left:0;top:0;width:100%;height:100%;overflow:hidden;", s = o.style, l && (o.innerHTML = e), a.body.appendChild(o)), "absolute" === r && (s.width = _$top.width(), s.height = _$top.height(), s.top = _$top.scrollTop(), s.left = _$top.scrollLeft(), i._setFixed(o)), s.zIndex = n, s.display = "", i.zindex(), i.DOM.border.addClass("ui_state_lock"), i._lock = !0, i
            }, unlock: function () {
                var e = this, i = e.config, n = t("#ldg_lockmask", a)[0];
                if (n && e._lock) {
                    if (i.parent && i.parent._lock) {
                        var o = i.parent.DOM.wrap[0].style.zIndex;
                        n.style.zIndex = parseInt(o, 10) - 1
                    } else n.style.display = "none";
                    e.DOM.border.removeClass("ui_state_lock")
                }
                return e._lock = !1, e
            }, close: function () {
                var i = this, o = i.DOM, s = o.wrap, a = y.list, l = i.config.close;
                if (i.time(), i.iframe) {
                    if ("function" == typeof l && l.call(i, i.iframe.contentWindow, e) === !1) return i;
                    t(i.iframe).unbind("load", i._fmLoad).attr("src", "javascript:''").remove(), o.content.removeClass("ui_state_full"), i._frmTimer && clearTimeout(i._frmTimer)
                } else if ("function" == typeof l && l.call(i, e) === !1) return i;
                if (i.unlock(), i._maxState && (_$html.removeClass("ui_lock_scroll"), o.res[0].style.display = "none"), y.focus === i && (y.focus = null), i._removeEvent(), delete a[i.config.id], n) s.remove(); else {
                    n = i, i._minState && (o.main[0].style.display = "", o.buttons[0].style.display = "", o.dialog[0].style.width = ""), o.wrap[0].style.cssText = "left:0;top:0;", o.wrap[0].className = "", o.border.removeClass("ui_state_focus"), o.title[0].innerHTML = "", o.content.html(""), o.icon[0].innerHTML = "", o.buttons[0].innerHTML = "", i.hide(!0)._setAbsolute();
                    for (var r in i) i.hasOwnProperty(r) && "DOM" !== r && delete i[r]
                }
                return i.closed = !0, i
            }, max: function () {
                var t, e = this, i = e.DOM, n = i.wrap[0].style, o = i.main[0].style, s = i.rb[0].style,
                    a = i.title[0].style, r = e.config, c = _$top.scrollTop(), d = _$top.scrollLeft();
                return e._maxState ? (_$html.removeClass("ui_lock_scroll"), n.top = e._or.t, n.left = e._or.l, e.size(e._or.w, e._or.h)._autoPositionType(), r.drag = e._or.d, r.resize = e._or.r, s.cursor = e._or.rc, a.cursor = e._or.tc, i.res[0].style.display = "none", i.max[0].style.display = "inline-block", delete e._or, e._maxState = !1) : (_$html.addClass("ui_lock_scroll"), e._minState && e.min(), e._or = {
                    t: n.top,
                    l: n.left,
                    w: o.width,
                    h: o.height,
                    d: r.drag,
                    r: r.resize,
                    rc: s.cursor,
                    tc: a.cursor
                }, n.top = c + "px", n.left = d + "px", t = e._maxSize(), e.size(t.w, t.h)._setAbsolute(), l && b && (n.width = _$top.width() + "px"), r.drag = !1, r.resize = !1, s.cursor = "auto", a.cursor = "auto", i.max[0].style.display = "none", i.res[0].style.display = "inline-block", e._maxState = !0), e
            }, min: function () {
                var t = this, e = t.DOM, i = e.main[0].style, n = e.buttons[0].style, o = e.dialog[0].style,
                    s = e.rb[0].style.cursor, a = t.config.resize;
                return t._minState ? (i.display = "", n.display = t._minRz.btn, o.width = "", a = t._minRz, s.cursor = t._minRz.rzs ? "se-resize" : "auto", delete t._minRz, t._minState = !1) : (t._maxState && t.max(), t._minRz = {
                    rzs: a,
                    btn: n.display
                }, i.display = "none", n.display = "none", o.width = i.width, s.cursor = "auto", a = !1, t._minState = !0), t._ie6SelectFix(), t
            }, get: function (t, e) {
                return y.list[t] ? 1 === e ? y.list[t] : y.list[t].content || null : null
            }, reload: function (i, n, o) {
                i = i || e;
                try {
                    i.location.href = n ? n : i.location.href
                } catch (s) {
                    n = this.iframe.src, t(this.iframe).attr("src", n)
                }
                return o && o.call(this), this
            }, _iframe: function (e) {
                var i, n, o, s, r, c, d, u = this, p = u.DOM.content, g = u.config,
                    f = u._load = t(".ui_loading", p[0])[0],
                    h = "position:absolute;left:-9999em;border:none 0;background:transparent",
                    v = "width:100%;height:100%;border:none 0;";
                if (g.cache === !1) {
                    var b = (new Date).getTime(), _ = e.replace(/([?&])_=[^&]*/, "$1_=" + b);
                    e = _ + (_ === e ? (/\?/.test(e) ? "&" : "?") + "_=" + b : "")
                }
                i = u.iframe = a.createElement("iframe"), i.name = g.id, i.style.cssText = h, i.setAttribute("frameborder", 0, 0), n = t(i), p[0].appendChild(i), u._frmTimer = setTimeout(function () {
                    n.attr("src", e)
                }, 1);
                var y = u._fmLoad = function () {
                    p.addClass("ui_state_full");
                    var e = u.DOM, n = (e.lt[0].offsetHeight, e.main[0].style);
                    f.style.cssText = "display:none;position:absolute;background:#FFF;opacity:0;filter:alpha(opacity=0);z-index:1;width:" + n.width + ";height:" + n.height + ";";
                    try {
                        o = u.content = i.contentWindow, s = t(o.document), r = t(o.document.body)
                    } catch (a) {
                        return void(i.style.cssText = v)
                    }
                    c = "auto" === g.width ? s.width() + (l ? 0 : parseInt(r.css("marginLeft"))) : g.width, d = "auto" === g.height ? s.height() : g.height, setTimeout(function () {
                        i.style.cssText = v
                    }, 0), u._maxState || u.size(c, d).position(g.left, g.top), f.style.width = n.width, f.style.height = n.height, g.init && g.init.call(u, o, m)
                };
                u.iframe.api = u, n.bind("load", y)
            }, _getDOM: function () {
                var e = a.createElement("div"), i = a.body;
                e.style.cssText = "position:absolute;left:0;top:0;visibility:hidden;", e.innerHTML = g;
                for (var n, o = 0, s = {wrap: t(e)}, l = e.getElementsByTagName("*"), r = l.length; o < r; o++) n = l[o].className.split("ui_")[1], n && (s[n] = t(l[o]));
                return i.insertBefore(e, i.firstChild), s
            }, _toNumber: function (t, e) {
                return "number" == typeof t ? t : (t.indexOf("%") !== -1 && (t = parseInt(e * t.split("%")[0] / 100)), t)
            }, _maxSize: function () {
                var t, e, i = this, n = i.DOM, o = n.wrap[0], s = n.main[0];
                return t = _$top.width() - o.offsetWidth + s.offsetWidth, e = _$top.height() - o.offsetHeight + s.offsetHeight, {
                    w: t,
                    h: e
                }
            }, _ie6PngFix: function () {
                if (l) for (var t, e, i, n, o = 0, s = y.setting.path + "/skins/", a = this.DOM.wrap[0].getElementsByTagName("*"); o < a.length; o++) t = a[o], e = t.currentStyle.png, e && (i = s + e, n = t.runtimeStyle, n.backgroundImage = "none", n.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + i + "',sizingMethod='scale')");
                return this
            }, _ie6SelectFix: l ? function () {
                var t = this.DOM.wrap, e = t[0], i = i + "iframeMask", n = t[i], o = e.offsetWidth, s = e.offsetHeight;
                o += "px", s += "px", n ? (n.style.width = o, n.style.height = s) : (n = e.appendChild(a.createElement("iframe")), t[i] = n, n.src = "javascript:''", n.style.cssText = "position:absolute;z-index:-1;left:0;top:0;filter:alpha(opacity=0);width:" + o + ";height:" + s)
            } : r, _autoPositionType: function () {
                this[this.config.fixed ? "_setFixed" : "_setAbsolute"]()
            }, _setFixed: function (t) {
                var e = t ? t.style : this.DOM.wrap[0].style;
                if (l) {
                    var i = _$top.scrollLeft(), n = _$top.scrollTop(), o = parseInt(e.left) - i,
                        s = parseInt(e.top) - n,
                        a = b ? "this.ownerDocument.body" : "this.ownerDocument.documentElement";
                    this._setAbsolute(), e.setExpression("left", a + ".scrollLeft +" + o), e.setExpression("top", a + ".scrollTop +" + s)
                } else e.position = "fixed"
            }, _setAbsolute: function () {
                var t = this.DOM.wrap[0].style;
                l && (t.removeExpression("left"), t.removeExpression("top")), t.position = "absolute"
            }, _click: function (t) {
                var i = this, n = i._listeners[t] && i._listeners[t].callback;
                return "function" != typeof n || n.call(i, e) !== !1 ? i.close() : i
            }, _reset: function () {
                var i, n = !!e.ActiveXObject, o = this, s = _$top.width(), r = _$top.height(), c = o._winSize || s * r,
                    d = o._lockDocW || s, u = o._left, p = o._top;
                if (!n || (o._lock && l && t("#ldg_lockmask", a).css({
                    width: s + "px",
                    height: r + 17 + "px"
                }), newWidth = o._lockDocW = s, i = o._winSize = s * r, c !== i)) {
                    if (o._maxState) {
                        var g = o._maxSize();
                        o.size(g.w, g.h)
                    }
                    n && 17 === Math.abs(d - newWidth) || (u || p) && o.position(u, p)
                }
            }, _addEvent: function () {
                var t, e = this, i = e.config, n = e.DOM;
                e._winResize = function () {
                    t && clearTimeout(t), t = setTimeout(function () {
                        e._reset()
                    }, 140)
                }, _$top.bind("resize", e._winResize), n.wrap.bind("click", function (t) {
                    var i, o = t.target;
                    return !o.disabled && (o === n.close[0] ? (e._click("cancel"), !1) : o === n.max[0] || o === n.res[0] || o === n.max_b[0] || o === n.res_b[0] || o === n.res_t[0] ? (e.max(), !1) : o === n.min[0] || o === n.min_b[0] ? (e.min(), !1) : (i = o[p + "callback"], void(i && e._click(i))))
                }).bind("mousedown", function (t) {
                    e.zindex();
                    var o = t.target;
                    if (i.drag !== !1 && o === n.title[0] || i.resize !== !1 && o === n.rb[0]) return x(t), !1
                }), i.max && n.title.bind("dblclick", function () {
                    return e.max(), !1
                })
            }, _removeEvent: function () {
                var t = this, e = t.DOM;
                e.wrap.unbind(), e.title.unbind(), _$top.unbind("resize", t._winResize)
            }
        }, y.fn._init.prototype = y.fn, y.focus = null, y.list = {}, o = function (t) {
            var e = (t.target, y.focus), i = t.keyCode;
            e && e.config.esc && e.config.cancel !== !1 && 27 === i && e._click(e.config.cancelVal)
        }, _$doc.bind("keydown", o), m != e && t(e).bind("unload", function () {
            var e = y.list;
            for (var i in e) e[i] && e[i].close();
            n && n.DOM.wrap.remove(), _$doc.unbind("keydown", o), t("#ldg_lockmask", a)[0] && t("#ldg_lockmask", a).remove(), t("#ldg_dragmask", a)[0] && t("#ldg_dragmask", a).remove()
        }), y.setting = {
            content: '<div class="ui_loading"><span>loading...</span></div>',
            title: "视窗 ",
            button: null,
            ok: null,
            cancel: null,
            init: null,
            close: null,
            okVal: "确定",
            cancelVal: "取消",
            skin: "",
            esc: !0,
            show: !0,
            width: "auto",
            height: "auto",
            icon: null,
            path: f,
            lock: !1,
            focus: !0,
            parent: null,
            padding: "10px",
            fixed: !1,
            left: "50%",
            top: "38.2%",
            max: !0,
            min: !0,
            zIndex: 1976,
            resize: !0,
            drag: !0,
            cache: !0,
            data: null,
            extendDrag: !1
        };
        var x, w = "setCapture" in v, $ = "onlosecapture" in v;
        y.dragEvent = {
            onstart: r, start: function (t) {
                var e = y.dragEvent;
                return _$doc.bind("mousemove", e.move).bind("mouseup", e.end), e._sClientX = t.clientX, e._sClientY = t.clientY, e.onstart(t.clientX, t.clientY), !1
            }, onmove: r, move: function (t) {
                var e = y.dragEvent;
                return e.onmove(t.clientX - e._sClientX, t.clientY - e._sClientY), !1
            }, onend: r, end: function (t) {
                var e = y.dragEvent;
                return _$doc.unbind("mousemove", e.move).unbind("mouseup", e.end), e.onend(t.clientX, t.clientY), !1
            }
        }, x = function (e) {
            var i, n, o, s, r, c, d = y.focus, u = d.config, p = d.DOM, g = p.wrap[0], f = p.title, h = p.main[0],
                v = y.dragEvent, b = "getSelection" in m ? function () {
                    m.getSelection().removeAllRanges()
                } : function () {
                    try {
                        a.selection.empty()
                    } catch (t) {
                    }
                };
            v.onstart = function (t, e) {
                c ? (n = h.offsetWidth, o = h.offsetHeight) : (s = g.offsetLeft, r = g.offsetTop), _$doc.bind("dblclick", v.end), !l && $ ? f.bind("losecapture", v.end) : _$top.bind("blur", v.end), w && f[0].setCapture(), p.border.addClass("ui_state_drag"), d.focus()
            }, v.onmove = function (e, a) {
                if (c) {
                    var l = g.style, p = h.style, f = e + n, m = a + o;
                    l.width = "auto", u.width = p.width = Math.max(0, f) + "px", l.width = g.offsetWidth + "px", u.height = p.height = Math.max(0, m) + "px", d._load && t(d._load).css({
                        width: p.width,
                        height: p.height
                    })
                } else {
                    var p = g.style, v = e + s, _ = a + r;
                    u.left = Math.max(i.minX, Math.min(i.maxX, v)), u.top = Math.max(i.minY, Math.min(i.maxY, _)), p.left = u.left + "px", p.top = u.top + "px"
                }
                b()
            }, v.onend = function (t, e) {
                _$doc.unbind("dblclick", v.end), !l && $ ? f.unbind("losecapture", v.end) : _$top.unbind("blur", v.end), w && f[0].releaseCapture(), l && d._autoPositionType(), p.border.removeClass("ui_state_drag")
            }, c = e.target === p.rb[0], i = function (t) {
                var e = g.offsetWidth, i = f[0].offsetHeight || 20, n = _$top.width(), o = _$top.height(),
                    s = t ? 0 : _$top.scrollLeft(), a = t ? 0 : _$top.scrollTop();
                return maxX = n - e + s, maxY = o - i + a, {minX: s, minY: a, maxX: maxX, maxY: maxY}
            }("fixed" === g.style.position), v.start(e)
        }, t(function () {
            setTimeout(function () {
                c || y({left: "-9999em", time: 9, fixed: !1, lock: !1, focus: !1})
            }, 150), y.setting.extendDrag && function (t) {
                var e = a.createElement("div"), i = e.style, n = l ? "absolute" : "fixed";
                e.id = "ldg_dragmask", i.cssText = "display:none;position:" + n + ";left:0;top:0;width:100%;height:100%;cursor:move;filter:alpha(opacity=0);opacity:0;background:#FFF;pointer-events:none;", a.body.appendChild(e), t._start = t.start, t._end = t.end, t.start = function () {
                    var e = y.focus, o = e.DOM.main[0], s = e.iframe;
                    t._start.apply(this, arguments), i.display = "block", i.zIndex = y.setting.zIndex + 3, "absolute" === n && (i.width = _$top.width() + "px", i.height = _$top.height() + "px", i.left = _$doc.scrollLeft() + "px", i.top = _$doc.scrollTop() + "px"), s && o.offsetWidth * o.offsetHeight > 307200 && (o.style.visibility = "hidden")
                }, t.end = function () {
                    var e = y.focus;
                    t._end.apply(this, arguments), i.display = "none", e && (e.DOM.main[0].style.visibility = "visible")
                }
            }(y.dragEvent)
        }), t.fn.dialog = function () {
            var t = arguments;
            return this.bind("click", function () {
                return y.apply(this, t), !1
            }), this
        }, e.lhgdialog = t.dialog = y
    }(this.jQuery || this.lhgcore, this), function (t, e, i) {
        var n = function () {
            return e.setting.zIndex
        };
        e.alert = function (t, i, o) {
            return e({
                title: "警告",
                id: "Alert",
                zIndex: n(),
                icon: "alert.gif",
                fixed: !0,
                lock: !0,
                content: t,
                ok: !0,
                resize: !1,
                close: i,
                parent: o || null
            })
        }, e.confirm = function (t, i, o, s) {
            return e({
                title: "确认",
                id: "confirm.gif",
                zIndex: n(),
                icon: "confirm.gif",
                fixed: !0,
                lock: !0,
                content: t,
                resize: !1,
                parent: s || null,
                ok: function (t) {
                    return i.call(this, t)
                },
                cancel: function (t) {
                    return o && o.call(this, t)
                }
            })
        }, e.prompt = function (t, i, o, s) {
            o = o || "";
            var a;
            return e({
                title: "提问",
                id: "Prompt",
                zIndex: n(),
                icon: "prompt.gif",
                fixed: !0,
                lock: !0,
                parent: s || null,
                content: ['<div style="margin-bottom:5px;font-size:12px">', t, "</div>", "<div>", '<input value="', o, '" style="width:18em;padding:6px 4px" />', "</div>"].join(""),
                init: function () {
                    a = this.DOM.content[0].getElementsByTagName("input")[0], a.select(), a.focus()
                },
                ok: function (t) {
                    return i && i.call(this, a.value, t)
                },
                cancel: !0
            })
        }, e.tips = function (t, i, o, s) {
            var a = o ? function () {
                this.DOM.icon[0].innerHTML = '<img src="' + this.config.path + "skins/icons/" + o + '" class="ui_icon_bg"/>', this.DOM.icon[0].style.display = "", s && (this.config.close = s)
            } : function () {
                this.DOM.icon[0].style.display = "none", s && (this.config.close = s)
            };
            return e({
                id: "Tips",
                zIndex: n(),
                title: !1,
                cancel: !1,
                fixed: !0,
                lock: !1,
                resize: !1
            }).content(t).time(i || 1.5, a)
        }
    }(this.jQuery || this.lhgcore, this.lhgdialog)
}), define("plugIn/zebradialog/js/zebra-dialog-min", [], function (require, exports, module) {
    "use strict";
    $.Zebra_Dialog = function () {
        var defaults = {
            animation_speed_hide: 0,
            animation_speed_show: 300,
            auto_close: !1,
            buttons: !0,
            center_buttons: !1,
            custom_class: !1,
            custom_id: !1,
            keyboard: !0,
            max_height: 0,
            message: "",
            modal: !0,
            overlay_close: !0,
            overlay_opacity: ".9",
            position: "center",
            reposition_speed: 500,
            show_close_button: !0,
            source: !1,
            title: "",
            type: !1,
            vcenter_short_message: !0,
            width: 0,
            height: 0,
            onClose: null
        }, plugin = this, options = {}, timeout;
        plugin.settings = {}, "string" == typeof arguments[0] && (options.message = arguments[0]), "object" != typeof arguments[0] && "object" != typeof arguments[1] || (options = $.extend(options, "object" == typeof arguments[0] ? arguments[0] : arguments[1])), plugin.init = function () {
            $(".ZebraDialog,.ZebraDialogOverlay").remove();
            var t;
            plugin.settings = $.extend({}, defaults, options), plugin.settings.dialog = null, plugin.settings.close = function (t) {
                $(document).unbind(".Zebra_Dialog"), $(window).unbind(".Zebra_Dialog"), plugin.overlay && plugin.overlay.animate({opacity: 0}, plugin.settings.animation_speed_hide, function () {
                    plugin.overlay.remove()
                }), plugin.settings.dialog.animate({
                    top: 0,
                    opacity: 0
                }, plugin.settings.animation_speed_hide, function () {
                    plugin.settings.dialog.remove(), plugin.settings.onClose && "function" == typeof plugin.settings.onClose && plugin.settings.onClose(void 0 !== t ? t : "")
                })
            }, plugin.isIE6 = "explorer" == browser.name && 6 == browser.version || !1, plugin.settings.modal && (plugin.overlay = $("<div>", {"class": "ZebraDialogOverlay"}).css({
                position: plugin.isIE6 ? "absolute" : "fixed",
                left: 0,
                top: 0,
                opacity: plugin.settings.overlay_opacity
            }), plugin.settings.overlay_close && plugin.overlay.bind("click", function () {
                plugin.settings.close()
            }), plugin.overlay.appendTo("body")), plugin.settings.dialog = $("<div>", {
                "class": "ZebraDialog" + (plugin.settings.custom_class ? " " + plugin.settings.custom_class : ""),
                id: "" + (plugin.settings.custom_id ? plugin.settings.custom_id : "")
            }).css({
                position: plugin.isIE6 ? "absolute" : "fixed",
                left: 0,
                top: 0,
                visibility: "hidden"
            }), !plugin.settings.buttons && plugin.settings.auto_close && plugin.settings.dialog.attr("id", "ZebraDialog_" + Math.floor(9999999 * Math.random()));
            var e = parseInt(plugin.settings.width, 10);
            !isNaN(e) && e == plugin.settings.width && e.toString() == plugin.settings.width.toString() && e > 0 && plugin.settings.dialog.css({width: plugin.settings.width});
            var i = parseInt(plugin.settings.height, 10);
            !isNaN(i) && i == plugin.settings.height && i.toString() == plugin.settings.height.toString() && i > 0 && plugin.settings.dialog.css({height: plugin.settings.height}), plugin.settings.title && (t = $("<h3>", {"class": "ZebraDialog_Title"}).html(plugin.settings.title).appendTo(plugin.settings.dialog));
            var n = get_buttons(),
                o = $("<div>", {"class": "ZebraDialog_BodyOuter" + (plugin.settings.title ? "" : " ZebraDialog_NoTitle") + (n ? "" : " ZebraDialog_NoButtons")}).appendTo(plugin.settings.dialog);
            if (plugin.message = $("<div>", {"class": "ZebraDialog_Body" + (get_type() !== !1 ? " ZebraDialog_Icon ZebraDialog_" + get_type() : "")}), plugin.settings.max_height > 0 && (plugin.message.css("max-height", plugin.settings.max_height), plugin.isIE6 && plugin.message.attr("style", "height: expression(this.scrollHeight > " + plugin.settings.max_height + ' ? "' + plugin.settings.max_height + 'px" : "85px")')), plugin.settings.vcenter_short_message ? $("<div>").html(plugin.settings.message).appendTo(plugin.message) : plugin.message.html(plugin.settings.message), plugin.settings.source && "object" == typeof plugin.settings.source) {
                var s = plugin.settings.vcenter_short_message ? $("div:first", plugin.message) : plugin.message;
                for (var a in plugin.settings.source) switch (a) {
                    case"ajax":
                        var l = "string" == typeof plugin.settings.source[a] ? {url: plugin.settings.source[a]} : plugin.settings.source[a],
                            r = $("<div>").attr("class", "ZebraDialog_Preloader").appendTo(s), c = l.success;
                        l.success = function (t) {
                            r.remove(), c ? s.append(c(t)) : s.append(t), draw(!1)
                        }, $.ajax(l);
                        break;
                    case"iframe":
                        var d = {width: "100%", height: "100%", marginheight: "0", marginwidth: "0", frameborder: "0"},
                            u = $.extend(d, "string" == typeof plugin.settings.source[a] ? {src: plugin.settings.source[a]} : plugin.settings.source[a]);
                        s.append($("<iframe>").attr(u));
                        break;
                    case"inline":
                        s.append(plugin.settings.source[a])
                }
            }
            if (plugin.message.appendTo(o), n) {
                n.reverse();
                var p = $("<div>", {"class": "ZebraDialog_Buttons"}).appendTo(plugin.settings.dialog);
                $.each(n, function (t, e) {
                    var i = $("<a>", {href: "javascript:void(0)", "class": "ZebraDialog_Button_" + t});
                    $.isPlainObject(e) ? i.html(e.caption) : i.html(e), i.bind("click", function () {
                        var t = !0;
                        void 0 !== e.callback && (t = e.callback(plugin.settings.dialog)), t !== !1 && plugin.settings.close(void 0 !== e.caption ? e.caption : e)
                    }), i.appendTo(p)
                }), p.wrap($("<div>").addClass("ZebraDialog_ButtonsOuter" + (plugin.settings.center_buttons ? " ZebraDialog_Buttons_Centered" : "")))
            }
            if (plugin.settings.dialog.appendTo("body"), plugin.settings.show_close_button) {
                var g = $('<a href="javascript:void(0)" class="ZebraDialog_Close">&times;</a>').bind("click", function (t) {
                    t.preventDefault(), plugin.settings.close()
                }).appendTo(t ? t : plugin.message);
                t && g.css({
                    right: parseInt(t.css("paddingRight"), 10),
                    top: (parseInt(t.css("height"), 10) + parseInt(t.css("paddingTop"), 10) + parseInt(t.css("paddingBottom"), 10) - g.height()) / 2
                })
            }
            return $(window).bind("resize.Zebra_Dialog", function () {
                clearTimeout(timeout), timeout = setTimeout(function () {
                    draw()
                }, 100)
            }), plugin.settings.keyboard && $(document).bind("keyup.Zebra_Dialog", function (t) {
                return 27 == t.which && plugin.settings.close(), !0
            }), plugin.isIE6 && $(window).bind("scroll.Zebra_Dialog", function () {
                emulate_fixed_position()
            }), plugin.settings.auto_close !== !1 && (plugin.settings.dialog.bind("click", function () {
                clearTimeout(plugin.timeout), plugin.settings.close()
            }), plugin.timeout = setTimeout(plugin.settings.close, plugin.settings.auto_close)), draw(!1), "function" == typeof plugin.settings.callback && plugin.settings.callback(plugin.settings.dialog, plugin.settings), plugin.settings
        };
        var draw = function () {
            var viewport_width = $(window).width(), viewport_height = $(window).height(),
                dialog_width = plugin.settings.dialog.width(), dialog_height = plugin.settings.dialog.height(),
                values = {
                    left: 0,
                    top: 0,
                    right: viewport_width - dialog_width,
                    bottom: viewport_height - dialog_height,
                    center: (viewport_width - dialog_width) / 2,
                    middle: (viewport_height - dialog_height) / 2
                };
            if (plugin.dialog_left = void 0, plugin.dialog_top = void 0, $.isArray(plugin.settings.position) && 2 == plugin.settings.position.length && "string" == typeof plugin.settings.position[0] && plugin.settings.position[0].match(/^(left|right|center)[\s0-9\+\-]*$/) && "string" == typeof plugin.settings.position[1] && plugin.settings.position[1].match(/^(top|bottom|middle)[\s0-9\+\-]*$/) && (plugin.settings.position[0] = plugin.settings.position[0].toLowerCase(), plugin.settings.position[1] = plugin.settings.position[1].toLowerCase(), $.each(values, function (index, value) {
                for (var i = 0; i < 2; i++) {
                    var tmp = plugin.settings.position[i].replace(index, value);
                    tmp != plugin.settings.position[i] && (0 === i ? plugin.dialog_left = eval(tmp) : plugin.dialog_top = eval(tmp))
                }
            })), void 0 !== plugin.dialog_left && void 0 !== plugin.dialog_top || (plugin.dialog_left = values.center, plugin.dialog_top = values.middle), plugin.settings.vcenter_short_message) {
                var message = plugin.message.find("div:first"), message_height = message.height(),
                    container_height = plugin.message.height();
                message_height < container_height && message.css({})
            }
            "boolean" == typeof arguments[0] && arguments[0] === !1 || 0 === plugin.settings.reposition_speed ? plugin.settings.dialog.css({
                left: plugin.dialog_left,
                top: plugin.dialog_top,
                visibility: "visible",
                opacity: 0
            }).animate({opacity: 1}, plugin.settings.animation_speed_show) : (plugin.settings.dialog.stop(!0), plugin.settings.dialog.css("visibility", "visible").animate({
                left: plugin.dialog_left,
                top: plugin.dialog_top
            }, plugin.settings.reposition_speed)), plugin.settings.dialog.find("a[class^=ZebraDialog_Button]:first").focus(), plugin.isIE6 && setTimeout(emulate_fixed_position, 500)
        }, emulate_fixed_position = function () {
            var t = $(window).scrollTop(), e = $(window).scrollLeft();
            plugin.settings.modal && plugin.overlay.css({
                top: t,
                left: e
            }), plugin.settings.dialog.css({left: plugin.dialog_left + e, top: plugin.dialog_top + t})
        }, get_buttons = function () {
            if (plugin.settings.buttons !== !0 && !$.isArray(plugin.settings.buttons)) return !1;
            if (plugin.settings.buttons === !0) switch (plugin.settings.type) {
                case"question":
                    plugin.settings.buttons = ["Yes", "No"];
                    break;
                default:
                    plugin.settings.buttons = ["Ok"]
            }
            return plugin.settings.buttons
        }, get_type = function () {
            switch (plugin.settings.type) {
                case"confirmation":
                case"error":
                case"information":
                case"question":
                case"warning":
                    return plugin.settings.type.charAt(0).toUpperCase() + plugin.settings.type.slice(1).toLowerCase();
                default:
                    return !1
            }
        }, browser = {
            init: function () {
                this.name = this.searchString(this.dataBrowser) || "", this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || ""
            },
            searchString: function (t) {
                for (var e = 0; e < t.length; e++) {
                    var i = t[e].string, n = t[e].prop;
                    if (this.versionSearchString = t[e].versionSearch || t[e].identity, i) {
                        if (i.indexOf(t[e].subString) != -1) return t[e].identity
                    } else if (n) return t[e].identity
                }
            },
            searchVersion: function (t) {
                var e = t.indexOf(this.versionSearchString);
                if (e != -1) return parseFloat(t.substring(e + this.versionSearchString.length + 1))
            },
            dataBrowser: [{string: navigator.userAgent, subString: "MSIE", identity: "explorer", versionSearch: "MSIE"}]
        };
        return browser.init(), plugin.init()
    }
}), define("module/head/js/init", ["../../../plugIn/browserListen/init"], function (t, e, i) {
    function n() {
        var t = $("#menuCur");
        t.length && r.length && r.find(".nav[data-type=" + t.val() + "]").addClass("current")
    }

    function o() {
        var t = $("#afficheModel");
        t.length && t.on("click", ".icon-common-close", function () {
            t.slideUp()
        })
    }

    function s() {
        var t = $("#productMenu");
        t.length && $.get("/product/count", function (e) {
            var i = (e || {}).data || {}, n = i.COMMON || 0, o = i.TRANSFER || 0, s = i.OPTIMIZE || 0;
            t.find("#optimizeCount").html(a(s)).attr("data-count", s), t.find("#commonCount").html(a(n)), t.find("#transferCount").html(a(o)), !window.global.userId || location.pathname.indexOf("/product/portal/index") > -1 || $.get("/product/tool/column", function (e) {
                var i = (e.data || {}).NEWER || [], n = i.length;
                n && $.get("/product/newer/" + window.global.userId, function (e) {
                    var i = (e || {}).data ? 1 : 0;
                    i || t.find("#optimizeCount").html(a(s - n))
                })
            })
        })
    }

    function a(t) {
        return t <= 0 ? "售罄" : t > 99 ? "99+" : t
    }

    function l() {
        var t = r.find('.user ul li[data-type="my-smart"]'), e = $(".account-list");
        (t.length || e.length) && $.ajax({
            type: "get", url: "/product/smart/invest", data: {}, success: function (i) {
                var n = i ? i.data : -1;
                return 1 != n ? void(t.length && t.remove()) : (e.length && (e.find('ul li[data-type="my-smart"]').removeClass("g-dn"), e.find('ul li[data-type="financing"]').removeClass("g-dn")), void(t.length && t.removeClass("g-dn")))
            }
        })
    }

    t("../../../plugIn/browserListen/init");
    var r = $("#navigationModel");
    !function () {
        n(), s(), l(), o()
    }(), window.gotoLogin = function (t, e, i) {
        var n = i || window.location.href;
        n.indexOf("url=") > 0 && (n = n.substring(0, n.indexOf("url=") - 1)), e ? t.indexOf("?") > 0 ? window.open(t + "&url=" + escape(n)) : window.open(t + "?url=" + escape(n)) : t.indexOf("?") > 0 ? window.location.href = t + "&url=" + escape(n) : window.location.href = t + "?url=" + escape(n)
    }
}), define("plugIn/browserListen/init", [], function (t, e, i) {
    function n() {
        var t, e, i = navigator.appName, n = parseFloat(navigator.appVersion), o = navigator.userAgent,
            s = "Microsoft Internet Explorer" == i, a = "Netscape" == i;
        if (a) if (n >= 5) {
            if (o.indexOf("Netscape") != -1) {
                var l = o.lastIndexOf("/"), r = o.lastIndexOf(" "), c = o.substring(0, l), d = c.lastIndexOf(" ");
                t = o.substring(l + 1, o.length), e = c.substring(d + 1, c.length)
            }
            if (o.indexOf("Firefox") != -1) {
                var l = o.lastIndexOf("/"), r = o.lastIndexOf(" ");
                t = o.substring(l + 1, o.length), e = o.substring(r + 1, l)
            }
            if (o.indexOf("Safari") != -1) if (o.indexOf("Chrome") != -1) {
                var l = o.lastIndexOf(" "), r = o.substring(0, l), u = r.lastIndexOf("/"), c = r.lastIndexOf(" ");
                t = r.substring(u + 1, r.length), e = r.substring(c + 1, u)
            } else {
                var l = o.lastIndexOf("/"), r = o.substring(0, l), u = r.lastIndexOf("/"), c = o.lastIndexOf(" ");
                t = o.substring(u + 1, c), e = o.substring(c + 1, l)
            }
        } else t = n, e = i; else if (s) {
            var p = o.indexOf("MSIE"), g = o.indexOf(";", p);
            if (t = o.substring(p + 5, g), e = i, o.indexOf("Maxthon") != -1 || o.indexOf("MAXTHON") != -1) {
                var f = o.lastIndexOf(" "), h = o.substring(f, o.length - 1);
                h = "遨游版本:" + h, e += "(Maxthon)", t += h
            }
        } else if (o.indexOf("Opera") != -1) {
            e = "Opera";
            o.indexOf("Opera"), o.length;
            t = n
        } else e = "Unknown Navigator", t = "Unknown Version";
        navigator.Actual_Name = e, navigator.Actual_Version = t, this.Name = e, this.Version = t
    }

    n(), ("Microsoft Internet Explorer" == navigator.Actual_Name && navigator.Actual_Version < 8 || "Opera" == navigator.Actual_Name || "MSIE" == navigator.Actual_Name) && $("#afficheModel").slideDown()
}), define("module/common/statistics", [], function (t, e, i) {
    $(document).on("click", "[data-statistics-baidu]", function () {
        var t = $(this).attr("data-statistics-baidu").split(","), e = t[1] || t[0], i = t[0], n = t[2] || "点击";
        e && window._hmt && _hmt.push(["_trackEvent", e, n, i])
    })
}), define("module/common/utils", ["../../lib/dot/dot.mod"], function (t, e, i) {
    function n(t) {
        var e = Object.prototype.toString, i = {
            undefined: "undefined",
            number: "number",
            "boolean": "boolean",
            string: "string",
            "[object Function]": "function",
            "[object RegExp]": "regexp",
            "[object Array]": "array",
            "[object Date]": "date",
            "[object Error]": "error"
        };
        return i[typeof t] || i[e.call(t)] || (t ? "object" : "null")
    }

    function o(t) {
        t += "";
        for (var e = /(-?\d+)(\d{3})/; e.test(t);) t = t.replace(e, "$1,$2");
        return t
    }

    function s(t) {
        if ("string" != n(t) && "number" != n(t)) return "";
        if (t = String($.trim(t)), /,/gi.test(t) && !isNaN(t.replace(/,/gi, ""))) return t;
        t && !isNaN(t) || (t = "");
        var e = "";
        t <= 0 && /-/gi.test(t) && (t < 0 && (e = "-"), t = Math.abs(t));
        var i = t.toString().replace(/^(\d*)$/, "$1.");
        i = (i + "00").replace(/(\d*\.\d\d)\d*/, "$1"), i = i.replace(".", ",");
        for (var o = /(\d)(\d{3},)/; o.test(i);) i = i.replace(o, "$1,$2");
        return i = i.replace(/,(\d\d)$/, ".$1"), i = i.replace(/^\./, "0."), e + i
    }

    function a() {
        var t = window.location.search;
        return this.param2Obj(t, !0)
    }

    function l() {
        var t = window.location.search;
        return this.param2Obj(t)
    }

    function r(t, e) {
        var i = {};
        if (null != t && void 0 != t && "" != t) {
            t = t.replace(/\?/, "");
            for (var n = t.split("&"), o = 0; o < n.length; o++) {
                var s = n[o], a = s.indexOf("=");
                if (a != -1) {
                    var l = s.substring(0, a), r = "";
                    a != s.length - 1 && (r = s.substring(a + 1)), e ? i[l] = decodeURIComponent(r) : i[l] = r
                } else i[s] = ""
            }
        }
        return i
    }

    function c(t, e) {
        var i = "";
        for (var n in t) i += e ? "&" + n + "=" + encodeURIComponent(t[n]) : "&" + n + "=" + t[n];
        return "" != i && (i = i.substring(1, i.length)), i
    }

    function d(t, e) {
        return "function" == typeof t ? t(e) : _ && "function" == typeof _.template ? _.template(t)(e) : (console.log("请加载dot.js或dot.mod.js！"), "")
    }

    function u(t) {
        var e = document.createElement("b");
        return e.innerHTML = "<!--[if IE " + t + "]><i></i><![endif]-->", 1 === e.getElementsByTagName("i").length
    }

    function p(t, e, i) {
        if ("--" == t) return "--";
        if (t && "null" != t || (t = "0"), /,/g.test(t)) {
            var n = t.split(".");
            return t = "00" == n[1] ? n[0] : t
        }
        t = "" + t;
        var o = "", s = /(\d)(?=(\d{3})+(?!\d))/g, a = function (t, e) {
            var i = ("" + t).split("."), n = 0;
            if (2 == i.length ? n = (i[1] + "").replace(/,/g, "").length : t += ".", n < e) for (var o = n; o < e; o++) t += "0";
            return t
        };
        if (e === !1) return o = t.replace(s, "$1,");
        var l = e === !0 ? 2 : e;
        if (e || 0 == e) {
            if (i === !0) o = (1 * t).toFixed(l).replace(s, "$1,"); else {
                var r = new RegExp("(\\d*\\.\\d{" + l + "})\\d*");
                t = t.replace(r, "$1"), o = t.replace(s, "$1,")
            }
            return a(o, l)
        }
        t = a(t.replace(/(\d*\.\d{2})\d*/, "$1"), 2);
        var n = t.split(".");
        return t = "00" == n[1] ? n[0] : t, o = t.replace(s, "$1,")
    }

    function g(t, e, i, n) {
        if (!isNaN(t)) {
            var e = e || 2, o = t, n = void 0 === n || n;
            o = n === !0 ? Math.round(t * Math.pow(10, e)) / Math.pow(10, e) : Math.floor(t * Math.pow(10, e)) / Math.pow(10, e);
            var i = void 0 === i || i;
            if (i) {
                var s = o.toString().split(".")[1], a = s && s.length || 0;
                if (s && a || (o += "."), !s || a < e) for (var l = a || 0; l < e; l++) o += "0"
            }
            return o
        }
    }

    function f(t, e, i) {
        /-/g.test("" + t) && (t = ("" + t).replace(/-/g, "/"));
        var n = new Date(/\//g.test(t) ? t : Number(t));
        e || (e = "yyyy-MM-dd HH:mm:ss");
        var o = {
            "M+": n.getMonth() < 9 ? (0 == i ? "" : "0") + (n.getMonth() + 1) : n.getMonth() + 1,
            "d+": n.getDate() < 10 ? (0 == i ? "" : "0") + n.getDate() : n.getDate(),
            "h+": n.getHours() % 12 === 0 ? 12 : n.getHours() % 12,
            "H+": n.getHours() < 10 ? (0 == i ? "" : "0") + n.getHours() : n.getHours(),
            "m+": n.getMinutes() < 10 ? (0 == i ? "" : "0") + n.getMinutes() : n.getMinutes(),
            "s+": n.getSeconds() < 10 ? (0 == i ? "" : "0") + n.getSeconds() : n.getSeconds(),
            "q+": Math.floor((n.getMonth() + 3) / 3),
            S: n.getMilliseconds() < 10 ? (0 == i ? "" : "0") + n.getMilliseconds() : n.getMilliseconds()
        }, s = {0: "/u65e5", 1: "/u4e00", 2: "/u4e8c", 3: "/u4e09", 4: "/u56db", 5: "/u4e94", 6: "/u516d"};
        /(y+)/.test(e) && (e = e.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length))), /(E+)/.test(e) && (e = e.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468" : "") + s[n.getDay() + ""]));
        for (var a in o) new RegExp("(" + a + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? o[a] : ((0 == i ? " " : "00") + o[a]).substr(("" + o[a]).length)));
        return e
    }

    function h(t, e) {
        var i = $.extend({title: "提示", btnText: "确定", iconStyle: "", hideClose: !1, callback: null}, e);
        return new v({
            text: t,
            title: i.title,
            iconStyle: i.iconStyle,
            hideClose: i.hideClose,
            btns: [{
                text: i.btnText, onClick: function () {
                    this.hide(), i.callback && i.callback.call(this)
                }
            }]
        }).show()
    }

    function m(t, e, i, n, o) {
        return new v({
            text: t,
            title: e,
            iconStyle: o || "ques",
            btns: [{text: "确定", onClick: i}, {
                text: "取消", onClick: function () {
                    this.hide(), n && n.call(this)
                }
            }]
        }).show()
    }

    function v(t) {
        this.opt = $.extend({
            text: "",
            title: "提示",
            btns: [],
            onClose: $.noop,
            hideClose: !1,
            iconStyle: ""
        }, t), this.defaultBtnOpt = {
            text: "确定", onClick: function () {
                this.hide()
            }
        }, this.init()
    }

    function b(t) {
        for (var e = document.cookie, i = e.split(";"), n = 0; n < i.length; n++) {
            var o = i[n].split("=");
            if (o[0] = o[0].replace(/\s/g, ""), o[0] == t) return decodeURIComponent(o[1])
        }
        return ""
    }

    var _ = t("../../lib/dot/dot.mod");
    return v.prototype.classNames = {
        overlay: "box-overlay",
        dialog: "box-dialog",
        title: "box-dialog-title js_title",
        close: "box-dialog-close js_close",
        content: "box-dialog-content js_content",
        btns: "box-dialog-btns js_btns"
    }, v.prototype.init = function () {
        var t = this, e = this.classNames;
        this.$modal = $('<div class="' + e.overlay + '" style="display:none;"></div>');
        var i = "";
        return i += '<div class="' + e.dialog + '" style="display:none;">', i += '<div class="' + e.title + '"></div>', i += '<div class="' + e.close + '" title="关闭(esc键)">×</div>', i += '<div class="' + e.content + '"></div>', i += '<div class="' + e.btns + '"></div>', i += "</div>", this.$box = $(i), this.$title = $(".js_title", this.$box), this.$close = $(".js_close", this.$box), this.$content = $(".js_content", this.$box), this.$btns = $(".js_btns", this.$box), this.$close.click(function () {
            t.hide()
        }), $("body").append(this.$modal.add(this.$box)), this
    }, v.prototype.refresh = function () {
        var t = this,
            e = {right: "box-right", wrong: "box-wrong", ques: "box-ques", warn: "box-warn", info: "box-info"};
        this.$title.html(this.opt.title);
        var i = this.classNames.content + " " + (e[this.opt.iconStyle] || "");
        this.$content.html(this.opt.text).attr("class", i), this.$close.toggle(!this.opt.hideClose);
        var n, o, s, a, l;
        for (n = 0, o = this.opt.btns.length; n < o; n++) s = $.extend({}, this.defaultBtnOpt, this.opt.btns[n]), o > 1 ? (l = 0 == n ? "" : " sub", a = $('<button class="' + l + '">' + s.text + "</button>")) : a = $("<button>" + s.text + "</button>"), function (e) {
            a.click(function () {
                e.onClick && e.onClick.call(t)
            })
        }(s), this.$btns.append(a);
        var r = this.$box.width(), c = this.$box.height(), d = "-" + c / 2 + "px 0 0 -" + r / 2 + "px";
        return this.$box.css("margin", d), this
    }, v.prototype.show = function () {
        return this.refresh(), this.$modal.show(), this.$box.show(), this
    }, v.prototype.hide = function () {
        return this.$modal.remove(), this.$box.remove(), this
    }, {
        commafy: o,
        contUn: s,
        getQueryStrObj: a,
        getQueryStringObj: l,
        param2Obj: r,
        obj2Param: c,
        dot: d,
        isIE: u,
        milliFormat: p,
        formatTime: f,
        alertInfo: h,
        confirmInfo: m,
        Box: v,
        type: n,
        fomatFloat: g,
        getCookie: b
    }
}), define("lib/dot/dot.mod", [], function (t, e, i) {
    "use strict";

    function n(t, e, i) {
        return ("string" == typeof e ? e : e.toString()).replace(t.define || r, function (e, n, o, s) {
            return 0 === n.indexOf("def.") && (n = n.substring(4)), n in i || (":" === o ? (t.defineParams && s.replace(t.defineParams, function (t, e, o) {
                i[n] = {arg: e, text: o}
            }), n in i || (i[n] = s)) : new Function("def", "def['" + n + "']=" + s)(i)), ""
        }).replace(t.use || r, function (e, o) {
            t.useParams && (o = o.replace(t.useParams, function (t, e, n, o) {
                if (i[n] && i[n].arg && o) {
                    var s = (n + ":" + o).replace(/'|\\/g, "_");
                    return i.__exp = i.__exp || {}, i.__exp[s] = i[n].text.replace(new RegExp("(^|[^\\w$])" + i[n].arg + "([^\\w$])", "g"), "$1" + o + "$2"), e + "def.__exp['" + s + "']"
                }
            }));
            var s = new Function("def", "return " + o)(i);
            return s ? n(t, s, i) : s
        })
    }

    function o(t) {
        return t.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ")
    }

    var s, a = {
        name: "doT",
        version: "1.1.1",
        templateSettings: {
            evaluate: /\<\$([\s\S]+?(\}?)+)\$\>/g,
            interpolate: /\<\$=([\s\S]+?)\$\>/g,
            encode: /\<\$!([\s\S]+?)\$\>/g,
            use: /\<\$#([\s\S]+?)\$\>/g,
            useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
            define: /\<\$##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\$\>/g,
            defineParams: /^\s*([\w$]+):([\s\S]+)/,
            conditional: /\<\$\?(\?)?\s*([\s\S]*?)\s*\$\>/g,
            iterate: /\<\$~\s*(?:\$\>|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\$\>)/g,
            varname: "it",
            strip: !0,
            append: !0,
            selfcontained: !1,
            doNotSkipEncoded: !1
        },
        template: void 0,
        compile: void 0,
        log: !0
    };
    a.encodeHTMLSource = function (t) {
        var e = {"&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;"},
            i = t ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
        return function (t) {
            return t ? t.toString().replace(i, function (t) {
                return e[t] || t
            }) : ""
        }
    };
    var l = {
        append: {start: "'+(", end: ")+'", startencode: "'+encodeHTML("},
        split: {start: "';out+=(", end: ");out+='", startencode: "';out+=encodeHTML("}
    }, r = /$^/;
    return a.template = function (t, e, i) {
        e = e || a.templateSettings;
        var c, d, u = e.append ? l.append : l.split, p = 0, g = e.use || e.define ? n(e, t, i || {}) : t;
        g = ("var out='" + (e.strip ? g.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : g).replace(/'|\\/g, "\\$&").replace(e.interpolate || r, function (t, e) {
            return u.start + o(e) + u.end
        }).replace(e.encode || r, function (t, e) {
            return c = !0, u.startencode + o(e) + u.end
        }).replace(e.conditional || r, function (t, e, i) {
            return e ? i ? "';}else if(" + o(i) + "){out+='" : "';}else{out+='" : i ? "';if(" + o(i) + "){out+='" : "';}out+='"
        }).replace(e.iterate || r, function (t, e, i, n) {
            return e ? (p += 1, d = n || "i" + p, e = o(e), "';var arr" + p + "=" + e + ";if(arr" + p + "){var " + i + "," + d + "=-1,l" + p + "=arr" + p + ".length-1;while(" + d + "<l" + p + "){" + i + "=arr" + p + "[" + d + "+=1];out+='") : "';} } out+='"
        }).replace(e.evaluate || r, function (t, e) {
            return "';" + o(e) + "out+='"
        }) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, ""), c && (e.selfcontained || !s || s._encodeHTML || (s._encodeHTML = a.encodeHTMLSource(e.doNotSkipEncoded)), g = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" + a.encodeHTMLSource.toString() + "(" + (e.doNotSkipEncoded || "") + "));" + g);
        try {
            return new Function(e.varname, g)
        } catch (f) {
            throw"undefined" != typeof console && console.log("Could not create a template function: " + g), f
        }
    }, a.compile = function (t, e) {
        return a.template(t, null, e)
    }, a
}), define("module/common/toast", [], function (t, e, i) {
    var n = function () {
        function t(t, n, l) {
            var r = n || 1500;
            t && (s.innerHTML = t, document.body.appendChild(s), e(), o = l && "function" == typeof l ? l : void 0, s.style.margin = "-" + Math.floor(s.clientHeight / 2) + "px 0 0 -" + Math.floor(s.clientWidth / 2) + "px", s.style.visibility = "visible", "loading" !== n && (a = setTimeout(i, r)))
        }

        function e() {
            a && clearTimeout(a)
        }

        function i() {
            e(), $(s).remove(), o && o()
        }

        function n(e, i) {
            var n = i || 1e4;
            t(e, "loading"), a = setTimeout(function () {
                t("网络繁忙", 2500)
            }, n)
        }

        var o, s = document.createElement("div"), a = 0;
        return s.className = "_toast", s.style.position = "fixed", s.style.zIndex = "9999", s.style.top = "50%", s.style.left = "50%", s.style.padding = "8px 15px", s.style.minWidth = "56px", s.style.lineHeight = "18px", s.style.background = "#333", s.style.color = "#fff", s.style.fontSize = "12px", s.style.borderRadius = "20px", s.style.textAlign = "center", s.style.visibility = "hidden", {
            tip: t,
            close: i,
            loading: n
        }
    }();
    return n
}), define("module/sidebar/main", ["./sidebar", "../base64/base64", "../calculator-new/main"], function (t, e, i) {
    function n() {
        var t = [],
            e = ["<a href='javascript:;' class='side-bar-app'><div class='side-bar-pop'><div class='side-bar-pop-content'></div></div></a>", "<a href='javascript:;' class='side-bar-interest'><div class='side-bar-pop'><div class='side-bar-pop-content'></div></div></a>", "<a href='javascript:;' class='side-bar-kefu' data-callback='kefu' style='display:none' id='qiyukefu'></a>", "<a href='javascript:;' class='side-bar-calculator' data-callback='calculator'></a>", "<a href='javascript:;' class='side-bar-wenjuan' data-callback='wenjuan'></a>", "<a href='javascript:;' class='side-bar-top' data-callback='top'></a>"];
        window.sidebar ? (window.sidebar.app !== !1 && t.push(e[0]), window.sidebar.weixin !== !1 && t.push("<a href='javascript:;' class='side-bar-weixin'><div class='side-bar-pop'><div class='side-bar-pop-content'></div></div></a>"), window.sidebar.interest !== !1 && t.push(e[1]), window.sidebar.kefu !== !1 && t.push(e[2]), window.sidebar.calculator !== !1 && t.push(e[3]), window.sidebar.wenjuan !== !1 && t.push(e[4]), t.length > 1 && t.push(e[5])) : t = e;
        var i = {}, s = {
            position: "right,bottom", html: t, callbacks: {
                kefu: function (t, e) {
                    var i = "", n = "", o = "", s = "", a = "";
                    $.ajax({
                        type: "get", url: "/user/seven/fish/getUserExt", success: function (t) {
                            t = t.data || {}, i = t.uid || "", n = t.userName || "", o = t.userAppellation || "", s = t.customerId || "", a = t.customerGroupId || "", window.ysf.config({
                                uid: i,
                                staffid: s,
                                groupid: a,
                                data: JSON.stringify([{key: "real_name", value: o}, {
                                    index: 0,
                                    key: "username",
                                    label: "用户名",
                                    value: n
                                }]),
                                success: function () {
                                    window.ysf.open()
                                },
                                error: function () {
                                    window.ysf.open()
                                }
                            })
                        }, error: function () {
                            window.ysf.open()
                        }
                    })
                }, calculator: function (t, e) {
                    o()
                }, wenjuan: function (t, e) {
                    var i = "true" == $("#isLogin").val() ? 1 : 0;
                    i ? window.open("/cms/questionnaire/index") : window.open("/user/login?url=/cms/questionnaire/index")
                }
            }
        };
        i = window.sidebar && "object" === $.util.type(window.sidebar) ? $.extend(!0, {}, s, window.sidebar) : s, $.sidebar(i);
        var a = null;
        $(window).on("resize", function () {
            a && clearTimeout(a), a = setTimeout(function () {
                n()
            }, 500)
        })
    }

    t("./sidebar");
    var o = (t("../base64/base64"), t("../calculator-new/main").init);
    !function (t, e, i, n, o) {
        t[i] = t[i] || function () {
            (t[i].a = t[i].a || []).push(arguments)
        }, o = e.createElement("script"), o.async = !0, o.src = "https://qiyukf.com/script/bbf1f358fbe2baf496d7d57ff885bbd8.js", e.body.appendChild(o)
    }(window, document, "ysf"), ysf("onready", function () {
        $("#qiyukefu").show()
    }), ("undefined" == typeof window.sidebar || window.sidebar) && n()
}), define("module/sidebar/sidebar", [], function (t, e, i) {
    $.sidebar = function (t) {
        function e() {
            d.off("click").on("click", "a", function () {
                var t = $(this).data("callback");
                t && "function" == typeof n.callbacks[t] && n.callbacks[t](d, n)
            })
        }

        var i = {
                id: "ly-side-bar",
                close: !1,
                width: 50,
                skins: "side-bar-xn",
                contentWidth: 1200,
                position: "right,bottom",
                offset: {y: 120},
                html: [],
                callbacks: {
                    top: function (t, e) {
                        $("html,body").stop().animate({scrollTop: 0}, function () {
                            $(this).stop()
                        })
                    }, close: function (t, e) {
                        t.hide()
                    }
                }
            }, n = $.extend(!0, {}, i, t), o = {}, s = n.contentWidth, a = $(window), l = ($(document), $("body")),
            r = a.width(), c = a.height();
        if (document.getElementById(n.id)) var d = $(document.getElementById(n.id)); else {
            var d = "<div id='" + n.id + "' style='display:none;' class='ly-side-bar " + n.skins + "'></div>";
            l.append(d), d = $("#" + n.id)
        }
        n.close && n.html.push("<a href='javascript:;' class='side-bar-close' data-callback='close'></a>"), d.html(n.html.join(""));
        var u = d.height(), p = n.position.split(",");
        "right" == p[0] ? r >= s + 2 * n.width ? o.left = (s + (r - s) / 2) / r * 100 + "%" : o.left = (r - n.width) / r * 100 + "%" : "left" == p[0] && (r >= s + 2 * n.width ? o.left = (r - s - (r - s) / 2 - n.width) / r * 100 + "%" : o.left = "auto"), "top" == p[1] ? (o.top = 0, o["margin-top"] = n.offset.y) : "bottom" == p[1] ? (o.bottom = 0, o["margin-bottom"] = n.offset.y) : (o.top = (c - u) / 2, o["margin-top"] = -n.offset.y), e(), d.css(o).show()
    }
}), define("module/base64/base64", [], function (t, e, i) {
    return function () {
        _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", this.encode = function (t) {
            var e, i, n, o, s, a, l, r = "", c = 0;
            for (t = _utf8_encode(t); c < t.length;) e = t.charCodeAt(c++), i = t.charCodeAt(c++), n = t.charCodeAt(c++), o = e >> 2, s = (3 & e) << 4 | i >> 4, a = (15 & i) << 2 | n >> 6, l = 63 & n, isNaN(i) ? a = l = 64 : isNaN(n) && (l = 64), r = r + _keyStr.charAt(o) + _keyStr.charAt(s) + _keyStr.charAt(a) + _keyStr.charAt(l);
            return r
        }, this.decode = function (t) {
            var e, i, n, o, s, a, l, r = "", c = 0;
            for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < t.length;) o = _keyStr.indexOf(t.charAt(c++)), s = _keyStr.indexOf(t.charAt(c++)), a = _keyStr.indexOf(t.charAt(c++)), l = _keyStr.indexOf(t.charAt(c++)), e = o << 2 | s >> 4, i = (15 & s) << 4 | a >> 2, n = (3 & a) << 6 | l, r += String.fromCharCode(e), 64 != a && (r += String.fromCharCode(i)), 64 != l && (r += String.fromCharCode(n));
            return r = _utf8_decode(r)
        }, _utf8_encode = function (t) {
            t = t.replace(/\r\n/g, "\n");
            for (var e = "", i = 0; i < t.length; i++) {
                var n = t.charCodeAt(i);
                n < 128 ? e += String.fromCharCode(n) : n > 127 && n < 2048 ? (e += String.fromCharCode(n >> 6 | 192), e += String.fromCharCode(63 & n | 128)) : (e += String.fromCharCode(n >> 12 | 224), e += String.fromCharCode(n >> 6 & 63 | 128), e += String.fromCharCode(63 & n | 128))
            }
            return e
        }, _utf8_decode = function (t) {
            for (var e = "", i = 0, n = 0, o = 0; i < t.length;) n = t.charCodeAt(i), n < 128 ? (e += String.fromCharCode(n), i++) : n > 191 && n < 224 ? (o = t.charCodeAt(i + 1), e += String.fromCharCode((31 & n) << 6 | 63 & o), i += 2) : (o = t.charCodeAt(i + 1), c3 = t.charCodeAt(i + 2), e += String.fromCharCode((15 & n) << 12 | (63 & o) << 6 | 63 & c3), i += 3);
            return e
        }
    }
}), define("module/calculator-new/main", ["./calculator", "./tpl/calculator"], function (t, e, i) {
    function n(t, e) {
        var i = t.find(".calculator-dialog-error"), n = t.find(".calculator-amount"), s = t.find(".calculator-rate"),
            a = t.find(".calculator-type"), l = t.find(".calculator-deadline"), r = t.find(".calculator-dialog-result"),
            c = function () {
                r.removeClass("calculator-dialog-cur"), i.html("");
                var t = $.trim(n.val()), e = $.trim(s.val()), c = $.trim(a.val()), d = $.trim(l.val()), u = "";
                if ("" == t ? u = "项目金额不能为空!" : /\./gi.test(t) ? u = "项目金额必须是整数！" : /^\d*$/gi.test(t) ? "" == e ? u = "年化收益率不能为空!" : /^\d*\.{0,1}(\d{1,2})?$/gi.test(e) ? "" == c ? u = "还款方式不能为空!" : "" == d ? u = "项目期限不能为空!" : /^\d*$/gi.test(d) ? 5 == c && d % 3 != 0 && (u = "月息季本类产品期限必须是3的倍数") : u = "请输入正确的项目期限进行计算！" : u = "请输入正确的年化收益率进行计算！" : u = "请输入正确的项目金额进行计算！", "" != u) return i.html(u), !1;
                var p = null, g = null;
                switch (c) {
                    case"3":
                        break;
                    case"0":
                        p = "day";
                        break;
                    case"4":
                        g = 3;
                        break;
                    case"2":
                        g = 2;
                        break;
                    case"5":
                        g = 5
                }
                var f = o({amount: t, type: g, rate: e, time: d, unit: p});
                r.eq(0).addClass("calculator-dialog-cur").find("span").html(f.total || 0), r.eq(1).addClass("calculator-dialog-cur").find("span").html(f.interest || 0), "2" == c && (r.eq(2).addClass("calculator-dialog-cur").html("每月应收利息：<span>" + f.monthInterest + "</span>元"), r.eq(3).addClass("calculator-dialog-cur").find("span").html(f.last)), "4" == c && r.eq(2).addClass("calculator-dialog-cur").html("每月应收本息：<span>" + f.monthInterest + "</span>元"), "5" == c && r.eq(2).addClass("calculator-dialog-cur").html("每季应收本金：<span>" + f.quarterAmount + "</span>元")
            };
        t.on("click", "#toCalculator", function () {
            if (r.removeClass("calculator-dialog-cur"), i.html(""), !c()) return !1
        }), t.on("click", "#toReset", function () {
            i.html(""), r.removeClass("calculator-dialog-cur"), t.find("input").val(""), t.find("select").val(3), l.next("i").html("月")
        }), t.on("focus", "input,select", function () {
            i.html("")
        }).on("keyup", "input", function () {
            c()
        }), t.on("change", "select", function () {
            var t = l.next("i");
            0 == $(this).val() ? t.html("天") : t.html("月"), c()
        })
    }

    var o = t("./calculator"), s = t("./tpl/calculator");
    e.init = function () {
        var t = "";
        t = $.util ? $.util.dot(s) : s(), $.Zebra_Dialog(t, {
            title: "收益计算器",
            buttons: !1,
            overlay_opacity: .5,
            overlay_close: !1,
            custom_id: "calculatorDialog",
            callback: function (t, e) {
                n(t, e)
            }
        })
    }
}), define("module/calculator-new/calculator", [], function (t) {
    return function e(t) {
        var i, n = t.amount, o = t.rate, s = t.type || 1, a = t.time, l = t.unit, r = function (t) {
            if (!t) return "";
            t = "" + t;
            var e = t.replace(/^(\d*)$/, "$1.");
            e = (e + "00").replace(/(\d*\.\d\d)\d*/, "$1"), e = e.replace(".", ",");
            for (var i = /(\d)(\d{3},)/; i.test(e);) e = e.replace(i, "$1,$2");
            return e = e.replace(/,(\d\d)$/, ".$1"), e = e.replace(/^\./, "0.")
        };
        i = "day" === l ? a / 360 : a / 12, o /= 100;
        var c, e, d, u, p = 12 * i, g = o / 12, f = "";
        switch (s) {
            case 1:
                e = parseFloat(n * o * i), c = e + parseFloat(n);
                break;
            case 2:
                e = parseFloat(n * o * i), c = parseFloat(e) + parseFloat(n), d = parseFloat(n * g), u = p >= 1 ? c - d * (p - 1) : c;
                break;
            case 3:
                var h = Math.pow(1 + g, p);
                d = h * g / (h - 1) * n, c = d * p, e = c - n;
                break;
            case 4:
                var m = t.borrowAmount, v = t.dsInterest;
                e = n / m * v;
                break;
            case 5:
                var b = p / 3;
                f = parseFloat(n / p * 3), e = 0;
                for (var _ = 0; _ < b; _++) e += parseFloat((n - f * _) * o / 12 * 3);
                c = parseFloat(e) + parseFloat(n)
        }
        return {interest: r(e) || 0, monthInterest: r(d) || 0, quarterAmount: r(f), total: r(c), last: r(u)}
    }
}), define("module/calculator-new/tpl/calculator", [], function (t, e, i) {
    i.exports = function (t) {
        var e = '<div class="calculator-dialog-content"> <div class="calculator-dialog-error"></div> <ul class="calculator-dialog-item"> <li><span class="l">项 目 金 额：</span><span class="r"><input class="txt calculator-amount" type="text" maxlength="10" value="5000"><i>元</i></span></li> <li><span class="l">年化收益率：</span><span class="r"><input class="txt calculator-rate" type="text" maxlength="5" value="13"><i>%</i></span></li> <li><span class="l">还 款 方 式：</span> <select class="calculator-type"> <option value="3">按月一次性还款</option> <option value="0">按天一次性还款</option> <option value="4">等额本息</option> <option value="2">先息后本</option> <option value="5">月息季本</option> </select> </li> <li><span class="l">项 目 期 限：</span><span class="r"><input class="txt calculator-deadline" type="text" maxlength="5" value="1"><i>月</i></span></li> <li><span class="l">&nbsp;</span><a class="tocal" id="toCalculator" href="javascript:;">计算</a><a class="tores" id="toReset" href="javascript:;">重置</a></li> </ul> <h5>结 果 描 述：</h5> <div class="calculator-dialog-result">本 息 总 计：<span>0.00</span>元</div> <div class="calculator-dialog-result">应 收 利 息：<span>0.00</span>元</div> <div class="calculator-dialog-result">每月应收本息：<span>0.00</span>元</div> <div class="calculator-dialog-result">您将在最后一个月获得：<span>0.00</span>元</div></div>';
        return e
    }
});