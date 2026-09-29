const express = require('express');
const router = express.Router();
const { getAllDishes, getRandomDish, getDishById, getDishesByProvince } = require('../controllers/dishController');

router.get('/', getAllDishes);
router.get('/random', getRandomDish);
router.get('/province/:province', getDishesByProvince);
router.get('/:id', getDishById);

module.exports = router;