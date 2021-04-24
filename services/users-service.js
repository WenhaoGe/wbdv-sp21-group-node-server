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
                shoppingCart: { totalPrice: 0, items:[]}
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
    // console.log(newUser)
    if (newUser.role === "Seller") {
        return usersDAO.findSellerByStoreName(newUser.storeName)
            .then((existingSeller => {
                if (existingSeller) {
                    if (existingSeller.name === newUser.name) {

                    }
                } else {
                    return createUserByRole(newUser)
                }
            }))
    } else {
        return usersDAO.findUserByUsername(newUser.username)
            .catch(error => console.log(error))
            .then((existingUser) => {
                if (existingUser) {

                } else {
                    return createUserByRole(newUser)
                }
            })
    }
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

const updateBuyerShoppingCart = (buyerId, shoppingCart) =>
    usersDAO.updateBuyerShoppingCart(buyerId, shoppingCart)

const findBuyerShoppingCart = (buyerId) =>
    usersDAO.findBuyerShoppingCart(buyerId)

const updateUserInfo = (userId, userInfo) =>
    usersDAO.updateUserInfo(userId, userInfo)

module.exports = {
    register,
    createUser,
    login,
    findUserById,
    findAllUsers,
    updateBuyerShoppingCart,
    findBuyerShoppingCart,
    updateUserInfo
}