# webpack2
> 现代js应用程序模块打包工具， webpack主要分4大概念。
- entry 入口文件
- output 输出文件
- loaders 加载器
- plugins 插件


## entry
**单入口**
```javascript
 module.exports = {
  entry: './src/main.js'
 }
```
**相当于 => **
```javascript
module.exports = {
 entry: {
  main: './src/main.js'
 }
}
```

**分离app与公共模块**
```javascript
module.exports = {
 entry: {
  main: './src/main.js',
  vendors: './src/vendors.js'
 }
}
```

**多入口**
```javascript
module.exports = {
 entry: {
  pageOne: './src/pageOne/index.js',
  pageTwo: './src/pageTwo/index.js',
  pageThree: './src/pageThree/index.js'
 }
}
```

