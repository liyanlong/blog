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
输出目录

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
sourcemap生成有用, 在每一行生成的源映射到原始来源相同的线
- `true` enables it for all modules
- **Default:** `false`