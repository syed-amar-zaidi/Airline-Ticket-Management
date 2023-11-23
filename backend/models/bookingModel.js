const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    passengerName: String,
      flightNumber: String,
      seatNumber: String,
      bookingDate: Date,
      departureDate: Date,
      Active: Boolean,
      status: {
        type: String,
        enum: ['Confirmed', 'Pending', 'Cancelled'],
        default: 'Pending'
      },
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
