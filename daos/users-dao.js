const usersModel = require("../db/users/users-model")

const createAUser = (newUser) => usersModel.create(newUser)
const findUserByUsername = (userName) => usersModel.find({"name": userName})



module.exports = {
    createAUser,
    findUserByUsername
}