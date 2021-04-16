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
        drinksService.findDrinksByCategory(category)
            .then((drinks) => {
                res.session(drinks)
            })
    }

    app.get('/api/drinks/categories', findDrinksAllCategory)
    app.get('/api/drinks/category/:category', findDrinksByCategory)
}