const productsModel = require("../db/products/products-model")

const findProductsForSeller = (seller) => {
    return productsModel.find({seller})
}

module.exports = {
    findProductsForSeller
}