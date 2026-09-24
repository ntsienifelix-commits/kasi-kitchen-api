const dishes = require('../data/dishes');

const getAbout = (req, res) => {
	res.json({
		success: true,
		project: 'Kasi Kitchen API',
		description: 'A REST API for South African dishes and provinces.',
		version: '1.0.0'
	});
};

const getAllDishes = (req, res) => {
	const search = String(req.query.search || '').trim().toLowerCase();
	const sort = String(req.query.sort || '').toLowerCase();
	const minPrice = req.query.minPrice === undefined ? null : Number(req.query.minPrice);
	const maxPrice = req.query.maxPrice === undefined ? null : Number(req.query.maxPrice);
	const page = req.query.page === undefined ? 1 : Number(req.query.page);
	const limit = req.query.limit === undefined ? 10 : Number(req.query.limit);

	if (
		(minPrice !== null && (!Number.isFinite(minPrice) || minPrice < 0)) ||
		(maxPrice !== null && (!Number.isFinite(maxPrice) || maxPrice < 0)) ||
		(minPrice !== null && maxPrice !== null && minPrice > maxPrice) ||
		(!Number.isInteger(page) || page < 1) ||
		(!Number.isInteger(limit) || limit < 1 || limit > 100) ||
		!['', 'price', 'price_asc', 'price_desc'].includes(sort)
	) {
		return res.status(400).json({
			success: false,
			message: 'Invalid filters. Use non-negative prices, page >= 1, limit 1-100, and sort=price or sort=price_desc.'
		});
	}

	let filteredDishes = dishes.filter(dish => {
		const matchesSearch = !search || dish.name.toLowerCase().includes(search);
		const matchesMinPrice = minPrice === null || dish.price >= minPrice;
		const matchesMaxPrice = maxPrice === null || dish.price <= maxPrice;
		return matchesSearch && matchesMinPrice && matchesMaxPrice;
	});

	if (sort === 'price' || sort === 'price_asc') {
		filteredDishes.sort((firstDish, secondDish) => firstDish.price - secondDish.price);
	}

	if (sort === 'price_desc') {
		filteredDishes.sort((firstDish, secondDish) => secondDish.price - firstDish.price);
	}

	const total = filteredDishes.length;
	const startIndex = (page - 1) * limit;
	const paginatedDishes = filteredDishes.slice(startIndex, startIndex + limit);

	res.json({
		success: true,
		count: paginatedDishes.length,
		total,
		page,
		limit,
		totalPages: Math.ceil(total / limit),
		data: paginatedDishes
	});
};

const getRandomDish = (req, res) => {
	const dish = dishes[Math.floor(Math.random() * dishes.length)];
	res.json({ success: true, data: dish });
};

const getDishById = (req, res) => {
	const dish = dishes.find(item => item.id === Number(req.params.id));
	if (!dish) {
		return res.status(404).json({ success: false, message: 'Dish not found' });
	}
	res.json({ success: true, data: dish });
};

const getByProvince = (req, res) => {
	const province = req.params.province.toLowerCase();
	const results = dishes.filter(dish => dish.province.toLowerCase() === province);
	if (results.length === 0) {
		return res.status(404).json({ success: false, message: 'No dishes found for this province' });
	}
	res.json({ success: true, province: req.params.province, count: results.length, data: results });
};

module.exports = { getAbout, getAllDishes, getRandomDish, getDishById, getByProvince };
