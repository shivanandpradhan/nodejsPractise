
import { rmSync } from 'fs'
import http from 'http'

// defining a port
const PORT = process.env.PORT || "3000"

// creating a server
const server = http.createServer( (req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.end("<h1> NodeMon Installed In this project</h1>")
})

server.listen(PORT, "localhost", () => {
    console.log(`Listening on the Port : ${PORT}`);
})
