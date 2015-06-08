var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ message: 'Version: 0.0.1' });
});

router.route('/orders').get(function(req, res, next) {
  res.json({ message: 'List containing all orders' });
});

module.exports = router;