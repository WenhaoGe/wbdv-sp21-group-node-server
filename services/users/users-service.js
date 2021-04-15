const usersDAO = require("../../daos/users-dao")
const adminsService = require('../admins/admins-service')
const buyersService = require('../buyers/buyers-service')
const sellersService = require('../sellers/sellers-service')


const createUserByRole = (newUser) => {
    // check user role
    let created = usersDAO.createUser(newUser)
    switch (newUser.role) {
        case 'Admin':
            const newAdmin = {
                generic_id: newUser._id,
                title: newUser.title,
                authority: newUser.authority
            }
            adminsService.createAAdmin(newAdmin).then(()=> {
                return created
            })
            break
        case 'Buyer':
            const newBuyer = {
                generic_id: newUser._id,
            }
            buyersService.createABuyer(newBuyer).then(() => {
                return created
            })
            break
        case 'Seller':
            const newSeller = {
                generic_id: newUser._id,
                storageLocation: newUser.storageLocation,
                storeName: newUser.storeName
            }
            sellersService.createASeller(newSeller).then(()=>{
                return created
            })
            break
    }
}

// implement logic here
const register = (newUser) => {
    return usersDAO.findUserByUsername(newUser.username)
        .then((user) => {
            if (user) {
            } else {
                return createUserByRole(newUser)
            }
        })
}

const login = (credentials) => {
    return usersDAO.findUserByCredentials(credentials)
        .then((user) => {
            return user
        })
}

const createUser = (user) => {
    return createUserByRole(user)
}


module.exports = {
    register,
    createUser,
    login
}