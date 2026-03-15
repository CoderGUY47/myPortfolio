import mongoose from 'mongoose';

//this tells the memory box what our happy words should look like
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

//now we make the shape for our words so they fit perfectly
const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;
