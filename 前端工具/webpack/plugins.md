# 插件

## CommonsChunkPlugin 
> 公共js模块提取插件

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
注意： 上述情况 可能会发生 `main`, `docs` 两个入口的共同依赖的其它文件(非 jquery, underscore) 未被抽取出来.


### `Move common modules into the parent chunk`
> 在某些情况下, 使用 code split 的一些小模块会有许多公共的模块,并且没有单独抽取出来,这时候使用 `chidren: true` 可以把 这些小模块的公共模块提取出来.


```javascript
new webpack.optimize.CommonsChunkPlugin({
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

```javascript
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
