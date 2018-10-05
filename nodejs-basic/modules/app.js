var http = require('http')
var my = require('./mymodule').default

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("The date and time are currently: " + my.myDateTime())
    res.end()
}).listen(8080)

console.log(my.myDateTime())

