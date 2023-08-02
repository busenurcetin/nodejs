// Path Module

const path = require('path') 
console.log(path.sep);

// when u write this you can see the result of the path separator. (Bkz: \)

const filePath = path.join('/content','subfolder','test.txt')

// when u write this you can see the result of the path. (Bkz: \content\subfolder\test.txt)

console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')

// when u write this you can see the result of the absolute path. (Bkz: C:\Users\...\content\subfolder\test.txt)

console.log(absolute);