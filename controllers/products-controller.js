const productsService = require("../services/products-service")

module.exports = (app) => {
    const findProductsForSeller = (req, res) => {
        const sellerId = req.params.sellerId
        productsService.findProductsForSeller(sellerId)
            .then((products) => {
                res.send(products)
            })
    }

    app.get('/api/products/:sellerId', findProductsForSeller)
}