const Booking = require("../models/bookingModel");

// Create Booking (POST)
async function createBooking(req, res) {
    console.log("Request Received");
    try {
        const booking = new Booking(req.body);
        const savedbooking = await booking.save();
        console.log("Booking successfully");
        res.status(201).send(savedbooking);
    } catch (err) {
        console.error("Booking failed:", err);
        res.status(500).send({ error: "Booking failed" });
    }
}

// View Booking 
async function viewBooking(req, res) {
    try {
        const { id } = req.params;
        const viewBooking = await Booking.findOne({ _id: id }); // Assuming 'id' is the unique identifier
        if (!viewBooking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        res.status(200).json(viewBooking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Update Booking
async function updateBooking(req, res) {
    try {
        const { id } = req.params;
        const updatebooking = await Booking.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).json(updatebooking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function deleteBooking(req, res) {
    try {
        const { id } = req.params;
        const deletedBooking = await Booking.findByIdAndUpdate(id, { Active: false }, { new: true });

        if (!deletedBooking) {
            return res.status(404).json({ error: 'Booking not found' });
        }

        res.status(200).json({ message: 'Booking canceled successfully', deletedBooking });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// Confirm Booking
async function confirmBooking(req, res) {
    try {
        const { bookingID } = req.params;
        const booking = await Booking.findOne({ _id: bookingID });

        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        return res.status(200).json({ message: 'Booking confirmed successfully', booking });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}


// // Delete Booking (set Active to false)
// async function deleteBooking(req, res) {
//     try {
//         const id = req.params.id;
//         const deletebooking = await Booking.findByIdAndUpdate(id, { Active: false }, { new: true });
//         res.sendStatus(deletebooking);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// }


module.exports = {
  createBooking,
  viewBooking,
  updateBooking,
  deleteBooking,
  confirmBooking,
};