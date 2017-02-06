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