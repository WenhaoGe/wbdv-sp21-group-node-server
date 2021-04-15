const mongoose = require("mongoose")

const buyersSchema = mongoose.Schema({
    generic_id: {type: mongoose.Schema.Types.ObjectId, ref: "usersModel"},
    deliveryAddress: {
        LineOne: String,
        LineTwo: String,
        city: String,
        state: String,
        postcode: String,
        country: String

    }
    // add more if needed!
    // e.x. fakeCardInfo?
    //
})

module.exports = buyersSchema