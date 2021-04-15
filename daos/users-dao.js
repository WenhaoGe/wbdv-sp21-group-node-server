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

const findAllUsers = () => {
    return usersModel.find()
}

const findUserById = (userId) => {
    return usersModel.findById(userId)
}

module.exports = {
    createUser,
    findUserByUsername,
    findUserByCredentials,
    findAllUsers,
    findUserById
}