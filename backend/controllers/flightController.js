const Flight = require("../models/flightModel");
const flightAudit = require("./flightAuditControllers");

// Add Flight
async function addFlight(req, res) {
  console.log("Flight Add Request Received");
  try {
    const flight = new Flight(req.body); // Create a new flight instance from the request body
    const savedFlight = await flight.save(); // Save the new flight to the database
    // Create Insert Audit
    flightAudit(flight._id,"INSERT","-",flight);
    //console.log("Flight added successfully");
    res.status(201).send(savedFlight); // Respond with the saved flight details
  } catch (err) {
    //console.error("Flight addition failed:", err);
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
    const oldValue = await flightModel.find({_id:id});
    var flight = {
      // Define the properties to update based on the request body
      Airline: req.body.Airline,
      FlightNumber: req.body.FlightNumber,
      DepartureAirport: req.body.DepartureAirport,
      ArrivalAirport: req.body.ArrivalAirport,
      Destination: req.body.Destination,
      DepartureDate: req.body.DepartureDate,
      ArrivalDate: req.body.ArrivalDate,
      FlightClass: req.body.FlightClass,
      AvailableSeats: req.body.AvailableSeats,
      Price: req.body.Price,
      // Add more properties as needed for flight details
    };
    const updateFlight = await Flight.findByIdAndUpdate(
      id,
      { $set: flight },
      { new: true }
    );
    FlightAudit(id,"UPDATE",oldValue[0],flight);
    res.status(201).json(updateFlight);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Deactivate Flight
async function deactivateFlight(req, res) {
  try {
    const id = req.params.id;
    const oldValue = await flightModel.find({_id:id});
    const updatedFlight = await Flight.findByIdAndUpdate(
      id,
      { Active: false }, // Updating the 'Active' status of the flight to false
      { new: true }
    );
    flightAudit(id,"DELETE",oldValue[0],"-");
    if (!updatedFlight) {
      return res.status(404).json({ error: "Flight not found" });
    }
    res.json(updatedFlight); // Send the updated flight data in the response
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function searchFlight(req, res) {
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

    // Add filter for active flights (assuming 'isActive' field in Flight model)
    query.isActive = true; // Assuming a field 'isActive' marks the flight as active

    // Perform the search based on the constructed query
    const flights = await Flight.find(query);

    res.json(flights);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Handling flight booking
// Handling flight booking
async function bookFlight(req, res) {
  try {
    const { Id } = req.params; // Assuming flightId is passed as a parameter in the URL

    // Find the flight by ID
    const flight = await Flight.findById(Id);
    if (!flight) {
      return res.status(404).json({ error: 'Flight not found' });
    }

    // Perform booking operations here
    // Update availableSeats in the database
    if (flight.availableSeats > 0) {
      flight.availableSeats--;
      await flight.save();
      return res.status(200).json({ message: 'Booking successful', flight });
    } else {
      return res.status(400).json({ error: 'No available seats for this flight' });
    }
  } catch (error) {
    console.error('Error during booking:', error);
    res.status(500).json({ error: error.message });
  }
}




module.exports = {
  addFlight,
  getFlight,
  updateFlight,
  deactivateFlight,
  searchFlight,
  bookFlight,
};
