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
            // console.log(currentUser)
            const currentUerId = currentUser._id
            usersService.findUserById(currentUerId).then((profile)=> {
                res.send(profile)
            })
            // res.send(currentUser)
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
    }
    const findUsersByRole = (req, res) => {
        const role = req.params.role
        usersService.findUsersByRole(role)
            .then(users => res.send(users))
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

    const updateUserInfo = (req, res) => {
        const receive = req.body
        const userId = receive.userId
        const userInfo = receive.userProfile

        const currentUser = req.session["currentUser"]
        if (currentUser._id === userId) {
            usersService.updateUserInfo(userId, userInfo)
                .then((updatedProfile)=> {
                    res.json(updatedProfile)
                })
        } else {
            res.sendStatus(403)
        }
    }
    const updateUserInfoWithWriteAuth = (req, res) => {
        const receive = req.body
        const userId = receive.userId
        const userInfo = receive.userProfile

        usersService.updateUserInfo(userId, userInfo)
            .then((updatedProfile)=> {
                res.json(updatedProfile)
            })

    }
    const findPublicProfileById = (req, res) => {
        const userId = req.params.userId
        const currentUser = req.session["currentUser"]
        if (!currentUser || currentUser._id !== userId) {
            usersService.findUserById(userId)
                .then(user => {
                    const picked = (({names, username, role, address}) => ({names, username, role, address}))(user);
                    res.send(picked);
                })

        } else {
            res.sendStatus(403)
        }
    }

    app.post('/api/register', register)
    app.post('/api/login', login)
    app.post('/api/profile', profile)
    app.put('/api/profile', updateUserInfo)
    app.put('/api/profile/write-auth', updateUserInfoWithWriteAuth)
    app.post('/api/logout', logout)
    app.get('/api/users/:userId', findUserById)
    app.get('/api/users/role/:role', findUsersByRole)
    app.get('/api/profile/:userId', findPublicProfileById)
    app.get('/api/users', findAllUsers)
    app.post('/api/buyer/:buyerId/shoppingCart', updateBuyerShoppingCart)
    app.get('/api/buyer/:buyerId/shoppingCart', findBuyerShoppingCart)
}