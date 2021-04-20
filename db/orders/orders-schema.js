const mongoose = require("mongoose")
const productSchema = require("../products/products-schema")

const ordersSchema = mongoose.Schema({
    products: [{product: productSchema, quantity: Number}],
    finishDate: Date,
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsersModel'
    }
}, {collection : 'Products'})

module.exports = ordersSchema