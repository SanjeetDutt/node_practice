const Product = require("../models/Products")

const products = {};

const newId = ()=>{
    return Object.keys(products).length + 1
}

const addProduct = (name, price, stock)=>{
    const product = new Product(newId(), name, price, stock)
    products[product.id] = product
    return product
}

const updateProduct = (id, name, price, quantity)=>{
    const product = getProduct(id)

    if(product === null)
        return null

    product.name = name
    product.price = price
    product.quantity = quantity

    return product
}

const deleteProduct = (id)=>{
    const product = getProduct(id)

    if(product === null)
        return false

    delete products[id]
    return true
}

const getProduct = (id)=>{
    if(products[id])
        return products[id]
    return null
}

const getAllProducts = ()=>{
    return products
}

module.exports = {
    addProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getAllProducts,
}