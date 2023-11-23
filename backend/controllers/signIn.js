const express = require("express");
const User = require("../models/userModel");

   // ********* Sign In ************
// Get a user by email and password
async function getUser(req, res) {
    const email = req.params.email;
    const password = req.params.password;
    console.log("Request Received");

    try {
        const user = await User.findOne({ Email: email, PIN: password , Active:true});
        if (user) {
            console.log("User found");
            res.status(200).send(user);
        } else {
            console.log("User not found");
            res.status(404).send({ error: "User not found" });
        }
    } catch (err) {
        console.error("Error fetching user:", err);
        res.status(500).send({ error: "Error fetching user" });
    }
}

module.exports = {
    getUser,
};