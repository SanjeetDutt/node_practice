// Global imports
const express = require("express")
const bodyParser = require("body-parser")

// Custom imports
const path = require("./src/util/path")
const myRouters = require("./src/routes/_main")
const sequelize = require("./src/util/database")
const databaseDefault = require("./src/util/databaseDefaults")

// Creating new application
const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join("public")))
app.use(express.json())

// adding router to the application
app.use("/",myRouters)


// Default 404 page
app.use((req,res)=>{
    res.status( 404)
    res.end("Page not found")
})

// Adding relation mapping
require("./src/associations/main")

// Starting Application
sequelize.sync({alter: true})
    .then(()=>{
        databaseDefault
            .then(()=>{
                console.log("server started on port 3000")
                app.listen(3000)
            })
    })