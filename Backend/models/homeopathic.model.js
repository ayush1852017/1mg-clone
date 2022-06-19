const mongoose = require("mongoose");
const homeopathicSchema = mongoose.Schema({
  image: { type: String, required: true },
  description: { type: String, required: true },
});
module.exports = mongoose.model("homeopathicData", homeopathicSchema);
