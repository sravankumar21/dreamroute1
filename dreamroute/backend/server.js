const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
<<<<<<< HEAD
const questionRoutes = require('./Routes/questionRoutes');
const opportunityRoutes = require('./Routes/opportunityRoutes');
const authRoutes = require('./Routes/authRoutes'); // Import auth routes
=======
const opportunityRoutes = require('./Routes/opportunityRoutes');
const questionRoutes = require('./Routes/questionRoutes'); // Ensure correct path to routes

dotenv.config();
>>>>>>> 936e08a (Latest Update)

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
<<<<<<< HEAD
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

// Routes
app.use('/api', questionRoutes);
app.use('/addjobs', opportunityRoutes);
app.use('/auth', authRoutes); // Use auth routes
=======
app.use(cors());
app.use(express.json()); // For parsing application/json

// MongoDB connection
mongoose.connect(process.env.MONGO_DBI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
>>>>>>> 936e08a (Latest Update)

// Define routes
app.use('/api/questions', questionRoutes);
app.use('/addjobs', opportunityRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
