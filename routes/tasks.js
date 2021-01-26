var express = require('express');
var router = express.Router();
const {tasks, tasksMap } = require('../data/tasks');
const { driversMap } = require('../data/drivers');


/* GET tasks listing. */
router.get('/', function(req, res, next) {
  res.send(tasks);
});

router.put('/:taskId/assign', function(req, res, next) {
  const driverId = req.query.driverId;
  const taskId = req.params.taskId;
  if (!driverId) {
    res.status(500).send("Misssing 'driverId' query param");
  }
  if (!driversMap[driverId]) {
    res.status(500).send("Driver id couldn't be found");
  }
  // req.params
  tasksMap[taskId].assignTo = driverId;
  res.send('assign succeeded');
});

module.exports = router;
