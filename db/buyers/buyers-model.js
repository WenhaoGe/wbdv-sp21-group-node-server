const mongoose = require("mongoose")
const buyersSchema = require("./buyers-schema")

const buyersModel = mongoose
    .model("buyersModel", buyersSchema)

module.exports = buyersModel