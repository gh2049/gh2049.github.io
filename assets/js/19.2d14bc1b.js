(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{51:function(e,n,t){"use strict";t.r(n);var r=t(0),c=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"content"},[n("p",[this._v("此类同步加载风格不适合在客户端实现，但是在 Nodejs 中是一个很好的模块化加载方案。")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('function require(name) {\n\t\n\t// 调用一个模块，首先检查这个模块是否已被调用\n    if(name in require.cache) {\n        return require.cache[name];\n    }\n\n    var code = new Function("exports, module",readFile(name));\n    var exports = {},\n        module = {exports: exports};\n    code(exports, module);\n\n    require.cache[name] = module.exports;\n    return module.exports;\n}\n\n// 缓存对象，为了应对重复调用的问题\t\nrequire.cache = Object.create(null);\n\n// 读取文件的功能\nfunction readFile(fileName) { ... }\n')])])])}],!1,null,null,null);n.default=c.exports}}]);