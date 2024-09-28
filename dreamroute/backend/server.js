const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const questionRoutes = require('./Routes/questionRoutes');
const opportunityRoutes = require('./Routes/opportunityRoutes'); // Ensure this is declared once
const authRoutes = require('./Routes/authRoutes'); // Import auth routes
const professionalRoutes = require('./Routes/professionalRoutes');
const feedbackRoutes = require('./Routes/feedbackRoutes');

// Routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json()); // Use express.json() instead of bodyParser
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Routes
app.use('/api', questionRoutes);
app.use('/addjobs', opportunityRoutes);
app.use('/auth', authRoutes); // Use auth routes
app.use('/api', professionalRoutes); // Add professional routes
app.use('/api', feedbackRoutes); // Add feedback routes

// MongoDB connection
mongoose.connect(process.env.MONGO_DBI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
