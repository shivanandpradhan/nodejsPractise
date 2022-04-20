
import { rmSync } from 'fs'
import http from 'http'

// defining a port
const PORT = process.env.PORT || "3000"

// creating a server
const server = http.createServer( (req, res) => {

    console.log(req.url)
    
    if (req.url == "/favicon.ico") {
        console.log("favicon.ico - icon")
    }

    console.log(req.method)
    
    // response

    // res.statusCode = "200"
    // res.statusMessage = "response Generated"
    // res.setHeader("Content-Type", "text/html")

    res.writeHead(200, "response Generated", {"Content-Type" :  "text/html"})
    res.end("<h1> NodeMon Installed In this project</h1>")
})

server.listen(PORT, "localhost", () => {
    console.log(`Listening on the Port : ${PORT}`);
})
