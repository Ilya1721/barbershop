const express = require("express");
const router = express.Router();

const Contacts = require("../../models/Contacts");

//@route GET /api/contacts
router.get("/", (req, res) => {
  Contacts.find()
    .then((services) => res.json(services))
    .catch((err) => console.log(err));
});

module.exports = router;
