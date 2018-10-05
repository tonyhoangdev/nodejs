var http = require('http')
var url = require('url')

// create a server object
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html', 'Jeje': 'jeje3' })
    res.write("Hello Tony!\n")
    res.write(req.url)
    var q = url.parse(req.url, true).query
    var txt = "start:" + q.year + ' ' + q.month
    res.end(txt)
}).listen(8080)

