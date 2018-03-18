var express = require("express")
var router = express.Router()
var helper = require("../helpers/helper")

var user_md = require("../models/user")
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

router.get("/signup", function(req, res) {
    res.render("signup", {data: {}})
})

router.post("/signup", function(req, res) {
    var user = req.body

    if (user.email.trim().length === 0) {
        res.render("signup", {data: {error: "Email is required"}})
    }

    if (user.passwd !== user.repasswd && user.passwd.trim().length !== 0) {
        res.render("signup", {data: {error: "Password is not match"}})
    }

    // Insert to DB
    var password = helper.hash_password(user.passwd)

    user = {
        email: user.email,
        password: password,
        first_name: user.firstname,
        last_name: user.lastname
    }


    var result = user_md.addUser(user)

    result.then(function(data) {
        // res.json({message: "Insert success"})
        res.redirect("/admin/signin")
    })
    .catch(function(err) {
        res.render("signin", {data: {error: "Error"}})
    })


})

router.get("/signin", function(req, res) {
    res.render("signin", {data: {}})
})

router.post("/signin", function(req, res) {
    var params = req.body

    if (params.email.trim().length === 0) {
        res.render("signin", {data: {error: "Please enter an email"}})
    } else {
        var data = user_md.getUserByEmail(params.email)

        if (data) {
            data.then(function(users) {
                var user = users[0]

                if (user  !== undefined) {

            console.log("params.password=========", params.password)
            console.log("user.password=========", user)

                var status = helper.compare_password(params.password, user.password)
                   if (!status) {
                    res.render("signin", {data: {error: "Password is wrong"}}) }
                else {
                    req.session.user = user
                    res.redirect("/admin/")
                }
            } else {
res.render("signin", {data: {error: "User not exists"}})
            }

            })
        } else {

            res.render("signin", {data: {error: "User not exists"}})
            }
        }

    console.log(params)
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