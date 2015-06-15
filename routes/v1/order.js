var service = require('../../services/orderservice');

module.exports = function(router) {
	router.route('/order/:id').get(service.index);
	router.route('/order').post(service.create);
}