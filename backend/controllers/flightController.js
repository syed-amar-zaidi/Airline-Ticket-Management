const Flight = require("../models/flightModel");

// Add Flight
async function addFlight(req, res) {
  console.log("Flight Add Request Received");
  try {
    const flight = new Flight(req.body); // Create a new flight instance from the request body
    const savedFlight = await flight.save(); // Save the new flight to the database
    console.log("Flight added successfully");
    res.status(201).send(savedFlight); // Respond with the saved flight details
  } catch (err) {
    console.error("Flight addition failed:", err);
    res.status(500).send({ error: "Flight addition failed" }); // Handle errors if the flight addition fails
  }
}

// Get Flight
async function getFlight(req, res) {
  try {
    const flights = await Flight.find().exec();
    if (!flights || flights.length === 0) {
      return res.status(404).json({ message: "No flights found" });
    }
    res.status(200).json(flights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


// Update Flight
async function updateFlight(req, res) {
  try {
    const { id } = req.params;
    var flight = {
      // Define the properties to update based on the request body
      Airline: req.body.Airline,
      FlightNumber: req.body.FlightNumber,
      DepartureAirport: req.body.DepartureAirport,
      ArrivalAirport: req.body.ArrivalAirport,
      Destination: req.body.Destination,
      DepartureDate: req.body.DepartureDate,
      ArrivalDate: req.body.ArrivalDate,
      Class: req.body.Class,
      AvailableSeats: req.body.AvailableSeats,
      Price: req.body.Price,
      // Add more properties as needed for flight details
    };
    const updateFlight = await Flight.findByIdAndUpdate(
      id,
      { $set: flight },
      { new: true }
    );
    res.status(201).json(updateFlight);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Deactivate Flight
async function deactivateFlight(req, res) {
  try {
    const { id } = req.params;
    const updatedFlight = await Flight.findByIdAndUpdate(
      id,
      { Active: false }, // Updating the 'Active' status of the flight to false
      { new: true }
    );
    if (!updatedFlight) {
      return res.status(404).json({ error: "Flight not found" });
    }
    res.json(updatedFlight); // Send the updated flight data in the response
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  addFlight,
  getFlight,
  updateFlight,
  deactivateFlight,
};
