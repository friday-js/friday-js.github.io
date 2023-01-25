(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{293:function(e,r,t){"use strict";t.r(r);var n=t(13),a=Object(n.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"javascript基础"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#javascript基础"}},[e._v("#")]),e._v(" JavaScript基础")]),e._v(" "),r("h2",{attrs:{id:"_1、-javascript-的基本类型有哪些-引用类型有哪些-null-和-undefined-的区别-必会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、-javascript-的基本类型有哪些-引用类型有哪些-null-和-undefined-的区别-必会"}},[e._v("#")]),e._v(" 1、 JavaScript 的基本类型有哪些?引用类型有哪些?null 和 undefined 的区别?(必会)")]),e._v(" "),r("p",[e._v("数据类型 基本数据类型:Number、String、Boolean、null、undefined 引用数据类型:Function、Object、Array")]),e._v(" "),r("p",[e._v("区别\nundefined:表 示变量声明但未初始化时的值 null:表示准备用来保存对象，还没有真正保存对象的值。从逻辑角度看，null 值表示一")]),e._v(" "),r("p",[e._v("个空对象指针\nECMA 标准要求 null 和 undefined 等值判断返回 true null == undefined // true\nnull === undefined // false")]),e._v(" "),r("h2",{attrs:{id:"_2、如何判断-javascript-的数据类型-必会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、如何判断-javascript-的数据类型-必会"}},[e._v("#")]),e._v(" 2、如何判断 JavaScript 的数据类型?(必会)")]),e._v(" "),r("p",[e._v('判断方法\ntypeof\ntypeof 可以用来区分除了 null 类型以外的原始数据类型，对象类型的可以从普通对象里面 识别出函数:\ntypeof undefined // "undefined"\ntypeof null // "object"\ntypeof 1 // "number"')]),e._v(" "),r("p",[e._v('typeof "1" // "string"\ntypeof Symbol() // "symbol" typeof function() {} // "function" typeof {} // "object"')]),e._v(" "),r("p",[e._v("问题一:typeof 不能识别 null，如何识别 null?\n答案:如果想要判断是否为 null，可以直接使用===全等运算符来判断(或者使用下面")]),e._v(" "),r("p",[e._v("的 Object.prototype.toString 方法): let a = null")]),e._v(" "),r("p",[e._v("a === null // true\n问题二:typeof 作用于未定义的变量，会报错吗?")]),e._v(" "),r("p",[e._v('答案:不会报错，返回"undefined"。 typeof randomVariable // "undefined"')]),e._v(" "),r("p",[e._v('问题三:typeof Number(1)的返回值是什么?\n答案:"number"。注意 Number 和 String 作为普通函数调用的时候，是把参数转化为相')]),e._v(" "),r("p",[e._v('应的原始数据类型，也就是类似于做一个强制类型转换的操作，而不是默认当做构造函数 调用。注意和 Array 区分，Array(...)等价于 new Array(...)\ntypeof Number(1) // "number"\ntypeof String("1") // "string"')]),e._v(" "),r("p",[e._v("Array(1, 2, 3)\n// 等价于\nnew Array(1, 2, 3)")]),e._v(" "),r("p",[e._v('问题四:typeof new Number(1)的返回值是什么? 答案:"object"。')]),e._v(" "),r("p",[e._v('typeof new Number(1) // "object"\ntypeof new String(1) // "object"\ninstanceof\ninstanceof 不能用于判断原始数据类型的数据: 3 instanceof Number // false')]),e._v(" "),r("p",[e._v("'3' instanceof String // false\ntrue instanceof Boolean // false instanceof 可以用来判断对象的类型: var date = new Date()\ndate instanceof Date // true\nvar number = new Number()\nnumber instanceof Number // true")]),e._v(" "),r("p",[e._v('var string = new String()\nstring instanceof String // true\n需要注意的是，instanceof 的结果并不一定是可靠的，因为在 ECMAScript7 规范中可以通 过自定义 Symbol.hasInstance 方法来覆盖默认行为。\nObject.prototype.toString\nObject.prototype.toString.call(undefined).slice(8, -1) // "Undefined" Object.prototype.toString.call(null).slice(8, -1) // "Null"\nObject.prototype.toString.call(3).slice(8, -1) // "Number"\nObject.prototype.toString.call(new Number(3)).slice(8, -1) // "Number" Object.prototype.toString.call(true).slice(8, -1) // "Boolean" Object.prototype.toString.call(\'3\').slice(8, -1) // "String" Object.prototype.toString.call(Symbol()).slice(8, -1) // "Symbol" 由上面的示例可知，该方法没有办法区分数字类型和数字对象类型，同理还有字符串类型 和字符串对象类型、布尔类型和布尔对象类型\n另外，ECMAScript7 规范定义了符号 Symbol.toStringTag，你可以通过这个符号自定义 Object.prototype.toString 方法的行为:\n\'use strict\'\nvar number = new Number(3)\nnumber[Symbol.toStringTag] = \'Custom\'\nObject.prototype.toString.call(number).slice(8, -1) // "Custom"\nfunction a () {}\na[Symbol.toStringTag] = \'Custom\'\nObject.prototype.toString.call(a).slice(8, -1) // "Custom"\nvar array = []\narray[Symbol.toStringTag] = \'Custom\'\nObject.prototype.toString.call(array).slice(8, -1) // "Custom"\n因为 Object.prototype.toString 方法可以通过 Symbol.toStringTag 属性来覆盖默认行 为，所以')]),e._v(" "),r("p",[e._v("使用这个方法来判断数据类型也不一定是可靠的 Array.isArray")]),e._v(" "),r("p",[e._v("Array.isArray(value)可以用来判断 value 是否是数组: Array.isArray([]) // true\nArray.isArray({}) // false\n(function () {console.log(Array.isArray(arguments))}()) // false")]),e._v(" "),r("h2",{attrs:{id:"_3、简述创建函数的几种方式-必会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、简述创建函数的几种方式-必会"}},[e._v("#")]),e._v(" 3、简述创建函数的几种方式? (必会)")]),e._v(" "),r("p",[e._v("第一种(函数声明): function sum1(num1,num2){")]),e._v(" "),r("p",[e._v("return num1+num2; }")]),e._v(" "),r("p",[e._v("第二种(函数表达式)\nvar sum2 = function(num1,num2){")]),e._v(" "),r("p",[e._v("return num1+num2; }")]),e._v(" "),r("p",[e._v('第三种(函数对象方式)\nvar sum3 = new Function("num1","num2","return num1+num2");')]),e._v(" "),r("h2",{attrs:{id:"_4、javascript-创建对象的几种方式-必会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4、javascript-创建对象的几种方式-必会"}},[e._v("#")]),e._v(" 4、Javascript 创建对象的几种方式? (必会)")]),e._v(" "),r("p",[e._v("1、简单对象的创建 使用对象字面量的方式{}")]),e._v(" "),r("p",[e._v("创建一个对象(最简单，好理解，推荐使用)")]),e._v(" "),r("p",[e._v("代码如下")]),e._v(" "),r("p",[e._v('var Cat = {}; //JSON Cat.name="kity"; //添加属性并赋值 Cat.age=2;\nCat.sayHello=function(){')]),e._v(" "),r("p",[e._v('alert("hello "+Cat.name+",今年"+Cat["age"]+"岁了"); 可以使用 HashMap 的方式访问')]),e._v(" "),r("p",[e._v("}")]),e._v(" "),r("p",[e._v("Cat.sayHello(); //调用对象的(方法)函数 2、用 function(函数)来模拟 class")]),e._v(" "),r("p",[e._v("//可以使用“.”的方式访问属性， 也")]),e._v(" "),r("p",[e._v("2.1) 创建一个对象，相当于 new 一个类的实例(无参构造函数) 代码如下")]),e._v(" "),r("p",[e._v('function Person(){\n}\nvar personOne=new Person(); //定义一个 function，如果有 new 关键字去"实例化",那 么该 function 可以看作是一个类\npersonOne.name="dylan";\npersonOne.hobby="coding";\npersonOne.work=function(){')]),e._v(" "),r("p",[e._v('alert(personOne.name+" is coding now..."); }')]),e._v(" "),r("p",[e._v("personOne.work(); 2.2)可以使用有参构造函数来实现，这样定义更方便，扩展性更强(推荐使用)")]),e._v(" "),r("p",[e._v("代码如下\nfunction Pet(name,age,hobby){")]),e._v(" "),r("p",[e._v("this.name=name;//this 作用域:当前对象 this.age=age;\nthis.hobby=hobby;\nthis.eat=function(){")]),e._v(" "),r("p",[e._v('alert("我叫"+this.name+",我喜欢"+this.hobby+",也是个吃货"); }')]),e._v(" "),r("p",[e._v('}\nvar maidou =new Pet("麦兜",5,"睡觉");//实例化/创建对象 maidou.eat();//调用 eat 方法(函数)')]),e._v(" "),r("p",[e._v("3、使用工厂方式来创建(Object 关键字) 代码如下:")]),e._v(" "),r("p",[e._v('var wcDog = new Object(); wcDog.name="旺财"; wcDog.age=3; wcDog.work=function(){')]),e._v(" "),r("p",[e._v('alert("我是"+wcDog.name+",汪汪汪......"); }')]),e._v(" "),r("p",[e._v("wcDog.work();\n4、使用原型对象的方式 prototype 关键字 代码如下:")]),e._v(" "),r("p",[e._v('function Dog(){\n}\nDog.prototype.name ="旺财"; Dog.prototype.eat = function(){')]),e._v(" "),r("p",[e._v('alert(this.name + "是个吃货"); }')]),e._v(" "),r("p",[e._v("var wangcai = new Dog();")]),e._v(" "),r("p",[e._v("wangcai.eat(); 5、混合模式(原型和构造函数) 代码如下:")]),e._v(" "),r("p",[e._v("function Car(name,price){")]),e._v(" "),r("p",[e._v("this.name=name;")]),e._v(" "),r("p",[e._v("this.price=price; }")]),e._v(" "),r("p",[e._v('Car.prototype.sell=function(){ alert("我是"+this.name+"，我现在卖"+this.price+"万元");')]),e._v(" "),r("p",[e._v('}\nvar camry = new Car("凯美瑞",27); camry.sell();')]),e._v(" "),r("p",[e._v("6、动态原型的方式(可以看作是混合模式的一种特例) 代码如下:")]),e._v(" "),r("p",[e._v("function Car(name,price){ this.name=name; this.price=price;")]),e._v(" "),r("p",[e._v('if(typeof Car.sell=="undefined"){ Car.prototype.sell=function(){')]),e._v(" "),r("p",[e._v('alert("我是"+this.name+"，我现在卖"+this.price+"万元"); }')]),e._v(" "),r("p",[e._v("Car.sell=true; }")]),e._v(" "),r("p",[e._v('}\nvar camry = new Car("凯美瑞",27); camry.sell();')]),e._v(" "),r("p",[e._v("以上几种，是 javascript 中最常用的创建对象的方式")]),e._v(" "),r("h2",{attrs:{id:"_5、请指出-javascript-宿主对象和原生对象的区别-必会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5、请指出-javascript-宿主对象和原生对象的区别-必会"}},[e._v("#")]),e._v(" 5、请指出 JavaScript 宿主对象和原生对象的区别?(必会)")]),e._v(" "),r("p",[e._v("原生对象\n“独立于宿主环境的 ECMAScript 实现 提供的对象” 包含:Object、Function、Array、String、Boolean、Number、")]),e._v(" "),r("p",[e._v("EvalError、RangeError、ReferenceError、SyntaxError、TypeError、")]),e._v(" "),r("p",[e._v("Date 、 RegExp 、 Error 、 URIError")]),e._v(" "),r("p",[e._v("内置对象\n开发者不必明确实例化内置对象，它已被内部实例化了\n同样是“独立于宿主环境”。而 ECMA-262 只定义了两个内置对象，即 Global 和 Math 宿主对象\nBOM 和 DOM 都是宿主对象。因为其对于不同的“宿主”环境所展示的内容不同。其实说白")]),e._v(" "),r("p",[e._v("了就是，ECMAScript 官方未定义的对象都属于宿主对象，因为其未定义的对象大多数是自己通 过 ECMAScript 程序创建的对象")]),e._v(" "),r("h2",{attrs:{id:"_6、javascript-内置的常用对象有哪些-并列举该对象常用的方法-必会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6、javascript-内置的常用对象有哪些-并列举该对象常用的方法-必会"}},[e._v("#")]),e._v(" 6、JavaScript 内置的常用对象有哪些?并列举该对象常用的方法? (必会)")]),e._v(" "),r("p",[e._v("对象及方法\nArguments 函数参数集合\nArguments[ ] 函数参数的数组\nArguments 一个函数的参数和其他属性 Arguments.callee 当前正在运行的函数 Arguments.length 传递给函数的参数的个数")]),e._v(" "),r("p",[e._v("Array 数组\nlength 属性 动态获取数组长度")]),e._v(" "),r("p",[e._v("join() 将一个数组转成字符串。返回一个字符串。\nreverse() 将数组中各元素颠倒顺序\ndelete 运算符 只能删除数组元素的值，而所占空间还在，总长度没变(arr.length)。 shift() 删除数组中第一个元素，返回删除的那个值，并将长度减 1。\npop() 删除数组中最后一个元素，返回删除的那个值，并将长度减 1。\nunshift() 往数组前面添加一个或多个数组元素，长度要改变。arrObj.unshift(“a” ， “b，“c”)\npush() 往数组结尾添加一个或多个数组元素，长度要改变。arrObj.push(“a” ，“b”， “c”)\nconcat( ) 连接数组\nslice( ) 返回数组的一部分\nsort( ) 对数组元素进行排序\nsplice( ) 插入、删除或替换数组的元素\ntoLocaleString( ) 把数组转换成局部字符串\ntoString( ) 将数组转换成一个字符串\nforEach 遍历所有元素\nvar arr = [1, 2, 3];\narr.forEach(function(item, index) {")]),e._v(" "),r("p",[e._v("// 遍历数组的所有元素")]),e._v(" "),r("p",[e._v("console.log(index, item); });")]),e._v(" "),r("p",[e._v("every 判断所有元素是否都符合条件")]),e._v(" "),r("p",[e._v("var arr = [1, 2, 3];\nvar arr1 = arr.every(function(item, index) {")]),e._v(" "),r("p",[e._v("if (item < 4) { return true;")]),e._v(" "),r("p",[e._v("} })")]),e._v(" "),r("p",[e._v("console.log(arr1); // true")]),e._v(" "),r("p",[e._v("sort 排序")]),e._v(" "),r("p",[e._v("var arr = [1, 5, 2, 7, 3, 4];\nvar arr2 = arr.sort(function(a, b) {")]),e._v(" "),r("p",[e._v("// 从小到大 return a-b; // 从大到小 return b-a;")]),e._v(" "),r("p",[e._v("})")]),e._v(" "),r("p",[e._v("console.log(arr2); // 1,2,3,4,5,7")]),e._v(" "),r("p",[e._v("map 对元素重新组装，生成新数组 var arr = [1, 5, 2, 7, 3, 4];\nvar arr2 = arr.map(function(item, index) {")]),e._v(" "),r("p",[e._v("return '"),r("b",[e._v("' + item + '"),r("br"),e._v("'; })")])]),e._v(" "),r("p",[e._v("console.log(arr2);\nfilter 过滤符合条件的元素\nvar arr = [1, 2, 3, 4];\nvar arr2 = arr.filter(function(item, index) {")]),e._v(" "),r("p",[e._v("if (item>2) { return true;")]),e._v(" "),r("p",[e._v("} })")]),e._v(" "),r("p",[e._v("console.log(arr2); // [3, 4]")]),e._v(" "),r("p",[e._v("String 字符串对象\nLength 获取字符串的长度。如:var len = strObj.length")]),e._v(" "),r("p",[e._v("toLowerCase() 将字符串中的字母转成全小写。如:strObj.toLowerCase() toUpperCase() 将字符串中的字母转成全大写。如:strObj.toUpperCase() charAt(index) 返回指定下标位置的一个字符。如果没有找到，则返回空字符串 substr() 在原始字符串，返回一个子字符串")]),e._v(" "),r("p",[e._v("substring() 在原始字符串，返回一个子字符串 区别:'''\n“abcdefgh”.substring(2，3) = “c” “abcdefgh”.substr(2，3) = “cde”")]),e._v(" "),r("p",[e._v("split() 将一个字符串转成数组\ncharCodeAt( ) 返回字符串中的第 n 个字符的代码\nconcat( ) 连接字符串\nfromCharCode( ) 从字符编码创建—个字符串\nindexOf( ) 返回一个子字符串在原始字符串中的索引值(查找顺序从左往右查找)。如果没 有找到，则返回-1\nlastIndexOf( ) 从后向前检索一个字符串\nlocaleCompare( ) 用本地特定的顺序来比较两个字符串\nmatch( ) 找到一个或多个正则表达式的匹配\nreplace( ) 替换一个与正则表达式匹配的子串\nsearch( ) 检索与正则表达式相匹配的子串\nslice( ) 抽取一个子串\ntoLocaleLowerCase( ) 把字符串转换小写\ntoLocaleUpperCase( ) 将字符串转换成大写\ntoLowerCase( ) 将字符串转换成小写\ntoString( ) 返回字符串\ntoUpperCase( ) 将字符串转换成大写\nvalueOf( )")]),e._v(" "),r("p",[e._v("Boolean 布尔对象\nBoolean.toString( ) 将布尔值转换成字符串 Boolean.valueOf( ) Boolean 对象的布尔值")]),e._v(" "),r("p",[e._v("Date 日期时间\n创建 Date 对象的方法\n(1)创建当前(现在)日期对象的实例，不带任何参数\nvar today = new Date();\n(2)创建指定时间戳的日期对象实例，参数是时间戳。\n时间戳:是指某一个时间距离 1970 年 1 月 1 日 0 时 0 分 0 秒，过去了多少毫秒值(1 秒\n=1000 毫秒)\nvartimer=newDate(10000); //时间是 1970 年 1 月 1 日 0 时 0 分 10 秒 (3)指定一个字符串的日期时间信息，参数是一个日期时间字符串\nvar timer = new Date(“2015/5/25 10:00:00”);\n(4)指定多个数值参数\nvar timer = new Date(2015+100，4，25，10，20，0); //顺序为:年、月、日、 时、分、秒，年、月、日是必须的\n方法:\nDate.getDate( ) 返回一个月中的某一天\nDate.getDay( ) 返回一周中的某一天\nDate.getFullYear( ) 返回 Date 对象的年份字段\nDate.getHours( ) 返回 Date 对象的小时字段\nDate.getMilliseconds( ) 返回 Date 对象的毫秒字段\nDate.getMinutes( ) 返回 Date 对象的分钟字段\nDate.getMonth( ) 返回 Date 对象的月份字段\nDate.getSeconds( ) 返回 Date 对象的秒字段")]),e._v(" "),r("p",[e._v("Date.getTime( ) 返回 Date 对象的毫秒表示")]),e._v(" "),r("p",[e._v("Error 异常对象\nError.message 可以读取的错误消息\nError.name 错误的类型\nError.toString( ) 把 Error 对象转换成字符串 EvalError 在不正确使用 eval()时抛出 SyntaxError 抛出该错误用来通知语法错误 RangeError 在数字超出合法范围时抛出 ReferenceError 在读取不存在的变量时抛出 TypeError 当一个值的类型错误时，抛出该异常 URIError 由 URl 的编码和解码方法抛出")]),e._v(" "),r("p",[e._v("Function 函数构造器\nFunction.apply( ) 将函数作为一个对象的方法调用 Function.arguments[] 传递给函数的参数 Function.call( ) 将函数作为对象的方法调用 Function.caller 调用当前函数的函数 Function.length 已声明的参数的个数 Function.prototype 对象类的原型 Function.toString( ) 把函数转换成字符串")]),e._v(" "),r("p",[e._v("Math 数学对象\nMath 对象是一个静态对象\nMath.PI 圆周率\nMath.abs() 绝对值\nMath.ceil() 向上取整(整数加 1，小数去掉) Math.floor() 向下取整(直接去掉小数) Math.round() 四舍五入\nMath.pow(x，y) 求 x 的 y 次方\nMath.sqrt() 求平方根")]),e._v(" "),r("p",[e._v("Number 数值对象\nNumber.MAX_VALUE 最大数值\nNumber.MIN_VALUE 最小数值\nNumber.NaN 特殊的非数字值 Number.NEGATIVE_INFINITY 负无穷大 Number.POSITIVE_INFINITY 正无穷大 Number.toExponential( ) 用指数计数法格式化数字 Number.toFixed( ) 采用定点计数法格式化数字 Number.toLocaleString( ) 把数字转换成本地格式的字符串 Number.toPrecision( ) 格式化数字的有效位 Number.toString( ) 将—个数字转换成字符串 Number.valueOf( ) 返回原始数值")]),e._v(" "),r("p",[e._v("Object 基础对象\nObject 含有所有 JavaScript 对象的特性的超类\nObject.constructor 对象的构造函数\nObject.hasOwnProperty( ) 检查属性是否被继承 Object.isPrototypeOf( ) 一个对象是否是另一个对象的原型 Object.propertyIsEnumerable( ) 是否可以通过 for/in 循环看到属性 Object.toLocaleString( ) 返回对象的本地字符串表示 Object.toString( ) 定义一个对象的字符串表示\nObject.valueOf( ) 指定对象的原始值")]),e._v(" "),r("p",[e._v("RegExp 正则表达式对象\nRegExp.exec( ) 通用的匹配模式 RegExp.global 正则表达式是否全局匹配")]),e._v(" "),r("p",[e._v("RegExp.ignoreCase 正则表达式是否区分大小写 RegExp.lastIndex 下次匹配的起始位置 RegExp.source 正则表达式的文本\nRegExp.test( ) 检测一个字符串是否匹配某个模式 RegExp.toString( ) 把正则表达式转换成字符串")]),e._v(" "),r("h2",{attrs:{id:"_7、-和-的区别-必会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7、-和-的区别-必会"}},[e._v("#")]),e._v(" 7、=== 和 ==的区别?(必会)")]),e._v(" "),r("p",[e._v("区别")]),e._v(" "),r("p",[e._v("===:三个等号称为等同符，当等号两边的值为相同类型的时候，直接比较等号两边 的 值，值相同则返回 true，若等号两边的值类型不同时直接返回 false。也就是说三个等号 既 要判断值也要判断类型是否相等")]),e._v(" "),r("p",[e._v("==:两个等号称为等值符，当等号两边的值为相同类型时比较值是否相同，类型不同 时 会发生类型的自动转换，转换为相同的类型后再作比较。也就是说两个等号只要值相等 就 可以")]),e._v(" "),r("h2",{attrs:{id:"_8、null-undefined-的区别-必会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8、null-undefined-的区别-必会"}},[e._v("#")]),e._v(" 8、null，undefined 的区别(必会)")]),e._v(" "),r("p",[e._v("区别")]),e._v(" "),r("p",[e._v('null 表示一个对象被定义了，值为“空值”; undefined 表示不存在这个值\ntypeof undefined //"undefined"')]),e._v(" "),r("p",[e._v('undefined :是一个表示"无"的原始值或者说表示"缺少值"，就是此处应该有一个值，但还 没 有定义。当尝试读取时会返回 undefined;')]),e._v(" "),r("p",[e._v("例如变量被声明了，但没有赋值时，就等于 undefined")]),e._v(" "),r("p",[e._v('typeof null //"object"\nnull : 是一个对象(空对象, 没有任何属性和方法); 例如作为函数的参数，表示该函数的参数不是对象;\n注意:\n在验证 null 时，一定要使用=== ，因为 == 无法分别 null 和 undefined undefined 表示"缺少值"，就是此处应该有一个值，但是还没有定义。')]),e._v(" "),r("p",[e._v('典型用法是:\n1、变量被声明了，但没有赋值时，就等于 undefined 2、调用函数时，应该提供的参数没有提供，该参数等于 undefined 3、对象没有赋值的属性，该属性的值为 undefined 4、函数没有返回值时，默认返回 undefined\nnull 表示"没有对象"，即该处不应该有值。典型用法是:')]),e._v(" "),r("p",[e._v("4.1) 作为函数的参数，表示该函数的参数不是对象 4.2) 作为对象原型链的终点")]),e._v(" "),r("h2",{attrs:{id:"_9、javascript-中什么情况下会返回-undefined-值-必会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9、javascript-中什么情况下会返回-undefined-值-必会"}},[e._v("#")]),e._v(" 9、JavaScript 中什么情况下会返回 undefined 值?(必会)")]),e._v(" "),r("p",[e._v("1、访问声明，但是没有初始化的变量 var aaa;\nconsole.log(aaa); // undefined")]),e._v(" "),r("p",[e._v("2、访问不存在的属性 var aaa = {};")]),e._v(" "),r("p",[e._v("console.log(aaa.c); 3、访问函数的参数没有被显式的传递值")]),e._v(" "),r("p",[e._v("(function (b){\nconsole.log(b); // undefined")]),e._v(" "),r("p",[e._v("})();\n4、访问任何被设置为 undefined 值的变量")]),e._v(" "),r("p",[e._v("var aaa = undefined;console.log(aaa); // undefined 5、没有定义 return 的函数隐式返回")]),e._v(" "),r("p",[e._v("function aaa(){}console.log(aaa()); // undefined 6、函数 return 没有显式的返回任何内容")]),e._v(" "),r("p",[e._v("function aaa(){ return;")]),e._v(" "),r("p",[e._v("}\nconsole.log(aaa()); // undefined")]),e._v(" "),r("h2",{attrs:{id:"_10、如何区分数组和对象-必会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_10、如何区分数组和对象-必会"}},[e._v("#")]),e._v(" 10、如何区分数组和对象?(必会)")]),e._v(" "),r("p",[e._v("方法一:通过 ES6 中的 Array.isArray 来识别 Array.isArray([]) //true\nArray.isArray({}) //false")]),e._v(" "),r("p",[e._v("方法二:通过 instanceof 来识别 [] instanceof Array //true\n{} instanceof Array //false")]),e._v(" "),r("p",[e._v("方法三:通过调用 constructor 来识别 {}.constructor //返回 object [].constructor //返回 Array")]),e._v(" "),r("p",[e._v('方法四:通过 Object.prototype.toString.call 方法来识别 Object.prototype.toString.call([]) //["object Array"] Object.prototype.toString.call({}) //["object Object"]')]),e._v(" "),r("h2",{attrs:{id:"_11、多维数组降维的几种方法-必会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11、多维数组降维的几种方法-必会"}},[e._v("#")]),e._v(" 11、多维数组降维的几种方法(必会)")]),e._v(" "),r("p",[e._v("(1)数组字符串化")]),e._v(" "),r("p",[e._v("let arr = [[222, 333, 444], [55, 66, 77] ] arr += '';\narr = arr.split(',');")]),e._v(" "),r("p",[e._v('console.log(arr); // ["222", "333", "444", "55", "66", "77"]')]),e._v(" "),r("p",[e._v("(2)递归")]),e._v(" "),r("p",[e._v("function reduceDimension(arr){ let ret = [];\nlet toArr = function(arr){")]),e._v(" "),r("p",[e._v("arr.forEach(function(item){\nitem instanceof Array ? toArr(item) : ret.push(item);")]),e._v(" "),r("p",[e._v("}); }")]),e._v(" "),r("p",[e._v("toArr(arr);")]),e._v(" "),r("p",[e._v("return ret; }")]),e._v(" "),r("p",[e._v("3、Array .prototype .flat()")]),e._v(" "),r("p",[e._v("var arr1 = [1, 2, [3, 4]]; arr1.flat();\n// [1, 2, 3, 4]")]),e._v(" "),r("p",[e._v("var arr2 = [1, 2, [3, 4, [5, 6]]]; arr2.flat();\n// [1, 2, 3, 4, [5, 6]]")]),e._v(" "),r("p",[e._v("var arr3 = [1, 2, [3, 4, [5, 6]]]; arr3.flat(2);\n// [1, 2, 3, 4, 5, 6]")]),e._v(" "),r("p",[e._v("//使用 Infinity 作为深度，展开任意深度的嵌套数组 arr3.flat(Infinity);\n// [1, 2, 3, 4, 5, 6]")]),e._v(" "),r("p",[e._v("4、使用 stack 无限反嵌套多层嵌套数组")]),e._v(" "),r("p",[e._v("var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]]; function flatten(input) {")]),e._v(" "),r("p",[e._v("const stack = [...input]; const res = [];\nwhile (stack.length) {")]),e._v(" "),r("p",[e._v("// 使用 pop 从 stack 中取出并移除值 const next = stack.pop();\nif (Array.isArray(next)) {")]),e._v(" "),r("p",[e._v("// 使用 push 送回内层数组中的元素，不会改动原始输入 original input")]),e._v(" "),r("p",[e._v("stack.push(...next); } else {")]),e._v(" "),r("p",[e._v("res.push(next); }")]),e._v(" "),r("p",[e._v("}\n// 使用 reverse 恢复原数组的顺序 return res.reverse();")]),e._v(" "),r("p",[e._v("}\nflatten(arr1);// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]")]),e._v(" "),r("p",[e._v("5、使用 reduce、concat 和递归无限反嵌套多层嵌套的数组 var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];")]),e._v(" "),r("p",[e._v("function flattenDeep(arr1) {\nreturn arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);")]),e._v(" "),r("p",[e._v("}\nflattenDeep(arr1);\n// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]")]),e._v(" "),r("h2",{attrs:{id:"_12、怎么判断两个对象相等-必会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_12、怎么判断两个对象相等-必会"}},[e._v("#")]),e._v(" 12、怎么判断两个对象相等?(必会)")]),e._v(" "),r("p",[e._v("ES6 中有一个方法判断两个对象是否相等，这个方法判断是两个对象引用地址是否一致 let obj1= {")]),e._v(" "),r("p",[e._v("a: 1 }")]),e._v(" "),r("p",[e._v("let obj2 = {")]),e._v(" "),r("p",[e._v("a: 1 }")]),e._v(" "),r("p",[e._v("console.log(Object.is(obj1, obj2)) // false")]),e._v(" "),r("p",[e._v("let obj3 = obj1 console.log(Object.is(obj1, obj3)) // true")]),e._v(" "),r("p",[e._v("console.log(Object.is(obj2, obj3)) // false 当需求是比较两个对象内容是否一致时就没用了 想要比较两个对象内容是否一致，思路是要遍历对象的所有键名和键值是否都一致: 1、判断两个对象是否指向同一内存\n2、使用 Object.getOwnPropertyNames 获取对象所有键名数组 3、判断两个对象的键名数组是否相等\n4、遍历键名，判断键值是否都相等")]),e._v(" "),r("p",[e._v("let obj1 = { a: 1,")]),e._v(" "),r("p",[e._v("b: {\nc: 2")]),e._v(" "),r("p",[e._v("} }")]),e._v(" "),r("p",[e._v("let obj2 = { b: {")]),e._v(" "),r("p",[e._v("c: 3 },")]),e._v(" "),r("p",[e._v("a: 1 }")]),e._v(" "),r("p",[e._v("function isObjectValueEqual(a, b) {\n// 判断两个对象是否指向同一内存，指向同一内存返回 true if (a === b) return true")]),e._v(" "),r("p",[e._v("// 获取两个对象键值数组\nlet aProps = Object.getOwnPropertyNames(a)\nlet bProps = Object.getOwnPropertyNames(b)\n// 判断两个对象键值数组长度是否一致，不一致返回 false if (aProps.length !== bProps.length) return false\n// 遍历对象的键值\nfor (let prop in a) {")]),e._v(" "),r("p",[e._v("// 判断 a 的键值，在 b 中是否存在，不存在，返回 false if (b.hasOwnProperty(prop)) {")]),e._v(" "),r("p",[e._v("// 判断 a 的键值是否为对象，是则递归，不是对象直接判断键值是否相等，不相等返回 false if (typeof a[prop] === 'object') {")]),e._v(" "),r("p",[e._v("if (!isObjectValueEqual(a[prop], b[prop])) return false } else if (a[prop] !== b[prop]) {")]),e._v(" "),r("p",[e._v("return false }")]),e._v(" "),r("p",[e._v("} else {\nreturn false")]),e._v(" "),r("p",[e._v("} }")]),e._v(" "),r("p",[e._v("return true }")]),e._v(" "),r("p",[e._v("console.log(isObjectValueEqual(obj1, obj2))")]),e._v(" "),r("p",[e._v("// false")]),e._v(" "),r("h2",{attrs:{id:"_13、列举三种强制类型转换和两种隐式类型转换-必会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_13、列举三种强制类型转换和两种隐式类型转换-必会"}},[e._v("#")]),e._v(" 13、列举三种强制类型转换和两种隐式类型转换?(必会)")]),e._v(" "),r("p",[e._v("强制\n转化成字符串 toString() String()\n转换成数字 Number()、 parseInt()、 parseFloat()")]),e._v(" "),r("p",[e._v("转换成布尔类型 Boolean()")]),e._v(" "),r("p",[e._v('隐式\n拼接字符串\n例子 varstr=""+18 - */ % ==')]),e._v(" "),r("h2",{attrs:{id:"_14、javascript-中怎么获取当前日期的月份-必会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_14、javascript-中怎么获取当前日期的月份-必会"}},[e._v("#")]),e._v(" 14、JavaScript 中怎么获取当前日期的月份?(必会)")]),e._v(" "),r("p",[e._v("方法")]),e._v(" "),r("p",[e._v("JavaScript 中获得当前日期是使用 new Date 这个内置对象的实例，其他一些进阶的操作 也 是基于这个内置对象的实例。")]),e._v(" "),r("p",[e._v('获取完整的日期(默认格式):\nvar date = new Date(); // Sat Jul 06 2019 19:59:27 GMT+0800 (中国标准时间) 获取当前年份:\nvar year = date.getFullYear(); // 2019\n获取当前月份:\nvar month = date.getMonth() + 1; // 7\n获取当前日:\nvar day = date.getDay(); // 6\n获取当前日期(年-月-日):\nmonth = (month > 9) ? month : ("0" + month);\nday = (day < 10) ? ("0" + day) : day;\nvar today = year + "-" + month + "-" + day; //\n另外的一些操作:\ndate.getYear(); // 获取当前年份(2 位)\ndate.getFullYear(); // 获取完整的年份(4 位, 1970-????)\ndate.getMonth(); // 获取当前月份(0-11,0 代表 1 月)\ndate.getDate(); // 获取当前日(1-31)\ndate.getDay(); // 获取当前星期 X(0-6,0 代表星期天)\ndate.getTime(); // 获取当前时间(从 1970.1.1 开始的毫秒数) date.getHours(); // 获取当前小时数(0-23)\ndate.getMinutes(); // 获取当前分钟数(0-59)\ndate.getSeconds(); // 获取当前秒数(0-59)\ndate.getMilliseconds(); // 获取当前毫秒数(0-999)\ndate.toLocaleDateString(); // 获取当前日期\ndate.toLocaleTimeString(); // 获取当前时间\ndate.toLocaleString( ); // 获取日期与时间')]),e._v(" "),r("h2",{attrs:{id:"_15、什么是类数组-伪数组-如何将其转化为真实的数组-必会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_15、什么是类数组-伪数组-如何将其转化为真实的数组-必会"}},[e._v("#")]),e._v(" 15、什么是类数组(伪数组)，如何将其转化为真实的数组?(必会)")]),e._v(" "),r("p",[e._v("伪数组\n1、具有 length 属性\n2、按索引方式存储数据\n3、不具有数组的 push.pop 等方法\n伪数组(类数组):无法直接调用数组方法或期望 length 属性有什么特殊的行为，不具有 数组的 push.pop 等方法，但仍可以对真正数据遍历方法来遍历它们。典型的是函数 document.childnodes 之类的，它们返回的 nodeList 对象都属于伪数组\n伪数组--\x3e真实数组\n1.使用 Arrray.from()--ES6\n2.[].slice.call(eleArr) 或则 Array.prototype.slice.call(eleArr)")]),e._v(" "),r("p",[e._v("2019-07-06")]),e._v(" "),r("p",[e._v("示例:\nlet eleArr = document.querySelectorAll('li'); Array.from(eleArr).forEach(function(item){")]),e._v(" "),r("p",[e._v("alert(item); });")]),e._v(" "),r("p",[e._v("let eleArr = document.querySelectorAll('li'); [].slice.call(eleArr).forEach(function(item){ alert(item);")]),e._v(" "),r("p",[e._v("});")]),e._v(" "),r("h2",{attrs:{id:"_16、如何遍历对象的属性-必会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_16、如何遍历对象的属性-必会"}},[e._v("#")]),e._v(" 16、如何遍历对象的属性?(必会)")]),e._v(" "),r("p",[e._v("1、遍历自身可枚举的属性 (可枚举，非继承属性) Object.keys() 方法 该方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中的属性名的排列 顺序和使用 for..in 遍历该对象时返回的顺序一致(两者的区别是 for ..in 还会枚举其原型 链上的属性 )")]),e._v(" "),r("p",[e._v("/"),r("strong",[e._v("Array 对象")]),e._v("/\nvar arr = ['a','b','c']; console.log(Object.keys(arr));\n// ['0','1','2']\n/"),r("strong",[e._v("Object 对象")]),e._v('/\nvar obj = {foo:\'bar\',baz:42}; console.log(Object.keys(obj));\n// ["foo","baz"]\n/'),r("strong",[e._v("类数组 对象 随机 key 排序")]),e._v("/ var anObj ={100:'a',2:'b',7:'c'}; console.log(Object.keys);\n//['2','7','100']\n/*"),r("strong",[e._v("getFoo 是一个不可枚举的属性")]),e._v("/ var my_obj = Object.create(")]),e._v(" "),r("p",[e._v("{}, { getFoo : { value : function () { return this.foo } } }")]),e._v(" "),r("p",[e._v(");\nmy_obj.foo = 1;")]),e._v(" "),r("p",[e._v("console.log(Object.keys(my_obj)); // ['foo'] 2、遍历自身的所有属性(可枚举，不可枚举，非继承属性) Object.getOwnPropertyNames() 方")]),e._v(" "),r("p",[e._v("法，该方法返回一个由指定对象的所有自身属性组成的数组(包括不可枚举属性但不包括 Symbol 值作为名称的属性)")]),e._v(" "),r("p",[e._v('var arr = ["a", "b", "c"];\nconsole.log(Object.getOwnPropertyNames(arr).sort()); // ["0", "1", "2", "length"] // 类数组对象\nvar obj = { 0: "a", 1: "b", 2: "c"}; console.log(Object.getOwnPropertyNames(obj).sort()); // ["0", "1", "2"]\n// 使用 Array.forEach 输出属性名和属性值 Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {')]),e._v(" "),r("p",[e._v('console.log(val + " -> " + obj[val]); });')]),e._v(" "),r("p",[e._v("// 输出\n// 0 -> a\n// 1 -> b\n// 2 -> c\n//不可枚举属性\nvar my_obj = Object.create({}, {")]),e._v(" "),r("p",[e._v("getFoo: {\nvalue: function() { return this.foo; }, enumerable: false")]),e._v(" "),r("p",[e._v("} });")]),e._v(" "),r("p",[e._v("my_obj.foo = 1;")]),e._v(" "),r("p",[e._v('console.log(Object.getOwnPropertyNames(my_obj).sort()); // ["foo", "getFoo"] 3、遍历可枚举的自身属性和继承属性 (可枚举，可继承的属性) for in 遍历对象的属性')]),e._v(" "),r("p",[e._v("var obj={ name:'张三',")]),e._v(" "),r("p",[e._v("age : '24', getAge:function(){")]),e._v(" "),r("p",[e._v("console.log(this.age); }")]),e._v(" "),r("p",[e._v("}\nvar arry ={}; for(var i in obj){")]),e._v(" "),r("p",[e._v("if(obj.hasOwnProperty(i)&& typeOf obj[i] != 'function'){ arry[i] = obj[i];")]),e._v(" "),r("p",[e._v("} }")]),e._v(" "),r("p",[e._v("console.log(arry);")]),e._v(" "),r("p",[e._v("{name:'张三',age:24}\n注: hasOwnProperty()方法判断对象是有某个属性(本身的属性，不是继承的属性) 4、遍历所有的自身属性和继承属性")]),e._v(" "),r("p",[e._v("(function () {\nvar getAllPropertyNames = function (obj) {")]),e._v(" "),r("p",[e._v("var props = []; do {")]),e._v(" "),r("p",[e._v("props = props.concat(Object.getOwnPropertyNames(obj)); } while (obj = Object.getPrototypeOf(obj));\nreturn props;")]),e._v(" "),r("p",[e._v('}\nvar propertys = getAllPropertyNames(window); alert(propertys.length); //276 alert(propertys.join("\\n")); //toString 等')]),e._v(" "),r("p",[e._v("})()")]),e._v(" "),r("h2",{attrs:{id:"_17、如何使用原生-javascript-给一个按钮绑定两个-onclick-事件-必-会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_17、如何使用原生-javascript-给一个按钮绑定两个-onclick-事件-必-会"}},[e._v("#")]),e._v(" 17、如何使用原生 JavaScript 给一个按钮绑定两个 onclick 事件?(必 会)")]),e._v(" "),r("p",[e._v("var btn=document.getElementById(‘btn’); //事件监听 绑定多个事件")]),e._v(" "),r("p",[e._v('var btn4 = document.getElementById("btn4"); btn4.addEventListener("click",hello1); btn4.addEventListener("click",hello2); function hello1(){')]),e._v(" "),r("p",[e._v('alert("hello 1"); }')]),e._v(" "),r("p",[e._v('function hello2(){ alert("hello 2");')]),e._v(" "),r("p",[e._v("}")]),e._v(" "),r("h2",{attrs:{id:"_18、javascript-中的作用域、预解析与变量声明提升-必会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_18、javascript-中的作用域、预解析与变量声明提升-必会"}},[e._v("#")]),e._v(" 18、JavaScript 中的作用域、预解析与变量声明提升? (必会)")]),e._v(" "),r("p",[e._v("作用域\n就是变量的有效范围。 在一定的空间里可以对数据进行读写操作，这个空间就是数据的作用域")]),e._v(" "),r("p",[e._v("1、全局作用域: 最外层函数定义的变量拥有全局作用域，即对任何内部函数来说，都是 可以访问的;\n2、局部作用域: 局部作用域一般只在固定的代码片段内可访问到，而对于函数外部是无 法访问的，最常见的例如函数内部。在 ES6 之前，只有函数可以划分变量的作用域，所以 在函数的外面无法访问函数内的变量 3、块级作用域:凡是代码块就可以划分变量的作用域，这种作用域的规则就叫块级作用域 块级作用域 函数作用域 词法作用域之间的区别:")]),e._v(" "),r("p",[e._v("3.1)块级作用域和函数作用域描述的是，什么东西可以划分变量的作用域")]),e._v(" "),r("p",[e._v("3.2)词法作用域描述的是，变量的查找规则 之间的关系:")]),e._v(" "),r("p",[e._v("1、 块级作用域 包含 函数作用域\n2、 词法作用域 与 块级作用域、函数作用域之间没有任何交集， 他们从两个角度描")]),e._v(" "),r("p",[e._v("述了作用域的规则\nES6 之前 JavaScript 采用的是函数作用域+词法作用域，ES6 js 采用的是块级作用域+词 法作用域\n预解析\nJavaScript 代码的执行是由浏览器中的 JavaScript 解析器来执行的。JavaScript 解析器执 行")]),e._v(" "),r("p",[e._v("JavaScript 代码的时候，分为两个过程:预解析过程和代码执行过程 预解析过程:")]),e._v(" "),r("p",[e._v("1.把变量的声明提升到当前作用域的最前面，只会提升声明，不会提升赋值 2.把函数的声明提升到当前作用域的最前面，只会提升声明，不会提升调用 3.先提升 function，在提升 var\nJavaScript 的执行过程:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16")]),e._v(" "),r("th",[e._v("// 案例1   var a = 25; function abc() {   alert(a); // undefined   var a = 10; }   abc();       // 案例2 console.log(a); // 25 function a() {   console.log('aaaaa'); // 不会执行, 没人调用 a() }   var a = 1; console.log(a); // 1")])])]),e._v(" "),r("tbody",[r("tr",[r("td"),e._v(" "),r("td")])])]),e._v(" "),r("p",[e._v("变量提升 变量提升:定义变量的时候，变量的声明会被提升到作用域的最上面，变量的赋值不会提 升\n函数提升:JavaScript 解析器首先会把当前作用域的函数声明提前到整个作用域的最前面")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27")]),e._v(" "),r("th",[e._v("// 1、----------------------------------- var num  = 10;   fun();   function fun() {   console.log(num);   var num = 20; }   //2、----------------------------------- var a =  18;   f1(); // 调用执行 22 行, 因为后者覆盖前者 f1 函数 function f1()  {   var b = 9; console.log(a); console.log(b); var a = '123';   }   // 3、----------------------------------- f1(); //  再次调用下面的 f1 执行   console.log(c); // 9   console.log(b); // 9   console.log(a); // 18   function f1() {   vara=b=c=9;// 这里相当于vara=9;b=9;c=9, 所以后2个隐藏转换为全局变量 了   console.log(a); // 9 console.log(b); // 9 console.log(c); // 9   }")])])]),e._v(" "),r("tbody",[r("tr",[r("td"),e._v(" "),r("td")])])]),e._v(" "),r("p",[e._v("变量声明提升:\n使用 var 关键字定义的变量，被称为变量声明; 函数声明提升的特点是，在函数声明的前面，可以调用这个函数")]),e._v(" "),r("h2",{attrs:{id:"_19、变量提升与函数提升的区别-必会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_19、变量提升与函数提升的区别-必会"}},[e._v("#")]),e._v(" 19、变量提升与函数提升的区别?(必会)")]),e._v(" "),r("p",[e._v("变量提升\n简单说就是在 JavaScript 代码执行前引擎会先进行预编译，预编译期间会将变量声明与函 数声明提升至其对应作用域的最顶端，函数内声明的变量只会提升至该函数作用域最顶层 当函数内部定义的一个变量与外部相同时，那么函数体内的这个变量就会被上升到最顶端 举例来说:\nconsole.log(a); // undefined\nvar a = 3;\n// 预编译后的代码结构可以看做如下运行顺序\nvar a; // 将变量 a 的声明提升至最顶端，赋值逻辑不提升。\nconsole.log(a); // undefined\na = 3; // 代码执行到原位置即执行原赋值逻辑")]),e._v(" "),r("p",[e._v("函数提升 函数提升只会提升函数声明式写法，函数表达式的写法不存在函数提升 函数提升的优先级大于变量提升的优先级，即函数提升在变量提升之上")]),e._v(" "),r("h2",{attrs:{id:"_20、什么是作用域链-必会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_20、什么是作用域链-必会"}},[e._v("#")]),e._v(" 20、什么是作用域链?(必会)")]),e._v(" "),r("p",[e._v("作用域链 当代码在一个环境中执行时，会创建变量对象的一个作用域链")]),e._v(" "),r("p",[e._v("由子级作用域返回父级作用域中寻找变量，就叫做作用域链")]),e._v(" "),r("p",[e._v("作用域链中的下一个变量对象来自包含环境，也叫外部环境。而再下一个变量对象则")]),e._v(" "),r("p",[e._v("来自下一个包含环境，一直延续到全局执行环境。全局执行环境的变量对象始终都是作用 域链中的最后一个对象")]),e._v(" "),r("p",[e._v("作用域链前端始终都是当前执行的代码所在环境的变量对象，如果环境是函数，则将 其活动对象作为变量对象")]),e._v(" "),r("h2",{attrs:{id:"_21、如何延长作用域链-必会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_21、如何延长作用域链-必会"}},[e._v("#")]),e._v(" 21、如何延长作用域链?(必会)")]),e._v(" "),r("p",[e._v("作用域链是可以延长的\n延长作用域链: 执行环境的类型只有两种，全局和局部(函数)。但是有些语句可以在作用域链的前端临 时增加一个变量对象，该变量对象会在代码执行后被移除 具体来说就是执行这两个语句时，作用域链都会得到加强\n1、try - catch 语句的 catch 块;会创建一个新的变量对象，包含的是被抛出的错误对象的")]),e._v(" "),r("p",[e._v("声明\n2、with 语句。with 语句会将指定的对象添加到作用域链中")]),e._v(" "),r("h2",{attrs:{id:"_22、判断一个值是什么类型有哪些方法-必会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_22、判断一个值是什么类型有哪些方法-必会"}},[e._v("#")]),e._v(" 22、判断一个值是什么类型有哪些方法?(必会)")]),e._v(" "),r("p",[e._v("方法 1、typeof 运算符")]),e._v(" "),r("p",[e._v("2、instanceof 运算符\ninstanceof 严格来说是Java中的一个双目运算符，用来测试一个对象是否为一个类的实例，")]),e._v(" "),r("p",[e._v("用法为:\n// 判断 foo 是否是 Foo 类的实例 function Foo(){}\nvar foo = new Foo();\nconsole.log(foo instanceof Foo) //true")]),e._v(" "),r("p",[e._v("3、Object.prototype.toString 方法")]),e._v(" "),r("ul",[r("li",[e._v("l  在     JavaScript 里使用 typeof 来判断数据类型，只能区分基本类型，即     “Number”，”")])]),e._v(" "),r("p",[e._v("String”，”undefined”，”Boolean”，”Object”，“Function”，“symbol” (ES6 新增)七种")]),e._v(" "),r("ul",[r("li",[e._v("l  对于数组、null、对象来说，其关系错综复杂，使用     typeof 都会统一返回 “object” 字")])]),e._v(" "),r("p",[e._v("符串")]),e._v(" "),r("ul",[r("li",[e._v("l  要想区别对象、数组、函数单纯使用 typeof 是不行的，JavaScript     中,通过")])]),e._v(" "),r("p",[e._v("Object.prototype.toString 方法，判断某个对象值属于哪种内置类型。\nl在 介 绍 Object.prototype.toString 方 法 之 前 ， 我 们 先 把 toString() 方 法 和")]),e._v(" "),r("p",[e._v("Object.prototype.toString.call()方法进行对比")]),e._v(" "),r("ul",[r("li",[e._v("l  toString()方法和     Object.prototype.toString.call()方法对比")]),e._v(" "),r("li",[e._v("l  var     arr=[1,2];")]),e._v(" "),r("li",[e._v("l  //直接对一个数组调用 toString()")]),e._v(" "),r("li",[e._v('l  arr.toString();//     "1,2"')]),e._v(" "),r("li",[e._v("l  //通过     call 指定 arr 数组为     Object.prototype 对象中的 toString 方法的上下文")]),e._v(" "),r("li",[e._v('l  Object.prototype.toString.call(arr);     //"[object Array]"')])]),e._v(" "),r("h2",{attrs:{id:"_23、如何实现数组的随机排序-必会"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_23、如何实现数组的随机排序-必会"}},[e._v("#")]),e._v(" 23、如何实现数组的随机排序?(必会)")]),e._v(" "),r("p",[e._v("方法一:\nvar arr = [1,2,3,4,5,6,7,8,9,10];")]),e._v(" "),r("p",[e._v("function randSort1(arr){\nfor(var i = 0,len = arr.length;i < len; i++ ){")]),e._v(" "),r("p",[e._v("var rand = parseInt(Math.random()*len); var temp = arr[rand];\narr[rand] = arr[i];\narr[i] = temp;")]),e._v(" "),r("p",[e._v("}")]),e._v(" "),r("p",[e._v("return arr; }")]),e._v(" "),r("p",[e._v("console.log(randSort1(arr));")]),e._v(" "),r("p",[e._v("方法二:\nvar arr = [1,2,3,4,5,6,7,8,9,10];")]),e._v(" "),r("p",[e._v("function randSort2(arr){ var mixedArray = []; while(arr.length >0){")]),e._v(" "),r("p",[e._v("var randomIndex = parseInt(Math.random()*arr.length); mixedArray.push(arr[randomIndex]); arr.splice(randomIndex, 1);")]),e._v(" "),r("p",[e._v("}\nreturn mixedArray;")]),e._v(" "),r("p",[e._v("} console.log(randSort2(arr));")]),e._v(" "),r("p",[e._v("方法三:\nvar arr = [1,2,3,4,5,6,7,8,9,10];")]),e._v(" "),r("p",[e._v("arr.sort(function(){\nreturn Math.random() - 0.5;")]),e._v(" "),r("p",[e._v("}) console.log(arr);")]),e._v(" "),r("h2",{attrs:{id:"_24、src-和-href-的区别是-了解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_24、src-和-href-的区别是-了解"}},[e._v("#")]),e._v(" 24、src 和 href 的区别是?(了解)")]),e._v(" "),r("p",[e._v("区别 src(source)指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置;\n在 请求 src 资源时会将其指向的资源下载并应用到文档中，如 JavaScript 脚本，img 图片")]),e._v(" "),r("p",[e._v("和 iframe 等元素 当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执 行完毕，类似于将所指向资源嵌入当前标签内\nhref(hypertext reference/超文本引用)指向网络资源所在位置，建立和当前元素(锚点)或")]),e._v(" "),r("p",[e._v('当前文档(链接)之间的链接，如果我们在文档中添加<link href="common.css"rel="stylesheet"/> 那么浏览器会识别该文档为 CSS 文件，就会并行下载资源并且不会停止对当前文档的处理')])])}),[],!1,null,null,null);r.default=a.exports}}]);