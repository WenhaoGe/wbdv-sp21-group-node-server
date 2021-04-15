const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
            orderId: String,
            products: {ref: "productsModel"},
            status: String
                                    })

module.exports = orderSchema
