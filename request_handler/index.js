import path from "path"
import http from "http"
import fs from "fs"

const PORT = process.env.PORT || "3000"
const HOST = "localhost"

//  creating a server
const server = http.createServer((req, res) => {

    if (req.url != "/favicon.ico") {

        let file = path.basename(req.url) || "index";
        let filePath = path.join(process.cwd(),"public") 
        if (req.url.match("\.css$")){
            res.setHeader("Content-Type","text/css")
            filePath = path.join(filePath, "css", file);
            const fileStream = fs.createReadStream(filePath, "utf-8")
            fileStream.pipe(res)
        }
        else if (req.url.match("\.js$")){
            res.setHeader("Content-Type", "text/js")
            filePath = path.join(filePath, "js", file);   
            const fileStream = fs.createReadStream(filePath, "utf-8")
            fileStream.pipe(res)
        }
        else if (req.url.match("\.jpg$")) {
            res.setHeader("Content-Type", "image/jpeg")
            filePath = path.join(filePath, "images", file);
            const fileStream = fs.createReadStream(filePath)
            fileStream.pipe(res)
        }
        else {
            res.setHeader("Content-Type", "text/html");
            filePath = path.join(filePath, "html", file + ".html");
            fs.readFile(filePath,"utf-8", (err, data) => {
                if (err) res.end("404 Page Not Found")
                res.end(data)
            })
        }
    }
});

// listening on the port
server.listen(PORT, HOST, () => {
    console.log(`Listening on the port : ${PORT}`)
})