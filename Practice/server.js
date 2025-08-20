const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();

// Environment Setup
const isDevelopment = process.env.NODE_ENV !== 'production';

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/CourseSurvey')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => {
    console.error('MongoDB Connection Error:', {
      message: err.message,
      stack: isDevelopment ? err.stack : undefined,
    });
  });

// Schema
const surveySchema = new mongoose.Schema({
  S0169Name: { type: String, required: true },
  S0169Email: { type: String, required: true },
  S0169Course: { type: String, required: true },
  S0169Feedback: { type: String, required: true },
  S0169Rating: { type: Number, required: true },
  S0169Comments: { type: String },
  S0169Timestamp: { type: Date, default: Date.now }
});

const Survey = mongoose.model('S20230010169', surveySchema);

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// Home Page (Survey Form)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Submit Survey
app.post('/submit', async (req, res) => {
  const { S0169Name, S0169Email, S0169Course, S0169Feedback, S0169Rating, S0169Comments } = req.body;

  // Backend validation
  if (!S0169Name || S0169Name.length < 2 || !/^[A-Za-z\s]{2,50}$/.test(S0169Name)) {
    console.error('Validation Error: Invalid name', { data: isDevelopment ? req.body : undefined });
    return res.status(400).json({ error: 'Name must be 2-50 characters, letters and spaces only' });
  }
  if (!S0169Email || !/^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(S0169Email)) {
    console.error('Validation Error: Invalid email', { data: isDevelopment ? req.body : undefined });
    return res.status(400).json({ error: 'Invalid email format' });
  }
  if (!S0169Course) {
    console.error('Validation Error: Course not selected', { data: isDevelopment ? req.body : undefined });
    return res.status(400).json({ error: 'Please select a course' });
  }
  if (!S0169Feedback || S0169Feedback.length < 10) {
    console.error('Validation Error: Invalid feedback', { data: isDevelopment ? req.body : undefined });
    return res.status(400).json({ error: 'Feedback must be at least 10 characters long' });
  }
  if (!S0169Rating || isNaN(S0169Rating) || S0169Rating < 1 || S0169Rating > 5) {
    console.error('Validation Error: Invalid rating', { data: isDevelopment ? req.body : undefined });
    return res.status(400).json({ error: 'Rating must be between 1 and 5' });
  }

  const surveyData = new Survey({
    S0169Name,
    S0169Email,
    S0169Course,
    S0169Feedback,
    S0169Rating,
    S0169Comments,
    S0169Timestamp: new Date()
  });

  try {
    const savedSurvey = await surveyData.save();
    res.json(savedSurvey);
  } catch (err) {
    console.error('Error saving survey:', {
      message: err.message,
      stack: isDevelopment ? err.stack : undefined,
      data: isDevelopment ? req.body : undefined,
    });
    res.status(500).json({ error: 'Error saving data' });
  }
});

// Fetch All Surveys
app.get('/surveys', async (req, res) => {
  try {
    const surveys = await Survey.find().sort({ S0169Timestamp: -1 });
    res.json(surveys);
  } catch (err) {
    console.error('Error retrieving surveys:', {
      message: err.message,
      stack: isDevelopment ? err.stack : undefined,
    });
    res.status(500).json({ error: 'Error retrieving data' });
  }
});

// Display Results Page
app.get('/results.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'results.html'));
});

// Start Server
const port = 3500;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});