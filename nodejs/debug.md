# Node Debug

## VsCode
- 使用 **attach** 模式
- 使用 **launch** 模式

### **attach** 模式

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
实际上 launch 模式相当于 attach模式, 只不过默认指定了port
```
node --debug-brk=3888 --nolazy app.js 
Debugger listening on [::]:3888
```