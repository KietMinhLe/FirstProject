const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  discountPercentage: Number,
  stock: Number,
  thumbnail: String,
  status: String,
  position: Number,
  delete: Boolean,
});

const Product = mongoose.model("Product", yourSchema, "project");

module.exports = Product;
