// Global imports
const express = require("express")


// local import
const path = require("../util/path")

const route = express.Router();

route.get("",(req,res,next)=>{
    res.sendFile(path.join("view","admin","Admin.html"))
})

route.get("/add-product",(req,res,next)=>{
    res.sendFile(path.join("view","admin","AddProduct.html"))
})

route.post("/add-product",(req,res,next)=>{
    console.log(req.body)
    res.sendFile(path.join("view","admin","Admin.html"))
})

module.exports = route