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
  res.render('index', { title: 'Templates' });
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

router.get('/template1', function(req, res, next) {
  res.render('index', { title: 'Template 1' });
});

router.get('/template2', function(req, res, next) {
  res.render('index', { title: 'Template 2' });
});

module.exports = router;
