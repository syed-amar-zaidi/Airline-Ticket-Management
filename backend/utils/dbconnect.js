// database connection code

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose.connect("mongodb://127.0.0.1:27017/airline", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (err) => {
    console.error("Failed to connect with db:", err);
});
db.once("open", () => {
    console.log("Connected with db");
});