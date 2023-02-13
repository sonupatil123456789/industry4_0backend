const mongoose = require("mongoose")

const otpSchema = new mongoose.Schema({
    userId: {
      type: String,
      required: true,
    },
    otp:{
      type: Number,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 30,// this is the expiry time in seconds
    },
  });
  
module.exports = mongoose.model("OTP", otpSchema);