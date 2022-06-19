const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const express = require("express");
const router = express.Router();

const { body, validationResult } = require("express-validator");
const generateToken = (user) => {
  return jwt.sign({ user }, process.env.secretkey);
};

router.post(
  "",
  body("email").isEmail().withMessage("Please enter valid email address"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        let errmsg = errors.array();
        return res.status(400).json({ message: errmsg[0].msg });
      }

      let user = await User.findOne({ email: req.body.email });

      //checking email
      if (user) {
        return res.status(400).send({ message: "Email already exists" });
      }

      // if new user, create it or allow to register;
      user = await User.create(req.body);

      const token = generateToken(user);
      return res.status(200).send({ user, token });
    } catch (err) {
      res.status(400).send({ message: err.message });
      console.log(err);
    }
  }
);

module.exports = router;
