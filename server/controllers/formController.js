const Form = require('../models/Form');
const {sendVerificationEmail} = require ('../utils/sendEmail')


const submitForm = async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    await sendVerificationEmail(form.email, form.verificationToken);
    
    res.status(201).json({ message: 'Form submitted successfully', data: form });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting form', error: error.message });
  }
};

const verifyEmail = async (req, res) => {
  try{
    const form = await Form.findOne({
      verificationToken: req.params.token,
      tokenExpiry: {$gt: Date.now()},
    });
    if(!form) {
      return res.status(400).send('verification token is invalid or has expired');
    }
    form.verified = true;
    form.verificationToken = undefined;
    form.tokenExpiry = undefined;
    await form.save();
    
    res.send('email verified succesfully');
  } catch (error){
    res.status(500).send('unable to verify email');
  }
}

module.exports = { submitForm, verifyEmail};
