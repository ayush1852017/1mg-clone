const express = require("express");
const router = express.Router();
const Products = require("../models/products.model");
router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 40 } = req.query;
    const skip = (page - 1) * limit;
    const med = await Products.find({ ...req.query })
      .skip(skip)
      .limit(limit * 1)
      .lean()
      .exec();

    const count = await Products.countDocuments();

    return res.status(200).json({
      med,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
