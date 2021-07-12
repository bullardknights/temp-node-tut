// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./04-names') // object properties
const {john, peter} = require('./04-names') // desructure object
const sayHi = require('./05-utils')

const data = require('./06-alternative-flavor')

require('./07-mind-grenade')
console.log(data)
console.log(names)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
sayHi(john)
sayHi(peter)
