var controller = {};

controller.index = function(req, res, next) {
  res.json({ message: 'List containing all orders from controller' });
};

module.exports = function(router) {
	router.route('/order').get(controller.index);
}