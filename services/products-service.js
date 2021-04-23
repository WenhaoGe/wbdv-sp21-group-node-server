const productsDAO = require("../daos/products-dao")

const findProductsForSeller = (seller) => {
    return productsDAO.findProductsForSeller(seller)
        .populate("drink")
}

const createProduct = (product) => {
    return productsDAO.createProduct(product)
        .then((created)=> created.populate("drink").execPopulate())
}

const findAllProduct = () => productsDAO.findAllProducts()
    .populate("seller", "names storeName")
    .populate("drink")
    .exec()


const updateProduct = (productId, product) => productsDAO.updateProduct(productId, product)

const deleteProduct = (productId) => productsDAO.deleteProduct(productId)

const findProductsByDrink = (idDrink) =>
    productsDAO.findProductsByDrink(idDrink).populate("drink").populate("seller")

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
