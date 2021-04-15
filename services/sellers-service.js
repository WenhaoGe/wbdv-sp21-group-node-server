const sellersDAO = require("../daos/sellers-dao")

const createASeller = (newSeller) => sellersDAO.createASeller(newSeller)

module.exports = {
    createASeller
}