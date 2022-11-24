let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// for authentication
let passport = require("passport");

// connect to our survey model
// let Survey = require("../models/survey");

let surveyController = require("../controllers/survey");

// helper function for guard purposes

function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

/* GET Route for the survey List page - READ Operation */
router.get("/surveylist", requireAuth,  surveyController.displaysurveyList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/template1", requireAuth, surveyController.template1page);

/* POST Route for processing the Add page - CREATE Operation */
router.post("/template1",  requireAuth, surveyController.template1processpage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get("/surveylist/edit/:id", requireAuth, surveyController.displayeditpage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post("/surveylist/edit/:id", requireAuth, surveyController.processingeditpage);

/* GET to perform  Deletion - DELETE Operation */
router.get("/surveylist/delete/:id", requireAuth, surveyController.deletepage);

module.exports = router;
