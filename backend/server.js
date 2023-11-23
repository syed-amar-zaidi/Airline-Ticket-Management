const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouters = require("./routes/user"); 
const mongoose = require("./utils/dbconnect");


const app = express();
const port = 3008;

// Middleware
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// APIs
app.use("/api", userRouters);

// app.use("/signin", userRouters); 
// app.use("/userprofile", userRouters);

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});


/* --------------------------------------------------- */
// app.js

// const express = require('express');
// const mongoose = require('mongoose');
// const authController = require('./controllers/authController');
// const proController = require('./controllers/profileController');

// const app = express();

// app.use(express.json());

// mongoose.connect("mongodb://127.0.0.1:27017/abc", {
//         // useNewUrlParser: true,
//         // useUnifiedTopology: true,
//     });
    
//     const db = mongoose.connection;
//     db.on("error", (err) => {
//         console.error("Failed to connect with db:", err);
//     });
//     db.once("open", () => {
//         console.log("Connected with db");
//     });

// // Routes
// app.use('/api/auth', authController);
// app.use('/api/profile', proController);
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
