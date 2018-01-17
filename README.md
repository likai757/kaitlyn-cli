# kailyn-cli 

[![Build Status](https://travis-ci.org/likai757/lk-tools.svg?branch=master)](https://travis-ci.org/likai757/lk-tools)

通过`copy`命令行工具将当前项目动态安装到，指定项目的`node_modules`目录下。

## Install
`$npm i -g kaitlyn-cli`

## Uesage
`$kaitlyn copy -p [target project path]`

## Support Directory
```javascript
const whiteList = [
  'lib/*',
  'style/*',
  'package.json',
  'README.md',
] 
```
