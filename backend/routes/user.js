const express = require("express");
const router = express.Router();
const signin = require("../controllers/signIn");
const signup = require("../controllers/signUp"); 
const profile = require("../controllers/userprofile");
const flightControllers = require("../controllers/flightController");
const bookingControllers = require("../controllers/bookingController");
const users = require("../controllers/userControllers")
const baggingControllers = require("../controllers/baggingController");
const ticketPrintingController = require('../controllers/ticketPrintingController');

// Create new users
router.post("/signup", signup.createUser);
// Get a user by email and password
router.get("/signin/:email/:password", signin.getUser);
// Get user of role Airline
router.get("/getEmployee", users.getAirlineUser);
// Get user of role Passenger
router.get("/getPassenger", users.getPassengerUser);
// Update user
router.put("/users/:id", users.updateUser);
// Delete user
router.delete("/users/:id", users.deactivateUser);
// Get User Profile
router.get("/get-profile/:id", profile.getUserProfile);
// Update User Profile
router.put("/update-profile/:id", profile.updateUserProfile);
// // Delete User Account
// router.delete("/delete-profile/:id", profile.deleteUserProfile);
// Create Flight 
router.post("/flight", flightControllers.addFlight);
// Get flight
router.get("/getFlight", flightControllers.getFlight);
// Update Flight
router.put("/flight/:id", flightControllers.updateFlight);
// Delete Flight
router.delete("/flight/:id", flightControllers.deactivateFlight);
// Search Flight
router.get("/search-flight", flightControllers.searchFlight);
// Book Flight
router.post("/book-flight", flightControllers.bookFlight);
// Create Bagging 
router.post("/bagging", baggingControllers.addBagging);
// Get Bagging
router.get("/getBagging", baggingControllers.getBagging);
// Update Bagging
router.put("/bagging/:id", baggingControllers.updateBagging);
// Delete Bagging
router.delete("/bagging/:id", baggingControllers.deactivateBagging);
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
// Route for generating a printable ticket
router.post('/tickets/printable', ticketPrintingController.generatePrintableTicket);

module.exports = router;
