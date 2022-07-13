Function.prototype.call1 = function (context) {
    var newThis = context || window;
    var args = arguments[1];
    newThis.fn = this;
    var args = [];
    for (var i = 1; i < arguments.length; i++) {
        args.push('arguments['+i+']');

    }
    var evalStr = 'newThis.fn(' + args.toString() + ')';
    console.log(evalStr);
    var result = eval(evalStr);
    delete newThis.fn;
    return result;
}
//测试一下
var obj = { name: 'test' }
function sayHello(age, title) {
    return { name: this.name, age, title }
}
console.log(sayHello.call1(obj, 24, 't'));
// 完美输出{name: "test", age: 24}