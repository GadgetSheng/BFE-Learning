
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
function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.toString = function () {
    return this.x + ',' + this.y;
};

var p = new Point(1, 2);
// p.toString(); // '1,2'

// var emptyObj = {};
// var YAxisPoint = Point.bind3(emptyObj, 0/*x*/);
// 本页下方的 polyfill 不支持运行这行代码，
// 但使用原生的 bind 方法运行是没问题的：
var YAxisPoint = Point.bind3(null, 0/*x*/);
/*（译注：polyfill 的 bind 方法中，如果把 bind 的第一个参数加上，
即对新绑定的 this 执行 Object(this)，包装为对象，
因为 Object(null) 是 {}，所以也可以支持）*/
var axisPoint = new YAxisPoint(5);
console.log(axisPoint.toString()); // '0,5'
console.log(axisPoint instanceof Point); // true
console.log(axisPoint instanceof YAxisPoint); // true
console.log(new YAxisPoint(17, 42) instanceof Point); // true