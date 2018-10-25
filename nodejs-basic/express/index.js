var express = require('express')
var app = express()

app.set('views', __dirname)
app.set('view engine', 'jade')

app.route('/Node').get(function(req, res) {
    res.send('Tutorial on Node')
})

app.route('/Angular').get(function(req, res) {
    res.send('Tutorial on Angular')
})

app.get('/', function(req, res) {
    res.render('index', {title: 'Tony', message: 'Xin chao'})
        console.log(__dirname)
    // res.send('Hello may!')  
})

var server = app.listen(3001, function() {

})