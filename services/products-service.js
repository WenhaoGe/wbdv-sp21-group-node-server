const productsDAO = require("../daos/products-dao")

const findProductsForSeller = (seller) => {
    return productsDAO.findProductsForSeller(seller).populate('drink')
}

const createProduct = (product) => {
    return productsDAO.createProduct(product)
}

const findAllProduct = () => productsDAO.findAllProducts()

const updateProduct = (productId, product) => productsDAO.updateProduct(productId, product)

const deleteProduct = (productId) => productsDAO.deleteProduct(productId)

const findProductsByDrink = (idDrink) =>
    productsDAO.findProductsByDrink(idDrink)

const findAllStores = () =>
    productsDAO.findAllStores()

module.exports = {
    findProductsForSeller,
    createProduct,
    findAllProduct,
    updateProduct,
    deleteProduct,
    findProductsByDrink,
    findAllStores
}
