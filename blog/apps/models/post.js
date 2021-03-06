var q = require("q")
var db = require("../common/database")

var conn = db.getConnection()

function getAllPosts() {
    var defer = q.defer()

    var query = conn.query('SELECT * FROM posts', function(err, posts) {
        err ? defer.reject(err) : defer.resolve(posts)
    })

    return defer.promise
}


function addPost(params) {
    if (!params) {
        return false
    }

    var defer = q.defer()

    var query = conn.query('INSERT INTO posts SET ?', params, function(err, result) {
        err ? defer.reject(err) : defer.resolve(result)
    })

    return defer.promise
}

module.exports = {
    getAllPosts: getAllPosts,
    addPost: addPost
}