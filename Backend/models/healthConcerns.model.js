const mongoose = require("mongoose");
const healthConcernSchema = mongoose.Schema({
  image: { type: String, required: true },
  description: { type: String, required: true },
});
module.exports = mongoose.model("healthConcernData", healthConcernSchema);
