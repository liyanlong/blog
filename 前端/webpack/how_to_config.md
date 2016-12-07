# How To Config ?
> 如何去配置 webpack.config.js

## DEMO
```javascript
{
  context: __dirname + "/app",
  entry: "./entry",
  output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
  }
}
```


## 配置项

| name | description | type | default |
| -- | -- | -- | -- |
| `context` | 文件绝对路径 base path | string | process.cwd() |
| `entry` | 入口文件 | string &#124; array &#124; object | &nbsp;|
| `output` | 输出配置 | object | &nbsp; |
| `output.filename` | 输出文件名 | string | &nbsp; |
| `output.filename` | 输出文件名 | string | &nbsp; |
