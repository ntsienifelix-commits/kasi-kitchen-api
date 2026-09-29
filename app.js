require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

const dishRoutes = require('./routes/dishRoutes');
app.use('/api/dishes', dishRoutes);

app.get('/', (req,res) => res.json({msg: 'Kasi Kitchen API running'}));

app.listen(5000, () => console.log('http://localhost:5000'));