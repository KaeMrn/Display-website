const Form = require('../models/Form');
const {sendVerificationEmail} = require ('../utils/sendEmail')
const crypto = require('crypto');


const submitForm = async (req, res) => {
  try {
    const form = new Form(req.body);
    const verificationToken = crypto.randomBytes(20).toString('hex');
    const tokenExpiry = new Date(); // Create a new Date object
    tokenExpiry.setTime(tokenExpiry.getTime() + 3600 * 1000);
    form.verificationToken = verificationToken; 
    form.tokenExpiry = tokenExpiry; // Assign the Date object
    await form.save();
    await sendVerificationEmail(form.email, form.verificationToken);
   
    res.status(201).json({ message: 'Form submitted successfully', data: form });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting form', error: error.message });
    console.log(error.message);
  }
};

const verifyEmail = async (req, res) => {
  try{
    const form = await Form.findOne({
      verificationToken: req.params.token,
      tokenExpiry: {$gt: Date.now()},
      verified: false,
    });
    console.log('Retrieved form with token:', form.verificationToken); // Add this line to log the token

    if(!form) {
      console.error('Verification token is invalid or has expired');
      return res.status(400).send('verification token is invalid or has expired');
    }
    form.verified = true;
    form.verificationToken = undefined;
    form.tokenExpiry = undefined;
    await form.save();
    
    console.log('Email verified successfully');
    res.send('email verified succesfully');
  } catch (error){
    console.error('Unable to verify email:', error);
    res.status(500).send('unable to verify email');
  }
}

module.exports = { submitForm, verifyEmail};
