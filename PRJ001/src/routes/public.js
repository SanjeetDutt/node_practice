// Global Import
const express = require("express")

// Local Import
const productController = require("../controllers/ProductController")

const route = express.Router();

route.get("/product",async (req, res, next) => {
    console.log("GETTING ALL PRODUCTS")
    return res.send(
        (await productController.getAllProducts())
            .map(result=>{
                console.log(result)
                return {
                    id: result.id,
                    name: result.name,
                    price: result.price,
                    stock: result.stock
                }
            })
    )
})

route.get("/product/:productId",async (req, res, next) => {
    console.log("GETTING PRODUCT BY " + req.params.productId)
    const product = await productController.getProduct(req.params.productId)
    return res.send(product)
})

module.exports = route