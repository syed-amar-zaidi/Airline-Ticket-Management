const Bagging = require("../models/baggingModel");

// Add Bagging
async function addBagging(req, res) {
  console.log("Bagging Add Request Received");
  try {
    const bagging = new Bagging(req.body); 
    const savedBagging = await bagging.save(); 
    console.log("Bagging added successfully");
    res.status(201).send(savedBagging); 
  } catch (err) {
    console.error("Bagging addition failed:", err);
    res.status(500).send({ error: "Bagging addition failed" }); 
  }
}

// Get Bagging
async function getBagging(req, res) {
  try {
    const bagging = await Bagging.find().exec();
    if (!bagging || bagging.length === 0) {
      return res.status(404).json({ message: "No Bagging found" });
    }
    res.status(200).json(flights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Update Bagging
async function updateBagging(req, res) {
  try {
    const { id } = req.params;
    var bagging = {
      // Define the properties to update based on the request body
      Bagging: req.body.Bagging,
      PassengerName: req.body.PassengerName,
      FlightNumber: req.body.FlightNumber,
      Weight: req.body.Weight,
      Destination: req.body.Destination,
      Status: req.body.Status,
    };
    const updateBagging = await BAgging.findByIdAndUpdate(
      id,
      { $set: bagging },
      { new: true }
    );
    res.status(201).json(updateBagging);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Deactivate Bagging
async function deactivateBagging(req, res) {
  try {
    const id = req.params.id;
    const updatedBagging = await Bagging.findByIdAndUpdate(
      id,
      { Active: false }, 
      { new: true }
    );
    if (!updatedBagging) {
      return res.status(404).json({ error: "Bagging not found" });
    }
    res.json(updatedBagging); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


module.exports = {
  addBagging,
  getBagging,
  updateBagging,
  deactivateBagging,
};
