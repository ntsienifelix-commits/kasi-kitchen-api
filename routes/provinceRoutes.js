const express = require('express');
const { getAllProvinces, getProvinceByName } = require('../controllers/provinceControllers');
const router = express.Router();

router.get("/", getAllProvinces);
router.get("/:name", getProvinceByName);

module.exports = router;