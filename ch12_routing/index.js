import { fstat, read } from 'fs'
import http from 'http'
import fs from 'fs'
import path from 'path'

// Port 
const PORT = process.env.PORT || 3000
const HOST = "localhost"

// creating a server
const server = http.createServer( (req, res) => {
    
    console.log(path.basename(req.url))

    if (req.url == "/") {
        fs.readFile("./templates/home.html", (err, data) => {
            if (err) throw err;
            res.writeHead(200, "Good", {"Content-Type" : "text/html"})
            res.end(data)
        })
    }
    else if (req.url == "/about") {
        fs.readFile("./templates/about.html", (err, data) => {
            if (err) throw err;
            res.writeHead(200, "Good", {"Content-Type" : "text/html"})
            res.end(data)
        })
    }
    else if (req.url == "/index.css") {
        fs.readFile("./templates/index.css", (err, data) => {
            if (err) throw err;
            res.writeHead(200, "Good", {"Content-Type" : "text/css"})
            res.end(data)
        })
    }
    else{
        res.end("<h1> 404 Page Not Found !!! </h1>")
    }
})

// listening on Port
server.listen(PORT, HOST, () => {
    console.log(`Listening on Port : ${PORT}`);
})
