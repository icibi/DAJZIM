let mongoose = require("mongoose");


let survey3 = mongoose.Schema(
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
    collection: "surveys3",
  }
);

module.exports = mongoose.model("survey3", survey3);