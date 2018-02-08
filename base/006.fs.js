const fs = require('fs')

fs.readFile('./006.fs.js', (err, data) => {
  if (err) {
    console.log('err: ', err)
  } else {
    console.log(data.toString())
  }
})
