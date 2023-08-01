// const amount = 12

// if(amount<10){
//     console.log('small number')
// }
// else{
//     console.log('large number')
// }

// console.log(`hey it's my first node app`)

// Bu yazdıklarınızı web konsolu yerine kendi konsoulunuzda da kontrol edebilirsiniz.
// cd/users/.../node app.js yazarak kendi konsolunuzda da çalıştırabilirsiniz.
// Çalıştırdığınızda eğer bir hata yoksa console.log içindeki yazıyı göreceksiniz.

// Globals - No Window

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

// console.log(__dirname)

// bunu yazıp konsola node app.js yazarsak dosyanın yolunu bulabiliriz. (Bkz: C:\Users\...)

// console.log(__dirname)
// setInterval(()=>{
//     console.log('hello world')
// },1000)

// Böyle yazarsak dosya ismi ve sonrasında saniyede bir hello world yazdırır.

// console.log(__filename)



const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
//console.log(data)
require('./7-mind-grenade')

// We write this to see the result of 7-mind-grenade.js file. We dont need to assign it to a variable.
// We can also write it like this:
// require('./7-mind-grenade')()
// The reason we write it like this is because we want to run the function in 7-mind-grenade.js file. Same fot other files.


sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

// Built-in Modules

// OS - PATH - FS - HTTP

