const usersModel = require("../db/users/users-model")
const mongoose = require("mongoose")

const createUser = (newUser) => {
    return usersModel.create(newUser)
}
const findUserByUsername = (username) => {
    return usersModel.findOne({username})
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

// For Sellers
const findSellerByStoreName = (storeName) => {
    return usersModel.findOne({storeName})
}

// For Buyers

const findBuyerShoppingCart = (buyerId) => {
    return usersModel.findById(buyerId).select("shoppingCart")
}

const cleanShoppingCart = (buyerId) => {
    return usersModel.updateOne({_id: mongoose.Types.ObjectId(buyerId)},
                                {$set:{shoppingCart: []}})
}

const updateBuyerShoppingCart = (buyerId, shoppingCart) => {
    return usersModel.updateOne({_id: mongoose.Types.ObjectId(buyerId)},
                                {$set: {shoppingCart: shoppingCart}})
}

module.exports = {
    createUser,
    findUserByUsername,
    findUserByCredentials,
    findAllUsers,
    findUserById,
    findSellerByStoreName,
    findBuyerShoppingCart,
    cleanShoppingCart,
    updateBuyerShoppingCart
}