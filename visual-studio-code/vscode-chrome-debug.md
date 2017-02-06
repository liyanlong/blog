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

**type** `chrome`

**request** `launch`

**name**
debug name
