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

  formSchema.pre('save', function(next){
    if(this.isNew){
      this.verificationToken = crypto.randomBytes(20).toString('hex');
      this.tokenExpiry = Date.now() + 3600; //one hour from now
    }
    next();
  });
  
  module.exports = mongoose.model('Reservations', formSchema);