const adminDAO = require("../../daos/admins-dao")

const createAAdmin = (newAdmin) => {
    return adminDAO.createAAdmin(newAdmin)
}

module.exports = {
    createAAdmin
}