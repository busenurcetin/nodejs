// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// const names = require('./4-names')
// const sayHi = require('./5-utils')

// sayHi('susan')
// sayHi(john)
// sayHi(peter)

// Böyle yazarsak konsolda ReferenceError: john is not defined hatası alırız. Bunu çözmek için 4-names.js dosyasına module.exports = {john,peter} yazmamız ya da 4-names.js dosyasında const {john,peter} = require('./4-names') yazmamız gerekir.

// CTRL + K + C ile seçtiğimiz kısmı yorum satırına alabiliriz.

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
//console.log(data)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

// Yazarak konsolda hello there susan, hello there john, hello there peter yazdırabiliriz.