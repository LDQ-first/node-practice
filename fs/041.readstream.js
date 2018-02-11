const fs = require('fs')

const rs = fs.createReadStream('./041.readstream.js')

rs.pipe(process.stdout)

