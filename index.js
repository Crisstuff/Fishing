import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { insertCred } from "./database";

const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
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
});

server.listen(port, (err) => {
    if (err) {
        console.log(`oopsie: ${err}`);
    } else {
        console.log(`Listening on port ${port}!`);
    }
});