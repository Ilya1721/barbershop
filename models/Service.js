const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  name: {
    type: "string",
    required: true,
  },
  price: {
    type: "string",
    required: true,
  },
});

module.exports = Service = mongoose.model("service", ServiceSchema);
