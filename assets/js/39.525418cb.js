(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{308:function(t,s,a){"use strict";a.r(s);var e=a(13),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue3"}},[t._v("#")]),t._v(" Vue3")]),t._v(" "),s("p",[t._v("JS基础：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Language_Overview")]),t._v(" "),s("ul",[s("li",[t._v("已安装 16.0 或更高版本的 "),s("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"【3】计算属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#【3】计算属性"}},[t._v("#")]),t._v(" 【3】计算属性")]),t._v(" "),s("h3",{attrs:{id:"computed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#computed"}},[t._v("#")]),t._v(" computed")]),t._v(" "),s("h4",{attrs:{id:"可写计算属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可写计算属性"}},[t._v("#")]),t._v(" 可写计算属性")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("computed")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fullName")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// getter")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstName\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// setter")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意：我们这里使用的是解构赋值语法")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"getter-不应有副作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getter-不应有副作用"}},[t._v("#")]),t._v(" Getter 不应有副作用"),s("a",{attrs:{href:"https://cn.vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("计算属性的 getter 应只做计算而没有任何其他的副作用，这一点非常重要，请务必牢记。举例来说，"),s("strong",[t._v("不要在 getter 中做异步请求或者更改 DOM")]),t._v("！一个计算属性的声明中描述的是如何根据其他值派生一个值。因此 getter 的职责应该仅为计算和返回该值。在之后的指引中我们会讨论如何使用"),s("a",{attrs:{href:"https://cn.vuejs.org/guide/essentials/watchers.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("监听器"),s("OutboundLink")],1),t._v("根据其他响应式状态的变更来创建副作用。")]),t._v(" "),s("h4",{attrs:{id:"避免直接修改计算属性值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#避免直接修改计算属性值"}},[t._v("#")]),t._v(" 避免直接修改计算属性值"),s("a",{attrs:{href:"https://cn.vuejs.org/guide/essentials/computed.html#avoid-mutating-computed-value",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。更改快照是没有意义的，因此计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。")]),t._v(" "),s("h3",{attrs:{id:"computed-vs-mothods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#computed-vs-mothods"}},[t._v("#")]),t._v(" computed VS mothods")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("计算属性值会基于其响应式依赖被缓存,仅会在其响应式依赖更新时才重新计算。无论多少次访问 publishedBooksMessage 都会立即返回先前的计算结果，而不用重复执行 getter 函数。\n相比之下，方法调用总是会在重渲染发生时再次执行函数。\n")])])]),s("p",[t._v("为什么需要缓存呢？")]),t._v(" "),s("p",[t._v("减少性能的消耗。没有缓存的话，我们会重复执行非常多次 "),s("code",[t._v("list")]),t._v(" 的 getter，然而这实际上没有必要！如果你确定不需要缓存，那么也可以使用方法调用。")]),t._v(" "),s("h2",{attrs:{id:"数组变化侦测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组变化侦测"}},[t._v("#")]),t._v(" 数组变化侦测")]),t._v(" "),s("h3",{attrs:{id:"变更方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变更方法"}},[t._v("#")]),t._v(" 变更方法"),s("a",{attrs:{href:"https://cn.vuejs.org/guide/essentials/list.html#mutation-methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Vue 能够侦听响应式数组的变更方法，并在它们被调用时触发相关的更新。这些变更方法包括：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("push()")])]),t._v(" "),s("li",[s("code",[t._v("pop()")])]),t._v(" "),s("li",[s("code",[t._v("shift()")])]),t._v(" "),s("li",[s("code",[t._v("unshift()")])]),t._v(" "),s("li",[s("code",[t._v("splice()")])]),t._v(" "),s("li",[s("code",[t._v("sort()")])]),t._v(" "),s("li",[s("code",[t._v("reverse()")])])]),t._v(" "),s("h3",{attrs:{id:"替换一个数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#替换一个数组"}},[t._v("#")]),t._v(" 替换一个数组"),s("a",{attrs:{href:"https://cn.vuejs.org/guide/essentials/list.html#replacing-an-array",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("变更方法，顾名思义，就是会对调用它们的原数组进行变更。相对地，也有一些不可变 (immutable) 方法，例如 "),s("code",[t._v("filter()")]),t._v("，"),s("code",[t._v("concat()")]),t._v(" 和 "),s("code",[t._v("slice()")]),t._v("，这些都不会更改原数组，而总是"),s("strong",[t._v("返回一个新数组")]),t._v("。当遇到的是非变更方法时，我们需要将旧的数组替换为新的：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("this.items = this.items.filter((item) => item.message.match(/Foo/))\n")])])]),s("p",[t._v("你可能认为这将导致 Vue 丢弃现有的 DOM 并重新渲染整个列表——幸运的是，情况并非如此。Vue 实现了一些巧妙的方法来最大化对 DOM 元素的重用，因此用另一个包含部分重叠对象的数组来做替换，仍会是一种非常高效的操作。")]),t._v(" "),s("p",[t._v("在计算属性中使用 "),s("code",[t._v("reverse()")]),t._v(" 和 "),s("code",[t._v("sort()")]),t._v(" 的时候务必小心！这两个方法将变更原始数组，计算函数中不应该这么做。请在调用这些方法之前创建一个原数组的副本")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("return [...numbers].reverse()\n")])])]),s("h2",{attrs:{id:"生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),s("h3",{attrs:{id:"created"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#created"}},[t._v("#")]),t._v(" created")]),t._v(" "),s("p",[t._v("有状态的方法在created中创建")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("created")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每个实例都有了自己的预置防抖的处理函数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debouncedClick "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("debounce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("click"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unmounted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最好是在组件卸载时")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 清除掉防抖计时器")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debouncedClick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("methods")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... 对点击的响应 ...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"nexttick"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nexttick"}},[t._v("#")]),t._v(" nextTick")]),t._v(" "),s("p",[t._v("改变DOM的更新时机")]),t._v(" "),s("p",[t._v("若要等待一个状态改变后的 DOM 更新完成，你可以使用 "),s("a",{attrs:{href:"https://cn.vuejs.org/api/general.html#nexttick",target:"_blank",rel:"noopener noreferrer"}},[t._v("nextTick()"),s("OutboundLink")],1),t._v(" 这个全局 API")])])}),[],!1,null,null,null);s.default=n.exports}}]);