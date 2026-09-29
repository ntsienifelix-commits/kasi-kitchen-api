const dishes = require('../data/dishes');

const getAllDishes = (req, res) => {
  let results = [...dishes];
  const { sort, limit } = req.query;

  if (sort) {
    results.sort((a, b) => {
      if (typeof a[sort] === 'string') {
        return a[sort].localeCompare(b[sort]);
      }
      return a[sort] - b[sort];
    });
  }
  if (limit) {
    results = results.slice(0, Number(limit));
  }
  res.json(results);
};

const getRandomDish = (req, res) => {
  const randomIndex = Math.floor(Math.random() * dishes.length);
  res.json(dishes[randomIndex]);
};

const getDishById = (req, res) => {
  const dish = dishes.find(d => d.id === parseInt(req.params.id));
  if (!dish) {
    return res.status(404).json({ error: `Dish with id ${req.params.id} not found` });
  }
  res.json(dish);
};

const getDishesByProvince = (req, res) => {
  const province = req.params.province.toLowerCase();
  const filtered = dishes.filter(d => d.province.toLowerCase() === province);
  if (filtered.length === 0) {
    return res.status(404).json({ error: `No dishes found for province '${req.params.province}'` });
  }
  res.json(filtered);
};

module.exports = { getAllDishes, getRandomDish, getDishById, getDishesByProvince };