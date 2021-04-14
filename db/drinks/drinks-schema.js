const mongoose = require("mongoose")

const drinksSchema = mongoose.Schema({
                                         drinkId: String,
                                         drinkName: String,
                                         category: String,
                                         alcoholic: String,
                                         imageURL: String,
                                         ingredients: [String]
                                     }, {collection: "drinks"})

module.exports = drinksSchema