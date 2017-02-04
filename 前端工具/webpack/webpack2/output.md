## output

```javascript
var path = require('path');
module.exports = {
entry: './path/to/my/entry/file.js',
output: {
path: path.resolve(__dirname, 'dist'),
filename: 'my-first-webpack.bundle.js'
}
};
```

**output.path**
输出目录， 要求为绝对目录
`[hash]` is replaced by the hash of the compilation.

```javascript
module.exports = {
    output: {
        path: "/home/proj/public/assets/[hash]",
        publicPath: "/assets/[hash]"
    }
}

```
可以自行在js中指定**__webpack_public_path__ **做为 publicPath



**output.filename**
输出文件名
- [name]
- [hash]
- [chunkhash]

单个入口文件
```javascript
module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    }
}
```
多个入口命名文件
```javascript
module.exports = {
    entry: {
        app: './src/app.js',
        search: './src/search.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: __dirname + '/build'
    }
}
```


**options 可选**

**output.chunkFilename**
针对无入口模块的文件取名,取名变量规则由下。 使用code split功能有效, path使用 `output.path`
- [id] is replaced by the id of the chunk.
- [name] is replaced by the name of the chunk (or with the id when the chunk has no name).
- [hash] is replaced by the hash of the compilation.
- [chunkhash] is replaced by the hash of the chunk.

**output.crossOriginLoading**
js脚本是否使用cors检查. 默认关闭
- `false` `default`
- `anonymous`
- `use-credentials`


**output.devtoolLineToLine**
sourcemap生成有用, 在每一行生成的源映射到原始来源相同的线. `true` enables it for all modules
> **Default:** `false`


**output.hotUpdateChunkFilename**
热更新chunk, 文件基于 `output.path`
`[id]` is replaced by the id of the chunk
`[hash]` is replaced by the hash of the compilation.
> **Default:** `[id].[hash].hot-update.js`

**output.hotUpdateFunction**
异步加载热更新模块的方法名
> **Default:** `webpackHotUpdate`

**output.hotUpdateMainFilename**
热更新主文件的文件名， 包括了更新的模块id
> **Default:** `[hash].hot-update.json`

**output.jsonpFunction**
异步加载chunk的回调函数名
> **Default:** `webpackJsonp`

**output.library**
导出library的 name, webpack可以很方便的开发类库, `output.library` 为指定的 name. 如果想要发布单个文件可以使用这个参数

**output.libraryTarget**
如果`output.library` 没有定义，但是 `output.libraryTarget` 定义非 `var`， 则所有export的对象将进行复制.(除`amd`, `commonjs2`， `umd`外)
- `var` 
- `this`
- `commonjs`
- `commonjs2`
- `amd`
- `umd`

> **Default:** `var`

`commonjs` vs `commonjs2`

```javascript
// commonjs
exports['foo'] = function foo() {
    // do something
};

exports['bar'] = function bar() {
    // do something
}

// commonjs2
module.exports = {
    foo: function () {
        // do something
    },
    bar: function () {
        // do something
    }
};
```


