const buyersModel = require("../db/buyers/buyers-model")

const createABuyer = (newBuyer) => buyersModel.create(newBuyer)

module.exports = {
    createABuyer
}