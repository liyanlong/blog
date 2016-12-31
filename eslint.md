# ESlint 


> ESlint 诞生日 2013.6月

## 出现原因
- JavaScript是动态的、松散型的语言，是特别容易受到开发人员的错误
- ESlint出现是为了给使用者自定义JS规范
- ESLint设计有规则完全可插拔

## 自身优势
- 随时可插拔
- Rule 规则

## Rules

| Rule             | 描述                    |
| ---------------- |------------------------|
| no-await-in-loop | 禁止在循环内使用await     |
| no-cond-assign   | 禁止在 = 赋值时直接判断    |
| no-console       | 禁止使用console          | 


## Config

- JS文件内部
- 配置package.json
- 配置.eslintrc.*
- command line

### Config 级联配置
```yaml
- project
  - pacakage.json
  - .eslintrc.js
  - test
     - .eslintrc.js
     - test.js     
  - lib
     - index.js
```
1. 检查 `test/test.js`, 先读取test目录下的.eslintrc文件, 如果配置没找到再向上找一级，找到`.eslintrc.js`

### Config.parserOptions

```javascript
{
    ...,
    "parserOptions": {
        
        // ES6 标准
        "ecmaVersion": 6,
        
        // 源文件type module or script
        "sourceType": "module",
        "ecmaFeatures": {
            
            // 允许全局范围返回变量
            "globalReturn": true,
            
            // 全局严格模式
            "impliedStrict": true,
            "jsx": true
        }
    },
    ...
}
```

### Config.parse

``` javascript
{
    /*
     * 解释器插件 默认 Espree
     * 要求：
     * 1. npm本地装解释器
     * 2. 实现 Esprima-compatible interface, 对象返回 parse()方法
     * 3. 它必须产生Esprima兼容AST和令牌对象
     */
    "parse": "babel-eslint",
    ...
}
```

### Config.env
```javascript
{
    "env": {
        // 浏览器模式
        "browser": true
    }
}
```

### Config.root

```javascript
{
    // 当前项目为根目录
    // 阻止级联样式,向根目查询
    "root": true
}
```

### Config.global

```javascript
{
    // 全局变量名, 设置了全局变量jquery, 静止全局变量$
    "global": {
        "jquery": true,
        "$": false
    }
}

## 文件配置

```javascript

/* eslint eqeqeq: "off", curly: "error" */
/* eslint eqeqeq: "off", curly: 2 */
// 设置规则


/* eslint-disable */
// 所有规则停用检查
alert('foo');
/* eslint-enable */

/* eslint-disable no-alert, no-console */
// 局部规则停用检查
console.log('bar');
/* eslint-enable no-alert, no-console */

/* global var1:true, var2:false */
// 可以使用全局变量var1

// 作用于当行
alert('foo'); // eslint-disable-line
alert('foo'); // eslint-disable-line no-alert, quotes, semi


// 作用于下一行
// eslint-disable-next-line 
alert('foo');

// eslint-disable-next-line no-alert, quotes, semi
alert('foo');

```