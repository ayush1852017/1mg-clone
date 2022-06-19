const mongoose = require("mongoose");
const pathologySchema = mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  passage: { type: String, required: false },
  rate: { type: String, required: false },
});
module.exports = mongoose.model("pathologyData", pathologySchema);
