/**************************************************
 * Created by kaili on 2018/1/16 下午4:36.
 **************************************************/
var copy = require('../../lib/index').copy

exports.command = 'copy'
exports.desc = 'build current npm repository, and copy lib/* to target project root path ./node_modules/[name]'

exports.builder = function (yargs) {
  return yargs
    .option('path', {
      alias: 'p',
      demand: true,
      describe: 'your target project root path',
      type: 'string'
    })
}

exports.handler = function (argv) {
  copy(argv.p)
}