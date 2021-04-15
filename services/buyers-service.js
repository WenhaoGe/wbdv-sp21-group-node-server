const buyersDAO = require("../daos/buyers-dao")

const createABuyer = (newBuyer) => buyersDAO.createABuyer(newBuyer)

module.exports = {
    createABuyer
}