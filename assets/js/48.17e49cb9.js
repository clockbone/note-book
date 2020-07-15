(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1025:function(s,e,n){s.exports=n.p+"assets/img/markdown-img-paste-20190621152237191.35e7cb9a.png"},1026:function(s,e,n){s.exports=n.p+"assets/img/markdown-img-paste-20190621153501604.5c4415e7.png"},1027:function(s,e,n){s.exports=n.p+"assets/img/markdown-img-paste-20190621153355852.05d5db23.png"},1058:function(s,e,n){"use strict";n.r(e);var a=n(15),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"服务端输出格式支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端输出格式支持"}},[s._v("#")]),s._v(" 服务端输出格式支持")]),s._v(" "),a("p",[s._v("配置服务支持以下格式的输出配置文件，对于 spring boot 来说，json 格式是最方便的，因为能直接映射到 Environment 对象上，\n而其他程序可以通过多种格式的支持找到自己满意的格式")]),s._v(" "),a("ul",[a("li",[a("code",[s._v(".yml")])]),s._v(" "),a("li",[a("code",[s._v(".json")])]),s._v(" "),a("li",[a("code",[s._v(".yaml")])]),s._v(" "),a("li",[a("code",[s._v(".properties")])])]),s._v(" "),a("p",[s._v("比如以下地址都是访问同一个配置文件，只是返回的数据内容格式不一样")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://localhost:11000/mrcode-dev.json\nhttp://localhost:11000/mrcode-dev.properties\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("YAML and properties 还支持 "),a("code",[s._v("${name}")]),s._v(" 的占位符，")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("test2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xx ${name}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 客户端上使用占位符，但是该 name 是在远程配置服务商的。")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("当使用 yaml 与 properties 来格式化内容的时候，有一些限制，主要与元数据的丢失有关。\n例如，JSON 结构为一个有序的属性源列表，其名称与源相关。\nyml 和 properties 被合并到一个映射中，即使值的原点有多个源，并且原始源文件的名称也会丢失。\n此外，YAML 表示也不一定是支持存储库中 YAML 源的可靠表示。由一个平面属性源列表构成，必须对键的形式进行假设。")]),s._v(" "),a("p",[s._v("上面一段话，没有遇到过那里有问题，反正也说不明白，简单说，要格式化内容请使用 json 格式")]),s._v(" "),a("h2",{attrs:{id:"纯文本支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#纯文本支持"}},[s._v("#")]),s._v(" 纯文本支持")]),s._v(" "),a("p",[s._v("你可能需要针对某些纯文本配置进行定制，而不是使用 yml 来映射 Environment 对象，\n"),a("code",[s._v("/{name}/{profile}/{label}/{path}")]),s._v(" 这个断点提供了这样的功能。前面的与 Environment 含义一样，\n最后一个 path 是一个具体的文件，如 log.xml，nginx.conf")]),s._v(" "),a("p",[s._v("下面是一个例子，提供一个纯文本的 nginx.config 配置文件，在该配置文件中通过 "),a("code",[s._v("${}")]),s._v(" 占位符引用 yml 中的一些配置属性")]),s._v(" "),a("p",[s._v("如下图所示，在一个 git 仓库中包含 application.yml 和 nginx.conf")]),s._v(" "),a("p",[a("img",{attrs:{src:n(1025),alt:""}})]),s._v(" "),a("p",[s._v("nginx.conf 文件中使用占位符应用了 环境配置文件中的 nginx.server.name 属性")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server {\n    listen              80;\n    server_name         ${nginx.server.name};\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("application.yml 作为所有客户端共享的配置文件；下面文件中的 "),a("code",[s._v("---")]),s._v(" 可以看成是使用分隔符分成了多个配置文件")]),s._v(" "),a("ul",[a("li",[s._v("default profile: 第一段配置没有指定 spring.profiles ，那么默认就是 default")]),s._v(" "),a("li",[s._v("development：第二段配置指定了 development")])]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nginx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" example.com\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("profiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" development\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nginx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" develop.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("访问地址 "),a("code",[s._v("http://localhost:11000/mrcode/default/master/nginx.conf")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server {\n    listen              80;\n    server_name         example.com;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("tip")]),s._v(" "),a("p",[s._v("在浏览器中看到的文本可能只有一行，这是因为被浏览器自动格式化了，所以可以通过下载工具进行下载，比如 360 浏览器中的下载")]),s._v(" "),a("p",[a("img",{attrs:{src:n(1026),alt:""}})]),s._v(" "),a("p",[s._v("下图是浏览器和下载后的文本内容对比")]),s._v(" "),a("p",[a("img",{attrs:{src:n(1027),alt:""}})])]),s._v(" "),a("p",[s._v("访问地址 "),a("code",[s._v("http://localhost:11000/mrcode/development/master/nginx.conf")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server {\n    listen              80;\n    server_name         develop.com;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("通过测试可以看到，配置服务支持输出占位符的纯文本，这就让配置服务中心更加的灵活了，可以给非 boot 应用提供配置服务")]),s._v(" "),a("p",[s._v("关于搜索路径，与 yml 一致，唯一的区别就是：不聚合所有匹配的资源，只返回第一个匹配的资源。")]),s._v(" "),a("p",[s._v("与用于环境配置的源文件一样，配置文件用于解析文件名。因此，如果您想要一个特定于 profile 的文件，\n可以使用一个名为 "),a("code",[s._v("logback-development.xml")]),s._v(" 的文件解析 "),a("code",[s._v("/*/development/*/logback.xml")]),s._v(" (而不是 logback.xml)。")]),s._v(" "),a("p",[s._v("如同时存在以下两个文件，访问地址 "),a("code",[s._v("http://localhost:11000/mrcode/development/master/nginx.conf")]),s._v("，将匹配 nginx-development.conf")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nginx.conf\nnginx-development.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);