const adminsModel = require("../db/admins/admins-model")

const createAAdmin = (newAdmin) => {
    return adminsModel.create(newAdmin)
}

module.exports = {
    createAAdmin
}