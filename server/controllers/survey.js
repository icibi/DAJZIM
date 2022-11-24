let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
const survey = require("../models/survey");

module.exports.displaysurveyList = (req, res, next) => {
    survey.find((err, survey_List) => {
      if (err) {
        return console.error(err);
      } else {
        //console.log(survey_List);
  
        res.render("surveys/list", {
          title: "Survey List",
          Survey_List: survey_List,
          displayName: req.user ? req.user.displayName : "",
        });
        //render list.ejs and pass title and Survey_list variable we are passing survey_List object to Survey_list property
      }
    });
  };
  

module.exports.template1page = (req, res, next) =>{
  res.render("surveys/template1", {
    title:"Nespresso - Customer Satisfaction Survey",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.template1processpage = (req, res, next) =>{
  let newsurvey = survey({
    surveyType: req.body.surveyType,
    answer1: req.body.question1,
    answer2: req.body.question2,
    answer3: req.body.question3,
    answer4: req.body.question4,
    answer5: req.body.question5,
  });

  survey.create(newsurvey, (err, survey)=>{
    if (err){
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/surveylist");
    }
  });
};




  // module.exports.addpage = (req, res, next) => {
  //   res.render("surveys/add", {
  //     title: "Create Survey",
  //     displayName: req.user ? req.user.displayName : "",
  //   });
  // };

  // module.exports.addprocesspage = (req, res, next) => {
  //   let newsurvey = survey({

  //   surveyType: req.body.surveyType,
  //   answer1: req.body.answer1,
  //   answer2: req.body.answer2,
  //   answer3: req.body.answer3,
  //   answer4: req.body.answer4,
  //   answer5: req.body.answer5,
  //   });
  //   survey.create(newsurvey, (err, survey) => {
  //     if (err) {
  //       console.log(err);
  //       res.end(err);
  //     } else {
  //       // refresh the survey list
  //       res.redirect("/template1");
  //     }
  //   });
  // };
  
  module.exports.displayeditpage = (req, res, next) => {
    let id = req.params.id; //id of actual object
  
    survey.findById(id, (err, survey_edit) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //show the edit view
        res.render("surveys/edit", {
          title: "Edit surveys",
          survey: survey_edit,
          displayName: req.user ? req.user.displayName : "",
        });
      }
    });
  };
  
  module.exports.processingeditpage = (req, res, next) => {
    let id = req.params.id; //id of actual object
  
    let updatesurvey = survey({
      _id: id,
      surveyType: req.body.surveyType,
      answer1: req.body.question1,
      answer2: req.body.question2,
      answer3: req.body.question3,
      answer4: req.body.question4,
      answer5: req.body.question5,
      
    });
    survey.updateOne({ _id: id }, updatesurvey, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh the survey page
        res.redirect("/surveylist");
      }
    });
  };
  
  module.exports.deletepage = (req, res, next) => {
    let id = req.params.id;
    survey.remove({ _id: id }, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh the survey page
        res.redirect("/surveylist");
      }
    });
  }; 