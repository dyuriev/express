var express = require('express');
var router = express.Router();


/* GET main page */
router.get('index.html', function(req, res, next) {
  res.render('index', {
    title: 'Hey'
  });
});

/* GET news page */
router.get('news', function(req, res, next) {
  res.render('news', {
    title: 'Hey',
  });
});


/* GET main page */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Hey'
  });
});


module.exports = router;
