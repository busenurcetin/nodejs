const {readFile,writeFile} = require('fs')
console.log('start');
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
    console.log('done with this task');
})
})})

console.log('starting next task');

// This is the async version of 10-fs-sync.js.
// You can see the diffrence between sycn and async in the terminal. 
// To see the diffrence you should write node 10-fs-sycn.js after that node 11-fs-async.js in the terminal.