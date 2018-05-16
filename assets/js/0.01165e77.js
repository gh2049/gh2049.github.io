(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{59:function(a,e,t){"use strict";t.r(e);var r=t(0),d=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"mongodb-聚合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-聚合","aria-hidden":"true"}},[a._v("#")]),t("strong",[a._v("MongoDB 聚合")])]),t("p",[a._v("MongoDB中聚合(aggregate)主要用于处理数据(诸如统计平均值,求和等)，并返回计算后的数据结果。有点类似sql语句中的 count(*)。")]),t("h2",{attrs:{id:"aggregate-方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aggregate-方法","aria-hidden":"true"}},[a._v("#")]),t("strong",[a._v("aggregate() 方法")])]),t("p",[a._v("MongoDB中聚合的方法使用aggregate()。")]),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[a._v("#")]),t("strong",[a._v("语法")])]),t("p",[a._v("aggregate() 方法的基本语法格式如下所示：")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(">db.COLLECTION_NAME.aggregate(AGGREGATE_OPERATION)\n")])]),t("h3",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例","aria-hidden":"true"}},[a._v("#")]),t("strong",[a._v("实例")])]),t("p",[a._v("userinfo集合中的数据如下：")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{{ "_id" : ObjectId("57a07aace6cf836271b9b597"), "userId" : 21, "age" : 39 }\n "_id" : ObjectId("57a07aace6cf836271b9b598"), "userId" : 22, "age" : 40 }\n{ "_id" : ObjectId("57a07aace6cf836271b9b599"), "userId" : 23, "age" : 41 }\n{ "_id" : ObjectId("57a07aace6cf836271b9b59a"), "userId" : 24, "age" : 42 }\n{ "_id" : ObjectId("57a07aace6cf836271b9b59b"), "userId" : 25, "age" : 43 }\n{ "_id" : ObjectId("57a07aace6cf836271b9b59c"), "userId" : 26, "age" : 44 }\n{ "_id" : ObjectId("57a07aace6cf836271b9b59d"), "userId" : 27, "age" : 45 }\n{ "_id" : ObjectId("57a07aace6cf836271b9b59e"), "userId" : 28, "age" : 46 }\n{ "_id" : ObjectId("57a07aace6cf836271b9b59f"), "userId" : 29, "age" : 47 }\n{ "_id" : ObjectId("57a07aace6cf836271b9b5a0"), "userId" : 30, "age" : 48 }\n{ "_id" : ObjectId("57a07aace6cf836271b9b5a1"), "userId" : 31, "age" : 49 }\n{ "_id" : ObjectId("57a07aace6cf836271b9b5a2"), "userId" : 32, "age" : 50 }\n{ "_id" : ObjectId("57a07aace6cf836271b9b5a3"), "userId" : 33, "age" : 51 }\n{ "_id" : ObjectId("57a07aace6cf836271b9b5a4"), "userId" : 34, "age" : 52 }\n{ "_id" : ObjectId("57a07aace6cf836271b9b5a5"), "userId" : 35, "age" : 53 }\n{ "_id" : ObjectId("57a07aace6cf836271b9b5a6"), "userId" : 36, "age" : 54 }\n\n')])]),t("p",[a._v("我们先来新增方便group(分组)的一个 school 学校字段。")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('db.userinfo.update({"userId":{$gt:50}}, {$set: {"school": \'Tsinghua\'}}, {multi: 1});\ndb.userinfo.update({"userId":{$lt:50}}, {$set: {"school": \'PKU\'}}, {multi: 1});\n')])]),t("p",[a._v("现在我们通过以上集合计算按照学校分组的总人数，使用aggregate()计算结果如下：")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('> db.userinfo.aggregate([{$group : {_id : "$school", count_user : {$sum : 1}}}]);{ "_id" : "Tsinghua", "count_user" : 49 }{ "_id" : "PKU", "count_user" : 49 }\n')])]),t("p",[a._v("在上面的例子中，我们通过字段school字段对数据进行分组。下表展示了一些聚合的表达式。")]),t("table",[t("thead",[t("tr",[t("th")])]),t("tbody",[t("tr",[t("td",[a._v("$sum")])]),t("tr",[t("td",[a._v("$avg")])]),t("tr",[t("td",[a._v("$min")])]),t("tr",[t("td",[a._v("$max")])])])])])}],!1,null,null,null);e.default=d.exports}}]);