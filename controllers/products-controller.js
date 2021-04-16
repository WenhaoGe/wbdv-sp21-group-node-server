const productsService = require("../services/products-service")

module.exports = (app) => {
    const findProductsForSeller = (req, res) => {
        const sellerId = req.params.sellerId
        productsService.findProductsForSeller(sellerId)
            .then((products) => {
                res.send(products)
            })
    }

    const createProduct = (req, res) => {
        const product = req.body
        productsService.createProduct(product)
            .then((actualProduct) => {
                res.send(actualProduct)
            })
    }

    app.get('/api/products/:sellerId', findProductsForSeller)
    app.post('/api/products', createProduct)
}