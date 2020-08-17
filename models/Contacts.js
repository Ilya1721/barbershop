const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactsSchema = new Schema({
  address: {
    type: "string",
    required: true,
  },
  phoneNumber: {
    type: "string",
    required: true,
  },
  schedule: {
    type: "string",
    required: true,
  },
  social: {
    telegram: {
      type: "string",
      required: true,
    },
    instagram: {
      type: "string",
      required: true,
    },
    facebook: {
      type: "string",
      required: true,
    },
    viber: {
      type: "string",
      required: true,
    },
  },
});

module.exports = Contacts = mongoose.model("contacts", ContactsSchema);
