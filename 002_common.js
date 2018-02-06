console.log('This is a module')

const testVar = 100

const test = () => {
  console.log(testVar)
}

module.exports.testVar = testVar
module.exports.testFn = test
