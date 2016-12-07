# What is webpack?
> webpack = web + package, 将web的资源进行一次打包.


## Install

```
npm install -g webpack
```

## Usage
- 命令行打包
- 配置文件
- API接口


### 命令行打包

lib.js
```
function foo () {
 return 'foo'
}

module.exports = {
  foo: foo
}
```

入口 app.js
```
var lib = require('./lib')
console.log(lib.foo());
```
命令

```
webpack  ./app.js app.bundle.js
```


## example

- Hello World