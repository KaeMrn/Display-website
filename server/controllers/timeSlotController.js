const TimeSlot = require('../models/timeSlot');

const addTimeSlot = async (req, res) => {
  try {
    const newTimeSlot = new TimeSlot(req.body);
    await newTimeSlot.save();
    res.status(201).json({ message: 'timeslot submitted successfully', data: newTimeSlot });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting timeslot', error: error.message });
  }
};

module.exports = { addTimeSlot };
