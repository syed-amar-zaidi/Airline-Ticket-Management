const TicketPrinting = require('../models/ticketPrintingModel'); // Assuming the schema is in the 'models' directory

// Generate Printable Ticket
async function generatePrintableTicket(req, res) {
  console.log("Generate Printable Ticket Request Received");
  try {
    const { passenger_id, flight_id, ticket_details } = req.body;
    
    // Create a new printable ticket record
    const newTicketPrinting = new TicketPrinting({
      passenger_id,
      flight_id,
      ticket_details,
    });

    // Save the printable ticket in the database
    const savedTicket = await newTicketPrinting.save();

    // Here, you might generate the actual printable ticket file or return a success response
    // For simplicity, let's assume the response is just a success message with the ticket details
    res.status(201).json({
      success: true,
      message: 'Printable ticket generated successfully',
      ticket: savedTicket,
    });
  } catch (error) {
    console.error("Printable ticket generation failed:", error);
    res.status(500).json({ error: "Printable ticket generation failed" });
  }
}

module.exports = {
  generatePrintableTicket,
};
