const productsModel = require("../db/products/products-model")
const mongoose = require("mongoose");

const findProductsForSeller = (seller) => {
    return productsModel.find({seller})
}

const createProduct = (product) => {
    return productsModel.create(product)
}

const updateProduct = (productId, product) => {
    return productsModel.updateOne({_id: mongoose.Types.ObjectId(productId)},
                                   {$set: {quantity: product.quantity, price: product.price}})
}

const deleteProduct = (productId) => {
    return productsModel.deleteOne({_id: mongoose.Types.ObjectId(productId)})
}

const findProductsByDrink = (idDrink) =>
    productsModel.aggregate([
                                {
                                    '$lookup': {
                                        'from': 'drinks',
                                        'localField': 'drink',
                                        'foreignField': '_id',
                                        'as': 'drink'
                                    }
                                },
                                {
                                    '$match': {
                                        'drink.idDrink': idDrink
                                    }
                                },
                                {'$unwind': '$drink'},
                                {
                                    '$lookup': {
                                        'from': 'users',
                                        'localField': 'seller',
                                        'foreignField': '_id',
                                        'as': 'seller'
                                    }
                                },
                                {'$unwind': '$seller'},])

const findAllStores = () =>
    productsModel.find().populate("seller")

const findAllProducts = () =>
    productsModel.find().populate("drink").populate("seller")

module.exports = {
    findProductsForSeller,
    createProduct,
    findAllProducts,
    updateProduct,
    deleteProduct,
    findProductsByDrink,
    findAllStores
}
