const mongoose = require("mongoose");
const ayurvedaSchema = mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});
module.exports = mongoose.model("ayurvedaData", ayurvedaSchema);
