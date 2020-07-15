(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1205:function(s,a,e){"use strict";e.r(a);var n=e(15),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_140-商品详情页动态渲染系统：给每个机房部署一个-redis-从集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_140-商品详情页动态渲染系统：给每个机房部署一个-redis-从集群"}},[s._v("#")]),s._v(" 140. 商品详情页动态渲染系统：给每个机房部署一个 redis 从集群")]),s._v(" "),n("p",[n("img",{attrs:{src:e(381),alt:""}})]),s._v(" "),n("p",[s._v("之前的架构中是双机房，一个主集群，一个从集群。在架构链路上，从集群作为缓存中的第二级缓存，\n"),n("RouterLink",{attrs:{to:"/cache-pdp/dr/134.html"}},[s._v("这个在之前的架构中有说明")])],1),s._v(" "),n("p",[s._v("由于我们把机器压缩了，两个机房的主部署到了一台机器上。这一点不要搞混淆了。")]),s._v(" "),n("p",[s._v("接下来，再部署两个 redis 从，来看下现在 redis 实例的分布")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("                             ← 192.168.99.12 slave: 6405  并列作为 6401 的从\n192.168.99.11 master：6401   ← 192.168.99.11 slave: 6405\n192.168.99.11 slave: 6403 ↑\n192.168.99.12 slave: 6401 ↑\n192.168.99.12 slave: 6403 ↑\n\n                             ← 192.168.99.12 slave: 6406  并列作为 6402 的从\n192.168.99.11 master：6402   ← 192.168.99.11 slave: 6406\n192.168.99.11 slave: 6404 ↑\n192.168.99.12 slave: 6402 ↑\n192.168.99.12 slave: 6404 ↑\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("来看下挂载的主从信息")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@eshop-detail01 redis-2.8.19]# src/redis-cli -p 6401\n127.0.0.1:6401> info replication\n# Replication\nrole:master\nconnected_slaves:3 # 3 个从，和上面示意的一模一样\nslave0:ip=192.168.99.11,port=6403,state=online,offset=3007,lag=0 # 树形从\nslave1:ip=192.168.99.11,port=6405,state=online,offset=3007,lag=0 # 单节点从\nslave2:ip=192.168.99.12,port=6405,state=online,offset=3007,lag=1 # 机房2单节点从\nmaster_repl_offset:3007\nrepl_backlog_active:1\nrepl_backlog_size:1048576\nrepl_backlog_first_byte_offset:2\nrepl_backlog_histlen:3006\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("搭建成功；注意这里部署的 redis 通过主从复制只实现了读写分离，但是并没有实现大数据量的存储，\n所以后面会使用中间件来把两个主集群结合起来，组成一个分布式 redis 主集群")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("疑问")]),s._v(" "),n("p",[s._v("现在一个 master 有 3 个从，当 master 挂掉之后，会变成什么样子？")])])])}),[],!1,null,null,null);a.default=t.exports},381:function(s,a,e){s.exports=e.p+"assets/img/markdown-img-paste-20190721212332467.5bfc483f.png"}}]);