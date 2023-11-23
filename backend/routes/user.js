const express = require("express");
const router = express.Router();
const signin = require("../controllers/signIn");
const signup = require("../controllers/signUp"); 
const profile = require("../controllers/userprofile");
const flightControllers = require("../controllers/flightController");
const bookingControllers = require("../controllers/bookingController");
const users = require("../controllers/userControllers")
//const ticketControllers = require("../controllers/ticketController");

// Create new users
router.post("/users/signup", signup.createUser);
// Get a user by email and password
router.get("/users/signin/:email/:password", signin.getUser);
// Get user of role Airline
router.get("/users/getEmployee", users.getAirlineUser);
// Get user of role Passenger
router.get("/users/getPassenger", users.getPassengerUser);
// Update user
router.put("/users/:id", users.updateUser);
// Delete user
router.delete("/users/:id", users.deleteUser);
// Get User Profile
router.get("/users/profile/:id", profile.getUserProfile);
// Update User Profile
router.put("/users/profile/:id", profile.updateUserProfile);
// Delete User Account
router.delete("/users/profile/:id", profile.deleteUserProfile);
// Create Flight 
router.post("/flight", flightControllers.createFlight);
// Update Flight
router.put("/flight/:id", flightControllers.updateFlight);
// Search Flight
router.get("/searchFlight", flightControllers.searchFlights);
// Create Booking
router.post("/booking", bookingControllers.createBooking);
// View Booking
router.get("/booking", bookingControllers.viewBooking);
// Update Booking
router.put("/booking/:id", bookingControllers.updateBooking);
// Delete Booking
router.delete("/booking/:id", bookingControllers.deleteBooking);
// Confirm booking and generate email confirmations with e-tickets
router.post("/booking/:id/confirm", bookingControllers.confirmBooking);

module.exports = router;
