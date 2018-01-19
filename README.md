# kaitlyn-cli 

[![Build Status](https://travis-ci.org/likai757/kaitlyn-cli.svg?branch=master)](https://travis-ci.org/likai757/kaitlyn-cli.svg?branch=master)

通过`copy`命令行工具将当前项目动态安装到，指定项目的`node_modules`目录下。

## Install
```bash
npm i -g kaitlyn-cli
```

## Uesage
```bash
kaitlyn copy -p [target project path]
```

## Default Configuration
```javascript
{
  "commands": [
    "rm -rf build",
    "npm run build"
  ],
  "source": "build/*"
}
```

## Configuration
Add `.kaitlynrc.json` file to root path
```javascript
{
  "commands": [
    "rm -rf build",
    "npm run build"
  ],
  "source": "build/*"
}
```
 - commands: build script commands
 - source: output directory of build result

