var express = require('express');
var router = express.Router();


/* GET main page */
router.get('/index.html', function(req, res, next) {
  res.render('index', {
    title: 'Главная',
    menuactive: 'menu-main'
  });
});

/* GET news page */
router.get('/news.html', function(req, res, next) {
  res.render('news', {
    title: 'Новости',
    menuactive: 'menu-news'
  });
});

/* GET contacts page */
router.get('/contacts.html', function(req, res, next) {
  res.render('contacts', {
    title: 'Контакты',
    menuactive: 'menu-contacts'
  });
});


/* GET main page */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Главная',
    menuactive: 'menu-main'
  });
});


module.exports = router;
