const usersService = require("../services/users/users-service")

module.exports = (app) => {
    const register = (req, res) => {
        const user = req.body
        usersService.register(user)
            .then((actualUser) => {
                req.session["currentUser"] = actualUser
                res.send(actualUser)
            })
    }

    const login = (req, res) => {
        const credentials = req.body;
        usersService.login(credentials)
            .then((user)=> {
                if (user) {
                    req.session["currentUser"] = user
                    res.send(user)
                } else {
                    res.send(403)
                }
            })
    }

    // const createUser = (req, res) => {
    //
    // }

    app.post('/api/register', register)
    app.post('/api/login', login)
    // app.post('/api/users', createUser)
}