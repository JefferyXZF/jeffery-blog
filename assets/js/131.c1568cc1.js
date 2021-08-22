(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{562:function(s,a,t){"use strict";t.r(a);var n=t(11),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"函数即对象：一篇文章彻底搞懂javascript的函数特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数即对象：一篇文章彻底搞懂javascript的函数特点"}},[s._v("#")]),s._v(" 函数即对象：一篇文章彻底搞懂JavaScript的函数特点")]),s._v(" "),t("p",[t("code",[s._v("JavaScript")]),s._v(" 中的函数非常灵活，其根本原因在于 "),t("strong",[s._v("JavaScript 中的函数就是一种特殊的对象")]),s._v("，我们把 "),t("code",[s._v("JavaScript")]),s._v(" 中的函数称为"),t("strong",[s._v("一等公民 (First Class Function)")]),s._v("。")]),s._v(" "),t("p",[s._v("基于函数是一等公民的设计，使得 "),t("code",[s._v("JavaScript")]),s._v(" 非常容易实现一些特性，比如闭包，还有函数式编程等，而其他语言要实现这些特性就显得比较困难，比如要在 C++ 中实现闭包需要实现大量复杂的代码，而且使用起来也异常复杂。")]),s._v(" "),t("p",[s._v("函数式编程和闭包在实际的项目中会经常遇到，如果不了解这些特性，那么在使用第三方代码时就会非常吃力，同时自己也很难使用这些特性写出优雅的代码，因此很有必要了解这些特性的底层机制。")]),s._v(" "),t("h3",{attrs:{id:"什么是-javascript-中的对象？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-javascript-中的对象？"}},[s._v("#")]),s._v(" 什么是 "),t("code",[s._v("JavaScript")]),s._v(" 中的对象？")]),s._v(" "),t("p",[s._v("既然在 "),t("code",[s._v("JavaScript")]),s._v(" 中，函数就是一种特殊的对象，那我们首先要明白，什么是 "),t("code",[s._v("JavaScript")]),s._v(" 中的“对象”？它和面向对象语言中的“对象”有什么区别？")]),s._v(" "),t("p",[s._v("和其他主流语言不一样的是，"),t("code",[s._v("JavaScript")]),s._v(" 是一门基于对象 (Object-Based) 的语言，可以说 "),t("code",[s._v("JavaScript")]),s._v(" 中大部分的内容都是由对象构成的，诸如函数、数组，也可以说 "),t("code",[s._v("JavaScript")]),s._v(" 是建立在对象之上的语言。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/FIF/pic-beg/raw/master/images/javascript/9e946bbdc54f5e1347f7b593f8f6fff8.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("而这些对象在运行时可以动态修改其内容，这造就了 "),t("code",[s._v("JavaScript")]),s._v(" 的超级灵活特性。不过，因为 "),t("code",[s._v("JavaScript")]),s._v(" 太灵活了，也加大了理解和使用这门语言的难度。")]),s._v(" "),t("p",[s._v("虽然 "),t("code",[s._v("JavaScript")]),s._v(" 是基于对象设计的，但是它却不是一门"),t("strong",[s._v("面向对象的语言 (Object—Oriented Programming Language)")]),s._v("，因为面向对象语言天生支持"),t("strong",[s._v("封装、继承、多态")]),s._v("，但是 "),t("code",[s._v("JavaScript")]),s._v(" 并没有直接提供多态的支持，因此要在 "),t("code",[s._v("JavaScript")]),s._v(" 中使用多态并不是一件容易的事。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/FIF/pic-beg/raw/master/images/javascript/eff1c1c773835b79ce597a84b2f94a00.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("除了对多态支持的不好，"),t("code",[s._v("JavaScript")]),s._v(" 实现继承的方式和面向对象的语言实现继承的方式同样存在很大的差异。")]),s._v(" "),t("p",[s._v("面向对象语言是由语言本身对继承做了充分的支持，并提供了大量的关键字，如 "),t("code",[s._v("public、protected、friend、interface")]),s._v(" 等，众多的关键字使得面向对象语言的继承变得异常繁琐和复杂，而 "),t("code",[s._v("JavaScript")]),s._v(" 中实现继承的方式却非常简单清爽，"),t("strong",[s._v("只是在对象中添加了一个称为原型的属性，把继承的对象通过原型链接起来，就实现了继承，我们把这种继承方式称为基于原型链继承")]),s._v("。")]),s._v(" "),t("p",[s._v("既然“JavaScript 中的对象”和“面向对象语言中的对象”存在巨大差异，那么在 "),t("code",[s._v("JavaScript")]),s._v(" 中，我们所谈论的对象到底是指什么呢？")]),s._v(" "),t("p",[s._v("其实 "),t("code",[s._v("JavaScript")]),s._v(" 中的对象非常简单，每个对象就是由一组组属性和值构成的集合，比如我使用下面代码创建了一个 "),t("code",[s._v("person")]),s._v(" 对象：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" person"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nperson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("firstname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"John"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nperson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lastname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Doe"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nperson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nperson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("eyecolor"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blue"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("这个对象里面有四个属性，为了直观理解，你可以参看下图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/FIF/pic-beg/raw/master/images/javascript/d07e174001a29765a3575908e3704123.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("上图展示了对象 "),t("code",[s._v("person")]),s._v(" 的结构，我们可以看到蓝色的属性在左边，黄色的值在右边，有多组属性和值组成，这就是 "),t("code",[s._v("JavaScript")]),s._v(" 中的对象，虽然 "),t("code",[s._v("JavaScript")]),s._v(" 对象用途非常广泛，使用的方式也非常之多，但是万变不离其宗，其核心本质都就是由一组组属性和值组成的集合，抓住了这一点，当我们再分析对象时，就会轻松很多。")]),s._v(" "),t("p",[s._v("之所以 "),t("code",[s._v("JavaScript")]),s._v(" 中对象的用途这么广，是因为对象的值可以是任意类型的数据，我们可以改造下上面的那段代码，来看看对象的值都有哪些类型？改造后的代码如下所示：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" person"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nperson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("firstname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"John"')]),s._v("\nperson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lastname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Doe"')]),s._v("\nperson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("info "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nperson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("\nperson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("eyecolor"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blue"')]),s._v("\nperson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("showinfo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*...*/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("我们可以先画出这段代码的内存布局，如下图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/FIF/pic-beg/raw/master/images/javascript/f73524e4cae884747ae528d999fc1117.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("观察上图，我们可以看出来，对象的属性值有三种类型：")]),s._v(" "),t("p",[s._v("第一种是"),t("strong",[s._v("原始类型 (primitive)")]),s._v("，所谓的原始类的数据，是指值本身无法被改变，比如 "),t("code",[s._v("JavaScript")]),s._v(" 中的字符串就是原始类型，如果你修改了 "),t("code",[s._v("JavaScript")]),s._v(" 中字符串的值，那么 "),t("code",[s._v("V8")]),s._v(" 会返回给你一个新的字符串，原始字符串并没有被改变，我们称这些类型的值为“原始值”。")]),s._v(" "),t("p",[t("code",[s._v("JavaScript")]),s._v(" 中的原始值主要包括 "),t("code",[s._v("null")]),s._v("、"),t("code",[s._v("undefined")]),s._v("、"),t("code",[s._v("boolean")]),s._v("、"),t("code",[s._v("number")]),s._v("、"),t("code",[s._v("string")]),s._v("、"),t("code",[s._v("bigint")]),s._v("、"),t("code",[s._v("symbol")]),s._v(" 这七种。")]),s._v(" "),t("p",[s._v("第二种就是我们现在介绍的"),t("strong",[s._v("对象类型 (Object)")]),s._v("，对象的属性值也可以是另外一个对象，比如上图中的 "),t("code",[s._v("info")]),s._v(" 属性值就是一个对象。")]),s._v(" "),t("p",[s._v("第三种是"),t("strong",[s._v("函数类型 (Function)")]),s._v("，如果对象中的属性值是函数，那么我们把这个属性称为方法，所以我们又说对象具备属性和方法，那么上图中的 "),t("code",[s._v("showinfo")]),s._v(" 就是 "),t("code",[s._v("person")]),s._v(" 对象的一个方法。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/FIF/pic-beg/raw/master/images/javascript/8c33fa6c6e0cef5795292f0a21ee36a6.jpg",alt:"img"}})]),s._v(" "),t("h3",{attrs:{id:"函数的本质"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数的本质"}},[s._v("#")]),s._v(" 函数的本质")]),s._v(" "),t("p",[s._v("分析完对象，现在我们就能更好地理解 "),t("code",[s._v("JavaScript")]),s._v(" 中函数的概念了。")]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v("JavaScript")]),s._v(" 中，函数是一种特殊的对象，它和对象一样可以拥有属性和值，但是函数和普通对象不同的是，函数可以被调用。")]),s._v(" "),t("p",[s._v("我们先来看一段 "),t("code",[s._v("JavaScript")]),s._v(" 代码，在这段代码中，我们定义了一个函数 "),t("code",[s._v("foo")]),s._v("，接下来我们给 "),t("code",[s._v("foo")]),s._v(" 函数设置了 "),t("code",[s._v("myName")]),s._v(" 和 "),t("code",[s._v("uName")]),s._v(" 的属性。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" test "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nfoo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("myName "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nfoo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("uName "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("myName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("既然是函数，那么它也可以被调用。比如你定义了一个函数，便可以通过函数名称加小括号来实现函数的调用，代码如下所示：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" test "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("除了使用函数名称来实现函数的调用，还可以直接调用一个匿名函数，代码如下所示")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" test "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("那么，"),t("code",[s._v("V8")]),s._v(" 内部是怎么实现函数可调用特性的呢？")]),s._v(" "),t("p",[s._v("其实在 "),t("code",[s._v("V8")]),s._v(" 内部，会为函数对象添加了两个隐藏属性，具体属性如下图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/FIF/pic-beg/raw/master/images/javascript/9e274227d637ce8abc4a098587613de2.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("也就是说，函数除了可以拥有常用类型的属性值之外，还拥有两个隐藏属性，分别是 "),t("code",[s._v("name")]),s._v(" 属性和 "),t("code",[s._v("code")]),s._v(" 属性。")]),s._v(" "),t("p",[s._v("隐藏 "),t("code",[s._v("name")]),s._v(" 属性的值就是函数名称，如果某个函数没有设置函数名，如下面这段函数：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" test "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("该函数对象的默认的 "),t("code",[s._v("name")]),s._v(" 属性值就是 "),t("code",[s._v("anonymous")]),s._v("，表示该函数对象没有被设置名称。另外一个隐藏属性是 "),t("code",[s._v("code")]),s._v(" 属性，其值表示函数代码，以字符串的形式存储在内存中。当执行到一个函数调用语句时，"),t("code",[s._v("V8")]),s._v(" 便会从函数对象中取出 "),t("code",[s._v("code")]),s._v(" 属性值，也就是函数代码，然后再解释执行这段函数代码。")]),s._v(" "),t("h3",{attrs:{id:"函数是一等公民"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数是一等公民"}},[s._v("#")]),s._v(" 函数是一等公民")]),s._v(" "),t("p",[s._v("因为函数是一种特殊的对象，所以在 "),t("code",[s._v("JavaScript")]),s._v(" 中，函数可以赋值给一个变量，也可以作为函数的参数，还可以作为函数的返回值。如果某个编程语言的函数，可以和这个语言的数据类型做一样的事情，我们就把这个语言中的函数称为一等公民。支持函数是一等公民的语言可以使得代码逻辑更加清晰，代码更加简洁。")]),s._v(" "),t("p",[s._v("但是由于函数的“可被调用”的特性，使得实现函数的可赋值、可传参和可作为返回值等特性变得有一点麻烦。为什么？")]),s._v(" "),t("p",[s._v("我们知道，在执行 "),t("code",[s._v("JavaScript")]),s._v(" 函数的过程中，为了实现变量的查找，"),t("code",[s._v("V8")]),s._v(" 会为其维护一个作用域链，如果函数中使用了某个变量，但是在函数内部又没有定义该变量，那么函数就会沿着作用域链去外部的作用域中查找该变量，具体流程如下图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/FIF/pic-beg/raw/master/images/javascript/8bb90b190362e3a00e5a260bad6829fd.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("从图中可以看出，当函数内部引用了外部的变量时，使用这个函数进行赋值、传参或作为返回值，你还需要保证这些被引用的外部变量是确定存在的，这就是让函数作为一等公民麻烦的地方，因为虚拟机还需要处理函数引用的外部变量。我们来看一段简单的代码：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" number "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        number"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\n        console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("number"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" bar\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" mybar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mybar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("观察上段代码可以看到，我们在 "),t("code",[s._v("foo")]),s._v(" 函数中定义了一个新的 "),t("code",[s._v("bar")]),s._v(" 函数，并且 "),t("code",[s._v("bar")]),s._v(" 函数引用了 "),t("code",[s._v("foo")]),s._v(" 函数中的变量 "),t("code",[s._v("number")]),s._v("，当调用 "),t("code",[s._v("foo")]),s._v(" 函数的时候，它会返回 "),t("code",[s._v("bar")]),s._v(" 函数。")]),s._v(" "),t("p",[s._v("那么所谓的“函数是一等公民”就体现在，如果要返回函数 "),t("code",[s._v("bar")]),s._v(" 给外部，那么即便 "),t("code",[s._v("foo")]),s._v(" 函数执行结束了，其内部定义的 "),t("code",[s._v("number")]),s._v(" 变量也不能被销毁，因为 "),t("code",[s._v("bar")]),s._v(" 函数依然引用了该变量。")]),s._v(" "),t("p",[s._v("我们也把这种将外部变量和和函数绑定起来的技术称为闭包。"),t("code",[s._v("V8")]),s._v(" 在实现闭包的特性时也做了大量的额外的工作")]),s._v(" "),t("p",[s._v("另外基于函数是一等公民，我们可以轻松使用 "),t("code",[s._v("JavaScript")]),s._v(" 来实现目前比较流行的函数式编程，函数式编程规则很少，非常优美")]),s._v(" "),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[t("code",[s._v("JavaScript")]),s._v(" 中的函数非常灵活，既可以被调用，还可以作为变量、参数和返回值，这些特性使得函数的用法非常多，这也导致了函数变得有些复杂。")]),s._v(" "),t("p",[s._v("因为函数是一种特殊的对象，所以先介绍了 "),t("code",[s._v("JavaScript")]),s._v(" 中的对象，"),t("code",[s._v("JavaScript")]),s._v(" 中的对象就是由一组一组属性和值组成的集合，既然函数也是对象，那么函数也是由一组组值和属性组成的集合，我们还在文中使用了一段代码证明了这点。")]),s._v(" "),t("p",[s._v("因为函数作为一个对象，是可以被赋值、作为参数，还可以作为返回值的，那么如果一个函数返回了另外一个函数，那么就应该返回该函数所有相关的内容。")]),s._v(" "),t("p",[s._v("接下来，介绍了一个函数到底关联了哪些内容：")]),s._v(" "),t("ul",[t("li",[s._v("函数作为一个对象，它有自己的属性和值，所以函数关联了基础的属性和值；")]),s._v(" "),t("li",[s._v("函数之所以成为特殊的对象，这个特殊的地方是函数可以“被调用”，所以一个函数被调用时，它还需要关联相关的执行上下文。")])]),s._v(" "),t("p",[s._v("结合以上两点，"),t("code",[s._v("JavaScript")]),s._v(" 中的函数就实现了“函数是一等公民”的特性。")])])}),[],!1,null,null,null);a.default=e.exports}}]);