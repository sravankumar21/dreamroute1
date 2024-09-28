// controllers/professionalController.js
const Professional = require('../Models/Professional');

// Create a new professional
exports.createProfessional = async (req, res) => {
  try {
    const { name, email, company, expertise, position, postedBy } = req.body;
    const professional = new Professional({ name, email, company, expertise, position, postedBy });
    await professional.save();
    res.status(201).json({ message: 'Professional added successfully', professional });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all professionals
exports.getProfessionals = async (req, res) => {
  try {
    const professionals = await Professional.find();
    res.status(200).json(professionals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
