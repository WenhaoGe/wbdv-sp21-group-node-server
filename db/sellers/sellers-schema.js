const mongoose = require("mongoose")

const sellersSchema = mongoose.Schema({
    // _id is automatically generated
    generic_id: {type: mongoose.Schema.Types.ObjectId, ref: "usersModel"},
    storageLocation: {
        addressLineOne: String,
        addressLineTwo: String,
        city: String,
        state: String,
        postalCode: String,
        country: String
    }
})

module.exports = sellersSchema