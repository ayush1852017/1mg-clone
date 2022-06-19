const express = require("express");
const router = express.Router();
const HomeProduct = require("../models/homeProduct.model");
router.get("/", async (req, res) => {
  try {
    const med = await HomeProduct.find().lean().exec();
    return res.status(201).send(med);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
