const fs = require('fs')

fs.readFile('./032.readfile.js', 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
})

const re = fs.readFileSync('../base/001.js', 'utf8')

console.log('readFileSync: ', re, '\n')

