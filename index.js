const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('<h1>Home</h1>')
    }
    console.log(req.url)
})

const PORT = process.env.port || 5000

server.listen(PORT, () => console.log(`server running on port ${PORT}`))