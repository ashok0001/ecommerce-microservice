const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  discountedPrice: { type: Number, required: true },
  discountPersent: { type: Number, required: true },
  quantity: { type: Number, required: true },
  brand: { type: String, required: true },
  // size: [],
  color: { type: String },
  size: [],
  imageUrl: { type: String, required: true },
  ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: "rating" }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "review" }],
  category: { type: mongoose.Schema.Types.ObjectId, ref: "categories" },
  numRatings: { type: Number},
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
