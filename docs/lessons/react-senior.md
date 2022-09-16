# 深度剖析 React 项目实战及面试真题

## 一.前端Job Model
| 前端工作类型 | 体系职能                                                                         |
| ------------ | -------------------------------------------------------------------------------- |
| 开发         | 负责人机交互层的界面开发，实现交互功能                                           |
| 架构         | 熟悉业务领域与前端技术发展，负责前端类库框架、研发流程等基础体系的设计并推动实现 |
|              | ，负责业务领域的前端技术选型并推动落地                                           |
| 数据可视化   | 负责常规统计图表、业务洞察分析、地理空间数据分析等相关引擎、服务、产品及生态建设 |
| Node         | 基于Node进行web服务开发或工具开发                                                |
| 图像互动     | 负责互动/游戏化业务，2D&3D图像渲染等研发工作                                     |
| 前端体验     | 1. 体验度量：通过设计体验模型来度量产品体验功能                                  |
|              | 2. 体验优化：体验分析，如核心链路分析、体验验收&用户反馈等                       |
| 前端工程化   | 1. 基础前端工程服务平台、前端上层链路研发平台、开发支撑平台                      |
|              | 2. 前端研发工具，如WebIDE etc                                                    |
| 跨端技术     | 1. 跨软硬件设备，IoT、跨操作系统、跨App、跨渲染容器                              |
|              | 2. 跨端生态 （最常见，如webView，weex，rn etc）                                  |
| 中后台技术   | 1. 基础UI组件，研发工具                                                          |
|              | 2. low Code、no Code逻辑编排 etc                                                 |
| 前端智能化   | 1. D2C（Design to Code 设计稿转代码）                                            |
|              | 2. 分析用户特征，推荐UI排版，千人千面                                            |
| Serverless   | 1. 含义：Serverless = Server + less = 少/无服务器                                |
|              | 2. FaaS：Function as a service 代码+相关依赖+配置                                |
| 数据可视化   | 1. 基础前端工程服务平台、前端上层链路研发平台、开发支撑平台                      |
|              | 2. 前端研发工具，如WebIDE etc                                                    |
| 跨端技术     | 1. 更准确、清晰、有效且美的展现交互                                              |
|              | 2. 数据可视化工具：BI工具、移动端/大屏可视化、图表分析编排、LBS可视化            |
| 多媒体技术   | 1. 音视频基础、流媒体播放、视频剪辑等                                            |
|              | 2. 多端（web、Hybrid、小程序）直播间                                             |

## 二.React在大厂中的实际应用

### React在行业内生态环境
* CRA(create react app) ：https://github.com/facebook/create-react-app
* Vite（2022大热）：https://github.com/vitejs/vite
* SSR应用：Next.js：https://github.com/vercel/next.js
* 静态站点：Gatsby.js：https://github.com/gatsbyjs/gatsby
* react hooks
* redux：https://redux.js.org/
* React Query（REST API、GraphQL API 都有）：https://github.com/tannerlinsley/react-query
* Apollo Client（只有 GraphQL API）：https://www.apollographql.com/docs/react/
* React-router：https://reactrouter.com/
* CSS Modules（CSS in CSS）：https://github.com/css-modules/css-modules
* Styled Components（CSS in JS，目前最受欢迎）:https://www.robinwieruch.de/react-styled-components/
* Tailwind CSS（Utility-First-CSS）：https://tailwindcss.com/
* clsx（条件渲染）：https://github.com/lukeed/clsx
* material UI（最流行）：https://mui.com/zh/
* Ant Design（国内最流行）：https://ant.design/
* React Transition Group
* Framer Motion：https://www.framer.com/motion/
* react-motion：https://github.com/chenglou/react-motion
* D3：https://d3js.org/
* Recharts：https://recharts.org/zh-CN/
* react-chartjs：https://github.com/reactchartjs/react-chartjs-2
* react hook form：https://react-hook-form.com/
* PropTypes
* TS：https://www.typescriptlang.org/
* eslint：https://eslint.org/
* prettier：https://github.com/prettier/prettier
* Airbnb 代码风格指南：https://keqingrong.cn/blog/2020-05-04-code-style-guide-for-react/
* React 代码风格指南：https://www.robinwieruch.de/react-libraries/
* firebase：https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/
* auth0：https://auth0.com/
* Jest：https://jestjs.io/zh-Hans/
* immutable.js：https://immutable-js.com/
* immer：https://github.com/immerjs/immer
* formatjs：https://github.com/formatjs/formatjs
* react-i18next：https://github.com/i18next/react-i18next
* draft：https://draftjs.org/
* react-quill：https://github.com/zenoamaro/react-quill
* date-fns：https://github.com/date-fns/date-fns
* Day.js：https://github.com/iamkun/dayjs
* Electron：https://www.electronjs.org/
* tauri：https://github.com/tauri-apps/tauri
* nwjs：https://nwjs.io/
* RN：https://reactnative.dev/
* sketch：https://www.sketch.com/
* figma：https://www.figma.com/
* zeplin：https://zeplin.io/
* storybook：https://storybook.js.org/
* webpack： https://webpack.js.org/
* babel：https://babeljs.io/

### 项目实践
#### 微应用：
如qiankun：基于 single-spa 的微前端实现库，旨在帮助大家能更简单、无痛的构建一个生产可用微前端架构系统；

#### 前端异常监控系统：
* 收集错误；
* 上报错误；
* 代码上线打包将sourcemap文件上传至错误监控服务器；
* 发生错误时监控服务器接收错误并记录到日志中；
* 根据sourcemap和错误日志内容进行错误分析；
  
#### low code：
提供可视化的设计工具，来快速搭建界面、设计数据模型、创建业务逻辑和工作流；

#### 跨端开发：
一端开发，多端（H5小程序。native）共享，如Taro，Rax等；

#### 围绕工程方向主要包括：
* 基础建设
* 组件物料
* 框架设计
* 跨端跨栈
* 监控体系
* 微前端
* 性能提升
* 小程序
* DevOps
* 数据可视化
* 在线文档
* Serverless
* Node实战
* 安全质量等......
  
## 三.React经典面试问答
### (1) 对React-Fiber的理解，它解决了什么问题？
React V15 在渲染时，会递归比对 VirtualDOM 树，找出需要变动的节点，然后同步更新它们， 一气呵成。这个过程期间， React 会占据浏览器资源，这会导致用户触发的事件得不到响应，并且会导致掉帧，导致用户感觉到卡顿。

为了给用户制造一种应用很快的“假象”，不能让一个任务长期霸占着资源。 可以将浏览器的渲染、布局、绘制、资源加载(例如 HTML 解析)、事件响应、脚本执行视作操作系统的“进程”，需要通过某些调度策略合理地分配 CPU 资源，从而提高浏览器的用户响应速率, 同时兼顾任务执行效率。 

所以 React 通过Fiber 架构，让这个执行过程变成可被中断。“适时”地让出 CPU 执行权，除了可以让浏览器及时地响应用户的交互，还有其他好处: 
* 分批延时对DOM进行操作，避免一次性操作大量 DOM 节点，可以得到更好的用户体验； 
* 给浏览器一点喘息的机会，它会对代码进行编译优化（JIT）及进行热代码优化，或者对 reflow 进行修正。 

核心思想：Fiber 也称协程或者纤程。它和线程并不一样，协程本身是没有并发或者并行能力的（需要配合线程），它只是一种控制流程的让出机制。让出 CPU 的执行权，让 CPU 能在这段时间执行其他的操作。渲染的过程可以被中断，可以将控制权交回浏览器，让位给高优先级的任务，浏览器空闲后再恢复渲染。

### (2) React.Component 和 React.PureComponent 的区别
`PureComponent`表示一个纯组件，可以用来优化React程序，减少render函数执行的次数，从而提高组件的性能。 

在React中，当prop或者state发生变化时，可以通过在`shouldComponentUpdate`生命周期函数中执行return false来阻止页面的更新，从而减少不必要的render执行。React.PureComponent会自动执行 shouldComponentUpdate。 

不过，pureComponent中的 shouldComponentUpdate() 进行的是浅比较，也就是说如果是引用数据类型的数据，只会比较是不是同一个地址，而不会比较这个地址里面的数据是否一致。浅比较会忽略属性和或状态突变情况，其实也就是数据引用指针没有变化，而数据发生改变的时候render是不会执行的。如果需要重新渲染那么就需要重新开辟空间引用数据。PureComponent一般会用在一些纯展示组件上。 

使用pureComponent的好处：当组件更新时，如果组件的props或者state都没有改变，render函数就不会触发。省去虚拟DOM的生成和对比过程，达到提升性能的目的。这是因为react自动做了一层浅比较。

### (3) 对有状态组件和无状态组件的理解及使用场景
:::tip 有状态组件
特点：
1. 主要用来定义交互逻辑和业务数据，使用{this.state.xxx}的表达式把业务数据挂载到容器组件的实例上；
2. 可以使用react的生命周期；
3. 使用较多，容易频繁触发生命周期钩子函数，影响性能；
4. 内部使用 state，维护自身状态的变化，有状态组件根据外部组件传入的 props 和自身的 state进行渲染；

使用场景：
1. 需要使用到状态的；
2. 需要使用状态操作组件的（无状态组件的也可以实现新版本react hooks也可实现）；
:::
::: tip 无状态组件
​
特点：
1. 无状态组件主要用来定义模板，接收来自父组件props传递过来的数据；
2. 使用{props.xxx}的表达式把props塞到模板里面；
3. 无状态组件应该保持模板的纯粹性，以便于组件复用。

使用场景：
1. 组件不需要管理 state，纯展示；

优点：
1. 简化代码、专注于 render；
2. 组件不需要被实例化，无生命周期，提升性能。 输出（渲染）只取决于输入（属性），无副作用；
3. 视图和数据的解耦分离；

缺点：
1. 无法使用 ref ；
2. 无生命周期方法；
3. 无法控制组件的重渲染，因为无法使用shouldComponentUpdate 方法，当组件接受到新的属性时则会重渲染；
:::

## 四.React实战：从0~1实现Fiber
### .1 背景
1. React支持JSX语法，我们可以直接将HTML代码写到JS中间，然后渲染到页面上，我们写的HTML如果有更新的话，React还有虚拟DOM的对比，只更新变化的部分，而不重新渲染整个页面，大大提高渲染效率；
2. 到了V16.x，React更是使用了一个被称为Fiber的架构，提升了用户体验，同时还引入了hooks等特性。接下来从JSX入手，手写简单的React，了解其中原理；
### .2 JSX和CreateElement
我们知道，在实现React要支持JSX还需要一个库叫JSXTransformer.js，后来JSX的转换工作都集成到了babel里面了，babel还提供了在线预览的功能，可以看到转换后的效果：
```jsx
const App=(
    <div>
        <h1 id="title">Title</h1>
        <a href="xxx">Jump</a>
        <section>
            <p>Article</p>
        </section>
    </div>
);
```
转换后：​
```js
"use strict";

const App = /*#__PURE__*/React.createElement("div", null, 
    /*#__PURE__*/React.createElement("h1", { id: "title" }, "Title"), 
    /*#__PURE__*/React.createElement("a", { href: "xxx" }, "Jump"), 
    /*#__PURE__*/React.createElement("section", null, 
        /*#__PURE__*/React.createElement("p", null, "Article")
    )
);
```
所以从转换后的代码，可以看到React.createElement支持一下以下几个参数：
1. type，也就是节点类型；
2. config, 这是节点上的属性，比如id和href；
3. children, 从第三个参数开始就全部是children也就是子元素了，子元素可以有多个，类型可以是简单的文本，也可以还是React.createElement，如果是React.createElement，其实就是子节点了，子节点下面还可以有子节点。这样就用React.createElement的嵌套关系实现了HTML节点的树形结构；

一个正常的React应用，最基础的除了createElement外，还有ReactDom.render，像下面：
```jsx
import React from 'react;
import ReactDOM from 'react-dom';
const App=(<div>同上</div>);
ReactDOM.render(App, document.getElementById('root'));
```
接下来，实现简单的React；
### .3 手写CreateElement
对于`<h1 id="title">Title</h1>`这样一个简单的节点，原生DOM也会附加一大堆属性和方法在上面，所以我们在createElement的时候最好能将它转换为一种比较简单的数据结构，只包含我们需要的元素：
```jsonc
{
    "type": "h1",
    "props": {
        "id": "title",
        "children": "Title"
    }
}
```
有了这个数据结构后，我们对于DOM的操作其实可以转化为对这个数据结构的操作，新老DOM的对比其实也可以转化为这个数据结构的对比，这样我们就不需要每次操作都去渲染页面，而是等到需要渲染的时候才将这个数据结构渲染到页面上。这其实就是虚拟DOM！而我们createElement就是负责来构建这个虚拟DOM的方法：
```js
function createElement(type,props,...children){
    // 核心逻辑不复杂，将参数都塞到一个对象上返回就行
    // children也要放到props里面去,这样我们在组件里面就能
    // 通过this.props.children拿到子元素
    return {
        type,
        props: {
            ...props,
            children
        }
    }
}
```
源码要比上述复杂的多，有兴趣可以看：[react/src/ReactElement.js#L348](https://github.com/facebook/react/blob/60016c448bb7d19fc989acd05dda5aca2e124381/packages/react/src/ReactElement.js#L348)
### .4 手写Render
我们用createElement将JSX代码转换成了虚拟DOM，那真正将它渲染到页面的函数是render，所以我们还需要实现下这个方法，通过我们一般的用法

`ReactDOM.render( <App />,document.getElementById('root'))`：
1. 根组件，其实是一个JSX组件，也就是一个createElement返回的虚拟DOM；
2. 父节点，也就是我们要将这个虚拟DOM渲染的位置；
有了这两个参数，我们来实现下render方法：
```js
function render(vDom, container){
    let dom;
    // 检查当前节点是文本还是对象
    if(typeof vDom !== 'object') {
        dom=document.createTextNode(vDom);
    }else{
        dom=document.createElement(vDom.type);
    }
    // 将vDom上除了Children外的属性都挂载到真正的DOM上去
    if(vDom.props){
        Object.keys(vDom.props)
        .filter(key=>key!=='children')
        .forEach(item=>{
            dom[item]=vDom.props[item];
        });
    }
    // 如果还有子元素，递归调用
    if(vDom.props && vDom.props.children && vDom.props.children.length){
        vDom.props.children.forEach(child=>render(child,dom));
    }
    container.appendChild(dom);
}
```
源码地址：[react-dom/src/client/ReactDOMLegacy.js#L287](https://github.com/facebook/react/blob/3e94bce765d355d74f6a60feb4addb6d196e3482/packages/react-dom/src/client/ReactDOMLegacy.js#L287)
### .5 为什么需要Fiber
1. 上述简单的实现了虚拟DOM渲染到页面上的代码，这部分工作被React官方称为renderer；
2. renderer是第三方可以自己实现的一个模块，还有个核心模块叫做reconciler，reconciler的一大功能就是大家熟知的diff，他会计算出应该更新哪些页面节点，然后将需要更新的节点虚拟DOM传递给renderer，renderer负责将这些节点渲染到页面上；
3. 虽然React的diff算法是经过优化的，但是他却是同步的，renderer负责操作DOM的appendChild等API也是同步的，也就是说如果有大量节点需要更新，JS线程的运行时间可能会比较长，在这段时间浏览器是不会响应其他事件的，因为JS线程和GUI线程是互斥的，JS运行时页面就不会响应，这个时间太长了，用户就可能看到卡顿，特别是动画的卡顿会很明显。在React的官方演讲中有个例子，可以很明显的看到这种同步计算造成的卡顿：

![STACk EXAMPLE](https://cdn.nlark.com/yuque/0/2022/gif/2340337/1660921222333-17acd1a4-8bc1-4283-8d17-eff34d7c2e3d.gif)

而Fiber就是用来解决这个问题的，Fiber可以将长时间的同步任务拆分成多个小任务，从而让浏览器能够抽身去响应其他事件，等他空了再回来继续计算，这样整个计算流程就显得平滑很多。下面是使用Fiber后的效果：

![FIBER EXAMPLE](https://cdn.nlark.com/yuque/0/2022/gif/2340337/1660921253310-f2d530ef-f467-42a8-afa0-e1201a444156.gif)



现在的问题：
1. 上面我们自己实现的render方法直接递归遍历了整个vDom树，如果我们在中途某一步停下来，下次再调用时其实并不知道上次在哪里停下来的，不知道从哪里开始，所以vDom的树形结构并不满足中途暂停，下次继续的需求，需要改造数据结构；
2. 拆分下来的小任务什么时候执行？我们的目的是让用户有更流畅的体验，所以我们最好不要阻塞高优先级的任务，比如用户输入，动画之类，等他们执行完了我们再计算。那我怎么知道现在有没有高优先级任务，浏览器是不是空闲呢？

总结下来，`Fiber`要想达到目的，需要解决两个问题：
1. 新的任务调度，有高优先级任务的时候将浏览器让出来，等浏览器空了再继续执行；
2. 新的数据结构，可以随时中断，下次进来可以接着执行；
### .6 requestIdleCallback
`requestIdleCallback`是一个实验中的新API，这个API调用方式如下:
[caniuse](https://caniuse.com/?search=requestIdleCallback)查看适配程度
```js
// 开启调用  [,options]
var handle=window.requestIdleCallback(callback,options);
// 结束调用
window.cancelIdleCallback(handle);
```
1. `requestIdleCallback`接收一个回调，这个回调会在浏览器空闲时调用，每次调用会传入一个IdleDeadline，可以拿到当前还空余多久，options可以传入参数最多等多久，等到了时间浏览器还不空就强制执行了，使用这个API可以解决任务调度的问题，让浏览器在空闲时才计算diff并渲染；
2. 但是这个API还在实验中，兼容性不好，所以React官方自己实现了一套(SchedulerHostConfig)。（基于时间原因，本文会继续使用requestIdleCallback来进行任务调度）我们进行任务调度的思想是将任务拆分成多个小任务，requestIdleCallback里面不断的把小任务拿出来执行，当所有任务都执行完或者超时了就结束本次执行，同时要注册下次执行，代码架子就是这样：
```js
function workLoop(deadline){
    while(nextUnitOfWork && deadline.timeRemaining() >1){
        // 这个while循环会在任务执行完成或者时间到了的时候结束
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    }
    // 如果任务还没完，但是时间到了，我们需要继续注册requestIdleCallback
    requestIdleCallback(workLoop);
}

// 用来执行任务，参数是当前fiber任务，返回下一个任务
function performUnitOfWork(fiber) {
    //...
}
// 使用requestIdleCallback开启workLoop
requestIdleCallback(workLoop);
```
源码地址：[react-reconciler/src/ReactFiberWorkLoop.new.js#L1481](https://github.com/facebook/react/blob/4c7036e807fa18a3e21a5182983c7c0f05c5936e/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L1481)
### .7 Fiber的可中断数据结构
接下来实现performUnitOfWork，从上面的结构可以看出来，他接收的参数是一个小任务，同时通过这个小任务还可以找到他的下一个小任务，Fiber构建的就是这样一个数据结构。
Fiber的数据结构是一棵树，包含3部分
1. child: 父节点指向第一个子元素的指针；
2. sibling：从第一个子元素往后，指向下一个兄弟元素；
3. return：所有子元素都有的指向父元素的指针；
![HostRoot](https://cdn.nlark.com/yuque/0/2022/png/2340337/1660922071884-3b71ef81-fe21-4bc9-aa01-4f92cfdc0154.png?x-oss-process=image%2Fresize%2Cw_826%2Climit_0)


有了这几个指针后，我们可以在任意一个元素中断遍历并恢复，比如在上图List处中断了，恢复的时候可以通过child找到他的子元素，也可以通过return找到他的父元素，如果他还有兄弟节点也可以用sibling找到。Fiber这个结构外形看着还是棵树，但是没有了指向所有子元素的指针，父节点只指向第一个子节点，然后子节点有指向其他子节点的指针，这其实是个**链表**。
### .8 实现Fiber
1. 将之前的vDom结构转换为Fiber的数据结构，同时需要能够通过其中任意一个节点返回下一个节点，其实就是遍历这个链表；
2. 遍历的时候从根节点出发，先找子元素，如果子元素存在，直接返回，如果没有子元素了就找兄弟元素，找完所有的兄弟元素后再返回父元素，然后再找这个父元素的兄弟元素。整个遍历过程其实是个深度优先遍历（DFS），从上到下，然后最后一行开始从左到右遍历；
3. 比如下图从div1开始遍历的话，遍历的顺序就应该是div1 -> div2 -> h1 -> a -> div2 -> p -> div1。可以看到这个序列中，当我们return父节点时，这些父节点会被第二次遍历，所以我们写代码时，return的父节点不会作为下一个任务返回，只有sibling和child才会作为下一个任务返回；
![traverse](https://cdn.nlark.com/yuque/0/2022/png/2340337/1660922284432-c42496f7-6ccd-441b-b0ea-6daddf5bfb4e.png)

```js
// 用来执行任务，参数是当前的fiber任务，返回下一个任务
function performUnitOfWork(fiber){
    // 根节点dom就是container 如果没有这个属性 说明当前fiber不是根节点
    if(!fiber.dom){
        fiber.dom = createDom(fiber);// 创建一个DOM挂载上去
    }
    // 如果有父节点，将当前节点挂载到父节点上
    if(fiber.return){
        fiber.return.dom.appendChild(fiber.dom);
    }
    // 将我们前面的vDom结构转换为fiber结构 
    const elements=fiber.children;
    let prebSibling= null;
    if(elements && elements.length){
        for(let i=0;i<elements.length;i++){
            const element=elements[i];
            const newFiber={
                type:   element.type,
                props: element.props,
                return: fiber,
                dom: null
            }
            // 父级的child指向第一个子元素
            if(i===0){
                fiber.child=newFiber;
            }else{
                // 每个子元素拥有指向下一个子元素的指针
                prevSibling.sibling=newFiber;
            }
            prevSibling=newFiber;
        }
    }

    // 这个函数的返回值是下一个任务，其实就是一个DFS
    // 先找子元素，没有就找兄弟元素
    // 兄弟元素也没有了就返回父级
    // 然后再找这个父元素的兄弟元素
    // 最后到根节点结束
    // 这个遍历的顺序其实就是从上到下，从左到右
    if(fiber.child){
        return  fiber.child
    }
    let nextFiber=fiber;
    while(nextFiber){
        if(nextFiber.sibling){
            return nextFiber.sibling
        }
        nextFiber=nextFiber.return;
    }
}
```
### .9 统一commit DOM操作
`performUnitOfWork`一边构建Fiber结构一边操作`DOMappendChild`，这样如果某次更新好几个节点，操作了第一个节点之后就中断了，那我们可能只看到第一个节点渲染到了页面，后续几个节点等浏览器空了才陆续渲染。为了避免这种情况，我们应该将DOM操作都搜集起来，最后统一执行，这就是commit。为了能够记录位置，我们还需要一个全局变量workInProgressRoot来记录根节点，然后在workLoop检测如果任务执行完了，就commit，
```js
let workInProgressRoot =null; // 指向Fiber的根节点

function workLoop(deadline) {
    while(nextUnitOfWork && deadline.timeRemaining()>1){
        // ...参考上面
    }
    // 任务做完后统一渲染
    if(!nextUnitOfWork&& workInProgressRoot){
        commitRoot();
    }
    requestIdleCallback(workLoop);
}
```
因为我们是在Fiber树完全构建后再执行的commit，而且有一个变量workInProgressRoot指向了Fiber的根节点，所以我们可以直接把workInProgressRoot拿过来递归渲染就行了：
```js
// 统一操作DOM
function commitRoot(){
    commitRootImpl(workInProgressRoot.child); // 开始递归
    workInProgressRoot=null; // 操作完成后 重置Fiber根节点
}
function commitRootImpl(fiber){
    if(!fiber) return;
    const parentDom=fiber.return.dom;
    parentDom.appendChild(fiber.dom);
    // 递归操作子元素和兄弟元素 
    commitRootImpl(fiber.child);
    commitRootImpl(fiber.sibling);
}
```
### .10 reconcile
reconcile其实就是虚拟DOM树的diff操作：
* 删除不需要的节点；
* 更新修改过的节点；
* 添加新的节点；

为了在中断后能回到工作位置，我们还需要一个变量currentRoot，然后在fiber节点里面添加一个属性alternate，这个属性指向上一次运行的根节点，也就是currentRoot。currentRoot会在第一次render后的commit阶段赋值，也就是每次计算完后都会把当次状态记录在alternate上，后面更新了就可以把alternate拿出来跟新的状态做diff。然后performUnitOfWork里面需要添加调和子元素的代码，可以新增一个函数reconcileChildren。这个函数要将老节点跟新节点拿来对比，对比逻辑如下:
1. 如果新老节点类型一样，复用老节点DOM，更新props；
2. 如果类型不一样，而且新的节点存在，创建新节点替换老节点；
3. 如果类型不一样，没有新节点，有老节点，删除老节点；
注意删除老节点的操作是直接将oldFiber加上一个删除标记就行，同时用一个全局变量deletions记录所有需要删除的节点：
```js
// 对比oldFiber和当前的element;
const sameType=oldFiber && element && oldFiber.type === element.type;// 检查类型是不是一样
// 先比较元素类型
if(sameType){
    // 如果类型一样，复用节点，更新props
    newFiber={
        type: oldFiber.type,
        props: element.props,
        dom: oldFiber.dom,
        return: workInProgressFiber,
        alternate: 'oldFiber', // 记录上次状态
        effectTag: 'UPDATE' // 添加一个操作标记
    }
} else if (!sameType && element){
    // 如果类型不一样 有新的节点 创建新节点替换老节点
    newFiber={
        type: element.type,
        props: element.props,
        dom: null, // 构建fiber时没有dom，下次perform才创建dom
        return: workInProgressFiber,
        alternate: null, // 新增的没有老状态
        effectTag: 'REPLACEMENT' // 添加一个操作标记
    }
}else if(!sameType&& oldFiber){
    // 如果类型不一样,没有新节点只有老节点，删除老节点
    oldFiber.effectTag ='DELETION' // 添加删除标记
    deletions.push(oldFiber); // 一个数组收集所有需要删除的节点
}
```
然后就是在commit阶段处理真正的DOM操作，具体的操作是根据我们的effectTag来判断的:
```js
function commitRootImpl(fiber){
    if(!fiber) return;
    const parentDom=fiber.return.dom;
    if(fiber.effectTag==='REPLACEMENT' && fiber.dom){
        parentDom.appendChild(fiber.dom);
    }else if(fiber.effectTag==='DELETION'){
        parentDom.removeChild(fiber.dom);
    }else if(fiber.effectTag==='UPDATE' && fiber.dom){
        // 更新DOM属性
        udpateDom(fiber.dom,fiber.alternate.props,fiber.props);
    }
    // 递归操作子元素和兄弟元素 
    // ...
}
```
替换和删除的DOM操作都比较简单，更新属性的会稍微麻烦点，我们用一个辅助函数updateDom来实现：
```js
// 更新DOM的操作
function updateDom(dom,prevProps,nextProps){
    // 1. 过滤children属性
    // 2. 老的存在 新的没了 取消
    // 3. 新的存在 老的没了 新增
    Object.keys(prevProps)
    .filter(name=>name!=='children')
    .filter(name=>!(name in nextProps))
    .forEach(name=>{
        if(name.indexOf('on')===0){
            dom.removeEventListener(name.subStr(2).toLowerCase(),
            prevProps[name],false);
        }else{
            dom[name]='';
        }
    });

    Object.keys(nextProps)
    .filter(name=>name!=='children')
    .forEach(name=>{
       if(name.indexOf('on')===0){
            dom.addEventListener(name.subStr(2).toLowerCase(),
            prevProps[name],false);
        }else{
            dom[name]=nextProps[name];
        }
    });
}
```
### .11 函数组件
函数组件是React里面很常见的一种组件，我们前面的React架构其实已经写好了，我们这里来支持下函数组件。我们之前的fiber节点上的type都是DOM节点的类型，比如h1什么的，但是函数组件的节点type其实就是一个函数了，我们需要对这种节点进行单独处理。
```js
// performUnitOfWork里面 检测函数组件
function performUnitOfWork(fiber){
    const isFunctionComponent = fiber.type instanceof Function;
    if(isFunctionComponent){
        updateFunctionComponent(fiber);
    }else{
        updateHostComponent(fiber);
    }

    // ...同上
}
function udpateFunctionComponent(fiber){
    // 函数组件的type就是个函数，直接拿来执行可以获取DOM元素
    const children=[fiber.type(fiber.props)];
    reconcileChildren(fiber,children);
}
// updateHostComponent 就是之前的操作，只是单独抽取了一个方法
function updateHostComponent(fiber){
    if(!fiber.dom){
        fiber.dom = createDom(fiber);
    }
    const elements=fiber.props.children;
    // 调和子元素
    reconcileChildren(fiber,elements);
}
```
然后在我们提交DOM操作的时候因为函数组件没有DOM元素，所以需要注意两点：
1获取父级DOM元素的时候需要递归网上找真正的DOM；
2删除节点的时候需要递归往下找真正的节点；
我们来修改下commitRootImpl：
```js
function commitRootImpl(){
    // const parent=fiber.return.dom;
    // 向上找真正的DOM
    let parent=fiber.return;
    while(!parentFiber.dom){
        parentFiber=parentFiber.return;
    }
    const parentDom=parentFiber.dom;
    // ...这里同上

    if(fiber.effectTag==='DELETION'){
        commitDeletion(fiber,parentDom);
    }
}

function commitDeletion(fiber,domParent){
    if(fiber.dom){
        // dom存在，是普通节点
        domParent.removeChild(fiber.dom);
    }else{
        // dom不存在，是函数组件，向下递归查找真实DOM
        commitDeletion(fiber.child,domParent);
    }
}
```
接下来就可以传入函数组件了
### .12 实现useState
useState是React Hooks里面的一个API，相当于之前Class Component里面的state，用来管理组件内部状态；
一般使用用法：
```js
    const [count,setCount]=useState(1);
    const onClickHandler=()=>setCount(count+1);
```
useState接收一个初始值，返回一个数组，里面有这个state的当前值和改变state的方法。
```js
let state=null;
function useState(init){
    state=state===null?state:init;
    // 修改state的方法
    const setState=(value)=>{
        state=value;
        // 只要修改了state 就需要重新处理节点
        workInProgressRoot={
            dom: currentRoot.dom,
            props: currentRoot.props,
            alternate: currentRoot
        }
        // 修改nextUnitOfWork指向workInProgressRoot
        // 这样下次就会处理这节点了
        nextUnitOfWork=workInProgressRoot;
        deletions=[];
    }
    return [state,setState];
}
```
### .13 支持多个state
上面的代码只有一个state变量，如果我们有多个useState怎么办呢？为了能支持多个useState，我们的state就不能是一个简单的值了，我们可以考虑把他改成一个数组，多个useState按照调用顺序放进这个数组里面，访问的时候通过下标来访问：
```js
let state=[];
let hookIndex=0;
function useState(init){
    const currentIndex=hookIndex;
    state[currentIndex] // ...
}
```
### .14 支持多个组件
上面代码虽然支持了多个useState，但是仍然只有一套全局变量，如果有多个函数组件，每个组件都来操作这个全局变量，那相互之间不就是污染了数据了吗？所以我们数据还不能都存在全局变量上面，而是应该存在每个fiber节点上，处理这个节点的时候再将状态放到全局变量用来通讯：
```js
// 申明两个全局变量，用来处理useState
// wipFiber是当前的函数组件fiber节点
// hookIndex是当前函数组件内部useState状态计数
let wipFiber=null;
let hookIndex=null;
```
因为useState只在函数组件里面可以用，所以我们之前的updateFunctionComponent里面需要初始化处理useState变量：
```js
function updateFunctionComponent(fiber){
    // 支持useState，初始化变量
    wipFiber=fiber;
    hookIndex=0;
    wipFiber.hooks=[]; // hooks用来存储具体的state序列
    // ....
}
```

因为hooks队列放到fiber节点上去了，所以我们在useState取之前的值时需要从fiber.alternate上取
```js
function useState(init){
    // 取出上次的Hook
    const oldHook=wipFiber.alternate && wipFiber.alternate.hooks
    && wipFiber.alternate.hooks[hookIndex];
    // hook数据结构
    const hook={
        state: oldHook? oldHook.state: init //state是每个具体的值
    };
    // 将所有useState调用按照顺序存到fiber节点上
    wipFiber.hooks.push(hook);
    hookIndex++;
    // 修改state的方法
    const setState=(value)=>{
        hook.state=value;
        // ...同上
    }
    return [hook.state,setState];
}
```
### .15 模拟Class组件
通过前面实现的Hooks来模拟实现Class组件，我们可以写一个方法将Class组件转化为前面的函数组件：
```js
function transfer(Component){
    return function(props){
        const component= new Component(props);
        let [state,setState]=useState(component.state);
        component.props=props;
        component.state=state;
        component.setState=setState;
        return component.render();
    }
}
```
然后就可以写Class了~
​

## 五.总结
1. 我们写的JSX代码被babel转化成了`React.createElement`；
2. `React.createElement`返回的其实就是虚拟DOM结构；
3. `ReactDOM.render`方法是将虚拟DOM渲染到页面的；
4. 虚拟DOM的调和和渲染可以简单粗暴的递归，但是这个过程是同步的，如果需要处理的节点过多，可能会阻塞用户输入和动画播放，造成卡顿；
5. Fiber是16.8x引入的新特性，用处是将同步的调和变成异步的；
6. Fiber改造了虚拟DOM的结构，具有这几个指针:
   1. [父 -> 第一个子]=child，
   2. [子 -> 兄]=sibling，
   3. [子 -> 父]=return
> 有了这几个指针，可以从任意一个Fiber节点找到其他节点；
7. Fiber将整棵树的同步任务拆分成了每个节点可以单独执行的异步执行结构；
8. Fiber可以从任意一个节点开始遍历，遍历是**深度优先遍历**，顺序是父 -> 子 -> 兄 -> 父，也就是**从上往下，从左往右**；
9.  Fiber的调和阶段可以是异步的小任务，但是提交阶段(commit)必须是同步的。因为异步的commit可能让用户看到节点一个一个接连出现，体验不好；
10. 函数组件其实就是这个节点的type是个函数，直接将type拿来运行就可以得到虚拟DOM；
11. useState是在Fiber节点上添加了一个数组，数组里面的每个值对应了一个useState；

### 杂项
[awesome-react系列](https://github.com/enaqx/awesome-react)