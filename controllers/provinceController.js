const provinces = require('../data/provinces');
// Need dishes to link
let dishes = [];
try { dishes = require('../data/dishes'); } catch(e) { dishes = []; }

const getAll = (req, res) => {
  res.json({ success: true, count: provinces.length, data: provinces });
};

const getById = (req, res) => {
  const id = req.params.id.toLowerCase();
  const province = provinces.find(p => String(p.id) === id || p.name.toLowerCase() === id);
  if (!province) return res.status(404).json({ success: false, message: "Province not found" });
  res.json({ success: true, data: province });
};

const getDishesByProvince = (req, res) => {
  const id = req.params.id.toLowerCase();
  const province = provinces.find(p => String(p.id) === id || p.name.toLowerCase() === id);
  if (!province) return res.status(404).json({ success: false, message: "Province not found" });
  const results = dishes.filter(d => d.province.toLowerCase() === province.name.toLowerCase());
  res.json({ success: true, province: province.name, count: results.length, data: results });
};

module.exports = { getAll, getById, getDishesByProvince };

