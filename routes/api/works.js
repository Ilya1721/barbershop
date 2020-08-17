const express = require("express");
const router = express.Router();

const Work = require("../../models/Work");

//@route GET /api/works
router.get("/", (req, res) => {
  Work.find()
    .then((works) => res.json(works))
    .catch((err) => console.log(err));
});

module.exports = router;
