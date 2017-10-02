var express = require('express');
var router = express.Router();

var titleMessage = `Assignment #1 - Programming with sets
Discrete Mathematics`
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: titleMessage });
});

module.exports = router;
