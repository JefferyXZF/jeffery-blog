(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{617:function(t,s,a){"use strict";a.r(s);var n=a(11),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue-router-进阶知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-进阶知识"}},[t._v("#")]),t._v(" Vue-Router 进阶知识")]),t._v(" "),a("h3",{attrs:{id:"什么是vue-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是vue-router"}},[t._v("#")]),t._v(" 什么是vue-router")]),t._v(" "),a("p",[t._v("Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。包含的功能有：")]),t._v(" "),a("ul",[a("li",[t._v("嵌套的路由/视图表")]),t._v(" "),a("li",[t._v("模块化的、基于组件的路由配置")]),t._v(" "),a("li",[t._v("路由参数、查询、通配符")]),t._v(" "),a("li",[t._v("基于 Vue.js 过渡系统的视图过渡效果")]),t._v(" "),a("li",[t._v("细粒度的导航控制")]),t._v(" "),a("li",[t._v("带有自动激活的 CSS class 的链接")]),t._v(" "),a("li",[t._v("HTML5 历史模式或 hash 模式，在 IE9 中自动降级")]),t._v(" "),a("li",[t._v("自定义的滚动条行为")])]),t._v(" "),a("h3",{attrs:{id:"相同的路由组件如何重新渲染？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相同的路由组件如何重新渲染？"}},[t._v("#")]),t._v(" 相同的路由组件如何重新渲染？")]),t._v(" "),a("blockquote",[a("p",[t._v("开发人员经常遇到的情况是，多个路由解析为同一个Vue组件。问题是，Vue出于性能原因，默认情况下共享组件将不会重新渲染，如果你尝试在使用相同组件的路由之间进行切换，则不会发生任何变化。")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" routes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyComponent\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyComponent\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("blockquote",[a("p",[t._v("如果依然想重新渲染，怎么办呢？可以使用"),a("code",[t._v("key")])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("view "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$route.path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("view"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"vue-router-中常用的路由模式实现原理吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-中常用的路由模式实现原理吗"}},[t._v("#")]),t._v(" vue-router 中常用的路由模式实现原理吗")]),t._v(" "),a("p",[a("strong",[t._v("hash 模式")])]),t._v(" "),a("ol",[a("li",[t._v("location.hash 的值实际就是 URL 中#后面的东西 它的特点在于：hash 虽然出现 URL 中，但不会被包含在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。")]),t._v(" "),a("li",[t._v("可以为 hash 的改变添加监听事件")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hashchange"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" funcRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("每一次改变 hash（window.location.hash），都会在浏览器的访问历史中增加一个记录利用 hash 的以上特点，就可以来实现前端路由“更新视图但不重新请求页面”的功能了")]),t._v(" "),a("blockquote",[a("p",[t._v("特点：兼容性好但是不美观")])]),t._v(" "),a("p",[a("strong",[t._v("history 模式")])]),t._v(" "),a("p",[t._v("利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。")]),t._v(" "),a("p",[t._v("这两个方法应用于浏览器的历史记录站，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。这两个方法有个共同的特点：当调用他们修改浏览器历史记录栈后，虽然当前 URL 改变了，但浏览器不会刷新页面，这就为单页应用前端路由“更新视图但不重新请求页面”提供了基础。")]),t._v(" "),a("blockquote",[a("p",[t._v("特点：虽然美观，但是刷新会出现 404 需要后端进行配置")])]),t._v(" "),a("h3",{attrs:{id:"vue-router-路由钩子函数是什么-执行顺序是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-路由钩子函数是什么-执行顺序是什么"}},[t._v("#")]),t._v(" vue-router 路由钩子函数是什么 执行顺序是什么")]),t._v(" "),a("p",[t._v("路由钩子的执行流程, 钩子函数种类有:全局守卫、路由守卫、组件守卫")]),t._v(" "),a("p",[a("strong",[t._v("完整的导航解析流程:")])]),t._v(" "),a("ol",[a("li",[t._v("导航被触发。")]),t._v(" "),a("li",[t._v("在失活的组件里调用 beforeRouteLeave 守卫。")]),t._v(" "),a("li",[t._v("调用全局的 beforeEach 守卫。")]),t._v(" "),a("li",[t._v("在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。")]),t._v(" "),a("li",[t._v("在路由配置里调用 beforeEnter。")]),t._v(" "),a("li",[t._v("解析异步路由组件。")]),t._v(" "),a("li",[t._v("在被激活的组件里调用 beforeRouteEnter。")]),t._v(" "),a("li",[t._v("调用全局的 beforeResolve 守卫 (2.5+)。")]),t._v(" "),a("li",[t._v("导航被确认。")]),t._v(" "),a("li",[t._v("调用全局的 afterEach 钩子。")]),t._v(" "),a("li",[t._v("触发 DOM 更新。")]),t._v(" "),a("li",[t._v("调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。")])]),t._v(" "),a("h3",{attrs:{id:"vue-router-动态路由是什么-有什么问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-动态路由是什么-有什么问题"}},[t._v("#")]),t._v(" vue-router 动态路由是什么 有什么问题")]),t._v(" "),a("p",[t._v("我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 vue-router 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<div>User</div>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 动态路径参数 以冒号开头")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/user/:id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" User "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("blockquote",[a("p",[t._v("问题:vue-router 组件复用导致路由参数失效怎么办？")])]),t._v(" "),a("p",[t._v("解决方法：")]),t._v(" "),a("p",[t._v("1.通过 watch 监听路由参数再发请求")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("watch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通过watch来监听路由变化")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$route"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h3",{attrs:{id:"路由按需加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由按需加载"}},[t._v("#")]),t._v(" 路由按需加载")]),t._v(" "),a("p",[t._v("随着项目功能模块的增加，引入的文件数量剧增。如果不做任何处理，那么首屏加载会相当的缓慢，这个时候，路由按需加载就闪亮登场了。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("webpack"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.4")]),t._v(" 时\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("components")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \nwebpack"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.4")]),t._v(" 时\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("components")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("import() 方法是由es6提出的，动态加载返回一个Promise对象，then方法的参数是加载到的模块。类似于Node.js的require方法，主要import()方法是异步加载的。")]),t._v(" "),a("h3",{attrs:{id:"vue里面router-link在电脑上有用，在安卓上没反应怎么解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue里面router-link在电脑上有用，在安卓上没反应怎么解决"}},[t._v("#")]),t._v(" Vue里面router-link在电脑上有用，在安卓上没反应怎么解决")]),t._v(" "),a("p",[t._v("Vue路由在Android机上有问题，babel问题，安装babel polypill插件解决")]),t._v(" "),a("h3",{attrs:{id:"vue2中注册在router-link上事件无效解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue2中注册在router-link上事件无效解决方法"}},[t._v("#")]),t._v(" Vue2中注册在router-link上事件无效解决方法")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("@click.native")]),t._v("。原因：router-link会阻止click事件，"),a("code",[t._v(".native")]),t._v(" 指直接监听一个原生事件")]),t._v(" "),a("h3",{attrs:{id:"routerlink在ie和firefox中不起作用（路由不跳转）的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routerlink在ie和firefox中不起作用（路由不跳转）的问题"}},[t._v("#")]),t._v(" RouterLink在IE和Firefox中不起作用（路由不跳转）的问题")]),t._v(" "),a("ul",[a("li",[t._v("只用a标签，不使用button标签")]),t._v(" "),a("li",[t._v("使用button标签和Router.navigate方法")])]),t._v(" "),a("h3",{attrs:{id:"网络请求-axios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络请求-axios"}},[t._v("#")]),t._v(" 网络请求(axios)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6847009771606769677",target:"_blank",rel:"noopener noreferrer"}},[t._v("学会了axios封装，世界都是你的"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"视频播放-video-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频播放-video-js"}},[t._v("#")]),t._v(" 视频播放(video.js)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6850037269227634702",target:"_blank",rel:"noopener noreferrer"}},[t._v("手把手从零开始---封装一个vue视频播放器组件"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);