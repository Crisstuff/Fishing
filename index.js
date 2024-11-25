const http = require("http")
const fs = require("fs")
const path = require("path")
const port = 8080

const server = http.createServer(function(req, res) {
    let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url)

    let extName = path.extname(filePath)
    let contentType = "text/html"

    switch (extName) {
        case ".css":
            contentType = "text/css"
            break
        case ".js":
            contentType = "text/javascript"
            break
        case ".png":
            contentType = "image/png"
            break
        case ".woff":
            contentType = "font/woff"
            break
        case ".woff2":
            contentType = "font/woff2"
            break
        case ".ttf":
            contentType = "font/ttf"
            break
    }

    console.log(`File path: ${filePath}`)
    console.log(`Content type: ${contentType}`)

    res.writeHead(200, { "content-type": contentType })

    const readStream = fs.createReadStream(filePath)
    readStream.pipe(res)
})

server.listen(port, function(err) {
    if (err) {
        console.log(`oopsie: ${err}`)
    } else {
        console.log(`Listening on port ${port}!`)
    }
})





// res.writeHead(200, { "content-type": "text/html" })
// fs.readFile("index.html", function(e, data) {
//     if (e) {
//         res.write(404)
//         res.write("ERROR")
//     } else {
//         res.write(data)
//     }
//     res.end()
// })