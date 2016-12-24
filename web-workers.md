# Web Workers
> 可以在浏览器后台运行的js，浏览器线程，和浏览器后台线程

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
```

```javascript
`hello.js`

// DedicatedWorkerGlobalScope 对象
console.log(this);

// 当 worker.postMessage(data); 有用
// 调用 onmmesage 函数
var onmessage = function (event) {
    var data = event.data;
    if (data.msg) {
        alert(data.msg);
    }
};

```

## worker.postMessage(data)

## worker.onmessage = function (event) {};

## worker.onerror = function (callback) {};

## worker.terminate();
中断线程运行

## webwork 和 dom
由于 web worker 位于外部文件中，它们无法访问下例 JavaScript 对象
- window 对象
- document 对象
- parent 对象



