// Global Import
const express = require("express")

// Local Import
const path = require("../util/path")


const route = express.Router();

route.get("/",(req,res,next)=>{
    res.sendFile(path.join("view","HomePage.html"))
})

module.exports = route