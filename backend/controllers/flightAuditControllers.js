const flightAuditModel = require("../models/flightAuditModel.js");

const flightAudit = async (flightid, action, oldValue, newValue) => {
  const flight = new flightAuditModel({ flightid, action, oldValue, newValue });
  await flight.save();
};

module.exports = { flightAudit };
