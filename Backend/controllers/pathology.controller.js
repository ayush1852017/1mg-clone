const express = require("express");
const router = express.Router();
const Pathology = require("../models/pathology.model");
router.get("", async (req, res) => {
  try {
    const med = await Pathology.find().lean().exec();
    return res.status(201).send(med);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
