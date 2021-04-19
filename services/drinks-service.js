const drinksDAO = require("../daos/drinks-dao")

const findAllDrinks = () => {
    return drinksDAO.findAllDrinks()
}

const findDrinkById = (drinkId) => {
    return drinksDAO.findDrinkById(drinkId)
}

const findDrinksByCategory = (category) => {
    return drinksDAO.findDrinksByCategory(category)
}

const findDrinksAllCategory = () => {
    return drinksDAO.findDrinksAllCategory()
}

module.exports = {
    findDrinksByCategory,
    findDrinksAllCategory,
    findAllDrinks,
    findDrinkById
}
