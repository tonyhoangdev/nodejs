var express = require("express")
var router = express.Router()

var post_md = require("../models/post")

router.get("/", function(req, res) {
    // res.json({"message": "This is admin page"})

    var data = post_md.getAllPosts()
    data.then(function(posts){
        var data = {
            posts: posts,
            error: false
        }

        res.render("admin/dashboard", {data: data})
    }).catch(function(err) {
        res.render("admin/dashboard", {data: {error: "Ger Post data is error"}})
    })

    // res.render("admin/dashboard", {data: {error: false}})
})

router.get("/post/new", function(req, res) {
    res.render("admin/post/new", {data: {error: false}})

    console.log(req)

})

router.post("/post/new", function(req, res) {
    var params = req.body

    console.log(req.body)

    var now = new Date()
    params.created_at = now
    params.updated_at = now

    var data = post_md.addPost(params)

    data.then(function(result) {
        res.redirect("/admin")
    }).catch(function(err) {
        var data = {
            error: "Could not insert Post"
        }

        res.render("admin/post/new", {data: data})
    })
})

module.exports = router