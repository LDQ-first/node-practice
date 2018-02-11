const EventEmitter = require('events')

class CustomEvent extends EventEmitter {

}

const ce = new CustomEvent()

ce.on('test', () => {
  console.log('this is a test!')
})

setTimeout(() => {
  ce.emit('test')
}, 0)