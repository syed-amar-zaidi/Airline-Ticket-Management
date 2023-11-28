const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    passengerName: String,
      flightNumber: String,
      AvailableSeats: Number,
      bookingDate: Date,
      departureDate: Date,
      Active: Boolean,
      status: {
        type: String,
        enum: ['Confirmed', 'Pending', 'Cancelled']
      },
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
