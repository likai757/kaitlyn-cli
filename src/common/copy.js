const shelljs = require('shelljs')
const path = require('path')
const fs = require('fs')

const whitelist = [
  'lib/*',
  'style/*',
  'package.json',
  'README.md',
]

const name = require(path.join(process.cwd(), 'package.json')).name

export default function (toPath) {

  console.log('exec >> npm run build \n')
  shelljs.exec('rm -rf lib')
  shelljs.exec('npm run build')
  console.log('\n')

  whitelist.forEach(n => {
    let m = n
    let modulePath = `${toPath}/node_modules/${name}`
    let output = `${modulePath}/${m}`

    //install module to node_modules
    if (!fs.existsSync(modulePath)) {
      shelljs.mkdir(modulePath)
    }

    if (n.endsWith('/*')) {
      m = m.slice(0, m.length - 2)
      output = `${toPath}/node_modules/${name}/${m}`
      shelljs.rm('-rf', output)
      shelljs.mkdir(output)
    }

    const source = path.join(process.cwd(), n)
    shelljs.cp('-rf', source, output)
    console.log('cp done', output)
  })
}