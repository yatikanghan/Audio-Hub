const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
         required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
   },
    qty: {
      type: Number,
      min: 0,
      max: 10,
      required: true,
    },
    totalamount: {
      type: Number,
      required: true
    },
    orderstatus: {
      type: String,
      required: true
    },
    paymentstatus: {
      type: String,
      required: true
    },
    reviewstatus: {
        type: String,
        required: true
    },    
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    postcode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    createdAt: {
        type: String
    },
    trackingId :{
      type: String,
      required: false
    }

  });

  module.exports = new mongoose.model("Order", orderSchema);