module.exports.test = 'B'

const modeA = require('./005.modeA')
console.log('modeB: ', modeA.test)

module.exports.test = 'BB'
