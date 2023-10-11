const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page!')
    }
    if(req.url==='/about'){
        res.end('Here is our short history')
    }
    
    res.writeHead(200,{
        'Content-Type': 'text/html'

    })
    res.write('<h1>Welcome to our home page!</h1>')
    res.end(`
    <h1>
    Oops!</h1>
    <p>
    We can't seem to find the page you are looking for</p>
    <a href="/">Back Home</a>
    `)
   
    // res.write('Welcome to our home page!')
    // res.end()

})
server.listen(3000)
console.log("listening on port 3000")

