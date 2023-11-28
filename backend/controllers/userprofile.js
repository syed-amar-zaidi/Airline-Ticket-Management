const User = require("../models/userModel");

// Get User Profile
async function getUserProfile(req, res) {
    try {
        const id = req.params.id;
        const viewUser = await User.findById(id);
        res.json(viewUser);
    }catch (err) {
        res.status(500).json({error: err.message});
    }
}

// Update User Account
async function updateUserProfile(req, res) {
    try {
        const { id } = req.params;
        const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).json(updateUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// // Delete User Profile to Deactivate (set Active to false)
// async function deleteUserProfile(req, res) {
//     try {
//         const id = req.params.id;
//         const deleteUser = await User.findByIdAndUpdate(id, { Active: false }, { new: true });
//         res.sendStatus(deleteUser);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// }


module.exports = {
  getUserProfile,
  updateUserProfile,
//   deleteUserProfile,
};