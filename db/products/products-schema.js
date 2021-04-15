const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    drinks: {ref: "drinksModel"},
    quantity: Number,
    price: Number,
    seller: {ref: "sellersModel"}
                                      })

module.exports = productSchema
