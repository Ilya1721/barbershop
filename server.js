const express = require("express")
const mongoose = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const connectDB = require("./config/db")

const app = express()

//Load config
dotenv.config({
  path: "./config/config.env"
})

connectDB();

//Body Parser Middleware
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))