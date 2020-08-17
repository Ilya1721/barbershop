const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkSchema = new Schema({
  img: {
    type: "string",
    required: true,
  },
});

module.exports = Work = mongoose.model("work", WorkSchema);
