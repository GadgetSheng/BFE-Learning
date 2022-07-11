# 手写部分

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
- 想要完美，就需要保证fn的唯一性(ES6 Symbol)
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