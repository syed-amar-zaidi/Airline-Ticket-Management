const mongoose = require('mongoose');

const flightAuditSchema = new mongoose.Schema({
  flightid: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  oldValue: {
    type: Object,
    required: true,
  },
  newValue: {
    type: Object,
    required: true,
  },
},
{ timestamps: true }
);

const Flight = mongoose.model('flightaudit', flightAuditSchema);

module.exports = Flight;