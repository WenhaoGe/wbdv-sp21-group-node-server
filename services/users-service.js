const usersDAO = require("../daos/users-dao")

const createAUser = (newUser) => usersDAO.createAUser(newUser)
const findUserByUserName = (userName) => usersDAO.findUserByUsername(userName)

module.exports = {
    createAUser,
    findUserByUserName
}