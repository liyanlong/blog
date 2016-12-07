# 加载器
> 默认情况下 webpack 无法加载 css, font，png 等资源. 但是通过加载器可以很好的支持所有web资源

## 基本配置
- `test`: A condition that must be met
- `exclude`: A condition that must not be met
- `include`: An array of paths or files where the imported files will be transformed by the loader
- `loader`: A string of “!” separated loaders
- `loaders`: An array of loaders as string

```javascript
{
  test: 'xxx' | /\.js$/,
  loader: 'babel-loader',
  include: './',
  exclude: /node_modules/,
}

```


## 常用的加载器
- css-loader
- style-loader
- url-loader
- babel-loader


### `css-loader`
> 加载css文件, 配合 style-loader 注入到web页面

**example**

```javascript
module.exports = {
  //...
  ,
  module: {
    loaders: [
      {
        test: /\.css/,
        // loader
        loader: 'style-loader!css-loader',
        loaders: ['style-loader', 'css-loader'],

      }
    ]
  } 
}
```

[** more **](https://github.com/webpack/css-loader)
