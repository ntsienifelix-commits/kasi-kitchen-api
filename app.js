require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

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