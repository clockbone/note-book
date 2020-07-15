(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{1338:function(e,a,s){"use strict";s.r(a);var t=s(15),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_015-redis-replication-以及-master-持久化对主从架构的安全意义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_015-redis-replication-以及-master-持久化对主从架构的安全意义"}},[e._v("#")]),e._v(" 015. redis replication 以及 master 持久化对主从架构的安全意义")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#图解-redis-replication-基本原理"}},[e._v("图解 redis replication 基本原理")])]),t("li",[t("a",{attrs:{href:"#redis-replication-的核心机制"}},[e._v("redis replication 的核心机制")])]),t("li",[t("a",{attrs:{href:"#master-持久化对于主从架构的安全保障的意义"}},[e._v("master 持久化对于主从架构的安全保障的意义")])])])]),t("p"),e._v(" "),t("p",[e._v("redis 高并发的思路：redis replication -> 主从架构 -> 读写分离 -> 水平扩容支撑高并发")]),e._v(" "),t("p",[e._v("本章节主要讲解 redis replication 的最最基本的原理，作为铺垫")]),e._v(" "),t("h2",{attrs:{id:"图解-redis-replication-基本原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图解-redis-replication-基本原理"}},[e._v("#")]),e._v(" 图解 redis replication 基本原理")]),e._v(" "),t("p",[t("img",{attrs:{src:s(430),alt:""}})]),e._v(" "),t("p",[e._v("在前一章节基本上已经讲过了，如上图差不多。写操作成功之后，会异步的把数据复制到 slave 上")]),e._v(" "),t("h2",{attrs:{id:"redis-replication-的核心机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-replication-的核心机制"}},[e._v("#")]),e._v(" redis replication 的核心机制")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("redis 采用异步方式复制数据到 slave 节点")]),e._v(" "),t("p",[e._v("不过 redis 2.8 开始，slave node 会周期性地确认自己每次复制的数据量")])]),e._v(" "),t("li",[t("p",[e._v("一个 master node 是可以配置多个 slave node 的")])]),e._v(" "),t("li",[t("p",[e._v("slave node 也可以连接其他的 slave node")])]),e._v(" "),t("li",[t("p",[e._v("slave node 做复制的时候，是不会 block master node 的正常工作的")])]),e._v(" "),t("li",[t("p",[e._v("slave node 在做复制的时候，也不会 block 对自己的查询操作")]),e._v(" "),t("p",[e._v("它会用旧的数据集来提供服务; 但是复制完成的时候，需要删除旧数据集，加载新数据集，这个时候就会暂停对外服务了")])]),e._v(" "),t("li",[t("p",[e._v("slave node 主要用来进行横向扩容，做读写分离，扩容的 slave node 可以提高读的吞吐量")])])]),e._v(" "),t("p",[e._v("实现高可用性 slave 有很大的关系，后面会讲解")]),e._v(" "),t("h2",{attrs:{id:"master-持久化对于主从架构的安全保障的意义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#master-持久化对于主从架构的安全保障的意义"}},[e._v("#")]),e._v(" master 持久化对于主从架构的安全保障的意义")]),e._v(" "),t("p",[e._v("如果采用了主从架构，那么建议必须开启 master node 的持久化！")]),e._v(" "),t("p",[e._v("很简单的道理，master 提供写，它自己的数据是最完整的，所以需要它自己来做持久化。")]),e._v(" "),t("p",[e._v("如果不使用 master 做持久化的冷备，而采用 slave 来做冷备的话，当 master 死机再重启，因为自己本地没有数据，会将空的数据同步到所有的 slave 上去。")]),e._v(" "),t("p",[e._v("其次 master 的各种备份方案，要不要做，万一说本地的所有文件丢失了; 从备份中挑选一份 rdb 去恢复 master; 这样才能确保 master 启动的时候，是有数据的")]),e._v(" "),t("p",[e._v("后面会讲解哨兵（sentinal）高可用机制，即使采用了该高可用机制，slave node 可以自动接管 master node，但是也可能 sentinal 还没有检测到 master failure，master node 就自动重启了，还是可能导致上面的所有 slave node 数据清空故障")]),e._v(" "),t("p",[e._v("总结：")]),e._v(" "),t("ol",[t("li",[e._v("master 持久化开启")]),e._v(" "),t("li",[e._v("冷备方案一定要做（之前讲解的定时备份的方案）")])])])}),[],!1,null,null,null);a.default=r.exports},430:function(e,a,s){e.exports=s.p+"assets/img/markdown-img-paste-20190321222507854.b4daec81.png"}}]);