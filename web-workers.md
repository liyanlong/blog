# Web Workers
> 可以在浏览器后台运行的js，浏览器线程，和浏览器后台线程, 线程孤立于window作用域, 对象数据需要通过 postMessage 进行传递处理, 对象



## **浏览器特性**

```
if (window.Worker) {
    // 支持 Worker
}
```
## 通信方式

```javascript
`index.html`
// 启动一个线程 运行`${location.pathname}/hello.js`
var w = new Worker('hello.js');

// window 发送data 给 hello.js
w.postMessage({
    msg: 'hello world'
}); 

// 接受线程调用的postMessage(data);
w.onmessage = function (event) {
    document.body.innerHTML = event.data;
}
```

```javascript
`hello.js`

// DedicatedWorkerGlobalScope 对象
console.log(this);

// 当 worker.postMessage(data); 有用
// 调用 onmmesage 函数
var onmessage = function (event) {

    // event instanceof MessageEvent
    var data = event.data;
    if (data.msg) {
        postMessage('worker.onmessage:' + data.msg);
    }
};

```
结果
```html
<body>
worker.onmessage
</body>
```
## Worker API

### worker.postMessage(data);
推送数据信息给 worker控制的线程

## worker.onmessage = function (event) {};
收到worker控制线程推送的data出发onmessage事件

## worker.onerror = function (event) {};
线程内抛出异常，并且未捕获触发onerror事件

## worker.terminate();
中断线程运行

## webwork 和 dom
由于 web worker 位于外部文件中，它们无法访问下例 JavaScript 对象
- window 对象
- document 对象
- parent 对象

错误的例子:

```javascript
var a = new Worker('demo.js');

// Uncaught DOMException
a.postMessage({
    window: window,
    document: document
});
```


