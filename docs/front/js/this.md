# this指针/闭包/作用域

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