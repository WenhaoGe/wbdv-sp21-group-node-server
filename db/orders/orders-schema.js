const mongoose = require("mongoose")
const productSchema = require("../products/products-schema")

const ordersSchema = mongoose.Schema({
    products: [{product: productSchema, quantity: Number}],
    finishDate: Date,
    totalPrice: Number,
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsersModel'
    }
}, {collection : 'orders'})

module.exports = ordersSchema