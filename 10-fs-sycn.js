const {readFileSync,writeFileSync} = require('fs')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second);

// when u write this you can see the result of the first and second text files. (Bkz: First Second.)

writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second},{flag:'a'}`)

// when u write this you can see the result of the result-sync.txt file. (Bkz: Here is the result : First, Second,{flag:'a'}) Check result-sync.txt file.