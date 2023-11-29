const mongoose = require('mongoose');

const printableTicketSchema = new mongoose.Schema({
  passenger_id: String,
  flight_id: String,
  ticket_details: Object,
  generated_at: Date,
});

const PrintableTicket = mongoose.model('PrintableTicket', printableTicketSchema);

module.exports = PrintableTicket;
