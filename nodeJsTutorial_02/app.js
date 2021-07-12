const names = require('./04-names')

// destructuring
const {john, peter}=require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')

require('./07-mind-grenade')

console.log(data)

console.log(names);

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

// destructured values
sayHi(john)
sayHi(peter)