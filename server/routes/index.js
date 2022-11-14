let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET templates page. */
router.get('/templates', function(req, res, next) {
  res.render('template', { title: 'Templates' });
});

/* GET pricing page. */
router.get('/pricing', function(req, res, next) {
  res.render('index', { title: 'Pricing' });
});

/* GET previous surveys page. */
router.get('/previoussurveys', function(req, res, next) {
  res.render('index', { title: 'PreviousSurveys' });
});

/* GET create survey page. */
router.get('/createsurvey', function(req, res, next) {
  res.render('index', { title: 'CreateSurvey' });
});

module.exports = router;
