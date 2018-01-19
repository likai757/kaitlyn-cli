const shelljs = require('shelljs')
const path = require('path')
const fs = require('fs')

// const defSource = 'build/*'
const name = require(path.join(process.cwd(), 'package.json')).name

function exeCopyDirectories(source, target) {
  let src = path.join(process.cwd(), source)
  let output = `${target}/node_modules/${name}`

  //install module to node_modules
  if (!fs.existsSync(output)) {
    shelljs.mkdir(output)
  }

  shelljs.cp('-rf', src, output)

  console.log('cp done!')
  console.log('\t from src: ', src)
  console.log('\t to target: ', output)
}

function exeCommands(commands) {
  if (Array.isArray(commands)) {
    commands.forEach(cmd => {
      console.log(`exec >> ${cmd}`)
      shelljs.exec(cmd)
    })
    return
  }
  if (commands === 'default') {
    console.log('exec >> npm run build \n')
    shelljs.exec('rm -rf build')
    shelljs.exec('npm run build')
    console.log('\n')
    return
  }
}

export default function (target) {

  let configFilePath = path.join(process.cwd(), '.kaitlynrc.json')
  if (!fs.existsSync(configFilePath)) {
    configFilePath = path.join(__dirname, '../../asset', '.kaitlynrc.json')
  }

  console.log('loading ' + configFilePath)

  let kaitlynrc = require(configFilePath)
  let { commands = 'none', source = [] } = kaitlynrc

  console.log(`\t config.command: ${commands}`)
  console.log(`\t config.source: ${source} \n`)

  exeCommands(commands)
  exeCopyDirectories(source, target)
}