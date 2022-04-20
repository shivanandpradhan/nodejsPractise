
import http from 'http'
import { Http2ServerResponse } from 'http2'

// console.log(http)

// creating a server
const server = http.createServer((req, res) => {
    // res.setHeader("Content-Type", "text/plain")
    res.setHeader("Content-Type","text/html")
    res.end("<h1> My name is ShivaNand Pradhan </h1>")
})

// getting port from system..
const PORT = process.env.PORT || "3000"

server.listen(PORT, "localhost", () => {
    console.log(`Listening on the ${PORT} : `)
})