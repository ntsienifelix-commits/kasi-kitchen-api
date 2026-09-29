const { provinces } = require('../data/provinces');
const { dishes } = require('../data/dishes'); // if this file doesn't exist, remove this line

const getAllProvinces = (req, res) => {
  res.json(provinces);
};

const getProvinceByName = (req, res) => {
  const { name } = req.params;
  const province = provinces.find(p => p.name.toLowerCase() === name.toLowerCase());
  if (!province) return res.status(404).json({ message: "Province not found" });
  res.json(province);
};

module.exports = { getAllProvinces, getProvinceByName };