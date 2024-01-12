// backend/routes/timeSlots.js
const express = require('express');
const router = express.Router();
const timeSlot = require('../models/timeSlot'); // Adjust the path as necessary


router.post('/', async (req, res) => {
  try {
    const newtimeSlot = new timeSlot(req.body);
    await newtimeSlot.save();
    res.status(201).json(newtimeSlot);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


//get method
router.get('/:dayOfWeek', async (req, res) => {
  const { dayOfWeek } = req.params;
  const slots = await timeSlot.find({ dayOfWeek: parseInt(dayOfWeek, 10) });
  res.json(slots);
});


module.exports = router;
