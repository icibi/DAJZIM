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


/* link to /template1/login */
/* GET Route for displaying the Login page */
router.get("/template1/login", indexController.displayLoginPage);
/* POST Route for processing the Login page */
router.post("/template1/login", indexController.processLoginPageToTemp1);


/* link to /template2/login */
/* GET Route for displaying the Login page */
router.get("/template2/login", indexController.displayLoginPage);
/* POST Route for processing the Login page */
router.post("/template2/login", indexController.processLoginPageToTemp2);

/* link to /template3/login */
/* GET Route for displaying the Login page */
router.get("/template3/login", indexController.displayLoginPage);
/* POST Route for processing the Login page */
router.post("/template3/login", indexController.processLoginPageToTemp3);


/* link to /template4/login */
/* GET Route for displaying the Login page */
router.get("/template4/login", indexController.displayLoginPage);
/* POST Route for processing the Login page */
router.post("/template4/login", indexController.processLoginPageToTemp4);

/* link to /surveylist/login */
/* GET Route for displaying the Login page */
router.get("/surveylist/login", indexController.displayLoginPage);
/* POST Route for processing the Login page */
router.post("/surveylist/login", indexController.processLoginPageToSurveyList);

/* link to /surveylist1/login */
/* GET Route for displaying the Login page */
router.get("/surveylist1/login", indexController.displayLoginPage);
/* POST Route for processing the Login page */
router.post("/surveylist1/login", indexController.processLoginPageToSurveyList1);

/* link to /surveylist2/login */
/* GET Route for displaying the Login page */
router.get("/surveylist2/login", indexController.displayLoginPage);
/* POST Route for processing the Login page */
router.post("/surveylist2/login", indexController.processLoginPageToSurveyList2);

/* link to /surveylist3/login */
/* GET Route for displaying the Login page */
router.get("/surveylist3/login", indexController.displayLoginPage);
/* POST Route for processing the Login page */
router.post("/surveylist3/login", indexController.processLoginPageToSurveyList3);


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
