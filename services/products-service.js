const productsDAO = require("../daos/products-dao")

const findProductsForSeller = (seller) => {
    return productsDAO.findProductsForSeller(seller)
}

const createProduct = (product) => {
    return productsDAO.createProduct(product)
}

module.exports = {
    findProductsForSeller,
    createProduct
}