exports.findById = (arr, id) => arr.find(d => d.id === Number(id));
exports.filterByProvince = (arr, prov) => arr.filter(d => d.province.toLowerCase() === prov.toLowerCase());