const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BarberSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = Barber = mongoose.model("barber", BarberSchema);
