var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hai called");
  res.render('index', { title: 'saroj' });
});

module.exports = router;
