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

const findUsersByRole = (myRole) => {
    return usersModel.find({role: myRole})
}

const findUserById = (userId) => {
    return usersModel.findById(userId)
}

const updateUserInfo = (userId, userInfo) => {
    return usersModel.updateOne({_id: mongoose.Types.ObjectId(userId)}, {$set: userInfo})
}


// For Sellers
const findSellerByStoreName = (storeName) => {
    return usersModel.findOne({storeName})
}

const updateSellerRevenue = (sellerId, revenue) => {
    const sellerOBJId = mongoose.Types.ObjectId(sellerId)
     usersModel.findOne({_id: sellerOBJId}).select('revenue').then((preRevenue) => {
        let prevRevValue = preRevenue.revenue
        let newRev = prevRevValue + revenue
         // console.log("prev is ", prevRevValue, " new is ", newRev)
        usersModel.updateOne({_id: sellerOBJId}, {$set: {revenue: newRev}}).exec()
    })
    // return usersModel.updateOne({_id: mongoose.Types.ObjectId(sellerId)},
    //                             {$set: {revenue: revenue}})
}

// For Buyers

const updateBuyerShoppingCart = (buyerId, shoppingCart) => {
    return usersModel.updateOne({_id: mongoose.Types.ObjectId(buyerId)},
                                {$set: {shoppingCart: shoppingCart}})
}

const findBuyerShoppingCart = (buyerId) => {
    return usersModel.findById(buyerId).select("shoppingCart")
        .populate('shoppingCart.items.product.seller', 'storeName', 'UsersModel')
        .populate('shoppingCart.items.product.drink', '','DrinksModel')
}

const cleanShoppingCart = (buyerId) => {
    return usersModel.updateOne({_id: mongoose.Types.ObjectId(buyerId)},
                                {$set:{shoppingCart: {totalPrice: 0, items: []}}})
}



module.exports = {
    createUser,
    findUserByUsername,
    findUserByCredentials,
    findAllUsers,
    findUserById,
    findUsersByRole,
    findSellerByStoreName,
    findBuyerShoppingCart,
    cleanShoppingCart,
    updateBuyerShoppingCart,
    updateSellerRevenue,
    updateUserInfo
}