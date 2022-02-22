const express = require('express')
const Router = express.Router()
const UserModel = require("../Model/UserModel")

Router.post("/", async (req, res) => {
    //console.log("Registration Called")
    const userdata = req.body;
    UserModel.create({ name: userdata.name, email: userdata.email, password: userdata.password }, (err, data) => {
        if (!err) {
            console.log("Registration call");
            res.send({ message: "Registration call" })
        }
        else {
            console.log("Registration not call");
            res.send({ message: "Registration not call" })
        }
    })
})

Router.put("/", async (req, res) => {
    const userdata = req.body;
    UserModel.findOne(userdata, (err, data) => {
        if (data) {
            console.log("Login Successfully..");
            res.send({ message: "Login Successfull..!" })
        } else {
            console.log("Login not successfully..");
            res.send({ message: "Login not unsuccessfully..." })
        }
    })
})

module.exports = Router