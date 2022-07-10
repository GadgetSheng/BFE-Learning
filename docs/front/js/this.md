# this指针/闭包/作用域

## 执行上下文
> 执行上下文是评估和执行 JavaScript 代码的环境的抽象概念。
> 每当 Javascript 代码在运行的时候，它都是在执行上下文中运行。

### 执行上下文的类型
JavaScript中有三种执行上下文类型
* **全局执行上下文** - 这是默认或者说基础的上下文，任何不在函数内部的代码都在全局上下文中。
它会执行两两件事： 创建一个全局的window对象(浏览器)，并且设置`this`的值等于这个全局对象。
一个程序中只会有一个全局执行上下文。

* **函数执行上下文** - 每当一个函数被调用时，都会为该函数创建一个新的上下文。
每个函数都有它自己的执行上下文，不过是在函数被调用时创建的。函数上下文可以有任意多个。
每当一个新的执行上下文被创建，它会按定义顺序执行一系列步骤。

* **Eval函数执行上下文** - 执行在`eval`函数内部的代码也会有它属于自己的执行上下文，
但由于Javascript开发者并不经常使用`eval`,所以在这里我不会讨论它。

## 执行栈
执行栈，也就是在其他编程语言中所说的“调用栈”,是一种拥有LIFO(后进先出)数据结构的栈，被用来存储代码运行
时创建的所有执行上下文。

当JavaScript 引擎第一次遇到你的脚本时，它会创建一个全局的执行上下文并且压入当前执行。每当引擎遇到一个函数调用，
它会为该函数创建一个新的执行上下文并压入栈的顶部。

引擎会执行那些执行上下文位于栈顶的函数。当该函数执行结束，执行上下文从栈中弹出，控制流程到达当前栈中的下一个上下文。
### 怎么创建执行上下文
到现在，我们已经看到 JavaScript 怎么管理执行上下文了，现在让我们了解JavaScript引擎是怎样创建执行上下文的。
创建执行上下文有两个阶段1)创建阶段 和2）执行阶段
### The Creation Phase
在JavaScript代码执行前，执行上下文将经历创建阶段。在创建阶段会发生三件事:
1. **this**值的决定,即我们所熟知的 **This绑定**。
2. 创建**词法环境**组件
3. 创建**变量环境**组件
### This 绑定
在全局执行上下文中, `this`的值指向全局对象。(浏览器，this是window)

在函数执行上下文中，`this`的值取决于该函数是如何被调用的。
如果它被一个引用对象调用，那么`this`会被设置成那个对象，否则`this`的值被设置为
全局对象或者`undefined`(严格模式下)。
```js
let foo={
    bar: function(){
        console.log(this);
    }
}
foo.bar(); // this 引用 foo 因为bar被foo对象调用

let baz=foo.bar;
baz(); // this 指向全局window对象,因为没有指定引用对象

```
## 词法环境
官方ES6 文档把词法环境定位为
> **词法环境** 是一种规范类型，基于ECMAScript 代码的词法嵌套结构来定义**标识符**和具体变量和函数的
> 关联。一个词法环境由环境记录器和一个可能引用外部词法环境的空值组成。

简单来说词法环境是一种持有标识符-变量映射的结构。(这里的**标识符**指的是变量/函数的名字，而变量是对实际对象
[包含函数类型对象]或原始数据的引用)。
现在，在词法环境的内部有两个组件 (1)环境记录器 和 (2)一个外部环境的引用。
1. 环境记录器是存储变量和函数声明的实际位置。
2. 外部环境的引用意味着它可以访问其父级词法环境(作用域)

词法环境有两种类型:
* 全局环境(在全局执行上下文中)是没有外部环境引用的词法环境。全局环境的外部环境引用是null。
它拥有内建的Object/Array/等、在环境记录器内的原型函数(关联全局对象，比如window对象)还有
任何用户定义的全局变量，并且`this`的值指向全局对象。

* 在函数环境中，函数内部用户定义的变量存储在环境记录器中。并且引用的外部环境可能是全局环境，或者任何包含
此内部函数的外部函数。

环境记录器也有两种类型：
1. 声明式环境记录器存储变量、函数和参数
2. 对象环境记录器 用来定义出现在全局上下文中的变量和函数的关系。
   
:::reference 简而言之
* 在全局环境中，环境记录器是对象环境记录器
* 在函数环境中，环境记录器是声明式环境记录器
:::

**注意** 对于函数环境，声明式环境记录器还包含了一个传递给函数的`arguments`对象(此对象储存索引和参数的映射)
和传递给函数的参数的**length**

## 变量环境
它同样是一个词法环境，其环境记录器持有变量声明语句在执行上下文中创建的绑定关系。
如上综述，变量环境是一个词法环境，所以它有着上面定义的词法环境的所有属性
在ES6中，词法环境组件和变量环境组件的一个不同就是前者被用来储存函数声明和变量(`let`和`const`)
绑定，而后者只用来储存var变量绑定

```js
let a = 20;
const b = 30;
var c;
function multiply(e, f){
    var g = 20;
    return e * f * g;
}
c = multiply(20, 30);
```
**注意** 只有遇到调用函数 `multiply`时，函数执行上下文才会被创建 
`let`和`const`定义的变量并没有关联任何值，但var定义的变量被设成了undefined
这是因为在创建阶段 引擎检查代码找出变量和函数声明，虽然函数声明完全储存在环境中，
但是变量最初设置为undefined（var情况下）或者未初始化(let和const情况下)
这就是为什么你可以在声明之前访问var定义的变量（ 虽然是undefined），但是在声明之前访问
let和const的变量会得到一个引用错误
这就是我们说的变量声明提升

### 执行阶段
在此阶段，完成对所有这些变量的分配，最后执行代码
注意-- 在执行阶段，如果javascript引擎不能在源码中声明的实际位置找到let变量的值
它会被赋值为`undefined`

-----
## 作用域
### 作用域链 - 儿子能用父亲的东西
```js
let a='gadget'
console.log(a)
function lesson(){
    let b= 'sheng'
    // 变量的提升
    console.log(b)
    teacher()
    // 函数提升 - 提升至当前作用域最初始
    function teacher(){
        let c='me'
        console.log(c)
    }
}
lesson();

// ********** **********
// 提升的优先级 -  变量优先
console.log("piority",item);
function item(){
    this.name='function';
}
item='variable';

// ********** **********
// 块级作用域
if（true){
    let d=111;
    var e=222;
    console.log(d,e);
}
// Uncaught SyntaxError: Invalid or unexpected token
console.log('d',d);
console.log('e',e);
```

1. 对于作用域链，我们直接通过创建态来定位作用域链
2. 手动取消全局，使用块级作用域

## this - context
> 参考资料:[MDN中this](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)

this 是在执行时动态读取上下文决定的，而非创建时

### 各使用态中的指针指向
```js
function foo(){
    console.log('函数内部的this',this);
}
foo(); // window
```

### 隐式绑定 - this指向的是调用的上一级 =>存在于对象/数组等引用关系逻辑之上
```js
function fn(){
    console.log('隐式绑定',this.a);
}
const obj={
    a:1,
    fn
}
obj.fn=fn;
obj.fn();

// **********
// 面试题
const foo={
    bar: 100,
    fn: function(){
        console.log(this.bar);
        console.log(this);
    }
}
// 取出
let fn1=foo.fn;
fn1(); // undefined window

// 追问： 如何改变属性的指向
const o1={
    text: 'o1',
    fn: function(){
        return this.text;
    }
}
const o2={
    text: 'o2',
    fn: function(){
        return o1.fn();
    }
}
const o3={
    text: 'o3',
    fn: function(){
        // 直接内部构造 - 接口人
        let fn=o1.fn;
        return fn();
    }
}
console.log('o1.fn',o1.fn()); // o1
console.log('o2.fn',o2.fn()); // o1
console.log('o3.fn',o3.fn()); // undefined
```
1. 在执行函数时，函数被上一级调用，去找发起方
2. 直接变成公共执行，指向全局
```js
// 追问：o2.fn() 输出 o2
// 1. 人为干涉 改变this bind/call/apply
o2.fn.call(o2);
// 2. 不干涉，学习o1.fn能力
const o2={
    text: 'o2',
    fn: o1.fn
}
```

### 显示绑定
`bind | call | apply`
```js
function foo(){
    console.log('foo',this);
}
foo(); 
foo.call({a:1});
foo.apply({a:1});
const bindFoo=foo.bind({a:1});
bindFoo();
```
* 追问： call/apply/bind的区别
1. call - apply 传参不同 依次传入/数组传入
2. bind - call|apply 返回值不同
* 追问2: bind原理/手写
```js
// 1. bind是Function原型上的方法
// 2. 作用： 改变上下文 传入 newThis + args
// 3. 返回一个可执行函数 (newThis,args);
Function.prototype.myBind=function(){
    var that=this;
    var args=Array.proptotype.slice.call(arguments);
    var newThis=args.shift();
    function ctor(){
        var newArgs=args.concat(arguments);
        var thisArg= this instanceof ctor ? this:newThis;
        return that.apply(newThis,newArgs);
    }
    ctor.prototype=this.prototype;
    return ctor;
}

Function.prototype.myApply=function(context,args){
    // 边缘检测 函数
    if(typeof this !=='function'){
        throw new Error('type error');
    }
    // 参数检测
    context=context || window;
    context.fn=this;
    var result=args
        // ? context.fn(...arguments[1])
        // 利用数组 toString的特性
        ? eval('context.fn('+args+')') 
        : context.fn();
    delete context.fn;
    return result;
}
```