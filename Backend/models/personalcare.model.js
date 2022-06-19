const mongoose = require("mongoose");
const personalCareSchema = mongoose.Schema({
  image: { type: String, required: true },
  description: { type: String, required: true },
});
module.exports = mongoose.model("personalCareData", personalCareSchema);
