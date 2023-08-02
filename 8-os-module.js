// OS - PATH - FS - HTTP

const os = require('os')

// it works for all operating systems (Windows, Mac, Linux etc.) if you want to see the result you can write console.log(os) or console.log(os.userInfo()) or console.log(os.uptime()) etc.
// to see all the methods you can write console.log(os) and check the methods part you can write os. and see the methods.

// info about current user

const user = os.userInfo()
console.log(user)

// when u write this you can see the result of the user. (Bkz: { uid: -1, gid: -1, username: 'DESKTOP-4QJ8Q8Q\\user', homedir: 'C:\\Users\\user', shell: null })
// method returns the information about the currently effective user id.

console.log(`The system uptime is ${os.uptime()} seconds`)

// when u write this you can see the result of the uptime. (Bkz: The system uptime is 1616 seconds)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);

// when u write this you cahn have info about your operating system. (Bkz: { name: 'Windows_NT', release: '10.0.19042', totalMem: 8490249216, freeMem: 2037559808 })