const mongoose = require("mongoose")

const usersSchema = mongoose.Schema({
    // _id is automatically generated
    names: {
        firstName: String,
        middleName: String,
        lastName: String
    },
    username: String,
    password: String,
    role: {type: String, enum: ['Admin', 'Buyer', 'Seller']},
    address: {
        addressLineOne: String,
        addressLineTwo: String,
        city: String,
        state: String,
        postalCode: String,
        country: String
    }
}, {collection: "users"})

module.exports = usersSchema