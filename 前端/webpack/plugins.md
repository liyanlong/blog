# 插件

## CommonsChunkPlugin 
> 公共模块提取插件

### `提取入口共用的模块`

```javascript
{
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.min.js',
      minChunks: 1 // 重复被引用一次以上的模块都提取在 commons 入口 中
    })
  ]
}
```

### `提取指定模块`

```javascript
{
  entry: {
  main: './src/main.js',
  docs: './src/docs.js',
  vendor: ['jquery', 'underscore']
  },
  plugins: [
   new webpack.optimize.CommonsChunkPlugin({
     name: 'vendor',
     filename: 'vendor.min.js',
     minChunks: Infinity // 只提取 vendor 入口的 数组模块
   })
  ]
}
```

### `Move common modules into the parent chunk`

将代码分隔的子块引用的公共块提取出来

```
new CommonsChunkPlugin({
  // names: ["app", "subPageA"]
  // (choose the chunks, or omit for all chunks)

  children: true,
  // (select all children of chosen chunks)

  // minChunks: 3,
  // (3 children must share the module before it's moved)
})
```

### `Extra async commons chunk`

将代码分隔的子块引用的公共块提取出来, 并进行异步加载

```
new CommonsChunkPlugin({
  // names: ["app", "subPageA"]
  // (choose the chunks, or omit for all chunks)

  children: true,
  // (use all children of the chunk)

  async: true,
  // (create an async commons chunk)

  // minChunks: 3,
  // (3 children must share the module before it's separated)
})
```
