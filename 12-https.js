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

const http = require('http')

const server = http.createServer((req,res)=>{
if(req.url === '/'){
res.end('Welcome to our home page')
}
if(req.url === '/about'){
    res.end('Here is our short history')
}
res.end(`
<h1>Oops!</h1>
<p>We can't seem to find the page you are looking for</p>
<a href="/">back home</a>
`)})

server.listen(5000)

// When u write this and write http://localhost:5000/about you can see the text of the about page.

// nodemon is a package that helps you to see the changes in the terminal without stopping the server and starting it again.

// if you are more interested with json files you can check this website: https://jsonformatter.curiousconcept.com/ the basic of package.json link: https://docs.npmjs.com/cli/v7/configuring-npm/package-json

// event loop youtube video: https://www.youtube.com/watch?v=8aGhZQkoFbQ



