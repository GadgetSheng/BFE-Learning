function genUniqueProp(obj) {
    var prop = '_' + Math.random();
    if (Object.prototype.hasOwnProperty.call(obj, prop) === true) {
        return genUniqueProp(obj);
    }
    return prop;
}
Function.prototype.apply4 = function (context, args) {
    var newThis = context || window;
    var fn = genUniqueProp(newThis);
    newThis[fn] = this;
    var result;
    if (args === void 0) {
        result = newThis.fn();
    } else {
        var data = [];
        for (var i = 0; i < args.length; i++) {
            data.push('args[' + i + ']');
        }
        var evalStr = 'newThis["' + fn + '"](' + data + ')';
        console.log(evalStr);
        result = eval(evalStr); // 还是eval强大
    }
    delete newThis[fn];
    return result;
}

//测试一下
var obj = { name: 'test' }
function sayHello(age, title) {
    return { name: this.name, age, title }
}
console.log(sayHello.apply4(obj, [24, 't']));
// 完美输出{name: "test", age: 24}