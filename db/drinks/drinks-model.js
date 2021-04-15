const drinksSchema = require("./drinks-schema")

const mongoose = require('mongoose')

const drinksModel = mongoose
    .model("DrinksModel", drinksSchema)

module.exports = drinksModel