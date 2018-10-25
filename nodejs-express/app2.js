var http = require('http')
var express = require('express')

var namespace = require('express-namespace')
var app = express()

app.get('/', function(req, res) {
    res.send('Welcome')
})
app.get("/error", function(req, res) {
    //res.status(404)
    res.status(404).send("404 Error")
})
app.get('/header', function(req, res) {
    res.status(200)
    res.set('Content-Type', 'text/plain; charset=us-ascii')
    res.set('X-Custom-Message', 'it is a custom message')
    res.send('HTTP header setting example')
})

app.get('/senddata', function(req, res) {
    res.set("Content-Type", "text/html")
    res.send('<h2>Plain text</h2>')
})
app.get('/json', function(req, res) {
    res.json({message: 'This is example of json'})
})

app.namespace('/posts', function() {
    app.get('/', function(req, res) {
        res.send('all posts')
    })

    app.get('/new', function(req, res) {
        res.send('new post')
    })

    app.get('/edit/:id', function(req, res) {
        res.send('edit post ' + req.params.id)
    })

    app.get('/delete/:id', function(req, res) {
        res.send('delete post ' + req.params.id)
    })

    app.get('/2016', function(req, res) {
        res.send('article from 2017')
    })

    app.namespace('/2017/jan', function() {
        app.get('/', function(req, res) {
            res.send('post from jan 2017')
        })

        app.get('/angularjs', function(req, res) {
            res.send('articles about Angular.js from jan 2017')
        })
    })
})

http.createServer(app).listen(3010, function() {
    console.log("app started!")
})