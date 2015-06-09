var controller = require('../controllers/orderscontroller');

module.exports = function(router) {
	router.route('/orders').get(controller.index);
}