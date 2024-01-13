// backend/routes/timeSlots.js
const express = require('express');
const router = express.Router();
const {addTimeSlot} = require('../controllers/timeSlotController'); // Adjust the path as necessary


router.post('/', addTimeSlot);



// //get method
// router.get('/:dayOfWeek', async (req, res) => {
//   const { dayOfWeek } = req.params;
//   const slots = await timeSlot.find({ dayOfWeek: parseInt(dayOfWeek, 10) });
//   res.json(slots);
// });


module.exports = router;
