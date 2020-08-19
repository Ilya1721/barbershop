const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkSchema = new Schema({
  img: {
    type: String,
    required: true,
  },
});

module.exports = Work = mongoose.model("work", WorkSchema);
