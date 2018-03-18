var q = require("q")
var db = require("../common/database")

var conn = db.getConnection()

function addUser(user) {
    if (!user) {
        return false
    }

    var defer = q.defer()

    var query = conn.query('INSERT INTO users SET ?', user, function(err, result) {
        err ? defer.reject(err) : defer.resolve(result)
    })

    return defer.promise
}

function getUserByEmail(email) {
    if (!email) {
        return false
    }

    var defer = q.defer()

    console.log("hehe.", email)

    var query = conn.query('SELECT * FROM users WHERE ?', {email: email}, function(err, result) {
        err ? defer.reject(err) : defer.resolve(result)
    })



    return defer.promise
}

module.exports = {
    addUser: addUser,
    getUserByEmail: getUserByEmail
}