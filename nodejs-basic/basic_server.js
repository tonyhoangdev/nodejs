var http = require("http")

var server = http.createServer(function(req, res) {
    // res.writeHead(200, {"Content-Type": "text/plain"})
    // res.write("Hehe, This is the first webserver with NodeJS")

    res.writeHead(200, {"Content-Type": "text/html"})
    res.write("<h1>Hehe, This is the first webserver with NodeJS</h1>")
    res.end()
})

server.listen(3000, function(){
    console.log("Server running on port 3000")
})