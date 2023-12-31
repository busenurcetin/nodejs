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

// const os = require('os')

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

// const {readFileSync,writeFileSync} = require('fs')
// const first = readFileSync('./content/first.txt','utf8')
// const second = readFileSync('./content/second.txt','utf8')

// console.log(first,second);

// when u write this you can see the result of the first and second text files. (Bkz: First Second.)

// writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second},{flag:'a'}`)

// when u write this you can see the result of the result-sync.txt file. (Bkz: Here is the result : First, Second,{flag:'a'}) Check result-sync.txt file.

// const {readFile,writeFile} = require('fs')
//   readFile('./content/first.txt','utf8',(err,result)=>{
//          if(err){
//              console.log(err);
//              return
//      }
// console.log(result);
// })

// if we dont add utf8 here we will see the result as buffer. (Bkz: <Buffer 46 69 72 73 74 20 53 65 63 6f 6e 6)

// const {readFile,writeFile} = require('fs')
//   readFile('./content/first.txt','utf8',(err,result)=>{
//          if(err){
//              console.log(err);
//              return
//      }
// const first = result
// readFile('./content/second.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return
// }
// const second = result
// writeFile('./content/result-async.txt',`Here is the result : ${first}, ${second}`,(err,result)=>{
// if(err){
//     console.log(err);
//     return}
// })
// })})

// when u write this you can see the result of the result-async.txt file. (Bkz: Here is the result : First, Second) write node.js in console to see result. Check result-async.txt file.

// Asynchronous way

// const {readFile,writeFile} = require('fs')
// console.log('start');
//   readFile('./content/first.txt','utf8',(err,result)=>{
//          if(err){
//              console.log(err);
//              return
//      }
// const first = result
// readFile('./content/second.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return
// }
// const second = result
// writeFile('./content/result-async.txt',`Here is the result : ${first}, ${second}`,(err,result)=>{
// if(err){
//     console.log(err);
//     return}
//     console.log('done with this task');
// })
// })})

// console.log('starting next task');

// This is the async version of 10-fs-sync.js.
// You can see the diffrence between sycn and async in the terminal. 
// To see the diffrence you should write node 10-fs-sycn.js after that node 11-fs-async.js in the terminal.

// HTTP Module

// const http = require('http')

// const server = http.createServer((req,res)=>{
// res.write('Welcome to our home page')
// res.end()
// })

// server.listen(5000)

// when u write this you can see the result of the server but this time not in the terminal. Check: http://localhost:5000/
// if you want to stop the server you can press ctrl + c in the terminal.

// if you want to see diffrent outputs in diffrent pages you can write this:

// const http = require('http')

// const server = http.createServer((req,res)=>{
// if(req.url === '/'){
// res.end('Welcome to our home page')
// }
// if(req.url === '/about'){
//     res.end('Here is our short history')
// }
// res.end(`
// <h1>Oops!</h1>
// <p>We can't seem to find the page you are looking for</p>
// <a href="/">back home</a>
// `)})

// server.listen(5000)

// When u write this and write http://localhost:5000/about you can see the text of the about page.

// NPM - Node Package Manager

// npm - global command, comes with node
// npm --version = you can see the version of your npm
// local dependecy - use it only in this particular project
// npm i <packageName>
// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// We need these packages to create a server.

// const _ = require('lodash')

// const items = [1,[2,[3,[4]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems);

// when u write this you can see the result of the flattenDeep function when u write node app.js in terminal. (Bkz: [ 1, 2, 3, 4 ])

// npm i nodemon -D or --save-dev works same and it is for development dependency.

// When we write npm run dev in scripts in package.json we can write npm run dev in the terminal to see the result of the app.js file instead of node app.js.

// nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

// to uninstall a package you can write npm uninstall <packageName> or npm un <packageName>

// to install a package globally you can write npm install -g <packageName> (for example npm install -g lodash)

// to create react app you can write npx create-react-app <appName> (for example npx create-react-app my-app)

// console.log('first');
// setTimeout(()=>{"second"
// },0)
// console.log('third');

// completed and exited operating system process
// when u write this you can see the result of the first,second and third in the terminal. (Bkz: first third second) even tho we put the second in the setTimeout function. This is because of the event loop. 

// setInterval(()=>{
//     console.log('hello world');
// },2000)
// console.log(`I will run first`);

// when u write this you can see the result of the I will run first and hello world in the terminal. Because of the event loop the setInterval function will run every 2 seconds.
// process stays alive unless
// Kill process CONTROL + C
// unexpected error 

// const http = require('http')

// const server = http.createServer((req,res)=>{
//     console.log('request event');
//     res.end('Hello World')
// })

// server.listen(5000,()=>{
//     console.log('Server listening on port : 5000...');
// })

// when u write this you can see the result of the server in the terminal. (Bkz: Server listening on port : 5000...) and when u write http://localhost:5000/ in the browser you can see the result of the Hello World.

// const http = require('http')

// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end('Welcome to our home page')
//     }
//     if(req.url === '/about'){
//         // BLOCKING CODE!!!
//         for(let i = 0; i < 1000; i++){
//             for (let j = 0; j < 1000; j++){
//                 console.log(`${i} ${j}`);
//             }
//         }
//         res.end('Here is our short history')
       
//     }
//     res.end(`
//     <h1>Oops!</h1>
//     <p>We can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
//     `)
// })

// server.listen(5000, ()=>{
//     console.log('Server listening on port : 5000...')});

// const {readFile, writeFile } = require('fs')
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// util module is a built in module in node.js. It has a promisify method which converts a callback based function to a promise based function.


// const getText = (path) => {
//     return new Promise((resolve, reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/first.txt')
// .then((result)=>console.log(result))
// .catch((err)=>console.log(err))

//comment above 3 lines and uncomment below (start) to see the diffrence between async and sync.


// const start = async () => {
//     try{
//     const first = await readFilePromise('./content/first.txt', 'utf8')
//     const second = await readFilePromise('./content/second.txt', 'utf8')
//     await writeFilePromise('./content/result-mind-grenade.txt',`THIS IS AWESOME : ${first} ${second}`)
//     console.log(first, second);
// } catch (error) {
//     console.log(error);
// }
// }
// start()

// when u write this you can see the result of the first and second text files in the terminal. (Bkz: hello world this is second text file) and you can see the result of the result-mind-grenade.txt file in the content folder. (Bkz: THIS IS AWESOME : hello world this is second text file)

// Now lets try something diffrent

// const {readFile, writeFile } = require('fs').promises
// comment above line and uncomment below (start) to see the diffrence.
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async () => {
//     try{
//     const first = await readFile('./content/first.txt', 'utf8')
//     const second = await readFile('./content/second.txt', 'utf8')
//     await writeFile('./content/result-mind-grenade.txt',`THIS IS AWESOME : ${first} ${second}`, {flag: 'a'})
//     console.log(first, second);
// } catch (error) {
//     console.log(error);
// }
// }
// start()

// when u write this you can see the result of the first and second text files in the terminal. (Bkz: hello world this is second text file) and you can see the result of the result-mind-grenade.txt file in the content folder. (Bkz: THIS IS AWESOME : hello world this is second text file)

// Event Emitters

// const EventEmitter = require('events');

// const customEmitter = new EventEmitter();

// customEmitter.on('response', (name, id)=>{
//     console.log(`data recieved user ${name} with id:${id}`);
// })

// customEmitter.on('response', (name, id)=>{
//     console.log(`data recieved ${name} with id:${id}`);
// })
// customEmitter.on('response', ()=>{
//     console.log(`some other logic here`);
// })
// customEmitter.emit('response', 'Buse', 19)


// when u write this you can see the result of the data recieved user Buse with id:19 and some other logic here in the terminal.
// for now we are using the built in event emitter but we can create our own event emitter.
// we can use the event emitter for example when we want to send an email to the user when they sign up to our website.


// comment above lines and uncomment below now.
// Codes from 14-request-event.js

const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)

// to have more info about the event emitter you can check the documentation. link: https://nodejs.org/api/events.html#events_class_eventemitter also check the documentation of the http module. link: https://nodejs.org/api/http.html#http_http_createserver_options_requestlistener