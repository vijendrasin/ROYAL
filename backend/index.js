const express = require('express');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/Contact');
const signupRoutes = require('./routes/signup');
const userRoutes = require('./routes/login');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors')
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Middleware
app.use(express.json());
app.use(cors())

// Connect to MongoDB
mongoose.connect('mongodb+srv://vijendra:test@cluster0.csigtbn.mongodb.net/info')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Routes
app.use('/contact', contactRoutes);
app.use('/signup', signupRoutes);
app.use('/login', userRoutes);
// Start the server
const PORT =  8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
