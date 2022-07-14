# 手写部分
applay/call/bind 参考[^0]
## apply

### 模拟apply第一步
::: reference 原理PART-1
-  改变了`this`的指向
- 函数执行了
:::
`func.apply(context)` 和下面代码的功能类似 (假设`context`中预先不存在名为`fn`的属性)
1. `context.fn=func;`
2. `context.fn();`
3. `delete context.fn;`
```js
Function.prototype.apply1=function(context){
    context.fn=this; // this为调用apply的函数(=func
    context.fn(); // 先不处理参数
    delete context.fn; // 删除临时方法
}
```
### 模拟apply第二步
`apply` 还能给定 参数 来执行函数
1. 传入的参数就是一个数组
2. 第二个参数就是数组对象
3. 执行时要把Array传递给函数当参数然后执行
```js
// [1,2,3,4].toString() === "1,2,3,4"
Function.prototype.apply2=function(context){
    context.fn=this;
    var args=arguments[1]; // 第二个参数就是参数数组
    eval('context.fn('+args.toString()+')');
    delete context.fn;
}

// 测试
var foo = {
    name: "foo",
    sayHello: function (age) {
         console.log(this.name,age);
    }
};
var bar = { name: "bar" };
foo.sayHello.apply2(bar,[24])//bar 24
```
### 模拟apply第三步
还需要注意的点
1. `this` 参数可以传 `null` 或者为`undefined`,这是赋值`window`
2. 函数是有返回值的
```js
Function.prototype.apply3=function(context){
    var newThis=context||window;
    var args=arguments[1];
    newThis.fn=this;
    var result;
    if(args === void 0){
        result=newThis.fn();
    }else{
        result=eval('newThis.fn('+args.toString()+')'); // 还是eval强大
    }
    delete newThis.fn;
    return result;
}
```
### 模拟apply第四步
:::danger 隐患
一开始就埋坑--
假设了context对象预先就**不存在**名为fn的属性
:::
- 想要完美，就需要保证fn的唯一性(ES6 Symbol[^1])
- ES5 属性名称只可能是一个字符串，做到这个字符串不可预期，一个随机数基本上就解决了。
```js
function genUniqueProp(obj){
    var prop='_'+Math.random();
    if(Object.prototype.hasOwnProperty.call(obj,prop)===true){
        return genUniqueProp(obj);
    }
    return prop;
}
Function.prototype.apply4=function(context){
    var newThis=context||window;
    var args=arguments[1];
    var fn=genUniqueProp(newThis);
    newThis[fn]=this;
    var result;
    if(args === void 0){
        result=newThis.fn();
    }else{
        result=eval('newThis[fn]('+args.toString()+')'); // 还是eval强大
    }
    delete newThis[fn];
    return result;
}
```

## call
```js
Function.prototype.call1=function(context){
    var newThis = context || window;
    var args = arguments[1];
    newThis.fn = this;
    var args = [];
    for(var i=1;i<arguments.length;i++){
        args.push('arguments['+i+']');
    }
    var result=eval('newThis["fn"]('+args.toString()+')');
    delete newThis.fn;
    return result;
}
//测试一下
var obj = { name: 'test' }
function sayHello(age) {
    return { name: this.name, age: age }
}
console.log(sayHello.call1(obj,24));
// 完美输出{name: "test", age: 24}
```

## bind
[core-js/polyfill/bind](https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/function-bind.js)

 bind 方法的 length 属性是 1。
 `Function.prototype.bind` 创建的函数对象不包含 `prototype` 属性
1. bind创建一个新函数
2. 调用时候，this值是传递给bind的第一个参数
3. 它的参数是bind的其他参数+ 原本参数
4. bind返回的绑定函数也能使用new操作符创建对象(=把原函数当成constructor)
5. new的情况下，提供的thisArg被忽略，同时调用时的参数被提供给内部模拟函数
> `func.bind(thisArg[, arg1[, arg2[, ...]]])`
```js
// 简单实现
Function.prototype.bind1=function(context){
    var target=this;
    var args=Array.prototype.slice.call(arguments,1);
    return function(){
        return target.apply(context,args)
    }
}
// curring 柯里化实现
// bind方法还可以这样写 fn.bind(obj, arg1)(arg2).
Function.prototype.bind2=function(context){
    var target=this;
    var args=Array.prototype.slice.call(arguments,1);
    return function(){
        var innerArgs=Array.prototype.slice.call(arguments);
        var combinedArgs=args.concat(innerArgs);
        return target.apply(context,combinedArgs);
    }
}
// 兼容构造函数
var arraySlice = Array.prototype.slice;
Function.prototype.bind3 = function (thisArg) {
    if (typeof this !== 'function') throw new TypeError('not a function');
    var F = this;
    var partArgs = arraySlice.call(arguments, 1);
    var bound = function () {
        var args = [].concat(partArgs, arraySlice.call(arguments));
        if (this instanceof bound) {
            return F.apply(this, args);
        }
        else
            return F.apply(Object(thisArg), args);
    }
    var FPrototype = F.prototype;
    if (typeof FPrototype === 'object' && FPrototype !== null) {
        bound.prototype = FPrototype;
    }
    return bound;
}

// 测试
var obj = { name: 'foo' }
function sayHello(age) {
    return { name: this.name, age: age }
}
console.log(sayHello.bind3(obj,24)());// 完美输出{name: "foo", age: 24}
```

---
[^0]: [参考blog](https://github.com/jawil/blog/issues/16)
[^1]: 注意点: <br/>
`Symbol`值不能与其他类型的值进行运算。<br/>
`Symbol`值作为对象属性名时，不能用点运算符。