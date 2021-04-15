const sellersModel = require("../db/sellers/sellers-model")

const createASeller = (newSeller) => {
    return sellersModel.create(newSeller)
}

module.exports = {
    createASeller
}