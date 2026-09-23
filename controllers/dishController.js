const dishes = require('../data/dishes');
const { findById, filterByProvince } = require('../utils/helpers');

exports.getAllDishes = (req, res) => {
  let result = [...dishes];
  const { search, sort, limit } = req.query;
  if (search) result = result.filter(d => d.name.toLowerCase().includes(search.toLowerCase()));
  if (sort === 'price') result.sort((a,b) => a.price - b.price);
  if (limit) {
    if (isNaN(Number(limit))) return res.status(400).json({ error: 'limit must be a number' });
    result = result.slice(0, Number(limit));
  }
  res.json(result);
};
exports.getRandomDish = (req, res) => res.json(dishes[Math.floor(Math.random() * dishes.length)]);
exports.getDishById = (req, res) => {
  const dish = findById(dishes, req.params.id);
  if (!dish) return res.status(404).json({ error: `Dish ${req.params.id} not found` });
  res.json(dish);
};
exports.getByProvince = (req, res) => {
  const filtered = filterByProvince(dishes, req.params.province);
  if (!filtered.length) return res.status(404).json({ error: 'No dishes', availableProvinces: [...new Set(dishes.map(d=>d.province))] });
  res.json(filtered);
};
exports.getAbout = (req, res) => res.json({ project: "Kasi Kitchen API", developers: ["Person A - Core Logic", "Person B - Platform"] });