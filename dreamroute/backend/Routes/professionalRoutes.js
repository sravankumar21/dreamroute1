// routes/professionalRoutes.js
const express = require('express');
const { createProfessional, getProfessionals } = require('../Controllers/professionalController');
const router = express.Router();

router.post('/professional-form', createProfessional);
router.get('/professionals', getProfessionals);

module.exports = router;
