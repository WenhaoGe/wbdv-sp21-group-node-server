const mongoose = require("mongoose")

const sellersSchema = mongoose.Schema({
    // _id is automatically generated
    generic_id: {type: mongoose.Schema.Types.ObjectId, ref: "usersModel"},
    storage_location: {
        addressLineOne: String,
        addressLineTwo: String,
        city: String,
        state: String,
        postalCode: String,
        country: String
    }
})

module.exports = sellersSchema