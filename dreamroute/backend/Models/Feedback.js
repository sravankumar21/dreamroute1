// models/Feedback.js
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  professionalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Professional', required: true },
  reviewerName: { type: String, required: true },
  feedback: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Feedback', feedbackSchema);
