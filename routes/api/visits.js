const express = require("express");
const router = express.Router();

const Visit = require("../../models/Visit");

//@route GET /api/Visits
router.get("/", (req, res) => {
  Visit.find()
    .then((visits) => res.json(visits))
    .catch((err) => console.log(err));
});

module.exports = router;
