/*const express = require("express");
const User = require("../models/userModel");

    // ********* SIGN UP ************
// Create new user (POST)
async function createUser(req, res) {
    console.log("Request Received");
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        console.log("Registered successfully");
        res.status(201).send(savedUser);
    } catch (err) {
        console.error("Registration failed:", err);
        res.status(500).send({ error: "Registration failed" });
    }
}

    // ********* Sign In ************
// Get a user by email and password
async function getUser(req, res) {
    const email = req.params.email;
    const password = req.params.password;
    console.log("Request Received");

    try {
        const user = await User.findOne({ Email: email, PIN: password });
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
    createUser,
    getUser,
};*/
