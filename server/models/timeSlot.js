const mongoose = require('mongoose');

const timeSlotSchema = new mongoose.Schema({
    dayOfWeek: Number,
    slots: [String]
  });
  
  module.exports = mongoose.model('timeSlot', timeSlotSchema);