const express = require('express');
const router = express.Router();
const { getAllDishes, getDishByProvince } = require('../controllers/dishController');

router.get('/', getAllDishes);
router.get('/:province', getDishByProvince);

module.exports = router;