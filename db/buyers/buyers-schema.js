const mongoose = require("mongoose")

const buyersSchema = mongoose.Schema({
    generic_id: {type: mongoose.Schema.Types.ObjectId, ref: "usersModel"},
    // add more if needed!
    // e.x. fakeCardInfo?
    //
}, {collection: "buyers"})

module.exports = buyersSchema