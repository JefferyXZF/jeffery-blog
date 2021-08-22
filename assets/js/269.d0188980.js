(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{700:function(t,a,s){"use strict";s.r(a);var n=s(11),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"自定义打印功能实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义打印功能实现"}},[t._v("#")]),t._v(" 自定义打印功能实现")]),t._v(" "),s("h2",{attrs:{id:"自定义打印设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义打印设置"}},[t._v("#")]),t._v(" 自定义打印设置")]),t._v(" "),s("p",[t._v("自定义打印设置主要分为四个部分："),s("strong",[t._v("字段拖拽组件")]),t._v("、"),s("strong",[t._v("工具栏组件")]),t._v("、"),s("strong",[t._v("页面按钮组件")]),t._v("、"),s("strong",[t._v("渲染表格组件")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/FIF/pic-beg/raw/master/images/lowcode/image-20210809172809967.png",alt:"image-20210809172809967"}})]),t._v(" "),s("h2",{attrs:{id:"表单字段-系统字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表单字段-系统字段"}},[t._v("#")]),t._v(" 表单字段&系统字段")]),t._v(" "),s("p",[t._v("字段拖拽区域分为表单字段和系统字段，表单字段又划分为内容和标题两部分")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("表单字段-内容")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("表单字段-标题")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:"https://gitee.com/FIF/pic-beg/raw/master/images/lowcode/image-20210809174728859.png",alt:"image-20210809174728859"}})]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:"https://gitee.com/FIF/pic-beg/raw/master/images/lowcode/image-20210809174757045.png",alt:"image-20210809174757045"}})])])])]),t._v(" "),s("h3",{attrs:{id:"实现逻辑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现逻辑"}},[t._v("#")]),t._v(" 实现逻辑")]),t._v(" "),s("p",[t._v("表单字段和系统字段是两个按钮，默认显示表单字段")]),t._v(" "),s("ul",[s("li",[t._v("表单字段是动态数据，根据表单的字段显示，包括内容和标题两部分")]),t._v(" "),s("li",[t._v("系统字段包括自定义的固定的字段，比如评论、提单人、提单时间等")])]),t._v(" "),s("p",[s("strong",[t._v("拖拽事件")])]),t._v(" "),s("p",[t._v("完成这个功能主要用了以下几个事件，"),s("a",{attrs:{href:"https://jefferyxzf.github.io/jeffery-blog/pages/seedseegg/",target:"_blank",rel:"noopener noreferrer"}},[t._v("拖拽事件介绍参考这篇文章"),s("OutboundLink")],1)]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("事件")]),t._v(" "),s("th",[t._v("功能")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("dragstart")]),t._v(" "),s("td",[t._v("开始拖拽")])]),t._v(" "),s("tr",[s("td",[t._v("dragend")]),t._v(" "),s("td",[t._v("拖拽释放")])]),t._v(" "),s("tr",[s("td",[t._v("dragover")]),t._v(" "),s("td",[t._v("拖拽悬浮【目标元素】")])]),t._v(" "),s("tr",[s("td",[t._v("dragenter")]),t._v(" "),s("td",[t._v("拖拽进入【目标元素】")])]),t._v(" "),s("tr",[s("td",[t._v("drop")]),t._v(" "),s("td",[t._v("拖拽释放【目标元素】")])])])]),t._v(" "),s("p",[t._v("使用原生拖拽事件实现，在标签添加 "),s("code",[t._v("draggable")]),t._v(" 属性，在按钮上添加 "),s("code",[t._v("dragstart")]),t._v(" 和 "),s("code",[t._v("dragend")]),t._v(" 事件")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("draggable")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@dragstart")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("drag($event,item)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@dragend")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("end($event)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  [内容] {{ item.label }}\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[s("strong",[t._v("dragstart 的实现")])]),t._v(" "),s("p",[t._v("开始拖拽的时候，清空当前选中的单元格，将拖拽的信息存储到对象上")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("drag")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isTitle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearCurrentCell")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dom "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" field"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" prop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isTitle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" isTitle "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("clearCurrentCell")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentCell "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("通过html2canvas的方法将canvas和表单内容提取出并转成图片，canvas内容不会丢失")]),t._v(" "),s("h2",{attrs:{id:"拓展阅读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拓展阅读"}},[t._v("#")]),t._v(" 拓展阅读")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://alexwjj.github.io/pages/bc7fdbb035246/",target:"_blank",rel:"noopener noreferrer"}},[t._v("web打印，一篇搞定"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);