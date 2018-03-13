var fs = require("fs")

// //open
// fs.open("data.txt", "r+", function(err, file) {
//     if (err) {
//         console.log("Open file is Error")
//         return
//     }

//     console.log("Open file is successfully")
// })

// //Read file sync
// var data = fs.readFileSync("data.txt")
// console.log(data.toString())

// //Read file async
// fs.readFile("data.txt", function(err, data) {
//     if (err) {
//         console.log("Error read file")
//     } else {
//         console.log(data.toString())
//     }
// })


//Write
fs.writeFile("data.txt", "New content file 3", function(err) {
    if (err) {
        console.log("Write file error")
    } else {
        fs.readFile("data.txt", function(err, data){
            if (err) {
                console.log("Read file is error")
            } else {
                console.log(data.toString())
            }
        })
    }
})


// Make dir
fs.mkdir("new_folder", function(err) {
    err ? console.log("Error") : console.log("Success")
})

console.log("End!")
