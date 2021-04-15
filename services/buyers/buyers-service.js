const buyersDAO = require("../../daos/buyers-dao")

const createABuyer = (newBuyer) => {
    return buyersDAO.createABuyer(newBuyer)
}

module.exports = {
    createABuyer
}