const mongoose = require("mongoose")
const adminsSchema = mongoose.Schema({
    // _id is automatically generated
    generic_id: {type: mongoose.Schema.Types.ObjectId, ref: "usersModel"},
    title: String,
    authority: String // [READ, WRITE, ALL]? or enum: [] you can choose and update
})

module.exports = adminsSchema