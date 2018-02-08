const mode = require('../base/002_common')
const path = require('path')

console.log(mode.testVar)

console.log('__dirname: ', __dirname)
console.log('process.cwd(): ', process.cwd())
console.log('path.resolve("./"): ', path.resolve('./'))

