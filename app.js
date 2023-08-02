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



// const names = require('./4-names')
// const sayHi = require('./5-utils')
// const data = require('./6-alternative-flavor')
//console.log(data)
// require('./7-mind-grenade')

// We write this to see the result of 7-mind-grenade.js file. We dont need to assign it to a variable.
// We can also write it like this:
// require('./7-mind-grenade')()
//  The reason we write it like this is because we want to run the function in 7-mind-grenade.js file. Same fot other files.


// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)

// Built-in Modules

// OS - PATH - FS - HTTP

const os = require('os')

// it works for all operating systems (Windows, Mac, Linux etc.) if you want to see the result you can write console.log(os) or console.log(os.userInfo()) or console.log(os.uptime()) etc.
// to see all the methods you can write console.log(os) and check the methods part you can write os. and see the methods.

// info about current user

// const user = os.userInfo()
// console.log(user)

// when u write this you can see the result of the user. (Bkz: { uid: -1, gid: -1, username: 'DESKTOP-4QJ8Q8Q\\user', homedir: 'C:\\Users\\user', shell: null })
// method returns the information about the currently effective user id.

// console.log(`The system uptime is ${os.uptime()} seconds`)

// when u write this you can see the result of the uptime. (Bkz: The system uptime is 1616 seconds)

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }
// console.log(currentOS);

// when u write this you cahn have info about your operating system. (Bkz: { name: 'Windows_NT', release: '10.0.19042', totalMem: 8490249216, freeMem: 2037559808 })

// Path Module

// const path = require('path') 
// console.log(path.sep);

// when u write this you can see the result of the path separator. (Bkz: \)

// const filePath = path.join('/content','subfolder','test.txt')

// when u write this you can see the result of the path. (Bkz: \content\subfolder\test.txt)

// console.log(filePath);

// const base = path.basename(filePath)
// console.log(base);

// const absolute = path.resolve(__dirname,'content','subfolder','test.txt')

// when u write this you can see the result of the absolute path. (Bkz: C:\Users\...\content\subfolder\test.txt)

// console.log(absolute);

const {readFileSync,writeFileSync} = require('fs')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second);

// when u write this you can see the result of the first and second text files. (Bkz: First Second.)

writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second},{flag:'a'}`)

// when u write this you can see the result of the result-sync.txt file. (Bkz: Here is the result : First, Second,{flag:'a'}) Check result-sync.txt file.


