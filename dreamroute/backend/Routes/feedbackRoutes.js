// routes/feedbackRoutes.js
const express = require('express');
const { submitFeedback, getFeedbackForProfessional } = require('../Controllers/feedbackController');
const router = express.Router();

router.post('/feedback', submitFeedback);
router.get('/feedback/:professionalId', getFeedbackForProfessional);

module.exports = router;
