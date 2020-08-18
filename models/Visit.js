const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VisitSchema = new Schema({
  barber: {
    type: "ObjectId",
    required: true,
  },
  date: {
    type: "Date",
    required: true,
  },
});

module.exports = Visit = mongoose.model("visit", VisitSchema);
