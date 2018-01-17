# kailyn-cli 

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

## Support Directory
```javascript
const whiteList = [
  'lib/*',
  'style/*',
  'package.json',
  'README.md',
] 
```
