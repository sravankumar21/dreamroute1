const express = require('express');
const router = express.Router();
const { addQuestion, generateQuestions } = require('../Controllers/questionController');

// Route to add a question manually
router.post('/questions', addQuestion);

// Route to generate questions automatically
router.post('/generate-questions', generateQuestions);

// Route to get questions based on domain and skill level
router.get('/questions/:domain/:skillLevel', async (req, res) => {
  try {
    const { domain, skillLevel } = req.params;
    const questions = await Question.find({ domain, skillLevel });
    res.json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(400).json({ error: 'Error fetching questions.' });
  }
});

module.exports = router;
