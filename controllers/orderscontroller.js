var controller = {};

controller.index = function(req, res, next) {
  res.json({ message: 'List containing all orders from controller' });
};

module.exports = controller;