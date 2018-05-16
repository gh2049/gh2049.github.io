(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{61:function(t,e,a){"use strict";a.r(e);var l=a(0),s=Object(l.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"nosql-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nosql-简介","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("NoSQL 简介")])]),a("p",[t._v('NoSQL(NoSQL = Not Only SQL )，意即"不仅仅是SQL"。')]),a("p",[t._v("在现代的计算系统上每天网络上都会产生庞大的数据量。")]),a("p",[t._v("这些数据有很大一部分是由关系数据库管理系统（RDMBSs）来处理，这使得数据建模和应用程序编程更加简单。")]),a("p",[t._v("通过应用实践证明，关系模型是非常适合于客户服务器编程，今天它是结构化数据存储在网络和商务应用的主导技术。")]),a("p",[t._v("NoSQL 是一项全新的数据库革命性运动，早期就有人提出，发展至2009年趋势越发高涨。NoSQL的拥护者们提倡运用非关系型的数据存储，相对于铺天盖地的关系型数据库运用，这一概念无疑是一种全新的思维的注入，目前市面是流行的有："),a("strong",[t._v("CouchDB，Hbase，cassandra，redis等。")])]),a("h2",{attrs:{id:"关系型数据库遵循acid规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关系型数据库遵循acid规则","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("关系型数据库遵循ACID规则")])]),a("p",[t._v("事务在英文中是transaction，和现实世界中的交易很类似，它有如下四个特性：")]),a("p",[a("strong",[t._v("1、A (Atomicity) 原子性")]),t._v("原子性很容易理解，也就是说事务里的所有操作要么全部做完，要么都不做，事务成功的条件是事务里的所有操作都成功，只要有一个操作失败，整个事务就失败，需要回滚。")]),a("p",[t._v("比如银行转账，从A账户转100元至B账户，分为两个步骤：1）从A账户取100元；2）存入100元至B账户。这两步要么一起完成，要么一起不完成，如果只完成第一步，第二步失败，钱会莫名其妙少了100元。")]),a("p",[a("strong",[t._v("2、C (Consistency) 一致性")]),t._v("一致性也比较容易理解，也就是说数据库要一直处于一致的状态，事务的运行不会改变数据库原本的一致性约束。")]),a("p",[t._v("例如现有完整性约束a+b=10，如果一个事务改变了a，那么必须得改变b，使得事务结束后依然满足a+b=10，否则事务失败。")]),a("p",[a("strong",[t._v("3、I (Isolation) 独立性")]),t._v("所谓的独立性是指并发的事务之间不会互相影响，如果一个事务要访问的数据正在被另外一个事务修改，只要另外一个事务未提交，它所访问的数据就不受未提交事务的影响。比如现有有个交易是从A账户转100元至B账户，在这个交易还未完成的情况下，如果此时B查询自己的账户，是看不到新增加的100元的。")]),a("p",[a("strong",[t._v("4、D (Durability) 持久性")]),t._v("持久性是指一旦事务提交后，它所做的修改将会永久的保存在数据库上，即使出现宕机也不会丢失。")]),a("h2",{attrs:{id:"为什么使用nosql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用nosql","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("为什么使用NoSQL ?")])]),a("p",[t._v("今天我们可以通过第三方平台（如：Google,Facebook等）可以很容易的访问和抓取数据。用户的个人信息，社交网络，地理位置，用户生成的数据和用户操作日志已经成倍的增加。我们如果要对这些用户数据进行挖掘，那SQL数据库已经不适合这些应用了, NoSQL数据库的发展也却能很好的处理这些大的数据。")]),a("h2",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("实例")])]),a("p",[t._v("社会化关系网:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Each record: UserID1, UserID2  \nSeparate records: UserID, first_name,last_name, age, gender,...  \nTask: Find all friends of friends of friends of ... friends of a given user.\n\n")])]),a("p",[t._v("Wikipedia 页面 :")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Large collection of documents  \nCombination of structured and unstructured data  \nTask: Retrieve all pages regarding athletics of Summer Olympic before 1950.\n\n")])]),a("h2",{attrs:{id:"rdbms-vs-nosql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rdbms-vs-nosql","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("RDBMS vs NoSQL")])]),a("p",[a("strong",[t._v("RDBMS")])]),a("ul",[a("li",[t._v("高度组织化结构化数据")]),a("li",[t._v("结构化查询语言（SQL） (SQL)")]),a("li",[t._v("数据和关系都存储在单独的表中。")]),a("li",[t._v("数据操纵语言，数据定义语言")]),a("li",[t._v("严格的一致性")]),a("li",[t._v("基础事务")])]),a("p",[a("strong",[t._v("NoSQL")])]),a("ul",[a("li",[t._v("代表着不仅仅是SQL")]),a("li",[t._v("没有声明性查询语言")]),a("li",[t._v("没有预定义的模式-键 - 值对存储，列存储，文档存储，图形数据库")]),a("li",[t._v("最终一致性，而非ACID属性")]),a("li",[t._v("非结构化和不可预知的数据")]),a("li",[t._v("CAP定理")]),a("li",[t._v("高性能，高可用性和可伸缩性")])]),a("h2",{attrs:{id:"nosql-强调"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nosql-强调","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("NoSQL 强调")])]),a("p",[t._v("Key-Value Stores和文档数据库的优点，而不是单纯的反对RDBMS。")]),a("h2",{attrs:{id:"cap定理（cap-theorem）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cap定理（cap-theorem）","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("CAP定理（CAP theorem）")])]),a("p",[t._v("在计算机科学中, CAP定理（CAP theorem）, 又被称作 布鲁尔定理（Brewer's theorem）, 它指出对于一个分布式计算系统来说，不可能同时满足以下三点:")]),a("ul",[a("li",[a("strong",[t._v("一致性(Consistency)")]),t._v(" (所有节点在同一时间具有相同的数据)")]),a("li",[a("strong",[t._v("可用性(Availability)")]),t._v(" (保证每个请求不管成功或者失败都有响应)")]),a("li",[a("strong",[t._v("分隔容忍(Partition tolerance)")]),t._v(" (系统中任意信息的丢失或失败不会影响系统的继续运作)")])]),a("p",[t._v("CAP理论的核心是：一个分布式系统不可能同时很好的满足一致性，可用性和分区容错性这三个需求，最多只能同时较好的满足两个。")]),a("p",[t._v("因此，根据 CAP 原理将 NoSQL 数据库分成了满足 CA 原则、满足 CP 原则和满足 AP 原则三 大类：")]),a("ul",[a("li",[t._v("CA - 单点集群，满足一致性，可用性的系统，通常在可扩展性上不太强大。")]),a("li",[t._v("CP - 满足一致性，分区容忍必的系统，通常性能不是特别高。")]),a("li",[t._v("AP - 满足可用性，分区容忍性的系统，通常可能对一致性要求低一些。")])]),a("h2",{attrs:{id:"nosql的优点-缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nosql的优点-缺点","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("NoSQL的优点/缺点")])]),a("p",[t._v("优点:")]),a("ul",[a("li",[a("ul",[a("li",[t._v("高可扩展性")])])]),a("li",[a("ul",[a("li",[t._v("分布式计算")])])]),a("li",[a("ul",[a("li",[t._v("低成本")])])]),a("li",[a("ul",[a("li",[t._v("架构的灵活性，半结构化数据")])])]),a("li",[a("ul",[a("li",[t._v("没有复杂的关系")])])])]),a("p",[t._v("缺点:")]),a("ul",[a("li",[a("ul",[a("li",[t._v("没有标准化")])])]),a("li",[a("ul",[a("li",[t._v("有限的查询功能（到目前为止）")])])]),a("li",[a("ul",[a("li",[t._v("事务")])])])]),a("h2",{attrs:{id:"base"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("BASE")])]),a("p",[t._v("BASE：Basically Available, Soft-state, Eventually Consistent。 由 Eric Brewer 定义。")]),a("p",[t._v("CAP理论的核心是：一个分布式系统不可能同时很好的满足一致性，可用性和分区容错性这三个需求，最多只能同时较好的满足两个。")]),a("p",[t._v("BASE是NoSQL数据库通常对可用性及一致性的弱要求原则:")]),a("ul",[a("li",[t._v("Basically Availble --基本可用")]),a("li",[t._v('Soft-state --软状态/柔性事务。 "Soft state" 可以理解为"无连接"的, 而 "Hard state" 是"面向连接"的')]),a("li",[t._v("Eventual Consistency --最终一致性 最终一致性， 也是是 ACID 的最终目的。")])]),a("h2",{attrs:{id:"acid-vs-base"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acid-vs-base","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("ACID vs BASE")])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("ACIDBASE")])]),a("th",{staticStyle:{"text-align":"left"}})])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("原子性("),a("strong",[t._v("A")]),t._v("tomicity)")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("基本可用("),a("strong",[t._v("B")]),t._v("asically "),a("strong",[t._v("A")]),t._v("vailable)")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("一致性("),a("strong",[t._v("C")]),t._v("onsistency)")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("软状态/柔性事务("),a("strong",[t._v("S")]),t._v("oft state)")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("隔离性("),a("strong",[t._v("I")]),t._v("solation)")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("最终一致性 ("),a("strong",[t._v("E")]),t._v("ventual consistency)")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("持久性 ("),a("strong",[t._v("D")]),t._v("urable)")]),a("td",{staticStyle:{"text-align":"left"}})])])]),a("p",[t._v("mark :  一篇比较好的柔性事务贴: http://www.zhihu.com/question/31813039/answer/53437637")]),a("h2",{attrs:{id:"nosql-数据库分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nosql-数据库分类","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("NoSQL 数据库分类")])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("类型部分代表特点")])]),a("th",{staticStyle:{"text-align":"left"}}),a("th",{staticStyle:{"text-align":"left"}})])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("列存储")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Hbase Cassandra Hypertable")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("顾名思义，是按列存储数据的。最大的特点是方便存储结构化和半结构化数据，方便做数据压缩，对针对某一列或者某几列的查询有非常大的IO优势。")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("文档存储")]),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://wizardforcel.gitbooks.io/w3school-mongodb/content/www.yiibai.com/mongodb",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB")]),t._v(" CouchDB")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("文档存储一般用类似json的格式存储，存储的内容是文档型的。这样也就有有机会对某些字段建立索引，实现关系数据库的某些功能。")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("key-value存储")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Tokyo Cabinet / Tyrant Berkeley DB MemcacheDB Redis")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("可以通过key快速查询到其value。一般来说，存储不管value的格式，照单全收。（Redis包含了其他功能）")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("图存储")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Neo4J FlockDB")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("图形关系的最佳存储。使用传统关系数据库来解决的话性能低下，而且设计使用不方便。")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("对象存储")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("db4o Versant")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("通过类似面向对象语言的语法操作数据库，通过对象的方式存取数据。")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("xml数据库")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Berkeley DB XML BaseX")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("高效的存储XML数据，并支持XML的内部查询语法，比如XQuery,Xpath。")])])])]),a("h1",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#","aria-hidden":"true"}},[t._v("#")])])])}],!1,null,null,null);e.default=s.exports}}]);