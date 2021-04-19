const productsDAO = require("../daos/products-dao")

const findProductsForSeller = (seller) => {
    return productsDAO.findProductsForSeller(seller)
}

const createProduct = (product) => {
    return productsDAO.createProduct(product)
}

const findAllProduct = () => productsDAO.findAllProducts()

module.exports = {
    findProductsForSeller,
    createProduct,
    findAllProduct
}
