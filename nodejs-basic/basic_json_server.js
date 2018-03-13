var http = require("http")

var server = http.createServer(function(req, res) {
    // res.writeHead(200, {"Content-Type": "text/plain"})
    // res.write("Hehe, This is the first webserver with NodeJS")
    //
    console.log(req.url)
    console.log(req.method)

    // Return json data
    var data = {
        "status": 200,
        "message" : "This is a message",
        "err": false
    }

    res.writeHead(200, {"Content-Type": "application/json"})
    res.write(JSON.stringify(data))
    res.end()
})

server.listen(3000, function(){
    console.log("Server running on port 3000")
})