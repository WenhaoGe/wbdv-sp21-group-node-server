const mongoose = require("mongoose")

const productSchema = require("./products-schema")

const productsModel = mongoose.model("productModel", productSchema)

module.exports = productsModel
