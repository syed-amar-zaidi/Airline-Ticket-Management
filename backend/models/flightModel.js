const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    Airline: String,
    FlightNumber: String,
    DepartureAirport: String,
    ArrivalAirport: String,
    Destination: String,
    DepartureDate: Date,
    ArrivalDate: Date,
    Class: {
        type: String,
        enum: ['Economy', 'Business', 'First Class'],
        default: 'Economy'
    },
    AvailableSeats: Number,
    Price: Number,
}, { timestamps: true });

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
