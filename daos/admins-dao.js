const adminsModel = require("../db/admins/admins-model")

const createAAdmin = (newAdmin) => adminsModel.create(newAdmin)

module.exports = {
    createAAdmin
}