/**
 * argv
 * argv0
 * execArgv
 * execPath
 * 
 */

const { argv, argv0, execArgv, execPath } = process

argv.forEach(element => {
  console.log(element)
})

console.log('argv0: ', argv0)

console.log('execArgv: ', execArgv)

console.log('execPath: ', execPath)
