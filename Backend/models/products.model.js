const mongoose = require("mongoose");
const productsSchema = mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: String, required: false },
  strike: { type: String, required: false },
  offer: { type: String, required: false },
  price: { type: String, required: true },
});
module.exports = mongoose.model("productsSchema", productsSchema);
