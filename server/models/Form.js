const mongoose = require('mongoose');
const crypto = require('crypto');


const formSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    guests: Number,
    date: Date,
    time: String,
    specialInstructions: String,
    verified: {type:Boolean, default: false},
    verificationToken: String,
    tokenExpiry: Date,
  });

  
  module.exports = mongoose.model('Reservations', formSchema);