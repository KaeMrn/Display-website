const mongoose = require('mongoose');

const timeSlotSchema = new mongoose.Schema({
    dayOfWeek: Number,
    Time: [String]
  });
  
  module.exports = mongoose.model('timeSlot', timeSlotSchema);