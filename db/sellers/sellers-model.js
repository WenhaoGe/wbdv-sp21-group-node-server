const mongoose = require("mongoose")
const sellersSchema = require("./sellers-schema")

const sellersModel = mongoose
    .model("SellersModel", sellersSchema)

module.exports = sellersModel
