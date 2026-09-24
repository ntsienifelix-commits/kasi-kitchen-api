const express = require('express');
const router = express.Router();
const provinceController = require('../controllers/provinceController');

router.get('/', provinceController.getAll);
router.get('/:id', provinceController.getById);
router.get('/:id/dishes', provinceController.getDishesByProvince);

module.exports = router;