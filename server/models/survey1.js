let mongoose = require("mongoose");


let survey1 = mongoose.Schema(
  {
    surveyType: String,
    answer1: String,
    answer2: String,
    answer3: String,
    answer4: String,
    answer5: String,
    answer6: String,
  },
  {
    collection: "surveys1",
  }
);

module.exports = mongoose.model("survey1", survey1);