# Node Debug

1. 在visual studio code 编辑器下使用

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
            "cwd": "${workspaceRoot}\\single-entry",
            "port": 5858
        }
    ]
}

```
