// controllers/feedbackController.js
const Feedback = require('../Models/Feedback');

// Submit feedback
exports.submitFeedback = async (req, res) => {
  try {
    const { professionalId, reviewerName, feedback, rating } = req.body;
    const newFeedback = new Feedback({ professionalId, reviewerName, feedback, rating });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully', feedback: newFeedback });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get feedback for a specific professional
exports.getFeedbackForProfessional = async (req, res) => {
  try {
    const { professionalId } = req.params;
    const feedback = await Feedback.find({ professionalId });
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
