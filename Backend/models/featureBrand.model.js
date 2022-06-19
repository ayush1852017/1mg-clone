const mongoose = require("mongoose");
const featureSchema = mongoose.Schema({
  image: { type: String, required: true },
  description: { type: String, required: true },
});
module.exports = mongoose.model("featureBrand", featureSchema);
