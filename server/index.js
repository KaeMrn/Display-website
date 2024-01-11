//@ts-check
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json)

//establish connection
mongoose.connect('mongodb://127.0.0.1:27017/Restaurant')  .then(() => {
  console.log('FINE');
})
.catch(() => {
  console.log("BAD");
});
//Define a schema

const reservationSchema = new mongoose.Schema({
  fullName: String,
  guests: Number,
  date: String,
  time: String,
  email: String,
  specialInstructions: String
});

const Reservation = mongoose.model('Reservation', reservationSchema);

app.post('/api/reservations', async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    await newReservation.save();
    res.status(201).send(newReservation);
  } catch (error) {
    res.status(500).send(error);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});