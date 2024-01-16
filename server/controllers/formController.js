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
  try {
    console.log('Starting email verification for token:', req.params.token);
    const form = await Form.findOne({
      verificationToken: req.params.token,
      tokenExpiry: { $gt: Date.now() },
    });

    // Logging for debugging
    if (form) {
      console.log('Retrieved form with token:', form.verificationToken);
    } else {
      console.log('No form found with the provided token');
    }

    if (!form) {
      console.error('Verification token is invalid or has expired');
      return res.status(400).json({ message: 'Verification token is invalid or has expired' });
    }

    form.verified = true;
    form.verificationToken = undefined;
    form.tokenExpiry = undefined;
    await form.save();

    console.log('Email verified successfully for token:', req.params.token);
    res.json({ message: 'Email verified successfully' });
  } catch (error) {
    console.error('Unable to verify email:', error);
    res.status(500).json({ message: 'Unable to verify email', error: error.message });
  }
}

module.exports = { submitForm, verifyEmail };


