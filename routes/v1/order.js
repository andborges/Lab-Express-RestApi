var controller = {};

controller.index = function(req, res, next) {
  	res.json({ id: req.params.id });
};

controller.create = function(req, res, next) {
	res.status(201);
  	res.json({ id: 555, number: req.body.number, amount: req.body.amount });
};

module.exports = function(router) {
	router.route('/order/:id').get(controller.index);
	router.route('/order').post(controller.create);
}