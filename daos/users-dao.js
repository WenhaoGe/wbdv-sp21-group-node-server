const usersModel = require("../db/users/users-model")

const createUser = (newUser) => {
    return usersModel.create(newUser)
}
const findUserByUsername = (username) => {
    return usersModel.findOne({username: username})
}

const findUserByCredentials = (username, password) => {
    return usersModel.findOne({username: username, password: password})
}

module.exports = {
    createUser,
    findUserByUsername,
    findUserByCredentials
}