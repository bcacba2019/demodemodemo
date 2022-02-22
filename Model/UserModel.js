const Mongoose = require("Mongoose");

const userSchema = Mongoose.Schema({
    name:String,
    email:String,
    password:String
})

UserModel = Mongoose.model("user",userSchema,"user")

module.exports = UserModel