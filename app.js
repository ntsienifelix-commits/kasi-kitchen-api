require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Health check - to know if API is live
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date(),
    message: 'Kasi Kitchen API is running on Render 🔥'
  });
});

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Kasi Kitchen API',
    live_link: 'https://kasi-kitchen-api.onrender.com/',
    endpoints: [
      'GET /health',
      'GET /api/menu',
      'GET /api/menu/:id',
      'GET /api/orders'
    ]
  });
});

// 1. Serve the HTML/CSS from public folder
app.use(express.static(path.join(__dirname, 'public')));

// 2. API routes
const dishRoutes = require('./routes/dishRoutes');
app.use('/api/dishes', dishRoutes);

const provinceRoutes = require('./routes/provinceRoutes');
app.use('/api/provinces', provinceRoutes);

// 3. Default route
app.get('/api', (req, res) => {
  res.json({ msg: 'Kasi Kitchen API running' });
});

app.get('/api/about', (req, res) => {

  res.json({

    project: "Kasi Kitchen API",

    description: "An API for exploring South African dishes and their provinces.",

    version: "1.0.0",

    developers: [

      {

        name: "Boitshepo",

        role: "Backend Developer",

        github: "https://github.com/boitsheporamaswe-glitch"

      },

      {

        name: "Felix",

        role: "Backend Developer",

        github: "https://github.com/ntsienifelix-commits"

      }

    ]

  });

});

module.exports = app;