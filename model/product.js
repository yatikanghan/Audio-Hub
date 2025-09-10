const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      enum: ["buds", "headphones", "smartwatch"],
      required: true
    },
    brand: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    stock: {
      type: Number,
      required: true,
      min: 0
    },
    sku: {
      type: String,
      unique: true,
      required: true
    },
    image: {
      img1: { type: String,
        default : "https://media.istockphoto.com/id/1319913192/vector/free-sample-not-for-sale-vector-icon.jpg?s=612x612&w=0&k=20&c=84-QZJc3O84wfTL4Y06jRS7YAaYbMjM8Buim98qnKyo="
       },
      img2: { type: String,
        default : "https://media.istockphoto.com/id/1319913192/vector/free-sample-not-for-sale-vector-icon.jpg?s=612x612&w=0&k=20&c=84-QZJc3O84wfTL4Y06jRS7YAaYbMjM8Buim98qnKyo=",
        
       },
      img3: { type: String,
        default : "https://media.istockphoto.com/id/1319913192/vector/free-sample-not-for-sale-vector-icon.jpg?s=612x612&w=0&k=20&c=84-QZJc3O84wfTL4Y06jRS7YAaYbMjM8Buim98qnKyo="
       }
    },
    ratings: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        rating: { type: Number, min: 1, max: 5 },
        review: { type: String },
        createdAt: { type: Date, default: Date.now }
      }
    ],
    tags: {
        tag1: { type: String },
        tag2: { type: String },
        tag3: { type: String },
        tag4: { type: String },
        tag5: { type: String }
    }
  });

  module.exports = new mongoose.model("Product", productSchema);