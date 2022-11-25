// Global imports
const express = require("express")
const bodyParser = require("body-parser")

// Custom imports
const path = require("./src/util/path")
const myRouter = require("./src/routes/main")
const sequelize = require("./src/util/database")

// Creating new application
const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join("public")))
app.use(express.json())

// adding router to the application
myRouter(app)


// Default 404 page
app.use((req,res)=>{
    res.status( 404)
    res.end("Page not found")
})

// Starting Application

sequelize.sync().then(()=>{
    console.log("server started on port 3000")
    app.listen(3000)
}).catch(err=>{
    console.error("Error while starting the application " , err)
})