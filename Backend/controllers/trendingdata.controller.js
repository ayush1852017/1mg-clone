const express = require("express");
const router = express.Router();
const Trending = require("../models/trendingdata.model");
router.get("/", async (req, res) => {
  try {
    const med = await Trending.find().lean().exec();
    return res.status(201).send(med);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
