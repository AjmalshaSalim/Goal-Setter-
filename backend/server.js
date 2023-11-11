const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
// const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose')
const cors = require('cors')
// connectDB();


const app = express();

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose.set('strictQuery', false);
  mongoose.connect('mongodb+srv://ajmalaj8085:RUguz8FyY15SgKq0@cluster0.vovgpqf.mongodb.net/goal', options)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });  

const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend's URL
    optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
  };

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));


app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
