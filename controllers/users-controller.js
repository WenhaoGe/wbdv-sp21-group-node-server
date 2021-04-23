const usersService = require("../services/users-service")
// const usersDAO = require("../daos/users-dao")

module.exports = (app) => {
    const register = (req, res) => {
        const user = req.body
        usersService.register(user)
            .then((actualUser) => {
                if (actualUser) {
                    req.session["currentUser"] = actualUser
                    res.send(actualUser)
                } else {
                    res.sendStatus(403)
                }
            })
    }

    const login = (req, res) => {
        const credentials = req.body;
        usersService.login(credentials)
            .then((user) => {
                if (user) {
                    req.session["currentUser"] = user
                    res.send(user)
                } else {
                    res.sendStatus(403)
                }
            })
    }

    const profile = (req, res) => {
        const currentUser = req.session["currentUser"]
        if (currentUser) {
            res.send(currentUser)
        } else {
            res.sendStatus(403)
        }
    }

    const logout = (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }

    const findUserById = (req, res) => {
        const Id = req.params.userId
        usersService.findUserById(Id)
            .then((user) => {
                res.send(user)
            })
    }

    const findAllUsers = (req, res) => {
        usersService.findAllUsers()
            .then((actualUsers) => {
                res.send(actualUsers)
            })
        // res.send(usersService.findAllUsers())
    }

    // for Buyer
    const updateBuyerShoppingCart = (req, res) => {
        const shoppingCart = req.body
        const buyerId = req.params.buyerId
        usersService.updateBuyerShoppingCart(buyerId, shoppingCart)
            .then((status)=> {
                res.send(status)
            })
    }

    const findBuyerShoppingCart = (req, res) => {
        const buyerId = req.params.buyerId
        usersService.findBuyerShoppingCart(buyerId)
            .then((shoppingCart) => {
                res.json(shoppingCart)
            })
    }

    app.post('/api/register', register)
    app.post('/api/login', login)
    app.post('/api/profile', profile)
    app.post('/api/logout', logout)
    app.get('/api/users/:userId', findUserById)
    app.get('/api/users', findAllUsers)
    app.post('/api/buyer/:buyerId/shoppingCart', updateBuyerShoppingCart)
    app.get('/api/buyer/:buyerId/shoppingCart', findBuyerShoppingCart)

}