const mongoose = require("mongoose")
const drinkSchema = require("../drinks/drinks-schema")

const productsSchema = mongoose.Schema({
    drink: drinkSchema,
    quantity: String,
    price: String,
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsersModel'
    }
}, {collection : 'products'})

module.exports = productsSchema