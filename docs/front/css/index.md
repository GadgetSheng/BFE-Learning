---
title: 来学CSS
---

# 各种CSS距中方案
页面居中，各种元素居中是我们开发是很常见的情况，
下面就来讨论下（水平居中，垂直居中以及水平加垂直居中）都有哪些常见的方案。
我们的目标是对齐下面这两个div:
```html
<div class="parent" style="background: #333;">
  <div class="child" style="color:#eee;">
    DEMO
  </div>
</div>
```

## 水平居中
### `text-align` + `inline-block`
* `text-align`会对`inline`的子级生效，设置为`center`就水平居中
* `display`设置为`inline-block`子级就不会撑满父级，而是自适应内容
* `text-align`会继承，child的子级也会水平居中，如果我们想恢复默认，手动写为左对齐就行了 
```css
.parent{
  text-align: center;
}
.child{
  display: inline-block;
  text-align: left;
}
```

### `table` + `margin`
* `display`设置为`table`，如果不指定宽度，宽度就是自适应内容 
* `display`如果是`table`，`margin auto`就可以生效 
* 如果没有设置`dispaly`为`table`，`margin auto`不能生效 
* 如果知道子元素宽度，可以直接应用`margin auto`
```css
.parent2{ }
.child2{
  display: table;
  margin: 0 auto;
}
```
> 上面这个方法适合父级元素宽度不固定，子级元素宽度也不固定的情况，<br/>
> 如果知道子级元素的宽度就很简单了，直接应用`margin auto`即可:
```css
.parent3{ }
.child3{
  width: 100px;
  margin: 0 auto;
}
```
### `absolute` + `transform`
* 父级设置`relative`好让子级`absolute`相对于父级定位
* `left: 50%`会让子级在正中稍微靠右一点
* `translateX`百分比相对的是自身，因为前面靠右了，往左挪一点,挪的位置刚好是自身宽的一半
```css
.parent4{
  position: relative;
}
.child4{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
```
### `flex` + `justify-content`
* 这是最简单的一种方式，直接父级定义`justify-content`就可以了
```css
.parent5{
  display: flex;
  justify-content: center;
}
.child5{}
```
### `flex` + `margin`
* `flex`元素也可以支持`margin auto`，所以可以这样写
```css
.parent5-1{
  display: flex;
}
.child5-1{
  margin: 0 auto;
}
```

## 垂直居中
### `table-cell` + `vertical-align`
* `vertical-align`在`table-cell`里面生效，所以在给父级设置`table-cell`，然后`vertical-algin`设置为`middle`就可以
```css
.parent6{
  display: table-cell;
  vertical-align: middle;
}
.child6{}
```

### `absolute` + `tansform`
* 与水平居中类似，父级设置为`relative`，然后设置`absolute`，`top`设置为50%，这样会让位置稍微偏下一点
* `translateY`百分比也是相对于元素自身计算的
```css
.parent7{
  position: relative;
}
.child7{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

### `flex` + `align-items`
* 这个是最简单的，直接在父级设置`flex`和`align-items:center;`
```css
.parent8{
  display: flex;
  align-items: center;
}
.child8{}
```

## 水平垂直居中
水平垂直居中直接将前面的水平居中和垂直居中的方案**结合起来**就行了
### `text-align` + `inline-block` + `table-cell` + `vertical-align`
```css
.parent9{
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}
.child9{
  display: inline-block;
}
```

### `absolute` + `tansform`
前面水平居中，垂直居中都用`absolute`+`transform`方案，结合起来就可以水平垂直居中了
```css
.parent10{
  position: relative;
}
.child10{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
```
### `flex`
又看到了我们最喜欢的flex了，做居中不要太简单
```css
.parent11{
  display: flex;
  justify-content: center;
  align-items: center;
}
.child11{}
```