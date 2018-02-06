module.exports.test = 'A'

const modeB = require('./005.modeB')
console.log('modeA: ', modeB.test)

module.exports.test = 'AA'
