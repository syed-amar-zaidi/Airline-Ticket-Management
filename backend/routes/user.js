const express = require("express");
const router = express.Router();
const signin = require("../controllers/signIn");
const signup = require("../controllers/signUp"); 
const profile = require("../controllers/userprofile");

// Create new users
router.post("/users/signup", signup.createUser);

// Get a user by email and password
router.get("/users/signin/:email/:password", signin.getUser);

// Get User Profile
router.get("/users/profile/:id", profile.getUserProfile);

// Update User Profile
router.put("/users/profile/:id", profile.updateUserProfile);

// Delete User Account
router.delete("/users/profile/:id", profile.deleteUserProfile);

module.exports = router;
