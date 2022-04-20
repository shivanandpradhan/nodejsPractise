import path from "path"
import http from "http"
import fs from "fs"

const PORT = process.env.PORT || "3000"
const HOST = "localhost"

//  creating a server
const server = http.createServer((req, res) => {

    if (req.url != "/favicon.ico") {

        let file = path.basename(req.url)
        let extension = path.extname(req.url)

        if (file == "") file = "index";
        if (extension == "") file += ".html";

        let filePath = path.join(process.cwd(),"public") 

        if (extension == ".css"){
            res.setHeader("Content-Type","text/css")
            filePath = path.join(filePath, "css", file);
        }
        else if (extension == ".js"){
            res.setHeader("Content-Type", "text/js")
            filePath = path.join(filePath, "js", file);   
        }
        else if (extension == ".jpg") {
            res.setHeader("Content-Type", "image/jpeg")
            filePath = path.join(filePath, "images", file);
        }
        else {
            res.setHeader("Content-Type", "text/html");
            filePath = path.join(filePath, "html", file);
        }
            
        // console.log("Path : " + filePath)


        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.end("<h1>404 Page Not Found !!!</h1>")
            }
            res.end(data);
        })
    }
});

// listening on the port
server.listen(PORT, HOST, () => {
    console.log(`Listening on the port : ${PORT}`)
})