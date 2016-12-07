# What is webpack?
> webpack = web + package, 将web的资源进行一次打包.


## Install

```
npm install -g webpack
```

## Usage
- [命令行打包](https://webpack.github.io/docs/cli.html)
- [配置文件](https://webpack.github.io/docs/configuration.html)
- [API接口](https://webpack.github.io/docs/node.js-api.html)


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

**官网实例**

![官网实例](https://dtinth.github.io/webpack-docs-images/usage/how-it-works.png)



### 配置文件模式

webpack.config.js

```javascript
module.exports = {
  entry: './app.js',
  output: {
    filename: '[name].bundle.js'
  }
}
```



## example

- simple 