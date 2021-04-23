const mongoose = require("mongoose")
const drinkSchema = require("../drinks/drinks-schema")

const productsSchema = mongoose.Schema({
    drink: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DrinksModel'
    },
    quantity: Number,
    price: Number,
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsersModel'
    }
}, {collection : 'products'})

module.exports = productsSchema