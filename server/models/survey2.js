let mongoose = require("mongoose");

let survey2 = mongoose.Schema(
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
    collection: "surveys2",
  }
);

module.exports = mongoose.model("survey2", survey2);