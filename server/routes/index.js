let express = require('express');
let router = express.Router();

let indexController = require("../controllers/index");

/* GET home page. */

router.get("/", indexController.displayHomepage);

/* GET home page. */

router.get("/home", indexController.displayHomepage);

/* GET templates page. */

router.get("/templates", indexController.displaytemplatespage);

/* GET pricing page. */

router.get("/pricing", indexController.displaypricingpage);


/* GET Route for displaying the Login page */
router.get("/login", indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post("/login", indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get("/register", indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post("/register", indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get("/logout", indexController.performLogout);



/* GET previous surveys page. */

// router.get("/surveylist", indexController.displaysurveyListpage);

// router.get('/surveylist', function(req, res, next) {
//   res.render('index', { title: 'SurveyList' });
// });

/* GET template1 page */

// router.get('/template1', function(req, res, next) {
//   res.render('index', { title: 'Template 1' });
// });

/* GET template2 page */

// router.get('/template2', function(req, res, next) {
//   res.render('index', { title: 'Template 2' });
// });

module.exports = router;
