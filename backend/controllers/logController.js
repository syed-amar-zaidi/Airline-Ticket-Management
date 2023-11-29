const loggerModel = require('../models/logger.model');

async function performAction(req, res) {
  // Some action is performed...

  try {
    // Log the action
    await loggerModel.logActivity('John Doe', 'Performed an action', 'Description of the action', 'Success');
    
    // Respond to the request
    res.status(200).json({ message: 'Action performed and logged successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error performing action' });
    // Handle the error appropriately, such as sending an error response to the client
  }
}

module.exports = { performAction };
