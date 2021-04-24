const mongoose = require("mongoose")
const ordersModel = require("../db/orders/orders-model")
const productsDAO = require("../daos/products-dao")
const usersDAO = require("../daos/users-dao")

const findOrdersByBuyerId = (buyerId) => {
    return ordersModel.find({"buyer" : buyerId})
        .populate("products.product.drink")
        .populate('products.product.seller')
}

const finishCurrentOrder = (buyerId) => {
    let enoughQuantity = true
    return usersDAO.findBuyerShoppingCart(buyerId)
        .then((shoppingCart) => {
            let shoppingProductPairs = shoppingCart.shoppingCart.items
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
                            // console.log(pair.quantity, " and ", product.price, ' and ', revenue)
                            // console.log(product.seller._id)
                            usersDAO.updateSellerRevenue(product.seller._id, revenue).exec()
                                // .then((res) => console.log(res))
                        })
                })
                let newOrder = {
                    products: shoppingCart.shoppingCart.items,
                    totalPrice: shoppingCart.shoppingCart.totalPrice,
                    finishDate: new Date(),
                    buyer: buyerId
                }
                return ordersModel.create(newOrder).then(()=>usersDAO.cleanShoppingCart(buyerId))
            } else {
                throw "Not enough quantity"
            }
        })
}

module.exports = {
    findOrdersByBuyerId,
    finishCurrentOrder
}