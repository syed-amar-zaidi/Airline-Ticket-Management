const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    Airline: String,
    FlightNumber: String,
    DepartureAirport: String,
    ArrivalAirport: String,
    Destination: String,
    DepartureDate: Date,
    ArrivalDate: Date,
    Active: Boolean, 
    FlightClass: {
        type: String,
        enum: ['Economy', 'Business', 'First Class']
    },
    AvailableSeats: Number,
    Price: Number,
}, { timestamps: true });

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
