// Global imports
const express = require("express")

const route = express.Router();
const productController = require("../controllers/ProductController")

route.post("/product/add",(req,res,next)=>{
    console.log("ADDING NEW PRODUCT " + JSON.stringify(req.body))
    return res.send(
        productController.addProduct(
            req.body.name,
            req.body.price,
            req.body.stock
        )
    )
})

route.put("/product/update/:productId",(req,res,next)=>{
    return res.send(
        productController.updateProduct(
            req.params.productId,
            req.body.name,
            req.body.price,
            req.body.stock
        )
    )
})

route.delete("/product/delete/:productId",(req,res,next)=>{
    return res.send(
        productController.deleteProduct(req.params.productId)
    )
})

module.exports = route