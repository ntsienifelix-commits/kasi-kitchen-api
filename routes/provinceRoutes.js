const express = require('express');
const router = express.Router();
const { getAllProvinces, getProvinceById, getDishesByProvinceId } = require('../controllers/provinceControllers');

router.get('/', getAllProvinces);
router.get('/:id/dishes', getDishesByProvinceId);
router.get('/:id', getProvinceById);

module.exports = router;