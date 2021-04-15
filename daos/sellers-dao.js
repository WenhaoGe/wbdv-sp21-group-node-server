const sellersModel = require("../db/sellers/sellers-model")

const createASeller = (newSeller) => sellersModel.create(newSeller)

module.exports = {
    createASeller
}