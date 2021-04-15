const buyersModel = require("../db/buyers/buyers-model")

const createABuyer = (newBuyer) => {
    return buyersModel.create(newBuyer)
}

module.exports = {
    createABuyer
}