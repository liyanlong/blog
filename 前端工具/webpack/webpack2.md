# webpack2
> 现代js应用程序模块打包工具， webpack主要分4大概念。
- entry 入口文件
- output 输出文件
- loaders 加载器
- plugins 插件

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
### **options 可选**

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