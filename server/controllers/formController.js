const Form = require('../models/Form');

const submitForm = async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).json({ message: 'Form submitted successfully', data: form });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting form', error: error.message });
  }
};

module.exports = { submitForm };
