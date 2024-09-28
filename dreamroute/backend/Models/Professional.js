// models/Professional.js
const mongoose = require('mongoose');

const professionalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, required: true },
  expertise: { type: String, required: true },
  position: { type: String, required: true },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Professional', professionalSchema);
