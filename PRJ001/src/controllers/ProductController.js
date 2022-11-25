const Product = require("../models/Products")

module.exports.addProduct = (name, price, stock) => {
    return Product.create({
        name, price, stock
    })
}

module.exports.updateProduct = async (id, name, price, stock)=>{
    console.log("UPDATING PRODUCT with ID " + id)
    const product = await getProduct(id)

    console.log("product is " + product.getDataValue("name"))

    if(product.getDataValue("name") === null)
        return false

    return Product.update({
        name, price, stock
    },{
        where:{
            id
        }
    })

}

module.exports.deleteProduct = async (id) => {
    const product = await getProduct(id)

    if (product === null)
        return false

    return Product.destroy({
        where:{
            id
        }
    })

}

const getProduct = module.exports.getProduct = (id) => {
    return Product.findByPk(id)
}

module.exports.getAllProducts = () => {
    return Product.findAll()
}