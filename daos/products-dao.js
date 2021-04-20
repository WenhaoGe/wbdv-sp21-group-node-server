const productsModel = require("../db/products/products-model")
const mongoose = require("mongoose");

const findProductsForSeller = (seller) => {
    return productsModel.find({seller})
}

const createProduct = (product) => {
    return productsModel.create(product)
}

const findAllProducts = () => productsModel.find()

const updateProduct = (productId, product) => {
    return productsModel.updateOne({_id: mongoose.Types.ObjectId(productId)},
                                   {$set: {quantity: product.quantity, price: product.price}})
}

const deleteProduct = (productId) => {
    return productsModel.deleteOne({_id: mongoose.Types.ObjectId(productId)})
}

module.exports = {
    findProductsForSeller,
    createProduct,
    findAllProducts,
    updateProduct,
    deleteProduct
}
