const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouters = require("./routes/user"); // Import the signUp route
const mongoose = require("./utils/dbconnect");

const app = express();
const port = 3008;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// APIs
app.use("/api", userRouters);
// app.use("/signin", userRouters); 
// app.use("/userprofile", userRouters);

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});