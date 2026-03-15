import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Feedback from './models/Feedback.js';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (This helps our app understand JSON and talk to our frontend)
app.use(cors());
app.use(express.json());

// 1. Connect to MongoDB
// You will need to add your MONGO_URI to a .env file later
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio_feedback';

mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB Global Database!'))
  .catch((err) => console.log('Connection error:', err));

// 2. Routes (The "Paths" for our data)

// GET: Get all feedbacks from the database
app.get('/api/feedbacks', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ date: -1 }); // Get newest first
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST: Add a new feedback to the database
app.post('/api/feedbacks', async (req, res) => {
  const { username, rating, comment } = req.body;

  const newFeedback = new Feedback({
    username,
    rating,
    comment,
  });

  try {
    const savedFeedback = await newFeedback.save();
    res.status(201).json(savedFeedback);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
