const express = require("express");
const router = express.Router();
const Deals = require("../models/deals.model");
router.get("/", async (req, res) => {
  try {
    const med = await Deals.find().lean().exec();
    return res.status(201).send(med);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
