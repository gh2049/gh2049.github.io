(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{54:function(e,n,t){"use strict";t.r(n);var r=t(0),a=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"content"},[n("h4",{attrs:{id:"采用中序遍历"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#采用中序遍历","aria-hidden":"true"}},[this._v("#")]),this._v(" 采用中序遍历")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("// 下面是二叉树的构造函数，\n// 三个参数分别是左树、当前节点和右树\nfunction Tree(left, label, right) {\n  this.left = left;\n  this.label = label;\n  this.right = right;\n}\n\n// 下面是中序（inorder）遍历函数。\n// 由于返回的是一个遍历器，所以要用generator函数。\n// 函数体内采用递归算法，所以左树和右树要用yield*遍历\nfunction* inorder(t) {\n  if (t) {\n    yield* inorder(t.left);\n    yield t.label;\n    yield* inorder(t.right);\n  }\n}\n\n// 下面生成二叉树\nfunction make(array) {\n  // 判断是否为叶节点\n  if (array.length == 1) return new Tree(null, array[0], null);\n  return new Tree(make(array[0]), array[1], make(array[2]));\n}\nlet tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);\n\n// 遍历二叉树\nvar result = [];\nfor (let node of inorder(tree)) {\n  result.push(node);\n}\n\nresult\n// ['a', 'b', 'c', 'd', 'e', 'f', 'g']\n")])]),n("p",[this._v("来自 "),n("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/generator",target:"_blank",rel:"noopener noreferrer"}},[this._v("《ECMAScript 6 入门》")])])])}],!1,null,null,null);n.default=a.exports}}]);