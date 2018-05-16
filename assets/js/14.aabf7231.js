(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{56:function(e,n,t){"use strict";t.r(n);var i=t(0),a=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"content"},[n("p",[this._v("手淘实现的移动端适配")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v(";(function(win, lib) {\n    var doc = win.document;\n    var docEl = doc.documentElement;\n    var metaEl = doc.querySelector('meta[name=\"viewport\"]');\n    var flexibleEl = doc.querySelector('meta[name=\"flexible\"]');\n    var dpr = 0;\n    var scale = 0;\n    var tid;\n    var flexible = lib.flexible || (lib.flexible = {});\n    \n    if (metaEl) {\n        console.warn('将根据已有的meta标签来设置缩放比例');\n        var match = metaEl.getAttribute('content').match(/initial\\-scale=([\\d\\.]+)/);\n        if (match) {\n            scale = parseFloat(match[1]);\n            dpr = parseInt(1 / scale);\n        }\n    } else if (flexibleEl) {\n        var content = flexibleEl.getAttribute('content');\n        if (content) {\n            var initialDpr = content.match(/initial\\-dpr=([\\d\\.]+)/);\n            var maximumDpr = content.match(/maximum\\-dpr=([\\d\\.]+)/);\n            if (initialDpr) {\n                dpr = parseFloat(initialDpr[1]);\n                scale = parseFloat((1 / dpr).toFixed(2));    \n            }\n            if (maximumDpr) {\n                dpr = parseFloat(maximumDpr[1]);\n                scale = parseFloat((1 / dpr).toFixed(2));    \n            }\n        }\n    }\n\n    if (!dpr && !scale) {\n        var isAndroid = win.navigator.appVersion.match(/android/gi);\n        var isIPhone = win.navigator.appVersion.match(/iphone/gi);\n        var devicePixelRatio = win.devicePixelRatio;\n        if (isIPhone) {\n            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案\n            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {                \n                dpr = 3;\n            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){\n                dpr = 2;\n            } else {\n                dpr = 1;\n            }\n        } else {\n            // 其他设备下，仍旧使用1倍的方案\n            dpr = 1;\n        }\n        scale = 1 / dpr;\n    }\n\n    docEl.setAttribute('data-dpr', dpr);\n    if (!metaEl) {\n        metaEl = doc.createElement('meta');\n        metaEl.setAttribute('name', 'viewport');\n        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');\n        if (docEl.firstElementChild) {\n            docEl.firstElementChild.appendChild(metaEl);\n        } else {\n            var wrap = doc.createElement('div');\n            wrap.appendChild(metaEl);\n            doc.write(wrap.innerHTML);\n        }\n    }\n\n    function refreshRem(){\n        var width = docEl.getBoundingClientRect().width;\n        if (width / dpr > 540) {\n            width = 540 * dpr;\n        }\n        var rem = width / 10;\n        docEl.style.fontSize = rem + 'px';\n        flexible.rem = win.rem = rem;\n    }\n\n    win.addEventListener('resize', function() {\n        clearTimeout(tid);\n        tid = setTimeout(refreshRem, 300);\n    }, false);\n    win.addEventListener('pageshow', function(e) {\n        if (e.persisted) {\n            clearTimeout(tid);\n            tid = setTimeout(refreshRem, 300);\n        }\n    }, false);\n\n    if (doc.readyState === 'complete') {\n        doc.body.style.fontSize = 12 * dpr + 'px';\n    } else {\n        doc.addEventListener('DOMContentLoaded', function(e) {\n            doc.body.style.fontSize = 12 * dpr + 'px';\n        }, false);\n    }\n    \n\n    refreshRem();\n\n    flexible.dpr = win.dpr = dpr;\n    flexible.refreshRem = refreshRem;\n    flexible.rem2px = function(d) {\n        var val = parseFloat(d) * this.rem;\n        if (typeof d === 'string' && d.match(/rem$/)) {\n            val += 'px';\n        }\n        return val;\n    }\n    flexible.px2rem = function(d) {\n        var val = parseFloat(d) / this.rem;\n        if (typeof d === 'string' && d.match(/px$/)) {\n            val += 'rem';\n        }\n        return val;\n    }\n\n})(window, window['lib'] || (window['lib'] = {}));\n")])])])}],!1,null,null,null);n.default=a.exports}}]);