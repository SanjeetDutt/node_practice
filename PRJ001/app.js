// Global imports
const express = require("express")
const bodyParser = require("body-parser")

// Custom imports
const path = require("./src/util/path")
const myRouter = require("./src/routes/main")

// Creating new application
const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join("public")))
app.use(express.json())

myRouter(app)


// Default 404 page
app.use((req,res)=>{
    res.status( 404)
    res.end("Page not found")
})

// Starting Application
console.log("APPLICATION IS RUNNING ON PORT 3000")
app.listen(3000)