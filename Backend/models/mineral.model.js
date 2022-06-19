const mongoose = require("mongoose");
const mineralSchema = mongoose.Schema({
  image: { type: String, required: true },
  description: { type: String, required: true },
});
module.exports = mongoose.model("mineralData", mineralSchema);
