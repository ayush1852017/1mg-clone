const mongoose = require("mongoose");
const radiologySchema = mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  passage: { type: String, required: false },
  rating: { type: String, required: true },
});
module.exports = mongoose.model("radiologyData", radiologySchema);
