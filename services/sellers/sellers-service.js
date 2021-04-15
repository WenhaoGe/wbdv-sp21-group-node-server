const sellersDAO = require("../../daos/sellers-dao")

const createASeller = (newSeller) => {
    return sellersDAO.createASeller(newSeller)
}

module.exports = {
    createASeller
}