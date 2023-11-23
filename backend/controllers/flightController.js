const Flight = require("../models/flightModel");

// Create Flight
async function createFlight(req, res) {
    console.log("Request Received");
    try {
        const flight = new Flight(req.body);
        const savedflight = await flight.save();
        console.log("Registered successfully");
        res.status(201).send(savedflight);
    } catch (err) {
        console.error("Registration failed:", err);
        res.status(500).send({ error: "Registration failed" });
    }
}

// Update Flight 
async function updateFlight(req, res) {
    try {
        const { id } = req.params;
        const updateFlight = await Flight.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).json(updateFlight);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Search for flights
async function searchFlights(req, res) {
    try {
        const { destination, departureDate, preferredClass } = req.query;

        // Create a query object to dynamically construct the search query
        const query = {};

        // Add criteria to the query object based on available parameters
        if (destination) {
            query.Destination = destination;
        }

        if (departureDate) {
            query.DepartureDate = new Date(departureDate); // Convert string to Date object
        }

        if (preferredClass) {
            query.Class = preferredClass;
        }

        // Perform the search based on the constructed query
        const flights = await Flight.find(query);

        res.json(flights);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
  createFlight,
  updateFlight,
  searchFlights,
};