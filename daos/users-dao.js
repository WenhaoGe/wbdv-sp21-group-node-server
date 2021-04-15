const usersModel = require("../db/users/users-model")

const createAUser = (newUser) => usersModel.create(newUser)

module.exports = {
    createAUser
}