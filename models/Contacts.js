const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactsSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  social: {
    telegram: {
      type: String,
      required: true,
    },
    instagram: {
      type: String,
      required: true,
    },
    facebook: {
      type: String,
      required: true,
    },
    viber: {
      type: String,
      required: true,
    },
  },
});

module.exports = Contacts = mongoose.model("contacts", ContactsSchema);
