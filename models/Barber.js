const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BarberSchema = new Schema({
  name: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  image: {
    type: "string",
    required: true,
  },
});

module.exports = Barber = mongoose.model("barber", BarberSchema);