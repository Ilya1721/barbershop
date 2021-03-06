const express = require("express");
const router = express.Router();

const Service = require("../../models/Service");

//@route GET /api/services
router.get("/", (req, res) => {
  Service.find()
    .then((services) => res.json(services))
    .catch((err) => console.log(err));
});

module.exports = router;
