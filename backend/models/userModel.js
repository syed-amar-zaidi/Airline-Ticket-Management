const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    DateOfBirth:String,
    Gender: String,
    Email: String,
    Password:  String,
    Contact: String,
    Active: String,
    Role: {
        type: String,
        enum: ["Passenger", "Airline"]
    },
}, {timestamps: true});

const User = mongoose.model("User", userSchema); // Changed model name to 'User'
module.exports = User; // Export the model directly