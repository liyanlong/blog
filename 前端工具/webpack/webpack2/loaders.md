## loaders

examples:
```shell
# npm install --save-dev css-loader
@ npm install --save-dev ts-loader
```
**特性**
- 支持链式loader解释器，如：`style-loader!css-loader!less-loader`
- 支持同步和异步解释
- 运行在nodejs中
- 支持query parameter, 设置loader参数
- 支持plugins，给loader带来更多新特性
- 支持附加任何文件


** resovled loader**
在 `node_modules` 中能找到, 使用 `npm install`
如: `npm install json-loader`

