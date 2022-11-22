// Global imports
const express = require("express")
const bodyParser = require("body-parser")

// Custom imports
const path = require("./util/path")
const publicRoute = require("./routes/public")
const adminRoute = require("./routes/admin")

// Creating new application
const app = express()
app.use(bodyParser.urlencoded({extended: false}))

//adding public route
app.use("/",publicRoute);

// adding admin route
app.use("/admin", adminRoute)


// Default 404 page
app.use((req,res,next)=>{
    res.sendFile(path.join("view","404.html"))
})

// Starting Application
console.log("APPLICATION IS RUNNING ON PORT 3000")
app.listen(3000)