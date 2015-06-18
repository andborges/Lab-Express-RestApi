var service = {};

service.index = function(req, res) {
  res.json({ id: req.params.id });
};

service.create = function(req, res) {
	res.status(201);
  res.json({ id: 555, number: req.body.number, amount: req.body.amount });
};

module.exports = service;