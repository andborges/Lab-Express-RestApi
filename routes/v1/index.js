var express = require('express');
var router = express.Router();

require('./main.js')(router);
require('./order.js')(router);

module.exports = router;