# Web Workers
> 可以在浏览器后台运行的js，浏览器线程，和浏览器后台线程

## **浏览器特性**

```
if (window.Worker) {
    // 支持 Worker
}
```
## 通信

```javascript

// 启动一个线程 运行`${location.pathname}/xxx.js`
var w = new WebWork('xxx.js');

// window 发送data 给 xxx.js
w.postMessage({
    msg: 'hello world'
}); 
```

## webwork 和 dom
由于 web worker 位于外部文件中，它们无法访问下例 JavaScript 对象
- window 对象
- document 对象
- parent 对象


