let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
const survey = require("../models/survey");
const survey1 = require("../models/survey1");
const survey2 = require("../models/survey2");
const survey3 = require("../models/survey3");


// for template 1
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
  
// for template 2

  module.exports.displaysurvey1List = (req, res, next) => {
    survey1.find((err, survey_List1) => {
      if (err) {
        return console.error(err);
      } else {
        //console.log(survey_List);
  
        res.render("surveys/list1", {
          title: "Survey List",
          Survey_List1: survey_List1,
          displayName: req.user ? req.user.displayName : "",
        });
        //render list.ejs and pass title and Survey_list variable we are passing survey_List object to Survey_list property
      }
    });
  };
  
  // for template3

  module.exports.displaysurvey2List = (req, res, next) => {
    survey2.find((err, survey_List2) => {
      if (err) {
        return console.error(err);
      } else {
        //console.log(survey_List);
  
        res.render("surveys/list2", {
          title: "Survey List",
          Survey_List2: survey_List2,
          displayName: req.user ? req.user.displayName : "",
        });
        //render list.ejs and pass title and Survey_list variable we are passing survey_List object to Survey_list property
      }
    });
  };
  
  // for template4
  module.exports.displaysurvey3List = (req, res, next) => {
    survey3.find((err, survey_List3) => {
      if (err) {
        return console.error(err);
      } else {
        //console.log(survey_List);
  
        res.render("surveys/list", {
          title: "Survey List",
          Survey_List3: survey_List3,
          displayName: req.user ? req.user.displayName : "",
        });
        //render list.ejs and pass title and Survey_list variable we are passing survey_List object to Survey_list property
      }
    });
  };
  
  // for template 1
module.exports.template1page = (req, res, next) =>{
  res.render("surveys/template1", {
    title:"Nespresso - Customer Satisfaction Survey",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.template1processpage = (req, res, next) =>{
  let newsurvey = survey({
    surveyType: req.body.surveyType,
    answer1: req.body.question0,
    answer2: req.body.question1,
    answer3: req.body.question2,
    answer4: req.body.question3,
    answer5: req.body.question4,
    answer6: req.body.question5,
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

// for template2
module.exports.template2page = (req, res, next) =>{
  res.render("surveys/template2", {
    title:"Customer Satisfaction Survey - Ardene",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.template2processpage = (req, res, next) =>{
  let newsurvey1 = survey1({
    surveyType: req.body.surveyType,
    answer1: req.body.question0,
    answer2: req.body.question1,
    answer3: req.body.question2,
    answer4: req.body.question3,
    answer5: req.body.question4,
    answer6: req.body.question5,
  });

  survey1.create(newsurvey1, (err, survey1)=>{
    if (err){
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/surveylist1");
    }
  });
};

// for template3
module.exports.template3page = (req, res, next) =>{
  res.render("surveys/template3", {
    title:"Student survey",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.template3processpage = (req, res, next) =>{
  let newsurvey2 = survey2({
    surveyType: req.body.surveyType,
    answer1: req.body.question0,
    answer2: req.body.question1,
    answer3: req.body.question2,
    answer4: req.body.question3,
    answer5: req.body.question4,
    answer6: req.body.question5,
  });

  survey2.create(newsurvey2, (err, survey2)=>{
    if (err){
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/surveylist2");
    }
  });
};

// for template4
module.exports.template4page = (req, res, next) =>{
  res.render("surveys/template4", {
    title:"dddd - Customer Satisfaction Survey",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.template4processpage = (req, res, next) =>{
  let newsurvey3 = survey3({
    surveyType: req.body.surveyType,
    answer1: req.body.question0,
    answer2: req.body.question1,
    answer3: req.body.question2,
    answer4: req.body.question3,
    answer5: req.body.question4,
    answer6: req.body.question5,
  });

  survey3.create(newsurvey3, (err, survey3)=>{
    if (err){
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/surveylist3");
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
  
  // for template 1
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
      answer6: req.body.question6,
      
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

  // for template 2
  module.exports.displayeditpage1 = (req, res, next) => {
    let id = req.params.id; //id of actual object
  
    survey1.findById(id, (err, survey_edit1) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //show the edit view
        res.render("surveys/edit1", {
          title: "Edit surveys",
          survey1: survey_edit1,
          displayName: req.user ? req.user.displayName : "",
        });
      }
    });
  };
  
  module.exports.processingeditpage1 = (req, res, next) => {
    let id = req.params.id; //id of actual object
  
    let updatesurvey1 = survey1({
      _id: id,
      surveyType: req.body.surveyType,
      answer1: req.body.question1,
      answer2: req.body.question2,
      answer3: req.body.question3,
      answer4: req.body.question4,
      answer5: req.body.question5,
      answer6: req.body.question6,
      
    });
    survey1.updateOne({ _id: id }, updatesurvey1, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh the survey page
        res.redirect("/surveylist1");
      }
    });
  };
  
  module.exports.deletepage1 = (req, res, next) => {
    let id = req.params.id;
    survey1.remove({ _id: id }, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh the survey page
        res.redirect("/surveylist1");
      }
    });
  }; 

  // template3 

  module.exports.displayeditpage2 = (req, res, next) => {
    let id = req.params.id; //id of actual object
  
    survey2.findById(id, (err, survey_edit2) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //show the edit view
        res.render("surveys/edit2", {
          title: "Edit surveys",
          survey2: survey_edit2,
          displayName: req.user ? req.user.displayName : "",
        });
      }
    });
  };
  
  module.exports.processingeditpage2 = (req, res, next) => {
    let id = req.params.id; //id of actual object
  
    let updatesurvey2 = survey2({
      _id: id,
      surveyType: req.body.surveyType,
      answer1: req.body.question0,
      answer2: req.body.question1,
      answer3: req.body.question2,
      answer4: req.body.question3,
      answer5: req.body.question4,
      answer6: req.body.question5,
    });
    survey2.updateOne({ _id: id }, updatesurvey2, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh the survey page
        res.redirect("/surveylist2");
      }
    });
  };
  
  module.exports.deletepage2 = (req, res, next) => {
    let id = req.params.id;
    survey2.remove({ _id: id }, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh the survey page
        res.redirect("/surveylist2");
      }
    });
  }; 

  // template 4

  module.exports.displayeditpage3 = (req, res, next) => {
    let id = req.params.id; //id of actual object
  
    survey3.findById(id, (err, survey_edit3) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //show the edit view
        res.render("surveys/edit3", {
          title: "Edit surveys",
          survey3: survey_edit3,
          displayName: req.user ? req.user.displayName : "",
        });
      }
    });
  };
  
  module.exports.processingeditpage3 = (req, res, next) => {
    let id = req.params.id; //id of actual object
  
    let updatesurvey3 = survey3({
      _id: id,
      surveyType: req.body.surveyType,
      answer1: req.body.question1,
      answer2: req.body.question2,
      answer3: req.body.question3,
      answer4: req.body.question4,
      answer5: req.body.question5,
      answer6: req.body.question6,
    });
    survey3.updateOne({ _id: id }, updatesurvey3, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh the survey page
        res.redirect("/surveylist3");
      }
    });
  };
  
  module.exports.deletepage3 = (req, res, next) => {
    let id = req.params.id;
    survey3.remove({ _id: id }, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh the survey page
        res.redirect("/surveylist3");
      }
    });
  }; 
