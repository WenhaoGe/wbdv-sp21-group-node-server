const mongoose = require("mongoose")
const ordersModel = require("../db/orders/orders-model")
const productsDAO = require("../daos/products-dao")
const usersDAO = require("../daos/users-dao")

const findOrdersByBuyerId = (buyerId) => {
    return ordersModel.find({"buyer._id" : buyerId})
}


const finishCurrentOrder = (buyerId) => {
    let enoughQuantity = true
    usersDAO.findBuyerShoppingCart(buyerId)
        .then((shoppingCart) => {
            let shoppingProductPairs = shoppingCart.products
            shoppingProductPairs.forEach((pair) => {
                enoughQuantity = enoughQuantity && (pair.product.quantity - pair.quantity >= 0)
            })
            if (enoughQuantity) {
                shoppingProductPairs.forEach((pair) => {
                    let product = pair.product
                    product.quantity -= pair.quantity
                    productsDAO.updateProduct(product._id, product)
                })
                return usersDAO.cleanShoppingCart(buyerId)
            } else {
                throw err("Not enough quantity")
            }
        })
}

module.exports = {
    findOrdersByBuyerId,
    finishCurrentOrder
}