const drinksService = require("../services/drinks-service")

module.exports = (app) => {
    const findDrinksAllCategory = (req, res) => {
        drinksService.findDrinksAllCategory()
            .then((categories)=> {
                res.send(categories)
            })
    }

    const findDrinksByCategory = (req, res) => {
        const category = req.body
        drinksService.findDrinksByCategory(category.category)
            .then((drinks) => {
                res.send(drinks)
            })
    }

    app.get('/api/drinks/categories', findDrinksAllCategory)
    app.post('/api/drinks/category', findDrinksByCategory)
}