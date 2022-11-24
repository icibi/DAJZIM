let mongoose = require("mongoose");

// create a model class
let survey = mongoose.Schema(
  {
    surveyType: String,
    answer1: String,
    answer2: String,
    answer3: String,
    answer4: String,
    answer5: String 
  },
  {
    collection: "surveys",
  }
);

module.exports = mongoose.model("survey", survey);