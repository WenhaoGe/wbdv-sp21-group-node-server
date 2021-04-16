const drinksModel = require("../db/drinks/drinks-model")

const findAllDrinks = () => {
    return drinksModel.find()
}
const findDrinkByName = (drinkName) => {
    return drinksModel.find({drinkName: drinkName})
}
// const findDrinkById = (drinkID) => drinksModel.findById(drinkID)
const findDrinkById = (drinkID) => {
    return drinksModel.find({drinkID: drinkID})
}

const createADrink = (drink) => {
    return drinksModel.create(drink)
}

const findDrinksAllCategory = () => {
    return drinksModel.distinct("category")
}

const findDrinksByCategory = (category) => {
    return drinksModel.find({category})
}

module.exports = {
    findAllDrinks,
    findDrinkById,
    findDrinkByName,
    createADrink,
    findDrinksAllCategory,
    findDrinksByCategory
}