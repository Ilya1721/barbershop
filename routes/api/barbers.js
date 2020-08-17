const express = require("express");
const router = express.Router();

const Barber = require("../../models/Barber");

//@route GET /api/barbers
router.get("/", (req, res) => {
  Barber.find()
    .then((barbers) => res.json(barbers))
    .catch((err) => console.log(err));
});

module.exports = router;
