const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
// The reason we write it like this is because we want to run the function in 7-mind-grenade.js file. Same fot other files.


sayHi('susan')
sayHi(names.john)
sayHi(names.peter)