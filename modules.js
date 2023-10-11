console.log('Welcome to Node Tutorial')

const names = require('./names')
const sayHello = require('./utils')
console.log(names)
sayHello('Susan')
sayHello(names.bhaskar)
sayHello(names.chavan)