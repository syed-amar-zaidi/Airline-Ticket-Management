const express = require("express");
const User = require("../models/userModel");

// Airline
async function getAirlineUser(req, res) {
  try {
    const airlineUser = await User.find({
      Role: "Airline",
      Active: true,
    }).exec();

    if (!airlineUser || airlineUser.length === 0) {
      return res.status(404).json({ message: "No airline users found" });
    }

    res.status(200).json(airlineUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Passenger
async function getPassengerUser(req, res) {
  try {
    const passengerUser = await User.find({
      Role: "Passenger",
      Active: true,
    }).exec();

    if (!passengerUser || passengerUser.length === 0) {
      return res.status(404).json({ message: "No passenger users found" });
    }

    res.status(200).json(passengerUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Update User Account
async function updateUser(req, res) {
  try {
    const { id } = req.params;
    var user = {
      Name: req.body.Name,
      Gender: req.body.Gender,
      Email: req.body.Email,
      Password: req.body.Password,
      Contact: req.body.Contact,
    };
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: user },
      { new: true }
    );
    res.status(201).json(updateUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// // Delete User Profile to Deactivate (set Active to false)
// async function deleteUser(req, res) {
//   try {
//     const id = req.params.id;
//     const deleteUser = await User.findByIdAndUpdate(
//       id,
//       { Active: false },
//       { new: true }
//     );
//     res.sendStatus(deleteUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// }

// Deactivate User Profile (set Active to false)
async function deactivateUser(req, res) {
  try {
    const id = req.params.id;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { Active: false },
      { new: true } // To get the updated user data
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(updatedUser); // Send the updated user data in the response
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


module.exports = {
  getAirlineUser,
  getPassengerUser,
  updateUser,
  deactivateUser,
};
