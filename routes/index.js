var express = require('express');
var router = express.Router();

require('./main.js')(router);
require('./orders.js')(router);

module.exports = router;