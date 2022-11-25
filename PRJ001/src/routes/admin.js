// Global imports
const express = require("express")

const route = express.Router();
const productController = require("../controllers/ProductController")
const userController = require("../controllers/UserController")

route.post("/product/add",async (req, res, next) => {
    console.log("ADDING NEW PRODUCT " + JSON.stringify(req.body))
    const product = await productController.addProduct(
        req.body.name,
        req.body.price,
        req.body.stock
    )
    return res.send(product)
})

route.put("/product/update/:productId",async (req, res, next) => {
    console.log("Update existing product")
    const product = await productController.updateProduct(
        req.params.productId,
        req.body.name,
        req.body.price,
        req.body.stock
    )

    return res.send(product)
})

route.delete("/product/delete/:productId",async (req, res, next) => {
    console.log("delete product")
    const result = await productController.deleteProduct(req.params.productId)
    return res.send(result)
})

route.post("/user",async (req,res,next)=>{
    console.log("ADDING NEW USER")
    const result = await userController.addUser(
        req.body.name,
        req.body.email,
        req.body.role,
    )

    return res.send(result)
})

module.exports = route