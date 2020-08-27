const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");

const services = require("./routes/api/services");
const contacts = require("./routes/api/contacts");
const works = require("./routes/api/works");
const barbers = require("./routes/api/barbers");
const visits = require("./routes/api/visits");

const app = express();

//Load config
dotenv.config({
  path: "./config/config.env",
});

connectDB();

//Body Parser Middleware
app.use(express.json());
//Routes
app.use("/api/services", services);
app.use("/api/contacts", contacts);
app.use("/api/works", works);
app.use("/api/barbers", barbers);
app.use("/api/visits", visits);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
