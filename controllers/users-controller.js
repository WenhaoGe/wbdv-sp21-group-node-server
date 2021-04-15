const usersService = require("../services/users-service")
const adminsService = require("../services/admins-service")
const buyersService = require("../services/buyers-service")
const sellersService = require("../services/sellers-service")

module.exports = (app) => {
    const register = (req, res) => {
        
    }

    app.post('/api/register', register)
}