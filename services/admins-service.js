const adminDAO = require("../daos/admins-dao")

const createAAdmin = (newAdmin) => adminDAO.createAAdmin(newAdmin)

module.exports = {
    createAAdmin
}