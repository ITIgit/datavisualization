! function(t) {
    function e(r) { if (n[r]) return n[r].exports; var o = n[r] = { i: r, l: !1, exports: {} }; return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports }
    var n = {};
    e.m = t, e.c = n, e.i = function(t) { return t }, e.d = function(t, n, r) { e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r }) }, e.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 496)
}([, , , , , function(t, e, n) {
    var r = n(103),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r || o || Function("return this")();
    t.exports = i
}, function(t, e) {
    var n = Array.isArray;
    t.exports = n
}, , , , , , , , , function(t, e) {
    function n(t) { var e = typeof t; return null != t && ("object" == e || "function" == e) }
    t.exports = n
}, function(t, e, n) {
    "use strict";

    function r(t) { return "[object Array]" === S.call(t) }

    function o(t) { return "[object ArrayBuffer]" === S.call(t) }

    function i(t) { return "undefined" != typeof FormData && t instanceof FormData }

    function a(t) { return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer }

    function s(t) { return "string" == typeof t }

    function u(t) { return "number" == typeof t }

    function l(t) { return void 0 === t }

    function c(t) { return null !== t && "object" == typeof t }

    function f(t) { return "[object Date]" === S.call(t) }

    function d(t) { return "[object File]" === S.call(t) }

    function h(t) { return "[object Blob]" === S.call(t) }

    function p(t) { return "[object Function]" === S.call(t) }

    function m(t) { return c(t) && p(t.pipe) }

    function v(t) { return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams }

    function y(t) { return t.replace(/^\s*/, "").replace(/\s*$/, "") }

    function _() { return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document) }

    function g(t, e) {
        if (null !== t && void 0 !== t)
            if ("object" != typeof t && (t = [t]), r(t))
                for (var n = 0, o = t.length; n < o; n++) e.call(null, t[n], n, t);
            else
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.call(null, t[i], i, t)
    }

    function b() {
        function t(t, n) { "object" == typeof e[n] && "object" == typeof t ? e[n] = b(e[n], t) : e[n] = t }
        for (var e = {}, n = 0, r = arguments.length; n < r; n++) g(arguments[n], t);
        return e
    }

    function w(t, e, n) { return g(e, function(e, r) { t[r] = n && "function" == typeof e ? x(e, n) : e }), t }
    var x = n(173),
        P = n(315),
        S = Object.prototype.toString;
    t.exports = { isArray: r, isArrayBuffer: o, isBuffer: P, isFormData: i, isArrayBufferView: a, isString: s, isNumber: u, isObject: c, isUndefined: l, isDate: f, isFile: d, isBlob: h, isFunction: p, isStream: m, isURLSearchParams: v, isStandardBrowserEnv: _, forEach: g, merge: b, extend: w, trim: y }
}, , , function(t, e, n) {
    function r(t, e) { var n = i(t, e); return o(n) ? n : void 0 }
    var o = n(189),
        i = n(206);
    t.exports = r
}, , function(t, e) {
    var n;
    n = function() { return this }();
    try { n = n || Function("return this")() || (0, eval)("this") } catch (t) { "object" == typeof window && (n = window) }
    t.exports = n
}, function(t, e) {
    function n(t) { return null != t && "object" == typeof t }
    t.exports = n
}, , , , , function(t, e, n) {
    function r(t) { return null == t ? void 0 === t ? u : s : l && l in Object(t) ? i(t) : a(t) }
    var o = n(31),
        i = n(205),
        a = n(229),
        s = "[object Null]",
        u = "[object Undefined]",
        l = o ? o.toStringTag : void 0;
    t.exports = r
}, , , , function(t, e, n) {
    var r = n(5),
        o = r.Symbol;
    t.exports = o
}, function(t, e) { t.exports = function(t) { return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function() { return t.l } }), Object.defineProperty(t, "id", { enumerable: !0, get: function() { return t.i } }), t.webpackPolyfill = 1), t } }, , , function(t, e, n) {
    function r(t) { return "symbol" == typeof t || i(t) && o(t) == a }
    var o = n(27),
        i = n(22),
        a = "[object Symbol]";
    t.exports = r
}, , , , , , , , , function(t, e, n) {
    function r(t) { if ("string" == typeof t || o(t)) return t; var e = t + ""; return "0" == e && 1 / t == -i ? "-0" : e }
    var o = n(35),
        i = 1 / 0;
    t.exports = r
}, function(t, e, n) {
    function r(t) { return null != t && i(t.length) && !o(t) }
    var o = n(109),
        i = n(76);
    t.exports = r
}, , , , function(t, e, n) {
    function r(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    var o = n(216),
        i = n(217),
        a = n(218),
        s = n(219),
        u = n(220);
    r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = a, r.prototype.has = s, r.prototype.set = u, t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        for (var n = t.length; n--;)
            if (o(t[n][0], e)) return n;
        return -1
    }
    var o = n(62);
    t.exports = r
}, function(t, e, n) {
    function r(t, e) { var n = t.__data__; return o(e) ? n["string" == typeof e ? "string" : "hash"] : n.map }
    var o = n(214);
    t.exports = r
}, function(t, e, n) {
    var r = n(19),
        o = r(Object, "create");
    t.exports = o
}, function(t, e, n) {
    function r(t) { return a(t) ? o(t) : i(t) }
    var o = n(150),
        i = n(191),
        a = n(45);
    t.exports = r
}, , , function(t, e) {
    function n(t) { return t }
    t.exports = n
}, , , , , function(t, e) {
    function n(t, e) { var n = typeof t; return !!(e = null == e ? r : e) && ("number" == n || "symbol" != n && o.test(t)) && t > -1 && t % 1 == 0 && t < e }
    var r = 9007199254740991,
        o = /^(?:0|[1-9]\d*)$/;
    t.exports = n
}, function(t, e) {
    function n(t, e) { return t === e || t !== t && e !== e }
    t.exports = n
}, , , , , , , , , function(t, e, n) {
    "use strict";

    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
    var o = n(333),
        i = n.n(o),
        a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
        }(),
        s = function() {
            function t() { r(this, t), this.options = { innerRadius: 0, strokeWidth: 2, markerSize: 0, sorted: !1, orientation: "v", baselineValue: 0, hideXaxis: !1, hideYaxis: !1, showGridLines: !1, showXgridlines: !1, showYgridlines: !1, guideLine: "none", legendPosition: "r", animated: !0 }, this.resizeHandler = i()(this.resizeHandler, 200).bind(this), this._onMount = [], this._onUnmount = [], this._onUpdate = [], this._onResize = [] }
            return a(t, [{ key: "update", value: function(t) { this.datasets = t.data.map(function(t) { return new Plottable.Dataset(t.series, t.label) }), this.plot.datasets(this.datasets), this.options.data = t.data, this.onUpdate(t) } }, {
                key: "_setGridlines",
                value: function(t, e) {
                    if (t.showGridlines) {
                        var n = "h" === t.orientation,
                            r = n ? e : null,
                            o = n ? null : e;
                        this.gridlines = new Plottable.Components.Gridlines(r, o)
                    }
                }
            }, {
                key: "_setAxes",
                value: function(t, e, n) {
                    var r = "h" === t.orientation;
                    t.hideXaxis || (this.xAxis = r ? new Plottable.Axes.Numeric(e, "bottom") : n instanceof Plottable.Scales.Time ? new Plottable.Axes.Time(n, "bottom") : new Plottable.Axes.Category(n, "bottom"), this.layout.add(this.xAxis, 1, 2)), t.hideYaxis || (this.yAxis = r ? n instanceof Plottable.Scales.Time ? new Plottable.Axes.Time(n, "left") : new Plottable.Axes.Category(n, "left") : new Plottable.Axes.Numeric(e, "left"), this.layout.add(this.yAxis, 0, 1)), t.xLabel && this.layout.add(new Plottable.Components.AxisLabel(t.xLabel), 2, 2), t.yLabel && this.layout.add(new Plottable.Components.AxisLabel(t.yLabel, -90), 0, 0)
                }
            }, {
                key: "_setLegend",
                value: function(t, e) {
                    switch (this.legend = new Plottable.Components.Legend(e).xAlignment("center").yAlignment("center"), t.legendPosition) {
                        case "t":
                            this.layout = new Plottable.Components.Table([
                                [this.legend.maxEntriesPerRow(1 / 0)],
                                [this.layout]
                            ]).rowPadding(10);
                            break;
                        case "r":
                            this.layout = new Plottable.Components.Table([
                                [this.layout, this.legend]
                            ]).columnPadding(10);
                            break;
                        case "b":
                            this.layout = new Plottable.Components.Table([
                                [this.layout],
                                [this.legend.maxEntriesPerRow(1 / 0)]
                            ]).rowPadding(10);
                            break;
                        case "l":
                            this.layout = new Plottable.Components.Table([
                                [this.legend, this.layout]
                            ]).columnPadding(10)
                    }
                }
            }, {
                key: "_setInteractions",
                value: function(t) {
                    var e = this;
                    t.clickHandler && (new Plottable.Interactions.Click).onClick(function(n) {
                        var r = e.plot.entitiesAt(n)[0];
                        t.clickHandler(r, e.plot.entities())
                    }).attachTo(this.plot), t.hoverHandler && (new Plottable.Interactions.Pointer).onPointerMove(function(n) {
                        var r = e.plot.entitiesAt(n)[0];
                        t.hoverHandler(r, e.plot.entities())
                    }).onPointerExit(function(n) { t.hoverHandler(null, e.plot.entities()) }).attachTo(this.plot)
                }
            }, { key: "resizeHandler", value: function() { this.layout.redraw(), this.onResize() } }, { key: "mount", value: function(t) { t.classList.add("datagovsg-chart"), this.layout.renderTo(t), window.addEventListener("resize", this.resizeHandler), this.onMount(t) } }, { key: "unmount", value: function() { this.onUnmount(), window.removeEventListener("resize", this.resizeHandler), this.layout.detach() } }, {
                key: "onMount",
                get: function() {
                    return function(t) {
                        var e = this;
                        this._onMount.forEach(function(n) { n.call(e, t) })
                    }
                },
                set: function(t) { this._onMount.push(t) }
            }, {
                key: "onUnmount",
                get: function() {
                    return function(t) {
                        var e = this;
                        this._onUnmount.forEach(function(t) { t.call(e) })
                    }
                },
                set: function(t) { this._onUnmount.push(t) }
            }, {
                key: "onUpdate",
                get: function() {
                    return function(t) {
                        var e = this;
                        Plottable.Utils.DOM.requestAnimationFramePolyfill(function() { e._onUpdate.forEach(function(n) { n.call(e, t) }) })
                    }
                },
                set: function(t) { this._onUpdate.push(t) }
            }, {
                key: "onResize",
                get: function() {
                    return function() {
                        var t = this;
                        Plottable.Utils.DOM.requestAnimationFramePolyfill(function() { t._onResize.forEach(function(e) { e.call(t) }) })
                    }
                },
                set: function(t) { this._onResize.push(t) }
            }]), t
        }();
    e.a = s
}, function(t, e, n) {
    var r = n(19),
        o = n(5),
        i = r(o, "Map");
    t.exports = i
}, function(t, e, n) {
    function r(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    var o = n(221),
        i = n(222),
        a = n(223),
        s = n(224),
        u = n(225);
    r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = a, r.prototype.has = s, r.prototype.set = u, t.exports = r
}, function(t, e, n) {
    function r(t, e) { if (o(t)) return !1; var n = typeof t; return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || (s.test(t) || !a.test(t) || null != e && t in Object(e)) }
    var o = n(6),
        i = n(35),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        s = /^\w*$/;
    t.exports = r
}, function(t, e, n) {
    var r = n(186),
        o = n(22),
        i = Object.prototype,
        a = i.hasOwnProperty,
        s = i.propertyIsEnumerable,
        u = r(function() { return arguments }()) ? r : function(t) { return o(t) && a.call(t, "callee") && !s.call(t, "callee") };
    t.exports = u
}, function(t, e) {
    function n(t) { return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r }
    var r = 9007199254740991;
    t.exports = n
}, function(t, e) {
    function n() { throw new Error("setTimeout has not been defined") }

    function r() { throw new Error("clearTimeout has not been defined") }

    function o(t) { if (c === setTimeout) return setTimeout(t, 0); if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0); try { return c(t, 0) } catch (e) { try { return c.call(null, t, 0) } catch (e) { return c.call(this, t, 0) } } }

    function i(t) { if (f === clearTimeout) return clearTimeout(t); if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t); try { return f(t) } catch (e) { try { return f.call(null, t) } catch (e) { return f.call(this, t) } } }

    function a() { m && h && (m = !1, h.length ? p = h.concat(p) : v = -1, p.length && s()) }

    function s() {
        if (!m) {
            var t = o(a);
            m = !0;
            for (var e = p.length; e;) {
                for (h = p, p = []; ++v < e;) h && h[v].run();
                v = -1, e = p.length
            }
            h = null, m = !1, i(t)
        }
    }

    function u(t, e) { this.fun = t, this.array = e }

    function l() {}
    var c, f, d = t.exports = {};
    ! function() { try { c = "function" == typeof setTimeout ? setTimeout : n } catch (t) { c = n } try { f = "function" == typeof clearTimeout ? clearTimeout : r } catch (t) { f = r } }();
    var h, p = [],
        m = !1,
        v = -1;
    d.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        p.push(new u(t, e)), 1 !== p.length || m || o(s)
    }, u.prototype.run = function() { this.fun.apply(null, this.array) }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function(t) { return [] }, d.binding = function(t) { throw new Error("process.binding is not supported") }, d.cwd = function() { return "/" }, d.chdir = function(t) { throw new Error("process.chdir is not supported") }, d.umask = function() { return 0 }
}, , , , , function(t, e, n) {
    function r(t, e) { return o(t) ? t : i(t, e) ? [t] : a(s(t)) }
    var o = n(6),
        i = n(74),
        a = n(239),
        s = n(161);
    t.exports = r
}, , , , , , function(t, e, n) {
    function r(t) {
        var e = this.__data__ = new o(t);
        this.size = e.size
    }
    var o = n(49),
        i = n(234),
        a = n(235),
        s = n(236),
        u = n(237),
        l = n(238);
    r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = s, r.prototype.has = u, r.prototype.set = l, t.exports = r
}, function(t, e) {
    function n(t, e) { for (var n = -1, r = e.length, o = t.length; ++n < r;) t[o + n] = e[n]; return t }
    t.exports = n
}, function(t, e, n) {
    function r(t, e) { e = o(e, t); for (var n = 0, r = e.length; null != t && n < r;) t = t[i(e[n++])]; return n && n == r ? t : void 0 }
    var o = n(82),
        i = n(44);
    t.exports = r
}, function(t, e) {
    function n(t) { return function(e) { return t(e) } }
    t.exports = n
}, function(t, e, n) {
    (function(t) {
        var r = n(5),
            o = n(244),
            i = "object" == typeof e && e && !e.nodeType && e,
            a = i && "object" == typeof t && t && !t.nodeType && t,
            s = a && a.exports === i,
            u = s ? r.Buffer : void 0,
            l = u ? u.isBuffer : void 0,
            c = l || o;
        t.exports = c
    }).call(e, n(32)(t))
}, , , function(t, e, n) {
    "use strict";

    function r(t) { if (Array.isArray(t)) { for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e]; return n } return Array.from(t) }

    function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function s() { return (new Plottable.Scales.Linear).tickGenerator(h()) }

    function u() {
        var t = M.getCategoryScale,
            e = t.innerPadding,
            n = t.outerPadding;
        return (new Plottable.Scales.Category).innerPadding(e).outerPadding(n)
    }

    function l() { return (new Plottable.Scales.Color).range(D) }

    function c() { var t = (new Plottable.Scales.Color).range([D[0]]); return t.scale = function(t) { return this._d3Scale(t) }, t }

    function f() { return new Y }

    function d(t) { if (t) { var e = Plottable.Formatters.general(5); return function(t) { return e(t) + "%" } } var n = Plottable.Formatters.shortScale(); return function(t) { var e = n(t); return e.indexOf(".") > -1 && (e = e.replace(/\.?(0*|0{3}\d*)([KMBTQ]?)$/, "$2")), "-0" === e && (e = "0"), e } }

    function h() {
        var t = M.getCustomTickGenerator.targetLineCount;
        return function(e) {
            var n = e.domain(),
                r = k(n, 2),
                o = r[0],
                i = r[1],
                a = i - o,
                s = Math.pow(10, Math.floor(Math.log(a / t) / Math.LN10)),
                u = a / t / s;
            u = [10, 5, 2, 1, .5].filter(function(t) { return t <= u })[0];
            var l = s * u,
                c = Math.ceil(o / l),
                f = Math.floor(i / l);
            return S()(c, f + 1).map(function(t) { return t * l })
        }
    }

    function p(t) {
        switch (t) {
            case "year":
            case "financial_year":
                return m();
            case "half_year":
            case "financial_half_year":
                return [].concat(r(v()), r(m()));
            case "quarter":
            case "financial_quarter":
                return [].concat(r(y()), r(m()));
            case "month":
                return [].concat(r(_()), r(m()));
            case "week":
                return [].concat(r(g()), r(m()));
            case "date":
                return [].concat(r(b()), r(_()), r(m()));
            case "date_time":
                return [].concat(r(w()), r(b()), r(_()), r(m()));
            case "time":
                return x()
        }
    }

    function m() { return j.map(function(t) { return [{ interval: Plottable.TimeInterval.year, step: t, formatter: Plottable.Formatters.time("%Y") }] }) }

    function v() {
        return [
            [{ interval: Plottable.TimeInterval.month, step: 6, formatter: function(t) { var e = new Date(t); return "H" + Math.floor(e.getMonth() / 6) + 1 } }, { interval: Plottable.TimeInterval.year, step: 1, formatter: Plottable.Formatters.time("%Y") }]
        ]
    }

    function y() {
        return [
            [{ interval: Plottable.TimeInterval.month, step: 3, formatter: function(t) { var e = new Date(t); return "Q" + Math.floor(e.getMonth() / 3) + 1 } }, { interval: Plottable.TimeInterval.year, step: 1, formatter: Plottable.Formatters.time("%Y") }]
        ]
    }

    function _() {
        return [
            [{ interval: Plottable.TimeInterval.month, step: 1, formatter: Plottable.Formatters.time("%B") }, { interval: Plottable.TimeInterval.year, step: 1, formatter: Plottable.Formatters.time("%Y") }],
            [{ interval: Plottable.TimeInterval.month, step: 1, formatter: Plottable.Formatters.time("%b") }, { interval: Plottable.TimeInterval.year, step: 1, formatter: Plottable.Formatters.time("%Y") }],
            [{ interval: Plottable.TimeInterval.month, step: 1, formatter: Plottable.Formatters.time("%m") }, { interval: Plottable.TimeInterval.year, step: 1, formatter: Plottable.Formatters.time("%Y") }],
            [{ interval: Plottable.TimeInterval.month, step: 1, formatter: Plottable.Formatters.time("%-m") }, { interval: Plottable.TimeInterval.year, step: 1, formatter: Plottable.Formatters.time("%Y") }]
        ]
    }

    function g() {
        return [
            [{ interval: Plottable.TimeInterval.week, step: 1, formatter: function(t) { return "W" + d3.time.mondayOfYear(t) + 1 } }, { interval: Plottable.TimeInterval.year, step: 1, formatter: Plottable.Formatters.time("%Y") }]
        ]
    }

    function b() {
        return [
            [{ interval: Plottable.TimeInterval.day, step: 1, formatter: Plottable.Formatters.time("%e") }, { interval: Plottable.TimeInterval.year, step: 1, formatter: Plottable.Formatters.time("%Y") }]
        ]
    }

    function w() { var t = []; return C.forEach(function(e) { t.push([{ interval: Plottable.TimeInterval.hour, step: e, formatter: Plottable.Formatters.time("%I %p") }, { interval: Plottable.TimeInterval.day, step: 1, formatter: Plottable.Formatters.time("%B %e, %Y") }]) }), A.forEach(function(e) { t.push([{ interval: Plottable.TimeInterval.minute, step: e, formatter: Plottable.Formatters.time("%I:%M %p") }, { interval: Plottable.TimeInterval.day, step: 1, formatter: Plottable.Formatters.time("%B %e, %Y") }]), t.push([{ interval: Plottable.TimeInterval.second, step: e, formatter: Plottable.Formatters.time("%I:%M:%S %p") }, { interval: Plottable.TimeInterval.day, step: 1, formatter: Plottable.Formatters.time("%B %e, %Y") }]) }), t }

    function x() { var t = []; return C.forEach(function(e) { t.push([{ interval: Plottable.TimeInterval.hour, step: e, formatter: Plottable.Formatters.time("%I %p") }]) }), A.forEach(function(e) { t.push([{ interval: Plottable.TimeInterval.minute, step: e, formatter: Plottable.Formatters.time("%I:%M %p") }]), t.push([{ interval: Plottable.TimeInterval.second, step: e, formatter: Plottable.Formatters.time("%I:%M:%S %p") }]) }), t }
    n.d(e, "i", function() { return M }), n.d(e, "a", function() { return D }), e.d = s, e.f = u, e.c = l, e.g = c, e.e = f, e.h = d, e.b = p;
    var P = n(332),
        S = n.n(P),
        k = function() {
            function t(t, e) {
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (t) { o = !0, i = t } finally { try {!r && s.return && s.return() } finally { if (o) throw i } }
                return n
            }
            return function(e, n) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return t(e, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
        }(),
        O = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
        }(),
        T = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var a = o.get; if (void 0 !== a) return a.call(r) },
        M = { getCategoryScale: { innerPadding: .4, outerPadding: .2 }, getCustomTickGenerator: { targetLineCount: 4 } },
        D = ["#C64D26", "#FF7733", "#415961", "#65828A", "#B2D0D8", "#DAE3E8"],
        Y = function(t) {
            function e() { return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
            return a(e, t), O(e, [{ key: "_expandSingleValueDomain", value: function(t) { var n = t.map(function(t) { return t.toDate() }); return T(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_expandSingleValueDomain", this).call(this, n) } }]), e
        }(Plottable.Scales.Time),
        j = [1, 5, 10, 25, 50, 100, 200, 500, 1e3],
        C = [1, 3, 6, 12],
        A = [1, 5, 10, 15, 30]
}, , , , , , function(t, e, n) {
    function r(t, e, n, a, s) { return t === e || (null == t || null == e || !i(t) && !i(e) ? t !== t && e !== e : o(t, e, n, a, r, s)) }
    var o = n(187),
        i = n(22);
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n, r, l, c) {
        var f = n & s,
            d = t.length,
            h = e.length;
        if (d != h && !(f && h > d)) return !1;
        var p = c.get(t);
        if (p && c.get(e)) return p == e;
        var m = -1,
            v = !0,
            y = n & u ? new o : void 0;
        for (c.set(t, e), c.set(e, t); ++m < d;) {
            var _ = t[m],
                g = e[m];
            if (r) var b = f ? r(g, _, m, e, t, c) : r(_, g, m, t, e, c);
            if (void 0 !== b) {
                if (b) continue;
                v = !1;
                break
            }
            if (y) { if (!i(e, function(t, e) { if (!a(y, e) && (_ === t || l(_, t, n, r, c))) return y.push(e) })) { v = !1; break } } else if (_ !== g && !l(_, g, n, r, c)) { v = !1; break }
        }
        return c.delete(t), c.delete(e), v
    }
    var o = n(179),
        i = n(183),
        a = n(199),
        s = 1,
        u = 2;
    t.exports = r
}, function(t, e, n) {
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
    }).call(e, n(21))
}, function(t, e, n) {
    var r = n(175),
        o = n(72),
        i = n(177),
        a = n(178),
        s = n(180),
        u = n(27),
        l = n(108),
        c = l(r),
        f = l(o),
        d = l(i),
        h = l(a),
        p = l(s),
        m = u;
    (r && "[object DataView]" != m(new r(new ArrayBuffer(1))) || o && "[object Map]" != m(new o) || i && "[object Promise]" != m(i.resolve()) || a && "[object Set]" != m(new a) || s && "[object WeakMap]" != m(new s)) && (m = function(t) {
        var e = u(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? l(n) : "";
        if (r) switch (r) {
            case c:
                return "[object DataView]";
            case f:
                return "[object Map]";
            case d:
                return "[object Promise]";
            case h:
                return "[object Set]";
            case p:
                return "[object WeakMap]"
        }
        return e
    }), t.exports = m
}, function(t, e) {
    function n(t) { var e = t && t.constructor; return t === ("function" == typeof e && e.prototype || r) }
    var r = Object.prototype;
    t.exports = n
}, function(t, e, n) {
    function r(t) { return t === t && !o(t) }
    var o = n(15);
    t.exports = r
}, function(t, e) {
    function n(t, e) { return function(n) { return null != n && (n[t] === e && (void 0 !== e || t in Object(n))) } }
    t.exports = n
}, function(t, e) {
    function n(t) { if (null != t) { try { return o.call(t) } catch (t) {} try { return t + "" } catch (t) {} } return "" }
    var r = Function.prototype,
        o = r.toString;
    t.exports = n
}, function(t, e, n) {
    function r(t) { if (!i(t)) return !1; var e = o(t); return e == s || e == u || e == a || e == l }
    var o = n(27),
        i = n(15),
        a = "[object AsyncFunction]",
        s = "[object Function]",
        u = "[object GeneratorFunction]",
        l = "[object Proxy]";
    t.exports = r
}, function(t, e, n) {
    var r = n(190),
        o = n(91),
        i = n(137),
        a = i && i.isTypedArray,
        s = a ? o(a) : r;
    t.exports = s
}, , function(t, e, n) {
    "use strict";
    (function(e) {
        function r(t, e) {!o.isUndefined(t) && o.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e) }
        var o = n(16),
            i = n(291),
            a = { "Content-Type": "application/x-www-form-urlencoded" },
            s = {
                adapter: function() { var t; return "undefined" != typeof XMLHttpRequest ? t = n(169) : void 0 !== e && (t = n(169)), t }(),
                transformRequest: [function(t, e) { return i(e, "Content-Type"), o.isFormData(t) || o.isArrayBuffer(t) || o.isBuffer(t) || o.isStream(t) || o.isFile(t) || o.isBlob(t) ? t : o.isArrayBufferView(t) ? t.buffer : o.isURLSearchParams(t) ? (r(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : o.isObject(t) ? (r(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t }],
                transformResponse: [function(t) {
                    if ("string" == typeof t) try { t = JSON.parse(t) } catch (t) {}
                    return t
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function(t) { return t >= 200 && t < 300 }
            };
        s.headers = { common: { Accept: "application/json, text/plain, */*" } }, o.forEach(["delete", "get", "head"], function(t) { s.headers[t] = {} }), o.forEach(["post", "put", "patch"], function(t) { s.headers[t] = o.merge(a) }), t.exports = s
    }).call(e, n(77))
}, , , , , , , , , , , , , , , , , , , , , , function(t, e) {
    function n(t, e) { for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r;) o[n] = e(t[n], n, t); return o }
    t.exports = n
}, function(t, e, n) {
    var r = n(182),
        o = n(160),
        i = Object.prototype,
        a = i.propertyIsEnumerable,
        s = Object.getOwnPropertySymbols,
        u = s ? function(t) { return null == t ? [] : (t = Object(t), r(s(t), function(e) { return a.call(t, e) })) } : o;
    t.exports = u
}, function(t, e, n) {
    function r(t, e, n) { if (!s(n)) return !1; var r = typeof e; return !!("number" == r ? i(n) && a(e, n.length) : "string" == r && e in n) && o(n[e], t) }
    var o = n(62),
        i = n(45),
        a = n(61),
        s = n(15);
    t.exports = r
}, function(t, e, n) {
    (function(t) {
        var r = n(103),
            o = "object" == typeof e && e && !e.nodeType && e,
            i = o && "object" == typeof t && t && !t.nodeType && t,
            a = i && i.exports === o,
            s = a && r.process,
            u = function() { try { var t = i && i.require && i.require("util").types; return t || s && s.binding && s.binding("util") } catch (t) {} }();
        t.exports = u
    }).call(e, n(32)(t))
}, function(t, e, n) {
    function r(t, e, n) { var r = null == t ? void 0 : o(t, e); return void 0 === r ? n : r }
    var o = n(90);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        if ("number" == typeof t) return t;
        if (i(t)) return a;
        if (o(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = o(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(s, "");
        var n = l.test(t);
        return n || c.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? a : +t
    }
    var o = n(15),
        i = n(35),
        a = NaN,
        s = /^\s+|\s+$/g,
        u = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        f = parseInt;
    t.exports = r
}, , , , , function(t, e, n) {
    "use strict";

    function r(t) { if (Array.isArray(t)) { for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e]; return n } return Array.from(t) }

    function o(t) {
        t.plot.markers ? (new Plottable.Interactions.Pointer).onPointerMove(function(e) {
            t.plot.markers.entities().forEach(function(t) { t.selection.classed("highlight", !1).style("stroke", "").style("fill", "") });
            var n = t.plot.markers.entityNearest(e);
            n && n.selection.classed("highlight", !0).style("stroke", "black").style("fill", "white")
        }).onPointerExit(function(e) { t.plot.markers.entities().forEach(function(t) { t.selection.classed("highlight", !1).style("stroke", "").style("fill", "") }) }).attachTo(t.plot.markers) : (new Plottable.Interactions.Pointer).onPointerMove(function(e) {
            t.plot.entities().forEach(function(t) { t.selection.classed("highlight", !1).style("fill", "") });
            var n = t.plot.entitiesAt(e)[0];
            n && n.selection.classed("highlight", !0).style("fill", "lightgrey")
        }).onPointerExit(function(e) { t.plot.entities().forEach(function(t) { t.selection.classed("highlight", !1).style("fill", "") }) }).attachTo(t.plot)
    }

    function i(t, e) {
        (t.plot.markers || t.plot).attr("data-title", e.title);
        var n = void 0,
            r = [".render-area .bar-area rect", ".render-area .symbol", ".render-area .arc.outline"].join(",");
        t.onMount = function(e) {
            n = $(e).find(r), n.tooltip({
                animation: !1,
                container: e.parentNode,
                html: !0,
                placement: function(t, n) {
                    var r = e.getBoundingClientRect(),
                        o = r.width,
                        i = r.height,
                        a = r.top,
                        s = r.left,
                        u = n.getBoundingClientRect(),
                        l = u.width,
                        c = u.height,
                        f = u.top,
                        d = u.left;
                    return d + l - s <= .7 * o ? "right" : d - s >= .3 * o ? "left" : f - a >= .4 * i ? "top" : f + c - a <= .6 * i ? "bottom" : "left"
                }
            }), t.plot.markers && (new Plottable.Interactions.Pointer).onPointerMove(function(e) {
                t.plot.markers.entities().forEach(function(t) { $(t.selection.node()).tooltip("hide") });
                var n = t.plot.markers.entityNearest(e);
                n && $(n.selection.node()).tooltip("show")
            }).onPointerExit(function(e) { t.plot.markers.entities().forEach(function(t) { $(t.selection.node()).tooltip("hide") }) }).attachTo(t.plot.markers)
        }, t.onUnmount = function() { n.tooltip("destroy") }
    }

    function a(t, e) {
        var n = t.plot.markers || t.plot;
        n.attr("data-title", e.title), n.attr("data-content", e.content);
        var r = void 0,
            o = [".render-area .bar-area rect", ".render-area .symbol", ".render-area .arc.outline"].join(",");
        t.onMount = function(e) {
            r = $(e).find(o), r.popover({
                animation: !1,
                container: e.parentNode,
                html: !0,
                trigger: "hover",
                placement: function(t, n) {
                    var r = e.getBoundingClientRect(),
                        o = r.width,
                        i = r.height,
                        a = r.top,
                        s = r.left,
                        u = n.getBoundingClientRect(),
                        l = u.width,
                        c = u.height,
                        f = u.top,
                        d = u.left;
                    return d + l - s <= .7 * o ? "right" : d - s >= .3 * o ? "left" : f - a >= .4 * i ? "top" : f + c - a <= .6 * i ? "bottom" : "left"
                }
            }), t.plot.markers && (new Plottable.Interactions.Pointer).onPointerMove(function(e) {
                t.plot.markers.entities().forEach(function(t) { $(t.selection.node()).popover("hide") });
                var n = t.plot.markers.entityNearest(e);
                n && $(n.selection.node()).popover("show")
            }).onPointerExit(function(e) { t.plot.markers.entities().forEach(function(t) { $(t.selection.node()).popover("hide") }) }).attachTo(t.plot.markers)
        }, t.onUnmount = function() { r.popover("destroy") }
    }

    function s(t, e) {
        var n = void 0;
        (new Plottable.Interactions.Pointer).onPointerMove(function(r) {
            var o = t.plot.markers.entityNearest(r);
            o ? n.attr("data-original-title", e.title(o.datum, o.index, o.dataset)).attr("data-content", e.content(o.datum, o.index, o.dataset)).popover("show") : n.popover("hide")
        }).onPointerExit(function(t) { n.popover("hide") }).attachTo(t.plot.markers), t.onMount = function(t) {
            this.guideLine.vertical ? (n = $(t).find(".guide-line-layer.vertical .guide-line"), n.popover({
                animation: !1,
                container: t.parentNode,
                html: !0,
                trigger: "manual",
                placement: function(e, n) {
                    var r = t.getBoundingClientRect(),
                        o = r.width,
                        i = r.left,
                        a = n.getBoundingClientRect(),
                        s = a.width;
                    return a.left + s - i <= .7 * o ? "right" : "left"
                }
            })) : this.guideLine.horizontal && (n = $(t).find(".guide-line-layer.horizontal .guide-line"), n.popover({
                animation: !1,
                container: t.parentNode,
                html: !0,
                trigger: "manual",
                placement: function(e, n) {
                    var r = t.getBoundingClientRect(),
                        o = r.height,
                        i = r.top;
                    return n.getBoundingClientRect().top - i >= .4 * o ? "top" : "bottom"
                }
            }))
        }, t.onUnmount = function() { n.popover("destroy") }
    }

    function u(t, e) {
        function n() { return o.domain().map(function(t) { return { label: t } }) }
        var r = t.plot.parent(),
            o = "vertical" === t.plot.orientation() ? t.plot.x().scale : t.plot.y().scale,
            i = new Plottable.Dataset,
            a = (new Plottable.Plots.Rectangle).addClass("shadow").addDataset(i).attr("data-title", e.title).attr("data-content", e.content).attr("fill", "rgba(0, 0, 0, 0.1)");
        "vertical" === t.plot.orientation() ? a.x(function(t) { return o.scale(t.label) - o.stepWidth() / 2 }).x2(function(t) { return o.scale(t.label) + o.stepWidth() / 2 }).y(function(t) { return 0 }).y2(function(t) { return a.height() }) : a.x(function(t) { return 0 }).x2(function(t) { return a.width() }).y(function(t) { return o.scale(t.label) - o.stepWidth() / 2 }).y2(function(t) { return o.scale(t.label) + o.stepWidth() / 2 }), r.remove(t.plot), r.append(a), r.append(t.plot), (new Plottable.Interactions.Pointer).onPointerMove(function(t) {
            a.entities().forEach(function(t) { $(t.selection.node()).css("visibility", "hidden").popover("hide") });
            var e = a.entitiesAt(t)[0];
            e && $(e.selection.node()).css("visibility", "visible").popover("show")
        }).onPointerExit(function(t) { a.entities().forEach(function(t) { $(t.selection.node()).css("visibility", "hidden").popover("hide") }) }).attachTo(a);
        var s = void 0;
        return t.onMount = function(t) {
            i.data(n()), o.onUpdate(function() { i.data(n()) }), a.renderImmediately(), s = $(t).find(".shadow .render-area rect"), s.css("visibility", "hidden"), "vertical" === this.plot.orientation() ? s.popover({
                animation: !1,
                container: t.parentNode,
                html: !0,
                trigger: "manual",
                placement: function(e, n) {
                    var r = t.getBoundingClientRect(),
                        o = r.width,
                        i = r.left,
                        a = n.getBoundingClientRect(),
                        s = a.width;
                    return a.left + s - i <= .7 * o ? "right" : "left"
                }
            }) : s.popover({
                animation: !1,
                container: t.parentNode,
                html: !0,
                trigger: "manual",
                placement: function(e, n) {
                    var r = t.getBoundingClientRect(),
                        o = r.height,
                        i = r.top;
                    return n.getBoundingClientRect().top - i >= .4 * o ? "top" : "bottom"
                }
            })
        }, t.onUnmount = function() { s.popover("destroy") }, a
    }

    function l(t) {
        function e() { t.plot.background().select(".label-area").remove() }

        function n() {
            var n = Math.min(t.plot.width(), t.plot.height()) / 2,
                o = d3.svg.arc().innerRadius(0).outerRadius(.8 * n),
                i = d3.svg.arc().innerRadius(.8 * n).outerRadius(n),
                a = d3.layout.pie().sort(null).value(function(t) { return t.value }),
                s = a(t.dataset.data()).map(function(t, e) {
                    var a = .5 * t.startAngle + .5 * t.endAngle,
                        s = a < Math.PI,
                        u = o.centroid(t),
                        l = i.centroid(t),
                        c = [(s ? 1 : -1) * n * .95, l[1]],
                        f = [(s ? 1 : -1) * n, l[1]];
                    return { text: r.labelFormatter(t.data, e), textAnchor: s ? "start" : "end", textOffset: f, polyline: [u, l, c] }
                }),
                u = [t.plot.width() / 2, t.plot.height() / 2];
            e();
            var l = t.plot.background().insert("g").classed("label-area", !0).attr("transform", "translate(" + u.join(",") + ")"),
                c = l.selectAll("g").data(s).enter().append("g").classed("label", !0);
            c.append("text").text(function(t) { return t.text }).attr("dy", "0.35em").attr("transform", function(t) { return "translate(" + t.textOffset.join(",") + ")" }).style("text-anchor", function(t) { return t.textAnchor }), c.append("polyline").attr("points", function(t) { return t.polyline })
        }
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { labelFormatter: function(t) { return t.label } };
        t.plot.outerRadius(function(e) { return Math.min(t.plot.width(), t.plot.height()) / 2 * .8 }), t.plot._clipPathEnabled = !1, t.onMount = function(t) { n() }, t.onUpdate = function(t) { n() }, t.onResize = function() { n() }, t.onUnmount = function() { e() }
    }

    function c(t, e) {
        var r = t.xAxis;
        if (r instanceof Plottable.Axes.Time) {
            var o = n.i(h.b)(e);
            r.axisConfigurations(o), "year" !== e && "financial_year" !== e || r.tierLabelPositions(o.map(function(t) { return "center" }))
        }
    }

    function f(t) {
        var e = t.plot._makeInnerScale;
        t.plot._makeInnerScale = function() { return e.call(this).innerPadding(0).outerPadding(0) }
    }

    function d(t) {
        var e = t.xAxis;
        if (e instanceof Plottable.Axes.Category) {
            var n = e.renderImmediately;
            e.renderImmediately = function() {
                var t = this,
                    e = 1.5 * d3.max(this._scale.domain(), function(e) { return t._measurer.measure(e.toString()).width }),
                    r = Math.ceil(e / this._scale.stepWidth()),
                    o = this._scale.domain,
                    i = this._scale.stepWidth;
                this._scale.domain = function() { return o.call(this).filter(function(t, e) { return e % r == 0 }) }, this._scale.stepWidth = function() { return i.call(this) * r }, n.call(this), this._scale.domain = o, this._scale.stepWidth = i
            };
            var o = e._measureTicks;
            e._measureTicks = function() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                var i = this._wrapper.wrap;
                this._wrapper.wrap = function() { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n]; var r = i.call.apply(i, [this].concat(e)); return r.wrappedText = r.originalText, r };
                var a = o.call.apply(o, [this].concat(r(e)));
                return this._wrapper.wrap = i, a
            }
        }
    }
    Object.defineProperty(e, "__esModule", { value: !0 }), e.highlightOnHover = o, e.setupTooltip = i, e.setupPopover = a, e.setupPopoverOnGuideLine = s, e.setupShadowWithPopover = u, e.setupOuterLabel = l, e.customizeTimeAxis = c, e.removeInnerPadding = f, e.downsampleTicks = d;
    var h = n(95)
}, , , , , function(t, e, n) {
    var r = n(5),
        o = r.Uint8Array;
    t.exports = o
}, function(t, e, n) {
    function r(t, e) {
        var n = a(t),
            r = !n && i(t),
            c = !n && !r && s(t),
            d = !n && !r && !c && l(t),
            h = n || r || c || d,
            p = h ? o(t.length, String) : [],
            m = p.length;
        for (var v in t) !e && !f.call(t, v) || h && ("length" == v || c && ("offset" == v || "parent" == v) || d && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || u(v, m)) || p.push(v);
        return p
    }
    var o = n(198),
        i = n(75),
        a = n(6),
        s = n(92),
        u = n(61),
        l = n(110),
        c = Object.prototype,
        f = c.hasOwnProperty;
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n) { var r = e(t); return i(t) ? r : o(r, n(t)) }
    var o = n(89),
        i = n(6);
    t.exports = r
}, function(t, e, n) {
    function r(t) { return "function" == typeof t ? t : null == t ? a : "object" == typeof t ? s(t) ? i(t[0], t[1]) : o(t) : u(t) }
    var o = n(192),
        i = n(193),
        a = n(56),
        s = n(6),
        u = n(242);
    t.exports = r
}, function(t, e, n) {
    function r(t) { if ("string" == typeof t) return t; if (a(t)) return i(t, r) + ""; if (s(t)) return c ? c.call(t) : ""; var e = t + ""; return "0" == e && 1 / t == -u ? "-0" : e }
    var o = n(31),
        i = n(134),
        a = n(6),
        s = n(35),
        u = 1 / 0,
        l = o ? o.prototype : void 0,
        c = l ? l.toString : void 0;
    t.exports = r
}, function(t, e, n) {
    var r = n(19),
        o = function() { try { var t = r(Object, "defineProperty"); return t({}, "", {}), t } catch (t) {} }();
    t.exports = o
}, function(t, e, n) {
    function r(t) { return o(t, a, i) }
    var o = n(151),
        i = n(135),
        a = n(53);
    t.exports = r
}, function(t, e) {
    function n(t, e) { return function(n) { return t(e(n)) } }
    t.exports = n
}, function(t, e, n) {
    function r(t, e, n) {
        return e = i(void 0 === e ? t.length - 1 : e, 0),
            function() {
                for (var r = arguments, a = -1, s = i(r.length - e, 0), u = Array(s); ++a < s;) u[a] = r[e + a];
                a = -1;
                for (var l = Array(e + 1); ++a < e;) l[a] = r[a];
                return l[e] = n(u), o(t, this, l)
            }
    }
    var o = n(181),
        i = Math.max;
    t.exports = r
}, function(t, e, n) {
    var r = n(197),
        o = n(233),
        i = o(r);
    t.exports = i
}, function(t, e, n) {
    function r(t, e) { return null != t && i(t, e, o) }
    var o = n(185),
        i = n(207);
    t.exports = r
}, function(t, e) {
    function n() { return [] }
    t.exports = n
}, function(t, e, n) {
    function r(t) { return null == t ? "" : o(t) }
    var o = n(153);
    t.exports = r
}, , , , , , , , function(t, e, n) {
    "use strict";
    var r = n(16),
        o = n(283),
        i = n(286),
        a = n(292),
        s = n(290),
        u = n(172),
        l = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(285);
    t.exports = function(t) {
        return new Promise(function(e, c) {
            var f = t.data,
                d = t.headers;
            r.isFormData(f) && delete d["Content-Type"];
            var h = new XMLHttpRequest,
                p = "onreadystatechange",
                m = !1;
            if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in h || s(t.url) || (h = new window.XDomainRequest, p = "onload", m = !0, h.onprogress = function() {}, h.ontimeout = function() {}), t.auth) {
                var v = t.auth.username || "",
                    y = t.auth.password || "";
                d.Authorization = "Basic " + l(v + ":" + y)
            }
            if (h.open(t.method.toUpperCase(), i(t.url, t.params, t.paramsSerializer), !0), h.timeout = t.timeout, h[p] = function() {
                    if (h && (4 === h.readyState || m) && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) {
                        var n = "getAllResponseHeaders" in h ? a(h.getAllResponseHeaders()) : null,
                            r = t.responseType && "text" !== t.responseType ? h.response : h.responseText,
                            i = { data: r, status: 1223 === h.status ? 204 : h.status, statusText: 1223 === h.status ? "No Content" : h.statusText, headers: n, config: t, request: h };
                        o(e, c, i), h = null
                    }
                }, h.onerror = function() { c(u("Network Error", t, null, h)), h = null }, h.ontimeout = function() { c(u("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED", h)), h = null }, r.isStandardBrowserEnv()) {
                var _ = n(288),
                    g = (t.withCredentials || s(t.url)) && t.xsrfCookieName ? _.read(t.xsrfCookieName) : void 0;
                g && (d[t.xsrfHeaderName] = g)
            }
            if ("setRequestHeader" in h && r.forEach(d, function(t, e) { void 0 === f && "content-type" === e.toLowerCase() ? delete d[e] : h.setRequestHeader(e, t) }), t.withCredentials && (h.withCredentials = !0), t.responseType) try { h.responseType = t.responseType } catch (e) { if ("json" !== t.responseType) throw e }
            "function" == typeof t.onDownloadProgress && h.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && h.upload && h.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then(function(t) { h && (h.abort(), c(t), h = null) }), void 0 === f && (f = null), h.send(f)
        })
    }
}, function(t, e, n) {
    "use strict";

    function r(t) { this.message = t }
    r.prototype.toString = function() { return "Cancel" + (this.message ? ": " + this.message : "") }, r.prototype.__CANCEL__ = !0, t.exports = r
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) { return !(!t || !t.__CANCEL__) }
}, function(t, e, n) {
    "use strict";
    var r = n(282);
    t.exports = function(t, e, n, o, i) { var a = new Error(t); return r(a, e, n, o, i) }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) { return function() { for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r]; return t.apply(e, n) } }
}, , function(t, e, n) {
    var r = n(19),
        o = n(5),
        i = r(o, "DataView");
    t.exports = i
}, function(t, e, n) {
    function r(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    var o = n(208),
        i = n(209),
        a = n(210),
        s = n(211),
        u = n(212);
    r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = a, r.prototype.has = s, r.prototype.set = u, t.exports = r
}, function(t, e, n) {
    var r = n(19),
        o = n(5),
        i = r(o, "Promise");
    t.exports = i
}, function(t, e, n) {
    var r = n(19),
        o = n(5),
        i = r(o, "Set");
    t.exports = i
}, function(t, e, n) {
    function r(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.__data__ = new o; ++e < n;) this.add(t[e])
    }
    var o = n(73),
        i = n(230),
        a = n(231);
    r.prototype.add = r.prototype.push = i, r.prototype.has = a, t.exports = r
}, function(t, e, n) {
    var r = n(19),
        o = n(5),
        i = r(o, "WeakMap");
    t.exports = i
}, function(t, e) {
    function n(t, e, n) {
        switch (n.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2])
        }
        return t.apply(e, n)
    }
    t.exports = n
}, function(t, e) {
    function n(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, o = 0, i = []; ++n < r;) {
            var a = t[n];
            e(a, n, t) && (i[o++] = a)
        }
        return i
    }
    t.exports = n
}, function(t, e) {
    function n(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
            if (e(t[n], n, t)) return !0;
        return !1
    }
    t.exports = n
}, function(t, e, n) {
    function r(t, e, n, a, s) {
        var u = -1,
            l = t.length;
        for (n || (n = i), s || (s = []); ++u < l;) {
            var c = t[u];
            e > 0 && n(c) ? e > 1 ? r(c, e - 1, n, a, s) : o(s, c) : a || (s[s.length] = c)
        }
        return s
    }
    var o = n(89),
        i = n(213);
    t.exports = r
}, function(t, e) {
    function n(t, e) { return null != t && e in Object(t) }
    t.exports = n
}, function(t, e, n) {
    function r(t) { return i(t) && o(t) == a }
    var o = n(27),
        i = n(22),
        a = "[object Arguments]";
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n, r, v, _) {
        var g = l(t),
            b = l(e),
            w = g ? p : u(t),
            x = b ? p : u(e);
        w = w == h ? m : w, x = x == h ? m : x;
        var P = w == m,
            S = x == m,
            k = w == x;
        if (k && c(t)) {
            if (!c(e)) return !1;
            g = !0, P = !1
        }
        if (k && !P) return _ || (_ = new o), g || f(t) ? i(t, e, n, r, v, _) : a(t, e, w, n, r, v, _);
        if (!(n & d)) {
            var O = P && y.call(t, "__wrapped__"),
                T = S && y.call(e, "__wrapped__");
            if (O || T) {
                var M = O ? t.value() : t,
                    D = T ? e.value() : e;
                return _ || (_ = new o), v(M, D, n, r, _)
            }
        }
        return !!k && (_ || (_ = new o), s(t, e, n, r, v, _))
    }
    var o = n(88),
        i = n(102),
        a = n(202),
        s = n(203),
        u = n(104),
        l = n(6),
        c = n(92),
        f = n(110),
        d = 1,
        h = "[object Arguments]",
        p = "[object Array]",
        m = "[object Object]",
        v = Object.prototype,
        y = v.hasOwnProperty;
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n, r) {
        var u = n.length,
            l = u,
            c = !r;
        if (null == t) return !l;
        for (t = Object(t); u--;) { var f = n[u]; if (c && f[2] ? f[1] !== t[f[0]] : !(f[0] in t)) return !1 }
        for (; ++u < l;) {
            f = n[u];
            var d = f[0],
                h = t[d],
                p = f[1];
            if (c && f[2]) { if (void 0 === h && !(d in t)) return !1 } else { var m = new o; if (r) var v = r(h, p, d, t, e, m); if (!(void 0 === v ? i(p, h, a | s, r, m) : v)) return !1 }
        }
        return !0
    }
    var o = n(88),
        i = n(101),
        a = 1,
        s = 2;
    t.exports = r
}, function(t, e, n) {
    function r(t) { return !(!a(t) || i(t)) && (o(t) ? p : l).test(s(t)) }
    var o = n(109),
        i = n(215),
        a = n(15),
        s = n(108),
        u = /[\\^$.*+?()[\]{}|]/g,
        l = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        f = Object.prototype,
        d = c.toString,
        h = f.hasOwnProperty,
        p = RegExp("^" + d.call(h).replace(u, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = r
}, function(t, e, n) {
    function r(t) { return a(t) && i(t.length) && !!s[o(t)] }
    var o = n(27),
        i = n(76),
        a = n(22),
        s = {};
    s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1, t.exports = r
}, function(t, e, n) {
    function r(t) { if (!o(t)) return i(t); var e = []; for (var n in Object(t)) s.call(t, n) && "constructor" != n && e.push(n); return e }
    var o = n(105),
        i = n(228),
        a = Object.prototype,
        s = a.hasOwnProperty;
    t.exports = r
}, function(t, e, n) {
    function r(t) { var e = i(t); return 1 == e.length && e[0][2] ? a(e[0][0], e[0][1]) : function(n) { return n === t || o(n, t, e) } }
    var o = n(188),
        i = n(204),
        a = n(107);
    t.exports = r
}, function(t, e, n) {
    function r(t, e) { return s(t) && u(e) ? l(c(t), e) : function(n) { var r = i(n, t); return void 0 === r && r === e ? a(n, t) : o(e, r, f | d) } }
    var o = n(101),
        i = n(138),
        a = n(159),
        s = n(74),
        u = n(106),
        l = n(107),
        c = n(44),
        f = 1,
        d = 2;
    t.exports = r
}, function(t, e) {
    function n(t) { return function(e) { return null == e ? void 0 : e[t] } }
    t.exports = n
}, function(t, e, n) {
    function r(t) { return function(e) { return o(e, t) } }
    var o = n(90);
    t.exports = r
}, function(t, e, n) {
    function r(t, e) { return a(i(t, e, o), t + "") }
    var o = n(56),
        i = n(157),
        a = n(158);
    t.exports = r
}, function(t, e, n) {
    var r = n(240),
        o = n(154),
        i = n(56),
        a = o ? function(t, e) { return o(t, "toString", { configurable: !0, enumerable: !1, value: r(e), writable: !0 }) } : i;
    t.exports = a
}, function(t, e) {
    function n(t, e) { for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n); return r }
    t.exports = n
}, function(t, e) {
    function n(t, e) { return t.has(e) }
    t.exports = n
}, , function(t, e, n) {
    var r = n(5),
        o = r["__core-js_shared__"];
    t.exports = o
}, function(t, e, n) {
    function r(t, e, n, r, o, P, k) {
        switch (n) {
            case x:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case w:
                return !(t.byteLength != e.byteLength || !P(new i(t), new i(e)));
            case d:
            case h:
            case v:
                return a(+t, +e);
            case p:
                return t.name == e.name && t.message == e.message;
            case y:
            case g:
                return t == e + "";
            case m:
                var O = u;
            case _:
                var T = r & c;
                if (O || (O = l), t.size != e.size && !T) return !1;
                var M = k.get(t);
                if (M) return M == e;
                r |= f, k.set(t, e);
                var D = s(O(t), O(e), r, o, P, k);
                return k.delete(t), D;
            case b:
                if (S) return S.call(t) == S.call(e)
        }
        return !1
    }
    var o = n(31),
        i = n(149),
        a = n(62),
        s = n(102),
        u = n(226),
        l = n(232),
        c = 1,
        f = 2,
        d = "[object Boolean]",
        h = "[object Date]",
        p = "[object Error]",
        m = "[object Map]",
        v = "[object Number]",
        y = "[object RegExp]",
        _ = "[object Set]",
        g = "[object String]",
        b = "[object Symbol]",
        w = "[object ArrayBuffer]",
        x = "[object DataView]",
        P = o ? o.prototype : void 0,
        S = P ? P.valueOf : void 0;
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n, r, a, u) {
        var l = n & i,
            c = o(t),
            f = c.length;
        if (f != o(e).length && !l) return !1;
        for (var d = f; d--;) { var h = c[d]; if (!(l ? h in e : s.call(e, h))) return !1 }
        var p = u.get(t);
        if (p && u.get(e)) return p == e;
        var m = !0;
        u.set(t, e), u.set(e, t);
        for (var v = l; ++d < f;) {
            h = c[d];
            var y = t[h],
                _ = e[h];
            if (r) var g = l ? r(_, y, h, e, t, u) : r(y, _, h, t, e, u);
            if (!(void 0 === g ? y === _ || a(y, _, n, r, u) : g)) { m = !1; break }
            v || (v = "constructor" == h)
        }
        if (m && !v) {
            var b = t.constructor,
                w = e.constructor;
            b != w && "constructor" in t && "constructor" in e && !("function" == typeof b && b instanceof b && "function" == typeof w && w instanceof w) && (m = !1)
        }
        return u.delete(t), u.delete(e), m
    }
    var o = n(155),
        i = 1,
        a = Object.prototype,
        s = a.hasOwnProperty;
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        for (var e = i(t), n = e.length; n--;) {
            var r = e[n],
                a = t[r];
            e[n] = [r, a, o(a)]
        }
        return e
    }
    var o = n(106),
        i = n(53);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        var e = a.call(t, u),
            n = t[u];
        try { t[u] = void 0; var r = !0 } catch (t) {}
        var o = s.call(t);
        return r && (e ? t[u] = n : delete t[u]), o
    }
    var o = n(31),
        i = Object.prototype,
        a = i.hasOwnProperty,
        s = i.toString,
        u = o ? o.toStringTag : void 0;
    t.exports = r
}, function(t, e) {
    function n(t, e) { return null == t ? void 0 : t[e] }
    t.exports = n
}, function(t, e, n) {
    function r(t, e, n) {
        e = o(e, t);
        for (var r = -1, c = e.length, f = !1; ++r < c;) {
            var d = l(e[r]);
            if (!(f = null != t && n(t, d))) break;
            t = t[d]
        }
        return f || ++r != c ? f : !!(c = null == t ? 0 : t.length) && u(c) && s(d, c) && (a(t) || i(t))
    }
    var o = n(82),
        i = n(75),
        a = n(6),
        s = n(61),
        u = n(76),
        l = n(44);
    t.exports = r
}, function(t, e, n) {
    function r() { this.__data__ = o ? o(null) : {}, this.size = 0 }
    var o = n(52);
    t.exports = r
}, function(t, e) {
    function n(t) { var e = this.has(t) && delete this.__data__[t]; return this.size -= e ? 1 : 0, e }
    t.exports = n
}, function(t, e, n) {
    function r(t) { var e = this.__data__; if (o) { var n = e[t]; return n === i ? void 0 : n } return s.call(e, t) ? e[t] : void 0 }
    var o = n(52),
        i = "__lodash_hash_undefined__",
        a = Object.prototype,
        s = a.hasOwnProperty;
    t.exports = r
}, function(t, e, n) {
    function r(t) { var e = this.__data__; return o ? void 0 !== e[t] : a.call(e, t) }
    var o = n(52),
        i = Object.prototype,
        a = i.hasOwnProperty;
    t.exports = r
}, function(t, e, n) {
    function r(t, e) { var n = this.__data__; return this.size += this.has(t) ? 0 : 1, n[t] = o && void 0 === e ? i : e, this }
    var o = n(52),
        i = "__lodash_hash_undefined__";
    t.exports = r
}, function(t, e, n) {
    function r(t) { return a(t) || i(t) || !!(s && t && t[s]) }
    var o = n(31),
        i = n(75),
        a = n(6),
        s = o ? o.isConcatSpreadable : void 0;
    t.exports = r
}, function(t, e) {
    function n(t) { var e = typeof t; return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t }
    t.exports = n
}, function(t, e, n) {
    function r(t) { return !!i && i in t }
    var o = n(201),
        i = function() { var t = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || ""); return t ? "Symbol(src)_1." + t : "" }();
    t.exports = r
}, function(t, e) {
    function n() { this.__data__ = [], this.size = 0 }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        var e = this.__data__,
            n = o(e, t);
        return !(n < 0) && (n == e.length - 1 ? e.pop() : a.call(e, n, 1), --this.size, !0)
    }
    var o = n(50),
        i = Array.prototype,
        a = i.splice;
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        var e = this.__data__,
            n = o(e, t);
        return n < 0 ? void 0 : e[n][1]
    }
    var o = n(50);
    t.exports = r
}, function(t, e, n) {
    function r(t) { return o(this.__data__, t) > -1 }
    var o = n(50);
    t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        var n = this.__data__,
            r = o(n, t);
        return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
    }
    var o = n(50);
    t.exports = r
}, function(t, e, n) {
    function r() { this.size = 0, this.__data__ = { hash: new o, map: new(a || i), string: new o } }
    var o = n(176),
        i = n(49),
        a = n(72);
    t.exports = r
}, function(t, e, n) {
    function r(t) { var e = o(this, t).delete(t); return this.size -= e ? 1 : 0, e }
    var o = n(51);
    t.exports = r
}, function(t, e, n) {
    function r(t) { return o(this, t).get(t) }
    var o = n(51);
    t.exports = r
}, function(t, e, n) {
    function r(t) { return o(this, t).has(t) }
    var o = n(51);
    t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        var n = o(this, t),
            r = n.size;
        return n.set(t, e), this.size += n.size == r ? 0 : 1, this
    }
    var o = n(51);
    t.exports = r
}, function(t, e) {
    function n(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t, r) { n[++e] = [r, t] }), n
    }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        var e = o(t, function(t) { return n.size === i && n.clear(), t }),
            n = e.cache;
        return e
    }
    var o = n(241),
        i = 500;
    t.exports = r
}, function(t, e, n) {
    var r = n(156),
        o = r(Object.keys, Object);
    t.exports = o
}, function(t, e) {
    function n(t) { return o.call(t) }
    var r = Object.prototype,
        o = r.toString;
    t.exports = n
}, function(t, e) {
    function n(t) { return this.__data__.set(t, r), this }
    var r = "__lodash_hash_undefined__";
    t.exports = n
}, function(t, e) {
    function n(t) { return this.__data__.has(t) }
    t.exports = n
}, function(t, e) {
    function n(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t) { n[++e] = t }), n
    }
    t.exports = n
}, function(t, e) {
    function n(t) {
        var e = 0,
            n = 0;
        return function() {
            var a = i(),
                s = o - (a - n);
            if (n = a, s > 0) { if (++e >= r) return arguments[0] } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
    var r = 800,
        o = 16,
        i = Date.now;
    t.exports = n
}, function(t, e, n) {
    function r() { this.__data__ = new o, this.size = 0 }
    var o = n(49);
    t.exports = r
}, function(t, e) {
    function n(t) {
        var e = this.__data__,
            n = e.delete(t);
        return this.size = e.size, n
    }
    t.exports = n
}, function(t, e) {
    function n(t) { return this.__data__.get(t) }
    t.exports = n
}, function(t, e) {
    function n(t) { return this.__data__.has(t) }
    t.exports = n
}, function(t, e, n) {
    function r(t, e) {
        var n = this.__data__;
        if (n instanceof o) {
            var r = n.__data__;
            if (!i || r.length < s - 1) return r.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new a(r)
        }
        return n.set(t, e), this.size = n.size, this
    }
    var o = n(49),
        i = n(72),
        a = n(73),
        s = 200;
    t.exports = r
}, function(t, e, n) {
    var r = n(227),
        o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        a = r(function(t) { var e = []; return 46 === t.charCodeAt(0) && e.push(""), t.replace(o, function(t, n, r, o) { e.push(r ? o.replace(i, "$1") : n || t) }), e });
    t.exports = a
}, function(t, e) {
    function n(t) { return function() { return t } }
    t.exports = n
}, function(t, e, n) {
    function r(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);
        var n = function() {
            var r = arguments,
                o = e ? e.apply(this, r) : r[0],
                i = n.cache;
            if (i.has(o)) return i.get(o);
            var a = t.apply(this, r);
            return n.cache = i.set(o, a) || i, a
        };
        return n.cache = new(r.Cache || o), n
    }
    var o = n(73),
        i = "Expected a function";
    r.Cache = o, t.exports = r
}, function(t, e, n) {
    function r(t) { return a(t) ? o(s(t)) : i(t) }
    var o = n(194),
        i = n(195),
        a = n(74),
        s = n(44);
    t.exports = r
}, function(t, e, n) {
    var r = n(184),
        o = n(320),
        i = n(196),
        a = n(136),
        s = i(function(t, e) { if (null == t) return []; var n = e.length; return n > 1 && a(t, e[0], e[1]) ? e = [] : n > 2 && a(e[0], e[1], e[2]) && (e = [e[0]]), o(t, r(e, 1), []) });
    t.exports = s
}, function(t, e) {
    function n() { return !1 }
    t.exports = n
}, function(t, e, n) {
    function r(t) { if (!t) return 0 === t ? t : 0; if ((t = o(t)) === i || t === -i) { return (t < 0 ? -1 : 1) * a } return t === t ? t : 0 }
    var o = n(139),
        i = 1 / 0,
        a = 1.7976931348623157e308;
    t.exports = r
}, , , , , , function(t, e, n) { t.exports = n(277) }, , , function(t, e, n) {
    "use strict";

    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

    function i(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function a(t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        t.margin(12).innerTickLength(5).endTickLength(5).tickLabelPadding(5), e.margin(12).innerTickLength(0).endTickLength(0).tickLabelPadding(5).showEndTickLabels(!0).addClass("hide-baseline").formatter(n.i(h.h)(r.isPercentage)), e._hideOverflowingTickLabels = function() { return null }
    }
    Object.defineProperty(e, "__esModule", { value: !0 }), n.d(e, "DatagovsgSimplePie", function() { return p }), n.d(e, "DatagovsgSimpleBar", function() { return m }), n.d(e, "DatagovsgHorizontalBar", function() { return v }), n.d(e, "DatagovsgGroupedBar", function() { return y }), n.d(e, "DatagovsgStackedBar", function() { return _ }), n.d(e, "DatagovsgLine", function() { return g });
    var s = n(306),
        u = n(305),
        l = n(303),
        c = n(307),
        f = n(304),
        d = n(144),
        h = n(95);
    n.d(e, "SimplePie", function() { return s.a }), n.d(e, "SimpleBar", function() { return u.a }), n.d(e, "GroupedBar", function() { return l.a }), n.d(e, "StackedBar", function() { return c.a }), n.d(e, "MultipleLine", function() { return f.a });
    var p = function(t) {
            function e(t) { r(this, e), t = Object.assign({ colorScale: n.i(h.c)() }, t); var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)); return n.i(d.setupOuterLabel)(i, { labelFormatter: function(t) { return t.label } }), i }
            return i(e, t), e
        }(s.a),
        m = function(t) {
            function e(t) { r(this, e), t = Object.assign({ scale: n.i(h.d)(), categoryScale: t.isTimeSeries ? n.i(h.e)() : n.i(h.f)(), colorScale: n.i(h.g)(), showGridlines: !0 }, t); var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)); return n.i(d.downsampleTicks)(i), n.i(d.customizeTimeAxis)(i, t.isTimeSeries), a(i.xAxis, i.yAxis, t), i }
            return i(e, t), e
        }(u.a),
        v = function(t) {
            function e(t) { r(this, e), t = Object.assign({ orientation: "h", sorted: "d", scale: n.i(h.d)(), categoryScale: n.i(h.f)(), colorScale: n.i(h.g)(), showGridlines: !0 }, t); var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)); return a(i.yAxis, i.xAxis, t), i.xAxis.tickLabelPadding(0), i }
            return i(e, t), e
        }(u.a),
        y = function(t) {
            function e(t) { r(this, e), t = Object.assign({ scale: n.i(h.d)(), categoryScale: t.isTimeSeries ? n.i(h.e)() : n.i(h.f)(), colorScale: n.i(h.c)(), showGridlines: !0 }, t); var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)); return n.i(d.downsampleTicks)(i), n.i(d.removeInnerPadding)(i), n.i(d.customizeTimeAxis)(i, t.isTimeSeries), a(i.xAxis, i.yAxis, t), i }
            return i(e, t), e
        }(l.a),
        _ = function(t) {
            function e(t) { r(this, e), t = Object.assign({ scale: n.i(h.d)(), categoryScale: t.isTimeSeries ? n.i(h.e)() : n.i(h.f)(), colorScale: n.i(h.c)(), showGridlines: !0 }, t); var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)); return n.i(d.downsampleTicks)(i), n.i(d.removeInnerPadding)(i), n.i(d.customizeTimeAxis)(i, t.isTimeSeries), a(i.xAxis, i.yAxis, t), i }
            return i(e, t), e
        }(c.a),
        g = function(t) {
            function e(t) { r(this, e), t = Object.assign({ yScale: n.i(h.d)(), xScale: t.isTimeSeries ? n.i(h.e)() : n.i(h.f)(), colorScale: n.i(h.c)(), showYgridlines: !0, guideLine: "v" }, t); var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)); return n.i(d.downsampleTicks)(i), n.i(d.customizeTimeAxis)(i, t.isTimeSeries), a(i.xAxis, i.yAxis, t), i }
            return i(e, t), e
        }(f.a)
}, function(t, e, n) {
    (function(t) {
        ! function(e, n) { t.exports = n() }(0, function() {
            "use strict";

            function e() { return Tr.apply(null, arguments) }

            function n(t) { return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t) }

            function r(t) { return null != t && "[object Object]" === Object.prototype.toString.call(t) }

            function o(t) {
                if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
                var e;
                for (e in t)
                    if (t.hasOwnProperty(e)) return !1;
                return !0
            }

            function i(t) { return void 0 === t }

            function a(t) { return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t) }

            function s(t) { return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t) }

            function u(t, e) { var n, r = []; for (n = 0; n < t.length; ++n) r.push(e(t[n], n)); return r }

            function l(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }

            function c(t, e) { for (var n in e) l(e, n) && (t[n] = e[n]); return l(e, "toString") && (t.toString = e.toString), l(e, "valueOf") && (t.valueOf = e.valueOf), t }

            function f(t, e, n, r) { return Se(t, e, n, r, !0).utc() }

            function d() { return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 } }

            function h(t) { return null == t._pf && (t._pf = d()), t._pf }

            function p(t) {
                if (null == t._isValid) {
                    var e = h(t),
                        n = Mr.call(e.parsedDateParts, function(t) { return null != t }),
                        r = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
                    if (t._strict && (r = r && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return r;
                    t._isValid = r
                }
                return t._isValid
            }

            function m(t) { var e = f(NaN); return null != t ? c(h(e), t) : h(e).userInvalidated = !0, e }

            function v(t, e) {
                var n, r, o;
                if (i(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), i(e._i) || (t._i = e._i), i(e._f) || (t._f = e._f), i(e._l) || (t._l = e._l), i(e._strict) || (t._strict = e._strict), i(e._tzm) || (t._tzm = e._tzm), i(e._isUTC) || (t._isUTC = e._isUTC), i(e._offset) || (t._offset = e._offset), i(e._pf) || (t._pf = h(e)), i(e._locale) || (t._locale = e._locale), Dr.length > 0)
                    for (n = 0; n < Dr.length; n++) r = Dr[n], o = e[r], i(o) || (t[r] = o);
                return t
            }

            function y(t) { v(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === Yr && (Yr = !0, e.updateOffset(this), Yr = !1) }

            function _(t) { return t instanceof y || null != t && null != t._isAMomentObject }

            function g(t) { return t < 0 ? Math.ceil(t) || 0 : Math.floor(t) }

            function b(t) {
                var e = +t,
                    n = 0;
                return 0 !== e && isFinite(e) && (n = g(e)), n
            }

            function w(t, e, n) {
                var r, o = Math.min(t.length, e.length),
                    i = Math.abs(t.length - e.length),
                    a = 0;
                for (r = 0; r < o; r++)(n && t[r] !== e[r] || !n && b(t[r]) !== b(e[r])) && a++;
                return a + i
            }

            function x(t) {!1 === e.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t) }

            function P(t, n) {
                var r = !0;
                return c(function() {
                    if (null != e.deprecationHandler && e.deprecationHandler(null, t), r) {
                        for (var o, i = [], a = 0; a < arguments.length; a++) {
                            if (o = "", "object" == typeof arguments[a]) {
                                o += "\n[" + a + "] ";
                                for (var s in arguments[0]) o += s + ": " + arguments[0][s] + ", ";
                                o = o.slice(0, -2)
                            } else o = arguments[a];
                            i.push(o)
                        }
                        x(t + "\nArguments: " + Array.prototype.slice.call(i).join("") + "\n" + (new Error).stack), r = !1
                    }
                    return n.apply(this, arguments)
                }, n)
            }

            function S(t, n) { null != e.deprecationHandler && e.deprecationHandler(t, n), jr[t] || (x(n), jr[t] = !0) }

            function k(t) { return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t) }

            function O(t) {
                var e, n;
                for (n in t) e = t[n], k(e) ? this[n] = e : this["_" + n] = e;
                this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }

            function T(t, e) { var n, o = c({}, t); for (n in e) l(e, n) && (r(t[n]) && r(e[n]) ? (o[n] = {}, c(o[n], t[n]), c(o[n], e[n])) : null != e[n] ? o[n] = e[n] : delete o[n]); for (n in t) l(t, n) && !l(e, n) && r(t[n]) && (o[n] = c({}, o[n])); return o }

            function M(t) { null != t && this.set(t) }

            function D(t, e, n) { var r = this._calendar[t] || this._calendar.sameElse; return k(r) ? r.call(e, n) : r }

            function Y(t) {
                var e = this._longDateFormat[t],
                    n = this._longDateFormat[t.toUpperCase()];
                return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) { return t.slice(1) }), this._longDateFormat[t])
            }

            function j() { return this._invalidDate }

            function C(t) { return this._ordinal.replace("%d", t) }

            function A(t, e, n, r) { var o = this._relativeTime[n]; return k(o) ? o(t, e, n, r) : o.replace(/%d/i, t) }

            function E(t, e) { var n = this._relativeTime[t > 0 ? "future" : "past"]; return k(n) ? n(e) : n.replace(/%s/i, e) }

            function L(t, e) {
                var n = t.toLowerCase();
                Ir[n] = Ir[n + "s"] = Ir[e] = t
            }

            function R(t) { return "string" == typeof t ? Ir[t] || Ir[t.toLowerCase()] : void 0 }

            function I(t) { var e, n, r = {}; for (n in t) l(t, n) && (e = R(n)) && (r[e] = t[n]); return r }

            function F(t, e) { Fr[t] = e }

            function N(t) { var e = []; for (var n in t) e.push({ unit: n, priority: Fr[n] }); return e.sort(function(t, e) { return t.priority - e.priority }), e }

            function U(t, e, n) {
                var r = "" + Math.abs(t),
                    o = e - r.length;
                return (t >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + r
            }

            function W(t, e, n, r) { var o = r; "string" == typeof r && (o = function() { return this[r]() }), t && (Hr[t] = o), e && (Hr[e[0]] = function() { return U(o.apply(this, arguments), e[1], e[2]) }), n && (Hr[n] = function() { return this.localeData().ordinal(o.apply(this, arguments), t) }) }

            function H(t) { return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "") }

            function G(t) { var e, n, r = t.match(Nr); for (e = 0, n = r.length; e < n; e++) Hr[r[e]] ? r[e] = Hr[r[e]] : r[e] = H(r[e]); return function(e) { var o, i = ""; for (o = 0; o < n; o++) i += k(r[o]) ? r[o].call(e, t) : r[o]; return i } }

            function z(t, e) { return t.isValid() ? (e = V(e, t.localeData()), Wr[e] = Wr[e] || G(e), Wr[e](t)) : t.localeData().invalidDate() }

            function V(t, e) {
                function n(t) { return e.longDateFormat(t) || t }
                var r = 5;
                for (Ur.lastIndex = 0; r >= 0 && Ur.test(t);) t = t.replace(Ur, n), Ur.lastIndex = 0, r -= 1;
                return t
            }

            function B(t, e, n) { ao[t] = k(e) ? e : function(t, r) { return t && n ? n : e } }

            function $(t, e) { return l(ao, t) ? ao[t](e._strict, e._locale) : new RegExp(Z(t)) }

            function Z(t) { return q(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, r, o) { return e || n || r || o })) }

            function q(t) { return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") }

            function X(t, e) { var n, r = e; for ("string" == typeof t && (t = [t]), a(e) && (r = function(t, n) { n[e] = b(t) }), n = 0; n < t.length; n++) so[t[n]] = r }

            function J(t, e) { X(t, function(t, n, r, o) { r._w = r._w || {}, e(t, r._w, r, o) }) }

            function Q(t, e, n) { null != e && l(so, t) && so[t](e, n._a, n, t) }

            function K(t) { return tt(t) ? 366 : 365 }

            function tt(t) { return t % 4 == 0 && t % 100 != 0 || t % 400 == 0 }

            function et() { return tt(this.year()) }

            function nt(t, n) { return function(r) { return null != r ? (ot(this, t, r), e.updateOffset(this, n), this) : rt(this, t) } }

            function rt(t, e) { return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN }

            function ot(t, e, n) { t.isValid() && !isNaN(n) && ("FullYear" === e && tt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](n, t.month(), ut(n, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n)) }

            function it(t) { return t = R(t), k(this[t]) ? this[t]() : this }

            function at(t, e) { if ("object" == typeof t) { t = I(t); for (var n = N(t), r = 0; r < n.length; r++) this[n[r].unit](t[n[r].unit]) } else if (t = R(t), k(this[t])) return this[t](e); return this }

            function st(t, e) { return (t % e + e) % e }

            function ut(t, e) { if (isNaN(t) || isNaN(e)) return NaN; var n = st(e, 12); return t += (e - n) / 12, 1 === n ? tt(t) ? 29 : 28 : 31 - n % 7 % 2 }

            function lt(t, e) { return t ? n(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || bo).test(e) ? "format" : "standalone"][t.month()] : n(this._months) ? this._months : this._months.standalone }

            function ct(t, e) { return t ? n(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[bo.test(e) ? "format" : "standalone"][t.month()] : n(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }

            function ft(t, e, n) {
                var r, o, i, a = t.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) i = f([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
                return n ? "MMM" === e ? (o = _o.call(this._shortMonthsParse, a), -1 !== o ? o : null) : (o = _o.call(this._longMonthsParse, a), -1 !== o ? o : null) : "MMM" === e ? -1 !== (o = _o.call(this._shortMonthsParse, a)) ? o : (o = _o.call(this._longMonthsParse, a), -1 !== o ? o : null) : -1 !== (o = _o.call(this._longMonthsParse, a)) ? o : (o = _o.call(this._shortMonthsParse, a), -1 !== o ? o : null)
            }

            function dt(t, e, n) { var r, o, i; if (this._monthsParseExact) return ft.call(this, t, e, n); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) { if (o = f([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(o, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(o, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (i = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[r].test(t)) return r; if (n && "MMM" === e && this._shortMonthsParse[r].test(t)) return r; if (!n && this._monthsParse[r].test(t)) return r } }

            function ht(t, e) {
                var n;
                if (!t.isValid()) return t;
                if ("string" == typeof e)
                    if (/^\d+$/.test(e)) e = b(e);
                    else if (e = t.localeData().monthsParse(e), !a(e)) return t;
                return n = Math.min(t.date(), ut(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
            }

            function pt(t) { return null != t ? (ht(this, t), e.updateOffset(this, !0), this) : rt(this, "Month") }

            function mt() { return ut(this.year(), this.month()) }

            function vt(t) { return this._monthsParseExact ? (l(this, "_monthsRegex") || _t.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = Po), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex) }

            function yt(t) { return this._monthsParseExact ? (l(this, "_monthsRegex") || _t.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = So), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex) }

            function _t() {
                function t(t, e) { return e.length - t.length }
                var e, n, r = [],
                    o = [],
                    i = [];
                for (e = 0; e < 12; e++) n = f([2e3, e]), r.push(this.monthsShort(n, "")), o.push(this.months(n, "")), i.push(this.months(n, "")), i.push(this.monthsShort(n, ""));
                for (r.sort(t), o.sort(t), i.sort(t), e = 0; e < 12; e++) r[e] = q(r[e]), o[e] = q(o[e]);
                for (e = 0; e < 24; e++) i[e] = q(i[e]);
                this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
            }

            function gt(t, e, n, r, o, i, a) { var s = new Date(t, e, n, r, o, i, a); return t < 100 && t >= 0 && isFinite(s.getFullYear()) && s.setFullYear(t), s }

            function bt(t) { var e = new Date(Date.UTC.apply(null, arguments)); return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e }

            function wt(t, e, n) { var r = 7 + e - n; return -(7 + bt(t, 0, r).getUTCDay() - e) % 7 + r - 1 }

            function xt(t, e, n, r, o) {
                var i, a, s = (7 + n - r) % 7,
                    u = wt(t, r, o),
                    l = 1 + 7 * (e - 1) + s + u;
                return l <= 0 ? (i = t - 1, a = K(i) + l) : l > K(t) ? (i = t + 1, a = l - K(t)) : (i = t, a = l), { year: i, dayOfYear: a }
            }

            function Pt(t, e, n) {
                var r, o, i = wt(t.year(), e, n),
                    a = Math.floor((t.dayOfYear() - i - 1) / 7) + 1;
                return a < 1 ? (o = t.year() - 1, r = a + St(o, e, n)) : a > St(t.year(), e, n) ? (r = a - St(t.year(), e, n), o = t.year() + 1) : (o = t.year(), r = a), { week: r, year: o }
            }

            function St(t, e, n) {
                var r = wt(t, e, n),
                    o = wt(t + 1, e, n);
                return (K(t) - r + o) / 7
            }

            function kt(t) { return Pt(t, this._week.dow, this._week.doy).week }

            function Ot() { return this._week.dow }

            function Tt() { return this._week.doy }

            function Mt(t) { var e = this.localeData().week(this); return null == t ? e : this.add(7 * (t - e), "d") }

            function Dt(t) { var e = Pt(this, 1, 4).week; return null == t ? e : this.add(7 * (t - e), "d") }

            function Yt(t, e) { return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10) }

            function jt(t, e) { return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t }

            function Ct(t, e) { return t ? n(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : n(this._weekdays) ? this._weekdays : this._weekdays.standalone }

            function At(t) { return t ? this._weekdaysShort[t.day()] : this._weekdaysShort }

            function Et(t) { return t ? this._weekdaysMin[t.day()] : this._weekdaysMin }

            function Lt(t, e, n) {
                var r, o, i, a = t.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) i = f([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
                return n ? "dddd" === e ? (o = _o.call(this._weekdaysParse, a), -1 !== o ? o : null) : "ddd" === e ? (o = _o.call(this._shortWeekdaysParse, a), -1 !== o ? o : null) : (o = _o.call(this._minWeekdaysParse, a), -1 !== o ? o : null) : "dddd" === e ? -1 !== (o = _o.call(this._weekdaysParse, a)) ? o : -1 !== (o = _o.call(this._shortWeekdaysParse, a)) ? o : (o = _o.call(this._minWeekdaysParse, a), -1 !== o ? o : null) : "ddd" === e ? -1 !== (o = _o.call(this._shortWeekdaysParse, a)) ? o : -1 !== (o = _o.call(this._weekdaysParse, a)) ? o : (o = _o.call(this._minWeekdaysParse, a), -1 !== o ? o : null) : -1 !== (o = _o.call(this._minWeekdaysParse, a)) ? o : -1 !== (o = _o.call(this._weekdaysParse, a)) ? o : (o = _o.call(this._shortWeekdaysParse, a), -1 !== o ? o : null)
            }

            function Rt(t, e, n) { var r, o, i; if (this._weekdaysParseExact) return Lt.call(this, t, e, n); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) { if (o = f([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(o, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(o, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(o, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (i = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[r].test(t)) return r; if (n && "ddd" === e && this._shortWeekdaysParse[r].test(t)) return r; if (n && "dd" === e && this._minWeekdaysParse[r].test(t)) return r; if (!n && this._weekdaysParse[r].test(t)) return r } }

            function It(t) { if (!this.isValid()) return null != t ? this : NaN; var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != t ? (t = Yt(t, this.localeData()), this.add(t - e, "d")) : e }

            function Ft(t) { if (!this.isValid()) return null != t ? this : NaN; var e = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == t ? e : this.add(t - e, "d") }

            function Nt(t) { if (!this.isValid()) return null != t ? this : NaN; if (null != t) { var e = jt(t, this.localeData()); return this.day(this.day() % 7 ? e : e - 7) } return this.day() || 7 }

            function Ut(t) { return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Gt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Do), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex) }

            function Wt(t) { return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Gt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Yo), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }

            function Ht(t) { return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Gt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = jo), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }

            function Gt() {
                function t(t, e) { return e.length - t.length }
                var e, n, r, o, i, a = [],
                    s = [],
                    u = [],
                    l = [];
                for (e = 0; e < 7; e++) n = f([2e3, 1]).day(e), r = this.weekdaysMin(n, ""), o = this.weekdaysShort(n, ""), i = this.weekdays(n, ""), a.push(r), s.push(o), u.push(i), l.push(r), l.push(o), l.push(i);
                for (a.sort(t), s.sort(t), u.sort(t), l.sort(t), e = 0; e < 7; e++) s[e] = q(s[e]), u[e] = q(u[e]), l[e] = q(l[e]);
                this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
            }

            function zt() { return this.hours() % 12 || 12 }

            function Vt() { return this.hours() || 24 }

            function Bt(t, e) { W(t, 0, 0, function() { return this.localeData().meridiem(this.hours(), this.minutes(), e) }) }

            function $t(t, e) { return e._meridiemParse }

            function Zt(t) { return "p" === (t + "").toLowerCase().charAt(0) }

            function qt(t, e, n) { return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM" }

            function Xt(t) { return t ? t.toLowerCase().replace("_", "-") : t }

            function Jt(t) {
                for (var e, n, r, o, i = 0; i < t.length;) {
                    for (o = Xt(t[i]).split("-"), e = o.length, n = Xt(t[i + 1]), n = n ? n.split("-") : null; e > 0;) {
                        if (r = Qt(o.slice(0, e).join("-"))) return r;
                        if (n && n.length >= e && w(o, n, !0) >= e - 1) break;
                        e--
                    }
                    i++
                }
                return Co
            }

            function Qt(e) {
                var n = null;
                if (!Ro[e] && void 0 !== t && t && t.exports) try { n = Co._abbr;! function() { var t = new Error('Cannot find module "./locale"'); throw t.code = "MODULE_NOT_FOUND", t }(), Kt(n) } catch (t) {}
                return Ro[e]
            }

            function Kt(t, e) { var n; return t && (n = i(e) ? ne(t) : te(t, e), n ? Co = n : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), Co._abbr }

            function te(t, e) {
                if (null !== e) {
                    var n, r = Lo;
                    if (e.abbr = t, null != Ro[t]) S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = Ro[t]._config;
                    else if (null != e.parentLocale)
                        if (null != Ro[e.parentLocale]) r = Ro[e.parentLocale]._config;
                        else {
                            if (null == (n = Qt(e.parentLocale))) return Io[e.parentLocale] || (Io[e.parentLocale] = []), Io[e.parentLocale].push({ name: t, config: e }), null;
                            r = n._config
                        }
                    return Ro[t] = new M(T(r, e)), Io[t] && Io[t].forEach(function(t) { te(t.name, t.config) }), Kt(t), Ro[t]
                }
                return delete Ro[t], null
            }

            function ee(t, e) {
                if (null != e) {
                    var n, r, o = Lo;
                    r = Qt(t), null != r && (o = r._config), e = T(o, e), n = new M(e), n.parentLocale = Ro[t], Ro[t] = n, Kt(t)
                } else null != Ro[t] && (null != Ro[t].parentLocale ? Ro[t] = Ro[t].parentLocale : null != Ro[t] && delete Ro[t]);
                return Ro[t]
            }

            function ne(t) {
                var e;
                if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Co;
                if (!n(t)) {
                    if (e = Qt(t)) return e;
                    t = [t]
                }
                return Jt(t)
            }

            function re() { return Cr(Ro) }

            function oe(t) { var e, n = t._a; return n && -2 === h(t).overflow && (e = n[lo] < 0 || n[lo] > 11 ? lo : n[co] < 1 || n[co] > ut(n[uo], n[lo]) ? co : n[fo] < 0 || n[fo] > 24 || 24 === n[fo] && (0 !== n[ho] || 0 !== n[po] || 0 !== n[mo]) ? fo : n[ho] < 0 || n[ho] > 59 ? ho : n[po] < 0 || n[po] > 59 ? po : n[mo] < 0 || n[mo] > 999 ? mo : -1, h(t)._overflowDayOfYear && (e < uo || e > co) && (e = co), h(t)._overflowWeeks && -1 === e && (e = vo), h(t)._overflowWeekday && -1 === e && (e = yo), h(t).overflow = e), t }

            function ie(t, e, n) { return null != t ? t : null != e ? e : n }

            function ae(t) { var n = new Date(e.now()); return t._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()] }

            function se(t) {
                var e, n, r, o, i, a = [];
                if (!t._d) {
                    for (r = ae(t), t._w && null == t._a[co] && null == t._a[lo] && ue(t), null != t._dayOfYear && (i = ie(t._a[uo], r[uo]), (t._dayOfYear > K(i) || 0 === t._dayOfYear) && (h(t)._overflowDayOfYear = !0), n = bt(i, 0, t._dayOfYear), t._a[lo] = n.getUTCMonth(), t._a[co] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = a[e] = r[e];
                    for (; e < 7; e++) t._a[e] = a[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                    24 === t._a[fo] && 0 === t._a[ho] && 0 === t._a[po] && 0 === t._a[mo] && (t._nextDay = !0, t._a[fo] = 0), t._d = (t._useUTC ? bt : gt).apply(null, a), o = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[fo] = 24), t._w && void 0 !== t._w.d && t._w.d !== o && (h(t).weekdayMismatch = !0)
                }
            }

            function ue(t) {
                var e, n, r, o, i, a, s, u;
                if (e = t._w, null != e.GG || null != e.W || null != e.E) i = 1, a = 4, n = ie(e.GG, t._a[uo], Pt(ke(), 1, 4).year), r = ie(e.W, 1), ((o = ie(e.E, 1)) < 1 || o > 7) && (u = !0);
                else {
                    i = t._locale._week.dow, a = t._locale._week.doy;
                    var l = Pt(ke(), i, a);
                    n = ie(e.gg, t._a[uo], l.year), r = ie(e.w, l.week), null != e.d ? ((o = e.d) < 0 || o > 6) && (u = !0) : null != e.e ? (o = e.e + i, (e.e < 0 || e.e > 6) && (u = !0)) : o = i
                }
                r < 1 || r > St(n, i, a) ? h(t)._overflowWeeks = !0 : null != u ? h(t)._overflowWeekday = !0 : (s = xt(n, r, o, i, a), t._a[uo] = s.year, t._dayOfYear = s.dayOfYear)
            }

            function le(t) {
                var e, n, r, o, i, a, s = t._i,
                    u = Fo.exec(s) || No.exec(s);
                if (u) {
                    for (h(t).iso = !0, e = 0, n = Wo.length; e < n; e++)
                        if (Wo[e][1].exec(u[1])) { o = Wo[e][0], r = !1 !== Wo[e][2]; break }
                    if (null == o) return void(t._isValid = !1);
                    if (u[3]) {
                        for (e = 0, n = Ho.length; e < n; e++)
                            if (Ho[e][1].exec(u[3])) { i = (u[2] || " ") + Ho[e][0]; break }
                        if (null == i) return void(t._isValid = !1)
                    }
                    if (!r && null != i) return void(t._isValid = !1);
                    if (u[4]) {
                        if (!Uo.exec(u[4])) return void(t._isValid = !1);
                        a = "Z"
                    }
                    t._f = o + (i || "") + (a || ""), ye(t)
                } else t._isValid = !1
            }

            function ce(t, e, n, r, o, i) { var a = [fe(t), xo.indexOf(e), parseInt(n, 10), parseInt(r, 10), parseInt(o, 10)]; return i && a.push(parseInt(i, 10)), a }

            function fe(t) { var e = parseInt(t, 10); return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e }

            function de(t) { return t.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "") }

            function he(t, e, n) { if (t) { if (To.indexOf(t) !== new Date(e[0], e[1], e[2]).getDay()) return h(n).weekdayMismatch = !0, n._isValid = !1, !1 } return !0 }

            function pe(t, e, n) {
                if (t) return Vo[t];
                if (e) return 0;
                var r = parseInt(n, 10),
                    o = r % 100;
                return (r - o) / 100 * 60 + o
            }

            function me(t) {
                var e = zo.exec(de(t._i));
                if (e) {
                    var n = ce(e[4], e[3], e[2], e[5], e[6], e[7]);
                    if (!he(e[1], n, t)) return;
                    t._a = n, t._tzm = pe(e[8], e[9], e[10]), t._d = bt.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), h(t).rfc2822 = !0
                } else t._isValid = !1
            }

            function ve(t) {
                var n = Go.exec(t._i);
                if (null !== n) return void(t._d = new Date(+n[1]));
                le(t), !1 === t._isValid && (delete t._isValid, me(t), !1 === t._isValid && (delete t._isValid, e.createFromInputFallback(t)))
            }

            function ye(t) {
                if (t._f === e.ISO_8601) return void le(t);
                if (t._f === e.RFC_2822) return void me(t);
                t._a = [], h(t).empty = !0;
                var n, r, o, i, a, s = "" + t._i,
                    u = s.length,
                    l = 0;
                for (o = V(t._f, t._locale).match(Nr) || [], n = 0; n < o.length; n++) i = o[n], r = (s.match($(i, t)) || [])[0], r && (a = s.substr(0, s.indexOf(r)), a.length > 0 && h(t).unusedInput.push(a), s = s.slice(s.indexOf(r) + r.length), l += r.length), Hr[i] ? (r ? h(t).empty = !1 : h(t).unusedTokens.push(i), Q(i, r, t)) : t._strict && !r && h(t).unusedTokens.push(i);
                h(t).charsLeftOver = u - l, s.length > 0 && h(t).unusedInput.push(s), t._a[fo] <= 12 && !0 === h(t).bigHour && t._a[fo] > 0 && (h(t).bigHour = void 0), h(t).parsedDateParts = t._a.slice(0), h(t).meridiem = t._meridiem, t._a[fo] = _e(t._locale, t._a[fo], t._meridiem), se(t), oe(t)
            }

            function _e(t, e, n) { var r; return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (r = t.isPM(n), r && e < 12 && (e += 12), r || 12 !== e || (e = 0), e) : e }

            function ge(t) {
                var e, n, r, o, i;
                if (0 === t._f.length) return h(t).invalidFormat = !0, void(t._d = new Date(NaN));
                for (o = 0; o < t._f.length; o++) i = 0, e = v({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[o], ye(e), p(e) && (i += h(e).charsLeftOver, i += 10 * h(e).unusedTokens.length, h(e).score = i, (null == r || i < r) && (r = i, n = e));
                c(t, n || e)
            }

            function be(t) {
                if (!t._d) {
                    var e = I(t._i);
                    t._a = u([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) { return t && parseInt(t, 10) }), se(t)
                }
            }

            function we(t) { var e = new y(oe(xe(t))); return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e }

            function xe(t) {
                var e = t._i,
                    r = t._f;
                return t._locale = t._locale || ne(t._l), null === e || void 0 === r && "" === e ? m({ nullInput: !0 }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), _(e) ? new y(oe(e)) : (s(e) ? t._d = e : n(r) ? ge(t) : r ? ye(t) : Pe(t), p(t) || (t._d = null), t))
            }

            function Pe(t) {
                var o = t._i;
                i(o) ? t._d = new Date(e.now()) : s(o) ? t._d = new Date(o.valueOf()) : "string" == typeof o ? ve(t) : n(o) ? (t._a = u(o.slice(0), function(t) { return parseInt(t, 10) }), se(t)) : r(o) ? be(t) : a(o) ? t._d = new Date(o) : e.createFromInputFallback(t)
            }

            function Se(t, e, i, a, s) { var u = {}; return !0 !== i && !1 !== i || (a = i, i = void 0), (r(t) && o(t) || n(t) && 0 === t.length) && (t = void 0), u._isAMomentObject = !0, u._useUTC = u._isUTC = s, u._l = i, u._i = t, u._f = e, u._strict = a, we(u) }

            function ke(t, e, n, r) { return Se(t, e, n, r, !1) }

            function Oe(t, e) { var r, o; if (1 === e.length && n(e[0]) && (e = e[0]), !e.length) return ke(); for (r = e[0], o = 1; o < e.length; ++o) e[o].isValid() && !e[o][t](r) || (r = e[o]); return r }

            function Te() { return Oe("isBefore", [].slice.call(arguments, 0)) }

            function Me() { return Oe("isAfter", [].slice.call(arguments, 0)) }

            function De(t) {
                for (var e in t)
                    if (-1 === _o.call(qo, e) || null != t[e] && isNaN(t[e])) return !1;
                for (var n = !1, r = 0; r < qo.length; ++r)
                    if (t[qo[r]]) {
                        if (n) return !1;
                        parseFloat(t[qo[r]]) !== b(t[qo[r]]) && (n = !0)
                    }
                return !0
            }

            function Ye() { return this._isValid }

            function je() { return Xe(NaN) }

            function Ce(t) {
                var e = I(t),
                    n = e.year || 0,
                    r = e.quarter || 0,
                    o = e.month || 0,
                    i = e.week || e.isoWeek || 0,
                    a = e.day || 0,
                    s = e.hour || 0,
                    u = e.minute || 0,
                    l = e.second || 0,
                    c = e.millisecond || 0;
                this._isValid = De(e), this._milliseconds = +c + 1e3 * l + 6e4 * u + 1e3 * s * 60 * 60, this._days = +a + 7 * i, this._months = +o + 3 * r + 12 * n, this._data = {}, this._locale = ne(), this._bubble()
            }

            function Ae(t) { return t instanceof Ce }

            function Ee(t) { return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t) }

            function Le(t, e) {
                W(t, 0, 0, function() {
                    var t = this.utcOffset(),
                        n = "+";
                    return t < 0 && (t = -t, n = "-"), n + U(~~(t / 60), 2) + e + U(~~t % 60, 2)
                })
            }

            function Re(t, e) {
                var n = (e || "").match(t);
                if (null === n) return null;
                var r = n[n.length - 1] || [],
                    o = (r + "").match(Xo) || ["-", 0, 0],
                    i = 60 * o[1] + b(o[2]);
                return 0 === i ? 0 : "+" === o[0] ? i : -i
            }

            function Ie(t, n) { var r, o; return n._isUTC ? (r = n.clone(), o = (_(t) || s(t) ? t.valueOf() : ke(t).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + o), e.updateOffset(r, !1), r) : ke(t).local() }

            function Fe(t) { return 15 * -Math.round(t._d.getTimezoneOffset() / 15) }

            function Ne(t, n, r) { var o, i = this._offset || 0; if (!this.isValid()) return null != t ? this : NaN; if (null != t) { if ("string" == typeof t) { if (null === (t = Re(ro, t))) return this } else Math.abs(t) < 16 && !r && (t *= 60); return !this._isUTC && n && (o = Fe(this)), this._offset = t, this._isUTC = !0, null != o && this.add(o, "m"), i !== t && (!n || this._changeInProgress ? en(this, Xe(t - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this } return this._isUTC ? i : Fe(this) }

            function Ue(t, e) { return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset() }

            function We(t) { return this.utcOffset(0, t) }

            function He(t) { return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Fe(this), "m")), this }

            function Ge() {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) {
                    var t = Re(no, this._i);
                    null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
                }
                return this
            }

            function ze(t) { return !!this.isValid() && (t = t ? ke(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0) }

            function Ve() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }

            function Be() {
                if (!i(this._isDSTShifted)) return this._isDSTShifted;
                var t = {};
                if (v(t, this), t = xe(t), t._a) {
                    var e = t._isUTC ? f(t._a) : ke(t._a);
                    this._isDSTShifted = this.isValid() && w(t._a, e.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            }

            function $e() { return !!this.isValid() && !this._isUTC }

            function Ze() { return !!this.isValid() && this._isUTC }

            function qe() { return !!this.isValid() && (this._isUTC && 0 === this._offset) }

            function Xe(t, e) {
                var n, r, o, i = t,
                    s = null;
                return Ae(t) ? i = { ms: t._milliseconds, d: t._days, M: t._months } : a(t) ? (i = {}, e ? i[e] = t : i.milliseconds = t) : (s = Jo.exec(t)) ? (n = "-" === s[1] ? -1 : 1, i = { y: 0, d: b(s[co]) * n, h: b(s[fo]) * n, m: b(s[ho]) * n, s: b(s[po]) * n, ms: b(Ee(1e3 * s[mo])) * n }) : (s = Qo.exec(t)) ? (n = "-" === s[1] ? -1 : 1, i = { y: Je(s[2], n), M: Je(s[3], n), w: Je(s[4], n), d: Je(s[5], n), h: Je(s[6], n), m: Je(s[7], n), s: Je(s[8], n) }) : null == i ? i = {} : "object" == typeof i && ("from" in i || "to" in i) && (o = Ke(ke(i.from), ke(i.to)), i = {}, i.ms = o.milliseconds, i.M = o.months), r = new Ce(i), Ae(t) && l(t, "_locale") && (r._locale = t._locale), r
            }

            function Je(t, e) { var n = t && parseFloat(t.replace(",", ".")); return (isNaN(n) ? 0 : n) * e }

            function Qe(t, e) { var n = { milliseconds: 0, months: 0 }; return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n }

            function Ke(t, e) { var n; return t.isValid() && e.isValid() ? (e = Ie(e, t), t.isBefore(e) ? n = Qe(t, e) : (n = Qe(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 } }

            function tn(t, e) { return function(n, r) { var o, i; return null === r || isNaN(+r) || (S(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = n, n = r, r = i), n = "string" == typeof n ? +n : n, o = Xe(n, r), en(this, o, t), this } }

            function en(t, n, r, o) {
                var i = n._milliseconds,
                    a = Ee(n._days),
                    s = Ee(n._months);
                t.isValid() && (o = null == o || o, s && ht(t, rt(t, "Month") + s * r), a && ot(t, "Date", rt(t, "Date") + a * r), i && t._d.setTime(t._d.valueOf() + i * r), o && e.updateOffset(t, a || s))
            }

            function nn(t, e) { var n = t.diff(e, "days", !0); return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse" }

            function rn(t, n) {
                var r = t || ke(),
                    o = Ie(r, this).startOf("day"),
                    i = e.calendarFormat(this, o) || "sameElse",
                    a = n && (k(n[i]) ? n[i].call(this, r) : n[i]);
                return this.format(a || this.localeData().calendar(i, this, ke(r)))
            }

            function on() { return new y(this) }

            function an(t, e) { var n = _(t) ? t : ke(t); return !(!this.isValid() || !n.isValid()) && (e = R(e) || "millisecond", "millisecond" === e ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf()) }

            function sn(t, e) { var n = _(t) ? t : ke(t); return !(!this.isValid() || !n.isValid()) && (e = R(e) || "millisecond", "millisecond" === e ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf()) }

            function un(t, e, n, r) {
                var o = _(t) ? t : ke(t),
                    i = _(e) ? e : ke(e);
                return !!(this.isValid() && o.isValid() && i.isValid()) && (r = r || "()", ("(" === r[0] ? this.isAfter(o, n) : !this.isBefore(o, n)) && (")" === r[1] ? this.isBefore(i, n) : !this.isAfter(i, n)))
            }

            function ln(t, e) { var n, r = _(t) ? t : ke(t); return !(!this.isValid() || !r.isValid()) && (e = R(e) || "millisecond", "millisecond" === e ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf())) }

            function cn(t, e) { return this.isSame(t, e) || this.isAfter(t, e) }

            function fn(t, e) { return this.isSame(t, e) || this.isBefore(t, e) }

            function dn(t, e, n) {
                var r, o, i;
                if (!this.isValid()) return NaN;
                if (r = Ie(t, this), !r.isValid()) return NaN;
                switch (o = 6e4 * (r.utcOffset() - this.utcOffset()), e = R(e)) {
                    case "year":
                        i = hn(this, r) / 12;
                        break;
                    case "month":
                        i = hn(this, r);
                        break;
                    case "quarter":
                        i = hn(this, r) / 3;
                        break;
                    case "second":
                        i = (this - r) / 1e3;
                        break;
                    case "minute":
                        i = (this - r) / 6e4;
                        break;
                    case "hour":
                        i = (this - r) / 36e5;
                        break;
                    case "day":
                        i = (this - r - o) / 864e5;
                        break;
                    case "week":
                        i = (this - r - o) / 6048e5;
                        break;
                    default:
                        i = this - r
                }
                return n ? i : g(i)
            }

            function hn(t, e) {
                var n, r, o = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                    i = t.clone().add(o, "months");
                return e - i < 0 ? (n = t.clone().add(o - 1, "months"), r = (e - i) / (i - n)) : (n = t.clone().add(o + 1, "months"), r = (e - i) / (n - i)), -(o + r) || 0
            }

            function pn() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }

            function mn(t) {
                if (!this.isValid()) return null;
                var e = !0 !== t,
                    n = e ? this.clone().utc() : this;
                return n.year() < 0 || n.year() > 9999 ? z(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : k(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", z(n, "Z")) : z(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }

            function vn() {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var t = "moment",
                    e = "";
                this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
                var n = "[" + t + '("]',
                    r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                    o = e + '[")]';
                return this.format(n + r + "-MM-DD[T]HH:mm:ss.SSS" + o)
            }

            function yn(t) { t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat); var n = z(this, t); return this.localeData().postformat(n) }

            function _n(t, e) { return this.isValid() && (_(t) && t.isValid() || ke(t).isValid()) ? Xe({ to: this, from: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate() }

            function gn(t) { return this.from(ke(), t) }

            function bn(t, e) { return this.isValid() && (_(t) && t.isValid() || ke(t).isValid()) ? Xe({ from: this, to: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate() }

            function wn(t) { return this.to(ke(), t) }

            function xn(t) { var e; return void 0 === t ? this._locale._abbr : (e = ne(t), null != e && (this._locale = e), this) }

            function Pn() { return this._locale }

            function Sn(t) {
                switch (t = R(t)) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                    case "date":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
            }

            function kn(t) { return void 0 === (t = R(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms")) }

            function On() { return this._d.valueOf() - 6e4 * (this._offset || 0) }

            function Tn() { return Math.floor(this.valueOf() / 1e3) }

            function Mn() { return new Date(this.valueOf()) }

            function Dn() { var t = this; return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()] }

            function Yn() { var t = this; return { years: t.year(), months: t.month(), date: t.date(), hours: t.hours(), minutes: t.minutes(), seconds: t.seconds(), milliseconds: t.milliseconds() } }

            function jn() { return this.isValid() ? this.toISOString() : null }

            function Cn() { return p(this) }

            function An() { return c({}, h(this)) }

            function En() { return h(this).overflow }

            function Ln() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }

            function Rn(t, e) { W(0, [t, t.length], 0, e) }

            function In(t) { return Wn.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }

            function Fn(t) { return Wn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4) }

            function Nn() { return St(this.year(), 1, 4) }

            function Un() { var t = this.localeData()._week; return St(this.year(), t.dow, t.doy) }

            function Wn(t, e, n, r, o) { var i; return null == t ? Pt(this, r, o).year : (i = St(t, r, o), e > i && (e = i), Hn.call(this, t, e, n, r, o)) }

            function Hn(t, e, n, r, o) {
                var i = xt(t, e, n, r, o),
                    a = bt(i.year, 0, i.dayOfYear);
                return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
            }

            function Gn(t) { return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3) }

            function zn(t) { var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == t ? e : this.add(t - e, "d") }

            function Vn(t, e) { e[mo] = b(1e3 * ("0." + t)) }

            function Bn() { return this._isUTC ? "UTC" : "" }

            function $n() { return this._isUTC ? "Coordinated Universal Time" : "" }

            function Zn(t) { return ke(1e3 * t) }

            function qn() { return ke.apply(null, arguments).parseZone() }

            function Xn(t) { return t }

            function Jn(t, e, n, r) {
                var o = ne(),
                    i = f().set(r, e);
                return o[n](i, t)
            }

            function Qn(t, e, n) { if (a(t) && (e = t, t = void 0), t = t || "", null != e) return Jn(t, e, n, "month"); var r, o = []; for (r = 0; r < 12; r++) o[r] = Jn(t, r, n, "month"); return o }

            function Kn(t, e, n, r) {
                "boolean" == typeof t ? (a(e) && (n = e, e = void 0), e = e || "") : (e = t, n = e, t = !1, a(e) && (n = e, e = void 0), e = e || "");
                var o = ne(),
                    i = t ? o._week.dow : 0;
                if (null != n) return Jn(e, (n + i) % 7, r, "day");
                var s, u = [];
                for (s = 0; s < 7; s++) u[s] = Jn(e, (s + i) % 7, r, "day");
                return u
            }

            function tr(t, e) { return Qn(t, e, "months") }

            function er(t, e) { return Qn(t, e, "monthsShort") }

            function nr(t, e, n) { return Kn(t, e, n, "weekdays") }

            function rr(t, e, n) { return Kn(t, e, n, "weekdaysShort") }

            function or(t, e, n) { return Kn(t, e, n, "weekdaysMin") }

            function ir() { var t = this._data; return this._milliseconds = li(this._milliseconds), this._days = li(this._days), this._months = li(this._months), t.milliseconds = li(t.milliseconds), t.seconds = li(t.seconds), t.minutes = li(t.minutes), t.hours = li(t.hours), t.months = li(t.months), t.years = li(t.years), this }

            function ar(t, e, n, r) { var o = Xe(e, n); return t._milliseconds += r * o._milliseconds, t._days += r * o._days, t._months += r * o._months, t._bubble() }

            function sr(t, e) { return ar(this, t, e, 1) }

            function ur(t, e) { return ar(this, t, e, -1) }

            function lr(t) { return t < 0 ? Math.floor(t) : Math.ceil(t) }

            function cr() {
                var t, e, n, r, o, i = this._milliseconds,
                    a = this._days,
                    s = this._months,
                    u = this._data;
                return i >= 0 && a >= 0 && s >= 0 || i <= 0 && a <= 0 && s <= 0 || (i += 864e5 * lr(dr(s) + a), a = 0, s = 0), u.milliseconds = i % 1e3, t = g(i / 1e3), u.seconds = t % 60, e = g(t / 60), u.minutes = e % 60, n = g(e / 60), u.hours = n % 24, a += g(n / 24), o = g(fr(a)), s += o, a -= lr(dr(o)), r = g(s / 12), s %= 12, u.days = a, u.months = s, u.years = r, this
            }

            function fr(t) { return 4800 * t / 146097 }

            function dr(t) { return 146097 * t / 4800 }

            function hr(t) {
                if (!this.isValid()) return NaN;
                var e, n, r = this._milliseconds;
                if ("month" === (t = R(t)) || "year" === t) return e = this._days + r / 864e5, n = this._months + fr(e), "month" === t ? n : n / 12;
                switch (e = this._days + Math.round(dr(this._months)), t) {
                    case "week":
                        return e / 7 + r / 6048e5;
                    case "day":
                        return e + r / 864e5;
                    case "hour":
                        return 24 * e + r / 36e5;
                    case "minute":
                        return 1440 * e + r / 6e4;
                    case "second":
                        return 86400 * e + r / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * e) + r;
                    default:
                        throw new Error("Unknown unit " + t)
                }
            }

            function pr() { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * b(this._months / 12) : NaN }

            function mr(t) { return function() { return this.as(t) } }

            function vr() { return Xe(this) }

            function yr(t) { return t = R(t), this.isValid() ? this[t + "s"]() : NaN }

            function _r(t) { return function() { return this.isValid() ? this._data[t] : NaN } }

            function gr() { return g(this.days() / 7) }

            function br(t, e, n, r, o) { return o.relativeTime(e || 1, !!n, t, r) }

            function wr(t, e, n) {
                var r = Xe(t).abs(),
                    o = ki(r.as("s")),
                    i = ki(r.as("m")),
                    a = ki(r.as("h")),
                    s = ki(r.as("d")),
                    u = ki(r.as("M")),
                    l = ki(r.as("y")),
                    c = o <= Oi.ss && ["s", o] || o < Oi.s && ["ss", o] || i <= 1 && ["m"] || i < Oi.m && ["mm", i] || a <= 1 && ["h"] || a < Oi.h && ["hh", a] || s <= 1 && ["d"] || s < Oi.d && ["dd", s] || u <= 1 && ["M"] || u < Oi.M && ["MM", u] || l <= 1 && ["y"] || ["yy", l];
                return c[2] = e, c[3] = +t > 0, c[4] = n, br.apply(null, c)
            }

            function xr(t) { return void 0 === t ? ki : "function" == typeof t && (ki = t, !0) }

            function Pr(t, e) { return void 0 !== Oi[t] && (void 0 === e ? Oi[t] : (Oi[t] = e, "s" === t && (Oi.ss = e - 1), !0)) }

            function Sr(t) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e = this.localeData(),
                    n = wr(this, !t, e);
                return t && (n = e.pastFuture(+this, n)), e.postformat(n)
            }

            function kr(t) { return (t > 0) - (t < 0) || +t }

            function Or() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var t, e, n, r = Ti(this._milliseconds) / 1e3,
                    o = Ti(this._days),
                    i = Ti(this._months);
                t = g(r / 60), e = g(t / 60), r %= 60, t %= 60, n = g(i / 12), i %= 12;
                var a = n,
                    s = i,
                    u = o,
                    l = e,
                    c = t,
                    f = r ? r.toFixed(3).replace(/\.?0+$/, "") : "",
                    d = this.asSeconds();
                if (!d) return "P0D";
                var h = d < 0 ? "-" : "",
                    p = kr(this._months) !== kr(d) ? "-" : "",
                    m = kr(this._days) !== kr(d) ? "-" : "",
                    v = kr(this._milliseconds) !== kr(d) ? "-" : "";
                return h + "P" + (a ? p + a + "Y" : "") + (s ? p + s + "M" : "") + (u ? m + u + "D" : "") + (l || c || f ? "T" : "") + (l ? v + l + "H" : "") + (c ? v + c + "M" : "") + (f ? v + f + "S" : "")
            }
            var Tr, Mr;
            Mr = Array.prototype.some ? Array.prototype.some : function(t) {
                for (var e = Object(this), n = e.length >>> 0, r = 0; r < n; r++)
                    if (r in e && t.call(this, e[r], r, e)) return !0;
                return !1
            };
            var Dr = e.momentProperties = [],
                Yr = !1,
                jr = {};
            e.suppressDeprecationWarnings = !1, e.deprecationHandler = null;
            var Cr;
            Cr = Object.keys ? Object.keys : function(t) { var e, n = []; for (e in t) l(t, e) && n.push(e); return n };
            var Ar = { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
                Er = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" },
                Lr = /\d{1,2}/,
                Rr = { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
                Ir = {},
                Fr = {},
                Nr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                Ur = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                Wr = {},
                Hr = {},
                Gr = /\d/,
                zr = /\d\d/,
                Vr = /\d{3}/,
                Br = /\d{4}/,
                $r = /[+-]?\d{6}/,
                Zr = /\d\d?/,
                qr = /\d\d\d\d?/,
                Xr = /\d\d\d\d\d\d?/,
                Jr = /\d{1,3}/,
                Qr = /\d{1,4}/,
                Kr = /[+-]?\d{1,6}/,
                to = /\d+/,
                eo = /[+-]?\d+/,
                no = /Z|[+-]\d\d:?\d\d/gi,
                ro = /Z|[+-]\d\d(?::?\d\d)?/gi,
                oo = /[+-]?\d+(\.\d{1,3})?/,
                io = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                ao = {},
                so = {},
                uo = 0,
                lo = 1,
                co = 2,
                fo = 3,
                ho = 4,
                po = 5,
                mo = 6,
                vo = 7,
                yo = 8;
            W("Y", 0, 0, function() { var t = this.year(); return t <= 9999 ? "" + t : "+" + t }), W(0, ["YY", 2], 0, function() { return this.year() % 100 }), W(0, ["YYYY", 4], 0, "year"), W(0, ["YYYYY", 5], 0, "year"), W(0, ["YYYYYY", 6, !0], 0, "year"), L("year", "y"), F("year", 1), B("Y", eo), B("YY", Zr, zr), B("YYYY", Qr, Br), B("YYYYY", Kr, $r), B("YYYYYY", Kr, $r), X(["YYYYY", "YYYYYY"], uo), X("YYYY", function(t, n) { n[uo] = 2 === t.length ? e.parseTwoDigitYear(t) : b(t) }), X("YY", function(t, n) { n[uo] = e.parseTwoDigitYear(t) }), X("Y", function(t, e) { e[uo] = parseInt(t, 10) }), e.parseTwoDigitYear = function(t) { return b(t) + (b(t) > 68 ? 1900 : 2e3) };
            var _o, go = nt("FullYear", !0);
            _o = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
                var e;
                for (e = 0; e < this.length; ++e)
                    if (this[e] === t) return e;
                return -1
            }, W("M", ["MM", 2], "Mo", function() { return this.month() + 1 }), W("MMM", 0, 0, function(t) { return this.localeData().monthsShort(this, t) }), W("MMMM", 0, 0, function(t) { return this.localeData().months(this, t) }), L("month", "M"), F("month", 8), B("M", Zr), B("MM", Zr, zr), B("MMM", function(t, e) { return e.monthsShortRegex(t) }), B("MMMM", function(t, e) { return e.monthsRegex(t) }), X(["M", "MM"], function(t, e) { e[lo] = b(t) - 1 }), X(["MMM", "MMMM"], function(t, e, n, r) {
                var o = n._locale.monthsParse(t, r, n._strict);
                null != o ? e[lo] = o : h(n).invalidMonth = t
            });
            var bo = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                wo = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                xo = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                Po = io,
                So = io;
            W("w", ["ww", 2], "wo", "week"), W("W", ["WW", 2], "Wo", "isoWeek"), L("week", "w"), L("isoWeek", "W"), F("week", 5), F("isoWeek", 5), B("w", Zr), B("ww", Zr, zr), B("W", Zr), B("WW", Zr, zr), J(["w", "ww", "W", "WW"], function(t, e, n, r) { e[r.substr(0, 1)] = b(t) });
            var ko = { dow: 0, doy: 6 };
            W("d", 0, "do", "day"), W("dd", 0, 0, function(t) { return this.localeData().weekdaysMin(this, t) }), W("ddd", 0, 0, function(t) { return this.localeData().weekdaysShort(this, t) }), W("dddd", 0, 0, function(t) { return this.localeData().weekdays(this, t) }), W("e", 0, 0, "weekday"), W("E", 0, 0, "isoWeekday"), L("day", "d"), L("weekday", "e"), L("isoWeekday", "E"), F("day", 11), F("weekday", 11), F("isoWeekday", 11), B("d", Zr), B("e", Zr), B("E", Zr), B("dd", function(t, e) { return e.weekdaysMinRegex(t) }), B("ddd", function(t, e) { return e.weekdaysShortRegex(t) }), B("dddd", function(t, e) { return e.weekdaysRegex(t) }), J(["dd", "ddd", "dddd"], function(t, e, n, r) {
                var o = n._locale.weekdaysParse(t, r, n._strict);
                null != o ? e.d = o : h(n).invalidWeekday = t
            }), J(["d", "e", "E"], function(t, e, n, r) { e[r] = b(t) });
            var Oo = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                To = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                Mo = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                Do = io,
                Yo = io,
                jo = io;
            W("H", ["HH", 2], 0, "hour"), W("h", ["hh", 2], 0, zt), W("k", ["kk", 2], 0, Vt), W("hmm", 0, 0, function() { return "" + zt.apply(this) + U(this.minutes(), 2) }), W("hmmss", 0, 0, function() { return "" + zt.apply(this) + U(this.minutes(), 2) + U(this.seconds(), 2) }), W("Hmm", 0, 0, function() { return "" + this.hours() + U(this.minutes(), 2) }), W("Hmmss", 0, 0, function() { return "" + this.hours() + U(this.minutes(), 2) + U(this.seconds(), 2) }), Bt("a", !0), Bt("A", !1), L("hour", "h"), F("hour", 13), B("a", $t), B("A", $t), B("H", Zr), B("h", Zr), B("k", Zr), B("HH", Zr, zr), B("hh", Zr, zr), B("kk", Zr, zr), B("hmm", qr), B("hmmss", Xr), B("Hmm", qr), B("Hmmss", Xr), X(["H", "HH"], fo), X(["k", "kk"], function(t, e, n) {
                var r = b(t);
                e[fo] = 24 === r ? 0 : r
            }), X(["a", "A"], function(t, e, n) { n._isPm = n._locale.isPM(t), n._meridiem = t }), X(["h", "hh"], function(t, e, n) { e[fo] = b(t), h(n).bigHour = !0 }), X("hmm", function(t, e, n) {
                var r = t.length - 2;
                e[fo] = b(t.substr(0, r)), e[ho] = b(t.substr(r)), h(n).bigHour = !0
            }), X("hmmss", function(t, e, n) {
                var r = t.length - 4,
                    o = t.length - 2;
                e[fo] = b(t.substr(0, r)), e[ho] = b(t.substr(r, 2)), e[po] = b(t.substr(o)), h(n).bigHour = !0
            }), X("Hmm", function(t, e, n) {
                var r = t.length - 2;
                e[fo] = b(t.substr(0, r)), e[ho] = b(t.substr(r))
            }), X("Hmmss", function(t, e, n) {
                var r = t.length - 4,
                    o = t.length - 2;
                e[fo] = b(t.substr(0, r)), e[ho] = b(t.substr(r, 2)), e[po] = b(t.substr(o))
            });
            var Co, Ao = /[ap]\.?m?\.?/i,
                Eo = nt("Hours", !0),
                Lo = { calendar: Ar, longDateFormat: Er, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: Lr, relativeTime: Rr, months: wo, monthsShort: xo, week: ko, weekdays: Oo, weekdaysMin: Mo, weekdaysShort: To, meridiemParse: Ao },
                Ro = {},
                Io = {},
                Fo = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                No = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                Uo = /Z|[+-]\d\d(?::?\d\d)?/,
                Wo = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                Ho = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                Go = /^\/?Date\((\-?\d+)/i,
                zo = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                Vo = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };
            e.createFromInputFallback = P("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) { t._d = new Date(t._i + (t._useUTC ? " UTC" : "")) }), e.ISO_8601 = function() {}, e.RFC_2822 = function() {};
            var Bo = P("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var t = ke.apply(null, arguments); return this.isValid() && t.isValid() ? t < this ? this : t : m() }),
                $o = P("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var t = ke.apply(null, arguments); return this.isValid() && t.isValid() ? t > this ? this : t : m() }),
                Zo = function() { return Date.now ? Date.now() : +new Date },
                qo = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
            Le("Z", ":"), Le("ZZ", ""), B("Z", ro), B("ZZ", ro), X(["Z", "ZZ"], function(t, e, n) { n._useUTC = !0, n._tzm = Re(ro, t) });
            var Xo = /([\+\-]|\d\d)/gi;
            e.updateOffset = function() {};
            var Jo = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                Qo = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
            Xe.fn = Ce.prototype, Xe.invalid = je;
            var Ko = tn(1, "add"),
                ti = tn(-1, "subtract");
            e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var ei = P("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) { return void 0 === t ? this.localeData() : this.locale(t) });
            W(0, ["gg", 2], 0, function() { return this.weekYear() % 100 }), W(0, ["GG", 2], 0, function() { return this.isoWeekYear() % 100 }), Rn("gggg", "weekYear"), Rn("ggggg", "weekYear"), Rn("GGGG", "isoWeekYear"), Rn("GGGGG", "isoWeekYear"), L("weekYear", "gg"), L("isoWeekYear", "GG"), F("weekYear", 1), F("isoWeekYear", 1), B("G", eo), B("g", eo), B("GG", Zr, zr), B("gg", Zr, zr), B("GGGG", Qr, Br), B("gggg", Qr, Br), B("GGGGG", Kr, $r), B("ggggg", Kr, $r), J(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, r) { e[r.substr(0, 2)] = b(t) }), J(["gg", "GG"], function(t, n, r, o) { n[o] = e.parseTwoDigitYear(t) }), W("Q", 0, "Qo", "quarter"), L("quarter", "Q"), F("quarter", 7), B("Q", Gr), X("Q", function(t, e) { e[lo] = 3 * (b(t) - 1) }), W("D", ["DD", 2], "Do", "date"), L("date", "D"), F("date", 9), B("D", Zr), B("DD", Zr, zr), B("Do", function(t, e) { return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient }), X(["D", "DD"], co), X("Do", function(t, e) { e[co] = b(t.match(Zr)[0]) });
            var ni = nt("Date", !0);
            W("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), L("dayOfYear", "DDD"), F("dayOfYear", 4), B("DDD", Jr), B("DDDD", Vr), X(["DDD", "DDDD"], function(t, e, n) { n._dayOfYear = b(t) }), W("m", ["mm", 2], 0, "minute"), L("minute", "m"), F("minute", 14), B("m", Zr), B("mm", Zr, zr), X(["m", "mm"], ho);
            var ri = nt("Minutes", !1);
            W("s", ["ss", 2], 0, "second"), L("second", "s"), F("second", 15), B("s", Zr), B("ss", Zr, zr), X(["s", "ss"], po);
            var oi = nt("Seconds", !1);
            W("S", 0, 0, function() { return ~~(this.millisecond() / 100) }), W(0, ["SS", 2], 0, function() { return ~~(this.millisecond() / 10) }), W(0, ["SSS", 3], 0, "millisecond"), W(0, ["SSSS", 4], 0, function() { return 10 * this.millisecond() }), W(0, ["SSSSS", 5], 0, function() { return 100 * this.millisecond() }), W(0, ["SSSSSS", 6], 0, function() { return 1e3 * this.millisecond() }), W(0, ["SSSSSSS", 7], 0, function() { return 1e4 * this.millisecond() }), W(0, ["SSSSSSSS", 8], 0, function() { return 1e5 * this.millisecond() }), W(0, ["SSSSSSSSS", 9], 0, function() { return 1e6 * this.millisecond() }), L("millisecond", "ms"), F("millisecond", 16), B("S", Jr, Gr), B("SS", Jr, zr), B("SSS", Jr, Vr);
            var ii;
            for (ii = "SSSS"; ii.length <= 9; ii += "S") B(ii, to);
            for (ii = "S"; ii.length <= 9; ii += "S") X(ii, Vn);
            var ai = nt("Milliseconds", !1);
            W("z", 0, 0, "zoneAbbr"), W("zz", 0, 0, "zoneName");
            var si = y.prototype;
            si.add = Ko, si.calendar = rn, si.clone = on, si.diff = dn, si.endOf = kn, si.format = yn, si.from = _n, si.fromNow = gn, si.to = bn, si.toNow = wn, si.get = it, si.invalidAt = En, si.isAfter = an, si.isBefore = sn, si.isBetween = un, si.isSame = ln, si.isSameOrAfter = cn, si.isSameOrBefore = fn, si.isValid = Cn, si.lang = ei, si.locale = xn, si.localeData = Pn, si.max = $o, si.min = Bo, si.parsingFlags = An, si.set = at, si.startOf = Sn, si.subtract = ti, si.toArray = Dn, si.toObject = Yn, si.toDate = Mn, si.toISOString = mn, si.inspect = vn, si.toJSON = jn, si.toString = pn, si.unix = Tn, si.valueOf = On, si.creationData = Ln, si.year = go, si.isLeapYear = et, si.weekYear = In, si.isoWeekYear = Fn, si.quarter = si.quarters = Gn, si.month = pt, si.daysInMonth = mt, si.week = si.weeks = Mt, si.isoWeek = si.isoWeeks = Dt, si.weeksInYear = Un, si.isoWeeksInYear = Nn, si.date = ni, si.day = si.days = It, si.weekday = Ft, si.isoWeekday = Nt, si.dayOfYear = zn, si.hour = si.hours = Eo, si.minute = si.minutes = ri, si.second = si.seconds = oi, si.millisecond = si.milliseconds = ai, si.utcOffset = Ne, si.utc = We, si.local = He, si.parseZone = Ge, si.hasAlignedHourOffset = ze, si.isDST = Ve, si.isLocal = $e, si.isUtcOffset = Ze, si.isUtc = qe, si.isUTC = qe, si.zoneAbbr = Bn, si.zoneName = $n, si.dates = P("dates accessor is deprecated. Use date instead.", ni), si.months = P("months accessor is deprecated. Use month instead", pt), si.years = P("years accessor is deprecated. Use year instead", go), si.zone = P("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ue), si.isDSTShifted = P("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Be);
            var ui = M.prototype;
            ui.calendar = D, ui.longDateFormat = Y, ui.invalidDate = j, ui.ordinal = C, ui.preparse = Xn, ui.postformat = Xn, ui.relativeTime = A, ui.pastFuture = E, ui.set = O, ui.months = lt, ui.monthsShort = ct, ui.monthsParse = dt, ui.monthsRegex = yt, ui.monthsShortRegex = vt, ui.week = kt, ui.firstDayOfYear = Tt, ui.firstDayOfWeek = Ot, ui.weekdays = Ct, ui.weekdaysMin = Et, ui.weekdaysShort = At, ui.weekdaysParse = Rt, ui.weekdaysRegex = Ut, ui.weekdaysShortRegex = Wt, ui.weekdaysMinRegex = Ht, ui.isPM = Zt, ui.meridiem = qt, Kt("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(t) { var e = t % 10; return t + (1 === b(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th") } }), e.lang = P("moment.lang is deprecated. Use moment.locale instead.", Kt), e.langData = P("moment.langData is deprecated. Use moment.localeData instead.", ne);
            var li = Math.abs,
                ci = mr("ms"),
                fi = mr("s"),
                di = mr("m"),
                hi = mr("h"),
                pi = mr("d"),
                mi = mr("w"),
                vi = mr("M"),
                yi = mr("y"),
                _i = _r("milliseconds"),
                gi = _r("seconds"),
                bi = _r("minutes"),
                wi = _r("hours"),
                xi = _r("days"),
                Pi = _r("months"),
                Si = _r("years"),
                ki = Math.round,
                Oi = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
                Ti = Math.abs,
                Mi = Ce.prototype;
            return Mi.isValid = Ye, Mi.abs = ir, Mi.add = sr, Mi.subtract = ur, Mi.as = hr, Mi.asMilliseconds = ci, Mi.asSeconds = fi, Mi.asMinutes = di, Mi.asHours = hi, Mi.asDays = pi, Mi.asWeeks = mi, Mi.asMonths = vi, Mi.asYears = yi, Mi.valueOf = pr, Mi._bubble = cr, Mi.clone = vr, Mi.get = yr, Mi.milliseconds = _i, Mi.seconds = gi, Mi.minutes = bi, Mi.hours = wi, Mi.days = xi, Mi.weeks = gr, Mi.months = Pi, Mi.years = Si, Mi.humanize = Sr, Mi.toISOString = Or, Mi.toString = Or, Mi.toJSON = Or, Mi.locale = xn, Mi.localeData = Pn, Mi.toIsoString = P("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Or), Mi.lang = ei, W("X", 0, 0, "unix"), W("x", 0, 0, "valueOf"), B("x", eo), B("X", oo), X("X", function(t, e, n) { n._d = new Date(1e3 * parseFloat(t, 10)) }), X("x", function(t, e, n) { n._d = new Date(b(t)) }), e.version = "2.23.0",
                function(t) { Tr = t }(ke), e.fn = si, e.min = Te, e.max = Me, e.now = Zo, e.utc = f, e.unix = Zn, e.months = tr, e.isDate = s, e.locale = Kt, e.invalid = m, e.duration = Xe, e.isMoment = _, e.weekdays = nr, e.parseZone = qn, e.localeData = ne, e.isDuration = Ae, e.monthsShort = er, e.weekdaysMin = or, e.defineLocale = te, e.updateLocale = ee, e.locales = re, e.weekdaysShort = rr, e.normalizeUnits = R, e.relativeTimeRounding = xr, e.relativeTimeThreshold = Pr, e.calendarFormat = nn, e.prototype = si, e.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" }, e
        })
    }).call(e, n(32)(t))
}, , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";

    function r(t) {
        var e = new a(t),
            n = i(a.prototype.request, e);
        return o.extend(n, a.prototype, e), o.extend(n, e), n
    }
    var o = n(16),
        i = n(173),
        a = n(279),
        s = n(112),
        u = r(s);
    u.Axios = a, u.create = function(t) { return r(o.merge(s, t)) }, u.Cancel = n(170), u.CancelToken = n(278), u.isCancel = n(171), u.all = function(t) { return Promise.all(t) }, u.spread = n(293), t.exports = u, t.exports.default = u
}, function(t, e, n) {
    "use strict";

    function r(t) {
        if ("function" != typeof t) throw new TypeError("executor must be a function.");
        var e;
        this.promise = new Promise(function(t) { e = t });
        var n = this;
        t(function(t) { n.reason || (n.reason = new o(t), e(n.reason)) })
    }
    var o = n(170);
    r.prototype.throwIfRequested = function() { if (this.reason) throw this.reason }, r.source = function() { var t; return { token: new r(function(e) { t = e }), cancel: t } }, t.exports = r
}, function(t, e, n) {
    "use strict";

    function r(t) { this.defaults = t, this.interceptors = { request: new a, response: new a } }
    var o = n(112),
        i = n(16),
        a = n(280),
        s = n(281);
    r.prototype.request = function(t) {
        "string" == typeof t && (t = i.merge({ url: arguments[0] }, arguments[1])), t = i.merge(o, this.defaults, { method: "get" }, t), t.method = t.method.toLowerCase();
        var e = [s, void 0],
            n = Promise.resolve(t);
        for (this.interceptors.request.forEach(function(t) { e.unshift(t.fulfilled, t.rejected) }), this.interceptors.response.forEach(function(t) { e.push(t.fulfilled, t.rejected) }); e.length;) n = n.then(e.shift(), e.shift());
        return n
    }, i.forEach(["delete", "get", "head", "options"], function(t) { r.prototype[t] = function(e, n) { return this.request(i.merge(n || {}, { method: t, url: e })) } }), i.forEach(["post", "put", "patch"], function(t) { r.prototype[t] = function(e, n, r) { return this.request(i.merge(r || {}, { method: t, url: e, data: n })) } }), t.exports = r
}, function(t, e, n) {
    "use strict";

    function r() { this.handlers = [] }
    var o = n(16);
    r.prototype.use = function(t, e) { return this.handlers.push({ fulfilled: t, rejected: e }), this.handlers.length - 1 }, r.prototype.eject = function(t) { this.handlers[t] && (this.handlers[t] = null) }, r.prototype.forEach = function(t) { o.forEach(this.handlers, function(e) { null !== e && t(e) }) }, t.exports = r
}, function(t, e, n) {
    "use strict";

    function r(t) { t.cancelToken && t.cancelToken.throwIfRequested() }
    var o = n(16),
        i = n(284),
        a = n(171),
        s = n(112),
        u = n(289),
        l = n(287);
    t.exports = function(t) { return r(t), t.baseURL && !u(t.url) && (t.url = l(t.baseURL, t.url)), t.headers = t.headers || {}, t.data = i(t.data, t.headers, t.transformRequest), t.headers = o.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), o.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(e) { delete t.headers[e] }), (t.adapter || s.adapter)(t).then(function(e) { return r(t), e.data = i(e.data, e.headers, t.transformResponse), e }, function(e) { return a(e) || (r(t), e && e.response && (e.response.data = i(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e) }) }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e, n, r, o) { return t.config = e, n && (t.code = n), t.request = r, t.response = o, t }
}, function(t, e, n) {
    "use strict";
    var r = n(172);
    t.exports = function(t, e, n) {
        var o = n.config.validateStatus;
        n.status && o && !o(n.status) ? e(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : t(n)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(16);
    t.exports = function(t, e, n) { return r.forEach(n, function(n) { t = n(t, e) }), t }
}, function(t, e, n) {
    "use strict";

    function r() { this.message = "String contains an invalid character" }

    function o(t) {
        for (var e, n, o = String(t), a = "", s = 0, u = i; o.charAt(0 | s) || (u = "=", s % 1); a += u.charAt(63 & e >> 8 - s % 1 * 8)) {
            if ((n = o.charCodeAt(s += .75)) > 255) throw new r;
            e = e << 8 | n
        }
        return a
    }
    var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    r.prototype = new Error, r.prototype.code = 5, r.prototype.name = "InvalidCharacterError", t.exports = o
}, function(t, e, n) {
    "use strict";

    function r(t) { return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") }
    var o = n(16);
    t.exports = function(t, e, n) {
        if (!e) return t;
        var i;
        if (n) i = n(e);
        else if (o.isURLSearchParams(e)) i = e.toString();
        else {
            var a = [];
            o.forEach(e, function(t, e) { null !== t && void 0 !== t && (o.isArray(t) && (e += "[]"), o.isArray(t) || (t = [t]), o.forEach(t, function(t) { o.isDate(t) ? t = t.toISOString() : o.isObject(t) && (t = JSON.stringify(t)), a.push(r(e) + "=" + r(t)) })) }), i = a.join("&")
        }
        return i && (t += (-1 === t.indexOf("?") ? "?" : "&") + i), t
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) { return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t }
}, function(t, e, n) {
    "use strict";
    var r = n(16);
    t.exports = r.isStandardBrowserEnv() ? function() {
        return {
            write: function(t, e, n, o, i, a) {
                var s = [];
                s.push(t + "=" + encodeURIComponent(e)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(o) && s.push("path=" + o), r.isString(i) && s.push("domain=" + i), !0 === a && s.push("secure"), document.cookie = s.join("; ")
            },
            read: function(t) { var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")); return e ? decodeURIComponent(e[3]) : null },
            remove: function(t) { this.write(t, "", Date.now() - 864e5) }
        }
    }() : function() { return { write: function() {}, read: function() { return null }, remove: function() {} } }()
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) { return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t) }
}, function(t, e, n) {
    "use strict";
    var r = n(16);
    t.exports = r.isStandardBrowserEnv() ? function() {
        function t(t) { var e = t; return n && (o.setAttribute("href", e), e = o.href), o.setAttribute("href", e), { href: o.href, protocol: o.protocol ? o.protocol.replace(/:$/, "") : "", host: o.host, search: o.search ? o.search.replace(/^\?/, "") : "", hash: o.hash ? o.hash.replace(/^#/, "") : "", hostname: o.hostname, port: o.port, pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname } }
        var e, n = /(msie|trident)/i.test(navigator.userAgent),
            o = document.createElement("a");
        return e = t(window.location.href),
            function(n) { var o = r.isString(n) ? t(n) : n; return o.protocol === e.protocol && o.host === e.host }
    }() : function() { return function() { return !0 } }()
}, function(t, e, n) {
    "use strict";
    var r = n(16);
    t.exports = function(t, e) { r.forEach(t, function(n, r) { r !== e && r.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[r]) }) }
}, function(t, e, n) {
    "use strict";
    var r = n(16),
        o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    t.exports = function(t) {
        var e, n, i, a = {};
        return t ? (r.forEach(t.split("\n"), function(t) {
            if (i = t.indexOf(":"), e = r.trim(t.substr(0, i)).toLowerCase(), n = r.trim(t.substr(i + 1)), e) {
                if (a[e] && o.indexOf(e) >= 0) return;
                a[e] = "set-cookie" === e ? (a[e] ? a[e] : []).concat([n]) : a[e] ? a[e] + ", " + n : n
            }
        }), a) : a
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) { return function(e) { return t.apply(null, e) } }
}, , , , , , , , , , function(t, e, n) {
    "use strict";

    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

    function i(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(71),
        s = function(t) {
            function e(t) {
                r(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                t = Object.assign(n.options, t);
                var i = t.scale || new Plottable.Scales.Linear,
                    a = t.categoryScale || new Plottable.Scales.Category,
                    s = t.colorScale || new Plottable.Scales.Color,
                    u = "h" === t.orientation,
                    l = u ? Plottable.Plots.Bar.ORIENTATION_HORIZONTAL : Plottable.Plots.Bar.ORIENTATION_VERTICAL;
                n.plot = new Plottable.Plots.ClusteredBar(l).attr("fill", function(t, e, n) { return n.metadata() }, s).labelsEnabled(!1).animated(t.animated).baselineValue(t.baselineValue), n.plot[u ? "x" : "y"](function(t) { return t.value }, i), n.plot[u ? "y" : "x"](function(t) { return t.label }, a), t.data && (n.datasets = t.data.map(function(t) { return new Plottable.Dataset(t.series, t.label) }), n.datasets.forEach(function(t) { n.plot.addDataset(t) })), t.labelFormatter && n.plot.labelFormatter(t.labelFormatter).labelsEnabled(!0), n._setGridlines(t, i);
                var c = n.gridlines ? new Plottable.Components.Group([n.gridlines, n.plot]) : n.plot;
                return n.layout = new Plottable.Components.Table([
                    [null, null, c],
                    [null, null, null],
                    [null, null, null]
                ]), n._setAxes(t, i, a), n._setLegend(t, s), n._setInteractions(t), n
            }
            return i(e, t), e
        }(a.a);
    e.a = s
}, function(t, e, n) {
    "use strict";

    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

    function i(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(71),
        s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
        }(),
        u = function(t) {
            function e(t) {
                r(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                t = Object.assign(n.options, t);
                var i = t.yScale || new Plottable.Scales.Linear,
                    a = t.xScale || new Plottable.Scales.Linear,
                    s = t.colorScale || new Plottable.Scales.Color;
                n.plot = { lines: (new Plottable.Plots.Line).attr("stroke", function(t, e, n) { return n.metadata() }, s).x(function(t) { return t.label }, a).y(function(t) { return t.value }, i).attr("stroke-width", t.strokeWidth), markers: (new Plottable.Plots.Scatter).attr("opacity", 1).attr("fill", function(t, e, n) { return n.metadata() }, s).x(function(t) { return t.label }, a).y(function(t) { return t.value }, i).size(t.markerSize) }, t.data && (n.datasets = t.data.map(function(t) { return new Plottable.Dataset(t.series, t.label) }), n.datasets.forEach(function(t) { n.plot.lines.addDataset(t), n.plot.markers.addDataset(t) })), t.clickHandler && (new Plottable.Interactions.Click).onClick(function(e) {
                    var r = n.plot.markers.entityNearest(e);
                    t.clickHandler(r, n.plot.markers.entities())
                }).attachTo(n.plot.markers), t.hoverHandler && (new Plottable.Interactions.Pointer).onPointerMove(function(e) {
                    var r = n.plot.markers.entityNearest(e);
                    t.hoverHandler(r, n.plot.markers.entities())
                }).onPointerExit(function(e) { t.hoverHandler(null, n.plot.markers.entities()) }).attachTo(n.plot.markers), n.gridlines = new Plottable.Components.Gridlines(t.showXgridlines && a instanceof Plottable.QuantitativeScale ? a : null, t.showYgridlines && i instanceof Plottable.QuantitativeScale ? i : null), n.guideLine = { horizontal: null, vertical: null }, ["v", "vh", "hv"].indexOf(t.guideLine) > -1 && (n.guideLine.vertical = new Plottable.Components.GuideLineLayer(Plottable.Components.GuideLineLayer.ORIENTATION_VERTICAL).scale(a), (new Plottable.Interactions.Pointer).onPointerMove(function(t) {
                    var e = n.plot.markers.entityNearest(t);
                    e ? (n.guideLine.vertical.value(e.datum.label), n.guideLine.vertical.content().style("visibility", "visible")) : n.guideLine.vertical.content().style("visibility", "hidden")
                }).onPointerExit(function(t) { n.guideLine.vertical.content().style("visibility", "hidden") }).attachTo(n.plot.markers), n.onMount = function(t) { this.guideLine.vertical.content().style("visibility", "hidden") }), ["h", "vh", "hv"].indexOf(t.guideLine) > -1 && (n.guideLine.horizontal = new Plottable.Components.GuideLineLayer(Plottable.Components.GuideLineLayer.ORIENTATION_HORIZONTAL).scale(i), (new Plottable.Interactions.Pointer).onPointerMove(function(t) {
                    var e = n.plot.markers.entityNearest(t);
                    e ? (n.guideLine.horizontal.value(e.datum.value), n.guideLine.horizontal.content().style("visibility", "visible")) : n.guideLine.horizontal.content().style("visibility", "hidden")
                }).onPointerExit(function(t) { n.guideLine.horizontal.content().style("visibility", "hidden") }).attachTo(n.plot.markers), n.onMount = function(t) { this.guideLine.horizontal.content().style("visibility", "hidden") });
                var u = new Plottable.Components.Group([n.gridlines, n.guideLine.horizontal, n.guideLine.vertical, n.plot.lines, n.plot.markers]);
                return n.layout = new Plottable.Components.Table([
                    [null, null, u],
                    [null, null, null],
                    [null, null, null]
                ]), t.hideXaxis || (a instanceof Plottable.Scales.Time ? n.xAxis = new Plottable.Axes.Time(a, "bottom") : a instanceof Plottable.QuantitativeScale ? n.xAxis = new Plottable.Axes.Numeric(a, "bottom") : n.xAxis = new Plottable.Axes.Category(a, "bottom"), n.layout.add(n.xAxis, 1, 2)), t.hideYaxis || (i instanceof Plottable.Scales.Time ? n.yAxis = new Plottable.Axes.Time(i, "left") : i instanceof Plottable.QuantitativeScale ? n.yAxis = new Plottable.Axes.Numeric(i, "left") : n.yAxis = new Plottable.Axes.Category(i, "left"), n.layout.add(n.yAxis, 0, 1)), t.xLabel && n.layout.add(new Plottable.Components.AxisLabel(t.xLabel), 2, 2), t.yLabel && n.layout.add(new Plottable.Components.AxisLabel(t.yLabel, -90), 0, 0), n._setLegend(t, s), n
            }
            return i(e, t), s(e, [{ key: "update", value: function(t) { this.datasets = t.data.map(function(t) { return new Plottable.Dataset(t.series, t.label) }), this.plot.lines.datasets(this.datasets), this.plot.markers.datasets(this.datasets), this.options.data = t.data, this.onUpdate(t) } }]), e
        }(a.a);
    e.a = u
}, function(t, e, n) {
    "use strict";

    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

    function i(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(71),
        s = n(243),
        u = n.n(s),
        l = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
        }(),
        c = function(t) {
            function e(t) {
                r(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                n.options.legendPosition = "none", t = Object.assign(n.options, t), t.sorted && (t.data = u()(t.data, "value")), "d" === t.sorted && t.data.reverse(), n.dataset = new Plottable.Dataset(t.data);
                var i = t.scale || new Plottable.Scales.Linear,
                    a = t.categoryScale || new Plottable.Scales.Category,
                    s = t.colorScale || new Plottable.Scales.Color,
                    l = "h" === t.orientation,
                    c = l ? Plottable.Plots.Bar.ORIENTATION_HORIZONTAL : Plottable.Plots.Bar.ORIENTATION_VERTICAL;
                n.plot = new Plottable.Plots.Bar(c).addDataset(n.dataset).attr("fill", function(t) { return t.label }, s).labelsEnabled(!1).animated(t.animated).baselineValue(t.baselineValue), n.plot[l ? "x" : "y"](function(t) { return t.value }, i), n.plot[l ? "y" : "x"](function(t) { return t.label }, a), t.labelFormatter && n.plot.labelFormatter(n.props.labelFormatter).labelsEnabled(!0), n._setGridlines(t, i);
                var f = n.gridlines ? new Plottable.Components.Group([n.gridlines, n.plot]) : n.plot;
                return n.layout = new Plottable.Components.Table([
                    [null, null, f],
                    [null, null, null],
                    [null, null, null]
                ]), n._setAxes(t, i, a), n._setLegend(t, s), n._setInteractions(t), n
            }
            return i(e, t), l(e, [{ key: "update", value: function(t) { this.options.sorted && (t.data = u()(t.data, "value")), "d" === this.options.sorted && t.data.reverse(), this.dataset.data(t.data), Object.assign(this.options, { data: t.data }), this.onUpdate(t) } }]), e
        }(a.a);
    e.a = c
}, function(t, e, n) {
    "use strict";

    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

    function i(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(71),
        s = n(243),
        u = n.n(s),
        l = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
        }(),
        c = function(t) {
            function e(t) {
                r(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                n.options.legendPosition = "none", t = Object.assign(n.options, t), t.sorted && (t.data = u()(t.data, "value")), "d" === t.sorted && t.data.reverse(), n.dataset = new Plottable.Dataset(t.data);
                var i = t.data.reduce(function(t, e) { return t + e.value }, 0),
                    a = (new Plottable.Scales.Linear).domain([0, i]),
                    s = t.colorScale || new Plottable.Scales.Color;
                return t.outerRadius = t.outerRadius || function(t) { return Math.min(n.plot.width(), n.plot.height()) / 2 }, n.plot = (new Plottable.Plots.Pie).addClass("simple-pie-plot").addDataset(n.dataset).sectorValue(function(t) { return t.value }, a).attr("fill", function(t) { return t.label }, s).labelsEnabled(!1).innerRadius(t.innerRadius).outerRadius(t.outerRadius).animated(t.animated), t.labelFormatter && n.plot.labelFormatter(t.labelFormatter).labelsEnabled(!0), n.layout = n.plot, n._setLegend(t, s), n._setInteractions(t), n
            }
            return i(e, t), l(e, [{
                key: "update",
                value: function(t) {
                    this.options.sorted && (t.data = u()(t.data, "value")), "d" === this.options.sorted && t.data.reverse();
                    var e = t.data.reduce(function(t, e) { return t + e.value }, 0);
                    this.plot.sectorValue().scale.domain([0, e]), this.dataset.data(t.data), Object.assign(this.options, { data: t.data }), this.onUpdate(t)
                }
            }]), e
        }(a.a);
    e.a = c
}, function(t, e, n) {
    "use strict";

    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

    function i(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(71),
        s = function(t) {
            function e(t) {
                r(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                t = Object.assign(n.options, t);
                var i = t.scale || new Plottable.Scales.Linear,
                    a = t.categoryScale || new Plottable.Scales.Category,
                    s = t.colorScale || new Plottable.Scales.Color,
                    u = "h" === t.orientation,
                    l = u ? Plottable.Plots.Bar.ORIENTATION_HORIZONTAL : Plottable.Plots.Bar.ORIENTATION_VERTICAL;
                n.plot = new Plottable.Plots.StackedBar(l).attr("fill", function(t, e, n) { return n.metadata() }, s).labelsEnabled(!1).animated(t.animated).baselineValue(t.baselineValue), n.plot[u ? "x" : "y"](function(t) { return t.value }, i), n.plot[u ? "y" : "x"](function(t) { return t.label }, a), t.data && (n.datasets = t.data.map(function(t) { return new Plottable.Dataset(t.series, t.label) }), n.datasets.forEach(function(t) { n.plot.addDataset(t) })), t.labelFormatter && n.plot.labelFormatter(n.props.labelFormatter).labelsEnabled(!0), n._setGridlines(t, i);
                var c = n.gridlines ? new Plottable.Components.Group([n.gridlines, n.plot]) : n.plot;
                return n.layout = new Plottable.Components.Table([
                    [null, null, c],
                    [null, null, null],
                    [null, null, null]
                ]), n._setAxes(t, i, a), n._setLegend(t, s), n._setInteractions(t), n
            }
            return i(e, t), e
        }(a.a);
    e.a = s
}, , , , , , , , function(t, e) {
    function n(t) { return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t) }

    function r(t) { return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0)) }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    t.exports = function(t) { return null != t && (n(t) || r(t) || !!t._isBuffer) }
}, function(t, e, n) {
    var r = n(318),
        o = n(326),
        i = o(r);
    t.exports = i
}, function(t, e, n) {
    var r = n(327),
        o = r();
    t.exports = o
}, function(t, e, n) {
    function r(t, e) { return t && o(t, e, i) }
    var o = n(317),
        i = n(53);
    t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        var n = -1,
            r = i(t) ? Array(t.length) : [];
        return o(t, function(t, o, i) { r[++n] = e(t, o, i) }), r
    }
    var o = n(316),
        i = n(45);
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n) {
        var r = -1;
        e = o(e.length ? e : [c], u(i));
        var f = a(t, function(t, n, i) { return { criteria: o(e, function(e) { return e(t) }), index: ++r, value: t } });
        return s(f, function(t, e) { return l(t, e, n) })
    }
    var o = n(134),
        i = n(152),
        a = n(319),
        s = n(322),
        u = n(91),
        l = n(325),
        c = n(56);
    t.exports = r
}, function(t, e) {
    function n(t, e, n, i) { for (var a = -1, s = o(r((e - t) / (n || 1)), 0), u = Array(s); s--;) u[i ? s : ++a] = t, t += n; return u }
    var r = Math.ceil,
        o = Math.max;
    t.exports = n
}, function(t, e) {
    function n(t, e) { var n = t.length; for (t.sort(e); n--;) t[n] = t[n].value; return t }
    t.exports = n
}, , function(t, e, n) {
    function r(t, e) {
        if (t !== e) {
            var n = void 0 !== t,
                r = null === t,
                i = t === t,
                a = o(t),
                s = void 0 !== e,
                u = null === e,
                l = e === e,
                c = o(e);
            if (!u && !c && !a && t > e || a && s && l && !u && !c || r && s && l || !n && l || !i) return 1;
            if (!r && !a && !c && t < e || c && n && i && !r && !a || u && n && i || !s && i || !l) return -1
        }
        return 0
    }
    var o = n(35);
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n) { for (var r = -1, i = t.criteria, a = e.criteria, s = i.length, u = n.length; ++r < s;) { var l = o(i[r], a[r]); if (l) { if (r >= u) return l; return l * ("desc" == n[r] ? -1 : 1) } } return t.index - e.index }
    var o = n(324);
    t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        return function(n, r) {
            if (null == n) return n;
            if (!o(n)) return t(n, r);
            for (var i = n.length, a = e ? i : -1, s = Object(n);
                (e ? a-- : ++a < i) && !1 !== r(s[a], a, s););
            return n
        }
    }
    var o = n(45);
    t.exports = r
}, function(t, e) {
    function n(t) { return function(e, n, r) { for (var o = -1, i = Object(e), a = r(e), s = a.length; s--;) { var u = a[t ? s : ++o]; if (!1 === n(i[u], u, i)) break } return e } }
    t.exports = n
}, function(t, e, n) {
    function r(t) { return function(e, n, r) { return r && "number" != typeof r && i(e, n, r) && (n = r = void 0), e = a(e), void 0 === n ? (n = e, e = 0) : n = a(n), r = void 0 === r ? e < n ? 1 : -1 : a(r), o(e, n, r, t) } }
    var o = n(321),
        i = n(136),
        a = n(245);
    t.exports = r
}, , function(t, e, n) {
    function r(t, e, n) {
        function r(e) {
            var n = _,
                r = g;
            return _ = g = void 0, S = e, w = t.apply(r, n)
        }

        function c(t) { return S = t, x = setTimeout(h, e), k ? r(t) : w }

        function f(t) {
            var n = t - P,
                r = t - S,
                o = e - n;
            return O ? l(o, b - r) : o
        }

        function d(t) {
            var n = t - P,
                r = t - S;
            return void 0 === P || n >= e || n < 0 || O && r >= b
        }

        function h() {
            var t = i();
            if (d(t)) return p(t);
            x = setTimeout(h, f(t))
        }

        function p(t) { return x = void 0, T && _ ? r(t) : (_ = g = void 0, w) }

        function m() { void 0 !== x && clearTimeout(x), S = 0, _ = P = g = x = void 0 }

        function v() { return void 0 === x ? w : p(i()) }

        function y() {
            var t = i(),
                n = d(t);
            if (_ = arguments, g = this, P = t, n) { if (void 0 === x) return c(P); if (O) return x = setTimeout(h, e), r(P) }
            return void 0 === x && (x = setTimeout(h, e)), w
        }
        var _, g, b, w, x, P, S = 0,
            k = !1,
            O = !1,
            T = !0;
        if ("function" != typeof t) throw new TypeError(s);
        return e = a(e) || 0, o(n) && (k = !!n.leading, O = "maxWait" in n, b = O ? u(a(n.maxWait) || 0, e) : b, T = "trailing" in n ? !!n.trailing : T), y.cancel = m, y.flush = v, y
    }
    var o = n(15),
        i = n(331),
        a = n(139),
        s = "Expected a function",
        u = Math.max,
        l = Math.min;
    t.exports = r
}, function(t, e, n) {
    var r = n(5),
        o = function() { return r.Date.now() };
    t.exports = o
}, function(t, e, n) {
    var r = n(328),
        o = r();
    t.exports = o
}, function(t, e, n) {
    function r(t, e, n) {
        var r = !0,
            s = !0;
        if ("function" != typeof t) throw new TypeError(a);
        return i(n) && (r = "leading" in n ? !!n.leading : r, s = "trailing" in n ? !!n.trailing : s), o(t, e, { leading: r, maxWait: e, trailing: s })
    }
    var o = n(330),
        i = n(15),
        a = "Expected a function";
    t.exports = r
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";

    function r(t, e, n) {
        function r(t) { t.forEach(function(t) { t.series ? r(t.series) : t.label = o(t.label) }) }

        function o(t) { var e = l()(t); return e.toString = function() { return this.format("ddd, D MMM, hA") }, e }

        function i() {
            return "bar" === a || "pie" === a || e.data.length <= 1 ? { title: function(t) { return t.label.toString() }, content: function(t) { return t.value ? s + d3.format(",")(t.value) + u : "-" } } : {
                title: function(t) { return t.label.toString() },
                content: function(t) {
                    var n = [],
                        r = 0;
                    return e.data.forEach(function(e, o) {
                        var i = e.series.filter(function(e) { return e.label.toString() === t.label.toString() })[0];
                        if (i) {
                            r += i.value || 0;
                            var a = i.value ? s + d3.format(",")(i.value) + u : "-";
                            n.push("<div>", '<i style="background-color: ' + d.a[o] + ';"></i>', e.label + " : " + a, "</div>")
                        }
                    }), "stacked" === a && (r = r ? s + d3.format(",")(r) + u : "-", n.push('<div class="total">', "<span>Total : </span>", r, "</div>")), n.join("")
                }
            }
        }
        var a = n.type,
            s = n.prefix || "",
            u = n.units || "",
            h = t.data("chart");
        h && h.unmount(), "timeseries" === a && r(e.data);
        var p = c[e.chartType];
        if (h = new p(e), e.plugins && e.plugins.forEach(function(t) {
                (0, f[t])(h, t.match(/popover/i) && i())
            }), "timeseries" === a) {
            h.xAxis.tierLabelPositions(["center"]);
            var m = h.xAxis.axisConfigurations(),
                v = m.map(function(t) { return t.slice(0, 1) });
            h.xAxis.axisConfigurations(v)
        }
        h.mount(t[0]), t.data("chart", h)
    }

    function o(t, e, n) { e.timeLabel && t.next(".info-value").find(".info-timestamp").text("as of " + e.timeLabel), e.columns[e.columns.length - 1].render = function(t) { return t + (n.units || "") }, t.dataTable({ columns: e.columns, data: e.rows, destroy: !0, paging: !1, ordering: !1, info: !1, dom: "t" }) }

    function i(t, e, n) {
        var r = n.prefix || "",
            o = "%" === n.units ? "%" : "",
            i = t.find(".values");
        i.empty(), e.series.forEach(function(t) {
            var n = $("<div></div>").addClass("value"),
                a = $("<div></div>").addClass("value-label");
            if (e.series.length > 1) {
                var s = (100 - 3 * (e.series.length - 1)) / e.series.length + "%";
                n.css("width", s), a.append(t.label), n.append(a)
            }
            n.append('<span class="prefix">' + r + "</span>" + d3.format(",")(t.value) + o), i.append(n)
        }), t.find(".info-timestamp").text(" in " + e.label), 2 === e.series.length ? i.addClass("values-small") : e.length > 2 && (i.addClass("values-xsmall"), e.length > 5 && t.addClass("hidden-phone"))
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = n(251),
        s = n.n(a),
        u = n(255),
        l = n.n(u),
        c = n(254),
        f = n(144),
        d = n(95),
        h = $(window);
    $(".row-scroll").scroll(function() { return h.scroll() }), $(".infocard:not(.map)").appear(), $(document.body).on("appear", ".infocard:not(.map)", function(t, e) {
        e.each(function() {
            function t(t, e, n, r, o) { a.find(".content-error").hide(), a.find(".content-loading").show(), s()({ method: t, url: "https://microservices.data.gov.sg/infocard", params: e, data: n }).then(function(t) { return t.data }).then(r).catch(o) }

            function e(t) { a.find(".content-loading").remove(), t.timeLabel && a.find(".date").text("(" + t.timeLabel + ")"), "chart" === t.type ? r(a.find(".chart"), t.chart, u) : "table" === t.type ? o(a.find("table"), t.table, u) : "figures" === t.type && (i(a.find(".info-before"), t.oldest, u), i(a.find(".info-after"), t.newest, u)) }

            function n(t) { console.error(t), a.find(".content-loading").hide(), a.find(".content-error").show() }
            var a = $(this);
            if (!a.hasClass("loaded")) {
                a.addClass("loaded");
                var u = {},
                    l = a.data();
                for (var c in l) {
                    var f = c.replace(/^module/, "");
                    f = f.charAt(0).toLowerCase() + f.slice(1), u[f] = l[c] || !0
                }
                if (u.realtime && "line" === u.type && (u.type = "timeseries"), u.units && "%" !== u.units && (u.units = " " + u.units), u.dashboardCardId) {
                    var d = { dashboard_card_id: u.dashboardCardId };
                    u.realtime ? (t("GET", d, null, e, n), u.realtime && u.refreshInterval && window.setInterval(t, parseInt(u.refreshInterval), "GET", d, null, e, n)) : t("GET", d, null, e, n)
                } else t("POST", null, { dashboard_card: u.card }, e, n)
            }
        })
    }), $.force_appear()
}]);
//# sourceMappingURL=infocard.js.map