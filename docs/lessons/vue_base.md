# vue基础用法
## 理论
### 面试题1： 简单聊聊对于MVVM的了解
* 1. 发展史以及旁支
a. 语义化模板 
b. MVC - model view controller
c. MVVM - Model-View-ViewModel
i. 数据会绑定在viewModel层并自动将数据渲染到页面中
ii. 视图变化时，会通知viewModel层更新数据

## 写法
### vue是如何利用mvvm思想进行项目开发
数据双向绑定

a. 利用花括号，构筑了数据与视图的双向绑定 —— 若干正则

b. 通过视图绑定事件，来处理数据

### 生命周期
#### 面试题2：vue生命周期
beforeCreate => created => beforeMount => mounted => beforeUpdate => updated
=> beforeDestroy => destroyed

bC: new Vue() - 实例挂载功能
c: data、props、method、computed - 数据操作、不涉及到vdom和dom

bM: vDom - 数据操作，但是不可涉及dom
m: Dom - 任何操作

bU: vDom更新了的，dom未更新是旧的 - 可以更新数据 
u: dom已经更新了 — 谨慎操作数据

bD: 实例vm尚未被销毁 — 清空eventBus、reset store、clear计时器
d: 实例已经被销毁 - 收尾

### 定向监听
#### 面试点3：computed 和 watch
相同点：
1. 基于vue的依赖收集机制
2. 都是被依赖的变化触发，进行改变进而进行处理计算

不同点：
1. 入和出
computed: 多入单出 —— 多个值变化，组成一个值的变化
watch: 单入多出 —— 单个值的变化，进而影响一系列的状态变更

2. 性能
computed: 会自动diff依赖，若依赖没有变化，会改从缓存中读取当前计算值
watch: 无论监听值变化与否，都会执行回调

3. 写法上
computed: 必须有return返回值
watch: 不一定

4. 时机上
computed: 从首次生成赋值，就开始计算运行了
watch: 首次不会运行，除非——immediate：true

### 条件
#### v-if & v-show & v-else & v-else-if
- v-if 无dom，不会渲染实际节点及其子节点
- v-show 存在实际节点及其子节点，单不展示，不占据位置

### 循环
#### 面试题： v-for 和 v-if 优先级
v-for > v-if 先循环 再判断

#### 面试题：key的作用
1. 模板编译原理 —— template => dom
template => 正则匹配语法 —— 生成AST：静态 + 动态 => 转换AST为可执行方法 => render() => dom

2. dom diff
> 1 2 3 4 5 6
> 
> 6 5 7 3 2 1

- 层级：只考虑单层复用，多层级遍历实现
- 顺序：双向指针，首尾向中间移动
- 替换：移动、新增、删除；优先复用 —— key => 快速识别顺序

3. key作用 —— 尽可能复用节点
常见问题：index做key、随机数做key

### 指令
#### 默认指令
* v-once - 只渲染依次
* v-text - 渲染字符串
* v-html - 渲染html
* v-bind - : 绑定赋值
* v-on - @ 监听
* v-model - 双向绑定 —— 语法糖 :value + @input
* 重配置
```js
  model: {
    prop: 'selected',
    event: 'change'
  }
```


#### 自定义指令
```js
  directives: {
    zhaowa: {
      update: function() {
        // ……
      }
    }
  }
  <div v-zhaowa></div>
```

### 事件
#### v-on
#### 修饰符
.stop .prevent .capture .self .once .passive

#### 按钮修饰符
enter delete

#### 事件设计 - 为何vue把事件写在模板上，而不是js中
模板定位事件触发源 + 触发源寻找触发事件逻辑 —— 更方便定位问题

js与事件本身解耦 —— 更便于测试隔离

viewModel销毁，自动解绑事件 —— 更便于回收

## 组件化
### 一般组件 + 动态组件

