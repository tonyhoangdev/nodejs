var express = require('express')
var app = new express()

app.use(function(req, res, next) {
    console.log('Request Query: ' + req.query)
    next()
})

module.exports = function(app) {
    app.get('/', function(req, res) {
        // send a plain text
        res.send("First express application!")
    })

    app.get('/hello.text', function(req, res) {
        // send a plain text
        res.send("Hello!")
    })

    app.get('/contact', function(req, res) {
        // render a view named contact
        res.render('contact')
    })

    app.get('/user/:id', function(req, res) {
        res.send('user id: ' + req.params.id)
    })

    app.get('/country/:country/state/:state/city/:city', function(req, res) {
        res.send(req.params.country + ", " + req.params.state + ', ' + req.params.city)
    })

    app.get('/feed/:datatype?', function(req, res) {
        if (req.params.datatype) {
            res.send('Data type: ' + req.params.datatype)
        } else {
            res.send('Text Data')
        }
    })
}