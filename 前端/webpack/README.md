# What is webpack?

- webpack2.0官网: https://webpack.github.io/docs/webpack.js.org
- webpack中文指南: http://webpackdoc.com/index.html


我的理解
> webpack = web source to package,  将web的资源进行打包, 

## Install

```
npm install -g webpack
```


## Usage
- [命令行打包](https://webpack.github.io/docs/cli.html)
- [配置文件](https://webpack.github.io/docs/configuration.html)
- [API接口](https://webpack.github.io/docs/node.js-api.html)


### `命令行打包`

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



### `配置文件模式`

webpack.config.js

```javascript
module.exports = {
  entry: './app.js',
  output: {
    filename: '[name].bundle.js'
  }
}
```

### `Nodejs API 模式`
build.js
```javascript
var webpack = require('webpack')
var webpackConfig = {
  context: path.join(__dirname, './'),
  entry: "./app.js",
  output: {
    path: path.join(__dirname ,"./dist"),
    filename: "bundle.js"
  }
}


webpack(webpackConfig, function (err, stats) {
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})

```

接下来 命令行下使用
```
node build.js
```

## 更多例子

- [webpack-examples](https://github.com/liyanlong/webpack-examples) 
- [webpack-demos](https://github.com/ruanyf/webpack-demos)