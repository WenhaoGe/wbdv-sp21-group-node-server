const usersModel = require("../db/users/users-model")

const createAUser = (newUser) => usersModel.create(newUser)
const findUserByUsername = (username) => usersModel.findOne({username: username})

const findUserByC

module.exports = {
    createAUser,
    findUserByUsername
}