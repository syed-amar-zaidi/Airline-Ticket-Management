const User = require("../models/userModel");

// Get User Profile
async function getUserProfile(req, res) {
    try {
        const {id} = req.params;
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
        res.json(updateUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Delete User Profile to Deactivate (set Active to false)
async function deleteUserProfile(req, res) {
    try {
        const id = req.params.id;
        const deleteUser = await User.findByIdAndUpdate(id, { Active: false }, { new: true });
        res.sendStatus(deleteUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


/*async function getUserProfile(req, res) {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        // Send the user's profile information in the response
        res.status(200).json(user);
    } catch (err) {
        console.error("Error fetching user profile:", err);
    res.status(500).json({ error: "Error fetching user profile" });
}
}*/

/*// Update User Profile
async function updateUserProfile(req, res) {
    try {
        const userId = req.params.userId;
        // Ensure that only the user with the matching userId can update their profile
        if (userId !== req.user.id) {
            return res.status(403).json({ error: "Permission denied" });
        }
        const updatedData = req.body; // Assuming that the request body contains updated profile data
        const user = await User.findByIdAndUpdate(userId, updatedData, { new: true });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        // Send the updated user profile in the response
        res.status(200).json(user);
    } catch (err) {
        console.error("Error updating user profile:", err);
        res.status(500).json({ error: "Error updating user profile" });
    }
}*/

/*// Delete User Account
async function deleteUserAccount(req, res) {
  try {
    const userId = req.params.userId;
    // Ensure that only the user with the matching userId can delete their account
    if (userId !== req.user.id) {
      return res.status(403).json({ error: "Permission denied" });
    }
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // Send a success message in the response
    res.status(200).json({ message: "User account deleted" });
  } catch (err) {
    console.error("Error deleting user account:", err);
    res.status(500).json({ error: "Error deleting user account" });
  }
}*/

module.exports = {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
};
