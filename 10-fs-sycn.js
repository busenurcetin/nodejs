const {readFileSync,writeFileSync} = require('fs')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log('done with this task');
console.log(first,second);

// when u write this you can see the result of the first and second text files. (Bkz: First Second.)

writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second},{flag:'a'}`)

console.log('starting the next one');

// To check the result you should write node 10-fs-sync.js in the terminal.

// when u write this you can see the result of the result-sync.txt file. (Bkz: Here is the result : First, Second,{flag:'a'}) Check result-sync.txt file.

const {readFile,writeFile} = require('fs')
  readFile('./content/first.txt','utf8',(err,result)=>{
         if(err){
             console.log(err);
             return
     }
console.log(result);
})

// if we dont add utf8 here we will see the result as buffer. (Bkz: <Buffer 46 69 72 73 74 20 53 65 63 6f 6e 6)

const {readFile,writeFile} = require('fs')
  readFile('./content/first.txt','utf8',(err,result)=>{
         if(err){
             console.log(err);
             return
     }
const first = result
readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
}
const second = result
writeFile('./content/result-async.txt',`Here is the result : ${first}, ${second}`,(err,result)=>{
if(err){
    console.log(err);
    return}
})
})})