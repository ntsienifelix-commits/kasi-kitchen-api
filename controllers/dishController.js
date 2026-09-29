const dishes = require('../data/dishes');

exports.getAllDishes = (req, res) => {
  res.json(dishes);
};

exports.getDishByProvince = (req, res) => {
  const province = req.params.province;
  const filtered = dishes.filter(d => d.province === province);
  res.json(filtered);
};

// also add these for compatibility
exports.getDishes = exports.getAllDishes;
exports.getDishById = (req, res) => {
  const dish = dishes.find(d => d.id == req.params.id);
  if(!dish) return res.status(404).json({msg: 'Dish not found'});
  res.json(dish);
};