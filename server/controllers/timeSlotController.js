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

//get method
const getTimeSlot = async (req, res) => {
    const {dayOfWeek} = req.params;
    console.log("Day of Week:", dayOfWeek);
    try{
        const timeSlot = await TimeSlot.findOne({dayOfWeek: parseInt(dayOfWeek, 10)});
        console.log("Found Time Slot:", timeSlot.Time); 
        res.json(timeSlot ? timeSlot.Time : []);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

module.exports = { addTimeSlot, getTimeSlot };
