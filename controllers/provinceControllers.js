const { provinces } = require('../data/provinces');
const  dishes = require('../data/dishes');

const getAllProvinces = (req, res) => {
  res.json(provinces);
};

const getProvinceById = (req, res) => {
  const { id } = req.params;
  const province = provinces.find(p => p.id == id || p.name.toLowerCase() === id.toLowerCase());
  if (!province) return res.status(404).json({ message: "Province not found" });
  res.json(province);
};

const getProvinceByName = (req, res) => {
  const { name } = req.params;
  const province = provinces.find(p => p.name.toLowerCase() === name.toLowerCase());
  if (!province) return res.status(404).json({ message: "Province not found" });
  res.json(province);
};

const getDishesByProvinceId = (req, res) => {
  const { id } = req.params;
  const filtered = dishes.filter(d => d.provinceId == id || d.province?.toLowerCase() === id.toLowerCase());
  res.json(filtered);
};

module.exports = { getAllProvinces, getProvinceById, getProvinceByName, getDishesByProvinceId };