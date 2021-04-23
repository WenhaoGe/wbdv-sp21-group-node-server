const drinksModel = require("../db/drinks/drinks-model")

const findAllDrinks = () => {
    return drinksModel.find()
}
const findDrinkByName = (drinkName) => {
    return drinksModel.find({nameDrink: drinkName})
}
// const findDrinkById = (drinkID) => drinksModel.findById(drinkID)
const findDrinkById = (drinkID) => {
    return drinksModel.find({idDrink: drinkID})
}

const createADrink = (drink) => {
    return drinksModel.create(drink)
}

const findDrinksAllCategory = () => {
    return drinksModel.distinct("category")
}

const findDrinksByCategory = (cate) => {
    return drinksModel.find({category: cate})
}

module.exports = {
    findAllDrinks,
    findDrinkById,
    findDrinkByName,
    createADrink,
    findDrinksAllCategory,
    findDrinksByCategory
}
