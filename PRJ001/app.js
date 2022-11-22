// Global imports
const express = require("express")

// Custom imports
const path = require("./util/path")

// Creating new application
const app = express()


// Default 404 page
app.use((req,res,next)=>{
    res.sendFile(path.join("view","404.html"))
})

// Starting Application
console.log("APPLICATION IS RUNNING ON PORT 3000")
app.listen(3000)