# vscode-chrome-debug
> https://github.com/Microsoft/vscode-chrome-debug

## examples
修改 `.vscode/launch.json `
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://localhost:3000/index.html",
      "webRoot": "${workspaceRoot}/public/",
      "runtimeExecutable": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      "userDataDir": "${workspaceRoot}/.temp"
    }
  ]
}
```

**type**
启动方式: `chrome`

**request** 
直接允许: `launch`

**name**
运行debug名称 `Launch Chrome against localhost`

**url**
浏览器打开地址: `http://localhost:3000/index.html`

**webRoot**
本地映射地址: `${workspaceRoot}/public/`

**runtimeExecutable**
启动脚本的具体地址: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`

**userDataDir**
当已经启动了chrome浏览器时需要, 另设置temp地址存储 `${workspaceRoot}/.temp`