const express = require("express");
const router = express.Router();

const Visit = require("../../models/Visit");

//@route GET /api/visits
router.get("/", (req, res) => {
  Visit.find()
    .then((visits) => res.json(visits))
    .catch((err) => res.json(err));
});

//@route POST /api/visits
router.post("/", (req, res) => {
  const newVisit = new Visit(req.body);

  newVisit
    .save()
    .then((visit) => res.json(visit))
    .catch((err) => res.json(err));
});

module.exports = router;
