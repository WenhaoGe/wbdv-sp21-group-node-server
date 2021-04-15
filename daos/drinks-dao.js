const drinksModel = require("../db/drinks/drinks-model")

const findAllDrinks = () => drinksModel.find()
const findDrinkByName = (drinkName) => drinksModel.find({"drinkName": drinkName})
// const findDrinkById = (drinkID) => drinksModel.findById(drinkID)
const findDrinkById = (drinkID) => drinksModel.find({"drinkID": drinkID})
const createADrink = (drink) => drinksModel.create(drink)

module.exports = {
    findAllDrinks,
    findDrinkById,
    findDrinkByName,
    createADrink
}

