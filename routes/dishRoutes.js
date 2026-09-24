const express = require('express');
const ctrl = require('../controllers/dishController');
const router = express.Router();

router.get('/about', ctrl.getAbout);
router.get('/dishes', ctrl.getAllDishes);
router.get('/dishes/random', ctrl.getRandomDish); // MUST be before :id
router.get('/dishes/:id', ctrl.getDishById);
router.get('/dishes/province/:province', ctrl.getByProvince);

module.exports = router;