const express = require("express");
const router = express.Router();
const PersonalCare = require("../models/personalcare.model");
router.get("", async (req, res) => {
  try {
    const med = await PersonalCare.find().lean().exec();
    return res.status(201).send(med);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
