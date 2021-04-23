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
            .then((products) => {
                res.json(products)
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

    const findProductsByDrink = (req, res) => {
        const idDrink = req.params.idDrink
        productsService.findProductsByDrink(idDrink)
            .then((products) => {
                res.json(products)
            })
    }

    const findAllStores = (req, res) => {
        productsService.findAllStores()
            .then(stores => {
                res.json(stores)
            })
    }

    app.get('/api/products/:sellerId', findProductsForSeller)
    app.post('/api/products', createProduct)
    app.get('/api/products', findAllProducts)
    app.put('/api/products/:productId', updateProduct)
    app.delete('/api/products/:productId', deleteProduct)
    app.get('/api/drink/:idDrink/products/', findProductsByDrink)
    app.get('/api/products/stores', findAllStores)
}