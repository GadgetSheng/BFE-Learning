# 手写[ `apply` | `call` | `bind` ] 

[参考blog1](https://github.com/jawil/blog/issues/16)


## 手写apply
### apply原理
[MDN/Function..apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
:::tip apply原理描述
1. 改变了`this`的指向
2. 函数执行了
3. 还能给定**参数数组**来执行函数
4. 有返回值
5. 避免重复属性 `object[Symbol()]`

:::

### apply实现
::: details apply提示1+2
func.`apply`(context) 和下面代码的功能类似 (假设`context`中预先不存在名为`fn`的属性)
```js
Function.prototype.apply1=function(context){
    context.fn=this; // this为调用apply的函数(=func
    context.fn(); // 先不处理参数
    delete context.fn; // 删除临时方法
}
```
:::

::: details apply提示3
* 传入的参数就是一个数组
* 第二个参数就是数组对象
* 执行时要把Array传递给函数当参数然后执行
```js
// [1,2,3,4].toString() === "1,2,3,4"
Function.prototype.apply2=function(context){
    context.fn=this;
    var args=arguments[1]; // 第二个参数就是参数数组
    eval('context.fn('+args.toString()+')');
    delete context.fn;
}
```
:::

::: warning apply提示4
* `this` 参数可以传 `null` 或者为`undefined`,这是赋值`window`
* 函数是有返回值的
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
::: 

:::danger 解决隐患
一开始就埋坑 假设了context对象预先就**不存在**名为fn的属性
:::

::: details apply提示5
- 想要完美，就需要保证fn的唯一性(ES6 `Symbol`[^1])
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
:::
### apply测试
```js
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

## 手写call
### call原理
[MDN/Function..call](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
:::tip call原理描述
1. 允许为不同的对象分配和调用属于一个对象的函数/方法。
2. 提供新的 this 值给当前调用的函数/方法。
3. 有返回值
4. 指定参数列表，非全体参数的数组[^2]
:::
### call实现
:::details 实现
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
```
:::
### call测试
```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}
function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}
function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}
var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
```

## 手写bind
### bind原理
[MDN/Function..bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
:::tip bind原理描述
 bind 方法的 length 属性是 1。
 `Function.prototype.bind` 创建的函数对象不包含 `prototype` 属性
1. bind创建一个新函数
2. 调用时候，this值是传递给bind的第一个参数
3. 它的参数是bind的其他参数+ 原本参数
4. bind返回的绑定函数也能使用new操作符创建对象(=把原函数当成constructor)
5. new的情况下，提供的thisArg被忽略，同时调用时的参数被提供给内部模拟函数
::: 
### bind实现
core-js实现[^3]
:::details bind提示1+2
```js
// 简单实现
Function.prototype.bind1=function(context){
    var target=this;
    var args=Array.prototype.slice.call(arguments,1);
    return function(){
        return target.apply(context,args)
    }
}
```
:::

::: details bind提示3
```js
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
```
:::

::: details bind提示4+5
```js
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
```
:::
### bind测试
```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.toString = function() {
  return this.x + ',' + this.y;
};
var p = new Point(1, 2);
p.toString(); // '1,2'
var emptyObj = {};
var YAxisPoint = Point.bind(emptyObj, 0/*x*/);
// 本页下方的 polyfill 不支持运行这行代码，
// 但使用原生的 bind 方法运行是没问题的：
var YAxisPoint = Point.bind(null, 0/*x*/);
/*（译注：polyfill 的 bind 方法中，如果把 bind 的第一个参数加上，
即对新绑定的 this 执行 Object(this)，包装为对象，
因为 Object(null) 是 {}，所以也可以支持）*/
var axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'
axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new YAxisPoint(17, 42) instanceof Point; // true
```



[^1]: 注意点: <br/>
`Symbol`值不能与其他类型的值进行运算。<br/>
`Symbol`值作为对象属性名时，不能用点运算符。
[^2]: `call`与`apply`的唯一区别
[^3]: [core-js/polyfill/bind](https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/function-bind.js)