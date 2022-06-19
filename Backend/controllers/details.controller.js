const express = require("express");

const router = express.Router();

const Post = require("../models/user.model");

const authenticate = require("../Middleware/auth.middleware");

router.post("", authenticate, async (req, res) => {
  req.body.userId = req.userId;
  console.log(req.mail);
  let mail = req.mail;

  try {
    const post = await Post.create(req.body);
    const msg = "A new post created successfully !";
    return res.status(200).send({ msg, post, mail });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
});

router.get("", authenticate, async (req, res) => {
  // req.body. = req.userId;
  const email = req.mail;
  console.log(req.body);
  try {
    const posts = await Post.findOne({ email: email }).lean().exec();
    return res.status(200).send({ posts: posts });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:pid", authenticate, async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.pid, req.body, {
      new: true,
    })
      .lean()
      .exec();
    const msg = "Post updated successfully !";
    return res.status(200).send({ msg, post });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:pid", authenticate, async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.pid);
    const msg = "Post deleted successfully !";
    return res.status(200).send(msg);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
