const fs = require('fs')

fs.mkdir('dir', err => {
  if (err) throw err
  console.log('done')
})