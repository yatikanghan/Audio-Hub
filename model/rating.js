const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  review: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = new mongoose.model("Rating", ratingSchema);