const ordersService = require('../services/order-service')

module.exports = (app) => {
    const finishCurrentOrder = (req, res) => {
        const buyerId = req.body._id
        ordersService.finishCurrentOrder(buyerId)
            .then((status)=> {
                res.send(status)
            })
            .catch(error => {
                console.log(error)
                res.sendStatus(403)
            })
    }

    const findOrdersByBuyerId = (req, res) => {
        const buyerId = req.params.buyerId
        ordersService.findOrdersByBuyerId(buyerId)
            .then(orders => {
                res.json(orders)
            })
    }
    app.get('/api/orders/:buyerId', findOrdersByBuyerId)
    app.post('/api/orders/finishOrder', finishCurrentOrder)
}