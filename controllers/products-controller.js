const productsService = require("../services/products-service")

module.exports = (app) => {
    const findProductsForSeller = (req, res) => {
        const sellerId = req.params.sellerId
        productsService.findProductsForSeller(sellerId)
            .then((products) => {
                res.json(products)
            })
    }

    const createProduct = (req, res) => {
        const product = req.body
        productsService.createProduct(product)
            .then((actualProduct) => {
                res.json(actualProduct)
            })
    }

    const findAllProducts = (req, res) => {
        return productsService.findAllProduct()
            .then((response) => {
                res.json(response)
            })
    }

    const updateProduct = (req, res) => {
        const product = req.body
        const productId = req.params.productId
        productsService.updateProduct(productId, product)
            .then((status) => {
                res.send(status)
            })
    }

    const deleteProduct = (req, res) => {
        const productId = req.params.productId
        productsService.deleteProduct(productId)
            .then((status)=> {
                res.send(status)
            })
    }

    app.get('/api/products/:sellerId', findProductsForSeller)
    app.post('/api/products', createProduct)
    app.get('/api/products', findAllProducts)
    app.put('/api/products/:productId', updateProduct)
    app.delete('/api/products/:productId', deleteProduct)
}