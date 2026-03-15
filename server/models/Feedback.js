import mongoose from 'mongoose';

// This is a "Schema" - it tells MongoDB what our feedback data should look like
const feedbackSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create the model based on the schema
const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;
