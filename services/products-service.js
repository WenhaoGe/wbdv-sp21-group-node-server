const productsDAO = require("../daos/products-dao")

const findProductsForSeller = (seller) => {
    return productsDAO.findProductsForSeller(seller)
}

const createProduct = (product) => {
    return productsDAO.createProduct(product)
}

const findAllProduct = () => productsDAO.findAllProducts()

const updateProduct = (productId, product) => productsDAO.updateProduct(productId, product)

const deleteProduct = (productId) => productsDAO.deleteProduct(productId)

module.exports = {
    findProductsForSeller,
    createProduct,
    findAllProduct,
    updateProduct,
    deleteProduct
}
