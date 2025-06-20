// Entry point for Express.js backend
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./src/api/routes');

// Enable CORS for all routes
app.use(cors({
  origin: '*', // Allow requests from your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  credentials: true // Allow cookies/auth headers if needed
}));
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
