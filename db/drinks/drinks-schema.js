const mongoose = require("mongoose")

const drinksSchema = mongoose.Schema({
                                         idDrink: String,
                                         nameDrink: String,
                                         category: String,
                                         alcoholic: String,
                                         imageURL: String,
                                         ingredients: [String]
                                     }, {collection: "drinks"})

module.exports = drinksSchema