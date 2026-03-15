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

//this helps our app talk to our friends online
app.use(cors());
app.use(express.json());

//first we connect to the big memory box
//we will need a secret key later to open the memory box
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio_feedback';

mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB Global Database!'))
  .catch((err) => console.log('Connection error:', err));

//second we make little paths for our data to travel on

//we ask the memory box for all the nice words
app.get('/api/feedbacks', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ date: -1 }); //we want the newest words first so we feel happy now
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//we send new kind words to the memory box to keep them safe
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
