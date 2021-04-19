const usersDAO = require("../daos/users-dao")

const createUserByRole = (newUser) => {
    switch (newUser.role) {
        case 'Admin':
            const newAdmin = {
                ...newUser,
                title: newUser.title,
                authority: newUser.authority
            }
            return usersDAO.createUser(newAdmin)
        // break
        case 'Buyer':
            const newBuyer = {
                ...newUser,
            }
            return usersDAO.createUser(newBuyer)
        case 'Seller':

            const newSeller = {
                ...newUser,
                storageLocation: newUser.storageLocation,
                storeName: newUser.storeName
            }
            return usersDAO.findSellerByStoreName(newUser.storeName).
                then((found) => {
                    if (found) {

                    } else {
                        return usersDAO.createUser(newSeller)
                    }
            })
    }
}

// implement logic here
const register = (newUser) => {
    console.log(newUser)
    return usersDAO.findUserByUsername(newUser.username)
        .catch(error => console.log(error))
        .then((existingUser) => {
            if (existingUser) {

            } else {
                return createUserByRole(newUser)
            }
        })
}

const login = (credentials) => {
    return usersDAO.findUserByCredentials(credentials.username, credentials.password)
}

const createUser = (user) => {
    return register(user)
}

const findUserById = (userId) => {
    return usersDAO.findUserById(userId)
}

const findAllUsers = () => {
    return usersDAO.findAllUsers()
}

module.exports = {
    register,
    createUser,
    login,
    findUserById,
    findAllUsers
}