const ordersDAO = require("../daos/orders-dao")

const findOrdersByBuyerId = (buyerId) => {
    return ordersDAO.findOrdersByBuyerId(buyerId)
}

const finishCurrentOrder = (buyerId) => {
    return ordersDAO.finishCurrentOrder(buyerId)
}

module.exports = {
    findOrdersByBuyerId,
    finishCurrentOrder
}