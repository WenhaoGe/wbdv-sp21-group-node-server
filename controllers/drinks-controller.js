const drinksService = require("../services/drinks-service")

module.exports = (app) => {
    const findDrinksAllCategory = (req, res) => {
        drinksService.findDrinksAllCategory()
            .then((categories)=> {
                res.send(categories)
            })
    }

    const findDrinksByCategory = (req, res) => {
        const category = req.params.category
        console.log(category)
        drinksService.findDrinksByCategory(category)
            .then((drinks) => {
                res.send(drinks)
            })
    }
    const findDrinkByName = (req, res) => {
        const drinkName = req.params.drinkName
        drinksService.findDrinkByName(drinkName)
            .then((drink) => {
                res.send(drink)
            })
    }

    app.get('/api/drinks/categories', findDrinksAllCategory)
    app.get('/api/drinks/categories/:category', findDrinksByCategory)
    app.get('/api/drink/:drinkName', findDrinkByName)
}

