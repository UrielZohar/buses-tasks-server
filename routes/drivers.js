var express = require('express');
var router = express.Router();
const { drivers } = require('../data/drivers');

/* GET drivers listing. */
router.get('/', function(req, res, next) {
  res.send(drivers);
});


module.exports = router;
