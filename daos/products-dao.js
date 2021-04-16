const productsModel = require("../db/products/products-model")

const findProductsForSeller = (seller) => {
    return productsModel.find({seller})
}

const createProduct = (product) => {
    return productsModel.create(product)
}

module.exports = {
    findProductsForSeller,
    createProduct
}