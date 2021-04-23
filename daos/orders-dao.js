const mongoose = require("mongoose")
const ordersModel = require("../db/orders/orders-model")
const productsDAO = require("../daos/products-dao")
const usersDAO = require("../daos/users-dao")

const findOrdersByBuyerId = (buyerId) => {
    return ordersModel.find({"_id" : buyerId})
}

const finishCurrentOrder = (buyerId) => {
    let enoughQuantity = true
    return usersDAO.findBuyerShoppingCart(buyerId)
        .then((shoppingCart) => {
            let shoppingProductPairs = shoppingCart.shoppingCart.items
            console.log(shoppingCart)
            shoppingProductPairs.forEach((pair) => {
                enoughQuantity = enoughQuantity && (pair.product.quantity - pair.quantity >= 0)
            })
            if (enoughQuantity) {
                shoppingProductPairs.forEach((pair, index) => {
                    let product = pair.product
                    product.quantity -= pair.quantity
                    productsDAO.updateProduct(product._id, product)
                        .then(() => {
                            let revenue = product.price * pair.quantity
                            usersDAO.updateSellerRevenue(product.seller._id, revenue).then()
                        })
                })
                let newOrder = {
                    products: shoppingCart,
                    finishDate: new Date(),
                    buyer: buyerId
                }
                return ordersModel.create(newOrder).then(()=>usersDAO.cleanShoppingCart(buyerId))
            } else {
                throw error("Not enough quantity")
            }
        })
}

module.exports = {
    findOrdersByBuyerId,
    finishCurrentOrder
}