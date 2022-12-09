let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// for authentication
let passport = require("passport");

// connect to our survey model
// let Survey = require("../models/survey");

let surveyController = require("../controllers/survey");

// helper function for guard purposes

/* For template1 and surveylist */

function requireAuthS1(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/surveylist/login");
  }
  next();
}
/* For template2 and surveylist1 */

function requireAuthS2(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/surveylist1/login");
  }
  next();
}
/* For template3 and surveylist2 */
function requireAuthS3(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/surveylist2/login");
  }
  next();
}
/* For template4 and surveylist3 */

function requireAuthS4(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/surveylist3/login");
  }
  next();
}

// for template1

/* GET Route for the survey List page - READ Operation */
router.get("/surveylist", requireAuthS1,  surveyController.displaysurveyList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/template1", surveyController.template1page);

/* POST Route for processing the Add page - CREATE Operation */
router.post("/template1", surveyController.template1processpage);


/* GET Route for displaying the Edit page - UPDATE Operation */
router.get("/surveylist/edit/:id", requireAuthS1, surveyController.displayeditpage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post("/surveylist/edit/:id", requireAuthS1, surveyController.processingeditpage);

/* GET to perform  Deletion - DELETE Operation */
router.get("/surveylist/delete/:id", requireAuthS1, surveyController.deletepage);



// template 2

/* GET Route for the survey List page - READ Operation */
router.get("/surveylist1", requireAuthS2,  surveyController.displaysurvey1List);

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/template2", surveyController.template2page);
/* POST Route for processing the Add page - CREATE Operation */
router.post("/template2",  surveyController.template2processpage);

/* GET Route for displaying the Edit page for template2- UPDATE Operation */
router.get("/surveylist1/edit1/:id", requireAuthS2, surveyController.displayeditpage1);

/* POST Route for processing the Edit page for template2- UPDATE Operation */
router.post("/surveylist1/edit1/:id", requireAuthS2, surveyController.processingeditpage1);

/* GET to perform  Deletion for template2 - DELETE Operation */
router.get("/surveylist1/delete/:id", requireAuthS2, surveyController.deletepage1);


// template 3 

/* GET Route for the survey List page - READ Operation */
router.get("/surveylist2", requireAuthS3,  surveyController.displaysurvey2List);

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/template3", surveyController.template3page);
/* POST Route for processing the Add page - CREATE Operation */
router.post("/template3", surveyController.template3processpage);
/* GET Route for displaying the Edit page for template2- UPDATE Operation */
router.get("/surveylist2/edit2/:id", requireAuthS3, surveyController.displayeditpage2);

/* POST Route for processing the Edit page for template2- UPDATE Operation */
router.post("/surveylist2/edit2/:id", requireAuthS3, surveyController.processingeditpage2);

/* GET to perform  Deletion for template2 - DELETE Operation */
router.get("/surveylist2/delete/:id", requireAuthS3, surveyController.deletepage2);


// template 4

/* GET Route for the survey List page - READ Operation */
router.get("/surveylist3", requireAuthS4,  surveyController.displaysurvey3List);

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/template4", surveyController.template4page);

/* POST Route for processing the Add page - CREATE Operation */
router.post("/template4", surveyController.template4processpage);
/* GET Route for displaying the Edit page for template2- UPDATE Operation */
router.get("/surveylist3/edit/:id", requireAuthS4, surveyController.displayeditpage3);

/* POST Route for processing the Edit page for template2- UPDATE Operation */
router.post("/surveylist3/edit/:id", requireAuthS4, surveyController.processingeditpage3);

/* GET to perform  Deletion for template2 - DELETE Operation */
router.get("/surveylist3/delete/:id", requireAuthS4, surveyController.deletepage3);


module.exports = router;
