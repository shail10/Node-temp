const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our Home page')
    }
    if (req.url === '/about') {
        res.end('Welcome to our About page')
    }
    res.end(`
    <h1>Oops!!</h1>
    <p>The page you are trying to access does not exist</p>
    <a href="/">Back Home</a>
    `)
})
server.listen(3000)