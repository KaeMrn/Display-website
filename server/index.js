const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const formRoutes = require('./routes/formRoutes'); 
const timeSlotRoutes= require('./routes/timeSlotRoutes') ;
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors({
    origin: 'http://localhost:5173' // Replace with your frontend's URL
}));

app.use(express.json());

app.use('/api/Reservations', formRoutes);
app.use('/api/timeSlots', timeSlotRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
