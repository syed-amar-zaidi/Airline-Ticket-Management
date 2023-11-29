const mongoose = require("mongoose");

// Schema
const baggingSchema = new mongoose.Schema({
    PassengerName: String,
    FlightNumber: String,
    Weight: Number,
    Destination: String,
    Status: {
        type: String,
        enum: ["Active", "Inactive", "Pending"]
    }
}, {timestamps: true});

const Bagging = mongoose.model("Bagging", baggingSchema); // Changed model name to 'Bagging'
module.exports = Bagging; // Export the model directly
