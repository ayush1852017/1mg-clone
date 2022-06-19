const mongoose = require("mongoose");
const categoriesSchema = mongoose.Schema({
  image: { type: String, required: true },
  description: { type: String, required: true },
});
module.exports = mongoose.model("categoriesData", categoriesSchema);
