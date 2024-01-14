// backend/routes/timeSlots.js
const express = require('express');
const router = express.Router();
const {addTimeSlot, getTimeSlot} = require('../controllers/timeSlotController'); // Adjust the path as necessary


router.post('/', addTimeSlot);
router.get('/:dayOfWeek', getTimeSlot);





module.exports = router;
