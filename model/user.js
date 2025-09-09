const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true
    },
    password: {
        type: String,
        required : true
    },
    mobile: {
        type: String,
        required : true
    },
    role: {
        type: String,
        default : "Customer"
    },
    address: {
        type : String,
        default : ""
    },
    city: {
        type : String,
        default : ""
    },
    postalcode: {
        type : String,
        default : ""
    },
    country: {
        type : String,
        default : ""
    }
});


module.exports = new mongoose.model("User", UserSchema);