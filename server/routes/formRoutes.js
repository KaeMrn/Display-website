const express = require('express');
const router = express.Router();
const { submitForm, verifyEmail } = require('../controllers/formController');

router.post('/submit', submitForm);
router.get('/verify/:token', verifyEmail);
module.exports = router;
