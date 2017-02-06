# Node Debug

## VsCode
- 使用 **attach** 模式
- 使用 **launch** 模式

### **attach** 模式
> 更多关于vscode的 node debug 内容，[点击查看](https://code.visualstudio.com/docs/editor/node-debugging)


launch.json
```json
{

    "version": "0.2.0",
    "configurations": [
        {
            "name": "debug",
            "type": "node",
            "request": "attach",
            "runtimeExecutable": "npm",
            "windows": {
                "runtimeExecutable": "npm.cmd"
            },
            "runtimeArgs": [
                "run-script",
                "debug"
            ],
            "cwd": "${workspaceRoot}",
            "port": 5858
        }
    ]
}

```
package.json

```json
{
  "scripts": {
    "debug": "node --debug-brk=5858 index.js",
  }
}
```

```javascript
npm run debug
```

### launch模式 
> 更多关于vscode的 debug 内容，[点击查看](https://code.visualstudio.com/docs/editor/debugging)

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceRoot}/app.js",
            "cwd": "${workspaceRoot}"
        }
    ]
}
```
实际上**launch**模式相当于**attach**模式

```
node --debug-brk=3888 --nolazy app.js 
Debugger listening on [::]:3888
```

## node inspector
> Node Inspector is a debugger interface for Node.js applications that uses the Blink Developer Tools (formerly WebKit Web Inspector).

### 快速上手
```
npm install -g node-inspector
```
