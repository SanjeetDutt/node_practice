const express = require("express")
const productController = require("../../controllers/ProductController");
const router = express.Router();

router.get("/",async (req, res, next) => {
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

router.get("/:productId",async (req, res, next) => {
    console.log("GETTING PRODUCT BY " + req.params.productId)
    const product = await productController.getProduct(req.params.productId)
    return res.send(product)
})

module.exports = router