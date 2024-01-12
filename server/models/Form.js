const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    guests: Number,
    date: Date,
    time: String,
    specialInstructions: String,
  });
  
  module.exports = mongoose.model('Reservations', formSchema);