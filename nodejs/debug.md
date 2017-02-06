# Node Debug

## VsCode
1. 在visual studio code 编辑器下使用 **attach** 模式

launch.json
```json
{

    "version": "0.2.0",
    "configurations": [
        {
            "name": "sigel-entry",
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
