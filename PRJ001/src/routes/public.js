// Global Import
const express = require("express")

// Local Import
const productController = require("../controllers/ProductController")

const route = express.Router();

route.get("/product",(req,res,next)=>{
    console.log("GETTING ALL PRODUCTS")
    return res.send(productController.getAllProducts())
})

route.get("/product/:productId",(req,res,next)=>{
    console.log("GETTING PRODUCT BY " + req.params.productId)
    return res.send(productController.getProduct(req.params.productId))
})

module.exports = route