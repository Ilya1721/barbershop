const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const services = require("./api/services");

const app = express();

//Load config
dotenv.config({
  path: "./config/config.env",
});

connectDB();

//Body Parser Middleware
app.use(bodyParser.json());
//Routes
app.use("/api/services", services);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
