const express = require("express");
const router = express.Router();
const HealthConcern = require("../models/healthConcerns.model");
router.get("/", async (req, res) => {
  try {
    const med = await HealthConcern.find().lean().exec();
    return res.status(201).send(med);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
