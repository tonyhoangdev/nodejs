var Additional = require('./Additional')

console.log(Additional.AddNumber(1,3))

var  NodeTutorial = require('./NodeTutorial')
NodeTutorial.NodeTutorial()

var tut = new NodeTutorial.NodeTutorial()
tut.pTutor()

var express = require('express')
var app = express()

app.set('view engine', 'tony')
app.get('/', function(req, res) {
    res.write("hehe")
})

var server = app.listen(3000, function() {
    console.log('Express server listening on port ' + 3000)
})
