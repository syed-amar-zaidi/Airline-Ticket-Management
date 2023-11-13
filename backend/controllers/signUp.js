const express = require("express");
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

module.exports = {
    createUser,
};