var express = require('express')
var app = express()

var MongoClient = require('mongodb').MongoClient
var host = 'mongodb://localhost:27017'
var url = 'mongodb://localhost/EmployeeDB'
var str = ""

app.route('/Employeeid').get(function(req, res) {
    
    MongoClient.connect(host, function(err, client) {
        console.log('Connected')
        str = ""
        var db = client.db('EmployeeDB')
        var cursor = db.collection('Employee').find()
        cursor.forEach(element => {
            if (element != undefined) {
                if (element.Employeeid != undefined) {
                    str = str + "EmployeeID: " + element.EmployeeName + "</br>"
                }
            }
        });
        res.send(str)
    })
})

var server = app.listen(3003, function() {
    console.log("started server..")
})

// MongoClient.connect(host, function(err, client) {
//     console.log('Connected')
//     var db = client.db('EmployeeDB')
//     // console.log(db)

//     // var cursor = db.collection('Employee').find({})

//     // // console.log(cursor)
//     // cursor.forEach(function(err, doc) {
//     //     console.log(doc)
//     // })

//     // db.collection('Employee').insertOne({
//     //     Employeeid: 5,
//     //     EmployeeName: "Tony2"
//     // })

//     // db.collection('Employee').updateOne({
//     //     Employeeid: 5 }, 
//     //             {
//     //                 $set: {

//     //                     EmpoyeeName: "Tony3",
//     //                     Employeeid: 4
//     //                 }
//     //             }
        
//     // )

//     // db.collection('Employee').deleteOne({
//     //     Employeeid: 4
//     // })

//     // db.close()
// })

